import React from "react";

import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="relative px-10 lg:px-15 py-6 flex justify-between items-center  font-bold">
      <Link className="text-white  font-bold leading-none" href="/">
        <Image src="/rlogo.png" alt="Logo" width="140" height="190" />
      </Link>
     
        <button className="absolute top-20 cursor-pointer right-20 bg-transparent lg:hidden items-center scale-125 text-white  ">
          <svg
            className="block h-8 w-8 fill-current"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Mobile menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </button>
     

      <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto  lg:items-center lg:w-auto lg:space-x-2">
        <li>
          <Link
            className="text-lg hover:underline underline-offset-2 under decoration-[#3CDFC2] text-gray-300 hover:text-white"
            href="/demo"
          >
            Start
          </Link>
        </li>
        <li className="text-gray-800">
          <svg
            className="w-4 h-4 current-fill"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
          >
            <path d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path>
          </svg>
        </li>
        <li>
          <Link
            className="text-lg hover:underline underline-offset-2 under decoration-[#3CDFC2] text-white font-bold"
            href="/about"
          >
            About
          </Link>
        </li>
        <li className="text-gray-800">
          <svg
            className="w-4 h-4 current-fill"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
          >
            <path d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path>
          </svg>
        </li>
        <li>
          <Link
            className="text-lg hover:underline underline-offset-2 under decoration-[#3CDFC2] text-gray-300 hover:text-white"
            href="/services"
          >
            Services
          </Link>
        </li>
        <li className="text-gray-800">
          <svg
            className="w-4 h-4 current-fill"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
          >
            <path d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path>
          </svg>
        </li>
        <li>
          <Link
            className="text-lg hover:underline underline-offset-2 under decoration-[#3CDFC2] text-gray-300 hover:text-white"
            href="/platform"
          >
            Platform
          </Link>
        </li>
        <li className="text-gray-800">
          <svg
            className="w-4 h-4 current-fill"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
          >
            <path d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path>
          </svg>
        </li>
        <li>
          <Link
            className="text-lg hover:underline underline-offset-2 under decoration-[#3CDFC2] text-gray-300 hover:text-white"
            href="/testimonials"
          >
            Testimonials
          </Link>
        </li>
      </ul>
      <span
        className="hidden lg:inline-block py-2 px-4 bg-[#FF2C60]   text-lg text-white font-semibold rounded-l-xl rounded-t-xl transition duration-200"
        href="#"
      ></span>
      <Link href="/">
        <button className="hidden relative lg:inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-lg font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
          <span className="relative  px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Contact Us
          </span>
        </button>
      </Link>
    </nav>
  );
};

export default Navbar;
