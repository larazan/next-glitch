import React from "react";
import { Logo } from "@/components/Logo";
import Link from "next/link";
import Image from "next/image";

import google from "@/img/google.png";

export default function Register() {
  return (
    <>
      <div className="flex min-h-screen">
        <div className="flex flex-row w-full">
          <div className="hidden lg:flex flex-col justify-between bg-[#5cd68d] lg:p-8 xl:p-12 lg:max-w-sm xl:max-w-lg" 
          >
            <div className="flex items-center justify-start space-x-3">
              <span className="bg-black rounded-full w-8 h-8"></span>
              <a href="#" className="font-medium text-xl">
                Brand
              </a>
            </div>
            <div className="space-y-8">
              {/* <h1 className="lg:text-3xl xl:text-5xl xl:leading-snug font-extrabold ">
                Get benefits with being member
              </h1> */}
              <h1 className="lg:text-3xl xl:text-4xl md:leading-tight tracking-1 font-extrabold ">
              Find something to watch on your subscribed streaming services & track of your favourite movies and TV shows
              </h1>
           <div className='space-y-2'>
              <p className="text-lg font-semibold">Already have an account?</p>
              <Link to={"/login"} className="inline-block flex-none px-4 py-3 border-2 rounded-lg font-medium border-black bg-black text-white">
                Signin here
              </Link>
              </div>
            </div>
            <p className="font-medium">© 2022 Company</p>
          </div>

          <div className="flex flex-1 flex-col items-center justify-center px-10 relative">
            <div className="flex lg:hidden justify-between items-center w-full py-4">
              <div className="flex items-center justify-start space-x-3">
                <span className="bg-black rounded-full w-6 h-6"></span>
                <a href="#" className="font-medium text-lg">
                  Brand
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <span>Already have account? </span>
                <Link to="/login" className="underline font-medium text-[#070eff]">
                  Signin now
                </Link>
              </div>
            </div>

            <div className="flex flex-1 flex-col  justify-center space-y-5 max-w-md">
              <div className="flex flex-col space-y-2 text-center">
                <h2 className="text-3xl md:text-4xl font-bold capitalize">
                  Sign up
                </h2>
                <p className="text-md md:text-xl">
                Signing up for an account is free and easy. Fill out the form below to get started.
                </p>
              </div>
              <div className="flex flex-col max-w-md space-y-5">
                <input
                  type="text"
                  placeholder="Username"
                  className="flex px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal"
                />
                <input
                  type="text"
                  placeholder="Password"
                  className="flex px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal"
                />
                <input
                  type="text"
                  placeholder="Confirm Password"
                  className="flex px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal"
                />
                <input
                  type="text"
                  placeholder="Email"
                  className="flex px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal"
                />
                <button className="flex items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium border-black bg-black text-white">
                  Submit
                </button>
                <div className="flex justify-center items-center">
                  <span className="w-full border border-black"></span>
                  <span className="px-4">Or</span>
                  <span className="w-full border border-black"></span>
                </div>
                <button className="flex items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium border-black relative">
                  <span className="absolute left-4">
                    <svg
                      width="24px"
                      height="24px"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      // xmlns:xlink="http://www.w3.org/1999/xlink"
                    >
                      <path
                        fill="#EA4335 "
                        d="M5.26620003,9.76452941 C6.19878754,6.93863203 8.85444915,4.90909091 12,4.90909091 C13.6909091,4.90909091 15.2181818,5.50909091 16.4181818,6.49090909 L19.9090909,3 C17.7818182,1.14545455 15.0545455,0 12,0 C7.27006974,0 3.1977497,2.69829785 1.23999023,6.65002441 L5.26620003,9.76452941 Z"
                      />
                      <path
                        fill="#34A853"
                        d="M16.0407269,18.0125889 C14.9509167,18.7163016 13.5660892,19.0909091 12,19.0909091 C8.86648613,19.0909091 6.21911939,17.076871 5.27698177,14.2678769 L1.23746264,17.3349879 C3.19279051,21.2936293 7.26500293,24 12,24 C14.9328362,24 17.7353462,22.9573905 19.834192,20.9995801 L16.0407269,18.0125889 Z"
                      />
                      <path
                        fill="#4A90E2"
                        d="M19.834192,20.9995801 C22.0291676,18.9520994 23.4545455,15.903663 23.4545455,12 C23.4545455,11.2909091 23.3454545,10.5272727 23.1818182,9.81818182 L12,9.81818182 L12,14.4545455 L18.4363636,14.4545455 C18.1187732,16.013626 17.2662994,17.2212117 16.0407269,18.0125889 L19.834192,20.9995801 Z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M5.27698177,14.2678769 C5.03832634,13.556323 4.90909091,12.7937589 4.90909091,12 C4.90909091,11.2182781 5.03443647,10.4668121 5.26620003,9.76452941 L1.23999023,6.65002441 C0.43658717,8.26043162 0,10.0753848 0,12 C0,13.9195484 0.444780743,15.7301709 1.23746264,17.3349879 L5.27698177,14.2678769 Z"
                      />
                    </svg>
                  </span>
                  <span>Sign in with Google</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
