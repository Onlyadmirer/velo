import Image from "next/image";
import { Button } from "../ui/button";
import { IoMdArrowForward } from "react-icons/io";
import Link from "next/link";

function HeroSection() {
  return (
    <div className='relative h-[calc(100vh-4rem)]'>
      <div className='absolute inset-0'>
        <Image
          src={"/hero.jpeg"}
          alt='toko online'
          className='object-cover w-full h-full'
          width={500}
          height={500}
          priority
        />
        <div className='absolute inset-0 bg-black/40'></div>
      </div>
      <div className='z-10 h-full relative px-4 flex flex-col gap-2 justify-center sm:items-center'>
        <div className='flex flex-col gap-2 justify-center sm:items-center'>
          <h1 className='text-6xl md:text-7xl sm:text-center text-neutral-50'>
            Gaya Terbaru untuk Anda
          </h1>
          <h2 className='text-3xl text-neutral-50'>
            Diskon hingga 50% untuk koleksi pilihan
          </h2>
        </div>
        <div className='py-4 flex flex-col items-start justify-start sm:flex-row gap-4'>
          <Link href={"/shop"}>
            <Button className='rounded-full' size={"lg"}>
              Belanja Sekarang
              <IoMdArrowForward className='translate-y-0.5' />
            </Button>
          </Link>
          <Button
            variant={"outline"}
            size={"lg"}
            className='bg-transparent text-neutral-50 rounded-full'
          >
            Lihat Koleksi
          </Button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
