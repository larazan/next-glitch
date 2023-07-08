import React from 'react'
import Link from 'next/link'

export const Pagination = () => {
  return (
    <>
    <div className=" h-max flex pb-6 pt-10 flex-col space-y-10 px-8 justify-center2 items-center2 ">
        <nav>
          <ul className="pagination">
            <li
              
              className="page-item disabled"
            >
              <span aria-hidden="true" className="page-link">
                ‹
              </span>
            </li>{" "}
            <li aria-current="page" className="page-item active">
              <span className="page-link">1</span>
            </li>{" "}
            <li className="page-item">
              <Link href="https://statamic.com/addons?page=2" className="page-link">
                2
              </Link>
            </li>{" "}
            <li className="page-item">
              <Link href="https://statamic.com/addons?page=3" className="page-link">
                3
              </Link>
            </li>{" "}
            <li className="page-item">
              <Link href="https://statamic.com/addons?page=4" className="page-link">
                4
              </Link>
            </li>{" "}
            <li className="page-item">
              <Link href="https://statamic.com/addons?page=5" className="page-link">
                5
              </Link>
            </li>{" "}
            <li className="page-item">
              <Link href="https://statamic.com/addons?page=6" className="page-link">
                6
              </Link>
            </li>{" "}
            <li className="page-item">
              <Link href="https://statamic.com/addons?page=7" className="page-link">
                7
              </Link>
            </li>{" "}
            <li className="page-item">
              <Link href="https://statamic.com/addons?page=8" className="page-link">
                8
              </Link>
            </li>{" "}
            <li className="page-item">
              <Link href="https://statamic.com/addons?page=9" className="page-link">
                9
              </Link>
            </li>{" "}
            <li className="page-item">
              <Link
                href="https://statamic.com/addons?page=2"
                rel="next"
                aria-label="Next »"
                className="page-link"
              >
                ›
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}
