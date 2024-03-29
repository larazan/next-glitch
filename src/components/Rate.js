import React, { useRef, useEffect } from "react";
import Link from "next/link";
import Transition from "@/utils/Transition";

function Rate({ modalOpen, setModalOpen }) {
  const modalContent = useRef(null);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!modalOpen || modalContent.current.contains(target)) return;
      setModalOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  return (
    <>
      {/* Modal backdrop */}
      <Transition
        className="fixed inset-0 bg-slate-900 bg-opacity-70 z-50 transition-opacity"
        show={modalOpen}
        enter="transition ease-out duration-200"
        enterStart="opacity-0"
        enterEnd="opacity-100"
        leave="transition ease-out duration-100"
        leaveStart="opacity-100"
        leaveEnd="opacity-0"
        aria-hidden="true"
      />
      {/* Modal dialog */}
      <Transition
        className="fixed inset-0 z-50 overflow-hidden flex items-start top-1/4 mb-4 justify-center transform px-4 sm:px-6"
        role="dialog"
        aria-modal="true"
        show={modalOpen}
        enter="transition ease-in-out duration-200"
        enterStart="opacity-0 translate-y-4"
        enterEnd="opacity-100 translate-y-0"
        leave="transition ease-in-out duration-200"
        leaveStart="opacity-100 translate-y-0"
        leaveEnd="opacity-0 translate-y-4"
      >
        <div
          ref={modalContent}
          className="relative bg-white overflow-auto shadow-menu max-w-lg p-4 w-full max-h-full rounded-lg shadow-lg"
        >
          <div className="absolute top-1 right-1 flex justify-end">
            <div className="cursor-pointer px-1 py-1 rounded-full border border-gray-900 bg-white" onClick={() => setModalOpen(false)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 md:w-6 md:h-6 text-gray-900"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
          </div>
         <div className="mt-2 text-center">
            <h3 className="text-xl font-semibold leading-6 text-blue-600" id="modal-headline">Rate your experience</h3>
            <div className="mt-2">
                <p className="px-3 text-sm leading-5 text-gray-600">
                    We would love to know what you think of our service! Please take a moment to rate us.
                </p>
            </div>
            {/* <div className="flex flex-wrap items-center justify-center mt-2">
                <div className="flex-initial">
                    <svg className="w-12 text-gray-600 transition-all duration-300 ease-out transform fill-current stroke-current hover:text-blue-600 hover:scale-110"
                        viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
                        <title>Very Disappointed</title>
                        <g id="line">
                            <circle cx="36" cy="36" r="23" fill="none" stroke-miterlimit="10" strokeWidth="2" />
                            <path fill="none" strokeLinecap="round" strokeLinejoin="round" stroke-miterlimit="10"
                                strokeWidth="2"
                                d="M28,46c1.5805-2.5575,4.9043-4.1349,8.4211-4.0038C39.6499,42.1166,42.5622,43.6595,44,46" />
                            <path
                                d="M30,32.9252c0,1.6567-1.3448,3-3,3c-1.6553,0-3-1.3433-3-3c0-1.6553,1.3447-3,3-3C28.6552,29.9252,30,31.27,30,32.9252" />
                            <path
                                d="M48,32.9252c0,1.6567-1.3447,3-3,3s-3-1.3433-3-3c0-1.6553,1.3447-3,3-3S48,31.27,48,32.9252" />
                            <line x1="23" x2="30" y1="24" y2="28" fill="none" strokeLinecap="round"
                                strokeLinejoin="round" stroke-miterlimit="10" strokeWidth="2" />
                            <line x1="49" x2="42" y1="24" y2="28" fill="none" strokeLinecap="round"
                                strokeLinejoin="round" stroke-miterlimit="10" strokeWidth="2" />
                        </g>
                    </svg>
                </div>
                <div className="flex-initial">
                    <svg className="w-12 text-gray-600 transition-all duration-300 ease-out transform fill-current stroke-current hover:text-blue-600 hover:scale-110"
                        viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
                        <title>Disappointed</title>
                        <g id="line">
                            <circle cx="36" cy="36" r="23" fill="none" stroke-miterlimit="10" strokeWidth="2" />
                            <path
                                d="M30,31c0,1.6568-1.3448,3-3,3c-1.6553,0-3-1.3433-3-3c0-1.6552,1.3447-3,3-3C28.6552,28,30,29.3448,30,31" />
                            <path
                                d="M48,31c0,1.6568-1.3447,3-3,3s-3-1.3433-3-3c0-1.6552,1.3447-3,3-3S48,29.3448,48,31" />
                            <path fill="none" strokeLinecap="round" strokeLinejoin="round" stroke-miterlimit="10"
                                strokeWidth="2"
                                d="M28,46c1.5805-2.5575,4.9043-4.1349,8.4211-4.0038C39.6499,42.1166,42.5622,43.6595,44,46" />
                        </g>
                    </svg>

                </div>
                <div className="flex-initial">
                    <svg className="w-12 text-gray-600 transition-all duration-300 ease-out transform fill-current stroke-current hover:text-blue-600 hover:scale-110"
                        viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
                        <title>Neutral</title>
                        <g id="line">
                            <circle cx="36" cy="36" r="23" fill="none" stroke-miterlimit="10" strokeWidth="2" />
                            <line x1="27" x2="45" y1="43" y2="43" fill="none" strokeLinecap="round"
                                strokeLinejoin="round" stroke-miterlimit="10" strokeWidth="2" />
                            <path
                                d="M30,31c0,1.6568-1.3448,3-3,3c-1.6553,0-3-1.3433-3-3c0-1.6552,1.3447-3,3-3C28.6552,28,30,29.3448,30,31" />
                            <path
                                d="M48,31c0,1.6568-1.3447,3-3,3s-3-1.3433-3-3c0-1.6552,1.3447-3,3-3S48,29.3448,48,31" />
                        </g>
                    </svg>
                </div>
                <div className="flex-initial">
                    <svg className="w-12 text-gray-600 transition-all duration-300 ease-out transform fill-current stroke-current hover:text-blue-600 hover:scale-110"
                        viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
                        <title>Happy</title>
                        <g id="line">
                            <circle cx="36" cy="36" r="23" fill="none" strokeLinecap="round" strokeLinejoin="round"
                                strokeWidth="2" />
                            <path fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M45.8147,45.2268a15.4294,15.4294,0,0,1-19.6294,0" />
                            <path fill="none" strokeLinecap="round" stroke-miterlimit="10" strokeWidth="2"
                                d="M31.6941,33.4036a4.7262,4.7262,0,0,0-8.6382,0" />
                            <path fill="none" strokeLinecap="round" stroke-miterlimit="10" strokeWidth="2"
                                d="M48.9441,33.4036a4.7262,4.7262,0,0,0-8.6382,0" />
                        </g>
                    </svg>

                </div>
                <div className="flex-initial">
                    <svg className="w-12 text-gray-600 transition-all duration-300 ease-out transform fill-current stroke-current hover:text-blue-600 hover:scale-110"
                        viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
                        <title>Very Happy</title>
                        <g id="line">
                            <circle cx="36" cy="36" r="23" fill="none" strokeLinecap="round" strokeLinejoin="round"
                                strokeWidth="2" />
                            <path fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M50.595,41.64a11.5554,11.5554,0,0,1-.87,4.49c-12.49,3.03-25.43.34-27.49-.13a11.4347,11.4347,0,0,1-.83-4.36h.11s14.8,3.59,28.89.07Z" />
                            <path fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M49.7251,46.13c-1.79,4.27-6.35,7.23-13.69,7.23-7.41,0-12.03-3.03-13.8-7.36C24.2951,46.47,37.235,49.16,49.7251,46.13Z" />
                            <path fill="none" strokeLinecap="round" stroke-miterlimit="10" strokeWidth="2"
                                d="M31.6941,32.4036a4.7262,4.7262,0,0,0-8.6382,0" />
                            <path fill="none" strokeLinecap="round" stroke-miterlimit="10" strokeWidth="2"
                                d="M48.9441,32.4036a4.7262,4.7262,0,0,0-8.6382,0" />
                        </g>
                    </svg>

                </div>
            </div> */}

<div className="flex flex-wrap items-center justify-center mt-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10 text-[#f15025]"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10 text-[#f15025]"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10 text-[#f15025]"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10 text-[#f15025]"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10 text-[#f15025]"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
        </div>
        <div className="px-4 py-3 sm:px-6 sm:flex sm:justify-center sm:flex-row-reverse">
            <span className="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
                <button type="button"
                    className="inline-flex justify-center w-full px-4 py-2 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-500 focus:outline-none focus:border-blue-900 focus:shadow-outline-blue sm:text-sm sm:leading-5"
                    >
                    Submit Rating
                </button>
            </span>
            <span className="flex w-full mt-3 rounded-md shadow-sm sm:mt-0 sm:w-auto">
                <button type="button"
                    className="inline-flex justify-center w-full px-4 py-2 text-base font-medium leading-6 text-gray-600 transition duration-150 ease-in-out bg-white border border-gray-600 rounded-md shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-600 focus:shadow-outline-blue sm:text-sm sm:leading-5"
                    >
                    No, Thanks
                </button>
            </span>
        </div>
        </div>
      </Transition>
    </>
  );
}

export default Rate;
