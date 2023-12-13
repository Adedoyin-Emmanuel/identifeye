"use client";
import React, { useRef } from "react";
import { useRouter, usePathname } from "next/navigation";
import SidebarLayout from "@/app/components/SidebarLayout/SidebarLayout";
import Text from "@/app/components/Text/Text";
import Button from "@/app/components/Button/Button";
import Input from "@/app/components/Input/Input";

const Settings = () => {
  const pathname = usePathname();

  return (
    <div className="w-screen h-screen">
      <SidebarLayout>
        <section className="header md:my-10 my-5">
          <h3 className="text-2xl font-bold capitalize">Settings</h3>
          <Text className="py-1">Setup your preferences</Text>
        </section>

        <section className="user-preference">
          <section className="light-mode flex w-1/2 justify-between">
            <Text className="block">Light mode</Text>
            <input
              type="checkbox"
              className="toggle toggle-md bg-white toggle-secondary"
            />
          </section>
        </section>
      </SidebarLayout>
    </div>
  );
};

export default Settings;
