import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

import among from "@/img/among.jpg";
import ark from "@/img/ark.jpg";
import bloons from "@/img/bloons.jpg";
import cities from "@/img/cities.jpg";
import dying from "@/img/dying.jpg";
import fallout from "@/img/fallout.jpg";
import fifa from "@/img/fifa.jpg";
import reddead from "@/img/red-dead.jpg";

export default function NewRelease() {
  let scrl = useRef(null);
  const shiftN = 230;
  const [scrollX, setscrollX] = useState(0);
  const [scrolEnd, setscrolEnd] = useState(false);

  const slide = (shift) => {
    scrl.current.scrollLeft += shift;
    setscrollX(scrollX + shift);

    if (
      Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
      scrl.current.offsetWidth
    ) {
      setscrolEnd(true);
    } else {
      setscrolEnd(false);
    }
  };

  const scrollCheck = () => {
    setscrollX(scrl.current.scrollLeft);
    if (
      Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
      scrl.current.offsetWidth
    ) {
      setscrolEnd(true);
    } else {
      setscrolEnd(false);
    }
  };

    return (
      <>
        <div className="h-max flex  flex-col space-y-4 md:px-10 py-8 md:py-14 justify-center2 items-center2 bg-[#f8f4f2] border-t">
        <div className="flex flex-row justify-between mx-auto w-11/12 md:w-12/12 space-x-6 items-center">
          <div className="flex space-x-2 items-center ">
            <span className="text-xl font-mabrybold text-gray-900">New Release</span>
            <Link href={"/"} className="flex items-end hover:opacity-80 underline underline-offset-2">
              <span className="text-xs font-mabrybold text-gray-500 uppercase">
                See All
              </span>
            </Link>
          </div>
          <div className="flex space-x-1">
            <div
              onClick={() => slide(-shiftN)}
              className={`p-1 rounded-full  shadow-md text-black  ${scrollX !== 0 ? 'bg-[#fd9c0c] cursor-pointer' : 'bg-orange-300 opacity-50 cursor-default'} border-2 border-gray-800 shadow-menu`}
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </span>
            </div>
            <div
              onClick={() => slide(+shiftN)}
              className={`p-1 rounded-full  shadow-md text-black  ${!scrolEnd ? 'bg-[#fd9c0c] cursor-pointer' : 'bg-orange-300 opacity-50 cursor-default'} border-2 border-gray-800 shadow-menu`}
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>

        <div className="relative flex flex-row mx-auto w-11/12 md:w-12/12 justify-between items-center">
          {/* {scrollX !== 0 && (
            <div className="top-[40%] left-0">
              <button
                onClick={() => slide(-shiftN)}
                className="none absolute top-[35%] -left-5 z-10 cursor-pointer rounded-full px-2 py-2 bg-[#fd9c0c] border-2 border-gray-800 shadow-menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={3}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </button>
            </div>
          )}
          {!scrolEnd && (
            <div className="top-[40%] right-0">
              <button
                onClick={() => slide(+shiftN)}
                className="none absolute top-[35%] -right-5 z-10 cursor-pointer rounded-full px-2 py-2 bg-[#fd9c0c] border-2 border-gray-800 shadow-menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={3}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </button>
            </div>
          )} */}

          {/*  */}
          <div
            className="mb-[1em] flex flex-row overflow-x-auto scroll-smooth"
            ref={scrl}
            onScroll={scrollCheck}
          >
            <div className="transition-all duration-150 flex mr-[1em] mb-[1em] bg-pink-200 ">
              <div className="flex w-[200px] ">
                <div className="relative rounded bg-white border border-gray-800  group flex flex-col overflow-hidden  ">
                  <Link href="/" className="relative">
                    <Image
                      src={among}
                      alt=""
                      className="w-full object-cover"
                    />{" "}
                    <div className="absolute opacity-0 group-hover:opacity-75 z-20 inset-0 mix-blend-overlay w-full bg-gradient-to-br from-purple-hot to-teal"></div>
                  </Link>{" "}
                  <div className="px-1.5 py-2 flex flex-col space-y-2 justify-between leading-tight">
                    <h3 className="font-mabrybold text-md text-gray-900">
                      <Link href="/">Among Us</Link>
                    </h3>{" "}
                    
                  </div>
                  <div className="pb-1 pr-1 flex justify-end font-mabry uppercase text-[10px] text-gray-900">Base Game</div>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="transition-all duration-150 flex mr-[1em] mb-[1em] bg-pink-200 ">
              <div className="flex w-[200px] ">
                <div className="relative rounded bg-white border border-gray-800  group flex flex-col overflow-hidden  ">
                  <Link href="/" className="relative">
                    <Image
                      src={ark}
                      alt=""
                      className="w-full object-cover"
                    />{" "}
                    <div className="absolute opacity-0 group-hover:opacity-75 z-20 inset-0 mix-blend-overlay w-full bg-gradient-to-br from-purple-hot to-teal"></div>
                  </Link>{" "}
                  <div className="px-1.5 py-2 flex flex-col space-y-2 justify-between leading-tight">
                    <h3 className="font-mabrybold text-md text-gray-900">
                      <Link href="/">Among Us</Link>
                    </h3>{" "}
                    
                  </div>
                  <div className="pb-1 pr-1 flex justify-end font-mabry uppercase text-[10px] text-gray-900">Base Game</div>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="transition-all duration-150 flex mr-[1em] mb-[1em] bg-pink-200 ">
              <div className="flex w-[200px] ">
                <div className="relative rounded bg-white border border-gray-800  group flex flex-col overflow-hidden  ">
                  <Link href="/" className="relative">
                    <Image
                      src={bloons}
                      alt=""
                      className="w-full object-cover"
                    />{" "}
                    <div className="absolute opacity-0 group-hover:opacity-75 z-20 inset-0 mix-blend-overlay w-full bg-gradient-to-br from-purple-hot to-teal"></div>
                  </Link>{" "}
                  <div className="px-1.5 py-2 flex flex-col space-y-2 justify-between leading-tight">
                    <h3 className="font-mabrybold text-md text-gray-900">
                      <Link href="/">Among Us</Link>
                    </h3>{" "}
                    
                  </div>
                  <div className="pb-1 pr-1 flex justify-end font-mabry uppercase text-[10px] text-gray-900">Base Game</div>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="transition-all duration-150 flex mr-[1em] mb-[1em] bg-pink-200 ">
              <div className="flex w-[200px] ">
                <div className="relative rounded bg-white border border-gray-800  group flex flex-col overflow-hidden  ">
                  <Link href="/" className="relative">
                    <Image
                      src={cities}
                      alt=""
                      className="w-full object-cover"
                    />{" "}
                    <div className="absolute opacity-0 group-hover:opacity-75 z-20 inset-0 mix-blend-overlay w-full bg-gradient-to-br from-purple-hot to-teal"></div>
                  </Link>{" "}
                  <div className="px-1.5 py-2 flex flex-col space-y-2 justify-between leading-tight">
                    <h3 className="font-mabrybold text-md text-gray-900">
                      <Link href="/">Among Us</Link>
                    </h3>{" "}
                    
                  </div>
                  <div className="pb-1 pr-1 flex justify-end font-mabry uppercase text-[10px] text-gray-900">Base Game</div>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="transition-all duration-150 flex mr-[1em] mb-[1em] bg-pink-200 ">
              <div className="flex w-[200px] ">
                <div className="relative rounded bg-white border border-gray-800  group flex flex-col overflow-hidden  ">
                  <Link href="/" className="relative">
                    <Image
                      src={dying}
                      alt=""
                      className="w-full object-cover"
                    />{" "}
                    <div className="absolute opacity-0 group-hover:opacity-75 z-20 inset-0 mix-blend-overlay w-full bg-gradient-to-br from-purple-hot to-teal"></div>
                  </Link>{" "}
                  <div className="px-1.5 py-2 flex flex-col space-y-2 justify-between leading-tight">
                    <h3 className="font-mabrybold text-md text-gray-900">
                      <Link href="/">Among Us</Link>
                    </h3>{" "}
                    
                  </div>
                  <div className="pb-1 pr-1 flex justify-end font-mabry uppercase text-[10px] text-gray-900">Base Game</div>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="transition-all duration-150 flex mr-[1em] mb-[1em] bg-pink-200 ">
              <div className="flex w-[200px] ">
                <div className="relative rounded bg-white border border-gray-800  group flex flex-col overflow-hidden  ">
                  <Link href="/" className="relative">
                    <Image
                      src={fallout}
                      alt=""
                      className="w-full object-cover"
                    />{" "}
                    <div className="absolute opacity-0 group-hover:opacity-75 z-20 inset-0 mix-blend-overlay w-full bg-gradient-to-br from-purple-hot to-teal"></div>
                  </Link>{" "}
                  <div className="px-1.5 py-2 flex flex-col space-y-2 justify-between leading-tight">
                    <h3 className="font-mabrybold text-md text-gray-900">
                      <Link href="/">Among Us</Link>
                    </h3>{" "}
                    
                  </div>
                  <div className="pb-1 pr-1 flex justify-end font-mabry uppercase text-[10px] text-gray-900">Base Game</div>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="transition-all duration-150 flex mr-[1em] mb-[1em] bg-pink-200 ">
              <div className="flex w-[200px] ">
                <div className="relative rounded bg-white border border-gray-800  group flex flex-col overflow-hidden  ">
                  <Link href="/" className="relative">
                    <Image
                      src={fifa}
                      alt=""
                      className="w-full object-cover"
                    />{" "}
                    <div className="absolute opacity-0 group-hover:opacity-75 z-20 inset-0 mix-blend-overlay w-full bg-gradient-to-br from-purple-hot to-teal"></div>
                  </Link>{" "}
                  <div className="px-1.5 py-2 flex flex-col space-y-2 justify-between leading-tight">
                    <h3 className="font-mabrybold text-md text-gray-900">
                      <Link href="/">Among Us</Link>
                    </h3>{" "}
                    
                  </div>
                  <div className="pb-1 pr-1 flex justify-end font-mabry uppercase text-[10px] text-gray-900">Base Game</div>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="transition-all duration-150 flex mr-[1em] mb-[1em] bg-pink-200 ">
              <div className="flex w-[200px] ">
                <div className="relative rounded bg-white border border-gray-800  group flex flex-col overflow-hidden  ">
                  <Link href="/" className="relative">
                    <Image
                      src={reddead}
                      alt=""
                      className="w-full object-cover"
                    />{" "}
                    <div className="absolute opacity-0 group-hover:opacity-75 z-20 inset-0 mix-blend-overlay w-full bg-gradient-to-br from-purple-hot to-teal"></div>
                  </Link>{" "}
                  <div className="px-1.5 py-2 flex flex-col space-y-2 justify-between leading-tight">
                    <h3 className="font-mabrybold text-md text-gray-900">
                      <Link href="/">Among Us</Link>
                    </h3>{" "}
                    
                  </div>
                  <div className="pb-1 pr-1 flex justify-end font-mabry uppercase text-[10px] text-gray-900">Base Game</div>
                </div>
              </div>
            </div>
            {/*  */}
         
          </div>
        </div>
      </div>
      </>
    );
}