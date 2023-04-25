import React from "react";
import Link from 'next/link'
import { Logo } from "@/components/Logo";

export default function Forgot() {
  return (
    <>
      <section className="flex flex-col justify-center items-center h-screen bg-[#f4f4f0]">
        <div className="py-2">
          <Link href={"/"}>
            <Logo className="w-full h-8 text-red-600" />
          </Link>
        </div>
        <div className="max-w-md w-full border-2 border-gray-800 rounded px-4 py-3 space-y-3 shadow-lg shadow-indigo-500/50">
          <div className="mb-4">
            <p className="text-slate-700 text-sm font-mabry">Email to send reset instructions to</p>
            {/* <h2 className="text-xl font-bold text-white">Join our community</h2> */}
          </div>
          <div>
            <input
              className="w-full p-2 text-sm bg-gray-50 focus:outline-none outline-none focus:border-indigo-500 border border-gray-200 rounded text-gray-600 font-mabry"
              type="email"
              placeholder="Email"
            />
          </div>
          
          <div>
            <button className="w-full py-2 bg-pink-400 hover:bg-pink-500 border-2 border-gray-800 rounded text-sm font-bold text-gray-50 transition duration-200 font-mabrybold">
              Send
            </button>
          </div>
          <button className="w-full py-2 bg-slate-100 hover:bg-slate-200 border-2 border-gray-800 rounded text-sm font-bold text-gray-700 transition duration-200 font-mabrybold">
              Cancel
            </button>
         
        </div>
        <div className="flex max-w-md w-full p-2 justify-end">
            <Link href={"/register"} className="relative inline-block text-lg group">
              <span className="relative z-10 block px-3 py-2  overflow-hidden leading-tight text-xs font-semibold font-mabrybold text-blue-400 transition-colors duration-300 ease-out border-2 border-gray-800 rounded ">
                <span className="absolute inset-0 w-full h-full px-5 py-3 rounded bg-green-100 group-hover:bg-green-200"></span>
                {/* <span className="absolute left-0 w-22 h-22 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span> */}
                <span className="relative">Sign Up</span>
              </span>
              <span
                className="absolute bottom-0 right-0 w-full h-9 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded group-hover:mb-00 group-hover:mr-00"
                data-rounded="rounded-lg"
              ></span>
            </Link>
        </div>
    
      </section>
    </>
  );
}
