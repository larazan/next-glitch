import React, { useState, useRef, useEffect } from "react";
import Link from 'next/link'
import Transition from '@/utils/Transition'

function Notifications() {
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
        className="flex text-[#01b4e4] hover:rotate-6"
        aria-haspopup="true"
        onClick={() => setDropdownOpen(!dropdownOpen)}
        aria-expanded={dropdownOpen}
      >
        <span className="sr-only ">Notifications</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
        </svg>
        <div className="absolute top-0 right-0 w-2 h-2 bg-rose-500 border border-white rounded-full"></div>
      </button>

      <Transition
        className="origin-top-right z-10 absolute top-full right-0 -mr-6 md:-mr-20 sm:mr-0 min-w-80 w-72 bg-white shadow-menu border-2 border-gray-600 py-1.5 rounded shadow-lg overflow-hidden mt-4 md:mt-2"
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
          <div className="text-xs font-mabrybold text-slate-400 uppercase pt-1.5 pb-1 md:pb-2 px-4">
            Notifications
          </div>
          <ul>
            <li className="border-b border-slate-300 last:border-0">
              <Link
                className="block py-2 px-4 hover:bg-blue-200"
                href={'/'}
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                <span className="block text-sm font-mabry leading-tight md:leading-normal2 mb-2 text-slate-600">
                  📣{" "}
                  <span className="font-medium text-slate-700 font-mabrybold">
                    Edit your information in a swipe
                  </span>{" "}
                  Sint occaecat cupidatat non proident, sunt in culpa qui
                  officia deserunt mollit anim.
                </span>
                <span className="flex justify-end text-xs font-medium text-slate-500 font-mabry">
                  Feb 12, 2021
                </span>
              </Link>
            </li>
            <li className="border-b border-slate-300 last:border-0">
              <Link
                className="block py-2 px-4 hover:bg-blue-200"
                href={'/'}
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                <span className="block text-sm font-mabry leading-tight md:leading-normal2 mb-2 text-slate-600">
                  📣{" "}
                  <span className="font-medium text-slate-700 font-mabrybold">
                    Edit your information in a swipe
                  </span>{" "}
                  Sint occaecat cupidatat non proident, sunt in culpa qui
                  officia deserunt mollit anim.
                </span>
                <span className="flex justify-end text-xs font-medium text-slate-500 font-mabry">
                  Feb 12, 2021
                </span>
              </Link>
            </li>
            <li className="border-b border-slate-300 last:border-0">
              <Link
                className="flex flex-col py-2 px-4 hover:bg-blue-200 "
                href={'/'}
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                <span className="block text-sm font-mabry leading-tight md:leading-normal2 mb-2 text-slate-600">
                🚀{" "}
                  <span className="font-medium text-slate-700 font-mabrybold">
                  Say goodbye to paper receipts!
                  </span>{" "}
                  Sint occaecat cupidatat non proident, sunt in culpa qui
                  officia deserunt mollit anim.
                </span>
                <span className="flex justify-end text-xs font-medium text-slate-500 font-mabry">
                  Feb 12, 2021
                </span>
              </Link>
            </li>
            
          </ul>
        </div>
      </Transition>
    </div>
  );
}

export default Notifications;