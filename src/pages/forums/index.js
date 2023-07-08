import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

import Notice from "@/components/Notice";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import about from "@/img/about-hello.svg";
import pravatar from "@/img/300.jpg";
import { Alert } from "@/components/Alert";
import { Pagination } from "@/components/Pagination";

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
      <div className="h-max flex py-5 md:py-8 flex-col px-4 md:px-10  bg-[#35adce]">
        <div className="flex flex-row  items-center">
          <span className="text-3xl font-mabryblack">Welcome to discussion</span>
        </div>
      </div>
      <div className="h-max  py-12 pb-20 px-4 md:px-12 bg-white">
        <div className="flex w-full mx-auto md:space-x-8 justify-center2 items-center2">
          <div className="w-1/3 hidden md:flex flex-col space-y-4">
            
            <div className="flex w-full flex-col space-y-4">
              <div className="flex w-full">
                <Link
                  className="relative w-full inline-block  group text-center"
                  href="/"
                >
                  <span className="relative flex shadow-menu w-full x-3 py-2 justify-center overflow-hidden leading-tight text-sm font-mabrybold text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-800 rounded-full ">
                    <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-full bg-[#fcc31e] group-hover:bg-yellow-300"></span>
                    <span className="relative text-[22px] font-mabryblack">
                      Start a discussion
                    </span>
                  </span>
                </Link>
              </div>
              <div className="flex w-full">
                <ul className="w-full space-y-2">
                  <li className="w-full flex space-x-4 items-center cursor-pointer font-mabry ">
                    <span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
  <path d="M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 00-1.032-.211 50.89 50.89 0 00-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 002.433 3.984L7.28 21.53A.75.75 0 016 21v-4.03a48.527 48.527 0 01-1.087-.128C2.905 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.405-3.718 3.413-3.979z" />
  <path d="M15.75 7.5c-1.376 0-2.739.057-4.086.169C10.124 7.797 9 9.103 9 10.609v4.285c0 1.507 1.128 2.814 2.67 2.94 1.243.102 2.5.157 3.768.165l2.782 2.781a.75.75 0 001.28-.53v-2.39l.33-.026c1.542-.125 2.67-1.433 2.67-2.94v-4.286c0-1.505-1.125-2.811-2.664-2.94A49.392 49.392 0 0015.75 7.5z" />
</svg>

                    </span>
                    <div className="text-[16px] ">
                      All discussion
                    </div>
                  </li>
                  <li className="w-full flex space-x-4 items-center cursor-pointer font-mabry">
                    <span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
  <path fillRule="evenodd" d="M5.25 2.25a3 3 0 00-3 3v4.318a3 3 0 00.879 2.121l9.58 9.581c.92.92 2.39 1.186 3.548.428a18.849 18.849 0 005.441-5.44c.758-1.16.492-2.629-.428-3.548l-9.58-9.581a3 3 0 00-2.122-.879H5.25zM6.375 7.5a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25z" clipRule="evenodd" />
</svg>
                    </span>
                    <div className="text-[16px] font-mabry">
                      Tags
                    </div>
                  </li>
                  <li className="w-full flex space-x-4 items-center cursor-pointer font-mabry">
                    <span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
  <path fillRule="evenodd" d="M19.449 8.448L16.388 11a4.52 4.52 0 010 2.002l3.061 2.55a8.275 8.275 0 000-7.103zM15.552 19.45L13 16.388a4.52 4.52 0 01-2.002 0l-2.55 3.061a8.275 8.275 0 007.103 0zM4.55 15.552L7.612 13a4.52 4.52 0 010-2.002L4.551 8.45a8.275 8.275 0 000 7.103zM8.448 4.55L11 7.612a4.52 4.52 0 012.002 0l2.55-3.061a8.275 8.275 0 00-7.103 0zm8.657-.86a9.776 9.776 0 011.79 1.415 9.776 9.776 0 011.414 1.788 9.764 9.764 0 010 10.211 9.777 9.777 0 01-1.415 1.79 9.777 9.777 0 01-1.788 1.414 9.764 9.764 0 01-10.212 0 9.776 9.776 0 01-1.788-1.415 9.776 9.776 0 01-1.415-1.788 9.764 9.764 0 010-10.212 9.774 9.774 0 011.415-1.788A9.774 9.774 0 016.894 3.69a9.764 9.764 0 0110.211 0zM14.121 9.88a2.985 2.985 0 00-1.11-.704 3.015 3.015 0 00-2.022 0 2.985 2.985 0 00-1.11.704c-.326.325-.56.705-.704 1.11a3.015 3.015 0 000 2.022c.144.405.378.785.704 1.11.325.326.705.56 1.11.704.652.233 1.37.233 2.022 0a2.985 2.985 0 001.11-.704c.326-.325.56-.705.704-1.11a3.016 3.016 0 000-2.022 2.985 2.985 0 00-.704-1.11z" clipRule="evenodd" />
</svg>
                    </span>
                    <div className="text-[16px] font-mabry">
                      Help adn support
                    </div>
                  </li>
                  <li className="w-full flex space-x-4 items-center cursor-pointer font-mabry">
                    <span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
  <path d="M12 .75a8.25 8.25 0 00-4.135 15.39c.686.398 1.115 1.008 1.134 1.623a.75.75 0 00.577.706c.352.083.71.148 1.074.195.323.041.6-.218.6-.544v-4.661a6.714 6.714 0 01-.937-.171.75.75 0 11.374-1.453 5.261 5.261 0 002.626 0 .75.75 0 11.374 1.452 6.712 6.712 0 01-.937.172v4.66c0 .327.277.586.6.545.364-.047.722-.112 1.074-.195a.75.75 0 00.577-.706c.02-.615.448-1.225 1.134-1.623A8.25 8.25 0 0012 .75z" />
  <path fillRule="evenodd" d="M9.013 19.9a.75.75 0 01.877-.597 11.319 11.319 0 004.22 0 .75.75 0 11.28 1.473 12.819 12.819 0 01-4.78 0 .75.75 0 01-.597-.876zM9.754 22.344a.75.75 0 01.824-.668 13.682 13.682 0 002.844 0 .75.75 0 11.156 1.492 15.156 15.156 0 01-3.156 0 .75.75 0 01-.668-.824z" clipRule="evenodd" />
</svg>
                    </span>
                    <div className="text-[16px] font-mabry">
                      Contribute
                    </div>
                  </li>
                  <li className="w-full flex space-x-4 items-center cursor-pointer font-mabry">
                    <span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
  <path d="M16.881 4.346A23.112 23.112 0 018.25 6H7.5a5.25 5.25 0 00-.88 10.427 21.593 21.593 0 001.378 3.94c.464 1.004 1.674 1.32 2.582.796l.657-.379c.88-.508 1.165-1.592.772-2.468a17.116 17.116 0 01-.628-1.607c1.918.258 3.76.75 5.5 1.446A21.727 21.727 0 0018 11.25c0-2.413-.393-4.735-1.119-6.904zM18.26 3.74a23.22 23.22 0 011.24 7.51 23.22 23.22 0 01-1.24 7.51c-.055.161-.111.322-.17.482a.75.75 0 101.409.516 24.555 24.555 0 001.415-6.43 2.992 2.992 0 00.836-2.078c0-.806-.319-1.54-.836-2.078a24.65 24.65 0 00-1.415-6.43.75.75 0 10-1.409.516c.059.16.116.321.17.483z" />
</svg>
                    </span>
                    <div className="text-[16px] font-mabry">
                      Announcement
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col justify-center shadow-stack-sm px-3 py-6 border-2 border-gray-800 shadow-lg rounded bg-[#fcfcfc]">
              <div className="font-mabrybold text-lg text-center">
                Request a Feature
              </div>
              <div className="font-mabry text-sm text-center py-3">
                👉 Let us know what feature that you would like to see us work
                on next. Why the feature is needed?
              </div>
              {/* <div className="flex w-full pt-5 justify-end">
                <Link href={""} className="relative inline-block text-lg group">
                  <span className="relative button flex z-10  px-3 py-3 justify-center overflow-hidden leading-tight text-sm font-mabrybold text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-800 rounded ">
                    <span className="absolute inset-0 w-full h-full px-5 py-3 rounded bg-yellow-200 group-hover:bg-yellow-300"></span>
                    <span className="relative">Create Request?</span>
                  </span>                  
                </Link>
              </div> */}
            </div>
          </div>
          <div className="w-full md:w-2/3 flex flex-col font-mabry leading-snug space-y-3">
          <div className="md:hidden flex w-full">
                <Link
                  className="relative w-full inline-block  group text-center"
                  href="/"
                >
                  <span className="relative flex shadow-menu w-full x-3 py-2 justify-center overflow-hidden leading-tight text-sm font-mabrybold text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-800 rounded-full ">
                    <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-full bg-[#fcc31e] group-hover:bg-yellow-300"></span>
                    <span className="relative text-[22px] font-mabryblack">
                      Start a discussion
                    </span>
                  </span>
                </Link>
              </div>
            <div className="">
              
              <div className="relative flex items-center w-full h-12 border-2 border-gray-700 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
                <div className="grid place-items-center h-full w-12 text-gray-700">
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
                  className="peer h-full w-full outline-none text-sm md:text-md text-gray-800 pr-2"
                  type="text"
                  id="search"
                  placeholder="Search something.."
                />
              </div>
            </div>
            <div className="flex space-x-1">
              <span className="text-md font-mabrybold">Showing</span>
              <select
                id="countries"
                className="bg-white text-gray-900 text-sm font-mabry focus:ring-blue-500 focus:border-blue-500  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option>Sort</option>
                <option value="US">Trending</option>
                <option value="CA">Top</option>
                <option value="FR">New</option>
              </select>
              <span className="text-md font-mabrybold">post</span>
            </div>
            <div className="flex flex-col space-y-6">
              {/*  */}
              <div className="flex border-2 border-gray-700 p-3 hover:border-blue-500 cursor-pointer">
                <div className="flex-shrink  flex flex-col space-y-2  items-center">
                  <button className="border border-gray-500 p-2 rounded text-center text-sm shadow-sm bg-[#fcfcfc] flex flex-col justify-center items-center font-mabry">
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
                    <Image
                      className="w-7 h-7 border border-gray-700 rounded-full"
                      src={pravatar}
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
                    <span className="text-xs font-mabry text-slate-800">
                      6 days ago
                    </span>
                    <Link
                      href="#"
                      className="flex items-center text-xs font-mabry md:text-xs text-green-500 border border-green-500 px-2 rounded-full bg-green-200 capitalize "
                    >
                      open
                    </Link>{" "}
                  </div>
                  <span className="py-1 font-mabry text-[15px] text-slate-800">
                    We know that organization is key to productivity, which is
                    why we&apos;re excited to introduce Prompt Lists. This
                    feature..
                  </span>
                </div>
                <div className="flex w-18 ">
                  <button className="flex font-mabry text-slate-800 text-sm space-x-1">
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
              <div className="flex border-2 border-gray-700 p-3">
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
                    <Image
                      className="w-7 h-7 border border-gray-700 rounded-full"
                      src={pravatar}
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
                    <span className="text-xs font-mabry text-slate-800">
                      6 days ago
                    </span>
                    <Link
                      href="#"
                      className="flex items-center text-xs font-mabry md:text-xs text-green-500 border border-green-500 px-2 rounded-full bg-green-200 capitalize "
                    >
                      open
                    </Link>{" "}
                  </div>
                  <span className="py-1 font-mabry text-[15px] text-slate-800">
                    We know that organization is key to productivity, which is
                    why we&apos;re excited to introduce Prompt Lists. This
                    feature..
                  </span>
                </div>
                <div className="flex w-18 ">
                  <button className="flex font-mabry text-slate-800 text-sm space-x-1">
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
              <div className="flex border-2 border-gray-700 p-3">
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
                    <Image
                      className="w-7 h-7 border border-gray-700 rounded-full"
                      src={pravatar}
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
                    <span className="text-xs font-mabry text-slate-800">
                      6 days ago
                    </span>
                    <Link
                      href="#"
                      className="flex items-center text-xs font-mabry md:text-xs text-red-500 border border-red-500 px-2 rounded-full bg-red-200 capitalize "
                    >
                      closed
                    </Link>{" "}
                  </div>
                  <span className="py-1 font-mabry text-[15px] text-slate-800">
                    We know that organization is key to productivity, which is
                    why we&apos;re excited to introduce Prompt Lists. This
                    feature..
                  </span>
                </div>
                <div className="flex w-18 ">
                  <button className="flex font-mabry text-slate-800 text-sm space-x-1">
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
        <Pagination />
      </div>
      

      <Linklert />
      <Footer />
    </>
  );
}
