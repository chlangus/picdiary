import { useForm } from "react-hook-form";
import axiosInstance from "../libs/axios";
import { useRouter } from "next/navigation";

export default function useSignin() {
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
        console.error(e.message);
      setError("email", { type: "custom", message: "이메일을 확인해 주세요." });
      setError("password", {
        type: "custom",
        message: "비밀번호를 확인해 주세요.",
      });
    }
  };

  const inputValue = watch();

  return { register, errors, handleSubmit, onSubmit };
}
