import React, { useEffect, useState } from "react";
import Image from "next/image";

import pup from "@/img/pupdate.svg";

export default function Notice() {
  const [show, setShow] = useState(true)

  const handleClick = () => {
    setShow(!show);
  };
  
  return (
    <>
    {show ? 
      <div className="flex z-20 justify-between mt-12 md:mt-14 space-x-5 px-3 md:px-14 py-3 bg-[#ff8079]">
        <div className="flex space-x-5 items-center">
          <div className="w-10">
            <Image src={pup} className="w-full" alt="" />
          </div>
          <p className="flex text-sm font-mabry">
            Glitch is now part of Fastly, and we are very excited about what
            this means for the community! Read the full announcement here
          </p>
        </div>
        <div className="flex items-center space-x-5">
          <button className="flex items-center text-center justify-center h-7 w-20 font-mabrybold  py-1 px-1 bg-white rounded border border-slate-800 text-xs cursor-pointer hover:bg-[#bffff4]">
            Learn more
          </button>
          <button className="cursor-pointer" onClick={handleClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
      :
      <>
      <div className="mt-14"></div>
      </>
    }
    </>
  );
}
