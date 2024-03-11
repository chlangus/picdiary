"use client";
import Calendar from "../../components/Calendar";
import Header from "../../components/Header";

export default function calendar() {
  return (
    <main className="w-screen h-screen">
      
      <Header />
      <main className="w-[500px] m-auto">
        <Calendar />
      </main>
    </main>
  );
}
