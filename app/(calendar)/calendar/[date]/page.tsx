"use client";
import { useParams, useRouter } from "next/navigation";

export default function date() {
  const { date } = useParams();

  return (
    <section className="w-screen h-screen">
      <h2 className="p-10 text-5xl text-center">{date}일의 일기</h2>
      <section className="h-[400px] w-[600px] m-auto  border border-black"></section>
    </section>
  );
}
