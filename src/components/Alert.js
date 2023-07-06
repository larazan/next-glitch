import React, { useState } from "react";
import Link from "next/link";

export const Alert = () => {
  const [show, setShow] = useState(true);

  const handleClick = () => {
    setShow(!show);
  };
  return (
    <>
      {show ? (
        <div className="flex w-96 items-center space-x-2 fixed z-50 bottom-6 left-5 py-2.5 px-3 border-2 border-gray-800 text-sm leading-7.5 font-mabrybold bg-red-700 text-white">
          <span>
            Oops! Something went wrong. Please reload the page and try again.
          </span>
          <div onClick={handleClick} className="cursor-pointer">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={4}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </span>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};
