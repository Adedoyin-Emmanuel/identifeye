"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Text from "@/app/components/Text/Text";
import Input from "@/app/components/Input/Input";
import Button from "@/app/components/Button/Button";
import Link from "next/link";

const ForgotPassword = () => {
  const router = useRouter();


  return (
    <section className="w-screen h-screen flex items-center justify-center">
      <form className="w-11/12 md:w-1/2 xl:w-1/4">
        <section className="header-section my-8">
          <h3 className="text-4xl capitalize font-bold text-secondary">
            Forgot Password
          </h3>
          <Text className="py-1">
            Enter the email associated with your acccount
          </Text>
        </section>

        <section className="my-4 mb-5">
          <label htmlFor="email" className="text-md block my-2">
            Email
          </label>
          <Input type="email" name="email" placeholder="Enter your email" />
        </section>

        <section className="my-4 mb-5 w-full">
          <Button>Send Email</Button>
        </section>
      </form>
    </section>
  );
};

export default ForgotPassword;
