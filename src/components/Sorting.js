import React from 'react'

const Sorting = () => {
  return (
    <>
    <div className="h-max flex flex-col">
        <div className="flex items-center">
          <div className="bg-mint border w-full shadow-bleed-teal-sm  p-4 font-mono flex flex-wrap md:flex-nowrap items-center md:space-x-6">
            <select
              name="version"
              className="input-select text-sm z-1 border border-gray-800 text-gray-900 text-md font-mabrybold"
            >
              <option value="all">Platform</option>
              <option value="all">All</option>
              <option value="blog">Android (10)</option>
              <option value="boilerplate">PC (9)</option>
            </select>
            <select
              name="sort"
              className="input-select text-sm z-1 border border-gray-800 text-gray-900 text-md font-mabrybold"
            >
              <option value="most-popular">Sort by Most Popular</option>{" "}
              <option value="name">Sort by Name</option>{" "}
              <option value="newest">Sort by Newest</option>
            </select>{" "}
            <select
              name="layout"
              className="input-select text-sm z-1 border border-gray-800 text-gray-900 text-md font-mabrybold"
            >
              <option>Genre</option> <option value="arcade">Arcade</option>
              <option value="arcade">RPG</option>
              <option value="arcade">Adventure</option>
              <option value="arcade">Sport</option>
            </select>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sorting