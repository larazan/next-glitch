import React, { useState, useRef, useEffect }  from 'react'
import Link from 'next/link'
import Image from 'next/image';
import Transition from '@/utils/Transition'

import ant from "@/img/products/ant.jpg";
import apes from "@/img/products/apes.jpg";

export default function MiniCart() {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const trigger = useRef(null);
    const dropdown = useRef(null);
  
    // close on click outside
    useEffect(() => {
      const clickHandler = ({ target }) => {
        if (
          !dropdownOpen ||
          dropdown.current.contains(target) ||
          trigger.current.contains(target)
        )
          return;
        setDropdownOpen(false);
      };
      document.addEventListener("click", clickHandler);
      return () => document.removeEventListener("click", clickHandler);
    });
  
    // close if the esc key is pressed
    useEffect(() => {
      const keyHandler = ({ keyCode }) => {
        if (!dropdownOpen || keyCode !== 27) return;
        setDropdownOpen(false);
      };
      document.addEventListener("keydown", keyHandler);
      return () => document.removeEventListener("keydown", keyHandler);
    });
  
    return (
      <div className="relative inline-flex ml-3 z-20">
        <button
          ref={trigger}
          className="relative flex shadow-menu items-center justify-center rounded-full border-2 border-gray-800 px-1 py-1 text-gray-900 bg-[#77d87e] opacity-90 hover:opacity-100"
          aria-haspopup="true"
          onClick={() => setDropdownOpen(!dropdownOpen)}
          aria-expanded={dropdownOpen}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
  <path fillRule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z" clipRule="evenodd" />
</svg>

          <div className="absolute top-0 -right-1 rounded-full px-1 font-mabry text-[10px] text-white bg-blue-700">
            0
          </div>
        </button>

        <Transition
          className="origin-top-right shadow-menu  absolute top-full right-0 -mr-2 md:-mr-16 sm:mr-0 min-w-80 w-64 bg-white border-2 border-gray-600 py-1.5 rounded shadow-lg overflow-hidden mt-2 md:mt-1"
          show={dropdownOpen}
          enter="transition ease-out duration-200 transform"
          enterStart="opacity-0 -translate-y-2"
          enterEnd="opacity-100 translate-y-0"
          leave="transition ease-out duration-200"
          leaveStart="opacity-100"
          leaveEnd="opacity-0"
        >
          <div
            ref={dropdown}
            onFocus={() => setDropdownOpen(true)}
            onBlur={() => setDropdownOpen(false)}
          >
            <div className="text-xs font-semibold font-mabrybold text-slate-400 uppercase pt-1.5 pb-1 md:pb-2 px-4">
              Cart
            </div>
            <ul>
              <li className="">
                <Link
                  className="block py-4 px-4 hover:bg-blue-200"
                  to="#0"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  href={"/news"}
                >
                  <div className="flex justify-between text-gray-900">
                    <div className="flex w-3/5 space-x-2">
                      <div className="h-14 w-14 bg-green-200"></div>
                      <div className="flex flex-col">
                        <span className="font-mabrybold capitalize text-xs leading-tight">
                          micro backpack
                        </span>
                        <span className="text-xs font-mabry">brand</span>
                        <span className="text-xs font-mabry">L</span>
                      </div>
                    </div>
                    <div className="flex w-2/3 justify-end">
                      <span className="font-mabrybold text-gray-900 text-xs">Rp. 30.000</span>
                    </div>
                  </div>
                </Link>
              </li>
              <li className="">
                <div className="px-5 md:px-7 pt-0 pb-2 flex justify-center flex-col items-center">
                  <svg width="120" height="120" viewBox="0 0 180 309.722">
                    <g
                      id="no_cart_in_bag"
                      data-name="no cart in bag"
                      transform="translate(-988 -7673)"
                    >
                      <g
                        id="no_cart"
                        data-name="no cart"
                        transform="translate(988 7673)"
                      >
                        <g
                          id="Group_5970"
                          data-name="Group 5970"
                          transform="translate(0 0)"
                        >
                          <g
                            id="Group_5967"
                            data-name="Group 5967"
                            transform="translate(17.408 92.119)"
                          >
                            <path
                              id="Path_17743"
                              data-name="Path 17743"
                              d="M405.506,794.581l63.621-36.762L418.2,724.274Z"
                              transform="translate(-323.428 -576.978)"
                              fill="#ba8064"
                            ></path>
                            <path
                              id="Path_17744"
                              data-name="Path 17744"
                              d="M135.711,140.727l32.918-.12,1.287-20.225,79.451,45.843-34.42,1.084v19.165Z"
                              transform="translate(-118.988 -119.373)"
                              fill="#dba480"
                            ></path>
                            <path
                              id="Path_17745"
                              data-name="Path 17745"
                              d="M314.4,206.341,272,124.761l-2.279,22.008,1.4,59.572Z"
                              transform="translate(-220.537 -122.691)"
                              fill="#460100"
                              opacity="0.1"
                            ></path>
                            <path
                              id="Path_17746"
                              data-name="Path 17746"
                              d="M141.237,253.056l-10.26-47.388,34.59-.126v37.243Z"
                              transform="translate(-115.402 -183.904)"
                              fill="#995b47"
                            ></path>
                            <path
                              id="Path_17747"
                              data-name="Path 17747"
                              d="M511.029,445.295l-49.136-22.179L460.8,385.489l1.089-72.515,35.954-1.133Z"
                              transform="translate(-365.33 -264.454)"
                              fill="#a96e56"
                            ></path>
                            <path
                              id="Path_17748"
                              data-name="Path 17748"
                              d="M148.755,398.756l9.58-70.307,4.9-79.149L81.161,201.911,66.677,351.368Z"
                              transform="translate(-66.677 -181.153)"
                              fill="#dba480"
                            ></path>
                            <path
                              id="Path_17749"
                              data-name="Path 17749"
                              d="M349.459,429.379c-.415,1.942-2.182,2.6-3.948,1.46a5.753,5.753,0,0,1-2.446-5.572c.414-1.942,2.182-2.6,3.948-1.46A5.753,5.753,0,0,1,349.459,429.379Z"
                              transform="translate(-276.046 -348.874)"
                              fill="#67251d"
                            ></path>
                            <path
                              id="Path_17750"
                              data-name="Path 17750"
                              d="M209.819,348.753c-.415,1.942-2.182,2.6-3.948,1.46a5.753,5.753,0,0,1-2.446-5.572c.415-1.942,2.182-2.6,3.948-1.46A5.753,5.753,0,0,1,209.819,348.753Z"
                              transform="translate(-170.233 -287.779)"
                              fill="#67251d"
                            ></path>
                            <g
                              id="Group_5965"
                              data-name="Group 5965"
                              transform="translate(31.503 60.166)"
                              opacity="0.2"
                            >
                              <path
                                id="Path_17751"
                                data-name="Path 17751"
                                d="M219.35,441.507a16.861,16.861,0,0,1-8.439-2.272A28.35,28.35,0,0,1,196.858,412l4.383-45.226a2.414,2.414,0,0,1,4.806.467l-4.383,45.226a23.483,23.483,0,0,0,11.608,22.554,12.055,12.055,0,0,0,18.081-9.247l3.819-39.41a2.414,2.414,0,0,1,4.806.467l-3.819,39.41a16.912,16.912,0,0,1-16.809,15.266Z"
                                transform="translate(-196.727 -364.591)"
                                fill="#460100"
                              ></path>
                            </g>
                            <path
                              id="Path_17752"
                              data-name="Path 17752"
                              d="M162.373,116.218,161.06,136.85l-34.59.126,82.078,47.388V164.738l35.954-1.132Zm44.968,47.351v18.7l-76.395-44.106,31.247-.113,1.261-19.819,76.774,44.3Z"
                              transform="translate(-111.986 -116.218)"
                              fill="#fcc89d"
                            ></path>
                            <g
                              id="Group_5966"
                              data-name="Group 5966"
                              transform="translate(29.24 57.45)"
                            >
                              <path
                                id="Path_17753"
                                data-name="Path 17753"
                                d="M210.007,430.3a16.864,16.864,0,0,1-8.438-2.271,28.35,28.35,0,0,1-14.054-27.235l4.383-45.226a2.414,2.414,0,0,1,4.806.467l-4.383,45.226a23.483,23.483,0,0,0,11.608,22.554,12.055,12.055,0,0,0,18.081-9.247l3.819-39.41a2.414,2.414,0,0,1,4.806.467l-3.819,39.41A16.912,16.912,0,0,1,210.007,430.3Z"
                                transform="translate(-187.384 -353.38)"
                                fill="#995b47"
                              ></path>
                            </g>
                            <path
                              id="Path_17754"
                              data-name="Path 17754"
                              d="M405.506,546.991,419.99,488.05V397.534Z"
                              transform="translate(-323.428 -329.388)"
                              fill="#995b47"
                            ></path>
                          </g>
                          <g
                            id="Group_5968"
                            data-name="Group 5968"
                            transform="translate(0 0)"
                          >
                            <path
                              id="Path_17755"
                              data-name="Path 17755"
                              d="M394.573,120.6c-.142-.5.244-.855.5-1.088a1.4,1.4,0,0,0,.271-.293,0,0,0,0,0,0,0,1.39,1.39,0,0,0-.384-.107c-.34-.065-.853-.162-1-.665s.244-.855.5-1.088a1.39,1.39,0,0,0,.271-.293,0,0,0,0,0,0,0,1.4,1.4,0,0,0-.384-.107c-.34-.064-.853-.162-1-.664s.244-.855.5-1.088l.009-.008a.9.9,0,0,0,.259-.482.391.391,0,0,1,.276-.292.41.41,0,0,1,.5.316,1.122,1.122,0,0,1-.51,1.046,1.4,1.4,0,0,0-.271.292,0,0,0,0,0,0,0,1.4,1.4,0,0,0,.384.107c.34.065.853.162,1,.665s-.244.855-.5,1.088a1.4,1.4,0,0,0-.271.293,0,0,0,0,0,0,0,1.391,1.391,0,0,0,.384.107c.34.065.853.162,1,.665s-.244.855-.5,1.088a1.257,1.257,0,0,0-.273.3,0,0,0,0,0,0,0,1.641,1.641,0,0,0,.387.1c.331.063.826.157.983.625a.416.416,0,0,1-.21.507.392.392,0,0,1-.456-.109.789.789,0,0,0-.464-.253h0C395.229,121.2,394.716,121.1,394.573,120.6Z"
                              transform="translate(-349.075 -37.518)"
                              fill="#212121"
                              opacity="0.3"
                            ></path>
                            <path
                              id="Path_17765"
                              data-name="Path 17765"
                              d="M395.468,120.6c.142-.5-.244-.855-.5-1.088a1.4,1.4,0,0,1-.271-.293,0,0,0,0,1,0,0,1.39,1.39,0,0,1,.384-.107c.34-.065.853-.162,1-.665s-.244-.855-.5-1.088a1.389,1.389,0,0,1-.271-.293,0,0,0,0,1,0,0,1.4,1.4,0,0,1,.384-.107c.34-.064.853-.162,1-.664s-.244-.855-.5-1.088l-.009-.008a.9.9,0,0,1-.259-.482.391.391,0,0,0-.276-.292.41.41,0,0,0-.5.316,1.122,1.122,0,0,0,.51,1.046,1.4,1.4,0,0,1,.271.292,0,0,0,0,1,0,0,1.4,1.4,0,0,1-.384.107c-.34.065-.853.162-1,.664s.244.855.5,1.088a1.4,1.4,0,0,1,.271.293,0,0,0,0,1,0,0,1.39,1.39,0,0,1-.384.107c-.34.065-.853.162-1,.665s.244.855.5,1.088a1.257,1.257,0,0,1,.273.3,0,0,0,0,1,0,0,1.641,1.641,0,0,1-.387.1c-.331.063-.826.157-.983.625a.416.416,0,0,0,.21.507.392.392,0,0,0,.456-.109.789.789,0,0,1,.464-.253h0C394.812,121.2,395.326,121.1,395.468,120.6Z"
                              transform="translate(-262.76 -23.736)"
                              fill="#212121"
                              opacity="0.3"
                            ></path>
                            <path
                              id="Path_17756"
                              data-name="Path 17756"
                              d="M375.447,179.277a2.539,2.539,0,1,1,3.346,1.3A2.542,2.542,0,0,1,375.447,179.277Zm3.737-1.643a1.543,1.543,0,1,0-.791,2.034A1.545,1.545,0,0,0,379.184,177.634Z"
                              transform="translate(-375.232 -52.408)"
                              fill="#212121"
                              opacity="0.3"
                            ></path>
                            <path
                              id="Path_17764"
                              data-name="Path 17764"
                              d="M375.447,179.277a2.539,2.539,0,1,1,3.346,1.3A2.542,2.542,0,0,1,375.447,179.277Zm3.737-1.643a1.543,1.543,0,1,0-.791,2.034A1.545,1.545,0,0,0,379.184,177.634Z"
                              transform="translate(-333.888 -175.716)"
                              fill="#212121"
                              opacity="0.3"
                            ></path>
                            <path
                              id="Path_17757"
                              data-name="Path 17757"
                              d="M350.086,264.8a1.852,1.852,0,0,1-2.682-2.547l-.868-.823a3.047,3.047,0,0,0,4.417,4.194Z"
                              transform="translate(-253.642 -206.302)"
                              fill="#212121"
                              opacity="0.3"
                            ></path>
                            <path
                              id="Path_17766"
                              data-name="Path 17766"
                              d="M346.628,264.8a1.852,1.852,0,0,0,2.682-2.547l.867-.823a3.047,3.047,0,0,1-4.417,4.194Z"
                              transform="translate(-170.953 -110.557)"
                              fill="#212121"
                              opacity="0.15"
                            ></path>
                            <path
                              id="Union_11"
                              data-name="Union 11"
                              d="M2.059,6.97l.989-3.048L0,2.933.283,2.06l3.049.989L4.321,0,5.2.284l-.99,3.048,3.047.989L6.97,5.2l-3.048-.99-.99,3.049Z"
                              transform="translate(6.528 48.598)"
                              fill="#212121"
                              stroke="rgba(0,0,0,0)"
                              strokeMiterlimit="10"
                              strokeWidth="1"
                              opacity="0.3"
                            ></path>
                            <path
                              id="Union_13"
                              data-name="Union 13"
                              d="M2.059,6.97l.989-3.048L0,2.933.283,2.06l3.049.989L4.321,0,5.2.284l-.99,3.048,3.047.989L6.97,5.2l-3.048-.99-.99,3.049Z"
                              transform="translate(94.294 121.132)"
                              fill="#212121"
                              stroke="rgba(0,0,0,0)"
                              strokeMiterlimit="10"
                              strokeWidth="1"
                              opacity="0.3"
                            ></path>
                            <path
                              id="Union_12"
                              data-name="Union 12"
                              d="M1.235,4.182l.593-1.829L0,1.759l.17-.524L2,1.829,2.592,0l.525.17L2.523,2l1.828.594-.17.523L2.353,2.523,1.759,4.352Z"
                              transform="translate(107.351 6.528)"
                              fill="#212121"
                              stroke="rgba(0,0,0,0)"
                              strokeMiterlimit="10"
                              strokeWidth="1"
                              opacity="0.3"
                            ></path>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                  <h3 className="text-sm md:text-md font-mabrybold pt-8 text-gray-900">
                    Your cart is empty.
                  </h3>
                </div>
              </li>
              <li className="last:border-0 w-full">
                <div className="flex  mx-auto w-5/6 ">
                  <div className="flex w-full pt-3">
                    <Link
                      className="relative w-full inline-block  group text-center"
                      href="/checkout"
                    >
                      <span className="relative flex button w-full px-2 py-3 justify-center overflow-hidden leading-tight text-sm font-mabrybold text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-800 rounded ">
                        <span className="absolute inset-0 w-full h-full px-5 py-3 rounded bg-yellow-200 group-hover:bg-yellow-300"></span>
                        <span className="relative text-md font-mabrybold">
                          Checkout
                        </span>
                      </span>
                    </Link>
                  </div>
                </div>
                
              </li>
            </ul>
          </div>
        </Transition>
      </div>
    );
}
