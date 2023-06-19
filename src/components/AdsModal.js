import React, { useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Transition from "@/utils/Transition";

import nike from "@/img/nike.jpg"

function AdsModal({ id, searchId, modalOpen, setModalOpen }) {
  // const [searchModalOpen, setSearchModalOpen] = useState(false);

  const modalContent = useRef(null);
  const searchInput = useRef(null);

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
          ref={modalContent}
          className="bg-white overflow-auto max-w-2xl w-full max-h-full rounded2 shadow-lg"
        >
          {/* Search form */}
          <section className="overflow-hidden  shadow-2xl md:grid md:grid-cols-3">
            <Image
              alt="Trainer"
              src={nike}
              className="h-32 w-full object-cover md:h-full"
            />

            <div className="p-4 text-center sm:p-6 md:col-span-2 lg:p-8">
              <p className="text-sm font-semibold uppercase tracking-widest">
                Run with the pack
              </p>

              <h2 className="mt-6 font-black uppercase">
                <span className="text-4xl font-black sm:text-5xl lg:text-6xl">
                  Get 20% off
                </span>

                <span className="mt-2 block text-sm">
                  On your next order over $50
                </span>
              </h2>

              <a
                className="mt-8 inline-block w-full bg-black py-4 text-sm font-bold uppercase tracking-widest text-white"
                href=""
              >
                Get Discount
              </a>

              <p className="mt-8 text-xs font-medium uppercase text-gray-400">
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
