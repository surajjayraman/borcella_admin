import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import LeftSideBar from "@/components/layout/leftSideBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Borcelle - Admin Dashboard",
  description: "Admin dasboard to manage Borcelle's data",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <LeftSideBar />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
