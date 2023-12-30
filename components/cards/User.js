'use client'
import Image from "next/image";

export default function User({image,name}) {
  return (
    <div className="flex p-2 w-full justify-between items-center ">
        <p className="text-md font-bold">Hi {name}</p>
        <div className="rounded-full overflow-hidden">
            <Image width={48} height={48} alt="profile image" src={image}/>
        </div>
    </div>
  )
}
