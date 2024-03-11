"use client";
import Image from "next/image";
import Link from "next/link";
import SignupForm from "../../components/SignupForm";

export default function signup() {
  return (
    <main className="w-screen h-screen flex flex-col items-center justify-center">
      <Link href="/" className="hover:scale-110 transition-tranform ease-in-out duration-500">
        <Image width={330} height={59} src="/PICDIARY.svg" alt="logo" />
      </Link>
      <SignupForm />
      <Link
        href="/signin"
        className="mt-3 underline text-xs text-gray-700 hover:scale-110 transition-tranform ease-in-out duration-500"
      >
        이미 회원이신가요? 클릭하면 로그인 화면이 열려요!
      </Link>
    </main>
  );
}
