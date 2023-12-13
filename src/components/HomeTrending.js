import React from "react";
import Link from "next/link";
import Image from "next/image";

import pencil from '@/img/home-pencil.svg'
import headphone from '@/img/home-headphones.svg'
import app from '@/img/home-app-yellow.svg'

import minecraft from '@/img/mine.jpg'

export default function HomeTrending() {
    return (
      <>
      <div className=' h-max flex  flex-col space-y-4 md:px-10 py-8 md:py-14 justify-center2 items-center2 bg-white border-t'>
          <div className='flex flex-row mx-auto w-11/12 md:w-3/4 space-x-6 justify-center2 items-center'> 
            <span className='text-2xl md:text-3xl font-mabryblack text-gray-900'>Trending</span>
          </div>
          <div className='flex flex-row mx-auto w-11/12 md:w-3/4 space-x-3 md:space-x-6 justify-center2 items-center2'>
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
          <div className='flex flex-row mx-auto w-11/12 md:w-3/4 space-x-3 md:space-x-6 justify-center2 items-center2'>
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
          <div className='flex flex-row mx-auto w-11/12 md:w-3/4 space-x-3 md:space-x-6 justify-center2 items-center2'>
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
          <div className='flex flex-row mx-auto w-11/12 md:w-3/4 space-x-3 md:space-x-6 justify-center2 items-center2'>
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
          <div className='flex flex-row mx-auto w-11/12 md:w-3/4 space-x-3 md:space-x-6 justify-center2 items-center2'>
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

          <div className="flex  mx-auto w-11/12 md:w-3/4 space-x-6">
          <div className="flex w-full pt-5">
                <Link href={""} className="relative w-full inline-block  group text-center">
                  <span className="relative flex button w-full x-3 py-3 justify-center overflow-hidden leading-tight text-sm font-mabrybold text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-800 rounded ">
                    <span className="absolute inset-0 w-full h-full px-5 py-3 rounded bg-yellow-200 group-hover:bg-yellow-300"></span>
                    <span className="relative text-lg font-mabryblack">See All</span>
                  </span>
                 
                </Link>
              </div>
          </div>
          
        </div>
      </>
    )
}