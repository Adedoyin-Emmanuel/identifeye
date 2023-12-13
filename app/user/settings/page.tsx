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
        <section className="header md:my-10 my-5">
          <h3 className="text-2xl font-bold capitalize">Settings</h3>
          <Text className="py-1">Setup your preferences</Text>
        </section>

        <section className="user-preference  md:w-1/2">
          <section className="light-mode flexjustify-between">
            <Text className="block">Light mode</Text>
            <input
              type="checkbox"
              className="toggle toggle-md bg-white toggle-secondary"
              checked
            />
          </section>

          <section className="light-mode flexjustify-between">
            <Text className="block">Auto download verified credentials</Text>
            <input
              type="checkbox"
              className="toggle toggle-md bg-white toggle-secondary"
              checked
            />
          </section>

          <section className="light-mode flexjustify-between">
            <Text className="block">Start IdentifEye at login</Text>
            <input
              type="checkbox"
              className="toggle toggle-md bg-white toggle-secondary"
              checked
            />
          </section>

          <section className="light-mode flexjustify-between">
            <Text className="block">Sync DID with other devices</Text>
            <input
              type="checkbox"
              className="toggle toggle-md bg-white toggle-secondary"
            />
          </section>
        </section>

        <hr />

        <section className="general md:w-1/2">
          <section className="change-avatar flex">
            <Text>Change Avatar</Text>
            <section className="avatar bg-accent rounded-full h-10 w-10 font-bold capitalize">
              TA
            </section>
          </section>

          <section className="lanaguage flex">
            <Text>Language</Text>
            <section className="input">
              <select
                className="select border-2 border-gray-300 focus:outline-none rounded-md w-full h-16"
                name="languages"
              >
                <option value="system default">System Default</option>
              </select>
            </section>
          </section>

          <section className="2-factor-auth flex">
            <Text>2 Factor Authentication</Text>
            <section className="2-factor-auth">
              <select
                className="select border-2 border-gray-300 focus:outline-none rounded-md w-full h-16"
                name="2-factor-auth"
              >
                <option value="public key">Public Key</option>
              </select>
            </section>
          </section>
        </section>

        <section className="contact md:w-1/2">
          <Text>Would you like to connect with us through our socials?</Text>

          <section className="socials">
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
            <Link className="capitalize text-secondary px-1" href={"/license"}>
              Licenses
            </Link>

            <Link
              className="capitalize text-secondary px-1"
              href={"/privacy-policy"}
            >
              Terms And Privacy Policy
            </Link>

            <Link className="capitalize text-secondary px-1" href={"/about-us"}>
              About Us
            </Link>
          </section>
        </section>

        <section className="danger md:w-1/2">
          <Text className="text-danger">
            Warning! this is a destructive action. Your data stored on our
            Decentralized Web Nodes would be deleted alongside{" "}
          </Text>

          <Button>Delete Account</Button>
        </section>
      </SidebarLayout>
    </div>
  );
};

export default Settings;
