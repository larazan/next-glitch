import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import pravatar from "@/img/300.jpg";

export default function ReviewLine() {
  SwiperCore.use([Autoplay]);
  return (
    <>
      <div id="template_horizontal-image-slider">
        <div className="flex flex-col ">
          <div>
            <span className="font-mabrybold text-lg">Ratings</span>
          </div>
          <div className="flex flex-col">
            <div className="flex w-full space-x-3  items-center">
              <div className="flex mt-2 h-14 w-14 items-center justify-center border shadow-menu border-gray-800 bg-green-300 rounded-full px-2 py-2">
                <span className="text-2xl font-mabrybold">8.7</span>
              </div>
              <div className="flex w-2/3 flex-col leading-tight">
                <div className="text-sm font-mabrybold">User Score</div>
                <div className="text-sm font-mabry leading-tight">
                  Generally favorable reviews based on 201 Ratings
                </div>
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-center2 mt-2">
              <div className="flex-initial flex flex-col justify-center items-center">
                <svg
                  className="w-12 text-gray-600 transition-all duration-300 ease-out transform fill-current stroke-current hover:text-blue-600 hover:scale-110"
                  viewBox="0 0 72 72"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Very Disappointed</title>
                  <g id="line">
                    <circle
                      cx="36"
                      cy="36"
                      r="23"
                      fill="none"
                      stroke-miterlimit="10"
                      stroke-width="2"
                    />
                    <path
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-miterlimit="10"
                      stroke-width="2"
                      d="M28,46c1.5805-2.5575,4.9043-4.1349,8.4211-4.0038C39.6499,42.1166,42.5622,43.6595,44,46"
                    />
                    <path d="M30,32.9252c0,1.6567-1.3448,3-3,3c-1.6553,0-3-1.3433-3-3c0-1.6553,1.3447-3,3-3C28.6552,29.9252,30,31.27,30,32.9252" />
                    <path d="M48,32.9252c0,1.6567-1.3447,3-3,3s-3-1.3433-3-3c0-1.6553,1.3447-3,3-3S48,31.27,48,32.9252" />
                    <line
                      x1="23"
                      x2="30"
                      y1="24"
                      y2="28"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-miterlimit="10"
                      stroke-width="2"
                    />
                    <line
                      x1="49"
                      x2="42"
                      y1="24"
                      y2="28"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-miterlimit="10"
                      stroke-width="2"
                    />
                  </g>
                </svg>
                <span className="text-xs font-mabry">3</span>
              </div>
              <div className="flex-initial flex flex-col justify-center items-center">
                <svg
                  className="w-12 text-gray-600 transition-all duration-300 ease-out transform fill-current stroke-current hover:text-blue-600 hover:scale-110"
                  viewBox="0 0 72 72"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Disappointed</title>
                  <g id="line">
                    <circle
                      cx="36"
                      cy="36"
                      r="23"
                      fill="none"
                      stroke-miterlimit="10"
                      stroke-width="2"
                    />
                    <path d="M30,31c0,1.6568-1.3448,3-3,3c-1.6553,0-3-1.3433-3-3c0-1.6552,1.3447-3,3-3C28.6552,28,30,29.3448,30,31" />
                    <path d="M48,31c0,1.6568-1.3447,3-3,3s-3-1.3433-3-3c0-1.6552,1.3447-3,3-3S48,29.3448,48,31" />
                    <path
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-miterlimit="10"
                      stroke-width="2"
                      d="M28,46c1.5805-2.5575,4.9043-4.1349,8.4211-4.0038C39.6499,42.1166,42.5622,43.6595,44,46"
                    />
                  </g>
                </svg>
                <span className="text-xs font-mabry">32</span>
              </div>
              <div className="flex-initial flex flex-col justify-center items-center">
                <svg
                  className="w-12 text-gray-600 transition-all duration-300 ease-out transform fill-current stroke-current hover:text-blue-600 hover:scale-110"
                  viewBox="0 0 72 72"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Neutral</title>
                  <g id="line">
                    <circle
                      cx="36"
                      cy="36"
                      r="23"
                      fill="none"
                      stroke-miterlimit="10"
                      stroke-width="2"
                    />
                    <line
                      x1="27"
                      x2="45"
                      y1="43"
                      y2="43"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-miterlimit="10"
                      stroke-width="2"
                    />
                    <path d="M30,31c0,1.6568-1.3448,3-3,3c-1.6553,0-3-1.3433-3-3c0-1.6552,1.3447-3,3-3C28.6552,28,30,29.3448,30,31" />
                    <path d="M48,31c0,1.6568-1.3447,3-3,3s-3-1.3433-3-3c0-1.6552,1.3447-3,3-3S48,29.3448,48,31" />
                  </g>
                </svg>
                <span className="text-xs font-mabry">12</span>
              </div>
              <div className="flex-initial flex flex-col justify-center items-center">
                <svg
                  className="w-12 text-gray-600 transition-all duration-300 ease-out transform fill-current stroke-current hover:text-blue-600 hover:scale-110"
                  viewBox="0 0 72 72"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Happy</title>
                  <g id="line">
                    <circle
                      cx="36"
                      cy="36"
                      r="23"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    />
                    <path
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M45.8147,45.2268a15.4294,15.4294,0,0,1-19.6294,0"
                    />
                    <path
                      fill="none"
                      stroke-linecap="round"
                      stroke-miterlimit="10"
                      stroke-width="2"
                      d="M31.6941,33.4036a4.7262,4.7262,0,0,0-8.6382,0"
                    />
                    <path
                      fill="none"
                      stroke-linecap="round"
                      stroke-miterlimit="10"
                      stroke-width="2"
                      d="M48.9441,33.4036a4.7262,4.7262,0,0,0-8.6382,0"
                    />
                  </g>
                </svg>
                <span className="text-xs font-mabry">45</span>
              </div>
              <div className="flex-initial flex flex-col justify-center items-center">
                <svg
                  className="w-12 text-gray-600 transition-all duration-300 ease-out transform fill-current stroke-current hover:text-blue-600 hover:scale-110"
                  viewBox="0 0 72 72"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Very Happy</title>
                  <g id="line">
                    <circle
                      cx="36"
                      cy="36"
                      r="23"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    />
                    <path
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M50.595,41.64a11.5554,11.5554,0,0,1-.87,4.49c-12.49,3.03-25.43.34-27.49-.13a11.4347,11.4347,0,0,1-.83-4.36h.11s14.8,3.59,28.89.07Z"
                    />
                    <path
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M49.7251,46.13c-1.79,4.27-6.35,7.23-13.69,7.23-7.41,0-12.03-3.03-13.8-7.36C24.2951,46.47,37.235,49.16,49.7251,46.13Z"
                    />
                    <path
                      fill="none"
                      stroke-linecap="round"
                      stroke-miterlimit="10"
                      stroke-width="2"
                      d="M31.6941,32.4036a4.7262,4.7262,0,0,0-8.6382,0"
                    />
                    <path
                      fill="none"
                      stroke-linecap="round"
                      stroke-miterlimit="10"
                      stroke-width="2"
                      d="M48.9441,32.4036a4.7262,4.7262,0,0,0-8.6382,0"
                    />
                  </g>
                </svg>
                <span className="text-xs font-mabry">102</span>
              </div>
            </div>
          </div>
          <div className="flex justify-end mt-4">
            <button className="flex space-x-1 items-center font-mabry uppercase text-xs ">
              <span>See all reviews</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className=" pt-[14px] mb-[1em] h-full ">
          <Swiper
            modules={[Pagination, A11y]}
            slidesPerView={2}
            centeredSlides={false}
            spaceBetween={150}
            loop={true}
            autoplay={{
              delay: 4000,
            }}
            pagination={{ clickable: true }}
          >
            <SwiperSlide>
              <div className="bg-white w-[350px] rounded-md px-6 py-3 pb-6 shadow-lg hover:shadow-2xl transition duration-500">
                <div className="mt-2">
                  <div className="flex justify-between items-center pb-4 border-b">
                    <div className=" flex items-center space-x-4">
                      <div className="">
                        <Image
                          className="w-10 h-10 rounded-full"
                          src={pravatar}
                          alt=""
                        />
                      </div>
                      <div className="text-sm font-semibold font-mabrybold">
                        John Lucas •{" "}
                        <span className="font-mabry"> 5 minutes ago</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex mt-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-yellow-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-yellow-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-yellow-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-yellow-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <p className="mt-3 text-[17px] text-gray-600 font-mabry leading-tight">
                    But I must explain to you how all this mistaken idea of
                    denouncing pleasure and praising pain was born and I will
                    give you a complete account of the system, and expound the
                    actual teachings of the great explorer of the truth, the
                    master-builder of human happines.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-white w-[350px] rounded-md px-6 py-3 pb-6 shadow-lg hover:shadow-2xl transition duration-500">
                <div className="mt-2">
                  <div className="flex justify-between items-center pb-4 border-b">
                    <div className=" flex items-center space-x-4">
                      <div className="">
                        <Image
                          className="w-10 h-10 rounded-full"
                          src={pravatar}
                          alt=""
                        />
                      </div>
                      <div className="text-sm font-semibold font-mabrybold">
                        John Lucas •{" "}
                        <span className="font-mabry"> 5 minutes ago</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex mt-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-yellow-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-yellow-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-yellow-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-yellow-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <p className="mt-3 text-[17px] text-gray-600 font-mabry leading-tight">
                    But I must explain to you how all this mistaken idea of
                    denouncing pleasure and praising pain was born and I will
                    give you a complete account of the system, and expound the
                    actual teachings of the great explorer of the truth, the
                    master-builder of human happines.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-white w-[350px] rounded-md px-6 py-3 pb-6 shadow-lg hover:shadow-2xl transition duration-500">
                <div className="mt-2">
                  <div className="flex justify-between items-center pb-4 border-b">
                    <div className=" flex items-center space-x-4">
                      <div className="">
                        <Image
                          className="w-10 h-10 rounded-full"
                          src={pravatar}
                          alt=""
                        />
                      </div>
                      <div className="text-sm font-semibold font-mabrybold">
                        John Lucas •{" "}
                        <span className="font-mabry"> 5 minutes ago</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex mt-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-yellow-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-yellow-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-yellow-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-yellow-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <p className="mt-3 text-[17px] text-gray-600 font-mabry leading-tight">
                    But I must explain to you how all this mistaken idea of
                    denouncing pleasure and praising pain was born and I will
                    give you a complete account of the system, and expound the
                    actual teachings of the great explorer of the truth, the
                    master-builder of human happines.
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}
