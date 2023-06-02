import React, { useState, useRef, useEffect }  from 'react'
import Link from 'next/link'
import Image from 'next/image';
import Transition from '@/utils/Transition'

import ant from "@/img/products/ant.jpg";
import apes from "@/img/products/apes.jpg";

export default function CartMenu() {
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
          className="relative flex shadow-menu items-center justify-center rounded-full border-2 border-gray-800 px-1 py-1 bg-white opacity-90 hover:opacity-100"
          aria-haspopup="true"
          onClick={() => setDropdownOpen(!dropdownOpen)}
          aria-expanded={dropdownOpen}
        >
             <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-shopping-cart" width="20" height="20" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
   <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
   <path d="M17 17h-11v-14h-2"></path>
   <path d="M6 5l14 1l-1 7h-13"></path>
</svg>
<div class="absolute top-0 -right-1 rounded-full px-1 font-mabry text-[10px] text-white bg-blue-700">0</div>
         
        </button>
        
  
        <Transition
          className="origin-top-right shadow-menu  absolute top-full right-0 -mr-2 md:-mr-16 sm:mr-0 min-w-80 w-64 bg-white border-2 border-gray-600 py-1.5 rounded shadow-lg overflow-hidden mt-4 md:mt-1"
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
            <ul>
              <li className="">
                <Link
                  className="block py-4 px-4 hover:bg-blue-200"
                  to="#0"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  href={'/news'}
                >
                  <div className='flex space-x-3'>
                    <div className='w-10'>
                        📄
                    </div>
                    <div className='flex flex-col space-y-1'>
                        <div className='font-semibold font-mabrybold text-sm capitalize'>News / article</div>
                        <span className='text-xs font-mabry text-gray-900 leading-4'>
                            Your very own basic web page, ready for you to customize.
                        </span>
                    </div>
                  </div>
                  
                </Link>
              </li>
              <li className="">
                <Link
                  className="block py-4 px-4 hover:bg-blue-200"
                  to="#0"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  href={'/reviews'}
                >
                  <div className='flex space-x-3'>
                    <div className='w-10'>
                    📚
                    </div>
                    <div className='flex flex-col space-y-1'>
                        <div className='font-semibold font-mabrybold text-sm capitalize'>game reviews</div>
                        <span className='text-xs font-mabry text-gray-900 leading-4'>
                        A simple Node app built with Fastify, instantly up and running.
                        </span>
                    </div>
                  </div>
                  
                </Link>
              </li>
              
            </ul>
          </div>
        </Transition>
      </div>
    );
}
