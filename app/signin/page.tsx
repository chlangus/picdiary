"use client";
import Image from "next/image";
import Link from "next/link";
import SigninForm from "../components/SigninForm";

export default function signin() {
  return (
    <main className="w-screen h-screen flex flex-col items-center justify-center">
      <Link
        href="/"
        className="hover:scale-110 transition-tranform ease-in-out duration-500"
      >
        <Image width={330} height={59} src="/PICDIARY.svg" alt="logo" />
      </Link>
      <SigninForm />
      <Link
        href="/signup"
        className="mt-3 underline text-xs text-gray-700 hover:scale-105 transition-tranform ease-in-out duration-500"
      >
        회원이 아니신가요? 클릭하면 회원가입 화면이 열려요!
      </Link>
    </main>
  );
}
