"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { BiMessageRoundedDots } from "react-icons/bi";
import { BsCameraVideo } from "react-icons/bs";
import { FiLogOut, FiSearch } from "react-icons/fi";
import { IoAnalytics, IoSettingsOutline } from "react-icons/io5";
import { GiPadlock } from "react-icons/gi";
import Text from "../Text/Text";
import MobileNav from "../MobileNav/MobileNav";
import Header from "../Header/Header";
import { FaLockOpen } from "react-icons/fa6";

interface SidebarLayoutProps {
  className?: string;
  children?: React.ReactNode;
  showWelcomeMesage?: boolean;
}

const SidebarLayout = ({
  className,
  children,
  showWelcomeMesage,
}: SidebarLayoutProps) => {
  const currentPath = usePathname();
  const router = useRouter();

  return (
    <section className="parent h-screen w-screen flex justify-between">
      <div
        className={`border-r-2 border-[#0f6]  h-screen hidden md:flex md:w-3/12  lg:w-2/12 items-center justify-start flex-col  p-0  fixed ${className} `}
      >
        <section className="sidebar-header my-4 w-11/12 p-2"></section>

        <section className="w-11/12 p-2">
          <Link
            href={"/user/dashboard"}
            className={`dashboard cursor-pointer  ${
              currentPath.includes("dashboard")
                ? "button-shadow-2 h-14"
                : "button-shadow h-14"
            }  transition-colors flex items-center gap-x-4  p-5 rounded my-4  duration-100 ease-in`}
          >
            <IoAnalytics className="w-6 h-6" />
            <Text>Dashboard</Text>
          </Link>

          <Link
            href="/user/submit-credentials"
            className={`dashboard cursor-pointer  ${
              currentPath.includes("submit-credentials")
                ? "button-shadow-2 h-14"
                : "button-shadow h-14"
            }   duration-100 ease-in transition-colors flex items-center gap-x-4 p-5 rounded my-7`}
          >
            <GiPadlock className="w-6 h-6" />
            <Text>Submit Credentials</Text>
          </Link>

          <Link
            href="/user/verify-credentials"
            className={`dashboard cursor-pointer  ${
              currentPath.includes("verify-credentials")
                ? "button-shadow-2 h-14"
                : "button-shadow h-14"
            }  duration-100 ease-in transition-colors flex items-center gap-x-4 p-5 rounded my-7`}
          >
            <FaLockOpen className="w-6 h-6" />
            <Text>Verify Credentials</Text>
          </Link>

          <Link
            href="/user/settings"
            className={`dashboard cursor-pointer ${
              currentPath.includes("settings") ||
              currentPath.includes("profile") ||
              currentPath.includes("profile/me")
                ? "button-shadow-2 h-14"
                : "button-shadow h-14"
            }   duration-100 ease-in transition-colors flex items-center gap-x-4 p-5 rounded my-7`}
          >
            <IoSettingsOutline className="w-6 h-6" />
            <Text>Settings</Text>
          </Link>

          <Link
            href=""
            className={`dashboard cursor-pointer  ${
              currentPath.includes("logout")
                ? "button-shadow-2 h-14"
                : "button-shadow h-14"
            }   duration-100 ease-in transition-colors flex items-center gap-x-4 p-5 rounded my-7`}
          >
            <FiLogOut className="w-6 h-6" />
            <Text>Logout</Text>
          </Link>
        </section>
      </div>
      <section className="w-full md:w-3/4 lg:w-5/6 md:p-8 p-2 pl-1/4 overflow-y-auto ml-auto overflow-x-hidden">
        <Header />
        {children}

        <section className="spacer md:hidden my-10">
          <br /> <br /> <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </section>
      </section>

      <MobileNav />
    </section>
  );
};

export default SidebarLayout;
