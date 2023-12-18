import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Transition from "@/utils/Transition";

import ProductItem from "./ProductItem";

import ant from "@/img/products/ant.jpg";
import apes from "@/img/products/apes.jpg";

import empty from "@/img/empty-cart.jpg";

export default function MiniCart() {
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
    <div className="relative inline-flex ml-3 z-20">
      <button
        ref={trigger}
        className="relative flex shadow-menu items-center justify-center rounded-full border-2 border-gray-800 px-1 py-1 text-gray-900 bg-[#77d87e] opacity-90 hover:opacity-100"
        aria-haspopup="true"
        onClick={() => setDropdownOpen(!dropdownOpen)}
        aria-expanded={dropdownOpen}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5"
        >
          <path
            fillRule="evenodd"
            d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z"
            clipRule="evenodd"
          />
        </svg>

        <div className="absolute top-0 -right-1 rounded-full px-1 font-mabry text-[10px] text-white bg-blue-700">
          0
        </div>
      </button>

      <Transition
        className="origin-top-right shadow-menu  absolute top-full right-0 -mr-2 md:-mr-10 sm:mr-0 min-w-80 w-64 bg-white border-2 border-gray-600 py-1.5 rounded shadow-lg overflow-hidden mt-2 md:mt-1.5"
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
          <div className="text-xs font-semibold font-mabrybold text-slate-400 uppercase pt-1.5 pb-1 md:pb-2 px-4">
            Cart
          </div>
          <div className="flex flex-col w-full px-2">
            <div className="flex h-4/6 flex-col gap-y-2 h-[520px]] overflow-y-auto overflow-x-hidden border-b2">
              <ProductItem />
            </div>
            <div className="flex h-2/6 items-end justify-end flex-col gap-y-3 pt-8 mt-0">
          <div className="flex w-full justify-between items-center">
            <div className=" font-mabrybold text-slate-900">
              <span className="mr-2">Subtotal:</span>
            </div>
            <div className="uppercase font-mabrybold">$ 200.00</div>
          </div>
          {/* <Link
            href={"/cart"}
            className="bg-[#001838] hover:opacity-80 uppercase tracking-tight text-white rounded flex p-3 justify-center items-center w-full font-semibold"
          >
            View Cart
          </Link> */}
          <Link
                    className="relative w-full inline-block  group text-center"
                    href="/checkout"
                  >
                    <span className="relative flex button w-full px-2 py-3 justify-center overflow-hidden leading-tight text-sm font-mabrybold text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-800 rounded ">
                      <span className="absolute inset-0 w-full h-full px-5 py-3 rounded bg-yellow-200 group-hover:bg-yellow-300"></span>
                      <span className="relative text-md font-mabrybold">
                        Checkout
                      </span>
                    </span>
                  </Link>
        </div>
          </div>

          <ul className="hidden">
            <li className="">
              <div className="px-5 md:px-7 pt-0 pb-2 flex justify-center flex-col items-center">
                <Image src={empty} alt="" />
                <h3 className="text-sm md:text-md font-mabrybold pt-0 text-gray-900">
                  Your cart is empty.
                </h3>
              </div>
            </li>
            <li className="last:border-0 w-full">
              <div className="flex  mx-auto w-5/6 ">
                <div className="flex w-full pt-3">
                  <Link
                    className="relative w-full inline-block  group text-center"
                    href="/checkout"
                  >
                    <span className="relative flex button w-full px-2 py-3 justify-center overflow-hidden leading-tight text-sm font-mabrybold text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-800 rounded ">
                      <span className="absolute inset-0 w-full h-full px-5 py-3 rounded bg-yellow-200 group-hover:bg-yellow-300"></span>
                      <span className="relative text-md font-mabrybold">
                        Checkout
                      </span>
                    </span>
                  </Link>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </Transition>
    </div>
  );
}
