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
      <div className="relative2 max-w-5xl2 mx-auto mt-0 pt-20 pb-12 sm:pt-14 sm:pb-14 lg:pt-12 bg-pink-200">
        <div className=" text-slate-900 font-bold text-4xl px-11 sm:text-5xl lg:text-6xl tracking-tight dark:text-white ">
          <div className="flex flex-wrap space-y-3 justify-around items-center leading-none font-mabry">
            <h1 className="font-mabryblack heading-box-text1 text-3xl sm:text-3xl md:text-3xl lg:text-5xl whitespace-nowrap">
              <span>Custom Website Design!</span>
            </h1>
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
              <span>SEO Friendly</span>
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
          <Image src={leon} alt="" className="rounded-lg" />
          
        </div>
      </div>
    </>
  );
}
