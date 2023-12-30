import { AppContextProvider } from "@/context/AppContext";
import "../globals.css";
import AuthNav from "@/components/AuthNav";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AppContextProvider>
          <AuthNav />
          <main>{children}</main>
        </AppContextProvider>
      </body>
    </html>
  );
}
