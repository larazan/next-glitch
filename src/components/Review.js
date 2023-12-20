import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import antman from "@/img/antman.jpg";
import ModalReview from "./ModalReview";

const Review = () => {
  const [reviewModalOpen, setReviewModalOpen] = useState(false);

  const shout = [
    {
      name: "Flean W.",
      location: "21/9/2023",
      img: antman,
      testimoni:
        "I've been trying to work on my Common App for a while now, and felt like my ECs were lacking a little. IvyStat helped me into volunteership that then transitioned into an internship. This was the first time I got to work alongside other peers at an actual company. My experience was very valuable and helped me build a really good college application❤️",
    },
    {
      name: "Sharon Blackwell",
      location: "21/9/2023",
      img: antman,
      testimoni:
        "Ivy Stat made it really easy for me to apply to other freelance gig sites like Upwork. It was very hard to get into video editing without them since I didn't possess the necessary experience to showcase on these platforms.",
    },
    {
      name: "Cole A.",
      location: "21/9/2023",
      img: antman,
      testimoni:
        "After a couple unpaid internships, it was super clear that companies just wanted to exploit child labour and look good on paper to show that they're hiring interns. Ivy Stat didn't just teach us a lot, but actually helped me start my own SEO service and even get customers connected to me. I will one day return the favour 🙏",
    },
    {
      name: "Kartik S. Kapoor",
      location: "21/9/2023",
      img: antman,
      testimoni:
        "I was always looking to learn coding and all, but had no idea how to actually apply my skills into a real world scenario. With Ivy Stat, I could finally get a sense of direction and even got to work on a Chrome plug-in that helped me get my first ever internship ever!",
    },
    {
      name: "Tim Zhou",
      location: "21/9/2023",
      img: antman,
      testimoni:
        "I've been working as a Target cashier for a couple months now, and this experience with Ivy Stat has really shown me a much better way to utilise my free time to make money. I'm thankful for all the tips and especially the resume I got from the program.",
    },
    {
      name: "Cerila Smith",
      location: "21/9/2023",
      img: antman,
      testimoni:
        "Wow! This was an incredible program! From the evening calls with other students across the world to the incredible resume building activity, this program was a total success. I will greatly miss everyone at Ivy Stat and am looking forward to keep on having more internships and paving me name in the industry!!!",
    },
  ];

  return (
    <>
      <div className="relative z-10 items-center overflow-hidden bg-white border-t border-gray-900">
        <div className="flex space-y-3 justify-between items-center pt-8 mx-auto w-11/12 ">
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
              <span className="text-xs font-mabry text-gray-900">(50)</span>
            </div>
          </div>
          <Link href={""} className="relative inline-block text-lg group">
            <span className="relative flex z-10 button px-3 py-3 justify-center overflow-hidden leading-tight text-sm font-mabrybold text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-800 rounded ">
              <span className="absolute inset-0 w-full h-full px-5 py-3 rounded bg-yellow-200 group-hover:bg-yellow-300"></span>
              <span className="relative">Write a review</span>
            </span>
          </Link>
        </div>
        <div className="columns-2 md:columns-3 lg:columns-3 gap-3 md:gap-6 mt-4 mb-4 md:mt-8 md:mb-8 mx-auto py-6 w-full px-3 md:px-0 md:w-11/12 ">
          {shout.map((data, index) => {
            return (
              <div
                className="mb-4 rounded flex justify-center flex-col space-y-2 px-0 py-0 bg-white hover:bg-gray-50 border cursor-zoom-in shadow"
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  setReviewModalOpen(true);
                }}
              >
                <div className="flex flex-col space-x-3 px-0 w-full">
                  <div className="flex justify-center items-center">
                    <Image src={data.img} alt="" className="rounded-t w-full" />
                  </div>
                  <div className="flex flex-col leading-tight">
                    <h3 className="md:text-lg font-mabrybold">{data.name}</h3>
                    <span className="text-xs font-mabry">{data.location}</span>
                  </div>
                  <div className="text-sm font-mabry">
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
                    </div>
                  </div>
                </div>
                <div className="flex px-3 leading-tight pb-5">
                  <span className="font-mabry">{data.testimoni}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <ModalReview
        modalOpen={reviewModalOpen}
        setModalOpen={setReviewModalOpen}
      />
    </>
  );
};

export default Review;
