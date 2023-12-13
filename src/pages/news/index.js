import React from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

import Header from "@/components/Header2";
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
      <div className="relative mt-16 block min-h-80 lg:col-span-2 lg:h-full">
        <div className="py-8 flex mx-auto w-11/12  space-x-6">
          <div className="flex flex-col w-1/2 space-y-0.5 leading-tight">
            <div className="flex space-x-2 items-center">
              <Link href={""} className="p-0.5 bg-[#ffff00]">
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
              className="text-[17px] md:text-[24px] font-mabryblack hover:text-pink-600 text-slate-900"
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
          <div className="w-1/2">
            <Image
              src={dingdong}
              alt=""
              className=" inset-0 object-cover w-full h-full"
            />
          </div>
        </div>
      </div>

      <div className="h-max w-full flex py-4 md:py-6 space-x-6 px-4 md:px-10 justify-center2 items-center2 bg-white">
        <div className="w-full md:w-4/6 flex-col space-y-4 md:space-y-7">
          <div className="flex flex-row mx-auto w-full space-x-6 justify-center2 items-center">
            <span className="text-3xl font-mabryblack">Latest news</span>
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
          <div className='flex flex-row mx-auto w-full md:w-3/4 space-x-3 md:space-x-6 pb-4 md:pb-6 border-b border-slate-300'>
            <Link href={''} className=''>
              <Image src={minecraft} alt="" className="object-cover h-36 w-96 md:h-36 md:w-96 rounded" />
            </Link>
            <div className='flex flex-col space-y-0.5 leading-tight'>
              <div className="flex space-x-2 items-center">
                <Link href={''} className="p-0.5 bg-[#ffff00]">
                  <span className="font-mabryblack text-xs text-slate-900">NEWS</span>
                </Link>
                <span className="font-mabrybold text-xs text-gray-700">April 16, 2023</span>
              </div>
              <Link href={''} className='text-[17px] md:text-[24px] font-mabryblack hover:text-pink-600 leading-tight text-gray-900'>
                Build that thing you’ve been imagining
              </Link>
              <span className='text-[14px] leading-tight md:leading-relaxed font-mabry text-gray-900'>
                Millions of people use Glitch to express themselves, try new things, and help others learn. We’re fun and easy, 
              </span>
            </div>
          </div>

          <div className='flex flex-row mx-auto w-full md:w-3/4 space-x-3 md:space-x-6 pb-4 md:pb-6 border-b border-slate-300'>
            <Link href={''} className=''>
              <Image src={minecraft} alt="" className="object-cover h-36 w-96 md:h-36 md:w-96 rounded" />
            </Link>
            <div className='flex flex-col space-y-0.5 leading-tight'>
              <div className="flex space-x-2 items-center">
                <Link href={''} className="p-0.5 bg-[#ffff00]">
                  <span className="font-mabryblack text-xs text-slate-900">NEWS</span>
                </Link>
                <span className="font-mabrybold text-xs text-gray-700">April 16, 2023</span>
              </div>
              <Link href={''} className='text-[17px] md:text-[24px] font-mabryblack hover:text-pink-600 leading-tight text-gray-900'>
                Build that thing you’ve been imagining
              </Link>
              <span className='text-[14px] leading-tight md:leading-relaxed font-mabry text-gray-900'>
                Millions of people use Glitch to express themselves, try new things, and help others learn. We’re fun and easy, 
              </span>
            </div>
          </div>

          <div className='flex flex-row mx-auto w-full md:w-3/4 space-x-3 md:space-x-6 pb-4 md:pb-6 border-b border-slate-300'>
            <Link href={''} className=''>
              <Image src={minecraft} alt="" className="object-cover h-36 w-96 md:h-36 md:w-96 rounded" />
            </Link>
            <div className='flex flex-col space-y-0.5 leading-tight'>
              <div className="flex space-x-2 items-center">
                <Link href={''} className="p-0.5 bg-[#ffff00]">
                  <span className="font-mabryblack text-xs text-slate-900">NEWS</span>
                </Link>
                <span className="font-mabrybold text-xs text-gray-700">April 16, 2023</span>
              </div>
              <Link href={''} className='text-[17px] md:text-[24px] font-mabryblack hover:text-pink-600 leading-tight text-gray-900'>
                Build that thing you’ve been imagining
              </Link>
              <span className='text-[14px] leading-tight md:leading-relaxed font-mabry text-gray-900'>
                Millions of people use Glitch to express themselves, try new things, and help others learn. We’re fun and easy, 
              </span>
            </div>
          </div>

          <div className='flex flex-row mx-auto w-full md:w-3/4 space-x-3 md:space-x-6 pb-4 md:pb-6 border-b border-slate-300'>
            <Link href={''} className=''>
              <Image src={minecraft} alt="" className="object-cover h-36 w-96 md:h-36 md:w-96 rounded" />
            </Link>
            <div className='flex flex-col space-y-0.5 leading-tight'>
              <div className="flex space-x-2 items-center">
                <Link href={''} className="p-0.5 bg-[#ffff00]">
                  <span className="font-mabryblack text-xs text-slate-900">NEWS</span>
                </Link>
                <span className="font-mabrybold text-xs text-gray-700">April 16, 2023</span>
              </div>
              <Link href={''} className='text-[17px] md:text-[24px] font-mabryblack hover:text-pink-600 leading-tight text-gray-900'>
                Build that thing you’ve been imagining
              </Link>
              <span className='text-[14px] leading-tight md:leading-relaxed font-mabry text-gray-900'>
                Millions of people use Glitch to express themselves, try new things, and help others learn. We’re fun and easy, 
              </span>
            </div>
          </div>

          <div className='flex flex-row mx-auto w-full md:w-3/4 space-x-3 md:space-x-6 pb-4 md:pb-6 border-b border-slate-300'>
            <Link href={''} className=''>
              <Image src={minecraft} alt="" className="object-cover h-36 w-96 md:h-36 md:w-96 rounded" />
            </Link>
            <div className='flex flex-col space-y-0.5 leading-tight'>
              <div className="flex space-x-2 items-center">
                <Link href={''} className="p-0.5 bg-[#ffff00]">
                  <span className="font-mabryblack text-xs text-slate-900">NEWS</span>
                </Link>
                <span className="font-mabrybold text-xs text-gray-700">April 16, 2023</span>
              </div>
              <Link href={''} className='text-[17px] md:text-[24px] font-mabryblack hover:text-pink-600 leading-tight text-gray-900'>
                Build that thing you’ve been imagining
              </Link>
              <span className='text-[14px] leading-tight md:leading-relaxed font-mabry text-gray-900'>
                Millions of people use Glitch to express themselves, try new things, and help others learn. We’re fun and easy, 
              </span>
            </div>
          </div>
          
          <div className='flex flex-row mx-auto w-full md:w-3/4 space-x-3 md:space-x-6 pb-4 md:pb-6 border-b border-slate-300'>
            <Link href={''} className=''>
              <Image src={minecraft} alt="" className="object-cover h-36 w-96 md:h-36 md:w-96 rounded" />
            </Link>
            <div className='flex flex-col space-y-0.5 leading-tight'>
              <div className="flex space-x-2 items-center">
                <Link href={''} className="p-0.5 bg-[#ffff00]">
                  <span className="font-mabryblack text-xs text-slate-900">NEWS</span>
                </Link>
                <span className="font-mabrybold text-xs text-gray-700">April 16, 2023</span>
              </div>
              <Link href={''} className='text-[17px] md:text-[24px] font-mabryblack hover:text-pink-600 leading-tight text-gray-900'>
                Build that thing you’ve been imagining
              </Link>
              <span className='text-[14px] leading-tight md:leading-relaxed font-mabry text-gray-900'>
                Millions of people use Glitch to express themselves, try new things, and help others learn. We’re fun and easy, 
              </span>
            </div>
          </div>

          <div className="flex  mx-auto w-3/4 space-x-6">
            <div className="flex w-full pt-5">
              <Link
                href={""}
                className="relative w-full inline-block  group text-center"
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
        <div className="hidden md:block w-2/6">
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
      <Footer />
    </>
  );
}
