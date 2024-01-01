'use client'
import { AppContext } from "@/context/AppContext";
import { useContext } from "react";
import Link from "next/link";
export default function AccountActions() {
  return (
    <div className="w-full flex h-12 gap-2 font-mono mt-4 text-white">
      <button className="w-1/2 h-full rounded-xl border border-solid text-blue-700 border-blue-700 hover:bg-blue-500 hover:text-white text-md font-bold">
        Withdraw
      </button>
      <Link href={'/fund-account'} className="w-1/2 h-full" >
      <button className="w-full h-full rounded-xl border border-solid text-blue-700 border-blue-700 hover:bg-blue-500 hover:text-white text-md font-bold" >
        Top Up
      </button>
      </Link>
    </div>
  );
}
