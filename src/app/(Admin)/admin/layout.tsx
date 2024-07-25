import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../globals.css";
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import '@mantine/carousel/styles.css';

import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import Navbar from "@/components/shared/Navbar";

import { AdminLayout } from "@/features/Admin/AdminLayout";
// import { MantineLogo } from '@mantinex/mantine-logo';

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
            <AdminLayout>
                {children}
            </AdminLayout>
        </MantineProvider>
      </body>
    </html>
  );
}
