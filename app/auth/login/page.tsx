"use client";

import { useForm } from "react-hook-form";
import { LoginForm, formLoginSchema } from "../schema/authSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { LuEye, LuEyeClosed } from "react-icons/lu";
import { useState } from "react";

function Login() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
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
      <form className='flex flex-col gap-6'>
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
    </div>
  );
}

export default Login;
