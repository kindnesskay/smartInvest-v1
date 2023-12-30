"use client";
import { AppContext } from "@/context/AppContext";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
export default function Hero() {
  const {user}=useContext(AppContext)
  return (
    <section className="w-full flex flex-col gap-1 p-2 items-center">
      <div>
        <Image
          width={400}
          height={400}
          src={"/assets/banner.jpg"}
          priority
          alt="hero banner"
        />
      </div>
      <h2 className="w-full text-center font-semibold text-2xl text-gray-600">
        {" "}
        Transform Your Finances{" "}
      </h2>
      <p className="font-semibold  max-w-sm w-full text-center font-mono text-gray-600">
        Start yout journey towards wealth-building today
      </p>
      <Link
        href={user?'/dashboard':"/sign-up"}
        className="p-4 text-center font-bold w-full max-w-sm text-white bg-blue-700 rounded-lg"
      >
        GET STARTED
      </Link>
    </section>
  );
}
