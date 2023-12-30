"use client";

import { Auth } from "@/config/firebase";
import { AppContext } from "@/context/AppContext";
import { signOut } from "firebase/auth";
import Link from "next/link";
import { useContext } from "react";

export default function Logout() {
  const { user, setUser } = useContext(AppContext);

  return (
    <div>
      {user ? (
        <button
          className="w-full h-12 rounded-lg font-bold text-blue-700 border border-solid border-blue-700 hover:text-white hover:bg-blue-400"
          onClick={() => {
            signOut(Auth);
            setUser(null);
          }}
        >
          Logout
        </button>
      ) : (
        <Link
          href={"/sign-in"}
          onClick={() => {
            signOut(Auth);
            setUser(null);
          }}
        >
          <button className="w-full h-12 rounded-lg font-bold text-blue-700 border border-solid border-blue-700 hover:text-white hover:bg-blue-400">
            Login
          </button>
        </Link>
      )}
    </div>
  );
}
