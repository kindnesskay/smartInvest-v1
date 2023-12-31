"use client";

import { AppContext } from "@/context/AppContext";
import { useContext } from "react";
import LoadingSpinner from "./Loader";

export default function HandleLoader() {
  const { isLoading, setIsLoading } = useContext(AppContext);
  return <>{isLoading && <LoadingSpinner />}</>;
}
