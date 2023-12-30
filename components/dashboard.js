"use client";
import React, { useContext, useEffect, useState } from "react";
import Assets from "./cards/assets";
import AccountActions from "./cards/AccountActions";
import Transactions from "./cards/transactions";
import User from "./cards/User";
import { AppContext } from "@/context/AppContext";
import { useRouter } from "next/navigation";
import { getDoc, doc } from "firebase/firestore";
import { database } from "@/config/firebase";
import Logout from "./Logout";

const transactionData = [
  { id: 1, amount: 1000, type: "Withdrawal", date: "oct 24", status: "failed" },
  { id: 2, amount: 2000, type: "Withdrawal", date: "nov 14", status: "failed" },
  { id: 3, amount: 3000, type: "Withdrawal", date: "jan 4", status: "failed" },
  {
    id: 4,
    amount: 10000,
    type: "Deposite",
    date: "oct 22",
    status: "Approved",
  },
  { id: 5, amount: 2000, type: "Deposite", date: "oct 20", status: "Approved" },
];
export default function Dashboard() {
  const { user } = useContext(AppContext);
  const [userData, setUserData] = useState({});
  const router = useRouter();
  useEffect(() => {
    if (!user) return;
    async function getUserData() {
      try {
        const docRef = doc(database, "users", user.uid);
        const data = await getDoc(docRef);
        setUserData(data.data());
      } catch (error) {
        console.error(error);
      }
    }
    getUserData();
  }, [user]);
  
  return (
    <>
      {user ? (
        <div className="w-full px-2">
          <User
            name={userData?.name || ""}
            image={"https://placekitten.com/100/100"}
          />
          <Assets
            balance={userData?.balance || 0}
            profit={100}
            percentage={10}
          />
          <AccountActions />
          <Transactions transactions={transactionData} />
        </div>
      ) : (
        <p></p>
      )}
    </>
  );
}
