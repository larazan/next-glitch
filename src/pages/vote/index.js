import {getRandomColor,createImageFromInitials} from '@/utils/Utils'
import Image from 'next/image';

export default function Vote() {
  let name = "Jhon Smith";
	let imgSrc = "";

  return (
    <>
    <div className='w-full mx-auto py-12'>
    <img
				id='preview'
				src={
					imgSrc.length <= 0
						? createImageFromInitials(500, name, getRandomColor())
						: imgSrc
				}
				alt='profile-pic'
			/>
    </div>
      <div className="h-max flex space-x-5 py-12 px-20 bg-white">
        <div className="flex flex-col space-y-1.5">
          <div>
            <span className="font-mabrybold text-sm">
              Man City atau Madrid nih?
            </span>
          </div>
          <div className="w-[300px] flex justify-center border border-gray-300 rounded shadow">
            <div className="flex flex-col w-full ">

              <div className="flex justify-between items-center border-b border-gray-300 py-1.5 px-1.5">
                <div className="flex w-full flex-col space-y-1.5">
                    <div className="flex w-full px-1 py-1 justify-center text-center border-2 border-[#1d9bf0] rounded hover:bg-[#1d9bf0] text-[#1d9bf0] hover:text-white cursor-pointer">
                        <span className="font-mabry ">Man City</span>
                    </div>
                    <div className="flex w-full px-1 py-1 justify-center text-center border-2 border-[#1d9bf0] rounded hover:bg-[#1d9bf0] text-[#1d9bf0] hover:text-white cursor-pointer">
                        <span className="font-mabry ">Madrid</span>
                    </div>
                </div>
              </div>
              <div className="flex justify-between items-center border-b border-gray-300 py-2 px-3">
                <div className="text-sm font-mabry text-slate-400">100 vote</div>
                <div className="text-sm font-mabry text-slate-400">23 hours left</div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col space-y-1.5">
          <div>
            <span className="font-mabrybold text-sm">
              Man City atau Madrid nih?
            </span>
          </div>
          <div className="w-[300px] flex justify-center">
            <div className="flex flex-col w-full ">

              <div className="flex justify-between items-center  px-1.5">
                <div className="flex w-full flex-col space-y-1.5">
                    <div className="relative flex w-full  bg-white ">
                        <div className="w-7/12 h-7 px-3 py-2 rounded-sm bg-blue-400 border-bg-blue-400"></div>
                        <span className="absolute px-3 py-1 bottom-0 font-mabry text-sm">60% Man City</span>
                    </div>
                    <div className="relative flex w-full  bg-white">
                        <div className="w-4/12 h-7 px-3 py-2 rounded-sm bg-blue-200 border-bg-blue-200"></div>
                        <span className="absolute px-3 py-1 bottom-0 font-mabry text-sm">40% Madrid</span>
                    </div>
                   
                </div>
              </div>
              <div className="flex space-x-3 items-center  py-2 px-3">
                <div className="text-sm font-mabrybold text-slate-600">300 votes</div>
                <div className="text-sm font-mabrybold text-slate-600">Final results</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
