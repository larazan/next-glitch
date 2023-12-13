import { useEffect, useState } from "react";
import Image from "next/image";

import cookiee from "@/img/cookiee.png";

export default function CookieConfirm() {
  const [isShow, setIsShow] = useState(true);

  const handleClick = () => {
    setIsShow(!isShow);
  };

  return (
    <>
      {isShow ? (
        <section
          className=" w-full z-30 p-6 md:px-12 fixed bottom-0 border-t border-gray-200 bg-[#ffff00]2 bg-white shadow-md md:shadow-lg"
          x-show="showCookieBanner"
        >
          <div className="absolute top-1 right-1 flex justify-end">
            <div className="cursor-pointer" onClick={handleClick}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 md:w-6 md:h-6 text-gray-900"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
          </div>
          <div className=" md:flex w-full items-center">
            <div className="md:w-4/6 w-full md:flex-row md:items-center flex flex-col space-x-4 space-y-3 md:space-y-0 px-3 mb-5 md:mb-0">
              <div className="w-12 flex justify-start2">
                <Image src={cookiee} alt="" />
              </div>
              <p className="text-center md:text-left text-slate-900 text-sm md:text-[16px] leading-tight md:leading-snug md:pr-12 font-mabrybold">
                🍪 This website uses cookies to ensure you get the best
                experience on our website.
              </p>
            </div>
            <div className="md:w-2/6 flex flex-row md:flex-row-reverse2 justify-between w-full space-x-2 px-3 text-center">
              <button
                id="btn"
                className="w-1/2 md:w-36 flex justify-center py-2 px-3 border-2 text-gray-900 border-gray-900 bg-white font-mabrybold text-sm hover:underline"
                onClick={handleClick}
              >
                Accept
              </button>
              <button
                id="btn"
                className="w-1/2 md:w-36 flex justify-center py-2 px-3 border-2 text-gray-900 border-gray-900 bg-white font-mabrybold text-sm hover:underline"
              >
                Decline
              </button>
            </div>
          </div>
        </section>
      ) : (
        <></>
      )}
    </>
  );
}
