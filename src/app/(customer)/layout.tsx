import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import "@mantine/carousel/styles.css";

import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import { ToastContainer } from "react-toastify";
import Navbar from "@/components/shared/Navbar";
import { UserSessionContextProvider } from "@/context/UserSessionContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "City Wheelz App",
  description: "Powered by NEA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body className={inter.className}>
        <MantineProvider>
          <Navbar />
          {children}
          <ToastContainer autoClose={8000} />
        </MantineProvider>
      </body>
    </html>
  );
}
