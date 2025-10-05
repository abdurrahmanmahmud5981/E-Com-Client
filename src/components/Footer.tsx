import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="mt-16 flex flex-col items-center gap-8 md:flex-row md:items-start md:justify-between md:gap-0 bg-gray-800 p-8 rounded-lg text-white">
      <div className="flex flex-col items-center md:items-start gap-4">
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
        <p className="text-sm text-gray-400">© 2025 E-Com.</p>
        <p className="text-sm text-gray-400"> All rights reserved.</p>
      </div>
      <div className="flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start">
        <p className="text-sm text-amber-50">Links</p>
        <Link href={"/"}>Home</Link>
        <Link href={"/contact"}>Contact</Link>
        <Link href={"/"}>Term Of Services</Link>
        <Link href={"/"}>Privacy Policy</Link>
      </div>
      <div className="flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start">
        <p className="text-sm text-amber-50">Links</p>
        <Link href={"/"}>Home</Link>
        <Link href={"/contact"}>Contact</Link>
        <Link href={"/"}>Term Of Services</Link>
        <Link href={"/"}>Privacy Policy</Link>
      </div>
      <div className="flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start">
        <p className="text-sm text-amber-50">Links</p>
        <Link href={"/"}>Home</Link>
        <Link href={"/contact"}>Contact</Link>
        <Link href={"/"}>Term Of Services</Link>
        <Link href={"/"}>Privacy Policy</Link>
      </div>
    </div>
  );
};

export default Footer;
