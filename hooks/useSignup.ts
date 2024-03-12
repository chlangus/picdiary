import { useRouter } from "next/navigation";
import axiosInstance from "../libs/axios";
import { useForm } from "react-hook-form";

export default function useSignup() {
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

      if (response.status === 200) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("email", response.data.email);
        router.push("/calendar");
      }
    } catch (e) {
      console.error(e.message);
    }
  };

  return { handleSubmit, onSubmit, register, errors, inputValue };
}
