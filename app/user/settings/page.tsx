"use client";
import React, { useRef } from "react";
import { useRouter, usePathname } from "next/navigation";
import SidebarLayout from "@/app/components/SidebarLayout/SidebarLayout";
import Text from "@/app/components/Text/Text";
import Button from "@/app/components/Button/Button";
import Link from "next/link";

const Settings = () => {
  const pathname = usePathname();

  return (
    <div className="w-screen h-screen">
      <SidebarLayout>
        <form>
          <section className="header md:my-10 my-5">
            <h3 className="text-2xl font-bold capitalize">Settings</h3>
            <Text className="py-1">Setup your preferences</Text>
          </section>

          <section className="user-preference  md:w-1/2 flex flex-col gap-y-12">
            <section className="light-mode flex justify-between">
              <Text className="block">Light mode</Text>
              <input
                type="checkbox"
                className="toggle toggle-md bg-white toggle-secondary"
              />
            </section>

            <section className="light-mode flex justify-between">
              <Text className="block">Auto download verified credentials</Text>
              <input
                type="checkbox"
                className="toggle toggle-md bg-white toggle-secondary"
              />
            </section>

            <section className="light-mode flex justify-between">
              <Text className="block">Start IdentifEye at login</Text>
              <input
                type="checkbox"
                className="toggle toggle-md bg-white toggle-secondary"
              />
            </section>

            <section className="light-mode flex justify-between">
              <Text className="block">Sync DID with other devices</Text>
              <input
                type="checkbox"
                className="toggle toggle-md bg-white toggle-secondary"
              />
            </section>
          </section>

          <br />
          <section className="border-t border-[#373636]"></section>

          <section className="general md:w-1/2 my-10">
            <h3 className="text-2xl font-bold capitalize my-2">General</h3>
            <section className="change-avatar flex items-center justify-between">
              <Text>Change Avatar</Text>
              <section className="avatar bg-accent rounded-full h-10 w-10 font-bold capitalize text-primary flex items-center justify-center">
                TA
              </section>
            </section>

            <section className="lanaguage my-2">
              <Text>Language</Text>
              <section className="language">
                <select
                  className="select border-2 border-gray-300 focus:outline-none rounded-md w-full h-16 "
                  name="language"
                >
                  <option value="System Default">System Default</option>
                </select>
              </section>
            </section>

            <br />

            <section className="2-factor-auth my-2">
              <Text>2 Factor Authentication</Text>
              <section className="2-factor-auth">
                <select
                  className="select border-2 border-gray-300 focus:outline-none rounded-md w-full h-16 "
                  name="2-factor-auth"
                >
                  <option value="public key">Public Key</option>
                </select>
              </section>
            </section>
          </section>

          <section className="contact md:w-1/2">
            <h3 className="text-2xl font-bold capitalize my-1">Contact Us</h3>
            <Text className="mb-10">
              Would you like to connect with us through our socials?
            </Text>

            <section className="socials flex flex-col gap-4">
              <Link
                className="capitalize text-secondary px-1"
                href={"/contact-us"}
              >
                Contact US
              </Link>
              <Link
                className="capitalize text-secondary px-1"
                href={"/help-center"}
              >
                Help Center
              </Link>
              <Link
                className="capitalize text-secondary px-1"
                href={"/license"}
              >
                Licenses
              </Link>

              <Link
                className="capitalize text-secondary px-1"
                href={"/privacy-policy"}
              >
                Terms And Privacy Policy
              </Link>

              <Link
                className="capitalize text-secondary px-1"
                href={"/about-us"}
              >
                About Us
              </Link>
            </section>
          </section>

          <br />
          <br />

          <section className="danger md:w-1/2">
            <section className="w-full">
              <Button className="w-44 hover:bg-error">Delete Account</Button>
            </section>

            <Text className="text-error text-sm my-5">
              Warning! this is a destructive action. Your data stored on our
              Decentralized Web Nodes would be deleted alongside{" "}
            </Text>
          </section>
        </form>
      </SidebarLayout>
    </div>
  );
};

export default Settings;
