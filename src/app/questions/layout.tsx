import type { Metadata } from "next";
import "../globals.css";
import { StoreProvider } from "@/lib/store/StoreProvider";

export const metadata: Metadata = {
  title: "Nebula Question",
  description: "A quick quiz to get to know the client more deeper",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>{children}</StoreProvider>
  );
}
