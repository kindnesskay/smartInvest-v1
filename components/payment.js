"use client";
import { database } from "@/config/firebase";
import { AppContext } from "@/context/AppContext";
import { collection, doc, getDoc, setDoc } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { PaystackButton } from "react-paystack";

const PaymentForm = () => {
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState("");
  const { user } = useContext(AppContext);
  const publicKey = process.env.NEXT_PUBLIC_PAYSTACK_KEY; // Replace with your actual public key
 

  const saveRecord = async (reference) => {
    try {
      const collectionRef = collection(
        database,
        `users/${user.uid}/transactions`
      );
      const docRef = doc(collectionRef, reference.trxref);
      await setDoc(docRef, {
        ...reference,email:email,amount:amount,date:new Date().toLocaleTimeString()
      });
    } catch (error) {
      console.error(error);
    }
  };
  const handlePaystackSuccessAction = (reference) => {
    // Handle successful payment
    saveRecord(reference);
  };
  
  const handlePaystackCloseAction = () => {
    // Handle payment close
    
  };

  const componentProps = {
    email,
    amount: amount * 100, // Paystack amount is in kobo
    publicKey,
    text: "Pay Now",
    onSuccess: handlePaystackSuccessAction,
    onClose: handlePaystackCloseAction,
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-6">Pay with Paystack</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600">Email</label>
        <input
          type="email"
          className="mt-1 p-2 border rounded-md w-full"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600">
          Amount (NGN)
        </label>
        <input
          type="number"
          className="mt-1 p-2 border rounded-md w-full"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <PaystackButton
        {...componentProps}
        className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-md h-12 p-4 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
      />
    </div>
  );
};

export default PaymentForm;
