import React from "react";
import Link from "next/link";
import Image from "next/image";

import pencil from "@/img/home-pencil.svg";
import gem from "@/img/home-gem.svg";
import headphone from "@/img/home-headphones.svg";
import book from "@/img/home-book-green.svg";
import app from "@/img/home-app-yellow.svg";

import mine from "@/img/mine.jpg";
import fortnite from "@/img/fortnite.jpg";
import cyberpunk from "@/img/cyberpunk.jpg";

export default function HomeNews() {
  return (
    <>
      <div className="h-max flex py-14 flex-col space-y-4 px-10 justify-center2 items-center2 bg-indigo-200">
        <div className="flex flex-row mx-auto w-3/4 space-x-6 justify-center2 items-center">
          <span className="text-3xl font-mabrybold">Latest news</span>
        </div>

        {/* <div className='flex flex-row mx-auto w-2/3 space-x-6 justify-center2 items-center'>
            <div className='flex flex-col space-y-1'>
              <div className='text-[18px] font-semibold'>
              Glitch has your back
              </div>
              <span className='text-[14px] leading-relaxed'>
              A lively community can help if you get stuck or need advice. Just post a question! Glitch’s Help Center can also get you back on track, with answers to common questions just a search away.
              </span>
            </div>
            <div className='w-72'>
              <Image src={gem} alt="" />
            </div>
          </div>
         
          <div className='flex flex-row mx-auto w-2/3 space-x-6 justify-center2 items-center'>
            <div className='flex flex-col space-y-1'>
              <div className='text-[18px] font-semibold'>
              Share code and solutions for anyone
              </div>
              <span className='text-[14px] leading-relaxed'>
              If you’re working on a common problem, Glitch is a great way to share your solutions. Whether you’re integrating with an API, demonstrating a new technology, or just showing off a new way to build the web, using Glitch lets you give other coders a fast, fun onramp.
              </span>
            </div>
            <div className='w-72'>
              <Image src={book} alt="" className='' />
            </div>
          </div> */}

        <section className="flex flex-row flex-wrap mx-auto w-3/4 justify-center2 items-center3">
          <div className="relative transition-all duration-150 flex w-full px-2 py-4 md:w-1/2 lg:w-1/3">
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
                    <Image
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

          <div className="relative transition-all duration-150 flex w-full px-2 py-4 md:w-1/2 lg:w-1/3">
            <div className="relative flex flex-col border-2 border-gray-600 items-stretch min-h-full pb-4 mb-6 transition-all duration-150 bg-white rounded-lg shadow-lg hover:shadow-2xl">
              <div className="md:flex-shrink-0">
                <Image
                  src={cyberpunk}
                  className="object-fill w-full rounded-lg rounded-b-none"
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
              <section className="absolute bottom-4  px-4 py-2 w-full ">
                <div className="flex w-full items-center justify-between space-x-2 ">
                  <div className="flex w-2/3 items-center justify-start ">
                    <Image
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

          <div className="relative transition-all duration-150 flex w-full px-2 py-4 md:w-1/2 lg:w-1/3">
            <div className="relative flex flex-col border-2 border-gray-600 items-stretch min-h-full pb-4 mb-6 transition-all duration-150 bg-white rounded-lg shadow-lg hover:shadow-2xl">
              <div className="md:flex-shrink-0">
                <Image
                  src={fortnite}
                  className="object-fill w-full rounded-lg rounded-b-none"
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
                    <Image
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
        </section>
      </div>
    </>
  );
}
