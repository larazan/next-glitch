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
  const [show, setShow] = useState("translate-y-0");
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (window.scrollY > 30) {
      if (window.scrollY > lastScrollY) {
        setShow("border-b border-gray-300 shadow-md");
      } else {
        setShow("shadow-sm");
      }
    } else {
      setShow("translate-y-0");
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAdsModalOpen(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <header
        className={`fixed z-30 flex h-10 md:h-14 w-full top-0 md:m-0 px-4 md:px-6 py-6 md:py-3  items-center justify-between bg-[#f8f4f2] border-b2 shadow2 ${show} `}
      >
        <div className="flex w-full md:w-3/12 justify-between space-x-4">
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
          </div>
          {/* <div className="relative hidden md:flex items-center w-full shadow-menu rounded-full h-9 border-2 border-gray-800 focus-within:shadow-lg bg-white overflow-hidden">
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
          </div> */}
        </div>
        <div className="w-6/12">
          <div className="relative hidden md:flex items-center w-full shadow-menu rounded-full h-9 border-2 border-gray-800 focus-within:shadow-lg bg-white overflow-hidden">
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
        <div className="w-3/12 flex flex-row space-x-3 justify-end">
          <div className="flex space-x-2 items-center">
            <div className="flex md:hidden">
              <button
                className="relative flex shadow-menu items-center justify-center rounded-full border-2 text-gray-900 border-gray-800 px-1 py-1 bg-white opacity-90 hover:opacity-100"
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

            <MiniCart />
            <Menu />
            <UserMenu />
            {/* <Link href={"/login"} className="hidden md:flex">
              <button className="flex button bg-mint items-center justify-center rounded border-2 border-gray-800 px-4 py-1.5  bg-green-100 opacity-90 hover:opacity-100">
                <span className="text-xs font-semibold font-mabrybold">
                  Masuk
                </span>
              </button>
            </Link> */}
            {/* <Link href={"/register"} className="hidden md:flex">
              <button className="flex button items-center justify-center rounded border-2 border-gray-800 px-4 py-1.5 bg-yellow-100 opacity-90 hover:opacity-100">
                <span className="text-xs font-semibold font-mabrybold">
                  Daftar
                </span>
              </button>
            </Link> */}

            {/* <Notification /> */}

          </div>
        </div>
      </header>
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
    </>
  );
}
