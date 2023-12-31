import { AppContextProvider } from "@/context/AppContext";
import "../globals.css";
import AuthNav from "@/components/AuthNav";
import HandleLoader from "@/components/HandleLoader";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AppContextProvider>
          <AuthNav />
          <HandleLoader/>
          <main>{children}</main>
        </AppContextProvider>
      </body>
    </html>
  );
}
