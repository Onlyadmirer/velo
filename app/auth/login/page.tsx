"use client";

import { useForm } from "react-hook-form";
import { LoginForm, formSchema } from "./schema/Schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function Login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<LoginForm>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  return (
    <div className='flex flex-col gap-6'>
      <div className='flex justify-center items-center flex-col gap-4'>
        <h1 className='text-3xl font-bold'>Sign In</h1>
        <p className='text-gray-600'>
          Enter your credentials to access your account
        </p>
      </div>
      <div>
        <form className='flex flex-col gap-6'>
          <div>
            <Label className='mb-1'>Email Address</Label>
            <Input
              placeholder='Email'
              {...register("email")}
              className='bg-gray-100'
            />
          </div>
          <div>
            <Label className='mb-1'>Password</Label>
            <Input
              placeholder='*****'
              {...register("password")}
              className='bg-gray-100'
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
