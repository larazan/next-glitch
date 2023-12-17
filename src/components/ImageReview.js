import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

import lastofus1 from "@/img/lastofus1.jpg";
import lastofus2 from "@/img/lastofus2.jpg";
import lastofus3 from "@/img/lastofus3.jpg";
import lastofus4 from "@/img/lastofus4.jpg";
import lastofus5 from "@/img/lastofus5.jpg";
import lastofus6 from "@/img/lastofus6.jpg";
import arrowLeft from "@/img/icon_arrow-left.png";
import arrowRight from "@/img/icon_arrow-right.png";

const ImageReview = () => {
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
      <div className="relative">
        <div className="relative">
          {scrollX !== 0 && (
            <div className=" top-[30%] left-0 ">
              <Image
                className="none absolute top-[35%] left-0 z-10 cursor-pointer"
                src={arrowLeft}
                alt="arrow left"
                decoding="auto"
                fetchpriority="auto"
                onClick={() => slide(-shiftN)}
              />
            </div>
          )}
          {!scrolEnd && (
            <div className=" top-[30%] right-0">
              <Image
                data-testid="arrow-right-pilihan-kitabisa"
                className="none absolute top-[35%] right-0 z-10 cursor-pointer"
                alt="arrow right"
                src={arrowRight}
                decoding="auto"
                fetchpriority="auto"
                onClick={() => slide(+shiftN)}
              />
            </div>
          )}

          {/*  */}
          <div
            className="mb-[1em] flex flex-row overflow-x-hidden scroll-smooth"
            ref={scrl}
            onScroll={scrollCheck}
          >
            <div className="text‑inherit mt-0 mr-[1em] mb-[1em] cursor-pointer no-underline">
              <div className="w-[280px]">
                <div
                  className="flex flex-col rounded-[4px]"
                  style={{
                    boxShadow: "rgba(152, 152, 152, 0.2) 0px 2px 8px 1px",
                    border: "0.5px solid rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <figure className="relative m-0 flex flex-1 items-center justify-center">
                    <Image
                      alt=""
                      src={lastofus1}
                      className="h-fit w-full rounded object-fit"
                      style={{ color: "transparent" }}
                    />
                  </figure>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="text‑inherit mt-0 mr-[1em] mb-[1em] cursor-pointer no-underline">
              <div className="w-[280px]">
                <div
                  className="flex flex-col rounded-[4px]"
                  style={{
                    boxShadow: "rgba(152, 152, 152, 0.2) 0px 2px 8px 1px",
                    border: "0.5px solid rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <figure className="relative m-0 flex flex-1 items-center justify-center">
                    <Image
                      alt=""
                      src={lastofus2}
                      className="h-fit w-full rounded object-fit"
                      style={{ color: "transparent" }}
                    />
                  </figure>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="text‑inherit mt-0 mr-[1em] mb-[1em] cursor-pointer no-underline">
              <div className="w-[280px]">
                <div
                  className="flex flex-col rounded-[4px]"
                  style={{
                    boxShadow: "rgba(152, 152, 152, 0.2) 0px 2px 8px 1px",
                    border: "0.5px solid rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <figure className="relative m-0 flex flex-1 items-center justify-center">
                    <Image
                      alt=""
                      src={lastofus3}
                      className="h-fit w-full rounded object-fit"
                      style={{ color: "transparent" }}
                    />
                  </figure>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="text‑inherit mt-0 mr-[1em] mb-[1em] cursor-pointer no-underline">
              <div className="w-[280px]">
                <div
                  className="flex flex-col rounded-[4px]"
                  style={{
                    boxShadow: "rgba(152, 152, 152, 0.2) 0px 2px 8px 1px",
                    border: "0.5px solid rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <figure className="relative m-0 flex flex-1 items-center justify-center">
                    <Image
                      alt=""
                      src={lastofus4}
                      className="h-fit w-full rounded object-fit"
                      style={{ color: "transparent" }}
                    />
                  </figure>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="text‑inherit mt-0 mr-[1em] mb-[1em] cursor-pointer no-underline">
              <div className="w-[280px]">
                <div
                  className="flex flex-col rounded-[4px]"
                  style={{
                    boxShadow: "rgba(152, 152, 152, 0.2) 0px 2px 8px 1px",
                    border: "0.5px solid rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <figure className="relative m-0 flex z-0 flex-1 items-center justify-center">
                    <Image
                      alt=""
                      src={lastofus5}
                      className="h-fit z-0 w-full rounded object-fit"
                      style={{ color: "transparent" }}
                    />
                  </figure>
                </div>
              </div>
            </div>
            {/*  */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageReview;
