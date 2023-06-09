import { useEffect, useState } from "react";

export default function CookieConfirm() {
  const [isShow, setIsShow] = useState(true);

  const handleClick = () => {
    setIsShow(!isShow);
  };

  return (
    <>
    {isShow ? 
      <section
        className="w-full z-30 p-5 lg:px-24 fixed bottom-0 bg-[#ffff00]"
        x-show="showCookieBanner"
      >
        <div className="md:flex items-center -mx-3">
          <div className="md:flex-1 px-3 mb-5 md:mb-0">
            <p className="text-center md:text-left text-slate-900 text-sm leading-tight md:pr-12 font-mabrybold">
              🔥 This website uses cookies to ensure you get the best experience
              on our website.
            </p>
          </div>
          <div className="px-3 text-center">
            <button
              id="btn"
              className="py-2 px-3 font-mabry text-sm hover:font-mabrybold underline"
            >
              Decline
            </button>
            <button
              id="btn"
              className="py-2 px-3 button bg-ijo font-mabrybold text-sm"
              onClick={handleClick}
            >
              Allow cookies
            </button>
          </div>
        </div>
      </section>
       :
       <></>
     }
    </>
  );
}
