import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Transition from "@/utils/Transition";

import Ava from "./Ava";

export default function UserMenu() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const trigger = useRef(null);
  const dropdown = useRef(null);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (
        !dropdownOpen ||
        dropdown.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setDropdownOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!dropdownOpen || keyCode !== 27) return;
      setDropdownOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <div className="relative inline-flex ml-3">
      <button
        ref={trigger}
        // className={`w-8 h-8 flex items-center justify-center bg-slate-100 hover:bg-slate-200 transition duration-150 rounded-full ${dropdownOpen && 'bg-slate-200'}`}
        aria-haspopup="true"
        onClick={() => setDropdownOpen(!dropdownOpen)}
        aria-expanded={dropdownOpen}
        className="rounded-full border-2 border-gray-800 shadow-menu bg-[#d54215] p-[4px]"
      >
        {/* <Avatar name="Selena gomes" size={"30"} round={true} /> */}
        {/* <Ava username={'Selena gomes'} /> */}
        <span className="text-white">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
  <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
</svg>
              </span>
      </button>

      <Transition
        className="origin-top-right z-10 absolute top-full shadow-menu right-0 -mr-2 md:-mr-2 sm:mr-0 min-w-80 w-40 bg-white border-2 border-slate-600 py-1.5 rounded shadow-lg overflow-hidden mt-2 md:mt-1.5"
        show={dropdownOpen}
        enter="transition ease-out duration-200 transform"
        enterStart="opacity-0 -translate-y-2"
        enterEnd="opacity-100 translate-y-0"
        leave="transition ease-out duration-200"
        leaveStart="opacity-100"
        leaveEnd="opacity-0"
      >
        <div
          ref={dropdown}
          onFocus={() => setDropdownOpen(true)}
          onBlur={() => setDropdownOpen(false)}
        >
          <div className="flex bg-pink-501 justify-center w-full  py-2 pb-3 md:pr-1.5">
            <Ava username={'Selena gomes'} size={45} />
          </div>
          <div className="flex flex-col text-sm font-semibold font-mabrybold text-slate-800 capitalize pt-1.5 pb-1 px-4">
            Selena gomes <span className="text-slate-500 font-mabry">@selenagomes</span>
          </div>
          <ul>
            <li className="border-b border-slate-200 last:border-0">
              <Link
                className="block py-2 px-4 hover:bg-blue-200"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                href={"/profile"}
              >
                <span className="block text-xs mb-0 font-semibold">
                  <span className="text-slate-900 capitalize font-mabrybold">
                    lihat profil
                  </span>
                </span>
              </Link>
            </li>
            <li className="last:border-0">
              <Link
                className="block py-1.5 px-4 hover:text-white text-slate-500  hover:bg-blue-200 md:hover:text-gray-900"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                href={""}
              >
                <span className="block text-sm text-gray-900 font-semibold font-mabry mb-0">
                  Akun Seting
                </span>
              </Link>
            </li>
            <li className="last:border-0">
              <Link
                className="block py-1.5 px-4  hover:text-white text-slate-500  hover:bg-blue-200 md:hover:text-gray-900"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                href={""}
              >
                <span className="block text-sm text-gray-900 font-semibold font-mabry mb-0">
                  Service status
                </span>
              </Link>
            </li>
            <li className="border-b border-slate-00 last:border-0">
              <Link
                className="block py-1.5 px-4  hover:text-white text-slate-500  hover:bg-blue-200 md:hover:text-gray-900"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                href={"/faqs"}
              >
                <span className="block text-sm text-gray-900 font-semibold font-mabry mb-0">Help</span>
              </Link>
            </li>
            <li className="border-b border-slate-200 last:border-0">
              <div
                className="flex w-full items-center space-x-2 py-1.5 px-4 "
              >
                <button onClick={() => setDropdownOpen(!dropdownOpen)} className="flex w-full shadow-menu items-center justify-center rounded border-2 border-gray-800 px-2 py-1.5 space-x-2 bg-[#e31c2d] opacity-90 hover:opacity-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-5 h-5 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                    />
                  </svg>

                  <span className="text-xs font-semibold font-mabrybold text-white">Logout</span>
                </button>
              </div>
            </li>
          </ul>
        </div>
      </Transition>
    </div>
  );
}
