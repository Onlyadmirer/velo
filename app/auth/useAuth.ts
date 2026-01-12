import { fetchAPI } from "@/lib/fetcher";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { LoginForm, RegisterForm } from "./schema/authSchema";
import Cookies from "js-cookie";
import { UseFormReset } from "react-hook-form";
import { User } from "@/types/user";

export const useAuth = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const router = useRouter();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  // Register Function
  const onSubmitRegister = async (
    data: RegisterForm,
    reset: UseFormReset<RegisterForm>
  ) => {
    try {
      await fetchAPI("/register", {
        method: "POST",
        body: JSON.stringify({
          email: data.email,
          password: data.password,
          name: data.name,
        }),
      });

      toast.success("Registration Succsessfully, Please Sign In");
      reset();
      setIsSignIn(true);
    } catch (error) {
      console.error(error);
      toast.error("Registration Failed");
    }
  };

  // Login Function
  const onSubmitLogin = async (data: LoginForm) => {
    try {
      const response = await fetchAPI("/login", {
        method: "POST",
        body: JSON.stringify(data),
      });

      const token = response.data?.token || response.token;

      if (!token) throw new Error("Token not found");

      Cookies.set("token", token, { expires: 1 });

      toast.success("Login successfully");
      router.refresh();
      router.push("/");
    } catch (error) {
      console.error(error);
      toast.error("Login failed, Email or Password is incorrect");
    }
  };

  // get data user
  const fetchUser = async () => {
    const token = Cookies.get("token");
    if (!token) {
      return;
    }
    try {
      const response = await fetchAPI("/me", {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      });
      if (response.data) {
        setUser(response.data);
      }
    } catch (error) {
      console.error("gagal ambil data user", error);
      Cookies.remove("token");
      setUser(null);
    }
  };

  // logout
  const logout = async () => {
    try {
      await fetchAPI("/logout", {
        method: "POST",
      });
    } catch (error) {
      console.error("gagal logout", error);
    } finally {
      Cookies.remove("token");
      setUser(null);
      router.push("/auth");
      router.refresh();
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return {
    onSubmitLogin,
    onSubmitRegister,
    user,
    logout,
    isSignIn,
    setIsSignIn,
    router,
    passwordVisible,
    setPasswordVisible,
  };
};
