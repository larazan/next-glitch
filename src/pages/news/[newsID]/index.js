import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Report from "@/components/Report";
import Comment from "@/components/Comment";
import GoTop from "@/components/GoTop";

import mine from "@/img/mine.jpg";
import lastofus2 from "@/img/lastofus2.jpg";
import godofwar from "@/img/godofwar.jpg";
import pravatar from "@/img/300.jpg";
import { Help } from "@/components/Help";

export default function Detail() {
  const [reportModalOpen, setReportModalOpen] = useState(false);
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
      <section className="bg-[#f6f8f7] mt-12 md:mt-0">
        <div className="container w-full md:max-w-4xl mx-auto pt-4 md:pt-16  px-2 md:px-4">
          {/* breadcrumb */}
          <nav className="text-sm my-0" aria-label="Breadcrumb">
            <ol className="list-none p-0 inline-flex">
              <li className="flex items-center">
                <a
                  href="#"
                  className="capitalize text-gray-900 font-mabrybold hover:underline"
                >
                  Home
                </a>
                <svg
                  className="fill-current text-gray-900 w-2 h-2 md:w-3 md:h-3 mx-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                >
                  <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" />
                </svg>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-900 capitalize font-mabrybold hover:underline"
                  aria-current="page"
                >
                  news
                </a>
              </li>
            </ol>
          </nav>
          <div className="flex flex-col py-2 md:py-4">
            <span className="font-mabryblack text-2xl pb-2 text-gray-900">
              Silent Hill 2 Remake Dev Bloober Team Giving Up Psychological
              Horror for 'Mass Market'
            </span>
            <div className="flex flex-col md:flex-row space-y-1 md:justify-between border-t-4 border-slate-200 pt-2 md:pt-3">
              <span>
                <p className="text-sm md:text-base font-mabry text-gray-400">
                  Published 19 February 2019
                </p>
              </span>
              <div className="font-mabry">
                <div className=" flex justify-between items-center text-base md:text-sm text-green-500 font-bold">
                  <div className="flex justify-end space-x-2">
                    <button>
                      <div className="flex rounded border py-1.5 px-2 shadow-menu border-gray-800 bg-[#1877f2] hover:bg-[#1877f2]  fill-[#1877f2] hover:fill-white  items-center justify-between md:space-x-1 hover:shadow-blue-500/50 ">
                        <span className="hidden md:block text-white font-mabrybold">
                          Facebook
                        </span>
                        <svg
                          className="w-5 h-5 md:w-4 md:h-4 text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </div>
                    </button>
                    <button>
                      <div className="flex rounded border py-1.5 px-2 shadow-menu border-gray-800 bg-[#1d9bf0] hover:bg-[#1d9bf0] fill-[#1d9bf0] hover:fill-white  items-center justify-between md:space-x-1 hover:shadow-sky-500/50">
                        <span className="hidden md:block text-white font-mabrybold">
                          Twitter
                        </span>
                        <svg
                          className="w-5 h-5 md:w-4 md:h-4 text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                        </svg>
                      </div>
                    </button>
                    <button>
                      <div className="flex rounded border py-1.5 px-2 shadow-menu border-gray-800 bg-gray-800 hover:bg-black  hover:fill-white  items-center justify-between md:space-x-1 hover:shadow-sky-500/50">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-5 h-5 md:w-4 md:h-4 text-white"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                          />
                        </svg>

                        <span className="hidden md:block text-white font-mabry">
                          Copy url
                        </span>
                      </div>
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setReportModalOpen(true);
                      }}
                    >
                      <div className="flex rounded border py-1.5 px-2 shadow-menu border-gray-800 bg-white hover:bg-white text-black hover:fill-white  items-center justify-between space-x-1 hover:shadow-sky-500/50">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-5 h-5 md:w-4 md:h-4"
                        >
                          <path
                            fillRule="evenodd"
                            d="M3 2.25a.75.75 0 01.75.75v.54l1.838-.46a9.75 9.75 0 016.725.738l.108.054a8.25 8.25 0 005.58.652l3.109-.732a.75.75 0 01.917.81 47.784 47.784 0 00.005 10.337.75.75 0 01-.574.812l-3.114.733a9.75 9.75 0 01-6.594-.77l-.108-.054a8.25 8.25 0 00-5.69-.625l-2.202.55V21a.75.75 0 01-1.5 0V3A.75.75 0 013 2.25z"
                            clipRule="evenodd"
                          />
                        </svg>

                        <span className="hidden md:block text-black font-mabry">
                          Report
                        </span>
                      </div>
                    </button>
                    <Report
                      modalOpen={reportModalOpen}
                      setModalOpen={setReportModalOpen}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute2 -z-10">
            <Image src={mine} quality={100} alt="" />
          </div>
          <div className="py-6 w-full text-lg text-gray-800 leading-normal">
            <div className="flex flex-col md:flex-row w-full md:space-x-3">
              <div className="w-full md:w-2/3">
                {/* CONTENT */}

                <div className="text-md font-mabry leading-snug">
                  <p className="md:py-3">
                    👋 Welcome fellow{" "}
                    <a
                      className="text-green-500 no-underline hover:underline"
                      href="https://www.tailwindcss.com"
                    >
                      Tailwind CSS
                    </a>{" "}
                    and miminal monochrome blog fan. This starter template
                    provides a starting point to create your own minimal
                    monochrome blog using Tailwind CSS and vanilla Javascript.
                  </p>

                  <p className="py-3">
                    The basic blog page layout is available and all using the
                    default Tailwind CSS classes (although there are a few
                    hardcoded style tags). If you are going to use this in your
                    project, you will want to convert the classes into
                    components.
                  </p>

                  <p className="py-3">
                    Sed dignissim lectus ut tincidunt vulputate. Fusce tincidunt
                    lacus purus, in mattis tortor sollicitudin pretium.
                    Phasellus at diam posuere, scelerisque nisl sit amet,
                    tincidunt urna. Cras nisi diam, pulvinar ut molestie eget,
                    eleifend ac magna. Sed at lorem condimentum, dignissim lorem
                    eu, blandit massa. Phasellus eleifend turpis vel erat
                    bibendum scelerisque. Maecenas id risus dictum, rhoncus odio
                    vitae, maximus purus. Etiam efficitur dolor in dolor
                    molestie ornare. Aenean pulvinar diam nec neque tincidunt,
                    vitae molestie quam fermentum. Donec ac pretium diam.
                    Suspendisse sed odio risus. Nunc nec luctus nisi. Class
                    aptent taciti sociosqu ad litora torquent per conubia
                    nostra, per inceptos himenaeos. Duis nec nulla eget sem
                    dictum elementum.
                  </p>

                  <p className="py-3">
                    Maecenas accumsan lacus sit amet elementum porta. Aliquam eu
                    libero lectus. Fusce vehicula dictum mi. In non dolor at sem
                    ullamcorper venenatis ut sed dui. Ut ut est quam.
                    Suspendisse quam quam, commodo sit amet placerat in,
                    interdum a ipsum. Morbi sit amet tellus scelerisque tortor
                    semper posuere.
                  </p>
                  <p className="py-3">
                    Morbi varius posuere blandit. Praesent gravida bibendum
                    neque eget commodo. Duis auctor ornare mauris, eu accumsan
                    odio viverra in. Proin sagittis maximus pharetra. Nullam
                    lorem mauris, faucibus ut odio tempus, ultrices aliquet ex.
                    Nam id quam eget ipsum luctus hendrerit. Ut eros magna,
                    eleifend ac ornare vulputate, pretium nec felis.
                  </p>
                  <p className="py-3">
                    Vestibulum ante ipsum primis in faucibus orci luctus et
                    ultrices posuere cubilia Curae; Nunc vitae pretium elit.
                    Cras leo mauris, tristique in risus ac, tristique rutrum
                    velit. Mauris accumsan tempor felis vitae gravida. Cras
                    egestas convallis malesuada. Etiam ac ante id tortor
                    vulputate pretium. Maecenas vel sapien suscipit, elementum
                    odio et, consequat tellus.
                  </p>
                </div>

                <Help />

                <div className="md:text-sm text-gray-500 px-2 md:px-4 py-3 font-mabry">
                  Source:{" "}
                  <a
                    href="https://mydramalist.com/article/an-ultra-fan-guide-to-lee-elijah"
                    className="italic underline font-mabryitalic"
                  >
                    https://mydramalist.com/article/an-ultra-fan-guide-to-lee-elijah
                  </a>
                </div>

                {/* TAGS */}
                <div className="flex flex-wrap space-x-1 text-base md:text-sm font-mabry text-gray-500 px-2 md:px-4 py-2">
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

                <div className="flex w-full items-center font-mabry px-2 py-4 md:px-4 md:py-8">
                  <Image
                    className="w-16 h-16 border border-gray-700 rounded-full mr-1 md:mr-4"
                    src={pravatar}
                    alt="Avatar of Author"
                  />
                  <div className="flex flex-col space-y-1 px-2">
                    <p className="font-mabrybold text-base md:text-xl leading-none ">
                      Jo Bloggerson
                    </p>
                    <p className="text-gray-600 text-xs md:text-base font-mabry">
                      Minimal Blog Tailwind CSS template by{" "}
                    </p>
                  </div>
                </div>
                <Comment />
                {/* <hr className="border-b-2 border-gray-400 mb-8 mx-4" /> */}
              </div>
              <div className="w-full md:w-1/3 bg-green-100">
                <div className="flex flex-col space-y-5">
                  <div className="rounded bg-white border border-gray-800 shadow-stack-sm group flex flex-col overflow-hidden hover:scale-105 ">
                    <a
                      href="https://statamic.com/blog/statamic-4-unleashed"
                      className="relative"
                    >
                      <Image src={lastofus2} alt="" className="w-full" />{" "}
                      <div className="absolute opacity-0 group-hover:opacity-75 z-20 inset-0 mix-blend-overlay w-full bg-gradient-to-br from-purple-hot to-teal"></div>
                    </a>{" "}
                    <div className="px-3 py-2 flex flex-col justify-between leading-tight">
                      <h3 className="font-mabrybold text-md">
                        <a href="https://statamic.com/blog/statamic-4-unleashed">
                          Statamic 4 Has Been Unleashed
                        </a>
                      </h3>{" "}
                      <div className="font-mabry text-xs">May 9th, 2023</div>
                    </div>
                  </div>
                  <div className="rounded bg-white border border-gray-800 shadow-stack-sm group flex flex-col overflow-hidden hover:scale-105 ">
                    <a
                      href="https://statamic.com/blog/statamic-4-unleashed"
                      className="relative"
                    >
                      <Image src={godofwar} alt="" className="w-full" />{" "}
                      <div className="absolute opacity-0 group-hover:opacity-75 z-20 inset-0 mix-blend-overlay w-full bg-gradient-to-br from-purple-hot to-teal"></div>
                    </a>{" "}
                    <div className="px-3 py-2 flex flex-col justify-between leading-tight">
                      <h3 className="font-mabrybold text-md">
                        <a href="https://statamic.com/blog/statamic-4-unleashed">
                          Statamic 4 Has Been Unleashed
                        </a>
                      </h3>{" "}
                      <div className="font-mabry text-xs">May 9th, 2023</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
