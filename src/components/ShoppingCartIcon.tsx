"use client";

import Link from "next/link";
import { ShoppingCart } from 'lucide-react';

const ShoppingCartIcon = () => {
  return (
    <Link className="relative" href={"/cart"}>
      {" "}
      <ShoppingCart className="text-gray-500 cursor-pointer h-4 w-4" />
      <span className="absolute -top-3 -right-3 bg-amber-400 text-gray-600 rounded-full w-4 h-4 flex justify-center items-center text-sm font-medium">0</span>
    </Link>
  );
};

export default ShoppingCartIcon;
