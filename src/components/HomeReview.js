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
      <div className="h-max flex py-14 flex-col space-y-4 px-10 justify-center2 items-center2 bg-orange-100">
        <div className="flex flex-row mx-auto w-3/4 space-x-6 items-center2">
          <span className="text-3xl font-mabrybold">Review</span>
          {/* <a>
            <span className="m-0 text-sm text-red-400 font-semibold">
              Lihat Lainnya
            </span>
          </a> */}
        </div>

        <div className="relative flex flex-row mx-auto w-3/4 justify-between items-center">
          {scrollX !== 0 && (
            <div className="absolute top-[40%] left-0">
              <Image
                className="none absolute left-0 z-1 cursor-pointer"
                aria-hidden="true"
                src={arrowLeft}
                alt="arrow left"
                decoding="auto"
                fetchpriority="auto"
                onClick={() => slide(-shiftN)}
              />
            </div>
          )}
          {!scrolEnd && (
            <div className="absolute top-[40%] right-0">
              <Image
                data-testid="arrow-right-pilihan-kitabisa"
                className="none absolute top-[40%] right-0 z-1 cursor-pointer"
                aria-hidden="true"
                alt="arrow right"
                src={arrowRight}
                decoding="auto"
                fetchpriority="auto"
                onClick={() => slide(+shiftN)}
              />
            </div>
          )}

          {/*  */}
          <div
            className="mb-[1em] flex flex-row overflow-x-auto scroll-smooth"
            ref={scrl}
            onScroll={scrollCheck}
          >
            <div
              aria-hidden="true"
              className="text‑inherit mt-0 mr-[1em] mb-[1em] cursor-pointer no-underline bg-white"
            >
              <div className="w-[250px]">
                <div
                  className="flex flex-col rounded-[4px]"
                  style={{
                    boxShadow: "rgba(152, 152, 152, 0.2) 0px 2px 8px 1px",
                    border: "0.5px solid rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <figure className="relative m-0 flex flex-1 items-center justify-center">
                    <Image
                      alt=""
                      src={lastofus}
                      width="100"
                      height="100"
                      decoding="async"
                      data-nimg="1"
                      className="h-[130px] w-full rounded-t object-cover"
                      loading="lazy"
                      style={{ color: "transparent" }}
                    />
                    <section className="absolute bottom-1 px-2 py-1 w-full">
                      <div className="flex  items-center justify-end">
                        <div className="h-8 w-8 md:h-10 md:w-10 rounded-full ">
                          <CircularProgressbar
                            value={69}
                            text={`${69}%`}
                            background
                            backgroundPadding={6}
                            styles={buildStyles({
                              textSize: "30px",
                              pathColor: "#fff",
                              textColor: "#fff",
                              trailColor: "transparent",
                              backgroundColor: "#3e98c7",
                            })}
                          />
                        </div>
                      </div>
                    </section>
                  </figure>
                  <div className="p-[0.5em]">
                    <div className="min-h-[2.5em]">
                      <span
                        className="my-[0.25em] mx-[0em] overflow-hidden break-words text-sm font-semibold"
                        style={{
                          display: "-webkit-box",
                          WebkitLineClamp: 2,
                          webkitBoxOrient: "vertical",
                        }}
                      >
                        Lorem ipsum dolor sit amet
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
            <div
              aria-hidden="true"
              className="text‑inherit mt-0 mr-[1em] mb-[1em] cursor-pointer no-underline bg-white"
            >
              <div className="w-[250px]">
                <div
                  className="flex flex-col rounded-[4px]"
                  style={{
                    boxShadow: "rgba(152, 152, 152, 0.2) 0px 2px 8px 1px",
                    border: "0.5px solid rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <figure className="relative m-0 flex flex-1 items-center justify-center">
                    <Image
                      alt=""
                      src={cyberpunk}
                      width="100"
                      height="100"
                      decoding="async"
                      data-nimg="1"
                      className="h-[130px] w-full rounded-t object-cover"
                      loading="lazy"
                      style={{ color: "transparent" }}
                    />
                    <section className="absolute bottom-1 px-2 py-1 w-full">
                      <div className="flex  items-center justify-end">
                        <div className="h-8 w-8 md:h-10 md:w-10 rounded-full ">
                          <CircularProgressbar
                            value={69}
                            text={`${69}%`}
                            background
                            backgroundPadding={6}
                            styles={buildStyles({
                              textSize: "30px",
                              pathColor: "#fff",
                              textColor: "#fff",
                              trailColor: "transparent",
                              backgroundColor: "#3e98c7",
                            })}
                          />
                        </div>
                      </div>
                    </section>
                  </figure>
                  <div className="p-[0.5em]">
                    <div className="min-h-[2.5em]">
                      <span
                        className="my-[0.25em] mx-[0em] overflow-hidden break-words text-sm font-semibold"
                        style={{
                          display: "-webkit-box",
                          WebkitLineClamp: 2,
                          webkitBoxOrient: "vertical",
                        }}
                      >
                        Lorem ipsum dolor sit amet
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
            <div
              aria-hidden="true"
              className="text‑inherit mt-0 mr-[1em] mb-[1em] cursor-pointer no-underline bg-white"
            >
              <div className="w-[250px]">
                <div
                  className="flex flex-col rounded-[4px]"
                  style={{
                    boxShadow: "rgba(152, 152, 152, 0.2) 0px 2px 8px 1px",
                    border: "0.5px solid rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <figure className="relative m-0 flex flex-1 items-center justify-center">
                    <Image
                      alt=""
                      src={callofduty}
                      width="100"
                      height="100"
                      decoding="async"
                      data-nimg="1"
                      className="h-[130px] w-full rounded-t object-cover"
                      loading="lazy"
                      style={{ color: "transparent" }}
                    />
                    <section className="absolute bottom-1 px-2 py-1 w-full">
                      <div className="flex  items-center justify-end">
                        <div className="h-8 w-8 md:h-10 md:w-10 rounded-full ">
                          <CircularProgressbar
                            value={69}
                            text={`${69}%`}
                            background
                            backgroundPadding={6}
                            styles={buildStyles({
                              textSize: "30px",
                              pathColor: "#fff",
                              textColor: "#fff",
                              trailColor: "transparent",
                              backgroundColor: "#3e98c7",
                            })}
                          />
                        </div>
                      </div>
                    </section>
                  </figure>
                  <div className="p-[0.5em]">
                    <div className="min-h-[2.5em]">
                      <span
                        className="my-[0.25em] mx-[0em] overflow-hidden break-words text-sm font-semibold"
                        style={{
                          display: "-webkit-box",
                          WebkitLineClamp: 2,
                          webkitBoxOrient: "vertical",
                        }}
                      >
                        Lorem ipsum dolor sit amet
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
            <div
              aria-hidden="true"
              className="text‑inherit mt-0 mr-[1em] mb-[1em] cursor-pointer no-underline bg-white"
            >
              <div className="w-[250px]">
                <div
                  className="flex flex-col rounded-[4px]"
                  style={{
                    boxShadow: "rgba(152, 152, 152, 0.2) 0px 2px 8px 1px",
                    border: "0.5px solid rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <figure className="relative m-0 flex flex-1 items-center justify-center">
                    <Image
                      alt=""
                      src={mine}
                      width="100"
                      height="100"
                      decoding="async"
                      data-nimg="1"
                      className="h-[130px] w-full rounded-t object-cover"
                      loading="lazy"
                      style={{ color: "transparent" }}
                    />
                    <section className="absolute bottom-1 px-2 py-1 w-full">
                      <div className="flex  items-center justify-end">
                        <div className="h-8 w-8 md:h-10 md:w-10 rounded-full ">
                          <CircularProgressbar
                            value={69}
                            text={`${69}%`}
                            background
                            backgroundPadding={6}
                            styles={buildStyles({
                              textSize: "30px",
                              pathColor: "#fff",
                              textColor: "#fff",
                              trailColor: "transparent",
                              backgroundColor: "#3e98c7",
                            })}
                          />
                        </div>
                      </div>
                    </section>
                  </figure>
                  <div className="p-[0.5em]">
                    <div className="min-h-[2.5em]">
                      <span
                        className="my-[0.25em] mx-[0em] overflow-hidden break-words text-sm font-semibold"
                        style={{
                          display: "-webkit-box",
                          WebkitLineClamp: 2,
                          webkitBoxOrient: "vertical",
                        }}
                      >
                        Lorem ipsum dolor sit amet
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
            <div
              aria-hidden="true"
              className="text‑inherit mt-0 mr-[1em] mb-[1em] cursor-pointer no-underline bg-white"
            >
              <div className="w-[250px]">
                <div
                  className="flex flex-col rounded-[4px]"
                  style={{
                    boxShadow: "rgba(152, 152, 152, 0.2) 0px 2px 8px 1px",
                    border: "0.5px solid rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <figure className="relative m-0 flex flex-1 items-center justify-center">
                    <Image
                      alt=""
                      src={pga}
                      width="100"
                      height="100"
                      decoding="async"
                      data-nimg="1"
                      className="h-[130px] w-full rounded-t object-cover"
                      loading="lazy"
                      style={{ color: "transparent" }}
                    />
                    <section className="absolute bottom-1 px-2 py-1 w-full">
                      <div className="flex  items-center justify-end">
                        <div className="h-8 w-8 md:h-10 md:w-10 rounded-full ">
                          <CircularProgressbar
                            value={69}
                            text={`${69}%`}
                            background
                            backgroundPadding={6}
                            styles={buildStyles({
                              textSize: "30px",
                              pathColor: "#fff",
                              textColor: "#fff",
                              trailColor: "transparent",
                              backgroundColor: "#3e98c7",
                            })}
                          />
                        </div>
                      </div>
                    </section>
                  </figure>
                  <div className="p-[0.5em]">
                    <div className="min-h-[2.5em]">
                      <span
                        className="my-[0.25em] mx-[0em] overflow-hidden break-words text-sm font-semibold"
                        style={{
                          display: "-webkit-box",
                          WebkitLineClamp: 2,
                          webkitBoxOrient: "vertical",
                        }}
                      >
                        Lorem ipsum dolor sit amet
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
            <div
              aria-hidden="true"
              className="text‑inherit mt-0 mr-[1em] mb-[1em] cursor-pointer no-underline bg-white"
            >
              <div className="w-[250px]">
                <div
                  className="flex flex-col rounded-[4px]"
                  style={{
                    boxShadow: "rgba(152, 152, 152, 0.2) 0px 2px 8px 1px",
                    border: "0.5px solid rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <figure className="relative m-0 flex flex-1 items-center justify-center">
                    <Image
                      alt=""
                      src={starwar}
                      width="100"
                      height="100"
                      decoding="async"
                      data-nimg="1"
                      className="h-[130px] w-full rounded-t object-cover"
                      loading="lazy"
                      style={{ color: "transparent" }}
                    />
                    <section className="absolute bottom-1 px-2 py-1 w-full">
                      <div className="flex  items-center justify-end">
                        <div className="h-8 w-8 md:h-10 md:w-10 rounded-full ">
                          <CircularProgressbar
                            value={69}
                            text={`${69}%`}
                            background
                            backgroundPadding={6}
                            styles={buildStyles({
                              textSize: "30px",
                              pathColor: "#fff",
                              textColor: "#fff",
                              trailColor: "transparent",
                              backgroundColor: "#3e98c7",
                            })}
                          />
                        </div>
                      </div>
                    </section>
                  </figure>
                  <div className="p-[0.5em]">
                    <div className="min-h-[2.5em]">
                      <span
                        className="my-[0.25em] mx-[0em] overflow-hidden break-words text-sm font-semibold"
                        style={{
                          display: "-webkit-box",
                          WebkitLineClamp: 2,
                          webkitBoxOrient: "vertical",
                        }}
                      >
                        Lorem ipsum dolor sit amet
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
            <Link href={"/reviews"} className="text‑inherit mt-0 mr-2 mb-4 cursor-pointer no-underline">
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
                <span className="m-0 text-base font-mabrybold">Lihat Semua</span>
              </div>
            </Link>
            {/*  */}
          </div>
        </div>
      </div>
    </>
  );
}
