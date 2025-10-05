import Image from "next/image";
import Link from "next/link";
import React from "react";
import SearchBar from "./SearchBar";
import { Bell, HomeIcon, ShoppingCartIcon } from "lucide-react";

const Navber = () => {
  return (
    <nav className=" w-full flex justify-between items-center border-b border-gray-200 pb-4">
      {/* left */}
      <Link href={"/"} className="flex items-center">
        <Image
          src={"/logo.png"}
          alt="E-Com"
          width={36}
          height={36}
          className="h-6 w-6 md:w-9 md:h-9"
        />
        <p className="text-xl font-medium tracking-wider hidden md:block">
          E-Com
        </p>
      </Link>

      {/* right */}
      <div className="flex items-center gap-6">
        <SearchBar />
        <Link href={"/"}>
          <HomeIcon className="text-gray-500 cursor-pointer h-4 w-4" />
        </Link>
        <Bell className="text-gray-500 cursor-pointer h-4 w-4" />
        <ShoppingCartIcon className="text-gray-500 cursor-pointer h-4 w-4" />
        <Link href="/login" className=" ring-1 px-2 rounded ring-gray-200 cursor-pointer font-medium hover:bg-gray-200">Sign In</Link>
      </div>
    </nav>
  );
};

export default Navber;
