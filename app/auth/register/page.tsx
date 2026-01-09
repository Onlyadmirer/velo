"use client";

import { useForm } from "react-hook-form";
import { RegisterForm, formRegisterSchema } from "../schema/authSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { LuEye, LuEyeClosed } from "react-icons/lu";
import { fetchAPI } from "@/lib/fetcher";
import { toast } from "sonner";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { useAuth } from "../useAuth";

function Register() {
  const { isSignIn, setIsSignIn, passwordVisible, setPasswordVisible } =
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

  const onSubmit = async (data: RegisterForm) => {
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
    } catch (error) {
      console.error(error);
      toast.error("Registration Failed");
    }
  };

  return (
    <div className='w-94 mx-auto'>
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-6'>
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

      {/* Social Login Buttons */}
      <div className='grid grid-cols-3 gap-3'>
        <Button variant='outline' disabled={isSubmitting} className='w-full'>
          <FcGoogle />
        </Button>
        <Button variant='outline' disabled={isSubmitting} className='w-full'>
          <FaGithub />
        </Button>
        <Button variant='outline' disabled={isSubmitting} className='w-full'>
          <FaFacebook />
        </Button>
      </div>

      {/* Footer Text */}
      <p className='text-center text-sm text-gray-600 mt-6'>
        {isSignIn ? "Don't have an account? " : "Already have an account? "}
        <button
          onClick={() => setIsSignIn(!isSignIn)}
          disabled={isSubmitting}
          className='text-blue-600 hover:text-blue-700 font-medium cursor-pointer'
        >
          {isSignIn ? "Sign Up" : "Sign In"}
        </button>
      </p>
    </div>
  );
}

export default Register;
