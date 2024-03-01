import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function Header() {
  const [email, setEmail] = useState("");
  const router = useRouter();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      router.push("/");
    }
    const user = localStorage.getItem("email") || "";
    setEmail(user);
  }, []);

  const handleClick = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("token");
    router.push("/");
  };
  return (
    <nav className="flex justify-around mb-10">
      <Link href='/'>
        <Image
          className="text-left"
          width={220}
          height={40}
          src="/PICDIARY.svg"
          alt="logo"
        />
      </Link>
      <div>
        <span>{email}</span>
        <span
          className=" text-gray-700 ml-5 hover:text-red-700 cursor-pointer"
          onClick={handleClick}
        >
          로그아웃
        </span>
      </div>
    </nav>
  );
}
