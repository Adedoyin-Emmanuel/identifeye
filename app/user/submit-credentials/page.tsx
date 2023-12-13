"use client";
import React from "react";
import { useRouter, usePathname } from "next/navigation";
import SidebarLayout from "@/app/components/SidebarLayout/SidebarLayout";

const Index = () => {
  const pathname = usePathname();

  return (
    <div className="w-screen h-screen">
      <SidebarLayout>
        <h3 className="text-3xl font-bold">hello submit credentials</h3>
      </SidebarLayout>
    </div>
  );
};

export default Index;
