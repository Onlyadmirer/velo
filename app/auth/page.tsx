"use client";

import Image from "next/image";
import Login from "./login/page";
import Register from "./register/page";
import { useAuth } from "./useAuth";

function Auth() {
  const { isSignIn, setIsSignIn } = useAuth();
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
      </div>
    </div>
  );
}

export default Auth;
