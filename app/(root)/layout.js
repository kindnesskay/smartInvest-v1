import { Inter } from "next/font/google";
import "../globals.css";
import { AppContextProvider } from "@/context/AppContext";
import NavBar from "@/components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "smart invest",
  description: "investment platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="flex justify-center">
      <body
        className={`${inter.className}  bg-slate-50 w-full h-screen  overflow-hidden max-w-4xl`}
      >
        <AppContextProvider>
            <NavBar />
          <main className="flex h-full ">
            <section className="w-full hidden md:flex max-w-[200px]"></section>
            <section className="w-full overflow-auto pb-12 h-full ">{children}</section>
            <section className="w-full  hidden lg:flex max-w-[200px]"></section>
          </main>
        </AppContextProvider>
      </body>
    </html>
  );
}
