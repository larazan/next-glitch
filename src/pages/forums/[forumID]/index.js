import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

import Notice from "@/components/Notice";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import gmb from "@/img/gmb.png";

export default function Forum() {
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

      <div className="h-max flex py-12 pb-20 px-20 bg-white">
        <div className="flex w-full mx-auto space-x-8 justify-center2 items-center2">
          <div className="w-1/3 flex flex-col">
            <div className="flex flex-col justify-center px-3 py-6 border shadow-lg rounded bg-[#fcfcfc]">
              <div className="font-mabrybold text-lg text-center">
                Request a Feature
              </div>
              <div className="font-mabry text-sm text-center py-3">
                👉 Let us know what feature that you would like to see us work
                on next. Why the feature is needed?
              </div>
              <div className="flex w-full pt-5 justify-end">
                <Link href={""} className="relative inline-block text-lg group">
                  <span className="relative flex z-10  px-3 py-3 justify-center overflow-hidden leading-tight text-sm font-mabrybold text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-800 rounded ">
                    <span className="absolute inset-0 w-full h-full px-5 py-3 rounded bg-yellow-200 group-hover:bg-yellow-300"></span>
                    {/* <span className="absolute left-0 w-22 h-22 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span> */}
                    <span className="relative">Create Request?</span>
                  </span>
                  <span
                    className="absolute bottom-0 right-0 w-full h-11 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded group-hover:mb-00 group-hover:mr-00"
                    data-rounded="rounded-lg"
                  ></span>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-2/3 flex flex-col font-mabry leading-snug space-y-3">
            <div className="flex flex-col space-y-6">
              {/*  */}
              <div className="flex ">
                <div class="flex-shrink  flex flex-col space-y-2  items-center">
                  <button class="border p-2 rounded text-center text-sm shadow-sm bg-[#fcfcfc] flex flex-col justify-center items-center font-mabry">
                    <svg
                      class="inline-flex m-1"
                      width="12"
                      height="6"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="m0 6 6-6 6 6z"></path>
                    </svg>
                    <div>49</div>
                  </button>
                </div>
                <div className="flex flex-col ml-4">
                  <div className="pb-1.5 cursor-pointer text-md font-mabrybold hover:text-indigo-600 leading-tight">
                    <span>
                      Prompt for Teams: Create Teams, Share Prompts &
                      Collaborate (at work)
                    </span>
                  </div>
                  <div className="flex items-center cursor-pointer space-x-2">
                    <img
                      className="w-7 h-7 border border-gray-700 rounded-full"
                      src="http://i.pravatar.cc/300"
                      alt="Avatar of Author"
                    />
                    <span className="text-sm text-pink-300 hover:text-pink-400 font-mabrybold capitalize">
                      eder teixeira
                    </span>
                  </div>
                  <div className="mt-1.5 flex space-x-1">
                    <span className="text-xs font-mabry text-slate-400">
                      6 days ago
                    </span>
                    <a
                      href="#"
                      class="flex items-center text-xs font-mabry md:text-xs text-green-500 border border-green-500 px-2 rounded-full bg-green-200 capitalize "
                    >
                      open
                    </a>{" "}
                  </div>
                  <div>
                    <span className="py-2 font-mabry text-[15px] text-slate-500">
                      Feedback and community is essential for growth and
                      improvement, which is why we're introducing a Commenting
                      System on Snack Prompt. This will allow users to provide
                      valuable insights, suggestions, and encouragement on each
                      other's prompts. We're excited to see the community
                      flourish as users learn from one another and help refine
                      their AI prompt skills.
                    </span>
                  </div>
                  <div className="py-3">
                    <Image src={gmb} alt="" className="w-60 cursor-pointer" />
                  </div>
                  <div className="py-4">
                    <div className="">
                      <div class=" flex flex-col items-center2 w-full  border rounded focus-within:shadow-lg bg-white overflow-hidden">
                        <div>
                        <textarea
                          class="h-full2 w-full px-2 py-2 outline-none h-10 text-sm text-gray-700 pr-2"
                          placeholder="Leave a comment"
                        ></textarea>
                        </div>
                        <div className="px-2 py-2 flex justify-between">
                            <button>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                            </svg>
                            </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*  */}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
