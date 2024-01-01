"use client";
import React, { useContext, useEffect, useState } from "react";
import Transaction from "./Transaction";
import { collection, getDocs } from "firebase/firestore";
import { database } from "@/config/firebase";
import { AppContext } from "@/context/AppContext";

function Transactions() {
  const [tranasctions, setTransactions] = useState([]);
  const { user } = useContext(AppContext);
  async function fetchTransaction() {
    try {
      let tranasctionArray=[]
      const collectionRef = collection(
        database,
        `users/${user.uid}/transactions`
      );
      const data = await getDocs(collectionRef);
      
      data.forEach((item) => {
        tranasctionArray.push({ id: item.id, ...item.data() });
      });
      console.log(tranasctionArray);
      setTransactions(tranasctionArray)
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(()=>{
    fetchTransaction()
  },[])
  return (

    <div className="w-full pt-2 pb-4 ">
      <p className="text-gray-400 mb-2 px-2 text-sm font-semibold">
        Transactions
      </p>
      {tranasctions.length > 0 &&
        tranasctions.map((transaction) => {
          return (
            <Transaction
              key={transaction.id}
              amount={transaction.amount}
              status={transaction.status}
              type={transaction.message}
              date={transaction.date}
            />
          );
        })}
    </div>
  );
}

export default Transactions;
