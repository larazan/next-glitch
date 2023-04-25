import { Logo } from '@/components/Logo'

export default function Footer() {
  return (
    <>
    <footer className="bg-[#1f364d] py-2 px-4 w-full">
        <div className="max-w-10xl mx-auto">
          <div className="flex justify-center mt-10 w-full md:w-auto">
            <div className="flex flex-col space-y-4">
              <div className="text-center w-full mb-2 justify-center">
                <Logo className="w-full h-8 text-red-600" />
              </div>
              <div className="mb-4 sm:basis-1/3 sm:mb-0 lg:basis-2/3">
                <div className="flex flex-col text-white text-[13px] font-semibold">
                  <ul className="flex flex-wrap justify-center pl-0 mb-3 list-inside lg:justify-start">
                    <li className=" mr-2 before:mr-2 list-none before:text-franklin before:hidden">
                      <a
                        rel="nofollow"
                        className="hover:shadow-underline-inherit"
                        href="https://www.voxmedia.com/legal/terms-of-use"
                      >
                        Terms of Use
                      </a>
                    </li>
                    <li className="before:inline-block mr-2 before:mr-2 list-none before:text-franklin before:content-['/']">
                      <a
                        rel="nofollow"
                        className="hover:shadow-underline-inherit"
                        href="https://www.voxmedia.com/legal/privacy-notice"
                      >
                        Privacy Notice
                      </a>
                    </li>
                    <li className="before:inline-block mr-2 before:mr-2 list-none before:text-franklin before:content-['/']">
                      <a
                        rel="nofollow"
                        className="hover:shadow-underline-inherit"
                        href="https://www.voxmedia.com/legal/cookie-policy"
                      >
                        Cookie Policy
                      </a>
                    </li>
                    <li className="before:inline-block mr-2 before:mr-2 list-none before:text-franklin before:content-['/']">
                      <a
                        rel="nofollow"
                        className="hover:shadow-underline-inherit"
                        href="/contact#donotsell"
                      >
                        Do Not Sell My Personal Info
                      </a>
                    </li>
                    <li className="before:inline-block mr-2 before:mr-2 list-none before:text-franklin before:content-['/']">
                      <a
                        rel="nofollow"
                        className="hover:shadow-underline-inherit"
                        href="https://www.voxmedia.com/pages/licensing"
                      >
                        Licensing FAQ
                      </a>
                    </li>
                    <li className="before:inline-block mr-2 before:mr-2 list-none before:text-franklin before:content-['/']">
                      <a
                        rel="nofollow"
                        className="hover:shadow-underline-inherit"
                        href="https://www.voxmedia.com/legal/accessibility"
                      >
                        Accessibility
                      </a>
                    </li>
                    <li className="before:inline-block mr-2 before:mr-2 list-none before:text-franklin before:content-['/']">
                      <a
                        rel="nofollow"
                        className="hover:shadow-underline-inherit"
                        href="https://status.voxmedia.com"
                      >
                        Platform Status
                      </a>
                    </li>
                  </ul>
                  <ul className="flex flex-wrap justify-center pl-0 mb-1 list-inside lg:justify-start">
                    <li className=" mr-2 before:mr-2 list-none before:text-pernod before:hidden">
                      <a
                        rel="nofollow"
                        className="hover:shadow-underline-inherit"
                        href="/contact-the-verge"
                      >
                        Contact
                      </a>
                    </li>
                    <li className="before:inline-block mr-2 before:mr-2 list-none before:text-pernod before:content-['/']">
                      <a
                        rel="nofollow"
                        className="hover:shadow-underline-inherit"
                        href="/a/tip-us-secure-contact-email"
                      >
                        Tip Us
                      </a>
                    </li>
                    <li className="before:inline-block mr-2 before:mr-2 list-none before:text-pernod before:content-['/']">
                      <a
                        rel="nofollow"
                        className="hover:shadow-underline-inherit"
                        href="/community-guidelines"
                      >
                        Community Guidelines
                      </a>
                    </li>
                    <li className="before:inline-block mr-2 before:mr-2 list-none before:text-pernod before:content-['/']">
                      <a
                        rel="nofollow"
                        className="hover:shadow-underline-inherit"
                        href="/about-the-verge"
                      >
                        About
                      </a>
                    </li>
                    <li className="before:inline-block mr-2 before:mr-2 list-none before:text-pernod before:content-['/']">
                      <a
                        rel="nofollow"
                        className="hover:shadow-underline-inherit"
                        href="/ethics-statement"
                      >
                        Ethics Statement
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="lg:basis-1/3 text-[13px] text-white ">
                <ul className="flex flex-wrap justify-center mb-2 list-inside lg:justify-start">
                  <li className=" mr-2 before:mr-2 leading-5 list-none before:text-hot-brick before:hidden">
                    <a
                      rel="nofollow"
                      className="hover:shadow-underline-inherit"
                      href="https://www.voxmedia.com/vox-advertising"
                    >
                      Advertise with us
                    </a>
                  </li>
                  <li className="before:inline-block mr-2 before:mr-2 leading-5 list-none before:text-hot-brick before:content-['/']">
                    <a
                      rel="nofollow"
                      className="hover:shadow-underline-inherit"
                      href="https://jobs.voxmedia.com"
                    >
                      Jobs @ Vox Media
                    </a>
                  </li>
                </ul>
                <p className="flex justify-center tracking-12 text-white mb-10">
                  © 2022{" "}
                  <a rel="nofollow" href="https://www.voxmedia.com">
                    Vox Media
                  </a>
                  , LLC. All Rights Reserved
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="max-w-10xl mx-auto ">
          <div className="flex justify-center pt-8 w-full md:w-auto">
            <div className="flex flex-col space-y-4">
              <div className="text-center text-xs text-[#9cb3c9] font-base">
                * Copyright © 2022 Insider Inc. All rights reserved.
                Registration on or use of this site constitutes acceptance of
                our
                <a href="" className=" hover:border-b hover:border-[#9cb3c9]">
                  {" "}
                  Terms of Service
                </a>
                ,
                <a href="" className="hover:border-b hover:border-[#9cb3c9]">
                  {" "}
                  Privacy Policy{" "}
                </a>
                and
                <a href="" className="hover:border-b hover:border-[#9cb3c9]">
                  {" "}
                  Cookies Policy
                </a>
                .
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-10xl mx-auto pb-4">
          <div className="flex justify-center py-4 w-full md:w-auto">
            <div className="flex">
              <div className="flex inline-flex space-x-0 text-[#9cb3c9]">
                <div className="px-2 border-r text-sm ">
                  <a href="" className=" hover:border-b hover:border-[#9cb3c9]">
                    Contact Us
                  </a>
                </div>
                <div className="px-2 border-r text-xs font-base">
                  <a href="" className=" hover:border-b hover:border-[#9cb3c9]">
                    Sitemap
                  </a>
                </div>
                <div className="px-2 border-r text-xs font-base">
                  <a href="" className=" hover:border-b hover:border-[#9cb3c9]">
                    Disclaimer
                  </a>
                </div>
                <div className="px-2 border-r text-xs font-base">
                  <a href="" className=" hover:border-b hover:border-[#9cb3c9]">
                    Accessibility
                  </a>
                </div>
                <div className="px-2 border-r text-xs font-base">
                  <a href="" className=" hover:border-b hover:border-[#9cb3c9]">
                    Advertising
                  </a>
                </div>
                <div className="px-2 border-r text-xs font-base">
                  <a href="" className=" hover:border-b hover:border-[#9cb3c9]">
                    Commerce
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </footer>
    </>
  )
}
