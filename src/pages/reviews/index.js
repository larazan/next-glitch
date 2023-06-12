import React from "react";
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

      <div className=" flex justify-center text-sm mt-16">
        <header className="py-8">
          <h1 className="font-black text-5xl  text-center font-mabryblack">
            Starter Kits
          </h1>{" "}
          <p className="bg-white text-center text-2xl mb-1 font-mabryitalic">
            Jump-start your new Statamic site with beautifully designed site
            packages or meticulous developer boilerplates.
          </p>
        </header>
      </div>

      <div className="h-max flex pt-6 flex-col  px-10 justify-center2 items-center2 bg-[#f6f8f7]">
        <div className="flex flex-row mx-auto w-full space-x-6 justify-center2 items-center">
          <div className="flex justify-between w-full  px-4 py-4 rounded border-2 border-gray-800 bg-white">
            <div className="text-sm font-mabry">Showing 1-9 of 60825</div>
            <div className="flex space-x-2">
              <div className="text-sm font-mabry underline underline-offset-4 cursor-pointer">
                Clear
              </div>
              <div className="text-sm font-mabry underline underline-offset-4 cursor-pointer">
                Filter
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-max flex flex-col px-10 justify-center2 items-center2 bg-[#f6f8f7]">
        <div className="flex flex-row mx-auto w-full space-x-6 justify-center2 items-center">
          <section className="mt-4 flex flex-row flex-wrap  mx-auto items-center2">
            <div className="transition-all duration-150 flex w-full px-3 py-4  md:w-1/2 lg:w-1/3 ">
              <div className="flex w-full space-x-3 rounded border-2 border-gray-800 px-3 py-4 shadow-stack-sm hover:shadow-stack-yellow-sm">
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
                        An Adventure On A Colossal Scale.
                      </span>
                    </div>
                    <div>
                      <div className="flex  h-12 w-12 items-center justify-center border border-gray-800 bg-green-300 rounded-full px-2 py-2 shadow-menu">
                        <span className="text-lg font-mabrybold">8.7</span>
                      </div>
                    </div>
                  </div>
                  <div className="leading-tight">
                    <span className="font-mabry text-sm ">
                      Let me start by saying, after playing Shadow of the
                      Colossus, I can completely understand why it has the
                      reputation, as a cult classic, that it has. It is a unique
                      experience that, quite honestly, I haven’t really
                      experienced bef...
                    </span>
                  </div>
                  <div className="py-3">
                    <button className="font-mabrybold px-0.5 py-1 text-sm hover:bg-pink-300 border-b-2 border-pink-300 text-pink-700">
                      Read more
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="transition-all duration-150 flex w-full px-3 py-4  md:w-1/2 lg:w-1/3 ">
              <div className="flex w-full space-x-3 rounded border-2 border-gray-800 px-3 py-4 shadow-stack-sm hover:shadow-stack-yellow-sm">
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
                      <div className="flex  h-12 w-12 items-center justify-center border border-gray-800 bg-green-300 rounded-full px-2 py-2 shadow-menu">
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
                  <div className="py-3">
                    <button className="font-mabrybold px-0.5 py-1 text-sm hover:bg-pink-300 border-b-2 border-pink-300 text-pink-700">
                      Read more
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="transition-all duration-150 flex w-full px-3 py-4  md:w-1/2 lg:w-1/3 ">
              <div className="flex w-full space-x-3 rounded border-2 border-gray-800 px-3 py-4 shadow-stack-sm hover:shadow-stack-yellow-sm">
                <div className="w-1/4">
                  <Image
                    src={murdered}
                    className="object-fill w-full rounded"
                    alt=""
                  />
                </div>
                <div className="w-3/4 flex flex-col space-y-2">
                  <div className="flex justify-between space-x-1">
                    <Link href={"/"} className="hover:text-green-600">
                      <span className="text-lg font-mabrybold leading-tight">
                        No rest for this detective...
                      </span>
                    </Link>
                    <div>
                      <div className="flex  h-12 w-12 items-center justify-center border border-gray-800 bg-green-300 rounded-full px-2 py-2 shadow-menu">
                        <span className="text-lg font-mabrybold">8.7</span>
                      </div>
                    </div>
                  </div>
                  <div className="leading-tight">
                    <span className="font-mabry text-sm ">
                      Murdered: Soul Suspect took me by surprise. It is a game
                      that received mixed reviews when it was released and yet,
                      after fully completing the game, I found that I really
                      enjoyed my time with ...
                    </span>
                  </div>
                  <div className="py-3">
                    <button className="font-mabrybold px-0.5 py-1 text-sm hover:bg-pink-300 border-b-2 border-pink-300 text-pink-700">
                      Read more
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="transition-all duration-150 flex w-full px-3 py-4  md:w-1/2 lg:w-1/3 ">
              <div className="flex w-full space-x-3 rounded border-2 border-gray-800 px-3 py-4 shadow-stack-sm hover:shadow-stack-yellow-sm">
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
                        An Adventure On A Colossal Scale.
                      </span>
                    </div>
                    <div>
                      <div className="flex  h-12 w-12 items-center justify-center border border-gray-800 bg-green-300 rounded-full px-2 py-2 shadow-menu">
                        <span className="text-lg font-mabrybold">8.7</span>
                      </div>
                    </div>
                  </div>
                  <div className="leading-tight">
                    <span className="font-mabry text-sm ">
                      Let me start by saying, after playing Shadow of the
                      Colossus, I can completely understand why it has the
                      reputation, as a cult classic, that it has. It is a unique
                      experience that, quite honestly, I haven’t really
                      experienced bef...
                    </span>
                  </div>
                  <div className="py-3">
                    <button className="font-mabrybold px-0.5 py-1 text-sm hover:bg-pink-300 border-b-2 border-pink-300 text-pink-700">
                      Read more
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="transition-all duration-150 flex w-full px-3 py-4  md:w-1/2 lg:w-1/3 ">
              <div className="flex w-full space-x-3 rounded border-2 border-gray-800 px-3 py-4 shadow-stack-sm hover:shadow-stack-yellow-sm">
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
                        An Adventure On A Colossal Scale.
                      </span>
                    </div>
                    <div>
                      <div className="flex  h-12 w-12 items-center justify-center border border-gray-800 bg-green-300 rounded-full px-2 py-2 shadow-menu">
                        <span className="text-lg font-mabrybold">8.7</span>
                      </div>
                    </div>
                  </div>
                  <div className="leading-tight">
                    <span className="font-mabry text-sm ">
                      Let me start by saying, after playing Shadow of the
                      Colossus, I can completely understand why it has the
                      reputation, as a cult classic, that it has. It is a unique
                      experience that, quite honestly, I haven’t really
                      experienced bef...
                    </span>
                  </div>
                  <div className="py-3">
                    <button className="font-mabrybold px-0.5 py-1 text-sm hover:bg-pink-300 border-b-2 border-pink-300 text-pink-700">
                      Read more
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="transition-all duration-150 flex w-full px-3 py-4  md:w-1/2 lg:w-1/3 ">
              <div className="flex w-full space-x-3 rounded border-2 border-gray-800 px-3 py-4 shadow-stack-sm hover:shadow-stack-yellow-sm">
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
                        An Adventure On A Colossal Scale.
                      </span>
                    </div>
                    <div>
                      <div className="flex  h-12 w-12 items-center justify-center border border-gray-800 bg-green-300 rounded-full px-2 py-2 shadow-menu">
                        <span className="text-lg font-mabrybold">8.7</span>
                      </div>
                    </div>
                  </div>
                  <div className="leading-tight">
                    <span className="font-mabry text-sm ">
                      Let me start by saying, after playing Shadow of the
                      Colossus, I can completely understand why it has the
                      reputation, as a cult classic, that it has. It is a unique
                      experience that, quite honestly, I haven’t really
                      experienced bef...
                    </span>
                  </div>
                  <div className="py-3">
                    <button className="font-mabrybold px-0.5 py-1 text-sm hover:bg-pink-300 border-b-2 border-pink-300 text-pink-700">
                      Read more
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="transition-all duration-150 flex w-full px-3 py-4  md:w-1/2 lg:w-1/3 ">
              <div className="flex w-full space-x-3 rounded border-2 border-gray-800 px-3 py-4 shadow-stack-sm hover:shadow-stack-yellow-sm">
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
                        An Adventure On A Colossal Scale.
                      </span>
                    </div>
                    <div>
                      <div className="flex  h-12 w-12 items-center justify-center border border-gray-800 bg-green-300 rounded-full px-2 py-2 shadow-menu">
                        <span className="text-lg font-mabrybold">8.7</span>
                      </div>
                    </div>
                  </div>
                  <div className="leading-tight">
                    <span className="font-mabry text-sm ">
                      Let me start by saying, after playing Shadow of the
                      Colossus, I can completely understand why it has the
                      reputation, as a cult classic, that it has. It is a unique
                      experience that, quite honestly, I haven’t really
                      experienced bef...
                    </span>
                  </div>
                  <div className="py-3">
                    <button className="font-mabrybold px-0.5 py-1 text-sm hover:bg-pink-300 border-b-2 border-pink-300 text-pink-700">
                      Read more
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="transition-all duration-150 flex w-full px-3 py-4  md:w-1/2 lg:w-1/3 ">
              <div className="flex w-full space-x-3 rounded border-2 border-gray-800 px-3 py-4 shadow-stack-sm hover:shadow-stack-yellow-sm">
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
                        An Adventure On A Colossal Scale.
                      </span>
                    </div>
                    <div>
                      <div className="flex  h-12 w-12 items-center justify-center border border-gray-800 bg-green-300 rounded-full px-2 py-2 shadow-menu">
                        <span className="text-lg font-mabrybold">8.7</span>
                      </div>
                    </div>
                  </div>
                  <div className="leading-tight">
                    <span className="font-mabry text-sm ">
                      Let me start by saying, after playing Shadow of the
                      Colossus, I can completely understand why it has the
                      reputation, as a cult classic, that it has. It is a unique
                      experience that, quite honestly, I haven’t really
                      experienced bef...
                    </span>
                  </div>
                  <div className="py-3">
                    <button className="font-mabrybold px-0.5 py-1 text-sm hover:bg-pink-300 border-b-2 border-pink-300 text-pink-700">
                      Read more
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="transition-all duration-150 flex w-full px-3 py-4  md:w-1/2 lg:w-1/3 ">
              <div className="flex w-full space-x-3 rounded border-2 border-gray-800 px-3 py-4 shadow-stack-sm hover:shadow-stack-yellow-sm">
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
                        An Adventure On A Colossal Scale.
                      </span>
                    </div>
                    <div>
                      <div className="flex  h-12 w-12 items-center justify-center border border-gray-800 bg-green-300 rounded-full px-2 py-2 shadow-menu">
                        <span className="text-lg font-mabrybold">8.7</span>
                      </div>
                    </div>
                  </div>
                  <div className="leading-tight">
                    <span className="font-mabry text-sm ">
                      Let me start by saying, after playing Shadow of the
                      Colossus, I can completely understand why it has the
                      reputation, as a cult classic, that it has. It is a unique
                      experience that, quite honestly, I haven’t really
                      experienced bef...
                    </span>
                  </div>
                  <div className="py-3">
                    <button className="font-mabrybold px-0.5 py-1 text-sm hover:bg-pink-300 border-b-2 border-pink-300 text-pink-700">
                      Read more
                    </button>
                  </div>
                </div>
              </div>
            </div>
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
