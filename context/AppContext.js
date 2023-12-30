'use client'
import { Auth } from "@/config/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
export const AppContext=createContext()


export function AppContextProvider({children}){
    const [user,setUser]=useState(null)

useEffect(()=>{
    onAuthStateChanged(Auth,(user)=>{
        setUser(user)
    })
},[user])



return(
    <AppContext.Provider value={{user,setUser}}>
        {children}
    </AppContext.Provider>
)

}