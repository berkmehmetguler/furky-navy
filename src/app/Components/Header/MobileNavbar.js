import React from 'react'

import Image from 'next/image'
import Link from 'next/link'


const MobileNavbar = () => {
  return (
    <div className="fixed top-0 left-0 bottom-0 w-5/6 max-w-sm z-50 hidden">
        <div className="fixed inset-0 bg-gray-800 opacity-25"></div>
        <nav className="relative flex flex-col py-6 px-6 h-full w-full bg-white border-r overflow-y-auto">
          <div className="flex items-center mb-8">
            <Link className="mr-auto text-3xl font-bold leading-none" href="#">
              <Image
                className="h-10"
                src="/logo.png"
                alt="Mobile Logo"
                width="50"
                height="50"
              />
            </Link>
            <button>
              <svg
                className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
              >
                <path d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <div>
            <ul>
              <li className="mb-1">
                <Link
                  className="block p-4 text-sm font-semibold text-gray-400 hover:bg-green-50 hover:text-green-600 rounded"
                  href="#"
                >
                  Start
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  className="block p-4 text-sm font-semibold text-gray-400 hover:bg-green-50 hover:text-green-600 rounded"
                  href="#"
                >
                  About Us
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  className="block p-4 text-sm font-semibold text-gray-400 hover:bg-green-50 hover:text-green-600 rounded"
                  href="#"
                >
                  Services
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  className="block p-4 text-sm font-semibold text-gray-400 hover:bg-green-50 hover:text-green-600 rounded"
                  href="#"
                >
                  Platform
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  className="block p-4 text-sm font-semibold text-gray-400 hover:bg-green-50 hover:text-green-600 rounded"
                  href="#"
                >
                  Testimonials
                </Link>
              </li>
            </ul>
          </div>
          <div className="mt-auto">
            <div className="pt-6">
              <Link
                className="block px-4 py-3 mb-3 leading-loose text-xs text-center font-semibold leading-none bg-gray-50 hover:bg-gray-100 rounded-l-xl rounded-t-xl"
                href="#"
              >
                Sign In
              </Link>
              <Link
                className="block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-green-600 hover:bg-green-700 rounded-l-xl rounded-t-xl"
                href="#"
              >
                Sign Up
              </Link>
            </div>
            <p className="my-4 text-xs text-center text-gray-400">
              <span>© 2020 All rights reserved.</span>
            </p>
            <div className="text-center">
              <Link className="inline-block px-1" href="#">
                <Image
                  src="/facebook.svg"
                  width="22"
                  height="22"
                  alt="Facebook Icon"
                />
              </Link>
              <Link className="inline-block px-1" href="#">
                <Image
                  src="/twitter"
                  width="22"
                  height="22"
                  alt="Twitter Icon"
                />
              </Link>
              <Link className="inline-block px-1" href="#">
                <Image
                  src="/instagram.svg"
                  width="22"
                  height="22"
                  alt="Instagram Icon"
                />
              </Link>
            </div>
          </div>
        </nav>
      </div>
  )
}

export default MobileNavbar