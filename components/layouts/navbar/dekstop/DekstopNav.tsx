"use client";

import { FaShoppingCart } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import DropdownProfile from "../../../fragments/DropdownProfile";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { FiLogIn } from "react-icons/fi";

function DekstopNav() {
  const [mounted, setMounted] = useState(false);
  const pathName = usePathname();
  const router = useRouter();
  const [isLogIn] = useState(() => {
    return Boolean(Cookies.get("token"));
  });

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className='max-w-7xl px-8 m-auto flex flex-row justify-between'>
      <div className='flex flex-row items-center gap-8'>
        <div>
          <h1 className='font-elsie text-3xl font-bold'>VELO</h1>
        </div>
        <nav>
          <ul className='flex flex-row justify-center items-center gap-4 text-dm-sans'>
            <li>
              <Link
                href={"/"}
                className={`${
                  pathName === "/"
                    ? "text-neutral-900 border-b-2 border-neutral-600"
                    : "text-neutral-600"
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href={"/shop"}
                className={`${
                  pathName === "/shop"
                    ? "text-neutral-900 border-b-2 border-neutral-600"
                    : "text-neutral-600"
                }`}
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                href={"/contact"}
                className={`${
                  pathName === "/contact"
                    ? "text-neutral-900 border-b-2 border-neutral-600"
                    : "text-neutral-600"
                }`}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className='flex flex-row gap-4 '>
        <div className='rounded-full p-3 flex justify-center items-center bg-neutral-200'>
          <IoIosSearch />
        </div>
        {isLogIn ? (
          <>
            <Link href='/cart'>
              <div className='rounded-full p-3 flex justify-center items-center bg-neutral-200'>
                <FaShoppingCart />
              </div>
            </Link>
            <div className='flex items-center'>
              <DropdownProfile className='translate-y-5.5' />
            </div>
            <Button>Hubungi Kami</Button>
          </>
        ) : (
          <Button onClick={() => router.push("/auth")}>
            <FiLogIn />
            Sign In
          </Button>
        )}
      </div>
    </div>
  );
}

export default DekstopNav;
