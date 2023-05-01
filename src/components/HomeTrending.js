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
      <div className='h-max flex py-20 flex-col space-y-10 px-10 justify-center2 items-center2 bg-yellow-50'>
          <div className='flex flex-row mx-auto w-2/3 space-x-5 justify-center2 items-center'> 
            <span className='text-3xl font-mabrybold'>Trending</span>
          </div>
          <div className='flex flex-row mx-auto w-2/3 space-x-5 justify-center2 items-center2'>
            <div className=''>
              <Image src={minecraft} alt="" className="object-cover h-36 w-96 rounded" />
            </div>
            <div className='flex flex-col space-y-0.5 leading-tight'>
              <div className="flex space-x-2">
                <span className="font-mabrybold text-xs text-slate-900">NEWS</span>
                <span className="font-mabrybold text-xs text-gray-500">April 16, 2023</span>
              </div>
              <div className='text-[24px] font-mabrybold'>
                Build that thing you’ve been imagining
              </div>
              <span className='text-[14px] leading-relaxed font-mabry'>
                Millions of people use Glitch to express themselves, try new things, and help others learn. We’re fun and easy, so you spend less time setting up and more time exploring, experimenting, making mistakes and growing.
              </span>
            </div>
          </div>
          <div className='flex flex-row mx-auto w-2/3 space-x-5 justify-center2 items-center2'>
            <div className=''>
              <Image src={minecraft} alt="" className="object-cover h-36 w-96 rounded" />
            </div>
            <div className='flex flex-col space-y-0.5 leading-tight'>
              <div className="flex space-x-2">
                <span className="font-mabrybold text-xs text-slate-900">NEWS</span>
                <span className="font-mabrybold text-xs text-gray-500">April 16, 2023</span>
              </div>
              <div className='text-[24px] font-mabrybold'>
                Build that thing you’ve been imagining
              </div>
              <span className='text-[14px] leading-relaxed font-mabry'>
                Millions of people use Glitch to express themselves, try new things, and help others learn. We’re fun and easy, so you spend less time setting up and more time exploring, experimenting, making mistakes and growing.
              </span>
            </div>
          </div>
          <div className='flex flex-row mx-auto w-2/3 space-x-5 justify-center2 items-center2'>
            <div className=''>
              <Image src={minecraft} alt="" className="object-cover h-36 w-96 rounded" />
            </div>
            <div className='flex flex-col space-y-0.5 leading-tight'>
              <div className="flex space-x-2">
                <span className="font-mabrybold text-xs text-slate-900">NEWS</span>
                <span className="font-mabrybold text-xs text-gray-500">April 16, 2023</span>
              </div>
              <div className='text-[24px] font-mabrybold'>
                Build that thing you’ve been imagining
              </div>
              <span className='text-[14px] leading-relaxed font-mabry'>
                Millions of people use Glitch to express themselves, try new things, and help others learn. We’re fun and easy, so you spend less time setting up and more time exploring, experimenting, making mistakes and growing.
              </span>
            </div>
          </div>
          <div className='flex flex-row mx-auto w-2/3 space-x-5 justify-center2 items-center2'>
            <div className=''>
              <Image src={minecraft} alt="" className="object-cover h-36 w-96 rounded" />
            </div>
            <div className='flex flex-col space-y-0.5 leading-tight'>
              <div className="flex space-x-2 ">
                <span className="font-mabrybold text-xs text-slate-900">NEWS</span>
                <span className="font-mabrybold text-xs text-gray-500">April 16, 2023</span>
              </div>
              <div className='text-[24px] font-mabrybold'>
                Build that thing you’ve been imagining
              </div>
              <span className='text-[14px] leading-relaxed font-mabry'>
                Millions of people use Glitch to express themselves, try new things, and help others learn. We’re fun and easy, so you spend less time setting up and more time exploring, experimenting, making mistakes and growing.
              </span>
            </div>
          </div>

          <div className="flex  mx-auto w-2/3 space-x-5">
          <div className="flex w-full pt-5">
                <Link href={""} className="relative w-full inline-block text-lg group">
                  <span className="relative flex z-10  x-3 py-3 justify-center overflow-hidden leading-tight text-sm font-mabrybold text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-800 rounded ">
                    <span className="absolute inset-0 w-full h-full px-5 py-3 rounded bg-yellow-200 group-hover:bg-yellow-300"></span>
                    {/* <span className="absolute left-0 w-22 h-22 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span> */}
                    <span className="relative">See All</span>
                  </span>
                  <span
                    className="absolute bottom-0 right-0 w-full h-11 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded group-hover:mb-00 group-hover:mr-00"
                    data-rounded="rounded-lg"
                  ></span>
                </Link>
              </div>
          </div>
          
        </div>
      </>
    )
}