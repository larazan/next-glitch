import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import leon from "@/img/leon.png";
import minecraft from "@/img/minecraft.jpg";
import cyberpunk from "@/img/cyberpunk.jpg";
import deadspace from "@/img/dead_space.jpg";
import godofwar from "@/img/gow.jpg";

export default function Hero() {
  SwiperCore.use([Autoplay]);
  return (
    <>
      <div className="relative2 max-w-5xl2 mx-auto mt-0 pt-20 pb-12 sm:pt-14 sm:pb-14 lg:pt-12 bg-[#f8f4f2]">
        <section className="flex relative px-6 flex-col md:flex-row justify-between items-center my-2 md:my-4 w-full mx-auto max-w-7xl">
          <div className="">
            <h1 className="font-mabrybold text-3xl md:text-5xl text-center md:text-left max-w-[700px] px-5 leading-[2.5rem] md:leading-tigth">
              <span className="leading-3 text-gray-900">Desktop, Console and Mobile Games Platforms</span>
              <br className="hidden md:block" />
              <span className="leading-3"> </span>
            </h1>
            <p className="font-mabry text-base text-gray-700 max-w-[450px] mt-4 px-5 text-center mx-auto lg:mx-0 md:text-left leading-[1.5rem]">
              24x7, on-demand care on your phone, be it in the middle of a
              hectic work day, or when you can't sleep at night. Our experts are
              available to you at the click of a button!
            </p>
            <div className="mt-8 mb-24 md:mb-0 px-5">
              <Link
                href="https://nowandme.sng.link/Dqsa0/4x5h?pcn=expert_landing&amp;pscn=hero-btn&amp;_smtype=3"
                target="_blank"
              >
                <button className="font-mabrybold shadow-menu bg-orange-500 text-white2  text-gray-900 font-medium rounded-xl focus:ring-3 focus:ring-x-orange-100 relative overflow-hidden px-5 bg-x-orange-500  focus:outline-none focus:ring-3 focus:ring-x-orange-100 dark:focus:ring-0 disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed w-full md:w-auto py-3 transform transition duration-200 hover:scale-[1.04] ">
                  Download the App
                </button>
              </Link>
            </div>
          </div>
          <div>
            <div className="w-full">
              <Image
                src={leon}
                alt=""
                className="w-[600px] h-[400px] rounded-lg object-cover"
              />
            </div>
          </div>
        </section>
        <div className="pt-4 text-slate-900 font-bold text-4xl px-11 sm:text-5xl lg:text-6xl tracking-tight dark:text-white ">
          <div className="flex flex-wrap space-y-3 justify-around items-center leading-none font-mabry">
            <h2 className="font-mabryblack heading-box-text2 text-3xl sm:text-3xl md:text-3xl lg:text-5xl whitespace-nowrap">
              <span>Mobile games</span>
            </h2>
            <h2 className="font-mabryblack heading-box-text3 text-3xl sm:text-3xl md:text-3xl lg:text-5xl sm:text-right whitespace-nowrap">
              <span>Pc games</span>
            </h2>
            <h2 className="font-mabryblack heading-box-text1 text-3xl sm:text-3xl md:text-3xl lg:text-5xl whitespace-nowrap">
              <span>Xbox</span>
            </h2>
            <h2 className="font-mabryblack heading-box-text2 text-3xl sm:text-3xl md:text-3xl lg:text-5xl whitespace-nowrap">
              <span>Nintendo</span>
            </h2>
            <h2 className="font-mabryblack heading-box-text3 text-3xl sm:text-3xl md:text-3xl lg:text-5xl sm:text-right whitespace-nowrap">
              <span>News</span>
            </h2>
            <h2 className="font-mabryblack heading-box-text1 text-3xl sm:text-3xl md:text-3xl lg:text-5xl sm:text-right whitespace-nowrap">
              <span>Play station</span>
            </h2>
            <h2 className="font-mabryblack heading-box-text2 text-3xl sm:text-3xl md:text-3xl lg:text-5xl sm:text-right whitespace-nowrap">
              <span>
                Esport<small>s</small>
              </span>
            </h2>
            <h2 className="font-mabryblack heading-box-text3 text-3xl sm:text-3xl md:text-3xl lg:text-5xl sm:text-right whitespace-nowrap">
              <span>Indie Games</span>
            </h2>

            {/* <span className="text-red-500 font-mabrybold">Glitch is the friendly place where everyone builds the web.</span>{' '}
         <span className="text-blue-400">Start a new blog,</span> {' '}
         <span className="text-green-300">play with React,</span> {' '}
         <span className="text-indigo-300 font-mabryitalic">or build new worlds with WebXR.</span> <span className="font-mabrybold">Let’s go!</span> */}
          </div>
        </div>

        {/* <div id="template_horizontal-image-slider">
                <div className="default-banner-slider relative pt-[16px] mb-[1em] h-full">
                  <Swiper
                    modules={[Pagination, A11y]}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{
                      delay: 4000,
                    }}
                    pagination={{ clickable: true }}
                  >
                    <SwiperSlide>
                      <Image src={leon} />
                    </SwiperSlide>
                    <SwiperSlide>
                      <Image src={godofwar} />
                    </SwiperSlide>
                    <SwiperSlide>
                      <Image src={cyberpunk} />
                    </SwiperSlide>
                    <SwiperSlide>
                      <Image src={deadspace} />
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div> */}

        <div className="mt-6 sm:mt-10 flex justify-center space-x-6 text-sm">
          {/* <Link href="/docs/installation">
            <span className="bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white font-semibold h-12 px-6 rounded-lg w-full flex items-center justify-center sm:w-auto dark:bg-sky-500 dark:highlight-white/20 dark:hover:bg-sky-400">
              Get started
            </span>
          </Link> */}
        </div>
      </div>
    </>
  );
}
