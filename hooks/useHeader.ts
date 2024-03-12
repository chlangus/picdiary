import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function useHeader() {
  const [email, setEmail] = useState("");
  const router = useRouter();
  const handleClick = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("token");
    router.push("/");
  };

  // useEffect(() => {
  //   if (!localStorage.getItem("token")) {
  //     router.push("/");
  //   }
  //   const user = localStorage.getItem("email") || "";
  //   setEmail(user);
  // }, []);

  return { email, handleClick };
}
