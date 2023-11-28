import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import imag from "../public/S.png";
import { companyName } from "./commen/CommenName";
import Navbar from "./component/Navbar";
import Layout from "./component/LayoutComponent/Route";
import { Providers } from "@/redux/provider/provider";
import { AuthProvider } from "./auth/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: companyName,
  description: "Generated by create next app",
  icons: [{ rel: "icon", url: imag.src }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme={"light"}>
      <body className={inter.className}>
        <AuthProvider>
          <div className="min-h-screen min-w-full overflow-hidden">
            {/* <Navbar page="main" /> */}
            <Layout />
            <main>
              <Providers>{children}</Providers>
            </main>
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
