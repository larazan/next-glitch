import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import lastofus from "@/img/lastofus.jpg";

export default function Next() {
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

      <div className="flex w-full mt-14">
        <div className="w-2/3 -z-10">
          <Image src={lastofus} quality={100} />
        </div>
        <div className="flex flex-col w-1/3 px-3 py-4 space-y-4">
          <div className="flex w-full space-x-3">
            <div className="flex  h-12 w-12 items-center justify-center border border-gray-800 bg-green-300 rounded-full px-2 py-2">
              <span className="text-lg font-mabrybold">8.7</span>
            </div>
            <div className="flex w-2/3 flex-col">
              <div className="text-sm font-mabrybold">User Score</div>
              <div className="text-xs font-mabry">
                Generally favorable reviews based on 201 Ratings
              </div>
            </div>
          </div>
          <div className="flex justify-center border border-gray-800 rounded">
            <div className="flex flex-col w-full ">
              <div className="border-b border-gray-800 py-3 px-3 leading-tight">
                <span className="text-sm font-mabry ">The Last of us</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-800 py-3 px-3">
                <div className="text-sm font-mabrybold">Rating</div>
                <div className="text-sm font-mabry">M</div>
              </div>
              <div className="flex justify-between items-center border-b border-gray-800 py-3 px-3">
                <div className="text-sm font-mabrybold">Developer</div>
                <div className="text-sm font-mabry">CD Projekt Red Studio</div>
              </div>
              <div className="flex justify-between items-center border-b border-gray-800 py-3 px-3">
                <div className="text-sm font-mabrybold">Genre</div>
                <div className="text-sm font-mabry">
                  Role-Playing, Action RPG
                </div>
              </div>
              <div className="flex justify-between items-center border-b border-gray-800 py-3 px-3">
                <div className="text-sm font-mabrybold">Multiplayer</div>
                <div className="text-sm font-mabry">No</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-max flex flex-col">
        <div className="flex flex-row mx-auto w-full justify-center2 items-center">
          <div className="flex justify-between w-full  px-8 py-4 border-y border-gray-800 bg-white">
            <div className="flex flex-col w-2/3 items-center2">
              <div className="text-lg font-mabrybold">
                The last of us part I
              </div>
              <div className="text-xs font-mabry text-gray-500">
                Release Date: Sep 2, 2022
              </div>
            </div>

            <div className="flex w-1/3 items-center">
              <div className="flex flex-wrap text-xs font-mabry hover:underline underline-offset-4 cursor-pointer">
                <span className="m-0.5">PlayStation 5</span>
                <span className="m-0.5">Nintendo</span>
                <span className="m-0.5">PC</span>
                <span className="m-0.5">Xbox</span>
                <span className="m-0.5">Console</span>
                <span className="m-0.5">Google</span>
                <span className="m-0.5">Smartphone</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#f6f8f7]">
        <div className="container w-full md:max-w-4xl mx-auto pt-4 md:pt-10 ">
          <div className="w-full px-4 md:px-6 text-lg text-gray-800 leading-normal">
            <div className="flex w-full space-x-3">
              <div className="w-2/3">
                {/* SOCMED */}
                <div className="font-mabry">
                  <div className=" flex justify-between items-center text-base md:text-sm text-green-500 font-bold">
                    <div className="flex justify-end space-x-2">
                    <button>
                        <div className="flex rounded border py-1.5 px-2 border-gray-800 bg-[#1877f2] hover:bg-[#1877f2]  fill-[#1877f2] hover:fill-white  items-center justify-between space-x-1 hover:shadow-blue-500/50 ">
                          <span className="text-white font-mabrybold">Facebook</span>
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path></svg>
                        </div>
                      </button>
                      <button>
                        <div className="flex rounded border py-1.5 px-2 border-gray-800 bg-[#1d9bf0] hover:bg-[#1d9bf0] fill-[#1d9bf0] hover:fill-white  items-center justify-between space-x-1 hover:shadow-sky-500/50">
                        <span className="text-white font-mabrybold">Twitter</span>
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></svg>
                        </div>
                      </button>
                      <button>
                        <div className="flex rounded border py-1.5 px-2 border-gray-800 bg-gray-800 hover:bg-black fill-[#1d9bf0] hover:fill-white  items-center justify-between space-x-1 hover:shadow-sky-500/50">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-white">
  <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
</svg>

                          <span className="text-white font-mabry">Copy url</span>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>

                {/* CONTENT */}
                <div className=" text-md font-mabry leading-snug">
                  <p className="py-3">
                    The Last of Us has been rebuilt for the PlayStation4 system.
                    Now featuring full 1080p, higher resolution character
                    models, improved shadows and lighting, in addition to
                    several other gameplay improvements. 20 years after a
                    pandemic has radically changed known civilization, infected
                    humans run wild and survivors are killing each other for
                    food, weapons; whatever they can get their hands on. Joel, a
                    violent survivor, is hired to smuggle a 14 year-old girl,
                    Ellie, out of an oppressive military quarantine zone, but
                    what starts as a small job soon transforms into a brutal
                    journey across the U.S. The Last of Us Remastered includes
                    the Abandoned Territories Map Pack, Reclaimed Territories
                    Map Pack, and the critically acclaimed The Last of Us: Left
                    Behind Single Player campaign that combines themes of
                    survival, loyalty, and love with tense, survival-action
                    gameplay.
                  </p>

                    <div className="w-2/4 px-3 py-3 rounded border border-indigo-700">
                        <div>
                            <div className="flex flex-col space-y-1 text-sm font-mabry text-blue-600">
                                <span className="capitalize cursor-pointer">1. guide content</span>
                                <span className="capitalize cursor-pointer">2. quick beginner guide</span>
                                <span className="capitalize cursor-pointer">3. all path quest</span>
                                <span className="capitalize cursor-pointer">4. all bosses</span>
                                <span className="capitalize cursor-pointer">5. all secrets</span>
                                <span className="capitalize cursor-pointer">6. all character</span>
                            </div>
                        </div>
                    </div>

                  <p className="py-3">
                  Our God of War Ragnarok guide opens with chapters focusing on the most important gameplay mechanics. We have prepared a Beginner's guide, as well as tips for, e.g. how to fight, explore the world, visit shops or set the difficulty level. In a separate section, we have focused on describing character progression system - you will learn about, e.g. Kratos' best skills, weapons, armor, companions' skills and gear or recommended builds.
                  </p>
                </div>

                <div className="flex py-3 border-y-2 justify-end space-x-2">
                  <button>
                    <div className="flex rounded border py-2 px-3 border-gray-800 bg-gray-800 hover:bg-black fill-[#1d9bf0] hover:fill-white  items-center justify-between space-x-2 hover:shadow-sky-500/50">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-5 h-5 text-white"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                        />
                      </svg>

                      <span className="text-white text-sm font-mabry capitalize">
                        guide content
                      </span>
                    </div>
                  </button>
                  <button>
                    <div className="flex rounded border py-2 px-3 border-gray-800 bg-gray-800 hover:bg-black fill-[#1d9bf0] hover:fill-white  items-center justify-between space-x-2 hover:shadow-sky-500/50">
                      <span className="text-white text-sm font-mabry capitalize">
                        Quick beginner guide
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-5 h-5 text-white"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                        />
                      </svg>
                    </div>
                  </button>
                </div>

                <div className=" mt-4 py-3 flex border border-gray-800 rounded justify-center space-x-2 items-center">
                  <div>
                    <span className="font-mabry text-sm">
                      Did this content help you?
                    </span>
                  </div>
                  <div className="flex space-x-2">
                    <Link href={''}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5 hover:text-pink-700"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
                      />
                    </svg>
                    </Link>
                    <Link href={''}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5  hover:text-pink-700"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M7.5 15h2.25m8.024-9.75c.011.05.028.1.052.148.591 1.2.924 2.55.924 3.977a8.96 8.96 0 01-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398C20.613 14.547 19.833 15 19 15h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 00.303-.54m.023-8.25H16.48a4.5 4.5 0 01-1.423-.23l-3.114-1.04a4.5 4.5 0 00-1.423-.23H6.504c-.618 0-1.217.247-1.605.729A11.95 11.95 0 002.25 12c0 .434.023.863.068 1.285C2.427 14.306 3.346 15 4.372 15h3.126c.618 0 .991.724.725 1.282A7.471 7.471 0 007.5 19.5a2.25 2.25 0 002.25 2.25.75.75 0 00.75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 002.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384"
                      />
                    </svg>
                    </Link>
                  </div>
                </div>

                {/* SOURCE */}
                <div className="md:text-sm text-gray-500 px-4 py-3 font-mabry">
                  Source:{" "}
                  <a
                    href="https://mydramalist.com/article/an-ultra-fan-guide-to-lee-elijah"
                    className="italic underline font-mabryitalic"
                  >
                    https://mydramalist.com/article/an-ultra-fan-guide-to-lee-elijah
                  </a>
                </div>

                {/* TAGS */}
                <div className="flex flex-wrap space-x-1 text-base md:text-sm font-mabry text-gray-500 px-4 py-2">
                  <span> Tags: </span>
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

                {/* <hr className="border-b-2 border-gray-400 mb-8 mx-4" /> */}

                <div className="flex w-full items-center font-mabry px-4 py-8">
                  <img
                    className="w-16 h-16 border border-gray-700 rounded-full mr-4"
                    src="http://i.pravatar.cc/300"
                    alt="Avatar of Author"
                  />
                  <div className="flex flex-col px-2">
                    <p className="font-mabrybold text-base md:text-xl leading-none ">
                      Jo Bloggerson
                    </p>
                    <p className="text-gray-600 text-xs md:text-base font-mabry">
                      Minimal Blog Tailwind CSS template by{" "}
                    </p>
                  </div>
                </div>
                {/* <DetailComment /> */}
                {/* <hr className="border-b-2 border-gray-400 mb-8 mx-4" /> */}
              </div>
              <div className="w-1/3 bg-green-100"></div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
