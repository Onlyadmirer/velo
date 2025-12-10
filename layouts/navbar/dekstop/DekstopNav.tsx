"use client";

import { FaShoppingCart } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import DropdownProfile from "./DropdownProfile";
import Link from "next/link";
import { usePathname } from "next/navigation";

function DekstopNav() {
  const pathName = usePathname();

  return (
    <div className='max-w-7xl m-auto flex flex-row justify-between'>
      <div className='flex flex-row items-center gap-8'>
        <div>
          <h1 className='font-elsie text-3xl font-bold'>AkmalShop</h1>
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
                href={"/contactUs"}
                className={`${
                  pathName === "/contactUs"
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
          <FaShoppingCart />
        </div>
        <div className='rounded-full p-3 flex justify-center items-center bg-neutral-200'>
          <IoIosSearch />
        </div>
        <div className='flex items-center'>
          <DropdownProfile />
        </div>
      </div>
    </div>
  );
}

export default DekstopNav;
