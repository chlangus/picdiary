"use client";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-screen h-screen">
      <Image
        className="m-auto"
        width={330}
        height={59}
        src="/PICDIARY.svg"
        alt="logo"
      />
      <h2 className="text-center text-gray-300 transition-colors transform bg-slate-500">
        그림 일기를 남겨보세요~
      </h2>
      <button className="block m-auto mt-10 outline-dashed">
        <Link href="/signin">로그인페이지로</Link>
      </button>
    </main>
  );
}
