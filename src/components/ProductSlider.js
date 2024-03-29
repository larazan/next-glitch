import React, { useState } from "react";
import Image from "next/image";

import detail1 from "@/img/antman.jpg";
import detail4 from "@/img/products/bumble.jpg";
import detail2 from "@/img/products/cpo.jpg";
import detail3 from "@/img/products/hulk.jpg";
// import detail4 from "@/img/products/decepticon.jpg";


const ProductSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  const slides = [
    {
      url: detail1,
    },
    {
      url: detail2,
    },
    {
      url: detail3,
    },
    {
        url: detail4,
      },
  ];

  return (
    <>
      <div className="h-full w-full m-auto py-0 px-0 relative group">
        <div
          // style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className=""
        >
          <Image src={slides[currentIndex].url} alt="" className="object-fill rounded rounded-b-none" />
        </div>
        {/* Left Arrow */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full px-1.5 py-.5 bg-black/20 hover:bg-gray-700 text-white cursor-pointer">
          <button onClick={prevSlide}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>
        </div>
        {/* Right Arrow */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full px-1.5 py-.5 bg-black/20 hover:bg-gray-700 text-white cursor-pointer">
          <button onClick={nextSlide}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
        <div className="absolute w-full bottom-0">
          <div className=" flex justify-center py-1">
            {slides.map((slide, slideIndex) => (
              <div
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
                className="text-lg cursor-pointer text-gray-800"
              >
                {/* <div className="px-0.5 py-0.5 bg-black rounded-full"></div> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-point-filled"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path
                    d="M12 7a5 5 0 1 1 -4.995 5.217l-.005 -.217l.005 -.217a5 5 0 0 1 4.995 -4.783z"
                    strokeWidth="0"
                    fill="currentColor"
                  />
                </svg>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductSlider;
