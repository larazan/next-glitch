import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const events = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="bg-[#f4f2ef] relative py-12 ">
        <article className="max-w-3xl mx-auto relative z-10 py-8 px-4 markdown">
          <div className="container bg-white mx-auto mt-12 p-6 rounded-xl">
            <div className="px-4">
              <h1 className="py-8 font-mabryblack leading-tight text-3xl md:text-5xl tracking-tight font-display font-bold text-center">
                Upcoming event
              </h1>
            </div>{" "}
            <h2 className="pb-4 mt-2 font-mabrybold px-4 tracking-tight text-lg text-black font-light font-display">
              May 2023
            </h2>
            <div className=" columns-1 md:columns-2 lg:columns-3 ">
              <div className="mb-4 rounded-md bg-[#f4f2ef]  flex  overflow-hidden justify-center items-center cursor-zoom-in">
                <div className="flex flex-col justify-center items-center w-16 text-white bg-slate-900 p-2">
                  <span className="text-sm font-mabry">Jul</span>
                  <span className="font-mabrybold text-lg">15</span>
                </div>
                <div className="flex-grow py-2 lg:py-4 md:py-4 px-4">
                  <p className="leading-tight md:leading-tight text-black font-mabryblack text-lg md:text-2xl lg:text-2xl">
                    Champs-Elysées Film Festival
                  </p>
                  <div className="font-mabry flex ">
                    @ 6:30 pm - 10:30 pm
                  </div>
                </div>
              </div>
              <div className="mb-4 rounded-md bg-[#f4f2ef]  flex overflow-hidden justify-center items-center cursor-zoom-in">
              <div className="flex flex-col justify-center items-center w-16 text-white bg-slate-900 p-2">
                  <span className="text-sm font-mabry">Jul</span>
                  <span className="font-mabrybold text-lg">15</span>
                </div>
                <div className="flex-grow py-2 lg:py-4 md:py-4 px-4">
                  <p className="leading-tight md:leading-tight text-black font-mabryblack text-lg md:text-2xl lg:text-2xl">
                    L’Amour et les Forêts
                  </p>
                  <div className="font-mabry flex ">
                    @ 6:30 pm - 10:30 pm
                  </div>
                </div>
              </div>
              <div className="mb-4 rounded-md bg-[#f4f2ef]  flex  overflow-hidden justify-center items-center cursor-zoom-in">
              <div className="flex flex-col justify-center items-center w-16 text-white bg-slate-900 p-2">
                  <span className="text-sm font-mabry">Jul</span>
                  <span className="font-mabrybold text-lg">15</span>
                </div>
                <div className="flex-grow py-2 lg:py-4 md:py-4 px-4">
                  <p className="leading-tight md:leading-tight text-black font-mabryblack text-lg md:text-2xl lg:text-2xl">
                    Mobile Apps with Svelte and Capacitor
                  </p>
                  <div className="font-mabry flex ">
                    @ 6:30 pm - 10:30 pm
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
      <Footer />
    </>
  );
};

export default events;
