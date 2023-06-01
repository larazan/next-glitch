import React, { useState, useRef, useEffect }  from 'react'
import Link from 'next/link'
import Image from 'next/image';
import Transition from '@/utils/Transition'

import web from '@/img/web.png'
import node from '@/img/node.png'
import react from '@/img/react.png'

import menu1 from '@/img/menu1.jpg'
import menu2 from '@/img/menu2.jpg'
import menu3 from '@/img/menu3.jpg'
import menu4 from '@/img/menu4.jpg'
import menu5 from '@/img/menu5.jpg'

export default function Menu() {
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
          // className={`w-8 h-8 flex items-center justify-center bg-slate-100 hover:bg-slate-200 transition duration-150 rounded-full ${dropdownOpen && 'bg-slate-200'}`}
          className="flex  items-center shadow-menu justify-center rounded border-2 border-gray-800 px-3 py-1.5 space-x-1 bg-white opacity-90 hover:opacity-100"
          aria-haspopup="true"
          onClick={() => setDropdownOpen(!dropdownOpen)}
          aria-expanded={dropdownOpen}
        >
            <span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </span>
          <span className="text-xs font-semibold font-mabrybold">Menu</span>
         
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
              Menu
            </div>
            <ul>
              <li className="">
                <Link
                  className="block py-4 px-4 hover:bg-blue-500"
                  to="#0"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  href={'/news'}
                >
                  <div className='flex space-x-3'>
                    <div className='w-10'>
                        <Image src={menu1} alt="" />
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
                  className="block py-4 px-4 hover:bg-blue-500"
                  to="#0"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  href={'/reviews'}
                >
                  <div className='flex space-x-3'>
                    <div className='w-10'>
                        <Image src={menu2} alt="" />
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
              <li className="">
                <Link
                  className="block py-4 px-4 hover:bg-blue-500"
                  to="#0"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  href={'/forums'}
                >
                  <div className='flex space-x-3'>
                    <div className='w-10'>
                        <Image src={react} alt="" />
                    </div>
                    <div className='flex flex-col space-y-1'>
                        <div className='font-semibold font-mabrybold text-sm capitalize'>forum / discussions</div>
                        <span className='text-xs font-mabry text-gray-900 leading-4'>
                        Get started with a new React project on Glitch!
                        </span>
                    </div>
                  </div>
                  
                </Link>
              </li>
              <li className="">
                <Link
                  className="block py-4 px-4 hover:bg-blue-500"
                  to="#0"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  href={'/guides'}
                >
                  <div className='flex space-x-3'>
                    <div className='w-10'>
                        <Image src={react} alt="" />
                    </div>
                    <div className='flex flex-col space-y-1'>
                        <div className='font-semibold font-mabrybold text-sm capitalize'>guide / walkthrough</div>
                        <span className='text-xs font-mabry text-gray-900 leading-4'>
                        Get started with a new React project on Glitch!
                        </span>
                    </div>
                  </div>
                  
                </Link>
              </li>
              <li className="">
                <Link
                  className="block py-4 px-4 hover:bg-blue-500"
                  to="#0"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  href={'/products'}
                >
                  <div className='flex space-x-3'>
                    <div className='w-10'>
                        <Image src={web} alt="" />
                    </div>
                    <div className='flex flex-col space-y-1'>
                        <div className='font-semibold font-mabrybold text-sm capitalize'>best deals</div>
                        <span className='text-xs font-mabry text-gray-900 leading-4'>
                            Your very own basic web page, ready for you to customize.
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
