"use client";
import Link from "next/link";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Auth } from "@/config/firebase";
import { useRouter } from "next/navigation";
import { AppContext } from "@/context/AppContext";
import { useState, useEffect, useContext } from "react";
import Image from "next/image";
function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const { user } = useContext(AppContext);
  const router=useRouter()
  useEffect(() => {
    if (user !== null) {
    }
  }, []);
  const handleSignIn = async (e) => {
    e.preventDefault();
    if (user) return;
    if (!email) return setEmailError("Please Enter Email");
    setEmailError("");
    if (!password) return setPasswordError("Please Enter Password");
    setPasswordError("");

    await signInWithEmailAndPassword(Auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        router.push('/dashboard')
        
      })
      .catch((error) => console.log(error.code, error.message));
  };
  return (
    <section className="flex flex-col lg:flex-row justify-center items-center w-full p-4 h-screen">
      <div className="flex w-32 h-32 lg:h-full justify-center lg:w-1/2 ">
        <Image
          height={500}
          width={500}
          alt="loginbanner"
          src={"/assets/auth_banner.jpg"}
          priority
          className="w-auto h-auto max-w-full"
        />
      </div>
      <form className="flex flex-col justify-around max-w-sm  w-full gap-2 pt-2 lg:w-1/2">
        <h4 className="text-center text-2xl font-semibold">Welcome Back</h4>
        <p className="w-full text-center  text-gray-400">
          Hello there , login to continue
        </p>
        <label htmlFor="email" className="text-md font-semibold ">
          Email
        </label>
        <input
          name="email"
          className="w-full text-center h-12 text-xl text-gray-700 text-md rounded-2xl border border-solid border-gray-400 p-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <span>{emailError}</span>
        <label htmlFor="password" className="text-md font-semibold">
          Password
        </label>
        <input
          className="text-center w-full text-gray-700 h-12  text-xl text-md rounded-2xl border border-solid border-gray-400 p-2"
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <span>{passwordError}</span>
        <button
          onClick={handleSignIn}
          className="bg-blue-700 text-white h-12 p-2 w-full rounded-2xl font-semibold text-xl"
        >
          LogIn
        </button>

        <p className="text-center text-md text-gray-400 font-mono">
          Dont have an account?
          <Link href="/sign-up" className="underline underline-offset-4">
            sign up
          </Link>
        </p>
      </form>
    </section>
  );
}

export default SignIn;
