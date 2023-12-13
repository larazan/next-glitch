import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import colosous from "@/img/thumbnail/colosous.jpg";
import diablo from "@/img/thumbnail/diablo.jpg";
import murdered from "@/img/thumbnail/murdered.jpg";
import north from "@/img/thumbnail/north.jpg";
import saboteur from "@/img/thumbnail/saboteur.jpg";
import skyrim from "@/img/thumbnail/skyrim.jpg";
import spiderman from "@/img/thumbnail/spiderman.jpg";
import toad from "@/img/thumbnail/toad.jpg";
import unpacking from "@/img/thumbnail/unpacking.jpg";
import Filter from "@/components/Filter";
import GoTop from "@/components/GoTop";

export default function Reviews() {
  
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <GoTop />

      <div className=" flex justify-center mx-auto w-11/12 text-sm mt-16 bg-white">
        <header className="py-8">
          <h1 className="font-black text-3xl md:text-5xl text-gray-900 text-center font-mabryblack">
            Starter Kits
          </h1>{" "}
          <p className="bg-white text-center leading-tight text-gray-900 text-lg md:text-2xl mb-1 font-mabryitalic">
            Jump-start your new Statamic site with beautifully designed site
            packages or meticulous developer boilerplates.
          </p>
        </header>
      </div>

      <Filter />

      <div className="h-max flex flex-col px-2 md:px-6 bg-[#f6f8f7]">
        <div className="flex flex-row mx-auto w-full space-x-6 justify-center2 items-center">
          <section className="mt-4 flex flex-row flex-wrap mx-auto items-center2">
            
            <Link href={"/reviews/review-one"} className="transition-all duration-150 flex w-full py-2 px-3 md:py-4  md:w-1/2 lg:w-1/3 ">
              <div className="flex w-full space-x-3 rounded border-2 border-gray-800 px-2 py-3 shadow-stack-sm hover:shadow-stack-yellow-sm">
                <div className="flex flex-col space-y-1.5 w-1/4">
                  <Image
                    src={colosous}
                    className="object-fill w-full rounded"
                    alt=""
                  />
                  <div className="flex leading-tight">
                    <span className="text-[11px] font-semibold capitalize leading-tight text-gray-800 font-mabrybold">Jason Diaz esteban</span>
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
                        <span className="text-lg font-mabrybold text-gray-900 leading-tight">8.7</span>
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

            <Link href={"/reviews/review-one"} className="transition-all duration-150 flex w-full py-2 px-3 md:py-4  md:w-1/2 lg:w-1/3 ">
              <div className="flex w-full space-x-3 rounded border-2 border-gray-800 px-2 py-3 shadow-stack-sm hover:shadow-stack-yellow-sm">
                <div className="flex flex-col space-y-1.5 w-1/4">
                  <Image
                    src={diablo}
                    className="object-fill w-full rounded"
                    alt=""
                  />
                  <div className="flex leading-tight">
                    <span className="text-[11px] font-semibold capitalize leading-tight text-gray-800 font-mabrybold">Jason Diaz esteban</span>
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
                        <span className="text-lg font-mabrybold text-gray-900 leading-tight">8.7</span>
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

            <Link href={"/reviews/review-one"} className="transition-all duration-150 flex w-full py-2 px-3 md:py-4  md:w-1/2 lg:w-1/3 ">
              <div className="flex w-full space-x-3 rounded border-2 border-gray-800 px-2 py-3 shadow-stack-sm hover:shadow-stack-yellow-sm">
                <div className="flex flex-col space-y-1.5 w-1/4">
                  <Image
                    src={murdered}
                    className="object-fill w-full rounded"
                    alt=""
                  />
                  <div className="flex leading-tight">
                    <span className="text-[11px] font-semibold capitalize leading-tight text-gray-800 font-mabrybold">Jason Diaz esteban</span>
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
                        <span className="text-lg font-mabrybold text-gray-900 leading-tight">8.7</span>
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

            <Link href={"/reviews/review-one"} className="transition-all duration-150 flex w-full py-2 px-3 md:py-4  md:w-1/2 lg:w-1/3 ">
              <div className="flex w-full space-x-3 rounded border-2 border-gray-800 px-2 py-3 shadow-stack-sm hover:shadow-stack-yellow-sm">
                <div className="flex flex-col space-y-1.5 w-1/4">
                  <Image
                    src={north}
                    className="object-fill w-full rounded"
                    alt=""
                  />
                  <div className="flex leading-tight">
                    <span className="text-[11px] font-semibold capitalize leading-tight text-gray-800 font-mabrybold">Jason Diaz esteban</span>
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
                        <span className="text-lg font-mabrybold text-gray-900 leading-tight">8.7</span>
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

            <Link href={"/reviews/review-one"} className="transition-all duration-150 flex w-full py-2 px-3 md:py-4  md:w-1/2 lg:w-1/3 ">
              <div className="flex w-full space-x-3 rounded border-2 border-gray-800 px-2 py-3 shadow-stack-sm hover:shadow-stack-yellow-sm">
                <div className="flex flex-col space-y-1.5 w-1/4">
                  <Image
                    src={saboteur}
                    className="object-fill w-full rounded"
                    alt=""
                  />
                  <div className="flex leading-tight">
                    <span className="text-[11px] font-semibold capitalize leading-tight text-gray-800 font-mabrybold">Jason Diaz esteban</span>
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
                        <span className="text-lg font-mabrybold text-gray-900 leading-tight">8.7</span>
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

            <Link href={"/reviews/review-one"} className="transition-all duration-150 flex w-full py-2 px-3 md:py-4  md:w-1/2 lg:w-1/3 ">
              <div className="flex w-full space-x-3 rounded border-2 border-gray-800 px-2 py-3 shadow-stack-sm hover:shadow-stack-yellow-sm">
                <div className="flex flex-col space-y-1.5 w-1/4">
                  <Image
                    src={skyrim}
                    className="object-fill w-full rounded"
                    alt=""
                  />
                  <div className="flex leading-tight">
                    <span className="text-[11px] font-semibold capitalize leading-tight text-gray-800 font-mabrybold">Jason Diaz esteban</span>
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
                        <span className="text-lg font-mabrybold text-gray-900 leading-tight">8.7</span>
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

            <Link href={"/reviews/review-one"} className="transition-all duration-150 flex w-full py-2 px-3 md:py-4  md:w-1/2 lg:w-1/3 ">
              <div className="flex w-full space-x-3 rounded border-2 border-gray-800 px-2 py-3 shadow-stack-sm hover:shadow-stack-yellow-sm">
                <div className="flex flex-col space-y-1.5 w-1/4">
                  <Image
                    src={spiderman}
                    className="object-fill w-full rounded"
                    alt=""
                  />
                  <div className="flex leading-tight">
                    <span className="text-[11px] font-semibold capitalize leading-tight text-gray-800 font-mabrybold">Jason Diaz esteban</span>
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
                        <span className="text-lg font-mabrybold text-gray-900 leading-tight">8.7</span>
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

            <Link href={"/reviews/review-one"} className="transition-all duration-150 flex w-full py-2 px-3 md:py-4  md:w-1/2 lg:w-1/3 ">
              <div className="flex w-full space-x-3 rounded border-2 border-gray-800 px-2 py-3 shadow-stack-sm hover:shadow-stack-yellow-sm">
                <div className="flex flex-col space-y-1.5 w-1/4">
                  <Image
                    src={toad}
                    className="object-fill w-full rounded"
                    alt=""
                  />
                  <div className="flex leading-tight">
                    <span className="text-[11px] font-semibold capitalize leading-tight text-gray-800 font-mabrybold">Jason Diaz esteban</span>
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
                        <span className="text-lg font-mabrybold text-gray-900 leading-tight">8.7</span>
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

            <Link href={"/reviews/review-one"} className="transition-all duration-150 flex w-full py-2 px-3 md:py-4  md:w-1/2 lg:w-1/3 ">
              <div className="flex w-full space-x-3 rounded border-2 border-gray-800 px-2 py-3 shadow-stack-sm hover:shadow-stack-yellow-sm">
                <div className="flex flex-col space-y-1.5 w-1/4">
                  <Image
                    src={unpacking}
                    className="object-fill w-full rounded"
                    alt=""
                  />
                  <div className="flex leading-tight">
                    <span className="text-[11px] font-semibold capitalize leading-tight text-gray-800 font-mabrybold">Jason Diaz esteban</span>
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
                        <span className="text-lg font-mabrybold text-gray-900 leading-tight">8.7</span>
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
            
          </section>
        </div>
      </div>

      <div className=" h-max flex pb-6 pt-10 flex-col space-y-10 px-10 justify-center2 items-center2 bg-[#f6f8f7]">
        <nav>
          <ul className="pagination">
            <li
              
              className="page-item disabled"
            >
              <span aria-hidden="true" className="page-link">
                ‹
              </span>
            </li>{" "}
            <li aria-current="page" className="page-item active">
              <span className="page-link">1</span>
            </li>{" "}
            <li className="page-item">
              <a href="https://statamic.com/addons?page=2" className="page-link">
                2
              </a>
            </li>{" "}
            <li className="page-item">
              <a href="https://statamic.com/addons?page=3" className="page-link">
                3
              </a>
            </li>{" "}
            <li className="page-item">
              <a href="https://statamic.com/addons?page=4" className="page-link">
                4
              </a>
            </li>{" "}
            <li className="page-item">
              <a href="https://statamic.com/addons?page=5" className="page-link">
                5
              </a>
            </li>{" "}
            <li className="page-item">
              <a href="https://statamic.com/addons?page=6" className="page-link">
                6
              </a>
            </li>{" "}
            <li className="page-item">
              <a href="https://statamic.com/addons?page=7" className="page-link">
                7
              </a>
            </li>{" "}
            <li className="page-item">
              <a href="https://statamic.com/addons?page=8" className="page-link">
                8
              </a>
            </li>{" "}
            <li className="page-item">
              <a href="https://statamic.com/addons?page=9" className="page-link">
                9
              </a>
            </li>{" "}
            <li className="page-item">
              <a
                href="https://statamic.com/addons?page=2"
                rel="next"
                aria-label="Next »"
                className="page-link"
              >
                ›
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* <div className="h-max flex pb-6 flex-col space-y-10 px-10 justify-center2 items-center2 bg-[#f6f8f7]">
        <div className="flex flex-row mx-auto w-full space-x-6 justify-center2 items-center">
          <div className="flex justify-between items-center w-full  px-4 py-4 rounded border-2 border-gray-800 bg-white">
            <div>
              <nav
                aria-label="Pagination"
                className="flex items-center space-x-1 text-xs font-mabry text-gray-600"
              >
                <a href="#" className="p-1 rounded hover:bg-gray-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </a>
                <a href="#" className="px-2 py-1 rounded hover:bg-gray-100">
                  {" "}
                  1{" "}
                </a>
                <a
                  href="#"
                  className="px-2 py-1 rounded bg-gray-200 text-gray-900 font-medium hover:bg-gray-100"
                >
                  {" "}
                  2{" "}
                </a>
                <a href="#" className="px-2 py-1 rounded hover:bg-gray-100">
                  {" "}
                  3{" "}
                </a>
                <a href="#" className="px-2 py-1 rounded hover:bg-gray-100">
                  {" "}
                  ...{" "}
                </a>
                <a href="#" className="px-2 py-1 rounded hover:bg-gray-100">
                  {" "}
                  9{" "}
                </a>
                <a href="#" className="p-1 rounded hover:bg-gray-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </nav>
            </div>
            <div className="text-sm font-mabry">Showing 1-9 of 60825</div>
          </div>
        </div>
      </div> */}
      <Footer />
    </>
  );
}
