import { sidebarLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Logout from "../Logout";

export default function MenuDrawer() {
  const [menuState, setMenuSate] = useState(false);
  return (
    <div className="w-fit">
      <div onClick={() => setMenuSate(true)}>
        <Image
          height={36}
          width={36}
          alt="menu"
          src={"/icons/menu.svg"}
          className="text-black"
        />
      </div>
      {menuState && (
        <div className="w-full backdrop-blur-sm h-full absolute top-0 left-0"></div>
      )}

      <ul
        className={`${
          !menuState
            ? "w-0 hidden"
            : "w-52  bg-white top-0 p-4 left-0 flex flex-col gap-2 absolute  z-20  h-screen"
        }`}
      >
        <div className="w-full flex p-2 justify-end">
          <div
            className="hover:bg-slate-100 rounded-lg p-2"
            onClick={() => setMenuSate(false)}
          >
            <Image
              height={24}
              width={24}
              alt={"close"}
              src={"/icons/close.svg"}
            />
          </div>
        </div>
        {sidebarLinks.map((link) => {
          return (
            <li
              onClick={() => setMenuSate(false)}
              key={link.label}
              className="flex gap-2 p-4 bg-blue-500 rounded-lg"
            >
              <Image
                height={24}
                width={24}
                alt={link.label}
                src={link.imgURL}
              />
              <Link
                href={link.route}
                className="font-bold font-mono text-white"
              >
                {link.label}
              </Link>
            </li>
          );
        })}
        <Logout />
      </ul>
    </div>
  );
}
