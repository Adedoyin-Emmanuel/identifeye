"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Text from "@/app/components/Text/Text";
import Input from "@/app/components/Input/Input";
import Button from "@/app/components/Button/Button";

const Signup = () => {
  const router = useRouter();

  return (
    <section className="w-screen h-screen flex-col flex mx-auto items-center justify-center">
      <form className="w-full p-2 md:w-1/2 xl:w-1/4">
        <section className="header-section my-8">
          <h3 className="text-2xl capitalize font-bold">
            create an identifeye account
          </h3>
        </section>

        <div role="tablist" className="tabs tabs-bordered">
          <input
            type="radio"
            name="my_tabs_1"
            role="tab"
            className="tab"
            aria-label="Individual"
            defaultChecked
          />
          <div role="tabpanel" className="tab-content mb-5">
            <section className="my-4 mb-5">
              <label htmlFor="password" className="text-md block my-2">
                DID
              </label>
              <Input
                type="password"
                name="password"
                placeholder="Generate DID"
                readOnly
              />
            </section>

            <section className="my-4 mb-5 w-full">
              <Button className="button-shadow-2">Generate DID</Button>
            </section>
          </div>

          <input
            type="radio"
            name="my_tabs_1"
            role="tab"
            className="tab"
            aria-label="Business"
          />
          <div role="tabpanel" className="tab-content">
            <section className="my-4 mb-5">
              <label
                htmlFor="companyName"
                className="text-md block my-2 capitalize"
              >
                company name
              </label>
              <Input
                type="text"
                name="companyName"
                placeholder="Enter your company name"
              />
            </section>

            <section className="my-4 mb-5">
              <label htmlFor="password" className="text-md block my-2">
                DID
              </label>
              <Input
                type="password"
                name="password"
                placeholder="Generate DID"
                readOnly
              />
            </section>

            <section className="my-4 mb-5 w-full">
              <Button className="button-shadow-2">Generate DID</Button>
            </section>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Signup;
