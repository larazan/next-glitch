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
          <span className="text-3xl font-mabrybold">Review</span>
          {/* <a>
            <span className="m-0 text-sm text-red-400 font-semibold">
              Lihat Lainnya
            </span>
          </a> */}
        </div>

        <div className="relative flex flex-row mx-auto w-11/12 md:w-12/12 justify-between items-center">
          {scrollX !== 0 && (
            <div className="top-[40%] left-0">
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
          )}

          {/*  */}
          <div
            className="mb-[1em] flex flex-row overflow-x-auto scroll-smooth"
            ref={scrl}
            onScroll={scrollCheck}
          >
            <div className="transition-all duration-150 flex mr-[1em] mb-[1em] bg-white ">
              <div className="flex  w-[350px] space-x-3 rounded border-2 border-gray-800 px-3 py-4 shadow-stack-sm hover:shadow-stack-yellow-sm">
                <div className="w-1/4">
                  <Image
                    src={diablo}
                    className="object-fill w-full rounded"
                    alt=""
                  />
                </div>
                <div className="w-3/4 flex flex-col space-y-2">
                  <div className="flex justify-between ">
                    <div className="">
                      <span className="text-lg font-mabrybold leading-tight">
                        A Solid Diablo Clone For The Vita.
                      </span>
                    </div>
                    <div>
                      <div className="flex shadow-menu h-12 w-12 items-center justify-center border border-gray-800 bg-green-300 rounded-full px-2 py-2">
                        <span className="text-lg font-mabrybold">8.7</span>
                      </div>
                    </div>
                  </div>
                  <div className="leading-tight">
                    <span className="font-mabry text-sm ">
                      If you have played any Diablo game, then you already know
                      what Dungeon Hunter: Alliance will be like. You take on
                      the role of the recently deceased king, who has been
                      resurrected by a fairy in order to defeat the force...
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="transition-all duration-150 flex mr-[1em] mb-[1em] bg-white ">
              <div className="flex  w-[350px] space-x-3 rounded border-2 border-gray-800 px-3 py-4 shadow-stack-sm hover:shadow-stack-yellow-sm">
                <div className="w-1/4">
                  <Image
                    src={colosous}
                    className="object-fill w-full rounded"
                    alt=""
                  />
                </div>
                <div className="w-3/4 flex flex-col space-y-2">
                  <div className="flex justify-between ">
                    <div className="">
                      <span className="text-lg font-mabrybold leading-tight">
                        A Solid Diablo Clone For The Vita.
                      </span>
                    </div>
                    <div>
                      <div className="flex shadow-menu h-12 w-12 items-center justify-center border border-gray-800 bg-green-300 rounded-full px-2 py-2">
                        <span className="text-lg font-mabrybold">8.7</span>
                      </div>
                    </div>
                  </div>
                  <div className="leading-tight">
                    <span className="font-mabry text-sm ">
                      If you have played any Diablo game, then you already know
                      what Dungeon Hunter: Alliance will be like. You take on
                      the role of the recently deceased king, who has been
                      resurrected by a fairy in order to defeat the force...
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="transition-all duration-150 flex mr-[1em] mb-[1em] bg-white ">
              <div className="flex w-[350px] space-x-3 rounded border-2 border-gray-800 px-3 py-4 shadow-stack-sm hover:shadow-stack-yellow-sm">
                <div className="w-1/4">
                  <Image
                    src={spiderman}
                    className="object-fill w-full rounded"
                    alt=""
                  />
                </div>
                <div className="w-3/4 flex flex-col space-y-2">
                  <div className="flex justify-between ">
                    <div className="">
                      <span className="text-lg font-mabrybold leading-tight">
                        A Solid Diablo Clone For The Vita.
                      </span>
                    </div>
                    <div>
                      <div className="flex shadow-menu h-12 w-12 items-center justify-center border border-gray-800 bg-green-300 rounded-full px-2 py-2">
                        <span className="text-lg font-mabrybold">8.7</span>
                      </div>
                    </div>
                  </div>
                  <div className="leading-tight">
                    <span className="font-mabry text-sm ">
                      If you have played any Diablo game, then you already know
                      what Dungeon Hunter: Alliance will be like. You take on
                      the role of the recently deceased king, who has been
                      resurrected by a fairy in order to defeat the force...
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="transition-all duration-150 flex mr-[1em] mb-[1em] bg-white ">
              <div className="flex w-[350px] space-x-3 rounded border-2 border-gray-800 px-3 py-4 shadow-stack-sm hover:shadow-stack-yellow-sm">
                <div className="w-1/4">
                  <Image
                    src={murdered}
                    className="object-fill w-full rounded"
                    alt=""
                  />
                </div>
                <div className="w-3/4 flex flex-col space-y-2">
                  <div className="flex justify-between ">
                    <div className="">
                      <span className="text-lg font-mabrybold leading-tight">
                        A Solid Diablo Clone For The Vita.
                      </span>
                    </div>
                    <div>
                      <div className="flex shadow-menu h-12 w-12 items-center justify-center border border-gray-800 bg-green-300 rounded-full px-2 py-2">
                        <span className="text-lg font-mabrybold">8.7</span>
                      </div>
                    </div>
                  </div>
                  <div className="leading-tight">
                    <span className="font-mabry text-sm ">
                      If you have played any Diablo game, then you already know
                      what Dungeon Hunter: Alliance will be like. You take on
                      the role of the recently deceased king, who has been
                      resurrected by a fairy in order to defeat the force...
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="transition-all duration-150 flex mr-[1em] mb-[1em] bg-white ">
              <div className="flex  w-[350px] space-x-3 rounded border-2 border-gray-800 px-3 py-4 shadow-stack-sm hover:shadow-stack-yellow-sm">
                <div className="w-1/4">
                  <Image
                    src={unpacking}
                    className="object-fill w-full rounded"
                    alt=""
                  />
                </div>
                <div className="w-3/4 flex flex-col space-y-2">
                  <div className="flex justify-between ">
                    <div className="">
                      <span className="text-lg font-mabrybold leading-tight">
                        A Solid Diablo Clone For The Vita.
                      </span>
                    </div>
                    <div>
                      <div className="flex shadow-menu h-12 w-12 items-center justify-center border border-gray-800 bg-green-300 rounded-full px-2 py-2">
                        <span className="text-lg font-mabrybold">8.7</span>
                      </div>
                    </div>
                  </div>
                  <div className="leading-tight">
                    <span className="font-mabry text-sm ">
                      If you have played any Diablo game, then you already know
                      what Dungeon Hunter: Alliance will be like. You take on
                      the role of the recently deceased king, who has been
                      resurrected by a fairy in order to defeat the force...
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="transition-all duration-150 flex mr-[1em] mb-[1em] bg-white ">
              <div className="flex w-[350px] space-x-3 rounded border-2 border-gray-800 px-3 py-4 shadow-stack-sm hover:shadow-stack-yellow-sm">
                <div className="w-1/4">
                  <Image
                    src={north}
                    className="object-fill w-full rounded"
                    alt=""
                  />
                </div>
                <div className="w-3/4 flex flex-col space-y-2">
                  <div className="flex justify-between ">
                    <div className="">
                      <span className="text-lg font-mabrybold leading-tight">
                        A Solid Diablo Clone For The Vita.
                      </span>
                    </div>
                    <div>
                      <div className="flex shadow-menu h-12 w-12 items-center justify-center border border-gray-800 bg-green-300 rounded-full px-2 py-2">
                        <span className="text-lg font-mabrybold">8.7</span>
                      </div>
                    </div>
                  </div>
                  <div className="leading-tight">
                    <span className="font-mabry text-sm ">
                      If you have played any Diablo game, then you already know
                      what Dungeon Hunter: Alliance will be like. You take on
                      the role of the recently deceased king, who has been
                      resurrected by a fairy in order to defeat the force...
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="transition-all duration-150 flex mr-[1em] mb-[1em] bg-white ">
              <div className="flex w-[350px] space-x-3 rounded border-2 border-gray-800 px-3 py-4 shadow-stack-sm hover:shadow-stack-yellow-sm">
                <div className="w-1/4">
                  <Image
                    src={skyrim}
                    className="object-fill w-full rounded"
                    alt=""
                  />
                </div>
                <div className="w-3/4 flex flex-col space-y-2">
                  <div className="flex justify-between ">
                    <div className="">
                      <span className="text-lg font-mabrybold leading-tight">
                        A Solid Diablo Clone For The Vita.
                      </span>
                    </div>
                    <div>
                      <div className="flex shadow-menu h-12 w-12 items-center justify-center border border-gray-800 bg-green-300 rounded-full px-2 py-2">
                        <span className="text-lg font-mabrybold">8.7</span>
                      </div>
                    </div>
                  </div>
                  <div className="leading-tight">
                    <span className="font-mabry text-sm ">
                      If you have played any Diablo game, then you already know
                      what Dungeon Hunter: Alliance will be like. You take on
                      the role of the recently deceased king, who has been
                      resurrected by a fairy in order to defeat the force...
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="transition-all duration-150 flex mr-[1em] mb-[1em] bg-white ">
              <div className="flex w-[350px] space-x-3 rounded border-2 border-gray-800 px-3 py-4 shadow-stack-sm hover:shadow-stack-yellow-sm">
                <div className="w-1/4">
                  <Image
                    src={saboteur}
                    className="object-fill w-full rounded"
                    alt=""
                  />
                </div>
                <div className="w-3/4 flex flex-col space-y-2">
                  <div className="flex justify-between ">
                    <div className="">
                      <span className="text-lg font-mabrybold leading-tight">
                        A Solid Diablo Clone For The Vita.
                      </span>
                    </div>
                    <div>
                      <div className="flex shadow-menu h-12 w-12 items-center justify-center border border-gray-800 bg-green-300 rounded-full px-2 py-2">
                        <span className="text-lg font-mabrybold">8.7</span>
                      </div>
                    </div>
                  </div>
                  <div className="leading-tight">
                    <span className="font-mabry text-sm ">
                      If you have played any Diablo game, then you already know
                      what Dungeon Hunter: Alliance will be like. You take on
                      the role of the recently deceased king, who has been
                      resurrected by a fairy in order to defeat the force...
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="transition-all duration-150 flex mr-[1em] mb-[1em] bg-white ">
              <div className="flex w-[350px] space-x-3 rounded border-2 border-gray-800 px-3 py-4 shadow-stack-sm hover:shadow-stack-yellow-sm">
                <div className="w-1/4">
                  <Image
                    src={toad}
                    className="object-fill w-full rounded"
                    alt=""
                  />
                </div>
                <div className="w-3/4 flex flex-col space-y-2">
                  <div className="flex justify-between ">
                    <div className="">
                      <span className="text-lg font-mabrybold leading-tight">
                        A Solid Diablo Clone For The Vita.
                      </span>
                    </div>
                    <div>
                      <div className="flex shadow-menu h-12 w-12 items-center justify-center border border-gray-800 bg-green-300 rounded-full px-2 py-2">
                        <span className="text-lg font-mabrybold">8.7</span>
                      </div>
                    </div>
                  </div>
                  <div className="leading-tight">
                    <span className="font-mabry text-sm ">
                      If you have played any Diablo game, then you already know
                      what Dungeon Hunter: Alliance will be like. You take on
                      the role of the recently deceased king, who has been
                      resurrected by a fairy in order to defeat the force...
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/*  */}

            <Link
              href={"/reviews"}
              className="text‑inherit mt-0 mr-2 mb-4 cursor-pointer no-underline"
            >
              <div className="flex h-full w-[150px] flex-col justify-center text-center text-[#00aeef]">
                <div className="text-base">
                  <svg
                    width="32px"
                    height="32px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    className="inline"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18ZM1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12Z"
                      fill="#10A8E5"
                    ></path>
                    <path
                      d="M12.204 8.352c-.4-.443-.378-1.139.049-1.554a1.03 1.03 0 0 1 1.495.05l3.966 4.4a1.132 1.132 0 0 1 0 1.504l-3.966 4.4a1.03 1.03 0 0 1-1.495.05 1.131 1.131 0 0 1-.049-1.554l2.297-2.548H7.1a1.1 1.1 0 0 1 0-2.2h7.4l-2.296-2.548Z"
                      fill="#10A8E5"
                    ></path>
                  </svg>
                </div>
                <span className="m-0 text-base font-mabrybold">
                  Lihat Semua
                </span>
              </div>
            </Link>
            {/*  */}
          </div>
        </div>
      </div>
    </>
  );
}
