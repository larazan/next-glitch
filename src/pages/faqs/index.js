import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

import Notice from '@/components/Notice'
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import about from '@/img/about-hello.svg'
import sumail from "@/img/sumail.jpg";
import mathew from "@/img/mathew.jpg";

export default function Faqs() {
    return (
      <>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <Notice />

        <div className="h-max flex py-12 pb-20 px-20 bg-[#f2f2f2]">
          <div className="flex w-full mx-auto space-y-6 justify-center2 items-center">
            <div className="w-1/3 text-3xl font-mabrybold">Any Question?</div>
            <div className="w-2/3 flex flex-col font-mabry leading-snug space-y-10">
                <div className="flex flex-col ">
                    <h3 className="text-lg font-mabrybold">What are private projects?</h3>
                    <p className="">
                        All Glitch projects are public by default. Paid members can control who can view/edit their code, and even who can see their live Glitch projects.
                    </p>
                </div>
                <div className="flex flex-col ">
                    <h3 className="text-lg font-mabrybold">What is "always-on"?</h3>
                    <p className="">
                    With the Starter plan, full-stack apps go to sleep after five minutes of inactivity. Your app wakes up when it has visitors, but they might see a loading screen. This keeps our servers happy. Always-on apps don’t sleep when inactive and only editing time counts against your project hours.
                    </p>
                </div>
                <div className="flex flex-col ">
                    <h3 className="text-lg font-mabrybold">What else does the Pro plan include?</h3>
                    <p className="">
                    In addition to boosted full-stack apps that are always-on, private projects, and robust access control the Pro plan includes more project hours and no rate limits. You can read more about what’s included in the Glitch Help Center.
                    </p>
                </div>
                <div className="flex flex-col ">
                    <h3 className="text-lg font-mabrybold">How can Glitch work for my team / organization?</h3>
                    <p className="">
                    Glitch is great for collaboration and private projects, but some teams need more. Looking for managed seat licenses, deeper procurement processes, custom billing, access control, or direct support contacts? We can help. Get in touch for pricing and details.
                    </p>
                </div>
                
            </div>
           
          </div>
        </div>
        <Footer />
      </>
    );
}