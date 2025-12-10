"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { IoIosArrowDown } from "react-icons/io";

function DropdownProfile() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className='flex flex-row items-center gap-1'>
        <h1>Akmal</h1>
        <IoIosArrowDown />
      </DropdownMenuTrigger>
      <DropdownMenuContent className='translate-y-5.5'>
        <DropdownMenuGroup>
          <DropdownMenuItem className='flex flex-row gap-2 items-center'>
            <Avatar>
              <AvatarImage src='https://github.com/shadcn.png' />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <h1>Akmal</h1>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem></DropdownMenuItem>
        <DropdownMenuItem></DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default DropdownProfile;
