"use client";
import React from "react";
import { useRouter, usePathname } from "next/navigation";
import SidebarLayout from "@/app/components/SidebarLayout/SidebarLayout";
import Text from "@/app/components/Text/Text";
import Button from "@/app/components/Button/Button";

const Index = () => {
  const pathname = usePathname();

  return (
    <div className="w-screen h-screen">
      <SidebarLayout>
        <section className="header md:my-10 my-5">
          <h3 className="text-2xl font-bold capitalize">overview</h3>
          <Text className="py-1">
            Welcome, would like to submit more credential to your DID or Verify
            DID
          </Text>
        </section>

        <main>
          <section className="first md:w-1/2 flex md:flex-row p-1 items-start justify-around gap-x-16">
            <section className="verfications box-shadow w-96 h-40 rounded bg-[#373636] p-4 cursor-pointer flex items-center justify-between  flex-col">
              <Text>Number of verifications done </Text>
              <h3 className="text-4xl font-bold">5</h3>
            </section>

            <section className="did-checks box-shadow w-96 h-40 rounded bg-[#373636] p-4 cursor-pointer flex items-center justify-between  flex-col">
              <Text>Number of DID checks </Text>
              <h3 className="text-4xl font-bold">8</h3>
            </section>
          </section>

          <br />
          <br />
          <section className="second md:w-1/2 p-1 flex md:flex-row flex-col gap-x-16 justify-between">
            <section className="orgs-list box-shadow bg-[#373636] rounded h-96 p-5 flex flex-col justify-between">
              <section>
                <Text className="my-2 font-bold">
                  List of organizations with your DID
                </Text>

                <ul className="list-disc list-inside">
                  <li>SISS Bank</li>
                  <li>National Bank</li>
                  <li>Park Bank</li>
                  <li>FastnPay Bank</li>
                  <li>Bull Bank</li>
                </ul>
              </section>

              <section className="w-full h-12 p-2 flex items-end justify-end">
                <button className="w-28 rounded capitalize button-shadow h-12 bg-accent duration-150 transition-all ease-linear">
                  View more
                </button>
              </section>
            </section>

            <section className="flex items-center justify-end md:h-96 my-10">
              <Button>Quick Guide</Button>
            </section>
          </section>
        </main>
      </SidebarLayout>
    </div>
  );
};

export default Index;
