import React from 'react'
import Image from 'next/image'

import pup from '@/img/pupdate.svg'

export default function Notice() {
  return (
    <>
    <div className="mt-14 flex space-x-5 px-24 py-3 bg-red-50">
        <div className='w-10'>
            <Image src={pup} className="w-full" alt='' />
        </div>
        <p className="flex text-sm font-mabry">
        Glitch is now part of Fastly, and we are very excited about what this means for the community! Read the full announcement here
            
              {/* <div
                style={{ borderTopColor: "transparent" }}
                className="w-3 h-3 border-2 border-white-900 border-solid rounded-full animate-spin"
              ></div> */}
            
          
        </p>
      </div>
      </>
  )
}
