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
    <html lang="en" className="flex justify-center h-svh">
      <AppContextProvider>
        <body
          className={`${inter.className} py-2 bg-slate-50 w-full h-full  overflow-hidden max-w-4xl`}
        >
          <header>
            <NavBar />
          </header>
          <main className="flex h-full  pt-16">
            <section className="w-full hidden md:flex max-w-[200px] h-full"></section>
            <section className="w-full h-full overflow-auto">
              {children}
            </section>
            <section className="w-full h-full hidden lg:flex max-w-[200px]"></section>
          </main>
        </body>
      </AppContextProvider>
    </html>
  );
}
