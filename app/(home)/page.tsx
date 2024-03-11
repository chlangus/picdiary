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
      <div className="h-[100px] text-center text-[40px] mt-[30px]">달력 그리고 일기</div>
      <button className="block m-auto mt-10 outline-dashed">
        <Link href="/signin">로그인페이지로</Link>
      </button>
    </main>
  );
}
