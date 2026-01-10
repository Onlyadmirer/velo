"use client";

import { useForm } from "react-hook-form";
import { LoginForm, formLoginSchema } from "../schema/authSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { LuEye, LuEyeClosed } from "react-icons/lu";
import { useAuth } from "../useAuth";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

interface LoginProops {
  onSwitch: () => void;
}

function Login({ onSwitch }: LoginProops) {
  const { onSubmitLogin, passwordVisible, setPasswordVisible } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    resolver: zodResolver(formLoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return (
    <div className='w-94 mx-auto'>
      <form
        onSubmit={handleSubmit(onSubmitLogin)}
        className='flex flex-col gap-6'
      >
        <div>
          <Label className='mb-1'>Email Address</Label>
          <Input
            placeholder='Email'
            required
            id='email'
            type='email'
            {...register("email")}
            className='bg-gray-100'
          />
        </div>
        <div>
          <Label className='mb-1'>Password</Label>
          <div className='flex flex-row gap-1'>
            <Input
              placeholder='********'
              id='password'
              type={passwordVisible ? "text" : "password"}
              {...register("password")}
              className='bg-gray-100'
            />
            <Button
              variant={"outline"}
              type='button'
              className='bg-gray-100'
              onClick={() => setPasswordVisible(!passwordVisible)}
            >
              {passwordVisible ? <LuEye /> : <LuEyeClosed />}
            </Button>
          </div>
          <p className='text-sm text-red-500'>{errors.password?.message}</p>
        </div>
        <Button type='submit'>Sign in</Button>
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

      {/* Social Login Buttons */}
      <div className='grid grid-cols-3 gap-3'>
        <Button variant='outline' className='w-full'>
          <FcGoogle />
        </Button>
        <Button variant='outline' className='w-full'>
          <FaGithub />
        </Button>
        <Button variant='outline' className='w-full'>
          <FaFacebook />
        </Button>
      </div>

      {/* Footer Text */}
      <p className='text-center text-sm text-gray-600 mt-6'>
        Don't have an account?
        <button
          onClick={onSwitch}
          className='text-blue-600 hover:text-blue-700 font-medium cursor-pointer'
        >
          Sign Up
        </button>
      </p>
    </div>
  );
}

export default Login;
