import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";

const poppins = Poppins({ subsets: ["latin"], weight: ["300","400","500","600","700"], display: "swap" });

export const metadata: Metadata = {
  title: "E-commerce Admin Dashboard",
  description: "Manage your e-commerce store with ease",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className} suppressHydrationWarning={true}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
