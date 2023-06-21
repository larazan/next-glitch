import React from "react";
import Link from "next/link";
import Image from "next/image";

import pravatar from "@/img/300.jpg";

export default function Comment() {
  return (
    <>
      <div className="mb-12 pb-2">
        <div className="flex-col pt-4">
          <div>
            <span className="font-mabrybold text-lg  capitalize">Comments</span>
          </div>
          <div className="py-0">
            <div className="antialiased md:p-3 mx-auto max-w-screen-sm bg-transparent">
              <div className="space-y-2 md:space-y-4 md:py-4">
                <div className="flex">
                  <div className="flex-shrink-0 mr-0">
                    <Image
                      className="mt-2 border border-gray-600 rounded-full w-8 h-8 sm:w-10 sm:h-10"
                      src={pravatar}
                      alt=""
                    />
                  </div>
                  <div className="flex-1 px-4 py-2 sm:px-4 sm:py-2 leading-relaxed space-y-1">
                    <strong className="font-mabrybold">Sarah</strong>{" "}
                    <p className="text-[15px] leading-tight">
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
                    </p>
                    <div className="flex space-x-2">
                      <div className="flex space-x-1 cursor-pointer">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.3}
                          stroke="currentColor"
                          className="w-4 h-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                          />
                        </svg>

                        <span className="text-xs text-gray-400">1 like</span>
                      </div>
                      <span className="text-xs text-gray-400">
                        April 16, 2023
                      </span>
                      <span className="text-xs font-mabrybold cursor-pointer text-gray-500 underline">
                        Reply
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0 mr-0">
                    <Image
                      className="mt-2 border border-gray-600 rounded-full w-8 h-8 sm:w-10 sm:h-10"
                      src={pravatar}
                      alt=""
                    />
                  </div>
                  <div className="flex-1 px-4 py-2 sm:px-4 sm:py-2 leading-relaxed space-y-1">
                    <strong className="font-mabrybold">Sarah</strong>{" "}
                    <p className="text-[15px] leading-tight">
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
                    </p>
                    <div className="flex space-x-2">
                      <div className="flex space-x-1 cursor-pointer">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.3}
                          stroke="currentColor"
                          className="w-4 h-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                          />
                        </svg>

                        <span className="text-xs text-gray-400">1 like</span>
                      </div>
                      <span className="text-xs text-gray-400">
                        April 16, 2023
                      </span>
                      <span className="text-xs font-mabrybold cursor-pointer text-gray-500 underline">
                        Reply
                      </span>
                    </div>
                    <div className="py-3">
                      <div className="">
                      <div className=" flex flex-col items-center2 w-full shadow-menu border-2 border-gray-800 rounded focus-within:shadow-lg bg-white overflow-hidden">
                        <div className="">
                            <textarea
                            className="h-full2 w-full px-2 py-2 outline-none h-10 text-sm text-gray-700 pr-2"
                            placeholder="Leave a comment"
                            ></textarea>
                        </div>
                        <div className="flex px-2 py-1 items-center justify-between border-t border-gray-800">
                            <button className="bg-gray-200 rounded p-1.5 hover:bg-gray-300 text-gray-500 hover:text-gray-600">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                              </svg>
                            </button>
                            <div className="flex w-full py-1 justify-end">
                              <Link href={""} className="relative inline-block text-lg group">
                                <span className="relative flex z-10 button px-3 py-2 justify-center overflow-hidden leading-tight text-sm font-mabrybold text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-800 rounded ">
                                  <span className="absolute inset-0 w-full h-full px-3 py-3 rounded bg-pink-200 group-hover:bg-pink-300"></span>
                                  <span className="relative">Submit</span>
                                </span>
                                
                              </Link>
                            </div>
                        </div>
                      </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0 mr-0">
                    <Image
                      className="mt-2 border border-gray-600 rounded-full w-8 h-8 sm:w-10 sm:h-10"
                      src={pravatar}
                      alt=""
                    />
                  </div>
                  <div className="flex-1 px-4 py-2 sm:px-4 sm:py-2 leading-relaxed space-y-1">
                    <strong className="font-mabrybold">Sarah</strong>{" "}
                    <p className="text-[15px] leading-tight">
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
                    </p>
                    <div className="flex space-x-2">
                      <div className="flex space-x-1 cursor-pointer">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.3}
                          stroke="currentColor"
                          className="w-4 h-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                          />
                        </svg>

                        <span className="text-xs text-gray-400">1 like</span>
                      </div>
                      <span className="text-xs text-gray-400">
                        April 16, 2023
                      </span>
                      <span className="text-xs font-mabrybold cursor-pointer text-gray-500 underline">
                        Reply
                      </span>
                    </div>
                    <div className="space-y-4">
                      <div className="flex">
                        <div className="flex-shrink-0 mr-0">
                          <Image
                            className="mt-3 border border-gray-600 rounded-full w-6 h-6 sm:w-8 sm:h-8"
                            src={pravatar}
                            alt=""
                          />
                        </div>
                        <div className="flex-1 px-4 py-2 sm:px-4 sm:py-2 leading-relaxed space-y-1">
                          <strong className="font-mabrybold">Sarah</strong>{" "}
                          <p className="text-[15px] leading-tight">
                            Lorem ipsum dolor sit amet, consetetur sadipscing
                            elitr.
                          </p>
                          <div className="flex space-x-2">
                            <div className="flex space-x-1 cursor-pointer">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.3}
                                stroke="currentColor"
                                className="w-4 h-4"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                                />
                              </svg>

                              <span className="text-xs text-gray-400">
                                1 like
                              </span>
                            </div>
                            <span className="text-xs text-gray-400">
                              April 16, 2023
                            </span>
                            <span className="text-xs font-mabrybold cursor-pointer text-gray-500 underline">
                              Reply
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
