import React from 'react'

export const Pagination = () => {
  return (
    <>
    <div className=" h-max flex pb-6 pt-10 flex-col space-y-10 px-10 justify-center2 items-center2 bg-[#f6f8f7]">
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
              <a href="https://statamic.com/addons?page=2" className="page-link">
                2
              </a>
            </li>{" "}
            <li className="page-item">
              <a href="https://statamic.com/addons?page=3" className="page-link">
                3
              </a>
            </li>{" "}
            <li className="page-item">
              <a href="https://statamic.com/addons?page=4" className="page-link">
                4
              </a>
            </li>{" "}
            <li className="page-item">
              <a href="https://statamic.com/addons?page=5" className="page-link">
                5
              </a>
            </li>{" "}
            <li className="page-item">
              <a href="https://statamic.com/addons?page=6" className="page-link">
                6
              </a>
            </li>{" "}
            <li className="page-item">
              <a href="https://statamic.com/addons?page=7" className="page-link">
                7
              </a>
            </li>{" "}
            <li className="page-item">
              <a href="https://statamic.com/addons?page=8" className="page-link">
                8
              </a>
            </li>{" "}
            <li className="page-item">
              <a href="https://statamic.com/addons?page=9" className="page-link">
                9
              </a>
            </li>{" "}
            <li className="page-item">
              <a
                href="https://statamic.com/addons?page=2"
                rel="next"
                aria-label="Next »"
                className="page-link"
              >
                ›
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}
