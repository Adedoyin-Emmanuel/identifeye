"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Text from "@/app/components/Text/Text";
import Input from "@/app/components/Input/Input";
import Button from "@/app/components/Button/Button";
import Link from "next/link";

const Login = () => {
  const router = useRouter();
    

  return (
    <section className="w-screen h-screen flex items-center justify-center">
      <form className="w-11/12 md:w-1/2 xl:w-1/4">
        <section className="header-section my-8">
          <h3 className="text-4xl capitalize font-bold text-secondary">
            Login
          </h3>
          <Text className="py-1">login into your account</Text>
        </section>

        <section className="my-4 mb-5">
          <label htmlFor="email" className="text-md block my-2">
            Email
          </label>
          <Input type="email" name="email" placeholder="Enter your email" />
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
          <Button>Login</Button>
        </section>

        <section>
          <Text className="inline">
            no account?
            <Link
              className="capitalize text-secondary px-1"
              href={"/auth/signup"}
            >
              create account
            </Link>
          </Text>

          <Link
            className="capitalize text-secondary px-1"
            href={"/auth/forgot-password"}
          >
            Forgot password
          </Link>
        </section>
      </form>
    </section>
  );
};

export default Login;
