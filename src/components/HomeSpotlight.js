import React, { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

import arrowLeft from "@/img/icon_arrow-left.png";
import arrowRight from "@/img/icon_arrow-right.png";

import sumail from "@/img/sumail.jpg";
import mathew from "@/img/mathew.jpg";

export default function HomeSpotlight() {
  let scrl = useRef(null);
  const shiftN = 230;
  const [scrollX, setscrollX] = useState(0);
  const [scrolEnd, setscrolEnd] = useState(false);

  const slide = (shift) => {
    scrl.current.scrollLeft += shift;
    setscrollX(scrollX + shift);

    if (
      Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
      scrl.current.offsetWidth
    ) {
      setscrolEnd(true);
    } else {
      setscrolEnd(false);
    }
  };

  const scrollCheck = () => {
    setscrollX(scrl.current.scrollLeft);
    if (
      Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
      scrl.current.offsetWidth
    ) {
      setscrolEnd(true);
    } else {
      setscrolEnd(false);
    }
  };

  return (
    <>
      <div className="relative h-max flex py-16 flex-col space-y-6 px-10 justify-center2 items-center2 bg-green-200">
        <div className="flex flex-row mx-auto w-3/4 space-x-6 justify-between items-center2">
          <span className="text-3xl font-mabrybold">Spotlight</span>
        </div>

        {/* <div className="flex flex-col mx-auto w-2/3 space-y-6 justify-center items-center">
          <div className="">
            <Image src={sumail}  alt="" className="object-fill h-60 w-60 border-4 border-gray-900 rounded-3xl" />
          </div>
          <div className="text-center">
            <span className="text-sm font-mabry ">
              Sumail was born in Karachi, Pakistan. He started playing Dota when he was eight years old. When his family moved from Pakistan to Rosemont, Illinois in 2012 he began playing in the North American Elite League. Sumail quickly became the highest rated player in the in-house league, establishing himself as one of the best upcoming talents in the North American scene
            </span>
          </div>
          <div className="flex space-x-2">
            <div className="h-4 w-4 rounded-full bg-black"></div>
            <div className="h-4 w-4 border-2 border-gray-900 rounded-full bg-green-200 cursor-pointer"></div>
            <div className="h-4 w-4 border-2 border-gray-900 rounded-full bg-green-200 cursor-pointer"></div>
            <div className="h-4 w-4 border-2 border-gray-900 rounded-full bg-green-200 cursor-pointer"></div>
          </div>
        </div> */}

        <div className="flex flex-row flex-wrap mx-auto w-3/4">
          <div className="relative transition-all duration-150 flex w-full px-3 py-4 md:w-1/2 lg:w-1/3">
            <div className="flex flex-col items-stretch min-h-full pb-4 mb-6 transition-all duration-150 ">
              <div className="flex">
                <Image
                  src={sumail}
                  className="object-fill w-10 h-10 rounded"
                  alt=""
                />
                <h1 className="px-4 font-mabrybold leading-tight">
                  Sumail (26) former evil genius
                </h1>
              </div>

              <div className="flex flex-row flex-wrap w-full  py-2 overflow-hidden text-sm font-mabry leading-snug text-justify text-gray-700">
                Sumail was born in Karachi, Pakistan. He started playing Dota
                when he was eight years old. When his family moved from Pakistan
                to Rosemont, Illinois in 2012 he began playing in the North
                American Elite League. Sumail quickly became the highest rated
                player in the in-house league, establishing himself as one of
                the best upcoming talents in the North American scene.
              </div>
            </div>
          </div>
          <div className="relative transition-all duration-150 flex w-full px-3 py-4 md:w-1/2 lg:w-1/3">
            <div className="flex flex-col items-stretch min-h-full pb-4 mb-6 transition-all duration-150 ">
              <div className="flex">
                <Image
                  src={mathew}
                  className="object-fill w-10 h-10 rounded"
                  alt=""
                />
                <h1 className="px-4 font-mabrybold leading-tight">
                  Matthew (26) evil genius member
                </h1>
              </div>

              <div className="flex flex-row flex-wrap w-full  py-2 overflow-hidden text-sm font-mabry leading-snug text-justify text-gray-700">
              Farith &quot;Matthew&quot; Huamancaja (born July 19, 1998) is a Peruvian Dota 2 player who is currently playing for Evil Geniuses.
              His career high for assists in a single professional match is 42. He achieved this feat while playing for Infamous as Bounty Hunter in Game 1 of their Upper Bracket series against Noblewingz during Season 8 of the Dota 2 BEAT Invitational.
              </div>
            </div>
          </div>
          <div className="relative transition-all duration-150 flex w-full px-3 py-4 md:w-1/2 lg:w-1/3">
            <div className="flex flex-col items-stretch min-h-full pb-4 mb-6 transition-all duration-150 ">
              <div className="flex">
                <Image
                  src={mathew}
                  className="object-fill w-10 h-10 rounded"
                  alt=""
                />
                <h1 className="px-4 font-mabrybold leading-tight">
                  Matthew (26) evil genius member
                </h1>
              </div>

              <div className="flex flex-row flex-wrap w-full  py-2 overflow-hidden text-sm font-mabry leading-snug text-justify text-gray-700">
              Farith &quot;Matthew&quot; Huamancaja (born July 19, 1998) is a Peruvian Dota 2 player who is currently playing for Evil Geniuses.
              His career high for assists in a single professional match is 42. He achieved this feat while playing for Infamous as Bounty Hunter in Game 1 of their Upper Bracket series against Noblewingz during Season 8 of the Dota 2 BEAT Invitational.
              </div>
            </div>
          </div>
          <div className="relative transition-all duration-150 flex w-full px-3 py-4 md:w-1/2 lg:w-1/3">
            <div className="flex flex-col items-stretch min-h-full pb-4 mb-6 transition-all duration-150 ">
              <div className="flex">
                <Image
                  src={sumail}
                  className="object-fill w-10 h-10 rounded"
                  alt=""
                />
                <h1 className="px-4 font-mabrybold leading-tight">
                  Sumail (26) former evil genius
                </h1>
              </div>

              <div className="flex flex-row flex-wrap w-full  py-2 overflow-hidden text-sm font-mabry leading-snug text-justify text-gray-700">
                Sumail was born in Karachi, Pakistan. He started playing Dota
                when he was eight years old. When his family moved from Pakistan
                to Rosemont, Illinois in 2012 he began playing in the North
                American Elite League. Sumail quickly became the highest rated
                player in the in-house league, establishing himself as one of
                the best upcoming talents in the North American scene.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
