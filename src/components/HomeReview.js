import React, { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

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

export default function HomeReview() {
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
      <div className="h-max flex  flex-col space-y-4 md:px-10 py-8 md:py-14 justify-center2 items-center2 bg-white border-t">
        <div className="flex flex-row mx-auto w-11/12 md:w-12/12 space-x-6 items-center2">
          <div className="flex w-full justify-between  items-center ">
            <span className="text-xl font-mabrybold text-gray-900">
              Latest Reviews
            </span>
            <Link
              href={"/"}
              className="flex items-center text-sm font-mabrybold  text-gray-500 hover:text-gray-700"
            >
              <span className="">More</span>
              <div>
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
                    d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                  />
                </svg>
              </div>
            </Link>
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
                className="none absolute top-[30%] -left-5 z-30 cursor-pointer rounded-full px-2 py-2 md:px-3 md:py-3 bg-[#fd9c0c] border-2 border-gray-800 shadow-menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={3}
                  stroke="currentColor"
                  className="w-6 h-6 text-gray-900"
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
                className="none absolute top-[30%] -right-5 z-30 cursor-pointer rounded-full px-2 py-2 md:px-3 md:py-3 bg-[#fd9c0c] border-2 border-gray-800 shadow-menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={3}
                  stroke="currentColor"
                  className="w-6 h-6 text-gray-900"
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
            <Link
              href={""}
              className="transition-all duration-150 flex mr-[1em] mb-[1em] bg-white "
            >
              <div className="flex w-[280px] md:w-[350px] space-x-3 rounded border-2 border-gray-800 px-2 py-3 shadow-stack-sm hover:shadow-stack-yellow-sm">
                <div className="flex flex-col space-y-1.5 w-1/4">
                  <Image
                    src={diablo}
                    className="object-fill w-full rounded"
                    alt=""
                  />
                  <div className="flex leading-tight">
                    <span className="text-[11px] font-semibold capitalize leading-tight text-gray-800 font-mabrybold">
                      Jason Diaz esteban
                    </span>
                  </div>
                </div>
                <div className="w-3/4 flex flex-col space-y-1.5">
                  <div className="flex justify-between">
                    <div className="leading-tight">
                      <span className="text-lg font-mabrybold leading-tight text-gray-900">
                        A Solid Diablo Clone For The Vita.
                      </span>
                    </div>
                    <div>
                      <div className="flex shadow-menu h-10 w-10 md:h-10 md:w-10 items-center justify-center border border-gray-800 bg-green-300 rounded-full px-2 py-2">
                        <span className="text-lg font-mabrybold text-gray-900 leading-tight">
                          8.7
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="leading-tight">
                    <span className="font-mabry text-sm text-gray-900 leading-tight">
                      If you have played any Diablo game, then you already know
                      what Dungeon Hunter: Alliance will be like. You take on
                      the role of the recently deceased king...
                    </span>
                  </div>
                </div>
              </div>
            </Link>
            {/*  */}
            <div className="transition-all duration-150 flex mr-[1em] mb-[1em] bg-white ">
              <div className="flex w-[280px] md:w-[350px] space-x-3 rounded border-2 border-gray-800 px-2 py-3 shadow-stack-sm hover:shadow-stack-yellow-sm">
                <div className="flex flex-col space-y-1.5 w-1/4">
                  <Image
                    src={colosous}
                    className="object-fill w-full rounded"
                    alt=""
                  />
                  <div className="flex leading-tight">
                    <span className="text-[11px] font-semibold capitalize leading-tight text-gray-800 font-mabrybold">
                      Jason Diaz esteban
                    </span>
                  </div>
                </div>
                <div className="w-3/4 flex flex-col space-y-1.5">
                  <div className="flex justify-between">
                    <div className="leading-tight">
                      <span className="text-lg font-mabrybold leading-tight text-gray-900">
                        A Solid Diablo Clone For The Vita.
                      </span>
                    </div>
                    <div>
                      <div className="flex shadow-menu h-10 w-10 md:h-10 md:w-10 items-center justify-center border border-gray-800 bg-green-300 rounded-full px-2 py-2">
                        <span className="text-lg font-mabrybold text-gray-900 leading-tight">
                          8.7
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="leading-tight">
                    <span className="font-mabry text-sm text-gray-900 leading-tight">
                      If you have played any Diablo game, then you already know
                      what Dungeon Hunter: Alliance will be like. You take on
                      the role of the recently deceased king...
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="transition-all duration-150 flex mr-[1em] mb-[1em] bg-white ">
              <div className="flex w-[280px] md:w-[350px] space-x-3 rounded border-2 border-gray-800 px-2 py-3 shadow-stack-sm hover:shadow-stack-yellow-sm">
                <div className="flex flex-col space-y-1.5 w-1/4">
                  <Image
                    src={spiderman}
                    className="object-fill w-full rounded"
                    alt=""
                  />
                  <div className="flex leading-tight">
                    <span className="text-[11px] font-semibold capitalize leading-tight text-gray-800 font-mabrybold">
                      Jason Diaz esteban
                    </span>
                  </div>
                </div>
                <div className="w-3/4 flex flex-col space-y-1.5">
                  <div className="flex justify-between">
                    <div className="leading-tight">
                      <span className="text-lg font-mabrybold leading-tight text-gray-900">
                        A Solid Diablo Clone For The Vita.
                      </span>
                    </div>
                    <div>
                      <div className="flex shadow-menu h-10 w-10 md:h-10 md:w-10 items-center justify-center border border-gray-800 bg-green-300 rounded-full px-2 py-2">
                        <span className="text-lg font-mabrybold text-gray-900 leading-tight">
                          8.7
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="leading-tight">
                    <span className="font-mabry text-sm text-gray-900 leading-tight">
                      If you have played any Diablo game, then you already know
                      what Dungeon Hunter: Alliance will be like. You take on
                      the role of the recently deceased king...
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="transition-all duration-150 flex mr-[1em] mb-[1em] bg-white ">
              <div className="flex w-[280px] md:w-[350px] space-x-3 rounded border-2 border-gray-800 px-2 py-3 shadow-stack-sm hover:shadow-stack-yellow-sm">
                <div className="flex flex-col space-y-1.5 w-1/4">
                  <Image
                    src={murdered}
                    className="object-fill w-full rounded"
                    alt=""
                  />
                  <div className="flex leading-tight">
                    <span className="text-[11px] font-semibold capitalize leading-tight text-gray-800 font-mabrybold">
                      Jason Diaz esteban
                    </span>
                  </div>
                </div>
                <div className="w-3/4 flex flex-col space-y-1.5">
                  <div className="flex justify-between">
                    <div className="leading-tight">
                      <span className="text-lg font-mabrybold leading-tight text-gray-900">
                        A Solid Diablo Clone For The Vita.
                      </span>
                    </div>
                    <div>
                      <div className="flex shadow-menu h-10 w-10 md:h-10 md:w-10 items-center justify-center border border-gray-800 bg-green-300 rounded-full px-2 py-2">
                        <span className="text-lg font-mabrybold text-gray-900 leading-tight">
                          8.7
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="leading-tight">
                    <span className="font-mabry text-sm text-gray-900 leading-tight">
                      If you have played any Diablo game, then you already know
                      what Dungeon Hunter: Alliance will be like. You take on
                      the role of the recently deceased king...
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="transition-all duration-150 flex mr-[1em] mb-[1em] bg-white ">
              <div className="flex  w-[280px] md:w-[350px] space-x-3 rounded border-2 border-gray-800 px-2 py-3 shadow-stack-sm hover:shadow-stack-yellow-sm">
                <div className="flex flex-col space-y-1.5 w-1/4">
                  <Image
                    src={unpacking}
                    className="object-fill w-full rounded"
                    alt=""
                  />
                  <div className="flex leading-tight">
                    <span className="text-[11px] font-semibold capitalize leading-tight text-gray-800 font-mabrybold">
                      Jason Diaz esteban
                    </span>
                  </div>
                </div>
                <div className="w-3/4 flex flex-col space-y-1.5">
                  <div className="flex justify-between">
                    <div className="leading-tight">
                      <span className="text-lg font-mabrybold leading-tight text-gray-900">
                        A Solid Diablo Clone For The Vita.
                      </span>
                    </div>
                    <div>
                      <div className="flex shadow-menu h-10 w-10 md:h-10 md:w-10 items-center justify-center border border-gray-800 bg-green-300 rounded-full px-2 py-2">
                        <span className="text-lg font-mabrybold text-gray-900 leading-tight">
                          8.7
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="leading-tight">
                    <span className="font-mabry text-sm text-gray-900 leading-tight">
                      If you have played any Diablo game, then you already know
                      what Dungeon Hunter: Alliance will be like. You take on
                      the role of the recently deceased king...
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="transition-all duration-150 flex mr-[1em] mb-[1em] bg-white ">
              <div className="flex w-[280px] md:w-[350px] space-x-3 rounded border-2 border-gray-800 px-2 py-3 shadow-stack-sm hover:shadow-stack-yellow-sm">
                <div className="flex flex-col space-y-1.5 w-1/4">
                  <Image
                    src={north}
                    className="object-fill w-full rounded"
                    alt=""
                  />
                  <div className="flex leading-tight">
                    <span className="text-[11px] font-semibold capitalize leading-tight text-gray-800 font-mabrybold">
                      Jason Diaz esteban
                    </span>
                  </div>
                </div>
                <div className="w-3/4 flex flex-col space-y-1.5">
                  <div className="flex justify-between">
                    <div className="leading-tight">
                      <span className="text-lg font-mabrybold leading-tight text-gray-900">
                        A Solid Diablo Clone For The Vita.
                      </span>
                    </div>
                    <div>
                      <div className="flex shadow-menu h-10 w-10 md:h-10 md:w-10 items-center justify-center border border-gray-800 bg-green-300 rounded-full px-2 py-2">
                        <span className="text-lg font-mabrybold text-gray-900 leading-tight">
                          8.7
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="leading-tight">
                    <span className="font-mabry text-sm text-gray-900 leading-tight">
                      If you have played any Diablo game, then you already know
                      what Dungeon Hunter: Alliance will be like. You take on
                      the role of the recently deceased king...
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="transition-all duration-150 flex mr-[1em] mb-[1em] bg-white ">
              <div className="flex w-[280px] md:w-[350px] space-x-3 rounded border-2 border-gray-800 px-2 py-3 shadow-stack-sm hover:shadow-stack-yellow-sm">
                <div className="flex flex-col space-y-1.5 w-1/4">
                  <Image
                    src={skyrim}
                    className="object-fill w-full rounded"
                    alt=""
                  />
                  <div className="flex leading-tight">
                    <span className="text-[11px] font-semibold capitalize leading-tight text-gray-800 font-mabrybold">
                      Jason Diaz esteban
                    </span>
                  </div>
                </div>
                <div className="w-3/4 flex flex-col space-y-1.5">
                  <div className="flex justify-between">
                    <div className="leading-tight">
                      <span className="text-lg font-mabrybold leading-tight text-gray-900">
                        A Solid Diablo Clone For The Vita.
                      </span>
                    </div>
                    <div>
                      <div className="flex shadow-menu h-10 w-10 md:h-10 md:w-10 items-center justify-center border border-gray-800 bg-green-300 rounded-full px-2 py-2">
                        <span className="text-lg font-mabrybold text-gray-900 leading-tight">
                          8.7
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="leading-tight">
                    <span className="font-mabry text-sm text-gray-900 leading-tight">
                      If you have played any Diablo game, then you already know
                      what Dungeon Hunter: Alliance will be like. You take on
                      the role of the recently deceased king...
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="transition-all duration-150 flex mr-[1em] mb-[1em] bg-white ">
              <div className="flex w-[280px] md:w-[350px] space-x-3 rounded border-2 border-gray-800 px-2 py-3 shadow-stack-sm hover:shadow-stack-yellow-sm">
                <div className="flex flex-col space-y-1.5 w-1/4">
                  <Image
                    src={saboteur}
                    className="object-fill w-full rounded"
                    alt=""
                  />
                  <div className="flex leading-tight">
                    <span className="text-[11px] font-semibold capitalize leading-tight text-gray-800 font-mabrybold">
                      Jason Diaz esteban
                    </span>
                  </div>
                </div>
                <div className="w-3/4 flex flex-col space-y-1.5">
                  <div className="flex justify-between">
                    <div className="leading-tight">
                      <span className="text-lg font-mabrybold leading-tight text-gray-900">
                        A Solid Diablo Clone For The Vita.
                      </span>
                    </div>
                    <div>
                      <div className="flex shadow-menu h-10 w-10 md:h-10 md:w-10 items-center justify-center border border-gray-800 bg-green-300 rounded-full px-2 py-2">
                        <span className="text-lg font-mabrybold text-gray-900 leading-tight">
                          8.7
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="leading-tight">
                    <span className="font-mabry text-sm text-gray-900 leading-tight">
                      If you have played any Diablo game, then you already know
                      what Dungeon Hunter: Alliance will be like. You take on
                      the role of the recently deceased king...
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="transition-all duration-150 flex mr-[1em] mb-[1em] bg-white ">
              <div className="flex w-[280px] md:w-[350px] space-x-3 rounded border-2 border-gray-800 px-2 py-3 shadow-stack-sm hover:shadow-stack-yellow-sm">
                <div className="flex flex-col space-y-1.5 w-1/4">
                  <Image
                    src={toad}
                    className="object-fill w-full rounded"
                    alt=""
                  />
                  <div className="flex leading-tight">
                    <span className="text-[11px] font-semibold capitalize leading-tight text-gray-800 font-mabrybold">
                      Jason Diaz esteban
                    </span>
                  </div>
                </div>
                <div className="w-3/4 flex flex-col space-y-1.5">
                  <div className="flex justify-between">
                    <div className="leading-tight">
                      <span className="text-lg font-mabrybold leading-tight text-gray-900">
                        A Solid Diablo Clone For The Vita.
                      </span>
                    </div>
                    <div>
                      <div className="flex shadow-menu h-10 w-10 md:h-10 md:w-10 items-center justify-center border border-gray-800 bg-green-300 rounded-full px-2 py-2">
                        <span className="text-lg font-mabrybold text-gray-900 leading-tight">
                          8.7
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="leading-tight">
                    <span className="font-mabry text-sm text-gray-900 leading-tight">
                      If you have played any Diablo game, then you already know
                      what Dungeon Hunter: Alliance will be like. You take on
                      the role of the recently deceased king...
                    </span>
                  </div>
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
