import React from 'react'
import Image from 'next/image'

import pravatar from "@/img/300.jpg";

const Author = () => {
  return (
    <>
        <div className="flex w-full items-center2 font-mabry px-2 py-4 md:px-0 md:py-8">
            <Image
            className="w-16 h-16 border border-gray-700 rounded-full mr-1 md:mr-2"
            src={pravatar}
            alt="Avatar of Author"
            />
            <div className="flex flex-col px-1">
                <div className='leading-tight'>
                    <div className="font-mabryblack text-base md:text-lg leading-tight">
                        Jo Bloggerson
                    </div>
                    <span className='font-mabrybold text-sm'>Contributor</span>
                </div>
                <p className="text-gray-600 text-xs md:text-sm font-mabry leading-tight">
                After starting his career writing about music, films and video games for various places, Matt spent many years as a technology, PC and video game journalist before writing about tabletop games as the editor of Tabletop Gaming magazine. He joined Dicebreaker as Editor-In-Chief in 2019, and has been trying to convince the rest of the team to play Diplomacy since.
                </p>
            </div>
        </div>
    </>
  )
}

export default Author