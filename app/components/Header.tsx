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
    <nav className="flex justify-end">
      <span>{email}</span>
      <span
        className=" text-gray-700 ml-5 hover:text-red-700 cursor-pointer"
        onClick={handleClick}
      >
        로그아웃
      </span>
    </nav>
  );
}
