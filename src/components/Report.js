import React, { useRef, useEffect } from "react";
import Link from "next/link";
import Transition from "@/utils/Transition";

function Report({ modalOpen, setModalOpen }) {
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
          className="bg-white overflow-auto shadow-menu max-w-lg pb-4 w-full max-h-full rounded2 shadow-lg"
        >
          <div className="mb-4 border-b-2 border-gray-800 px-4 py-3 ">
            <p className="text-slate-800 font-mabrybold">Report an Issue</p>
            {/* <h2 className="text-xl font-bold text-white">Join our community</h2> */}
          </div>
          <div className="flex flex-col space-y-2 px-4 py-1">
            <label className="text-slate-900 font-mabrybold">
              Type of Problem
            </label>
            <div>
              <div className="flex items-center mr-4 mb-2">
                <input
                  id="radio1"
                  type="radio"
                  name="radio"
                  className="hidden"
                  checked
                />
                <label
                  for="radio1"
                  className="flex items-center cursor-pointer text-md font-mabry text-slate-900"
                >
                  <span className="w-5 h-5 inline-block mr-2 rounded-full border border-slate-500 flex-no-shrink"></span>
                  Duplicate
                </label>
              </div>
              <div className="flex items-center mr-4 mb-2">
                <input
                  id="radio2"
                  type="radio"
                  name="radio"
                  className="hidden"
                  
                />
                <label
                  for="radio2"
                  className="flex items-center cursor-pointer text-md font-mabry text-slate-900"
                >
                  <span className="w-5 h-5 inline-block mr-2 rounded-full border border-slate-500 flex-no-shrink"></span>
                  Design or Functionality Issue
                </label>
              </div>
              <div className="flex items-center mr-4 mb-2">
                <input
                  id="radio3"
                  type="radio"
                  name="radio"
                  className="hidden"
                  
                />
                <label
                  for="radio3"
                  className="flex items-center cursor-pointer text-md font-mabry text-slate-900"
                >
                  <span className="w-5 h-5 inline-block mr-2 rounded-full border border-slate-500 flex-no-shrink"></span>
                  Incorrect Content
                </label>
              </div>
              <div className="flex items-center mr-4 mb-2">
                <input
                  id="radio4"
                  type="radio"
                  name="radio"
                  className="hidden"
                  
                />
                <label
                  for="radio4"
                  className="flex items-center cursor-pointer text-md font-mabry text-slate-900"
                >
                  <span className="w-5 h-5 inline-block mr-2 rounded-full border border-slate-500 flex-no-shrink"></span>
                  Bad Image
                </label>
              </div>
              <div className="flex items-center mr-4 mb-4">
                <input
                  id="radio5"
                  type="radio"
                  name="radio"
                  className="hidden"
                  
                />
                <label
                  for="radio5"
                  className="flex items-center cursor-pointer text-md font-mabry text-slate-900"
                >
                  <span className="w-5 h-5 inline-block mr-2 rounded-full border border-slate-500 flex-no-shrink"></span>
                  Offensive or Spam
                </label>
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-1 px-4 py-1">
            <label className="text-slate-900 font-mabrybold">
              Extra detail
            </label>
            <textarea className="w-full py-3 px-3 text-sm  focus:outline-none outline-none focus:border-pink-400 border-2 border-gray-800 rounded text-gray-800 font-mabry"></textarea>
          </div>
          <div className="flex items-center justify-between px-4 py-1">
            <span className="pt-3 w-full leading-tight text-slate-900 text-sm font-mabry">
              Submit a DMCA takedown request.
            </span>
            <div className="flex w-full pt-3 justify-end">
              <Link href={""} className="relative inline-block text-lg group">
                <span className="relative button flex z-10  px-3 py-3 justify-center overflow-hidden leading-tight text-sm font-mabrybold text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-800 rounded ">
                  <span className="absolute inset-0 w-full h-full px-5 py-3 rounded bg-yellow-200 group-hover:bg-yellow-300"></span>
                  <span className="relative">Report</span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </Transition>
    </>
  );
}

export default Report;
