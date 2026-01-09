"use client";

import Image from "next/image";
import Login from "./login/page";
import { useState } from "react";
import Register from "./register/page";
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaGithub } from "react-icons/fa";

function Auth() {
  const [isSignIn, setIsSignIn] = useState(true);

  return (
    <div className='grid lg:grid-cols-2 h-screen w-full'>
      <div className='relative lg:block hidden'>
        <Image
          src={
            "https://images.unsplash.com/photo-1703355685639-d558d1b0f63e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b3Jrc3BhY2UlMjBvZmZpY2V8ZW58MXx8fHwxNzY3ODUxODkyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          }
          alt='auth image'
          fill
        ></Image>
        <div className='absolute inset-0 bg-gray-900/60 text-gray-50 flex flex-col gap-4 justify-center px-20'>
          <h1 className='text-5xl font-bold'>
            Welcome to <span className='font-elsie'>VELO</span>!
          </h1>
          <p className='text-lg'>
            Join our community and explore amazing products. Sign in to continue
            your journey with us.
          </p>
        </div>
      </div>
      <div className='flex flex-col justify-center max-w-2xl mx-auto p-6'>
        <div className='flex justify-center items-center flex-col gap-4'>
          <h1 className='text-3xl font-bold'>
            {isSignIn ? "Sign In" : "Create Account"}
          </h1>
          <p className='text-gray-600'>
            {isSignIn
              ? "Enter your credentials to access your account"
              : "Fill in your details to get started"}
          </p>
        </div>

        {/* Toggle Tabs */}
        <div className='flex gap-4 my-8 border-b border-gray-200'>
          <button
            onClick={() => setIsSignIn(true)}
            className={`pb-3 px-1 relative ${
              isSignIn
                ? "text-gray-600 font-medium"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Sign In
            {isSignIn && (
              <div className='absolute bottom-0 left-0 right-0 h-0.5 bg-gray-600'></div>
            )}
          </button>
          <button
            onClick={() => setIsSignIn(false)}
            className={`pb-3 px-1 relative ${
              !isSignIn
                ? "text-gray-600 font-medium"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Sign Up
            {!isSignIn && (
              <div className='absolute bottom-0 left-0 right-0 h-0.5 bg-gray-600'></div>
            )}
          </button>
        </div>
        {isSignIn ? <Login /> : <Register />}

        {/* Social Login Divider */}
        <div className='relative my-6'>
          <div className='absolute inset-0 flex items-center'>
            <div className='w-full border-t border-gray-200'></div>
          </div>
          <div className='relative flex justify-center text-sm'>
            <span className='px-4 bg-white text-gray-500'>
              Or continue with
            </span>
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
          {isSignIn ? "Don't have an account? " : "Already have an account? "}
          <button
            onClick={() => setIsSignIn(!isSignIn)}
            className='text-blue-600 hover:text-blue-700 font-medium cursor-pointer'
          >
            {isSignIn ? "Sign Up" : "Sign In"}
          </button>
        </p>
      </div>
    </div>
  );
}

export default Auth;
