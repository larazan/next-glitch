import React from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import antman from "@/img/antman.jpg";
import GoTop from "@/components/GoTop";
import Review from "@/components/Review";

export default function Product() {
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

      <div className="pt-12 h-max flex flex-col">
        <div className="flex flex-row mx-auto w-full justify-center2 items-center">
          <div className="flex flex-col  md:flex-row justify-between w-full px-0 py-4 border-y border-gray-800 bg-white">
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 mx-auto w-11/12 md:w-11/12">
              <div className="flex w-full md:w-2/3 space-x-4 items-center">
                {/* <div className="text-lg font-mabrybold ">Rp 2.500.000</div> */}
                <div className="text-lg md:text-2xl font-mabryblack leading-tight text-gray-900">
                  Roronoa Zoro Action Figure One Piece Grandista Zorro
                </div>
              </div>

              <div className="flex w-full md:w-1/3 justify-end space-x-2 items-center">
                <div className="text-sm font-mabry hover:underline underline-offset-4 cursor-pointer">
                  <div className="flex items-center space-x-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-4 h-4 text-gray-900"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-4 h-4 text-gray-900"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-4 h-4 text-gray-900"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-4 h-4 text-gray-900"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-4 h-4 text-gray-900"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-xs font-mabry text-gray-900">
                      (50)
                    </span>
                  </div>
                </div>
                <Link href={""} className="relative inline-block text-lg group">
                  <span className="relative flex z-10 button px-3 py-3 justify-center overflow-hidden leading-tight text-sm font-mabrybold text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-800 rounded ">
                    <span className="absolute inset-0 w-full h-full px-5 py-3 rounded bg-yellow-200 group-hover:bg-yellow-300"></span>
                    <span className="relative">Add to cart</span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-max flex py-6 flex-col px-4 md:px-10 justify-center2 items-center2 bg-[#f6f8f7]">
        <div className="flex flex-col  w-full rounded border border-gray-800 bg-white">
          <div className="flex w-full items-stretch min-h-full bg-green-100 border-b border-gray-800">
            <div className="">
              <Image
                src={antman}
                className="object-fill rounded rounded-b-none "
                alt=""
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row w-full ">
            <div className="flex flex-col w-full md:w-2/3 bg-white border-r border-gray-800">
              <div className="flex w-full min-h-20 items-center py-0 md:py-0 px-4 bg-white border-b border-gray-800">
                <div className="text-3xl py-10 font-mabry leading-tight text-gray-900">
                  Roronoa Zoro Action Figure One Piece Grandista Zorro
                </div>
              </div>
              <div className="flex flex-row w-full items-center px-4  bg-white border-b border-gray-800">
                <div className="flex w-1/2 space-x-4 h-12 items-center border-r border-gray-800">
                  <div className="text-lg font-mabrybold  text-gray-900">
                    Rp 2.500.000
                  </div>
                </div>
                <div className="flex w-1/2 items-center justify-center">
                  <div className="flex items-center space-x-1 ">
                    <div className="flex items-center">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-4 h-4 text-gray-900"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-4 h-4 text-gray-900"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                      <span className="">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-4 h-4 text-gray-900"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                      <span className="">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-4 h-4 text-gray-900"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                      <span className="">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-4 h-4 text-gray-900"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                          />
                        </svg>
                      </span>
                    </div>
                    <span className="text-xs font-mabrybold text-gray-900">
                      (50)
                    </span>
                  </div>
                </div>
              </div>
              <div className="w-full px-4 md:px-6 text-lg text-gray-800 leading-snug pb-5">
                <p className="text-md font-mabry py-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
                <p className="text-md font-mabry py-3">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                  quia voluptas sit aspernatur aut odit aut fugit, sed quia
                  consequuntur magni dolores eos qui ratione voluptatem sequi
                  nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
                  dolor sit amet, consectetur, adipisci velit, sed quia non
                  numquam eius modi tempora incidunt ut labore et dolore magnam
                  aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
                  nostrum exercitationem ullam corporis suscipit laboriosam,
                  nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum
                  iure reprehenderit qui in ea voluptate velit esse quam nihil
                  molestiae consequatur, vel illum qui dolorem eum fugiat quo
                  voluptas nulla pariatur?
                </p>
              </div>
            </div>
            <div className="flex flex-col w-full md:w-1/3 bg-white">
              <div className="flex w-full flex-col px-4 py-4 border-b border-gray-800">
                <Link href={""} className="relative inline-block text-lg group">
                  <span className="relative flex z-10 button px-3 text-center w-full py-5 justify-center overflow-hidden leading-tight text-lg font-mabrybold text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-800 rounded ">
                    <span className="absolute inset-0 w-full h-full px-5 py-3 rounded bg-yellow-200 group-hover:bg-yellow-300"></span>
                    <span className="relative">Add to cart</span>
                  </span>
                </Link>

                <div className="flex w-full justify-center py-3">
                  <span className="text-sm font-mabrybold text-gray-900">
                    5,226 sales
                  </span>
                </div>

                <div className="flex justify-center border border-gray-800 rounded shadow-stack-sm">
                  <div className="flex flex-col w-full ">
                    <div className="border-b border-gray-800 py-3 px-3 leading-tight">
                      <span className="text-sm font-mabry  text-gray-900">
                        Roronoa Zoro Action Figure One Piece Grandista Zorro
                      </span>
                    </div>
                    <div className="flex justify-between items-center border-b border-gray-800 py-3 px-3">
                      <div className="text-sm font-mabrybold  text-gray-900">
                        Kategori
                      </div>
                      <div className="text-sm font-mabry text-gray-900">
                        Action Figure
                      </div>
                    </div>
                    <div className="flex justify-between items-center border-b border-gray-800 py-3 px-3">
                      <div className="text-sm font-mabrybold text-gray-900">
                        Ukuran
                      </div>
                      <div className="text-sm font-mabry text-gray-900">
                        28 cm
                      </div>
                    </div>
                    <div className="flex justify-between items-center border-b border-gray-800 py-3 px-3">
                      <div className="text-sm font-mabrybold text-gray-900">
                        Berat
                      </div>
                      <div className="text-sm font-mabry text-gray-900">
                        0,3 kg
                      </div>
                    </div>
                    <div className="flex justify-between items-center border-gray-800 py-3 px-3">
                      <div className="text-sm font-mabrybold text-gray-900">
                        Material
                      </div>
                      <div className="text-sm font-mabry text-gray-900">
                        Pvc
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex w-full flex-col px-4 py-4 ">
                <div className="mb-1 tracking-wide ">
                  <div className="flex justify-between">
                    <h2 className="text-gray-800 font-semibold mt-1 font-mabrybold">
                      Rating
                    </h2>
                    <div className="flex items-center space-x-1 ">
                      <div className="flex items-center">
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-4 h-4 text-gray-900"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                        <div className="text-xs ml-1 font-mabrybold text-gray-900">
                          5.0
                        </div>
                      </div>
                      <span className="text-xs font-mabry text-gray-900">
                        (200)
                      </span>
                    </div>
                  </div>

                  <div className="  pb-3">
                    <div className="flex items-center mt-1">
                      <div className="mr-3 text-xs font-mabry ">
                        <div className="flex items-center space-x-1 text-gray-900">
                          <div>5</div>
                          <span className="tracking-tight">starts</span>
                        </div>
                      </div>
                      <div className="w-3/5">
                        <div className="bg-white w-full rounded-sm border border-gray-800 h-3.5">
                          <div className=" w-7/12 bg-green-200 rounded-sm h-3"></div>
                        </div>
                      </div>
                      <div className="mr-3 font-mabry pl-3">
                        <span className="text-xs text-gray-900">51%</span>
                      </div>
                    </div>
                    <div className="flex items-center mt-1">
                      <div className="mr-3 text-xs font-mabry ">
                        <div className="flex items-center space-x-1 text-gray-900">
                          <div>4</div>
                          <span className="tracking-tight text-gray-900">
                            starts
                          </span>
                        </div>
                      </div>
                      <div className="w-3/5">
                        <div className="bg-white w-full rounded-sm border border-gray-800 h-3.5">
                          <div className=" w-2/12 bg-green-200 rounded-sm h-3"></div>
                        </div>
                      </div>
                      <div className="mr-3 font-mabry pl-3">
                        <span className="text-xs text-gray-900">21%</span>
                      </div>
                    </div>
                    <div className="flex items-center mt-1">
                      <div className="mr-3 text-xs font-mabry ">
                        <div className="flex items-center space-x-1 text-gray-900">
                          <div>3</div>
                          <span className="tracking-tight">starts</span>
                        </div>
                      </div>
                      <div className="w-3/5">
                        <div className="bg-white w-full rounded-sm border border-gray-800 h-3.5">
                          <div className=" w-1/12 bg-green-200 rounded-sm h-3"></div>
                        </div>
                      </div>
                      <div className="mr-3 font-mabry pl-3 text-gray-900">
                        <span className="text-xs">5%</span>
                      </div>
                    </div>
                    <div className="flex items-center mt-1">
                      <div className="mr-3 text-xs font-mabry ">
                        <div className="flex items-center space-x-1 text-gray-900">
                          <div>2</div>
                          <span className="tracking-tight">starts</span>
                        </div>
                      </div>
                      <div className="w-3/5">
                        <div className="bg-white w-full rounded-sm border border-gray-800 h-3.5">
                          {/* <div className=" w-7/12 bg-green-200 rounded-sm h-3"></div> */}
                        </div>
                      </div>
                      <div className="mr-3 font-mabry pl-3 text-gray-900">
                        <span className="text-xs">0%</span>
                      </div>
                    </div>
                    <div className="flex items-center mt-1">
                      <div className="mr-3 text-xs font-mabry ">
                        <div className="flex items-center space-x-1 text-gray-900">
                          <div>1</div>
                          <span className="tracking-tight">starts</span>
                        </div>
                      </div>
                      <div className="w-3/5">
                        <div className="bg-white w-full rounded-sm border border-gray-800 h-3.5">
                          {/* <div className=" w-7/12 bg-green-200 rounded-sm h-3"></div> */}
                        </div>
                      </div>
                      <div className="mr-3 font-mabry pl-3 text-gray-900">
                        <span className="text-xs">0%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Review />
        </div>
      </div>

      <Footer />
    </>
  );
}
