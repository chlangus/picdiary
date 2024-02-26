import { useState } from "react";
import { useForm } from "react-hook-form";

export default function SignupForm() {
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm({ mode: "onBlur" });

  const onSubmit = () => {
    // 중복 이메일 있나 check
    // 달력페이지로 이동시키기
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col bg-[#EADBB4] rounded-[35px] p-8 mt-8 gap-2">
      <input
        type="email"
        placeholder="EMAIL"
        className="w-[330px] h-[33px] rounded-[10px] px-3 text-xs outline-none"
        {...register("email", {
          required: "email is empty.",
        })}
      />
      {errors.email && <p className="ml-1 mt-[-4px] p-0 text-sm text-red-700">{errors.email.message as string}</p>}
      <input
        type="password"
        placeholder="PASSWORD"
        className="rounded-[10px] px-3 w-[330px] h-[33px] text-xs outline-none"
        {...register("password", {
          required: "password is empty.",
        })}
      />
      {errors.password && <p className="ml-1 mt-[-4px] p-0 text-sm text-red-700">{errors.password.message as string}</p>}

      <input
        type="password"
        placeholder="PASSWORD"
        className="rounded-[10px] px-3 w-[330px] h-[33px] text-xs outline-none"
        {...register("passwordCheck", {
          validate: {},
        })}
      />
      {errors.passwordCheck && <p className="ml-1 mt-[-4px] p-0 text-sm text-red-700">{errors.passwordCheck.message as string}</p>}
      <button className=" text-white rounded-lg bg-[#d6b666] w-[330px] h-[33px] text-sm p-1 mt-2 ">
        Sign up
      </button>
    </form>
  );
}
