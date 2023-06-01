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
        <div className="max-w-md w-full border-2 border-gray-800 rounded shadow-stack-sm space-y-3 shadow bg-white">
          <div className="mb-4 border-b-2 border-gray-800 px-4 py-3">
            <p className="text-slate-800 font-mabrybold">Email to send reset instructions to</p>
            {/* <h2 className="text-xl font-bold text-white">Join our community</h2> */}
          </div>
          <div className="px-4 py-1">
            <input
              className="w-full py-3 px-3 text-sm  focus:outline-none outline-none focus:border-pink-400 border-2 border-gray-800 rounded text-gray-800 font-mabry"
              type="email"
              placeholder="Email"
            />
          </div>
          
          <div className="flex space-x-2 px-4 pb-4">
            <button className="w-full py-2 bg-white hover:bg-slate-900 hover:text-white border-2 border-gray-800 rounded text-sm font-bold text-slate-800 transition duration-200 font-mabrybold">
              Cancel
            </button>
            <button className="w-full py-2 bg-pink-400 hover:bg-pink-500 border-2 border-gray-800 rounded text-sm font-bold text-gray-50 transition duration-200 font-mabrybold">
              Send
            </button>
            
          </div>
          
         
        </div>
        <div className="flex max-w-md w-full p-2 justify-end">
            <Link href={"/register"} className="relative inline-block text-lg group">
              <span className="relative z-10 block px-3 py-2 button overflow-hidden leading-tight text-xs font-semibold font-mabrybold text-blue-400 transition-colors duration-300 ease-out border-2 border-gray-800 rounded ">
                <span className="absolute inset-0 w-full h-full px-5 py-3 rounded bg-green-100 group-hover:bg-green-200"></span>
                {/* <span className="absolute left-0 w-22 h-22 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span> */}
                <span className="relative">Sign Up</span>
              </span>
              
            </Link>
        </div>
    
      </section>
    </>
  );
}
