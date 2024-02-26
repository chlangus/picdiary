"use client"
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-screen h-screen bg-pic-bg">
      <Link className="hover:text-red-700 cursor-pointer" href="/signin">
        로그인페이지로
      </Link>
      <p className="text-9xl mt-5">메인 페이지 입니다!</p>
    </main>
  );
}
