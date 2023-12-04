"use client";
import React from "react";
import { useRouter,  } from "next/navigation";
import Text from "@/app/components/Text/Text";
import Input from "@/app/components/Input/Input";
import Button from "@/app/components/Button/Button";
import Link from "next/link";

const Signup = () => {
    const router = useRouter();


  return (
    <section className="w-screen h-screen flex items-center justify-center">
      <form className="w-11/12 md:w-1/2 xl:w-1/4">
        <section className="header-section my-8">
          <h3 className="text-4xl capitalize font-bold text-secondary">
            Signup
          </h3>
          <Text className="py-1">create an account</Text>
        </section>

        <section className="my-4 mb-5">
          <label htmlFor="email" className="text-md block my-2">
            Email
          </label>
          <Input type="email" name="email" placeholder="Enter your email" />
        </section>

        <section className="my-4 mb-5">
          <label htmlFor="username" className="text-md block my-2">
            Username
          </label>
          <Input
            type="text"
            name="username"
            placeholder="Enter your username"
          />
        </section>

        <section className="my-4 mb-5">
          <label htmlFor="password" className="text-md block my-2">
            Password
          </label>
          <Input
            type="password"
            name="password"
            placeholder="shhhhhhhhhh it's a secret"
          />
        </section>

        <section className="my-4 mb-5 w-full">
          <Button>create account</Button>
        </section>

        <section>
          <Text className="inline">
            got an account?
            <Link
              className="capitalize text-secondary px-1"
              href={"/auth/login"}
            >
              login
            </Link>
          </Text>
        </section>
      </form>
    </section>
  );
};

export default Signup;
