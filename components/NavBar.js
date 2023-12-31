"use client";
import { useRouter } from "next/navigation";
import MenuDrawer from "./Drawer/MenuDrawer";
import Link from "next/link";
export default function NavBar() {
  const router = useRouter();
  const handleMenu = () => {};
  return (
    <nav className="w-full  z-40 p-2 h-16 bg-white absolute">
      <div className="flex justify-between">
        <MenuDrawer />
        <div className="w-full flex justify-center">
          <Link className="font-bold text-2xl" href={'/'}>Smart Invest </Link>
        </div>
      </div>
    </nav>
  );
}
