import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import lastofus from "@/img/lastofus.jpg";

export default function Guide() {
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
            <div class="flex flex-col w-full ">
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
                        <div className="border hover:bg-[#1877f2] w-9 h-9 fill-[#1877f2] hover:fill-white border-[#5aa3ed] rounded-full flex items-center justify-center hover:shadow-blue-500/50 cursor-pointer">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                          >
                            <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
                          </svg>
                        </div>
                      </button>
                      <button>
                        <div className="border hover:bg-[#1d9bf0] w-9 h-9 fill-[#1d9bf0] hover:fill-white border-[#5aa3ed] rounded-full flex items-center justify-center hover:shadow-sky-500/50 cursor-pointer">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                          >
                            <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path>
                          </svg>
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
                  <div class="flex flex-wrap space-x-1 w-60">
                    <a
                      href="#"
                      class="m-1 flex flex-wrap items-center text-xs font-mabry md:text-xs text-indigo-500 border border-indigo-500 py-1 px-2 rounded-full bg-indigo-200 capitalize "
                    >
                      action
                    </a>{" "}
                    <a
                      href="#"
                      class="m-1 flex flex-wrap items-center text-xs font-mabry md:text-xs text-green-500 border border-green-500 py-1 px-2 rounded-full bg-green-200 capitalize "
                    >
                      adventure
                    </a>{" "}
                    <a
                      href="#"
                      class="m-1 flex flex-wrap items-center text-xs font-mabry md:text-xs text-orange-500 border border-orange-500 py-1 px-2 rounded-full bg-orange-200 capitalize "
                    >
                      adventure
                    </a>{" "}
                    <a
                      href="#"
                      class="m-1 flex flex-wrap items-center text-xs font-mabry md:text-xs text-blue-500 border border-blue-500 py-1 px-2 rounded-full bg-blue-200 capitalize "
                    >
                      rpg
                    </a>{" "}
                    <a
                      href="#"
                      class="m-1 flex flex-wrap items-center text-xs font-mabry md:text-xs text-yellow-500 border border-yellow-500 py-1 px-2 rounded-full bg-yellow-200 capitalize "
                    >
                      sport
                    </a>{" "}
                    <a
                      href="#"
                      class="m-1 flex flex-wrap items-center text-xs font-mabry md:text-xs text-red-500 border border-red-500 py-1 px-2 rounded-full bg-red-200 capitalize "
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
