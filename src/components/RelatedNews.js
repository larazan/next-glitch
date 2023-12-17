import React, { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import arrowLeft from "@/img/icon_arrow-left.png";
import arrowRight from "@/img/icon_arrow-right.png";

import mine from "@/img/mine.jpg";
import fortnite from "@/img/fortnite.jpg";
import cyberpunk from "@/img/cyberpunk.jpg";
import lastofus from "@/img/lastofus.jpg";
import pga from "@/img/pga.jpg";
import callofduty from "@/img/callofduty.jpg";
import starwar from "@/img/starwar.jpeg";

import colosous from "@/img/thumbnail/colosous.jpg";
import diablo from "@/img/thumbnail/diablo.jpg";
import murdered from "@/img/thumbnail/murdered.jpg";
import north from "@/img/thumbnail/north.jpg";
import saboteur from "@/img/thumbnail/saboteur.jpg";
import skyrim from "@/img/thumbnail/skyrim.jpg";
import spiderman from "@/img/thumbnail/spiderman.jpg";
import toad from "@/img/thumbnail/toad.jpg";
import unpacking from "@/img/thumbnail/unpacking.jpg";
import godofwar from "@/img/godofwar.jpg";

const RelatedNews = () => {
    let scrl = useRef(null);
  const shiftN = 300;
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
        <div className="h-max flex  flex-col space-y-4 md:px-10 py-8 md:py-14 justify-center2 items-center2 bg-white border-t">
        <div className="flex flex-row mx-auto w-11/12 md:w-12/12 space-x-6 items-center2">
          <div className="flex w-full justify-between  items-center ">
            <span className="text-xl uppercase font-mabrybold text-gray-900">
              More News
            </span>
        
          </div>
        </div>

        <div className="relative flex flex-row mx-auto w-11/12 md:w-12/12 justify-between items-center">
          {scrollX !== 0 && (
            <div className="top-[30%] left-0">
              {/* <Image
                className="none absolute top-[40%] left-0 z-10 cursor-pointer"
                aria-hidden="true"
                src={arrowLeft}
                alt="arrow left"
                decoding="auto"
                fetchpriority="auto"
                onClick={() => slide(-shiftN)}
              /> */}
              <button
                onClick={() => slide(-shiftN)}
                className="none absolute top-[35%] -left-5 z-30 cursor-pointer rounded-full px-2 py-2 md:px-3 md:py-3 bg-[#fd9c0c] border-2 border-gray-800 shadow-menu"
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
            <div className="top-[30%] right-0">
              {/* <Image
                data-testid="arrow-right-pilihan-kitabisa"
                className="none absolute top-[40%] right-0 z-10 cursor-pointer"
                aria-hidden="true"
                alt="arrow right"
                src={arrowRight}
                decoding="auto"
                fetchpriority="auto"
                onClick={() => slide(+shiftN)}
              /> */}
              <button
                onClick={() => slide(+shiftN)}
                className="none absolute top-[35%] -right-5 z-30 cursor-pointer rounded-full px-2 py-2 md:px-3 md:py-3 bg-[#fd9c0c] border-2 border-gray-800 shadow-menu"
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
          )}

          {/*  */}
          <div
            className="mb-[1em] flex flex-row overflow-x-auto scroll-smooth"
            ref={scrl}
            onScroll={scrollCheck}
          >
            <div className="transition-all duration-150 flex mr-[1em] mb-[1em] bg-white">
              <div className="flex flex-col w-[280px] md:w-[300px] space-y-1 rounded border-2 border-gray-800 px-2 py-3 shadow-stack-sm hover:shadow-stack-yellow-sm">
              <Link
                href={""}
                className="relative"
              >
                <Image src={godofwar} alt="" className="w-full rounded" />{" "}
                <div className="absolute opacity-0 group-hover:opacity-75 z-20 inset-0 mix-blend-overlay w-full bg-gradient-to-br from-purple-hot to-teal"></div>
              </Link>
              <div className="px-1 py-2 flex flex-col justify-between leading-tight ">
                <h3 className="font-mabrybold text-md hover:underline underline-offset-2">
                  <Link href="/news/news-one">
                    The unlikely is happening: Battlefield 2042 is getting a new season in March 2024                    
                  </Link>
                </h3>{" "}
                <div className="font-mabry mt-1 text-xs">May 9th, 2023</div>
              </div>
              </div>
            </div>
            {/*  */}
            <div className="transition-all duration-150 flex mr-[1em] mb-[1em] bg-white">
              <div className="flex flex-col w-[280px] md:w-[300px] space-y-1 rounded border-2 border-gray-800 px-2 py-3 shadow-stack-sm hover:shadow-stack-yellow-sm">
              <div
                className="relative"
              >
                <Image src={godofwar} alt="" className="w-full rounded" />{" "}
                <div className="absolute opacity-0 group-hover:opacity-75 z-20 inset-0 mix-blend-overlay w-full bg-gradient-to-br from-purple-hot to-teal"></div>
              </div>
              <div className="px-1 py-2 flex flex-col justify-between leading-tight ">
                <h3 className="font-mabrybold text-md hover:underline underline-offset-2">
                  <Link href="/news/news-one">
                    The unlikely is happening: Battlefield 2042 is getting a new season in March 2024                    
                  </Link>
                </h3>{" "}
                <div className="font-mabry mt-1 text-xs">May 9th, 2023</div>
              </div>
              </div>
            </div>
            {/*  */}
            <div className="transition-all duration-150 flex mr-[1em] mb-[1em] bg-white">
              <div className="flex flex-col w-[280px] md:w-[300px] space-y-1 rounded border-2 border-gray-800 px-2 py-3 shadow-stack-sm hover:shadow-stack-yellow-sm">
              <div
                className="relative"
              >
                <Image src={godofwar} alt="" className="w-full rounded" />{" "}
                <div className="absolute opacity-0 group-hover:opacity-75 z-20 inset-0 mix-blend-overlay w-full bg-gradient-to-br from-purple-hot to-teal"></div>
              </div>
              <div className="px-1 py-2 flex flex-col justify-between leading-tight ">
                <h3 className="font-mabrybold text-md hover:underline underline-offset-2">
                  <Link href="/news/news-one">
                    The unlikely is happening: Battlefield 2042 is getting a new season in March 2024                    
                  </Link>
                </h3>{" "}
                <div className="font-mabry mt-1 text-xs">May 9th, 2023</div>
              </div>
              </div>
            </div>
            {/*  */}
            <div className="transition-all duration-150 flex mr-[1em] mb-[1em] bg-white">
              <div className="flex flex-col w-[280px] md:w-[300px] space-y-1 rounded border-2 border-gray-800 px-2 py-3 shadow-stack-sm hover:shadow-stack-yellow-sm">
              <div
                className="relative"
              >
                <Image src={godofwar} alt="" className="w-full rounded" />{" "}
                <div className="absolute opacity-0 group-hover:opacity-75 z-20 inset-0 mix-blend-overlay w-full bg-gradient-to-br from-purple-hot to-teal"></div>
              </div>
              <div className="px-1 py-2 flex flex-col justify-between leading-tight ">
                <h3 className="font-mabrybold text-md hover:underline underline-offset-2">
                  <Link href="/news/news-one">
                    The unlikely is happening: Battlefield 2042 is getting a new season in March 2024                    
                  </Link>
                </h3>{" "}
                <div className="font-mabry mt-1 text-xs">May 9th, 2023</div>
              </div>
              </div>
            </div>
            {/*  */}
            <div className="transition-all duration-150 flex mr-[1em] mb-[1em] bg-white">
              <div className="flex flex-col w-[280px] md:w-[300px] space-y-1 rounded border-2 border-gray-800 px-2 py-3 shadow-stack-sm hover:shadow-stack-yellow-sm">
              <div
                className="relative"
              >
                <Image src={godofwar} alt="" className="w-full rounded" />{" "}
                <div className="absolute opacity-0 group-hover:opacity-75 z-20 inset-0 mix-blend-overlay w-full bg-gradient-to-br from-purple-hot to-teal"></div>
              </div>
              <div className="px-1 py-2 flex flex-col justify-between leading-tight ">
                <h3 className="font-mabrybold text-md hover:underline underline-offset-2">
                  <Link href="/news/news-one">
                    The unlikely is happening: Battlefield 2042 is getting a new season in March 2024                    
                  </Link>
                </h3>{" "}
                <div className="font-mabry mt-1 text-xs">May 9th, 2023</div>
              </div>
              </div>
            </div>
            {/*  */}
            <div className="transition-all duration-150 flex mr-[1em] mb-[1em] bg-white">
              <div className="flex flex-col w-[280px] md:w-[300px] space-y-1 rounded border-2 border-gray-800 px-2 py-3 shadow-stack-sm hover:shadow-stack-yellow-sm">
              <div
                className="relative"
              >
                <Image src={godofwar} alt="" className="w-full rounded" />{" "}
                <div className="absolute opacity-0 group-hover:opacity-75 z-20 inset-0 mix-blend-overlay w-full bg-gradient-to-br from-purple-hot to-teal"></div>
              </div>
              <div className="px-1 py-2 flex flex-col justify-between leading-tight ">
                <h3 className="font-mabrybold text-md hover:underline underline-offset-2">
                  <Link href="/news/news-one">
                    The unlikely is happening: Battlefield 2042 is getting a new season in March 2024                    
                  </Link>
                </h3>{" "}
                <div className="font-mabry mt-1 text-xs">May 9th, 2023</div>
              </div>
              </div>
            </div>
            {/*  */}
            <div className="transition-all duration-150 flex mr-[1em] mb-[1em] bg-white">
              <div className="flex flex-col w-[280px] md:w-[300px] space-y-1 rounded border-2 border-gray-800 px-2 py-3 shadow-stack-sm hover:shadow-stack-yellow-sm">
              <div
                className="relative"
              >
                <Image src={godofwar} alt="" className="w-full rounded" />{" "}
                <div className="absolute opacity-0 group-hover:opacity-75 z-20 inset-0 mix-blend-overlay w-full bg-gradient-to-br from-purple-hot to-teal"></div>
              </div>
              <div className="px-1 py-2 flex flex-col justify-between leading-tight ">
                <h3 className="font-mabrybold text-md hover:underline underline-offset-2">
                  <Link href="/news/news-one">
                    The unlikely is happening: Battlefield 2042 is getting a new season in March 2024                    
                  </Link>
                </h3>{" "}
                <div className="font-mabry mt-1 text-xs">May 9th, 2023</div>
              </div>
              </div>
            </div>
            {/*  */}
            
          </div>
        </div>
      </div>
    </>
  )
}

export default RelatedNews