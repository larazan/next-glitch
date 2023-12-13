import Link from "next/link";
import Router from "next/router";
import { useEffect, useState } from "react";
import { Logo } from "@/components/Logo";
import Menu from "./Menu";
import UserMenu from "./UserMenu";
import MiniCart from "./MiniCart";
import Notification from "./Notification";


export default function Header() {
  return (
    <>
      <header className="fixed z-20 flex h-10 md:h-14 w-full top-0 md:m-0 px-4 md:px-6 py-6 md:py-3  items-center justify-between bg-pink-200 border-b shadow">
        <div className="flex w-full md:w-3/5 justify-between space-x-4">
          <div className="flex justify-between w-full md:w-[100px]">
            {/* <button className="h-8 w-8 md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </button> */}
            <div className="flex justify-center items-center">
              <Link href={"/"}>
                <Logo className="h-6 text-red-600" />
              </Link>
            </div>
            
          </div>
          
        </div>
        <div className="flex flex-row space-x-3">
          <div className="flex space-x-2 items-center">
            
      
            
            
            <UserMenu />
            <MiniCart />
            <Menu />
          </div>
        </div>
      </header>
    </>
  );
}
