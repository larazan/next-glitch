import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Talk() {
    return (
      <>
      <Link href={"/forums"} >
        <div className="hidden sm:block font-mabrybold fixed z-50 bottom-28 right-3 py-2.5 px-5 text-sm sm:text-lg leading-7.5 font-semibold bg-[#0369A1] text-white rounded-full hover:scale-105 shadow-lg shadow-blue-500/50 hover:shadow-lg transform transition duration-200 cursor-pointer">
          Get Help
        </div>
        </Link>
      </>
    );
}