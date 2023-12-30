'use client'
import { useRouter } from "next/navigation";
import Image from "next/image";
export default function AuthNav() {
  const router = useRouter();
  return (
    <nav className="absolute">
      <div className="p-2" onClick={()=>router.back()}>
        <Image height={24} width={24} src={"/icons/backarrow.svg"} />
      </div>
    </nav>
  );
}
