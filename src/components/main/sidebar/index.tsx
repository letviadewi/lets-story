import React from "react";
import { Menu } from "../navbar/menu";
import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="fixed top-0 w-[15%] bg-white left-0 h-screen border-r-[1px] border-gray-300 p-6">
      <header className="mb-8">
        <p className="text-3xl text-center font-bold">Let's Story</p>
      </header>
      <menu className="">
        <ul className="flex flex-col">
          {Menu.map((item: any, index: number) => (
            <li key={index} className="hover:bg-gray-100 p-2 rounded-lg">
              <Link href={item.path} className="text-2xl hover:text-gray-700">
                {item.menu}
              </Link>
            </li>
          ))}
        </ul>
      </menu>
        <hr className="my-8 text-gray-200"/>
        <menu className="">
        <ul>
            <li className="flex flex-col">
              <Link href={"/login"} className="text-2xl hover:text-gray-700 hover:bg-gray-100 p-2 rounded-lg">
                Logout
              </Link>
              <Link href={"/login"} className="text-2xl hover:text-gray-700 hover:bg-gray-100 p-2 rounded-lg">
                Settings
              </Link>
            </li>
        </ul>
      </menu>
    </div>
  );
}
