import { useRouter } from "next/navigation";
import { useState } from "react";

export const useAuth = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const router = useRouter();
  const [passwordVisible, setPasswordVisible] = useState(false);
  return {isSignIn, setIsSignIn, router, passwordVisible, setPasswordVisible}
};
