"use client";
import React from "react";
import { useRouter, usePathname } from "next/navigation";

const Index = () => {
  const pathname = usePathname();

  return (
    <div>
      <h1 className="font-bold text-3xl text-primary">Index works!</h1>
      <h1 className="font-bold text-3xl text-secondary">Index works!</h1>

      <p>Current pathname: {pathname}</p>
    </div>
  );
};

export default Index;
