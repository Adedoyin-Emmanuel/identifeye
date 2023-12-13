"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { BiMessageRoundedDots } from "react-icons/bi";
import { IoAnalytics, IoSettingsOutline } from "react-icons/io5";
import Text from "../Text/Text";
import { GiPadlock } from "react-icons/gi";
import { FaLockOpen } from "react-icons/fa6";

interface MobileNavProps {
  className?: string;
  children?: React.ReactNode;
}

const MobileNav = ({ className, children, ...others }: MobileNavProps) => {
  const currentPath = usePathname();
  return (
    <section
      className={`bg-primary w-screen flex items-center justify-between fixed bottom-0 left-0 md:hidden   h-20 z-10 p-2 ${className}`}
      {...others}
    >
      {children}

      <Link
        href={"/user/dashboard"}
        className={`${
          currentPath.includes("dashboard") || currentPath.includes("search")
            ? "text-secondary"
            : ""
        } transition-colors hover:text-secondary duration-100 ease-in flex flex-col items-center justify-center gap-y-2`}
      >
        <IoAnalytics className="h-5 w-5" />
        <Text className="text-[12px]">Dashboard</Text>
      </Link>

      <Link
        href={"/user/submit-credentials"}
        className={`${
          currentPath.includes("submit-credentials") && "text-secondary"
        } transition-colors hover:text-secondary duration-100 ease-in flex flex-col items-center justify-center gap-y-2`}
      >
        <GiPadlock className="h-5 w-5" />
        <Text className="text-[12px]">Submit </Text>
      </Link>

      <Link
        href={"/user/verify-credentials"}
        className={`${
          currentPath.includes("verify-credentials") && "text-secondary"
        } transition-colors hover:text-secondary duration-100 ease-in flex flex-col items-center justify-center gap-y-2`}
      >
        <FaLockOpen className="h-5 w-5" />
        <Text className="text-[12px]">Verify</Text>
      </Link>

      <Link
        href={"/user/settings"}
        className={`${
          currentPath.includes("settings") ||
          currentPath.includes("profile") ||
          currentPath.includes("profile/me")
            ? "text-secondary"
            : ""
        } transition-colors hover:text-secondary duration-100 ease-in flex flex-col items-center justify-center gap-y-2`}
      >
        <IoSettingsOutline className="h-5 w-5" />
        <Text className="text-[12px]">Settings</Text>
      </Link>
    </section>
  );
};

export default MobileNav;
