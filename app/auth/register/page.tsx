"use client";

import { useForm } from "react-hook-form";
import { RegisterForm, formRegisterSchema } from "../schema/authSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { LuEye, LuEyeClosed } from "react-icons/lu";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { useAuth } from "../useAuth";

interface RegisterProps {
  onSwitch: () => void;
}

function Register({ onSwitch }: RegisterProps) {
  const { onSubmitRegister, router, passwordVisible, setPasswordVisible } =
    useAuth();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<RegisterForm>({
    resolver: zodResolver(formRegisterSchema),
    defaultValues: {
      email: "",
      name: "",
      password: "",
    },
  });

  const handleRegisterSubmit = (data: RegisterForm) => {
    onSubmitRegister(data, reset);
  };

  return (
    <div className='w-94 mx-auto'>
      <form
        onSubmit={handleSubmit(handleRegisterSubmit)}
        className='flex flex-col gap-6'
      >
        <div>
          <Label className='mb-1'>Email Address</Label>
          <Input
            placeholder='Email'
            required
            id='email'
            type='email'
            disabled={isSubmitting}
            {...register("email")}
            className='bg-gray-100'
          />
        </div>
        <div>
          <Label className='mb-1'>Name</Label>
          <Input
            placeholder='Your Name'
            required
            id='name'
            type='text'
            disabled={isSubmitting}
            {...register("name")}
            className='bg-gray-100'
          />
        </div>
        <div>
          <Label className='mb-1'>Password</Label>
          <div className='flex flex-row gap-1'>
            <Input
              placeholder='********'
              id='password'
              disabled={isSubmitting}
              type={passwordVisible ? "text" : "password"}
              {...register("password")}
              className='bg-gray-100'
            />
            <Button
              variant={"outline"}
              type='button'
              className='bg-gray-100'
              onClick={() => setPasswordVisible(!passwordVisible)}
              disabled={isSubmitting}
            >
              {passwordVisible ? <LuEye /> : <LuEyeClosed />}
            </Button>
          </div>
          <p className='text-sm text-red-500'>{errors.password?.message}</p>
        </div>
        <Button type='submit' disabled={isSubmitting}>
          {isSubmitting ? "Creating Account..." : "Create Account"}
        </Button>
      </form>

      {/* Social Login Divider */}
      <div className='relative my-6'>
        <div className='absolute inset-0 flex items-center'>
          <div className='w-full border-t border-gray-200'></div>
        </div>
        <div className='relative flex justify-center text-sm'>
          <span className='px-4 bg-white text-gray-500'>Or continue with</span>
        </div>
      </div>

      {/* google Login Buttons */}
      <div>
        <Button
          onClick={() => router.push("http://localhost:8080/auth/google/login")}
          variant='outline'
          disabled={isSubmitting}
          className='w-full'
        >
          <FcGoogle />
          Google
        </Button>
      </div>

      {/* Footer Text */}
      <p className='text-center text-sm text-gray-600 mt-6'>
        Already have an account?
        <button
          onClick={onSwitch}
          disabled={isSubmitting}
          className='text-blue-600 hover:text-blue-700 font-medium cursor-pointer'
        >
          Sign In
        </button>
      </p>
    </div>
  );
}

export default Register;
