import React, { useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Transition from "@/utils/Transition";

import nike from "@/img/nike.jpg"

function AdsModal({ id, modalOpen, setModalOpen }) {

  // const modalContent = useRef(null);

  // close on click outside
  // useEffect(() => {
  //   const clickHandler = ({ target }) => {
  //     if (!modalOpen || modalContent.current.contains(target)) return;
  //     setModalOpen(false);
  //   };
  //   document.addEventListener("click", clickHandler);
  //   return () => document.removeEventListener("click", clickHandler);
  // });

  return (
    <>
      {/* Modal backdrop */}
      <Transition
        className="fixed inset-0 bg-slate-800 bg-opacity-70 z-50 transition-opacity"
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
        id={id}
        className="fixed inset-0 z-50 overflow-hidden flex items-start top-1/3 mb-4 justify-center transform px-4 sm:px-6"
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
          // ref={modalContent}
          className="relative bg-white overflow-auto max-w-2xl w-full max-h-full rounded2 shadow-lg"
        >
          <div className="absolute top-1 right-1 flex justify-end">
            <div className="cursor-pointer px-1 py-1 rounded-full border border-gray-900 bg-white" onClick={() => setModalOpen(false)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 md:w-6 md:h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
          </div>
          {/* Search form */}
          <section className="overflow-hidden  shadow-2xl md:grid md:grid-cols-3">
            <Image
              alt="Trainer"
              src={nike}
              className="h-32 w-full object-cover md:h-full"
            />

            <div className="p-4 text-center sm:p-6 md:col-span-2 lg:p-8">
              <p className="text-sm font-semibold uppercase tracking-widest text-gray-900">
                Run with the pack
              </p>

              <h2 className="mt-6 font-black uppercase text-gray-900">
                <span className="text-4xl font-black sm:text-5xl lg:text-6xl">
                  Get 20% off
                </span>

                <span className="mt-2 block text-sm">
                  On your next order over $50
                </span>
              </h2>

              <a
                className="mt-8 inline-block w-full bg-black  py-4 text-sm font-bold uppercase tracking-widest text-white"
                href=""
              >
                Get Discount
              </a>

              <p className="mt-8 text-xs font-medium uppercase text-gray-600">
                Offer valid until 24th March, 2021 *
              </p>
            </div>
          </section>
        </div>
      </Transition>
    </>
  );
}

export default AdsModal;
