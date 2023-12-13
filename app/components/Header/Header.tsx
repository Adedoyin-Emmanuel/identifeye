"use client";
import Link from "next/link";
import { FaRegBell } from "react-icons/fa";

import Image from "next/image";

const Header = (): JSX.Element => {
  return (
    <nav className="w-full flex items-center flex-row justify-between overflow-x-hidden z-10">
      <h2 className="font-extrabold text-[20px] mx-5 flex items-center cursor-pointer ">
        <Link href="/" className="flex items-center justify-center gap-x-4">
          <Image
            src={"/assets/logo.png"}
            alt="IdentifEye Logo"
            width={35}
            height={35}
          />
          <span className="md:block hidden">IdentifEye</span>
        </Link>
      </h2>

      <section className="flex items-center justify-end w-4/6 overflow-x-hidden space-x-6 p-1">
        <FaRegBell className="w-7 h-7 cursor-pointer" />
        <section className="name bg-accent rounded-full w-10 h-10 flex items-center justify-center font-bold text-primary cursor-pointer">
          TA
        </section>
      </section>
    </nav>
  );
};

export default Header;
