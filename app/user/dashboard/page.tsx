"use client";
import React from "react";
import { useRouter, usePathname } from "next/navigation";
import Header from "@/app/components/Header/Header";

const Index = () => {
  const pathname = usePathname();

  return (
    <div>
      <Header />
      <h1>Index works!</h1>
    </div>
  );
};

export default Index;
