"use client";
/**
 * @Author: Musa Hayta - musahayta@gmail.com
 * @Date:   2024-05-11 15:45:22
 * @Last Modified by:   Musa Hayta - musahayta@gmail.com
 * @Last Modified time: 2024-05-18 02:36:41
 */
import { SignInForm } from "@/components/SignInForm";

export default function Signin({ searchParams }) {
  console.log(searchParams);
  return (
    <>
      <SignInForm callbackUrl={searchParams.callbackUrl} />
    </>
  );
}
