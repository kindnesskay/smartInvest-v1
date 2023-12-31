"use client";
import { AppContext } from "@/context/AppContext";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
export default function Hero() {
  const { user } = useContext(AppContext);

  return (
    <div className="w-full flex flex-col gap-1 p-2 items-center pb-8 h-full justify-center"  style={{backgroundImage:"url('/assets/banner.jpg')",backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
      <div className="w-full flex flex-col gap-8 items-center  backdrop-blur-sm">
        <h2 className="w-full text-center font-bold text-3xl text-blue-950 ">
          Transform Your Finances
        </h2>
        <p className="font-semibold  max-w-sm w-full text-center text-xl font-mono text-black">
          Start yout journey towards wealth-building today
        </p>
        <Link
          href={user ? "/dashboard" : "/sign-up"}
          className="text-center p-4 font-bold bg-blue-700 max-w-sm text-white  border-blue-950 rounded-lg"
        >
          GET STARTED
        </Link>
      </div>
    </div>
  );
}
