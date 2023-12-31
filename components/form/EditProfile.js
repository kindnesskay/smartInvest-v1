"use client";

import { database } from "@/config/firebase";
import { AppContext } from "@/context/AppContext";
import { doc, updateDoc } from "firebase/firestore";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import LoadingSpinner from "../Loader";
import { useRouter } from "next/navigation";

export default function EditProfile() {
  const { user, isLoading, setIsLoading } = useContext(AppContext);
  const [name, setName] = useState("");
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [status, setStatus] = useState(null);

  const handleDone = async () => {
    if (!name) return;
    setIsLoading(true);
    try {
      const userRef = doc(database, "users", user.uid);
      await updateDoc(userRef, {
        name: name,
      });
      setImage(null);
      setImageUrl(null);
      setName("");
      setIsLoading(false);
      setStatus(true);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
      setStatus(false);
    }finally{
      setTimeout(() => {
        setStatus(null)
      }, 2000);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);
  return (
    <>
      {isLoading && <LoadingSpinner />}
      {user !== null && (
        <div className="p-2">
          <div
            className={`h-8  flex absolute font-semibold items-center p-2 w-24 justify-center text-white rounded-lg ${
              status === true
                ? "bg-green-600"
                : status === false
                ? "bg-red-600"
                : "hidden"
            }`}
          >
            {status === true && <p>success</p>}
            {status === false && <p>failed</p>}
          </div>
          <p className="text-center font-semibold font-mono">Edit Profile</p>
          <div className="flex flex-col items-center gap-4 pt-4">
            <div className="overflow-hidden rounded-full h-fit w-fit relative">
              <Image
                height={60}
                width={60}
                alt="profile photo"
                src={imageUrl || "https://placekitten.com/100/100"}
              />
              <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  setImage(e.target.files[0]);
                  setImageUrl(URL.createObjectURL(e.target.files[0]));
                }}
                className="opacity-0 h-full w-full top-0 absolute"
              />
            </div>
            <div className="pl-2">
              <label className="pl-2 text-[12px] font-semibold text-gray-700">
                Name or nickname
              </label>
              <input
                onChange={(e) => setName(e.target.value)}
                type="text"
                name="name"
                value={name}
                className="w-full p-2 h-12 rounded-lg bg-slate-200"
              />
              <button
                onClick={handleDone}
                className="pl-2 font-bold font-mono hover:text-blue-700"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
      {!user && !isLoading && (
        <p className="text-center font-semibold mt-12">You are not logged it</p>
      )}
    </>
  );
}
