import DropdownProfile from "@/components/fragments/DropdownProfile";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BsTelephoneInbound } from "react-icons/bs";
import { FaBars, FaShoppingCart } from "react-icons/fa";
import { GoHome } from "react-icons/go";
import { IoIosSearch } from "react-icons/io";
import { IoPerson } from "react-icons/io5";
import { RiShoppingBag4Line } from "react-icons/ri";

function MobileNav() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className='px-8 flex justify-between items-center'>
      <div>
        <h1 className='font-elsie text-3xl font-bold'>VELO</h1>
      </div>
      <div className='flex flex-row gap-3 items-center'>
        <div className='rounded-full p-2 flex justify-center items-center bg-neutral-200'>
          <IoIosSearch size={20} />
        </div>
        <div className='rounded-full p-2 flex justify-center items-center bg-neutral-200'>
          <FaShoppingCart size={20} />
        </div>
        <Sheet>
          <SheetTrigger>
            <FaBars size={22} />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle className='text-2xl'>Navigation</SheetTitle>
            </SheetHeader>
            <nav className='px-4'>
              <ul className='flex flex-col text-lg justify-center gap-2 text-dm-sans'>
                <li>
                  <Link href='/' scroll={false}>
                    <div className='bg-neutral-100 p-2 w-full rounded-lg flex flex-row items-center gap-4 px-6'>
                      <GoHome />
                      <p>Home</p>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href='/shop' scroll={false}>
                    <div className='bg-neutral-100 p-2 w-full rounded-lg flex flex-row items-center gap-4 px-6'>
                      <RiShoppingBag4Line />
                      <p>Shop</p>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href='/contact' scroll={false}>
                    <div className='bg-neutral-100 p-2 w-full rounded-lg flex flex-row items-center gap-4 px-6'>
                      <BsTelephoneInbound />
                      <p>Contact Us</p>
                    </div>
                  </Link>
                </li>
              </ul>
            </nav>
            <SheetFooter className='flex gap-4'>
              <div className='flex items-center gap-4 flex-row'>
                <IoPerson />
                <DropdownProfile
                  align='start'
                  className='w-64 -translate-x-4.5'
                />
              </div>
              <Button>Hubungi Kami</Button>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}

export default MobileNav;
