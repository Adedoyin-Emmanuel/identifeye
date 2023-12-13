"use client";
import React from "react";
import { useRouter, usePathname } from "next/navigation";
import SidebarLayout from "@/app/components/SidebarLayout/SidebarLayout";
import Text from "@/app/components/Text/Text";
import Button from "@/app/components/Button/Button";
import Input from "@/app/components/Input/Input";

const Index = () => {
  const pathname = usePathname();

  return (
    <div className="w-screen h-screen">
      <SidebarLayout>
        <section className="header md:my-10 my-5">
          <h3 className="text-2xl font-bold capitalize">Credential</h3>
          <Text className="py-1">Add credential to your DID instantly</Text>
        </section>

        <form className="w-full p-2 md:w-2/4 xl:w-2/4">
          <section className="my-4 mb-5">
            <label htmlFor="name" className="text-md block my-2">
              Your Name
            </label>
            <Input type="text" name="name" placeholder="Enter your full name" />
          </section>

          <section className="my-4 mb-5">
            <label htmlFor="credentialType" className="text-md block my-2">
              Credential Type
            </label>
            <select
              className="select border-2 border-gray-300 focus:outline-none rounded-md w-full h-16"
              name="signupAs"
            >
              <option value="user">Individual</option>
              <option value="hospital">Business</option>
            </select>
          </section>

          <section className="my-4 mb-5">
            <label htmlFor="idType" className="text-md block my-2">
              ID Type
            </label>
            <select
              className="select border-2 border-gray-300 focus:outline-none rounded-md w-full h-16"
              name="signupAs"
            >
              <option value="user">Address Verification</option>
              <option value="hospital">Bank Verification Number</option>
              <option value="hospital">Consumer Credit Buraeu</option>
              <option value="hospital">Drivers License</option>
              <option value="hospital">International Passport</option>
              <option value="hospital">Permanent Voters Card (PVC)</option>

              <option value="hospital">Phone Number</option>

              <option value="hospital">Tax Identification Number (TIN) </option>
            </select>
          </section>

          <section className="my-8 mb-5 w-full flex items-center md:justify-end ">
            <Button className="button-shadow-2 md:w-52">Submit</Button>
          </section>
        </form>
      </SidebarLayout>
    </div>
  );
};

export default Index;
