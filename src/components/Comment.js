import React from "react";
import Link from "next/link";
import Image from "next/image";

import pravatar from "@/img/300.jpg";

export default function Comment() {
  return (
    <>
      <div className="mb-12 pb-2">
        <div className="flex-col pt-4">
          <div className="flex border-b pb-2 md:pb-3 border-gray-300">
            <span className="font-mabrybold text-lg uppercase tracking-tight">
              Comments
            </span>
          </div>

          <div className="py-0">
            <div className="antialiased md:p-3 mx-auto max-w-screen-sm bg-transparent">
              <div className="py-3">
                <div className="flex w-full">
                  <div className=" flex flex-col items-center2 w-full shadow-menu border-2 border-gray-800 rounded focus-within:shadow-lg bg-white overflow-hidden">
                    <div className="">
                      <textarea
                        className="h-full2 w-full px-2 py-2 outline-none h-12 text-sm bg-white text-gray-700 pr-2"
                        placeholder="What do you think"
                      ></textarea>
                    </div>
                    <div className="flex px-2 py-1 items-center justify-between border-t border-gray-800">
                      <button className="hover:bg-gray-200 rounded p-1 text-gray-500 hover:text-gray-600">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6 "
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                          />
                        </svg>
                      </button>
                      <div className="flex w-full py-1 justify-end">
                        <Link
                          href={""}
                          className="relative inline-block text-lg group"
                        >
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
              <div className="space-y-2 md:space-y-4 md:py-4">
                {/*  */}
                <div className="flex">
                  <div className="flex-shrink-0 mr-0">
                    <Image
                      className="mt-2 border border-gray-600 rounded-full w-8 h-8 md:w-9 md:h-9"
                      src={pravatar}
                      alt=""
                    />
                  </div>
                  <div className="flex-1 px-4 py-0 md:px-4 md:py-0 leading-relaxed2 ">
                    <div className="flex w-full justify-between">
                      <strong className="font-mabrybold text-[16px]">
                        Sarah
                      </strong>{" "}
                      <div className="flex p-0.5 rounded-full hover:bg-gray-200 cursor-pointer">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          dataSlot="icon"
                          className="w-5 h-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                          />
                        </svg>
                      </div>
                    </div>
                    <p className="text-[15px] leading-tight">
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
                    </p>
                    <div className="flex space-x-2 items-center">
                      <div className="flex space-x-1 items-center cursor-pointer px-1 py-0.5 hover:bg-gray-200 rounded border border-transparent">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-4 h-4 text-gray-500 "
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
                          />
                        </svg>

                        <span className="text-xs md:text-sm text-gray-400">
                          1
                        </span>
                      </div>
                      <span className="text-xs md:text-sm text-gray-400 px-1 py-0.5">
                        April 16, 2023
                      </span>
                      <span className="px-1 py-0.5 text-xs md:text-sm font-mabry rounded hover:bg-gray-200 cursor-pointer text-gray-500 border border-transparent">
                        Reply
                      </span>
                    </div>
                  </div>
                </div>
                {/*  */}
                <div className="flex">
                  <div className="flex-shrink-0 mr-0">
                    <Image
                      className="mt-2 border border-gray-600 rounded-full w-8 h-8 md:w-9 md:h-9"
                      src={pravatar}
                      alt=""
                    />
                  </div>
                  <div className="flex-1 px-4 py-0 md:px-4 md:py-0 leading-relaxed2 ">
                    <div className="flex w-full justify-between">
                      <strong className="font-mabrybold text-[16px]">
                        Sarah
                      </strong>{" "}
                      <div className="flex p-0.5 rounded-full hover:bg-gray-200 cursor-pointer">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          dataSlot="icon"
                          className="w-5 h-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                          />
                        </svg>
                      </div>
                    </div>
                    <p className="text-[15px] leading-tight">
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
                    </p>
                    <div className="flex space-x-2 items-center">
                      <div className="flex space-x-1 items-center cursor-pointer px-1 py-0.5 hover:bg-gray-200 rounded border border-transparent">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-4 h-4 text-gray-500 "
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
                          />
                        </svg>

                        <span className="text-xs md:text-sm text-gray-400">
                          1
                        </span>
                      </div>
                      <span className="text-xs md:text-sm text-gray-400 px-1 py-0.5">
                        April 16, 2023
                      </span>
                      <span className="px-1 py-0.5 text-xs md:text-sm font-mabry rounded hover:bg-gray-200 cursor-pointer text-gray-500 border border-transparent">
                        Reply
                      </span>
                    </div>
                    <div className="py-3">
                      <div className="flex w-full md:w-96">
                        <div className=" flex flex-col items-center2 w-full shadow-menu border-2 border-gray-800 rounded focus-within:shadow-lg bg-white overflow-hidden">
                          <div className="">
                            <textarea
                              className="h-full2 w-full px-2 py-2 outline-none h-10 text-sm bg-white text-gray-700 pr-2"
                              placeholder="Leave a comment"
                            ></textarea>
                          </div>
                          <div className="flex px-2 py-1 items-center justify-between border-t border-gray-800">
                            <button className="hover:bg-gray-200 rounded p-1 text-gray-500 hover:text-gray-600">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6 "
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                                />
                              </svg>
                            </button>
                            <div className="flex w-full py-1 justify-end">
                              <Link
                                href={""}
                                className="relative inline-block text-lg group"
                              >
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
                {/*  */}
                <div className="flex">
                  <div className="flex-shrink-0 mr-0">
                    <Image
                      className="mt-2 border border-gray-600 rounded-full w-8 h-8 md:w-9 md:h-9"
                      src={pravatar}
                      alt=""
                    />
                  </div>
                  <div className="flex-1 px-4 py-0 md:px-4 md:py-0 leading-relaxed2 space-y-1">
                    <div className="flex w-full justify-between">
                      <strong className="font-mabrybold text-[16px]">
                        Sarah
                      </strong>{" "}
                      <div className="flex p-0.5 rounded-full hover:bg-gray-200 cursor-pointer">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          dataSlot="icon"
                          className="w-5 h-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                          />
                        </svg>
                      </div>
                    </div>
                    <p className="text-[15px] leading-tight">
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
                    </p>
                    <div className="flex space-x-2 items-center">
                      <div className="flex space-x-1 items-center cursor-pointer px-1 py-0.5 hover:bg-gray-200 rounded border border-transparent">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-4 h-4 text-gray-500 "
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
                          />
                        </svg>

                        <span className="text-xs md:text-sm text-gray-400">
                          1
                        </span>
                      </div>
                      <span className="text-xs md:text-sm text-gray-400 px-1 py-0.5">
                        April 16, 2023
                      </span>
                      <span className="px-1 py-0.5 text-xs md:text-sm font-mabry rounded hover:bg-gray-200 cursor-pointer text-gray-500 border border-transparent">
                        Reply
                      </span>
                    </div>
                    {/* Reply */}
                    <div className="space-y-4">
                      <div className="flex">
                        <div className="flex-shrink-0 mr-0">
                          <Image
                            className="mt-2 border border-gray-600 rounded-full w-8 h-8 md:w-9 md:h-9"
                            src={pravatar}
                            alt=""
                          />
                        </div>
                        <div className="flex-1 ml-4">
                          <div className="flex w-full justify-between">
                            <strong className="font-mabrybold text-[16px]">
                              Sarah
                            </strong>{" "}
                            <div className="flex p-0.5 rounded-full hover:bg-gray-200 cursor-pointer">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                dataSlot="icon"
                                className="w-5 h-5"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                                />
                              </svg>
                            </div>
                          </div>
                          <p className="text-[15px] leading-tight">
                            Lorem ipsum dolor sit amet, consetetur sadipscing
                            elitr.
                          </p>
                          <div className="flex space-x-2 items-center">
                            <div className="flex space-x-1 items-center cursor-pointer px-1 py-0.5 hover:bg-gray-200 rounded border border-transparent">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-4 h-4 text-gray-500 "
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
                                />
                              </svg>

                              <span className="text-xs md:text-sm text-gray-400">
                                1
                              </span>
                            </div>
                            <span className="text-xs md:text-sm text-gray-400 px-1 py-0.5">
                              April 16, 2023
                            </span>
                            <span className="px-1 py-0.5 text-xs md:text-sm font-mabry rounded hover:bg-gray-200 cursor-pointer text-gray-500 border border-transparent">
                              Reply
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*  */}
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
