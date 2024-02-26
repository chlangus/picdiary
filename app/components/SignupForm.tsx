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
  } = useForm({
    defaultValues: { email: "", password: "", passwordCheck: "" },
    mode: "onBlur",
  });
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
      className="flex flex-col bg-[#EADBB4] rounded-[35px] p-8 mt-8 gap-3 w-[400px]"
    >
      <input
        type="email"
        placeholder="이메일"
        className="p-5 w-[330px] h-[33px] rounded-[10px] px-3 text-sm outline-none"
        {...register("email", {
          required: "이메일을 입력해주세요.",
          pattern: {
            value: EMAIL_REG,
            message: "올바른 이메일 주소가 아닙니다.",
          },
        })}
      />
      {errors.email && (
        <p className="ml-1 mt-[-4px] p-0 text-xs text-red-700">
          {errors.email.message as string}
        </p>
      )}
      <input
        type="password"
        placeholder="비밀번호"
        className="p-5 rounded-[10px] px-3 w-[330px] h-[33px] text-sm outline-none"
        {...register("password", {
          required: "비밀번호를 입력해 주세요.",
          pattern: {
            value: PASSWD_REG,
            message: "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.",
          },
        })}
      />
      {errors.password && (
        <p className="ml-1 mt-[-4px] p-0 text-xs text-red-700">
          {errors.password.message as string}
        </p>
      )}

      <input
        type="password"
        placeholder="비밀번호 확인"
        className="p-5 rounded-[10px] px-3 w-[330px] h-[33px] text-sm outline-none"
        {...register("passwordCheck", {
          validate: (value) => {
            if (value !== inputValue.password)
              return "비밀번호가 일치하지 않습니다.";
          },
        })}
      />
      {errors.passwordCheck && (
        <p className="ml-1 mt-[-4px] p-0 text-xs text-red-700">
          {errors.passwordCheck.message as string}
        </p>
      )}
      <button className=" text-white rounded-lg bg-[#d6b666] w-[330px] h-[33px] text-sm p-5 flex mt-4 mb-[-6px] justify-center items-center">
        회원가입
      </button>
    </form>
  );
}
