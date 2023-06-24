import Link from "next/link";
import Router from "next/router";
import { useEffect, useState } from "react";
import { Logo } from "@/components/Logo";
import Menu from "./Menu";
import UserMenu from "./UserMenu";
import MiniCart from "./MiniCart";
import Notification from "./Notification";
import AdsModal from "./AdsModal";
import SearchModal from "./SearchModal";

export default function Header() {
  const [adsModalOpen, setAdsModalOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAdsModalOpen(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <header className="fixed z-20 hidden md:flex h-10 md:h-14 w-full top-0 md:m-0 px-6 md:px-6 py-6 md:py-3  items-center justify-between bg-pink-200 border-b2 shadow2">
        <div className="flex w-full md:w-3/5 justify-between space-x-4">
          <div className="flex justify-between w-full md:w-[100px]">
            {/* <button className="h-8 w-8 md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </button> */}
            <div className="flex justify-center items-center">
              <Link href={"/"}>
                <Logo className="h-6 text-red-600" />
              </Link>
            </div>
            <button className="h-8 w-8 md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                />
              </svg>
            </button>
            <button className="h-8 w-8 md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </button>

            <button className="h-8 w-8 md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
            <button className="h-8 w-8 md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
          <div className="relative flex items-center w-full shadow-menu rounded-full h-9 border-2 border-gray-800 focus-within:shadow-lg bg-white overflow-hidden">
            <div className="grid place-items-center h-full w-12 text-gray-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>

            <input
              className=" h-full w-full outline-none text-sm font-mabry text-gray-800 pr-2"
              type="text"
              id="search"
              placeholder="Search something.."
            />
          </div>
        </div>
        <div className="flex flex-row space-x-3">
          <div className="flex space-x-2 items-center">
            <Menu />
            <div className="flex md:hidden">
              <button
                className="relative flex shadow-menu items-center justify-center rounded-full border-2 border-gray-800 px-1 py-1 bg-white opacity-90 hover:opacity-100"
                onClick={(e) => {
                  e.stopPropagation();
                  setSearchModalOpen(true);
                }}
                aria-controls="search-modal"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 md:w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={3}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
            <SearchModal
              id="search-modal"
              searchId="search"
              modalOpen={searchModalOpen}
              setModalOpen={setSearchModalOpen}
            />
            <AdsModal
              id="ads-modal"
              modalOpen={adsModalOpen}
              setModalOpen={setAdsModalOpen}
            />
            <MiniCart />
            <Link href={"/login"}>
              <button className="flex button bg-mint items-center justify-center rounded border-2 border-gray-800 px-4 py-1.5 space-x-2 bg-green-100 opacity-90 hover:opacity-100">
                <span className="text-xs font-semibold font-mabrybold">
                  Masuk
                </span>
              </button>
            </Link>
            <Link href={"/register"}>
              <button className="flex button items-center justify-center rounded border-2 border-gray-800 px-4 py-1.5 space-x-2 bg-yellow-100 opacity-90 hover:opacity-100">
                <span className="text-xs font-semibold font-mabrybold">
                  Daftar
                </span>
              </button>
            </Link>
            
            {/* <Notification /> */}
            
            {/* <UserMenu /> */}
          </div>
        </div>
      </header>
     
    </>
  );
}
