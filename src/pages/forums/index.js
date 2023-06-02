import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

import Notice from "@/components/Notice";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import about from "@/img/about-hello.svg";
import sumail from "@/img/sumail.jpg";
import mathew from "@/img/mathew.jpg";

export default function Forums() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Notice />

      <div className="h-max flex py-12 pb-20 px-20 bg-[#f4f4f0]">
        <div className="flex w-full mx-auto space-x-8 justify-center2 items-center2">
          <div className="w-1/3 flex flex-col">
            <div className="flex flex-col justify-center shadow-stack-sm px-3 py-6 border-2 border-gray-800 shadow-lg rounded bg-[#fcfcfc]">
              <div className="font-mabrybold text-lg text-center">
                Request a Feature
              </div>
              <div className="font-mabry text-sm text-center py-3">
                👉 Let us know what feature that you would like to see us work
                on next. Why the feature is needed?
              </div>
              <div className="flex w-full pt-5 justify-end">
                <Link href={""} className="relative inline-block text-lg group">
                  <span className="relative button flex z-10  px-3 py-3 justify-center overflow-hidden leading-tight text-sm font-mabrybold text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-800 rounded ">
                    <span className="absolute inset-0 w-full h-full px-5 py-3 rounded bg-yellow-200 group-hover:bg-yellow-300"></span>
                    <span className="relative">Create Request?</span>
                  </span>                  
                </Link>
              </div>
            </div>
          </div>
          <div className="w-2/3 flex flex-col font-mabry leading-snug space-y-3">
            <div className="">
              <div className="relative flex items-center w-full h-12 border rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
                <div className="grid place-items-center h-full w-12 text-gray-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>

                <input
                  className="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
                  type="text"
                  id="search"
                  placeholder="Search something.."
                />
              </div>
            </div>
            <div className="flex space-x-1">
              <span className="text-sm font-mabry">Showing</span>
              <select
                id="countries"
                className="bg-white text-gray-900 text-sm font-mabry focus:ring-blue-500 focus:border-blue-500  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option>Sort</option>
                <option value="US">Trending</option>
                <option value="CA">Top</option>
                <option value="FR">New</option>
              </select>
              <span className="text-sm font-mabry">post</span>
            </div>
            <div className="flex flex-col space-y-6">
              {/*  */}
              <div className="flex ">
                <div className="flex-shrink  flex flex-col space-y-2  items-center">
                  <button className="border p-2 rounded text-center text-sm shadow-sm bg-[#fcfcfc] flex flex-col justify-center items-center font-mabry">
                    <svg
                      className="inline-flex m-1"
                      width="12"
                      height="6"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="m0 6 6-6 6 6z"></path>
                    </svg>
                    <div>49</div>
                  </button>
                  <div className="cursor-pointer">
                    <img
                      className="w-7 h-7 border border-gray-700 rounded-full"
                      src="http://i.pravatar.cc/300"
                      alt="Avatar of Author"
                    />
                  </div>
                </div>
                <div className="flex flex-col ml-4">
                  <div className="pb-1.5 cursor-pointer text-md font-mabrybold hover:text-indigo-600 leading-tight">
                    <span>
                      Prompt for Teams: Create Teams, Share Prompts &
                      Collaborate (at work)
                    </span>
                  </div>
                  <div className="flex space-x-1">
                    <span className="text-xs font-mabry text-slate-400">
                      6 days ago
                    </span>
                    <a
                      href="#"
                      className="flex items-center text-xs font-mabry md:text-xs text-green-500 border border-green-500 px-2 rounded-full bg-green-200 capitalize "
                    >
                      open
                    </a>{" "}
                  </div>
                  <span className="py-1 font-mabry text-[15px] text-slate-500">
                    We know that organization is key to productivity, which is
                    why we're excited to introduce Prompt Lists. This feature..
                  </span>
                </div>
                <div className="flex w-18 ">
                  <button className="flex font-mabry text-slate-500 text-sm space-x-1">
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
                        d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                      />
                    </svg>
                    <span>4</span>
                  </button>
                </div>
              </div>
              {/*  */}
              <div className="flex ">
                <div className="flex-shrink  flex flex-col space-y-2  items-center">
                  <button className="border p-2 rounded text-center text-sm shadow-sm bg-[#fcfcfc] flex flex-col justify-center items-center font-mabry">
                    <svg
                      className="inline-flex m-1"
                      width="12"
                      height="6"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="m0 6 6-6 6 6z"></path>
                    </svg>
                    <div>49</div>
                  </button>
                  <div className="cursor-pointer">
                    <img
                      className="w-7 h-7 border border-gray-700 rounded-full"
                      src="http://i.pravatar.cc/300"
                      alt="Avatar of Author"
                    />
                  </div>
                </div>
                <div className="flex flex-col ml-4">
                  <div className="pb-1.5 cursor-pointer text-md font-mabrybold hover:text-indigo-600 leading-tight">
                    <span>
                      Prompt for Teams: Create Teams, Share Prompts &
                      Collaborate (at work)
                    </span>
                  </div>
                  <div className="flex space-x-1">
                    <span className="text-xs font-mabry text-slate-400">
                      6 days ago
                    </span>
                    <a
                      href="#"
                      className="flex items-center text-xs font-mabry md:text-xs text-green-500 border border-green-500 px-2 rounded-full bg-green-200 capitalize "
                    >
                      open
                    </a>{" "}
                  </div>
                  <span className="py-1 font-mabry text-[15px] text-slate-500">
                    We know that organization is key to productivity, which is
                    why we're excited to introduce Prompt Lists. This feature..
                  </span>
                </div>
                <div className="flex w-18 ">
                  <button className="flex font-mabry text-slate-500 text-sm space-x-1">
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
                        d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                      />
                    </svg>
                    <span>4</span>
                  </button>
                </div>
              </div>
              {/*  */}
              <div className="flex ">
                <div className="flex-shrink  flex flex-col space-y-2  items-center">
                  <button className="border p-2 rounded text-center text-sm shadow-sm bg-[#fcfcfc] flex flex-col justify-center items-center font-mabry">
                    <svg
                      className="inline-flex m-1"
                      width="12"
                      height="6"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="m0 6 6-6 6 6z"></path>
                    </svg>
                    <div>49</div>
                  </button>
                  <div className="cursor-pointer">
                    <img
                      className="w-7 h-7 border border-gray-700 rounded-full"
                      src="http://i.pravatar.cc/300"
                      alt="Avatar of Author"
                    />
                  </div>
                </div>
                <div className="flex flex-col ml-4">
                  <div className="pb-1.5 cursor-pointer text-md font-mabrybold hover:text-indigo-600 leading-tight">
                    <span>
                      Prompt for Teams: Create Teams, Share Prompts &
                      Collaborate (at work)
                    </span>
                  </div>
                  <div className="flex space-x-1">
                    <span className="text-xs font-mabry text-slate-400">
                      6 days ago
                    </span>
                    <a
                      href="#"
                      className="flex items-center text-xs font-mabry md:text-xs text-red-500 border border-red-500 px-2 rounded-full bg-red-200 capitalize "
                    >
                      closed
                    </a>{" "}
                  </div>
                  <span className="py-1 font-mabry text-[15px] text-slate-500">
                    We know that organization is key to productivity, which is
                    why we're excited to introduce Prompt Lists. This feature..
                  </span>
                </div>
                <div className="flex w-18 ">
                  <button className="flex font-mabry text-slate-500 text-sm space-x-1">
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
                        d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                      />
                    </svg>
                    <span>4</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
