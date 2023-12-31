"use client";
import { Auth } from "@/config/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { usePathname, useRouter } from "next/navigation";
import { createContext, useEffect, useState } from "react";
export const AppContext = createContext();

export function AppContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const pathname=usePathname()
  useEffect(() => {
    onAuthStateChanged(Auth, (user) => {
      setUser(user);
    });
  }, [user]);


  return (
    <AppContext.Provider value={{ user, setUser, isLoading, setIsLoading }}>
      {children}
    </AppContext.Provider>
  );
}
