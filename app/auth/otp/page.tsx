"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Text from "@/app/components/Text/Text";
import Input from "@/app/components/Input/Input";
import Button from "@/app/components/Button/Button";
import Link from "next/link";

const OTPPage = () => {
  const router = useRouter();
  const [otp, setOtp] = useState("");

  const handleOtpChange = (e: React.FormEvent<HTMLInputElement> | any) => {
    // Handle OTP input change
    setOtp(e.target.value);
  };

  const handleVerifyOtp = () => {
    // TODO: Implement OTP verification logic here
    console.log("Verifying OTP:", otp);
  };

  return (
    <section className="w-screen h-screen flex items-center justify-center">
      <form className="w-11/12 md:w-1/2 xl:w-1/4">
        <section className="header-section my-8">
          <h3 className="text-4xl capitalize font-bold text-secondary">
            Verify OTP
          </h3>
          <Text className="py-1">Enter the OTP sent to your email</Text>
        </section>

        <section className="my-4 mb-5">
          <label htmlFor="otp" className="text-md block my-2">
            OTP
          </label>
          <Input
            type="text"
            name="otp"
            value={otp}
            onChange={handleOtpChange}
            placeholder="Enter your OTP"
          />
        </section>

        <section className="my-4 mb-5 w-full">
          <Button onClick={handleVerifyOtp}>Verify OTP</Button>
        </section>

        <section className="my-4 mb-5">
          <Text className="text-sm">
            Didnt receive the OTP? <Link href="/resend-otp">Resend OTP</Link>
          </Text>
        </section>
      </form>
    </section>
  );
};

export default OTPPage;
