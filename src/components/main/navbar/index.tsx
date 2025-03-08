import Link from "next/link";
import React from "react";
import { Menu } from "./menu";

export default function Navbar() {
  return (
    <div className="flex justify-between shadow items-center py-8 px-28">
      <div className="w-2/3">
        <p className="text-[32px]">Let's Story</p>
      </div>
      <div className="w-1/3 flex gap-8">
        {Menu.map((item: any) => (
          <Link href={item.path} className="text-2xl hover:text-gray-700">{item.menu}</Link>
        ))}
      </div>
    </div>
  );
}
