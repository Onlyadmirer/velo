import Image from "next/image";
import Login from "./login/page";

function Auth() {
  return (
    <div className='grid grid-cols-2 h-screen w-full'>
      <div className='relative'>
        <Image
          src={
            "https://images.unsplash.com/photo-1703355685639-d558d1b0f63e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b3Jrc3BhY2UlMjBvZmZpY2V8ZW58MXx8fHwxNzY3ODUxODkyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          }
          alt='auth image'
          fill
        ></Image>
        <div className='absolute inset-0 bg-gray-900/60 text-gray-50 flex flex-col gap-4 justify-center px-20'>
          <h1 className='text-5xl font-bold'>Welcome Back!</h1>
          <p className='text-lg'>
            Join our community and explore amazing products. Sign in to continue
            your journey with us.
          </p>
        </div>
      </div>
      <div className='flex justify-center items-center p-6'>
        <Login />
      </div>
    </div>
  );
}

export default Auth;
