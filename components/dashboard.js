"use client";
import React, { useContext, useEffect, useState } from "react";
import Assets from "./cards/assets";
import AccountActions from "./cards/AccountActions";
import Transactions from "./cards/transactions";
import User from "./cards/User";
import { AppContext } from "@/context/AppContext";
import { getDoc, doc } from "firebase/firestore";
import { database } from "@/config/firebase";
import LoadingSpinner from "./Loader";

export default function Dashboard() {
  const { user, isLoading, setIsLoading } = useContext(AppContext);
  const [userData, setUserData] = useState({});

  useEffect(() => {
    if (!user) {
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
      return;
    }
    async function getUserData() {
      try {
        const docRef = doc(database, "users", user.uid);
        const data = await getDoc(docRef);
        setUserData(data.data());
        setTimeout(() => {
          setIsLoading(false);
        }, 400);
      } catch (error) {
        console.error(error);
      }
    }
    getUserData();
  }, [user]);

  return (
    <>
      {isLoading && <LoadingSpinner />}

      {user && (
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
          <Transactions/>
        </div>
      )}
      {!user && !isLoading && <p className="text-center font-semibold mt-12">You are not logged it </p>}
    </>
  );
}
