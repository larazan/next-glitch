import React from "react";
import Link from "next/link";
import Image from "next/image";

import pencil from '@/img/home-pencil.svg'
import gem from '@/img/home-gem.svg'
import headphone from '@/img/home-headphones.svg'
import book from '@/img/home-book-green.svg'
import app from '@/img/home-app-yellow.svg'

export default function HomeTrending() {
    return (
      <>
      <div className='h-max flex py-20 flex-col space-y-10 px-10 justify-center2 items-center2 bg-yellow-50'>
          <div className='flex flex-row mx-auto w-2/3 space-x-6 justify-center2 items-center'> 
            <span className='text-3xl font-extrabold'>Trending</span>
          </div>
          <div className='flex flex-row mx-auto w-2/3 space-x-6 justify-center2 items-center'>
            <div className='w-72'>
              <Image src={pencil} alt=""  />
            </div>
            <div className='flex flex-col space-y-1'>
              <div className='text-[18px] font-semibold'>
                Build that thing you’ve been imagining
              </div>
              <span className='text-[14px] leading-relaxed'>
                Millions of people use Glitch to express themselves, try new things, and help others learn. We’re fun and easy, so you spend less time setting up and more time exploring, experimenting, making mistakes and growing.
              </span>
            </div>
          </div>
          <div className='flex flex-row mx-auto w-2/3 space-x-6 justify-center2 items-center'>
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
            <div className='w-72'>
              <Image src={app} alt=""  />
            </div>
            <div className='flex flex-col space-y-1'>
              <div className='text-[18px] font-semibold'>
              Show off your work with the web—effortlessly
              </div>
              <span className='text-[14px] leading-relaxed'>
              Your new site is live from the moment you start typing. No chores, no upload or deployment cycles. Just build and vibe, Glitch takes care of the rest.
              </span>
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
          </div>
          <div className='flex flex-row mx-auto w-2/3 space-x-6 justify-center2 items-center'>
            <div className='w-72'>
              <Image src={headphone} alt=""  />
            </div>
            <div className='flex flex-col space-y-1'>
              <div className='text-[18px] font-semibold'>
              Always in good company
              </div>
              <span className='text-[14px] leading-relaxed'>
              In addition to code for your next project, you’ll also find endless inspiration on Glitch. Our community is building everything from artistic experiments to games to the cutting edge of the metaverse. Dive in and feed your imagination with millions of projects!
              </span>
            </div>
          </div>
        </div>
      </>
    )
}