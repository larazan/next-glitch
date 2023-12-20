import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import lastofus from "@/img/lastofus.jpg";
import leon from "@/img/leon.png";
import cod from "@/img/cod.jpg";
import { Pagination } from "@/components/Pagination";
import GoTop from "@/components/GoTop";
import Sorting from "@/components/Sorting";

export default function Guides() {
  //   useEffect(() => {
  //     window.scrollTo(0, 0);
  //   }, []);

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

      <div className="flex mx-auto w-full bg-white">
      <div className=" flex justify-center mx-auto w-11/12 text-sm mt-16">
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
    </div>   
      
      <Sorting />

      <section className="bg-[#f6f8f7]">
        <div className="container w-full md:max-w-4xl mx-auto pt-4 md:pt-10 pb-10">
          <div className="w-full px-4 md:px-6 text-lg text-gray-800 leading-normal">
            <div className="flex w-full space-x-3">
              <div className="flex flex-col space-y-5 w-full text-md font-mabry leading-tight pr-0 border-gray-700">
                <Link href={"/guides/2"}>
                  <div className=" flex flex-row w-full space-x-3 md:space-x-4 justify-center items-center2 bg-white border-2 border-gray-700 px-2 py-2 md:px-4 md:py-4 rounded-md shadow-md shadow-stack-sm group">
                    <div className="w-1/3 ">
                      <Image src={cod} alt="" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex w-2/3 flex-col md:space-y-1 leading-tight">
                      <div className="text-lg md:text-[19px] font-mabryblack group-hover:underline underline-offset-2 leading-tight">
                        Build that thing you’ve been imagining
                      </div>
                      <div className="">
                        <span className="text-sm md:text-[16px] leading-4 md:leading-tight">
                          Millions of people use Glitch to express themselves, try
                          new things, and help others learn. We’re fun and easy,
                          Millions of people use Glitch to express themselves, try
                          new things, and help others learn. We’re fun and easy,
                        </span>
                      </div>
                      <div className="flex justify-end pt-2 space-x-3 items-center">
                        
                        <div className="flex space-x-1 items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-5 h-5 text-red-600"
                          >
                            <path
                              fillRule="evenodd"
                              d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="text-[12px] font-mabry text-red-600">Anna</span>
                        </div>
                        <div className="flex space-x-1 items-center text-red-600">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-5 h-5"
                          >
                            <path
                              fillRule="evenodd"
                              d="M4.804 21.644A6.707 6.707 0 006 21.75a6.721 6.721 0 003.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 01-.814 1.686.75.75 0 00.44 1.223zM8.25 10.875a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25zM10.875 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875-1.125a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z"
                              clipRule="evenodd"
                            />
                          </svg>

                          <span className="text-[12px] font-mabry">100</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
                <Link href={"/guides/2"}>
                  <div className=" flex flex-row w-full space-x-3 md:space-x-4 justify-center items-center2 bg-white border-2 border-gray-700 px-2 py-2 md:px-4 md:py-4 rounded-md shadow-md shadow-stack-sm group">
                    <div className="w-1/3 ">
                      <Image src={cod} alt="" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex w-2/3 flex-col md:space-y-1 leading-tight">
                      <div className="text-lg md:text-[19px] font-mabryblack group-hover:underline underline-offset-2 leading-tight">
                        Build that thing you’ve been imagining
                      </div>
                      <div className="">
                        <span className="text-sm md:text-[16px] leading-4 md:leading-tight">
                          Millions of people use Glitch to express themselves, try
                          new things, and help others learn. We’re fun and easy,
                          Millions of people use Glitch to express themselves, try
                          new things, and help others learn. We’re fun and easy,
                        </span>
                      </div>
                      <div className="flex justify-end pt-2 space-x-3 items-center">
                        
                        <div className="flex space-x-1 items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-5 h-5 text-red-600"
                          >
                            <path
                              fillRule="evenodd"
                              d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="text-[12px] font-mabry text-red-600">Anna</span>
                        </div>
                        <div className="flex space-x-1 items-center text-red-600">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-5 h-5"
                          >
                            <path
                              fillRule="evenodd"
                              d="M4.804 21.644A6.707 6.707 0 006 21.75a6.721 6.721 0 003.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 01-.814 1.686.75.75 0 00.44 1.223zM8.25 10.875a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25zM10.875 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875-1.125a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z"
                              clipRule="evenodd"
                            />
                          </svg>

                          <span className="text-[12px] font-mabry">100</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
                <Link href={"/guides/2"}>
                  <div className=" flex flex-row w-full space-x-3 md:space-x-4 justify-center items-center2 bg-white border-2 border-gray-700 px-2 py-2 md:px-4 md:py-4 rounded-md shadow-md shadow-stack-sm group">
                    <div className="w-1/3 ">
                      <Image src={cod} alt="" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex w-2/3 flex-col md:space-y-1 leading-tight">
                      <div className="text-lg md:text-[19px] font-mabryblack group-hover:underline underline-offset-2 leading-tight">
                        Build that thing you’ve been imagining
                      </div>
                      <div className="">
                        <span className="text-sm md:text-[16px] leading-4 md:leading-tight">
                          Millions of people use Glitch to express themselves, try
                          new things, and help others learn. We’re fun and easy,
                          Millions of people use Glitch to express themselves, try
                          new things, and help others learn. We’re fun and easy,
                        </span>
                      </div>
                      <div className="flex justify-end pt-2 space-x-3 items-center">
                        
                        <div className="flex space-x-1 items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-5 h-5 text-red-600"
                          >
                            <path
                              fillRule="evenodd"
                              d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="text-[12px] font-mabry text-red-600">Anna</span>
                        </div>
                        <div className="flex space-x-1 items-center text-red-600">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-5 h-5"
                          >
                            <path
                              fillRule="evenodd"
                              d="M4.804 21.644A6.707 6.707 0 006 21.75a6.721 6.721 0 003.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 01-.814 1.686.75.75 0 00.44 1.223zM8.25 10.875a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25zM10.875 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875-1.125a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z"
                              clipRule="evenodd"
                            />
                          </svg>

                          <span className="text-[12px] font-mabry">100</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
                <Link href={"/guides/2"}>
                  <div className=" flex flex-row w-full space-x-3 md:space-x-4 justify-center items-center2 bg-white border-2 border-gray-700 px-2 py-2 md:px-4 md:py-4 rounded-md shadow-md shadow-stack-sm group">
                    <div className="w-1/3 ">
                      <Image src={cod} alt="" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex w-2/3 flex-col md:space-y-1 leading-tight">
                      <div className="text-lg md:text-[19px] font-mabryblack group-hover:underline underline-offset-2 leading-tight">
                        Build that thing you’ve been imagining
                      </div>
                      <div className="">
                        <span className="text-sm md:text-[16px] leading-4 md:leading-tight">
                          Millions of people use Glitch to express themselves, try
                          new things, and help others learn. We’re fun and easy,
                          Millions of people use Glitch to express themselves, try
                          new things, and help others learn. We’re fun and easy,
                        </span>
                      </div>
                      <div className="flex justify-end pt-2 space-x-3 items-center">
                        
                        <div className="flex space-x-1 items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-5 h-5 text-red-600"
                          >
                            <path
                              fillRule="evenodd"
                              d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="text-[12px] font-mabry text-red-600">Anna</span>
                        </div>
                        <div className="flex space-x-1 items-center text-red-600">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-5 h-5"
                          >
                            <path
                              fillRule="evenodd"
                              d="M4.804 21.644A6.707 6.707 0 006 21.75a6.721 6.721 0 003.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 01-.814 1.686.75.75 0 00.44 1.223zM8.25 10.875a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25zM10.875 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875-1.125a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z"
                              clipRule="evenodd"
                            />
                          </svg>

                          <span className="text-[12px] font-mabry">100</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
                <Link href={"/guides/2"}>
                  <div className=" flex flex-row w-full space-x-3 md:space-x-4 justify-center items-center2 bg-white border-2 border-gray-700 px-2 py-2 md:px-4 md:py-4 rounded-md shadow-md shadow-stack-sm group">
                    <div className="w-1/3 ">
                      <Image src={cod} alt="" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex w-2/3 flex-col md:space-y-1 leading-tight">
                      <div className="text-lg md:text-[19px] font-mabryblack group-hover:underline underline-offset-2 leading-tight">
                        Build that thing you’ve been imagining
                      </div>
                      <div className="">
                        <span className="text-sm md:text-[16px] leading-4 md:leading-tight">
                          Millions of people use Glitch to express themselves, try
                          new things, and help others learn. We’re fun and easy,
                          Millions of people use Glitch to express themselves, try
                          new things, and help others learn. We’re fun and easy,
                        </span>
                      </div>
                      <div className="flex justify-end pt-2 space-x-3 items-center">
                        
                        <div className="flex space-x-1 items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-5 h-5 text-red-600"
                          >
                            <path
                              fillRule="evenodd"
                              d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="text-[12px] font-mabry text-red-600">Anna</span>
                        </div>
                        <div className="flex space-x-1 items-center text-red-600">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-5 h-5"
                          >
                            <path
                              fillRule="evenodd"
                              d="M4.804 21.644A6.707 6.707 0 006 21.75a6.721 6.721 0 003.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 01-.814 1.686.75.75 0 00.44 1.223zM8.25 10.875a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25zM10.875 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875-1.125a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z"
                              clipRule="evenodd"
                            />
                          </svg>

                          <span className="text-[12px] font-mabry">100</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
                <Link href={"/guides/2"}>
                  <div className=" flex flex-row w-full space-x-3 md:space-x-4 justify-center items-center2 bg-white border-2 border-gray-700 px-2 py-2 md:px-4 md:py-4 rounded-md shadow-md shadow-stack-sm group">
                    <div className="w-1/3 ">
                      <Image src={cod} alt="" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex w-2/3 flex-col md:space-y-1 leading-tight">
                      <div className="text-lg md:text-[19px] font-mabryblack group-hover:underline underline-offset-2 leading-tight">
                        Build that thing you’ve been imagining
                      </div>
                      <div className="">
                        <span className="text-sm md:text-[16px] leading-4 md:leading-tight">
                          Millions of people use Glitch to express themselves, try
                          new things, and help others learn. We’re fun and easy,
                          Millions of people use Glitch to express themselves, try
                          new things, and help others learn. We’re fun and easy,
                        </span>
                      </div>
                      <div className="flex justify-end pt-2 space-x-3 items-center">
                        
                        <div className="flex space-x-1 items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-5 h-5 text-red-600"
                          >
                            <path
                              fillRule="evenodd"
                              d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="text-[12px] font-mabry text-red-600">Anna</span>
                        </div>
                        <div className="flex space-x-1 items-center text-red-600">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-5 h-5"
                          >
                            <path
                              fillRule="evenodd"
                              d="M4.804 21.644A6.707 6.707 0 006 21.75a6.721 6.721 0 003.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 01-.814 1.686.75.75 0 00.44 1.223zM8.25 10.875a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25zM10.875 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875-1.125a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z"
                              clipRule="evenodd"
                            />
                          </svg>

                          <span className="text-[12px] font-mabry">100</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
                <Link href={"/guides/2"}>
                  <div className=" flex flex-row w-full space-x-3 md:space-x-4 justify-center items-center2 bg-white border-2 border-gray-700 px-2 py-2 md:px-4 md:py-4 rounded-md shadow-md shadow-stack-sm group">
                    <div className="w-1/3 ">
                      <Image src={cod} alt="" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex w-2/3 flex-col md:space-y-1 leading-tight">
                      <div className="text-lg md:text-[19px] font-mabryblack group-hover:underline underline-offset-2 leading-tight">
                        Build that thing you’ve been imagining
                      </div>
                      <div className="">
                        <span className="text-sm md:text-[16px] leading-4 md:leading-tight">
                          Millions of people use Glitch to express themselves, try
                          new things, and help others learn. We’re fun and easy,
                          Millions of people use Glitch to express themselves, try
                          new things, and help others learn. We’re fun and easy,
                        </span>
                      </div>
                      <div className="flex justify-end pt-2 space-x-3 items-center">
                        
                        <div className="flex space-x-1 items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-5 h-5 text-red-600"
                          >
                            <path
                              fillRule="evenodd"
                              d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="text-[12px] font-mabry text-red-600">Anna</span>
                        </div>
                        <div className="flex space-x-1 items-center text-red-600">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-5 h-5"
                          >
                            <path
                              fillRule="evenodd"
                              d="M4.804 21.644A6.707 6.707 0 006 21.75a6.721 6.721 0 003.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 01-.814 1.686.75.75 0 00.44 1.223zM8.25 10.875a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25zM10.875 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875-1.125a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z"
                              clipRule="evenodd"
                            />
                          </svg>

                          <span className="text-[12px] font-mabry">100</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
             
              <div className="hidden w-1/3 ">
                <div className="flex flex-col space-y-2 px-2 w-full">
                  <div>
                    <span className="text-md capitalize font-mabrybold">
                      suggested topic
                    </span>
                  </div>
                  <div className="flex flex-wrap space-x-1 w-60">
                    <a
                      href="#"
                      className="m-1 flex flex-wrap items-center text-xs font-mabry md:text-xs text-indigo-500 border border-indigo-500 py-1 px-2 rounded-full bg-indigo-200 capitalize "
                    >
                      action
                    </a>{" "}
                    <a
                      href="#"
                      className="m-1 flex flex-wrap items-center text-xs font-mabry md:text-xs text-green-500 border border-green-500 py-1 px-2 rounded-full bg-green-200 capitalize "
                    >
                      adventure
                    </a>{" "}
                    <a
                      href="#"
                      className="m-1 flex flex-wrap items-center text-xs font-mabry md:text-xs text-orange-500 border border-orange-500 py-1 px-2 rounded-full bg-orange-200 capitalize "
                    >
                      adventure
                    </a>{" "}
                    <a
                      href="#"
                      className="m-1 flex flex-wrap items-center text-xs font-mabry md:text-xs text-blue-500 border border-blue-500 py-1 px-2 rounded-full bg-blue-200 capitalize "
                    >
                      rpg
                    </a>{" "}
                    <a
                      href="#"
                      className="m-1 flex flex-wrap items-center text-xs font-mabry md:text-xs text-yellow-500 border border-yellow-500 py-1 px-2 rounded-full bg-yellow-200 capitalize "
                    >
                      sport
                    </a>{" "}
                    <a
                      href="#"
                      className="m-1 flex flex-wrap items-center text-xs font-mabry md:text-xs text-red-500 border border-red-500 py-1 px-2 rounded-full bg-red-200 capitalize "
                    >
                      racing
                    </a>{" "}
                  </div>
                </div>
              </div>
            </div>

          </div>
          <Pagination />
        </div>
      </section>
      <Footer />
    </>
  );
}
