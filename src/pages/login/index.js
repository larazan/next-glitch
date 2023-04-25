import React from "react";
import Link from 'next/link'
import { Logo } from "@/components/Logo";

export default function Login() {
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
            <p className="text-slate-700 font-bold font-mabrybold">Sign In</p>
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
            <input
              className="w-full p-2 text-sm bg-gray-50 focus:outline-none outline-none focus:border-indigo-500 border border-gray-200 rounded text-gray-600 font-mabry"
              type="text"
              placeholder="Password"
            />
          </div>
          <div>
            <button className="w-full py-2 bg-blue-600 hover:bg-blue-700 border-2 border-gray-800 rounded text-sm font-bold text-gray-50 transition duration-200 font-mabrybold">
              Sign In
            </button>
          </div>
          <div className="text-xs leading-tight font-mabry">
            By signing into Glitch, you agree to our{" "}
            <a href="#" className="text-blue-400">
              Terms of Services and Privacy Statement
            </a>
          </div>
          {/* <div className="flex items-center justify-between">
            <div className="flex flex-row items-center">
                <input type="checkbox" className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded" />
                <label for="comments" className="ml-2 text-sm font-normal text-gray-400">Remember me</label>
            </div>
        </div> */}
        </div>
        <div className="flex max-w-md w-full p-2 justify-between">
          <div className="flex flex-col space-y-1 items-center border-2 p-2 border-gray-800 rounded">
            <span className="text-xs font-mabry">Don't have an account?</span>
            {/* <Link href={"/register"}>
              <button className="py-2 px-3 bg-green-100 hover:bg-green-200 border-2 border-gray-800 rounded text-xs font-semibold font-mabrybold text-blue-400 transition duration-200 shadow-lg shadow-indigo-500/50">
                Create Account?
              </button>
            </Link> */}
            <Link href={"/register"} className="relative inline-block text-lg group">
              <span className="relative z-10 block px-3 py-2  overflow-hidden leading-tight text-xs font-semibold font-mabrybold text-blue-400 transition-colors duration-300 ease-out border-2 border-gray-800 rounded ">
                <span className="absolute inset-0 w-full h-full px-5 py-3 rounded bg-green-100 group-hover:bg-green-200"></span>
                {/* <span className="absolute left-0 w-22 h-22 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span> */}
                <span className="relative">Create Account?</span>
              </span>
              <span
                className="absolute bottom-0 right-0 w-full h-9 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded group-hover:mb-00 group-hover:mr-00"
                data-rounded="rounded-lg"
              ></span>
            </Link>
          </div>
          <div className="flex items-center">
            {/* <Link href={"/forgot"}>
              <button className="py-2 px-3 bg-red-100 hover:bg-red-200 border-2 border-gray-800 rounded text-xs font-semibold font-mabrybold text-blue-400 transition duration-200 shadow-lg shadow-indigo-500/50">
                Forgot password?
              </button>
            </Link> */}
            <Link href={"/forgot"} className="relative inline-block text-lg group">
              <span className="relative z-10 block px-3 py-2  overflow-hidden leading-tight text-xs font-semibold font-mabrybold text-blue-400 transition-colors duration-300 ease-out border-2 border-gray-800 rounded ">
                <span className="absolute inset-0 w-full h-full px-5 py-3 rounded bg-red-100 group-hover:bg-red-200"></span>
                {/* <span className="absolute left-0 w-22 h-22 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span> */}
                <span className="relative">Forgot password?</span>
              </span>
              <span
                className="absolute bottom-0 right-0 w-full h-9 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded group-hover:mb-00 group-hover:mr-00"
                data-rounded="rounded-lg"
              ></span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
