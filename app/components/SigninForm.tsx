'use client'
import { useForm } from "react-hook-form";
import { EMAIL_REG } from "./SignupForm";
import axiosInstance from "../../libs/axios";
import { useRouter } from "next/navigation";

// {
//   "id": 13,
//   "email": "moo@codeit.com",
//   "token": "bW9vQGNvZGVpdC5jb206Y29kZWl0MTExMTEx"
// }
export default function SigninForm() {
  const router = useRouter();
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
    setError,
  } = useForm({ mode: "onBlur" });

  const onSubmit = async () => {
    const response = await axiosInstance.post("/auth/login", {
      email: JSON.stringify(inputValue.email),
      password: JSON.stringify(inputValue.password),
    });
    console.log(response);
    if (response.status === 200) {
      console.log("로그인 성공");
    }
    router.push('/diary');

    // 로그인 아이디 있나 check
    // 달력페이지로 이동시키기
  };

  const inputValue = watch();
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col  bg-[#EADBB4] rounded-[35px] p-8 mt-8 gap-2 w-[400px]"
    >
      <input
        placeholder="EMAIL"
        className="w-[330px] h-[33px] rounded-[10px] px-3 text-xs outline-none"
        {...register("email", {
          required: "이메일을 입력해주세요.",
          pattern: {
            value: EMAIL_REG,
            message: "올바른 이메일 주소가 아닙니다.",
          },
        })}
      />
      {errors.email && (
        <p className="ml-1 mt-[-4px] p-0 text-sm text-red-700">
          {errors.email.message as string}
        </p>
      )}
      <input
        type="password"
        placeholder="PASSWORD"
        className="rounded-[10px] px-3 w-[330px] h-[33px] text-xs outline-none"
        {...register("password", {
          required: "패스워드를 입력해주세요",
        })}
      />
      {errors.password && (
        <p className="ml-1 mt-[-4px] p-0 text-sm text-red-700">
          {errors.password.message as string}
        </p>
      )}
      <button className=" text-white rounded-lg bg-[#d6b666] w-[330px] h-[33px] text-sm p-1 mt-2 ">
        LOGIN
      </button>
    </form>
  );
}
