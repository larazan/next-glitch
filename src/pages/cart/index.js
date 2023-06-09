import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import ant from "@/img/products/ant.jpg";
import apes from "@/img/products/apes.jpg";
import basket from "@/img/products/basket.jpg";

const cart = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <section className="py-28">
        <div className="max-w-md mx-auto   md:max-w-5xl">
          <div className="md:flex ">
            <div className="w-full p-4 px-5 py-5">
              <div className="md:grid md:grid-cols-3 gap-2 ">
                <div className="col-span-2 p-5">
                  <h1 className="text-xl font-mabryblack ">Your Cart</h1>

                  <div className="flex justify-between items-center pt-6 pb-2 border-b font-mabrybold">
                    <div className="flex items-center">
                      <span className="text-sm text-gray-600">Description</span>
                    </div>

                    <div className="flex justify-center items-center">
                      <div className="pr-8 flex ">
                        <span className="text-sm text-gray-600">Quantity</span>
                      </div>

                      <div className="pr-8 ">
                        <span className="text-sm text-gray-600">Subtotal</span>
                      </div>
                      <div>
                        <i className="fa fa-close text-xs font-medium"></i>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center pt-3">
                    <div className="flex  items-center">
                      <Image src={ant} width="60" className="rounded " alt="" />

                      <div className="flex flex-col ml-3 leading-snug">
                        <span className="md:text-md font-mabrybold">
                          Chicken momo
                        </span>
                        <span className="font-mabryblack text-xs text-indigo-600">
                          Rp 500.000
                        </span>
                        <span className="text-xs font-mabry text-gray-400">
                          #41551
                        </span>
                      </div>
                    </div>

                    <div className="flex justify-center items-center">
                      <div className="px-3 py-2 mr-8 flex border rounded-sm">
                        <button className="font-semibold">-</button>
                        <input
                          type="number"
                          className="focus:outline-none h-6 w-8 text-sm px-2 mx-2 font-mabry"
                          value="1"
                        />
                        <button className="font-semibold">+</button>
                      </div>

                      <div>
                        <span className="text-sm font-mabryblack text-indigo-600">
                          Rp 500.000
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center pt-3 ">
                    <div className="flex  items-center">
                      <Image src={apes} width="60" className="rounded " alt="" />

                      <div className="flex flex-col ml-3 leading-snug">
                        <span className="md:text-md font-mabrybold">
                          Chicken momo
                        </span>
                        <span className="font-mabryblack text-xs text-indigo-600">
                          Rp 500.000
                        </span>
                        <span className="text-xs font-mabry text-gray-400">
                          #41551
                        </span>
                      </div>
                    </div>

                    <div className="flex justify-center items-center">
                      <div className="px-3 py-2 mr-8 flex border rounded-sm">
                        <button className="font-semibold">-</button>
                        <input
                          type="number"
                          className="focus:outline-none h-6 w-8 text-sm px-2 mx-2 font-mabry"
                          value="1"
                        />
                        <button className="font-semibold">+</button>
                      </div>

                      <div>
                        <span className="text-sm font-mabryblack text-indigo-600">
                          Rp 500.000
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center pt-3">
                    <div className="flex  items-center">
                      <Image src={basket} width="60" className="rounded " alt="" />

                      <div className="flex flex-col ml-3 leading-snug">
                        <span className="md:text-md font-mabrybold">
                          Chicken momo
                        </span>
                        <span className="font-mabryblack text-xs text-indigo-600">
                          Rp 500.000
                        </span>
                        <span className="text-xs font-mabry text-gray-400">
                          #41551
                        </span>
                      </div>
                    </div>

                    <div className="flex justify-center items-center">
                      <div className="px-3 py-2 mr-8 flex border rounded-sm">
                        <button className="font-semibold">-</button>
                        <input
                          type="number"
                          className="focus:outline-none h-6 w-8 text-sm px-2 mx-2 font-mabry"
                          value="1"
                        />
                        <button className="font-semibold">+</button>
                      </div>

                      <div>
                        <span className="text-sm font-mabryblack text-indigo-600">
                          Rp 500.000
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center mt-6 pt-6 border-t space-x-2">
                    <div className="flex items-center">
                      <i className="fa fa-arrow-left text-sm pr-2"></i>
                      <span className="text-md font-mabrybold">
                        Apply discount code:
                      </span>
                    </div>

                    <div className="flex justify-center items-center space-x-2">
                      <input
                        type="text"
                        className="py-1.5 px-4 w-full border border-gray-500 font-mabry rounded text-gray-900 text-md "
                        placeholder="discount code"
                      />
                      <Link href={"/login"}>
                        <button className="flex button bg-mint items-center justify-center rounded border-2 border-gray-800 px-4 py-3 space-x-2 bg-green-100 opacity-90 hover:opacity-100">
                          <span className="text-xs font-semibold uppercase font-mabrybold">
                            apply
                          </span>
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="relative  bg-indigo-500 rounded overflow-visible">
                  <span className="text-xl p-5 font-mabryblack text-gray-100 block pb-3">
                    Cart Total
                  </span>

                  <div className="flex p-5 flex-col w-full ">
                    
                    <div className="flex justify-between items-center border-b border-white text-white py-3 px-3">
                      <div className="text-sm font-mabrybold">Subtotal</div>
                      <div className="text-sm font-mabrybold">Rp. 2.000.000</div>
                    </div>
                    <div className="flex justify-between items-center text-white pt-3 px-3">
                      <div className="text-md font-mabrybold">Shipping</div>
                      
                    </div>
                    <div className="flex justify-between items-center text-white py-2 px-3">
                      <div className="text-xs font-mabry">Shipping</div>
                      <div className="text-xs font-mabry">
                        -
                      </div>
                    </div>
                    <div className="flex justify-between items-center text-white py-3 px-3">
                      <div className="text-sm font-mabrybold">Order total</div>
                      <div className="text-sm font-mabryblack">Rp. 2.000.000</div>
                    </div>
                  </div>
                  <div className="absolute bottom-5 flex justify-center w-full mx-auto px-5">
                    <button className="h-10 w-full bg-orange-500 text-sm font-mabrybold uppercase rounded focus:outline-none text-white hover:bg-orange-600">
                      go to CheckOut
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default cart;
