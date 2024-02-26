import { useState } from "react";
import { useForm } from "react-hook-form";

export default function SignupForm() {
  const {
    register,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  return (
    <form className="flex flex-col bg-[#EADBB4] rounded-[35px] p-8 mt-8 gap-2">
      <input
        type="email"
        placeholder="EMAIL"
        className="w-[330px] h-[33px] rounded-[10px] px-3 text-xs outline-none"
        {...register("email", {
          required: "email is empty.",
        })}
      />
      {errors?.email && <p role="alert">{errors.email.message}</p>}
      <input
        type="password"
        placeholder="PASSWORD"
        className="rounded-[10px] px-3 w-[330px] h-[33px] text-xs outline-none"
        {...register("password", {
          required: "password is empty.",
        })}
      />
      {errors.password && <p role="alert">{errors.password.message}</p>}
      <input
        type="password"
        placeholder="PASSWORD"
        className="rounded-[10px] px-3 w-[330px] h-[33px] text-xs outline-none"
        {...register("passwordCheck", {
          validate: {},
        })}
      />
      {errors.passwordCheck && <p role="alert">{errors.passwordCheck.message}</p>}
      <button className=" text-white rounded-lg bg-[#d6b666] w-[330px] h-[33px] text-sm p-1 mt-2 ">
        Sign up
      </button>
    </form>
  );
}
