import Footer from "@/components/shared/footer/Footer";
import Header from "@/components/shared/Header";
import React from "react";
export default function HomeRootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex flex-1 flex-col">{children}</main>
      <Footer />
    </div>
  );
}
