import { useState } from "react";

export default function SigninForm() {
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });

  return (
    <section className="flex flex-col  bg-[#EADBB4] rounded-[35px] p-8 mt-8 gap-2">
      <input
        placeholder="EMAIL"
        className="w-[330px] h-[33px] rounded-[10px] px-3 text-xs outline-none"
        value={inputValue.email}
        onChange={(e) =>
          setInputValue({
            email: e.target.value,
            password: inputValue.password,
          })
        }
      />
      <input
        type="password"
        placeholder="PASSWORD"
        value={inputValue.password}
        className="rounded-[10px] px-3 w-[330px] h-[33px] text-xs outline-none"
        onChange={(e) =>
          setInputValue({ email: inputValue.email, password: e.target.value })
        }
      />
      <button className=" text-white rounded-lg bg-[#d6b666] w-[330px] h-[33px] text-sm p-1 mt-2 ">
        LOGIN
      </button>
    </section>
  );
}
