import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Avatar from "react-avatar";
import Image from "next/image";
import Transition from "@/utils/Transition";

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
        className="rounded-full border-2 border-gray-800 shadow-menu"
      >
        <Avatar name="Selena gomes" size={"30"} round={true} />
      </button>

      <Transition
        className="origin-top-right z-10 absolute top-full right-0 -mr-2 md:-mr-2 sm:mr-0 min-w-80 w-40 bg-white border border-slate-400 py-1.5 rounded shadow-lg overflow-hidden mt-1"
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
          <div className="flex flex-col text-sm font-semibold font-mabrybold text-slate-800 capitalize pt-1.5 pb-1 px-4">
            Selena gomes <span className="text-slate-500 font-mabry">@selenagomes</span>
          </div>
          <ul>
            <li className="border-b border-slate-200 last:border-0">
              <Link
                className="block py-2 px-4 hover:bg-slate-50"
                to="profile"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                href={""}
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
                className="block pt-3 py-1 px-4 hover:bg-gray-800 hover:text-white text-slate-500  md:hover:bg-slate-50 md:hover:text-gray-900"
                to="settings"
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
                className="block py-1 px-4 hover:bg-gray-800 hover:text-white text-slate-500  md:hover:bg-slate-50 md:hover:text-gray-900"
                to="settings/account"
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
                className="block pb-3 py-1 px-4 hover:bg-gray-800 hover:text-white text-slate-500  md:hover:bg-slate-50 md:hover:text-gray-900"
                to="settings/account"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                href={""}
              >
                <span className="block text-sm text-gray-900 font-semibold font-mabry mb-0">Help</span>
              </Link>
            </li>
            <li className="border-b border-slate-200 last:border-0">
              <div
                className="flex items-center space-x-2 py-1.5 px-4 "
              >
                <button onClick={() => setDropdownOpen(!dropdownOpen)} className="flex shadow-menu items-center justify-center rounded border-2 border-gray-800 px-2 py-1.5 space-x-2 bg-red-100 opacity-90 hover:opacity-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                    />
                  </svg>

                  <span className="text-xs font-semibold font-mabrybold">Logout</span>
                </button>
              </div>
            </li>
          </ul>
        </div>
      </Transition>
    </div>
  );
}
