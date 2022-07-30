import { NextPage } from 'next'
import React from 'react'

const Navbar: NextPage = () => {
  return (
    <nav className="z-50 bg-white border-gray-200 py-2.5 dark-blue fixed top-0 w-full">
      <div className="container flex flex-wrap justify-between items-center mt-[30px]">
        <div className="mx-auto">
          <div className="flex items-center space-x-[244px]">
              <img src="./icons/logo.svg" className="h-[65px] w-[65px]" alt="Adetunji Adeyinka's Logo" />
              {/* <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span> */}
              <button data-collapse-toggle="mobile-menu" className="hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:hover:bg-gray-700 dark:focus:ring-gray-600 rounded-lg" aria-controls="mobile-menu" aria-expanded="false">
                <img src="./icons/Hamburger.svg" alt=""  className="h-[32px] w-[58px]"/>
              </button> 
          </div>
        </div>
        {/* <button data-collapse-toggle="mobile-menu" type="button" className="inline-flex items-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu" aria-expanded="false">
          <img src="./icons/Hamburger.svg" alt=""  className="h-[32px] w-[58px]"/>
        </button> */}
        <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            <li>
              <a href="#" className="block py-2 pr-4 pl-3 text-white md:bg-transparent md:text-blue-700 md:p-0 dark:text-white text-right">Home</a>
            </li>
            <li>
              <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400">About</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar