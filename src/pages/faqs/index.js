import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

import Notice from '@/components/Notice'
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AccordionItem from "@/components/AccordionItem";

import about from '@/img/about-hello.svg'
import sumail from "@/img/sumail.jpg";
import mathew from "@/img/mathew.jpg";
import GoTop from "@/components/GoTop";

export default function Faqs() {
  const [open, setOpen] = useState(false)

    const toggle = (index) => {
        if (open === index) {
            return setOpen(null)
        }

        setOpen(index)
    }

    const accordionData = [
        {
            title: "What is Now&Me?",
            desc: "Now&Me is a safe space for all - where you can share your feelings, talk to strangers online, and get the help you need from trained professionals. You can find community, make connections, or post anonymously when you want to keep it low-key."
        },
        {
            title: "How can Now&Me help me?",
            desc: "Now&Me can help you to create genuine connections, provide a judgement-free space, learn from others experiences, ask questions, and get the support you need. You can connect instantly with mental health and personal development coaches to become the best version of yourself, or share your feelings with the community to get the support you need."
        },
        {
            title: "What is Now&Me Experts?",
            desc: "Now&Me Experts is an instant chat-based mental health service that allows you to connect with trained experts from various fields to get personalised advice based on your unique situation. The Experts are online at all hours of the day to answer all your questions. All you have to do is recharge your wallet!"
        },
        {
            title: "Who are Now&Me Experts?",
            desc: "Now&Me Experts comprise a whole panel of certified and licensed professionals. They include life coaches, relationship coaches, career coaches, therapists, mindset coaches, self development coaches, and peer listeners. We’re constantly adding more experts to the panel so be sure to keep an eye out!"
        },
        {
            title: "Is Now&Me free?",
            desc: "Yes, the Now&Me app as well as the abundance of content available via blogs and resources is absolutely free. The first chat on Now&Me Experts is also free, after which each expert chat is charged at a nominal price."
        },
        {
            title: "What can I do on Now&Me?",
            desc: "You can do a whole lot of things on Now&Me! Chat with experts & get instant advice, build authentic connections, engage on the community feed, receive daily positivity reminders, use self-care tools to track your emotions, or simply lurk. There’s no wrong way to use Now&Me."
        },
        {
            title: "Who can I meet on Now&Me?",
            desc: "The Now&Me community is full of vibrant people from all walks of life. You can meet students, professionals, parents, teachers, homemakers, workers, non-workers, anyone."
        },
        {
            title: "Is Now&Me a suicide helpline?",
            desc: "Now&Me is not a crisis or suicide helpline. If you or anyone you know requires immediate help, please reach out to the nearest emergency services. You can find professional help in your country here."
        },
        {
            title: "Is Now&Me confidential?",
            desc: "Yes, Now&Me is completely confidential."
        },
        {
            title: "Is Now&Me anonymous?",
            desc: "The Now&Me app has an anonymous option that you can switch on anytime when posting or replying and your identity will be hidden from the community."
        },
    ]

    return (
      <>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        {/* <Notice /> */}
        <GoTop />

        <div className="h-max flex py-24 pb-20 px-6 md:px-20 bg-[#f6f8f7]">
          <div className="flex flex-col md:flex-row w-full mx-auto space-y-6 justify-center2 items-center">
            <div className="flex w-full md:w-1/3 font-mabrybold mx-auto">
              <div className="mx-auto">
              <div className="bg-mint mx-auto hover:bg-white border-2 border-gray-800 shadow text-black uppercase px-2 font-display text-2xl transform rotate-3 md:rotate-6">Any Question?</div>
              </div>         
            </div>
            <div className="w-full md:w-2/3 flex flex-col font-mabry leading-snug space-y-10">
                
                {/* <div className="flex flex-col text-gray-900">
                    <h3 className="text-lg font-mabrybold">What are private projects?</h3>
                    <p className="">
                        All Glitch projects are public by default. Paid members can control who can view/edit their code, and even who can see their live Glitch projects.
                    </p>
                </div>
                <div className="flex flex-col text-gray-900">
                    <h3 className="text-lg font-mabrybold">What is &quot;always-on&quot;?</h3>
                    <p className="">
                    With the Starter plan, full-stack apps go to sleep after five minutes of inactivity. Your app wakes up when it has visitors, but they might see a loading screen. This keeps our servers happy. Always-on apps don’t sleep when inactive and only editing time counts against your project hours.
                    </p>
                </div>
                <div className="flex flex-col text-gray-900">
                    <h3 className="text-lg font-mabrybold">What else does the Pro plan include?</h3>
                    <p className="">
                    In addition to boosted full-stack apps that are always-on, private projects, and robust access control the Pro plan includes more project hours and no rate limits. You can read more about what’s included in the Glitch Help Center.
                    </p>
                </div>
                <div className="flex flex-col text-gray-900">
                    <h3 className="text-lg font-mabrybold">How can Glitch work for my team / organization?</h3>
                    <p className="">
                    Glitch is great for collaboration and private projects, but some teams need more. Looking for managed seat licenses, deeper procurement processes, custom billing, access control, or direct support contacts? We can help. Get in touch for pricing and details.
                    </p>
                </div> */}
                
                <dl className="w-full mt-0 space-y-4 ">
                    {accordionData.map((data, index) => {
                      return (
                        <AccordionItem
                          key={index}
                          open={index === open}
                          title={data.title}
                          desc={data.desc}
                          toggle={() => toggle(index)}
                        />
                      );
                    })}
                  </dl>

            </div>
           
          </div>
        </div>
        <Footer />
      </>
    );
}