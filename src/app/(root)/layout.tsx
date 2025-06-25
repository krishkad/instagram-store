import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MobileBottomBar from "@/components/MobileBottomBar";
import React, { ReactNode } from "react";

const RootAppLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full">
      <Header />
      <main className="w-full">{children}</main>
      <Footer />
      <MobileBottomBar />
    </div>
  );
};

export default RootAppLayout;
