import Image from "next/image";
import Link from "next/link";
import React from "react";
import Navbar from "../Header/Navbar";
import MobileNavbar from "../Header/MobileNavbar";

const Hero = () => {
  return (
    <section className="relative mx-auto lg:px-20 pb-20 bg-gray-900 overflow-hidden">
      <Image
        className="hidden lg:flex -translate-x-[350px] absolute inset-0 h-full w-full "
        src="/bgline.svg"
        width="1000"
        height="617"
        alt="Bg Lines"
      />
      <Navbar />

      <div className="relative   py-[50px]">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full lg:w-1/2 px-4 mb-12 md:mb-20 lg:mb-0 flex items-center">
              <div className="w-full text-center lg:text-left">
                <div className="max-w-md mx-auto lg:mx-0">
                  <h1 className="mb-3 text-5xl lg:text-6xl text-white font-bold">
                    <span>Build & Launch without</span>
                    <span className="text-[#53DD81]"> Problems</span>
                  </h1>
                </div>
                <div className="max-w-lg mx-auto lg:mx-0">
                  <p className="mb-6 text-gray-400 leading-loose">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque efficitur nisl sodales egestas lobortis.
                  </p>
                  <div>
                    <Link
                      className="inline-block mb-3 lg:mb-0 lg:mr-3 w-full lg:w-auto py-2 px-6 leading-loose bg-[#FF2C60]  text-white font-semibold rounded-l-xl rounded-t-xl transition duration-200"
                      href="#"
                    >
                      Demo Try
                    </Link>
                    <Link
                      className="inline-block w-full lg:w-auto py-2 px-6 leading-loose text-white font-semibold bg-gray-900 border-2 border-gray-700 hover:border-gray-600 rounded-l-xl rounded-t-xl transition duration-200"
                      href="#"
                    >
                      How it works
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 px-4 flex items-center justify-center">
              <Image
                src="/men-on-chair.png"
                width="494"
                height="457"
                alt="Men on Chair"
              />
            </div>
          </div>
        </div>
      </div>

      <MobileNavbar/>
      
    </section>
  );
};

export default Hero;
