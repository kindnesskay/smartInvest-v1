"use client";
import { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { Auth, database } from "@/config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";
import { AppContext } from "@/context/AppContext";
import Image from "next/image";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
function SignUp() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [verifyPwd, setVerfyPwd] = useState("");
  const [pwd_error, setPwdError] = useState("");
  const { user, setUser } = useContext(AppContext);
  useEffect(() => {
    if (user !== null) {
      router.push('/dashboard')
    }
  }, []);
  const createUserDoc=async(id)=>{
    const usersRef=collection(database,'users')

    try {
      const userDocRef=await setDoc(doc(usersRef,id),{
        name:"",
        email:email,
        join_date:new Date().toLocaleDateString(),
        transactions:"",
        _id:id,
        balance:0

      })
    } catch (error) {
      console.error(error);
    }
  }
  const handleSignUp = async (e) => {
    e.preventDefault();
    if (user) return;
    
    if (!email) return;
    if (!password) return setPwdError("Create a password");
    if (password !== verifyPwd) {
      setPwdError("Password do no match ");
      return;
    }
    setPwdError("");
    await createUserWithEmailAndPassword(Auth, email, password)
      .then(async (userCredential) => {
        const user = userCredential.user;
        await createUserDoc(user.uid)
        setUser(user);
        router.push('/dashboard')
      })
      .catch((error) => {
        console.log(error.code);
      });
  };
  return (
    <section className="p-2 flex flex-col justify-center items-center h-screen lg:flex-row">
        <div className="flex w-32 h-32 lg:h-full justify-center lg:w-1/2 ">
          <Image
            width={500}
            height={500}
            src={"/assets/auth_banner.jpg"}
            alt="authbanner"
            priority
            className="w-auto h-auto  max-w-full"
          />
        </div>
      <form className="flex flex-col justify-around max-w-sm  w-full gap-2 pt-2 lg:w-1/2">

        <label htmlFor="email" className="text-md font-semibold ">
          Email
        </label>
        <input
          name="email"
          className="text-center w-full text-gray-700 h-12  text-xl text-md rounded-2xl border border-solid border-gray-400 p-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password" className="text-md font-semibold ">
          Password
        </label>
        <input
          className="text-center w-full text-gray-700 h-12  text-xl text-md rounded-2xl border border-solid border-gray-400 p-2"
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label htmlFor="verifypassword" className="text-md font-semibold ">
          Verify password
        </label>
        <input
          className="text-center w-full text-gray-700 h-12  text-xl text-md rounded-2xl border border-solid border-gray-400 p-2"
          name="verifypassword"
          type="password"
          value={verifyPwd}
          onChange={(e) => setVerfyPwd(e.target.value)}
        />
        <span>{pwd_error}</span>

        <button
          onClick={handleSignUp}
          className="bg-blue-700 text-white h-12 p-2 w-full rounded-2xl font-semibold text-xl"
        >
          Sign up
        </button>
        <p className="text-center text-md text-gray-400 font-mono">
          Already have an Account?{" "}
          <Link href="/sign-in" className="underline underline-offset-4">
            Login
          </Link>
        </p>
      </form>
    </section>
  );
}
export default SignUp;
