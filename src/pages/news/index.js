import React from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import pencil from "@/img/home-pencil.svg";
import gem from "@/img/home-gem.svg";
import headphone from "@/img/home-headphones.svg";
import book from "@/img/home-book-green.svg";
import app from "@/img/home-app-yellow.svg";

import mine from "@/img/mine.jpg";
import fortnite from "@/img/fortnite.jpg";
import cyberpunk from "@/img/cyberpunk.jpg";
import lastofus2 from "@/img/lastofus2.jpg";
import godofwar from "@/img/godofwar.jpg";
import minecraft from "@/img/mine.jpg";
import dingdong from "@/img/dingdong.jpg";
import GoTop from "@/components/GoTop";

export default function News() {
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
      <div className="relative mt-12 md:mt-14 block min-h-80 lg:col-span-2 lg:h-full bg-white">
        <div className="py-8 flex flex-col-reverse md:flex-row mx-auto w-11/12  md:space-x-6">
          <div className="flex flex-col w-full md:w-1/2 space-y-0.5 pt-2 leading-tight">
            <div className="flex space-x-2 items-center">
              <Link
                href={"/news/news-one"}
                className="py-0.5 px-1 bg-[#ffff00]"
              >
                <span className="font-mabryblack text-xs text-slate-900">
                  NEWS
                </span>
              </Link>
              <span className="font-mabrybold text-xs text-gray-700">
                April 16, 2023
              </span>
            </div>
            <Link
              href={"/news/2"}
              className="text-[17px] py-0.5 md:py-1 md:text-[24px] font-mabryblack hover:text-pink-6002 hover:underline underline-offset-2 leading-5 md:leading-6 text-gray-900"
            >
              Pokemon Go Developer Niantic Shuttering LA Studio, Canceling
              Marvel: World of Heroes
            </Link>
            <span className="text-[14px] md:text-[17px] leading-tight md:leading-snug font-mabry text-slate-900">
              The concept lined up perfectly with The Pokémon Companys flagship
              game series, and the mobile game went on to huge success. However,
              it looks as though that success wont be repeated for the
              long-awaited Marvel game.
            </span>
          </div>
          <div className="w-full md:w-1/2">
            <Image
              src={dingdong}
              alt=""
              className=" inset-0 object-cover w-full h-full"
            />
          </div>
        </div>
      </div>

      <div className="h-max w-full flex flex-col md:flex-row py-4 md:py-6 space-y-6 md:space-x-6 px-4 md:px-10 justify-center2 items-center2 bg-white">
        <div className="w-full md:w-4/6 flex-col space-y-4 md:space-y-7">
          <div className="flex flex-row mx-auto w-full space-x-6 justify-center2 items-center">
            <span className="text-3xl font-mabryblack text-gray-900 uppercase">
              Latest news
            </span>
          </div>

          {/* <section className="flex flex-row flex-wrap mx-auto w-3/4 justify-center2 items-center3">
          <div className="transition-all duration-150 flex w-full px-2 py-4 md:w-1/2 lg:w-1/3">
            <div className="relative flex flex-col border-2 border-gray-600 items-stretch min-h-full pb-4 mb-6 transition-all duration-150 bg-white rounded-lg shadow-lg hover:shadow-2xl">
              <div className="md:flex-shrink-0">
                <Image
                  src={mine}
                  className="object-fill w-full rounded-lg rounded-b-none "
                  alt=""
                />
              </div>

              <h1 className="px-4 pt-2 font-mabrybold font-bold">
                Lorem Ipsum dolor sit amet
              </h1>
              <div className="flex flex-row flex-wrap w-full h-40 px-4 py-2 overflow-hidden text-sm font-mabry leading-tight text-justify text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
                magni fugiat, odit incidunt necessitatibus aut nesciunt
                exercitationem aliquam id voluptatibus quisquam maiores officia
                sit amet accusantium aliquid quo obcaecati quasi.
              </div>
              <section className="absolute bottom-4 px-4 py-2 w-full ">
                <div className="flex w-full items-center justify-between space-x-2 ">
                  <div className="flex w-2/3 items-center justify-start ">
                    <img
                      className="object-cover h-8 rounded-full"
                      src="https://thumbs.dreamstime.com/b/default-avatar-photo-placeholder-profile-icon-eps-file-easy-to-edit-default-avatar-photo-placeholder-profile-icon-124557887.jpg"
                      alt="Avatar"
                    />
                    <div className="flex flex-col mx-2">
                      <a
                        href=""
                        className="font-semibold text-xs font-mabry text-gray-700 hover:underline"
                      >
                        Fajrian Aidil Pratama
                      </a>
                    </div>
                  </div>
                  <div className="flex w-1/3 justify-end text-xs font-mabry text-gray-600 ">
                    <span>9 minutes read</span>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </section> */}
          <div className="flex flex-row mx-auto w-full md:w-4/4 space-x-3 md:space-x-4 pb-4 md:pb-6 border-b border-slate-300">
            <Link href={"/news/news-one"} className="">
              <Image
                src={minecraft}
                alt=""
                className="object-cover h-36 w-96 md:h-36 md:w-96 rounded"
              />
            </Link>
            <div className="flex flex-col space-y-0.5 leading-tight">
              <div className="flex space-x-2 items-center">
                <Link
                  href={"/news/news-one"}
                  className="py-0.5 px-1 bg-[#ffff00]"
                >
                  <span className="font-mabryblack text-xs text-slate-900">
                    NEWS
                  </span>
                </Link>
                <span className="font-mabrybold text-xs text-gray-700">
                  April 16, 2023
                </span>
              </div>
              <Link
                href={"/news/news-one"}
                className="text-[17px] py-0.5 md:py-1 md:text-[24px] font-mabryblack hover:text-pink-6002 hover:underline underline-offset-2 leading-5 md:leading-6 text-gray-900"
              >
                Nightdive Studios on a big 2023: acquired by Atari, begging for
                Dark Forces, and remaking System Shock
              </Link>
              <span className="text-[14px] leading-tight md:leading-5 font-mabry text-gray-900">
                Millions of people use Glitch to express themselves, try new
                things, and help others learn. We’re fun and easy,
              </span>
            </div>
          </div>

          <div className="flex flex-row mx-auto w-full md:w-4/4 space-x-3 md:space-x-4 pb-4 md:pb-6 border-b border-slate-300">
            <Link href={"/news/news-one"} className="">
              <Image
                src={minecraft}
                alt=""
                className="object-cover h-36 w-96 md:h-36 md:w-96 rounded"
              />
            </Link>
            <div className="flex flex-col space-y-0.5 leading-tight">
              <div className="flex space-x-2 items-center">
                <Link
                  href={"/news/news-one"}
                  className="py-0.5 px-1 bg-[#ffff00]"
                >
                  <span className="font-mabryblack text-xs text-slate-900">
                    NEWS
                  </span>
                </Link>
                <span className="font-mabrybold text-xs text-gray-700">
                  April 16, 2023
                </span>
              </div>
              <Link
                href={"/news/news-one"}
                className="text-[17px] py-0.5 md:py-1 md:text-[24px] font-mabryblack hover:text-pink-6002 hover:underline underline-offset-2 leading-5 md:leading-6 text-gray-900"
              >
                Death Stranding movie is being made with Hereditary studio A24,
                will be more than a “direct translation”
              </Link>
              <span className="text-[14px] leading-tight md:leading-5 font-mabry text-gray-900">
                Millions of people use Glitch to express themselves, try new
                things, and help others learn. We’re fun and easy,
              </span>
            </div>
          </div>

          <div className="flex flex-row mx-auto w-full md:w-4/4 space-x-3 md:space-x-4 pb-4 md:pb-6 border-b border-slate-300">
            <Link href={"/news/news-one"} className="">
              <Image
                src={minecraft}
                alt=""
                className="object-cover h-36 w-96 md:h-36 md:w-96 rounded"
              />
            </Link>
            <div className="flex flex-col space-y-0.5 leading-tight">
              <div className="flex space-x-2 items-center">
                <Link
                  href={"/news/news-one"}
                  className="py-0.5 px-1 bg-[#ffff00]"
                >
                  <span className="font-mabryblack text-xs text-slate-900">
                    NEWS
                  </span>
                </Link>
                <span className="font-mabrybold text-xs text-gray-700">
                  April 16, 2023
                </span>
              </div>
              <Link
                href={"/news/news-one"}
                className="text-[17px] py-0.5 md:py-1 md:text-[24px] font-mabryblack hover:text-pink-6002 hover:underline underline-offset-2 leading-5 md:leading-6 text-gray-900"
              >
                Build that thing you’ve been imagining
              </Link>
              <span className="text-[14px] leading-tight md:leading-5 font-mabry text-gray-900">
                Millions of people use Glitch to express themselves, try new
                things, and help others learn. We’re fun and easy,
              </span>
            </div>
          </div>

          <div className="flex flex-row mx-auto w-full md:w-4/4 space-x-3 md:space-x-4 pb-4 md:pb-6 border-b border-slate-300">
            <Link href={"/news/news-one"} className="">
              <Image
                src={minecraft}
                alt=""
                className="object-cover h-36 w-96 md:h-36 md:w-96 rounded"
              />
            </Link>
            <div className="flex flex-col space-y-0.5 leading-tight">
              <div className="flex space-x-2 items-center">
                <Link
                  href={"/news/news-one"}
                  className="py-0.5 px-1 bg-[#ffff00]"
                >
                  <span className="font-mabryblack text-xs text-slate-900">
                    NEWS
                  </span>
                </Link>
                <span className="font-mabrybold text-xs text-gray-700">
                  April 16, 2023
                </span>
              </div>
              <Link
                href={"/news/news-one"}
                className="text-[17px] py-0.5 md:py-1 md:text-[24px] font-mabryblack hover:text-pink-6002 hover:underline underline-offset-2 leading-5 md:leading-6 text-gray-900"
              >
                Pokémon Indigo Disk version exclusives for Scarlet and Violet
              </Link>
              <span className="text-[14px] leading-tight md:leading-5 font-mabry text-gray-900">
                Millions of people use Glitch to express themselves, try new
                things, and help others learn. We’re fun and easy,
              </span>
            </div>
          </div>

          <div className="flex flex-row mx-auto w-full md:w-4/4 space-x-3 md:space-x-4 pb-4 md:pb-6 border-b border-slate-300">
            <Link href={"/news/news-one"} className="">
              <Image
                src={minecraft}
                alt=""
                className="object-cover h-36 w-96 md:h-36 md:w-96 rounded"
              />
            </Link>
            <div className="flex flex-col space-y-0.5 leading-tight">
              <div className="flex space-x-2 items-center">
                <Link
                  href={"/news/news-one"}
                  className="py-0.5 px-1 bg-[#ffff00]"
                >
                  <span className="font-mabryblack text-xs text-slate-900">
                    NEWS
                  </span>
                </Link>
                <span className="font-mabrybold text-xs text-gray-700">
                  April 16, 2023
                </span>
              </div>
              <Link
                href={"/news/news-one"}
                className="text-[17px] py-0.5 md:py-1 md:text-[24px] font-mabryblack hover:text-pink-6002 hover:underline underline-offset-2 leading-5 md:leading-6 text-gray-900"
              >
                Shadow Gambit: The Cursed Crew gets mod support in surprise
                final update
              </Link>
              <span className="text-[14px] leading-tight md:leading-5 font-mabry text-gray-900">
                Millions of people use Glitch to express themselves, try new
                things, and help others learn. We’re fun and easy,
              </span>
            </div>
          </div>

          <div className="flex  mx-auto md:w-4/4 space-x-6">
            <div className="flex w-full pt-5">
              <Link
                href={""}
                className="relative w-full inline-block group text-center"
              >
                <span className="relative flex button w-full x-3 py-3 justify-center overflow-hidden leading-tight text-sm font-mabrybold text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-800 rounded ">
                  <span className="absolute inset-0 w-full h-full px-5 py-3 rounded bg-yellow-200 group-hover:bg-yellow-300"></span>
                  <span className="relative text-lg font-mabryblack">
                    Load More
                  </span>
                </span>
              </Link>
            </div>
          </div>
        </div>
        <div className=" w-full md:w-2/6 pb-10">
          <div className="flex flex-col space-y-3">
            <div className="rounded bg-white border group flex flex-col overflow-hidden  ">
              <div className="flex ml-2 py-1">
                <span className="font-mabrybold tracking-tighter text-[#e31c2d] uppercase text-[13px]">
                  Return of the king
                </span>
              </div>
              <div className="px-3 py-1 flex flex-col justify-between leading-tight ">
                <h3 className="font-mabrybold text-lg leading-5 hover:underline underline-offset-2 text-gray-900">
                  <Link href="/news/news-one">
                    Ninja Issen perfects retro, cyberpunk, platforming action to
                    deliver nostalgic 90s magic
                  </Link>
                </h3>{" "}
                <div className="flex justify-end pt-1.5 font-mabry mt-1 text-xs text-gray-900">
                  May 9th, 2023
                </div>
              </div>
            </div>
            {/*  */}
            <div className="rounded bg-white border group flex flex-col overflow-hidden ">
              <div className="flex ml-2 py-1">
                <span className="font-mabrybold tracking-tighter text-[#e31c2d] uppercase text-[13px]">
                  Return of the king
                </span>
              </div>
              <div className="px-3 py-1 flex flex-col justify-between leading-tight ">
                <h3 className="font-mabrybold text-lg leading-5 hover:underline underline-offset-2 text-gray-900">
                  <Link href="/news/news-one">
                    The unlikely is happening: Battlefield 2042 is getting a new
                    season in March 2024
                  </Link>
                </h3>{" "}
                <div className="flex justify-end pt-1.5 font-mabry mt-1 text-xs text-gray-900">
                  May 9th, 2023
                </div>
              </div>
            </div>
            {/*  */}
            <div className="rounded bg-white border group flex flex-col overflow-hidden  ">
              <div className="flex ml-2 py-1">
                <span className="font-mabrybold tracking-tighter text-[#e31c2d] uppercase text-[13px]">
                  Return of the king
                </span>
              </div>
              <div className="px-3 py-1 flex flex-col justify-between leading-tight ">
                <h3 className="font-mabrybold text-lg leading-5 hover:underline underline-offset-2 text-gray-900">
                  <Link href="/news/news-one">
                    DC Studios head James Gunn forgets The Flash exists, roasts
                    pointless cameos in comic book movies
                  </Link>
                </h3>{" "}
                <div className="flex justify-end pt-1.5 font-mabry mt-1 text-xs text-gray-900">
                  May 9th, 2023
                </div>
              </div>
            </div>
            {/*  */}
            <div className="rounded bg-white border group flex flex-col overflow-hidden ">
              <div className="px-3 py-2 flex flex-col justify-between leading-tight ">
                <h3 className="font-mabrybold text-lg leading-5 hover:underline underline-offset-2 text-gray-900">
                  <Link href="/news/news-one">
                    Netflix's Leave the World Behind is crushing the streaming
                    charts despite divided opinions
                  </Link>
                </h3>{" "}
                <div className="flex justify-end pt-1.5 font-mabry mt-1 text-xs text-gray-900">
                  May 9th, 2023
                </div>
              </div>
            </div>
            {/*  */}
            <div className="rounded bg-white border group flex flex-col overflow-hidden  ">
              <div className="flex ml-2 py-1">
                <span className="font-mabrybold tracking-tighter text-[#e31c2d] uppercase text-[13px]">
                  Return of the king
                </span>
              </div>
              <div className="px-3 py-1 flex flex-col justify-between leading-tight ">
                <h3 className="font-mabrybold text-lg leading-5 hover:underline underline-offset-2 text-gray-900">
                  <Link href="/news/news-one">
                    Expensive T-shirt seemingly confirms A24 and Hideo Kojima
                    are joining forces for the Death Stranding movie
                  </Link>
                </h3>{" "}
                <div className="flex justify-end pt-1.5 font-mabry mt-1 text-xs text-gray-900">
                  May 9th, 2023
                </div>
              </div>
            </div>
            {/*  */}
            <div className="rounded bg-white border group flex flex-col overflow-hidden ">
              <div className="flex ml-2 py-1">
                <span className="font-mabrybold tracking-tighter text-[#e31c2d] uppercase text-[13px]">
                  Return of the king
                </span>
              </div>
              <div className="px-3 py-1 flex flex-col justify-between leading-tight ">
                <h3 className="font-mabrybold text-lg leading-5 hover:underline underline-offset-2 text-gray-900">
                  <Link href="/news/news-one">
                    Naughty Dog cancels The Last of Us multiplayer, will stick
                    to its single player roots
                  </Link>
                </h3>{" "}
                <div className="flex justify-end pt-1.5 font-mabry mt-1 text-xs text-gray-900">
                  May 9th, 2023
                </div>
              </div>
            </div>
            {/*  */}
            <div className="rounded bg-white border group flex flex-col overflow-hidden ">
              <div className="flex ml-2 py-1">
                <span className="font-mabrybold tracking-tighter text-[#e31c2d] uppercase text-[13px]">
                  Return of the king
                </span>
              </div>
              <div className="px-3 py-1 flex flex-col justify-between leading-tight ">
                <h3 className="font-mabrybold text-lg leading-5 hover:underline underline-offset-2 text-gray-900">
                  <Link href="/news/news-one">
                    Tekken 8 gets a massive offline PS5 demo this week, Xbox and
                    PC coming soon
                  </Link>
                </h3>{" "}
                <div className="flex justify-end pt-1.5 font-mabry mt-1 text-xs  text-gray-900">
                  May 9th, 2023
                </div>
              </div>
            </div>
            {/*  */}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
