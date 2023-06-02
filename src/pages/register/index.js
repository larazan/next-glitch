import React from "react";
import { Logo } from "@/components/Logo";
import Link from "next/link";
import Image from "next/image";

import google from "@/img/google.png";

export default function Register() {
  return (
    <>
      <section className="flex flex-col justify-center items-center h-screen bg-[#f4f4f0]">
        <div className="py-2">
          <Link href={"/"}>
            <Logo className="w-full h-8 text-red-600" />
          </Link>
        </div>
        <div className="max-w-md w-full border-2 border-gray-800 rounded shadow-stack-sm space-y-3 shadow bg-white">
          <div className="mb-4 border-b-2 border-gray-800 px-4 py-3 ">
            <p className="text-slate-800 font-mabrybold">Register</p>
            {/* <h2 className="text-xl font-bold text-white">Join our community</h2> */}
          </div>
          <div className="px-4 py-1">
            <input
              className="w-full py-3 px-3 text-sm  focus:outline-none outline-none focus:border-pink-400 border-2 border-gray-800 rounded text-gray-800 font-mabry"
              type="text"
              placeholder="Username"
            />
          </div>
          <div className="px-4 py-1">
            <input
              className="w-full py-3 px-3 text-sm  focus:outline-none outline-none focus:border-pink-400 border-2 border-gray-800 rounded text-gray-800 font-mabry"
              type="email"
              placeholder="Email"
            />
          </div>
          <div className="px-4 py-1">
            <input
              className="w-full py-3 px-3 text-sm  focus:outline-none outline-none focus:border-pink-400 border-2 border-gray-800 rounded text-gray-800 font-mabry"
              type="text"
              placeholder="Password"
            />
          </div>
          <div className="px-4 py-1">
          <button className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 border-2 border-gray-800 rounded text-sm font-bold text-gray-50 transition duration-200 font-mabrybold">
              Register Now
            </button>
          </div>
          <div className="px-4 pb-2 text-xs leading-tight font-mabry">
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
          <div className="flex flex-col space-y-3 items-center">
            {/* <button className="flex items-center space-x-1 py-2 px-3 bg-slate-100 hover:bg-slate-200 border-2 border-gray-800 rounded  transition duration-200 shadow-lg shadow-indigo-500/50">
              <span className="text-xs font-semibold text-blue-400">
                Register via Github
              </span>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-brand-github-filled"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path
                    d="M5.315 2.1c.791 -.113 1.9 .145 3.333 .966l.272 .161l.16 .1l.397 -.083a13.3 13.3 0 0 1 4.59 -.08l.456 .08l.396 .083l.161 -.1c1.385 -.84 2.487 -1.17 3.322 -1.148l.164 .008l.147 .017l.076 .014l.05 .011l.144 .047a1 1 0 0 1 .53 .514a5.2 5.2 0 0 1 .397 2.91l-.047 .267l-.046 .196l.123 .163c.574 .795 .93 1.728 1.03 2.707l.023 .295l.007 .272c0 3.855 -1.659 5.883 -4.644 6.68l-.245 .061l-.132 .029l.014 .161l.008 .157l.004 .365l-.002 .213l-.003 3.834a1 1 0 0 1 -.883 .993l-.117 .007h-6a1 1 0 0 1 -.993 -.883l-.007 -.117v-.734c-1.818 .26 -3.03 -.424 -4.11 -1.878l-.535 -.766c-.28 -.396 -.455 -.579 -.589 -.644l-.048 -.019a1 1 0 0 1 .564 -1.918c.642 .188 1.074 .568 1.57 1.239l.538 .769c.76 1.079 1.36 1.459 2.609 1.191l.001 -.678l-.018 -.168a5.03 5.03 0 0 1 -.021 -.824l.017 -.185l.019 -.12l-.108 -.024c-2.976 -.71 -4.703 -2.573 -4.875 -6.139l-.01 -.31l-.004 -.292a5.6 5.6 0 0 1 .908 -3.051l.152 -.222l.122 -.163l-.045 -.196a5.2 5.2 0 0 1 .145 -2.642l.1 -.282l.106 -.253a1 1 0 0 1 .529 -.514l.144 -.047l.154 -.03z"
                    strokeWidth="0"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
            </button> */}
            {/* <button className="flex items-center space-x-1 py-2 px-3 bg-slate-100 hover:bg-slate-200 border-2 border-gray-800 rounded  transition duration-200 shadow-lg shadow-indigo-500/50">
              <span className="text-xs font-semibold text-blue-400">
                Register via Google
              </span>
              <div className="w-4 ">
                <Image src={google} alt="" />
              </div>
            </button> */}
            <Link href={"/login"} className="relative inline-block text-lg group">
              <span className="relative z-10 block px-3 py-2 shadow-menu overflow-hidden leading-tight text-xs font-semibold font-mabrybold transition-colors duration-300 ease-out border-2 border-gray-800 rounded ">
                <span className="absolute inset-0 w-full h-full px-5 py-3 rounded bg-slate-100 group-hover:bg-slate-200"></span>
                {/* <span className="absolute left-0 w-22 h-22 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span> */}
                <div className="relative flex items-center space-x-1">
                  <span className="text-xs font-semibold text-blue-400">
                    Register via Github
                  </span>
                  <div className="">
                  <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-brand-github-filled"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path
                    d="M5.315 2.1c.791 -.113 1.9 .145 3.333 .966l.272 .161l.16 .1l.397 -.083a13.3 13.3 0 0 1 4.59 -.08l.456 .08l.396 .083l.161 -.1c1.385 -.84 2.487 -1.17 3.322 -1.148l.164 .008l.147 .017l.076 .014l.05 .011l.144 .047a1 1 0 0 1 .53 .514a5.2 5.2 0 0 1 .397 2.91l-.047 .267l-.046 .196l.123 .163c.574 .795 .93 1.728 1.03 2.707l.023 .295l.007 .272c0 3.855 -1.659 5.883 -4.644 6.68l-.245 .061l-.132 .029l.014 .161l.008 .157l.004 .365l-.002 .213l-.003 3.834a1 1 0 0 1 -.883 .993l-.117 .007h-6a1 1 0 0 1 -.993 -.883l-.007 -.117v-.734c-1.818 .26 -3.03 -.424 -4.11 -1.878l-.535 -.766c-.28 -.396 -.455 -.579 -.589 -.644l-.048 -.019a1 1 0 0 1 .564 -1.918c.642 .188 1.074 .568 1.57 1.239l.538 .769c.76 1.079 1.36 1.459 2.609 1.191l.001 -.678l-.018 -.168a5.03 5.03 0 0 1 -.021 -.824l.017 -.185l.019 -.12l-.108 -.024c-2.976 -.71 -4.703 -2.573 -4.875 -6.139l-.01 -.31l-.004 -.292a5.6 5.6 0 0 1 .908 -3.051l.152 -.222l.122 -.163l-.045 -.196a5.2 5.2 0 0 1 .145 -2.642l.1 -.282l.106 -.253a1 1 0 0 1 .529 -.514l.144 -.047l.154 -.03z"
                    strokeWidth="0"
                    fill="currentColor"
                  ></path>
                </svg>
                  </div>
                </div>
              </span>
              
            </Link>
            <Link href={"/login"} className="relative inline-block text-lg group">
              <span className="relative z-10 block px-3 py-2 shadow-menu overflow-hidden leading-tight text-xs font-semibold font-mabrybold text-blue-400 transition-colors duration-300 ease-out border-2 border-gray-800 rounded ">
                <span className="absolute inset-0 w-full h-full px-5 py-3 rounded bg-slate-100 group-hover:bg-slate-200"></span>
                {/* <span className="absolute left-0 w-22 h-22 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span> */}
                <div className="relative flex items-center space-x-1">
                  <span className="text-xs font-semibold text-blue-400">
                    Register via Google
                  </span>
                  <div className="w-4 ">
                    <Image src={google} alt="" />
                  </div>
                </div>
              </span>
             
            </Link>
          </div>
          <div className="flex flex-col space-y-1 items-center p-2">
            <span className="text-xs font-mabry">Already have an account?</span>
            {/* <Link href={"/login"}>
            <button className="py-2 px-3 bg-green-100 hover:bg-green-200 border-2 border-gray-800 rounded text-xs font-semibold text-blue-400 transition duration-200 shadow-lg shadow-indigo-500/50">
              Sign In
            </button>
            </Link> */}
            <Link href={"/login"} className="relative inline-block text-lg group">
              <span className="relative z-10 block px-7 py-2 button overflow-hidden leading-tight text-xs font-semibold font-mabrybold text-blue-400 transition-colors duration-300 ease-out border-2 border-gray-800 rounded ">
                <span className="absolute inset-0 w-full h-full px-5 py-3 rounded bg-green-100 group-hover:bg-green-200"></span>
                {/* <span className="absolute left-0 w-22 h-22 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span> */}
                <span className="relative">Sign In</span>
              </span>
              
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
