import { useForm } from "react-hook-form";
import axiosInstance from "../../libs/axios";
import { useRouter } from "next/navigation";

export const EMAIL_REG = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/;
const PASSWD_REG = /(?=.*[0-9])(?=.*[A-Za-z])^.{8,}$/;

export default function SignupForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm({ mode: "onBlur" });
  const router = useRouter();

  const inputValue = watch();

  const onSubmit = async () => {
    try {
      const response = await axiosInstance.post("/auth/signup", {
        email: inputValue.email,
        password: inputValue.password,
      });

      if (response.status === 200) router.push("/calendar");
    } catch (e) {
      console.log(e.message);
    }
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col bg-[#EADBB4] rounded-[35px] p-8 mt-8 gap-2 w-[400px]"
    >
      <input
        type="email"
        placeholder="EMAIL"
        className="w-[330px] h-[33px] rounded-[10px] px-3 text-xs outline-none"
        {...register("email", {
          required: "Email is empty.",
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
          required: "Password is empty.",
          pattern: {
            value: PASSWD_REG,
            message: "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.",
          },
        })}
      />
      {errors.password && (
        <p className="ml-1 mt-[-4px] p-0 text-sm text-red-700">
          {errors.password.message as string}
        </p>
      )}

      <input
        type="password"
        placeholder="PASSWORD"
        className="rounded-[10px] px-3 w-[330px] h-[33px] text-xs outline-none"
        {...register("passwordCheck", {
          validate: (value) => {
            console.log(value);
            console.log(inputValue.password);
            if (value !== inputValue.password)
              return "비밀번호가 일치하지 않습니다.";
          },
        })}
      />
      {errors.passwordCheck && (
        <p className="ml-1 mt-[-4px] p-0 text-sm text-red-700">
          {errors.passwordCheck.message as string}
        </p>
      )}
      <button className=" text-white rounded-lg bg-[#d6b666] w-[330px] h-[33px] text-sm p-1 mt-2 ">
        Sign up
      </button>
    </form>
  );
}
