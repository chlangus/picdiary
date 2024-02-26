import { useForm } from "react-hook-form";
import { EMAIL_REG } from "./SignupForm";
import axiosInstance from "../../libs/axios";
import { useRouter } from "next/navigation";

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
    try {
      const response = await axiosInstance.post("/auth/login", {
        email: inputValue.email,
        password: inputValue.password,
      });
      if (response.status === 200) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("email", response.data.email);
        router.push("/calendar");
      }
    } catch (e) {
      console.log(e.message);
      setError("email", { type: "custom", message: "이메일을 확인해 주세요." });
      setError("password", {
        type: "custom",
        message: "비밀번호를 확인해 주세요.",
      });
    }
  };

  const inputValue = watch();
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col  bg-[#EADBB4] rounded-[35px] p-8 mt-8 gap-3 w-[400px]"
    >
      <input
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
          required: "패스워드를 입력해주세요",
        })}
      />
      {errors.password && (
        <p className="ml-1 mt-[-4px] text-xs text-red-700">
          {errors.password.message as string}
        </p>
      )}
      <button className=" text-white rounded-lg bg-[#d6b666] w-[330px] h-[33px] text-sm p-5 flex mt-4 mb-[-6px] justify-center items-center">
        로그인
      </button>
    </form>
  );
}
