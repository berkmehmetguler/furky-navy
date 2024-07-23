import Image from "next/image";
import Link from "next/link";
import React from "react";

const Brands = () => {
  return (
    <>
      <section className="relative  px-30  bg-gray-900 w-full lg:py-36 bg-body overflow-hidden">
        <div className="relative py-10 container mx-auto px-4">
          <div className="absolute  top-0 right-0 -mt-32 -mr-40 w-64 h-64 bg-gradient-to-t from-blue-500 to-darkBlue-900 rounded-full filter blur-4xl"></div>
          <div className="max-w-md hiden md:block lg:max-w-xs xl:max-w-md 2xl:max-w-xl mx-auto text-center">
            <h2 className="font-heading  text-4xl xl:text-5xl 2xl:text-6xl font-medium text-white tracking-tight mb-8">
              Boost Your Potencial with FURKY
            </h2>
            <p className="max-w-md mx-auto text-lg text-gray-500 tracking-tight mb-8">
              Nunc et tellus non erat accumsan aliquam eget non mi. Integer
              fringilla pellentesque finibus.
            </p>
            <Link
              className="group inline-flex w-full sm:w-auto h-14 px-7  items-center justify-center text-base font-medium text-black bg-[#53DD81] hover:letter-spacing-2 hover:scale-110  transition duration-200 rounded-full"
              href="#"
            >
              <span className="mr-2 ">LEARN MORE</span>
              <svg
                width="24"
                height="24"
                viewbox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.9199 6.62C17.818 6.37565 17.6243 6.18147 17.3799 6.08C17.2597 6.02876 17.1306 6.00158 16.9999 6H6.99994C6.73472 6 6.48037 6.10536 6.29283 6.29289C6.1053 6.48043 5.99994 6.73478 5.99994 7C5.99994 7.26522 6.1053 7.51957 6.29283 7.70711C6.48037 7.89464 6.73472 8 6.99994 8H14.5899L6.28994 16.29C6.19621 16.383 6.12182 16.4936 6.07105 16.6154C6.02028 16.7373 5.99414 16.868 5.99414 17C5.99414 17.132 6.02028 17.2627 6.07105 17.3846C6.12182 17.5064 6.19621 17.617 6.28994 17.71C6.3829 17.8037 6.4935 17.8781 6.61536 17.9289C6.73722 17.9797 6.86793 18.0058 6.99994 18.0058C7.13195 18.0058 7.26266 17.9797 7.38452 17.9289C7.50638 17.8781 7.61698 17.8037 7.70994 17.71L15.9999 9.41V17C15.9999 17.2652 16.1053 17.5196 16.2928 17.7071C16.4804 17.8946 16.7347 18 16.9999 18C17.2652 18 17.5195 17.8946 17.707 17.7071C17.8946 17.5196 17.9999 17.2652 17.9999 17V7C17.9984 6.86932 17.9712 6.74022 17.9199 6.62Z"
                  fill="currentColor"
                ></path>
              </svg>
            </Link>
          </div>
        </div>
        <div className="relative lg:hidden py-10 max-w-xl mx-auto mt-20">
          <div className="absolute z-10 top-0 left-0 w-full h-40 bg-gradient-to-b from-darkBlue-900 via-darkBlue-900 to-transparent opacity-90"></div>
          <div className="absolute z-10 bottom-0 left-0 w-full h-40 bg-gradient-to-t from-darkBlue-900 via-darkBlue-900 to-transparent opacity-90"></div>
          <div className="px-8">
            <div className="flex flex-wrap -mx-4">
              <div className="w-full xs:w-1/2 xs:-mb-5 px-4">
                <div className="mb-8 px-6 py-8 rounded-3xl shadow-box-violet overflow-hidden bg-white bg-opacity-10">
                  <Image
                    className="block h-7 mx-auto"
                    src="/logo-color-icons7.svg"
                    width="126"
                    height="28"
                    alt="Brand Logo"
                  />
                </div>
                <div className="mb-8 px-6 py-8 rounded-3xl shadow-box-violet overflow-hidden bg-white bg-opacity-10">
                  <Image
                    className="block h-7 mx-auto"
                    src="/logo-color-icons3.svg"
                    width="105"
                    height="28"
                    alt="Brand Logo"
                  />
                </div>
                <div className="mb-8 px-6 py-8 rounded-3xl shadow-box-violet overflow-hidden bg-white bg-opacity-10">
                  <Image
                    className="block h-7 mx-auto"
                    src="/logo-color-icons4.svg"
                    width="100"
                    height="28"
                    alt="Brand Logo"
                  />
                </div>
                <div className="mb-8 px-6 py-8 rounded-3xl shadow-box-violet overflow-hidden bg-white bg-opacity-10">
                  <Image
                    className="block h-7 mx-auto"
                    src="/logo-color-icons3.svg"
                    width="105"
                    height="28"
                    alt="Brand Logo"
                  />
                </div>
                <div className="mb-8 px-6 py-8 rounded-3xl shadow-box-violet overflow-hidden bg-white bg-opacity-10">
                  <Image
                    className="block h-7 mx-auto"
                    src="/logo-color-icons4.svg"
                    width="100"
                    height="28"
                    alt="Brand Logo"
                  />
                </div>
                <div className="px-6 py-8 rounded-3xl shadow-box-violet overflow-hidden bg-white bg-opacity-10">
                  <Image
                    className="block h-7 mx-auto"
                    src="/logo-color-icons2.svg"
                    width="126"
                    height="29"
                    alt="Brand Logo"
                  />
                </div>
              </div>
              <div className="hidden xs:block w-full xs:w-1/2 px-4 xs:-mt-5">
                <div className="mb-8 px-6 py-8 rounded-3xl shadow-box-violet overflow-hidden bg-white bg-opacity-10">
                  <Image
                    className="block h-7 mx-auto"
                    src="/logo-color-icons2.svg"
                    width="126"
                    height="29"
                    alt="Brand Logo"
                  />
                </div>
                <div className="mb-8 px-6 py-8 rounded-3xl shadow-box-violet overflow-hidden bg-white bg-opacity-10">
                  <Image
                    className="block h-7 mx-auto"
                    src="/logo-color-icons4.svg"
                    width="100"
                    height="28"
                    alt="Brand Logo"
                  />
                </div>
                <div className="mb-8 px-6 py-8 rounded-3xl shadow-box-violet overflow-hidden bg-white bg-opacity-10">
                  <Image
                    className="block h-7 mx-auto"
                    src="/logo-color-icons2.svg"
                    width="126"
                    height="29"
                    alt="Brand Logo"
                  />
                </div>
                <div className="mb-8 px-6 py-8 rounded-3xl shadow-box-violet overflow-hidden bg-white bg-opacity-10">
                  <Image
                    className="block h-7 mx-auto"
                    src="/logo-color-icons5.svg"
                    width="105"
                    height="28"
                    alt="Brand Logo"
                  />
                </div>
                <div className="mb-8 px-6 py-8 rounded-3xl shadow-box-violet overflow-hidden bg-white bg-opacity-10">
                  <Image
                    className="block h-7 mx-auto"
                    src="/logo-color-icons6.svg"
                    width="105"
                    height="28"
                    alt="Brand Logo"
                  />
                </div>
                <div className="px-6 py-8 rounded-3xl shadow-box-violet overflow-hidden bg-white bg-opacity-10">
                  <Image
                    className="block h-7 mx-auto"
                    src="/logo-color-icons7.svg"
                    width="126"
                    height="28"
                    alt="Brand Logo"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="hidden  lg:block absolute top-0 left-0 h-full w-full lg:max-w-sm 2xl:max-w-md px-4">
          <div className="hidden xs:block absolute z-10 top-0 left-0 w-full h-20 lg:h-32 bg-gradient-to-b from-darkBlue-900 via-darkBlue-900 to-transparent opacity-90"></div>
          <div className="hidden xs:block absolute z-10 bottom-0 left-0 w-full h-20 lg:h-32 bg-gradient-to-t from-darkBlue-900 via-darkBlue-900 to-transparent opacity-90"></div>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full xs:w-1/2 -mb-5 px-4">
              <div className="mb-8 px-6 py-8 rounded-3xl shadow-box-violet overflow-hidden bg-white bg-opacity-10">
                <Image
                  className="block h-7 mx-auto"
                  src="/logo-color-icons7.svg"
                  width="126"
                  height="28"
                  alt="Brand Logo"
                />
              </div>
              <div className="mb-8 px-6 py-8 rounded-3xl shadow-box-violet overflow-hidden bg-white bg-opacity-10">
                <Image
                  className="block h-7 mx-auto"
                  src="/logo-color-icons3.svg"
                  width="105"
                  height="28"
                  alt="Brand Logo"
                />
              </div>
              <div className="mb-8 px-6 py-8 rounded-3xl shadow-box-violet overflow-hidden bg-white bg-opacity-10">
                <Image
                  className="block h-7 mx-auto"
                  src="/logo-color-icons4.svg"
                  width="100"
                  height="28"
                  alt="Brand Logo"
                />
              </div>
              <div className="mb-8 px-6 py-8 rounded-3xl shadow-box-violet overflow-hidden bg-white bg-opacity-10">
                <Image
                  className="block h-7 mx-auto"
                  src="/logo-color-icons3.svg"
                  width="105"
                  height="28"
                  alt="Brand Logo"
                />
              </div>
              <div className="mb-8 px-6 py-8 rounded-3xl shadow-box-violet overflow-hidden bg-white bg-opacity-10">
                <Image
                  className="block h-7 mx-auto"
                  src="/logo-color-icons4.svg"
                  width="100"
                  height="28"
                  alt="Brand Logo"
                />
              </div>
              <div className="px-6 py-8 rounded-3xl shadow-box-violet overflow-hidden bg-white bg-opacity-10">
                <Image
                  className="block h-7 mx-auto"
                  src="/logo-color-icons2.svg"
                  width="126"
                  height="29"
                  alt="Brand Logo"
                />
              </div>
            </div>
            <div className="w-full xs:w-1/2 px-4 -mt-5">
              <div className="mb-8 px-6 py-8 rounded-3xl shadow-box-violet overflow-hidden bg-white bg-opacity-10">
                <Image
                  className="block h-7 mx-auto"
                  src="/logo-color-icons2.svg"
                  width="126"
                  height="29"
                  alt="Brand Logo"
                />
              </div>
              <div className="mb-8 px-6 py-8 rounded-3xl shadow-box-violet overflow-hidden bg-white bg-opacity-10">
                <Image
                  className="block h-7 mx-auto"
                  src="/logo-color-icons4.svg"
                  width="100"
                  height="28"
                  alt="Brand Logo"
                />
              </div>
              <div className="mb-8 px-6 py-8 rounded-3xl shadow-box-violet overflow-hidden bg-white bg-opacity-10">
                <Image
                  className="block h-7 mx-auto"
                  src="/logo-color-icons2.svg"
                  width="126"
                  height="29"
                  alt="Brand Logo"
                />
              </div>
              <div className="mb-8 px-6 py-8 rounded-3xl shadow-box-violet overflow-hidden bg-white bg-opacity-10">
                <Image
                  className="block h-7 mx-auto"
                  src="/logo-color-icons5.svg"
                  width="105"
                  height="28"
                  alt="Brand Logo"
                />
              </div>
              <div className="mb-8 px-6 py-8 rounded-3xl shadow-box-violet overflow-hidden bg-white bg-opacity-10">
                <Image
                  className="block h-7 mx-auto"
                  src="/logo-color-icons6.svg"
                  width="105"
                  height="28"
                  alt="Brand Logo"
                />
              </div>
              <div className="px-6 py-8 rounded-3xl shadow-box-violet overflow-hidden bg-white bg-opacity-10">
                <Image
                  className="block h-7 mx-auto"
                  src="/logo-color-icons7.svg"
                  width="126"
                  height="28"
                  alt="Brand Logo"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:block absolute top-0 right-0 h-full w-full lg:max-w-sm 2xl:max-w-md px-8 z-10">
          <div className="hidden xs:block absolute z-10 top-0 left-0 w-full h-20 lg:h-32 bg-gradient-to-b from-darkBlue-900 via-darkBlue-900 to-transparent opacity-90"></div>
          <div className="hidden xs:block absolute z-10 bottom-0 left-0 w-full h-20 lg:h-32 bg-gradient-to-t from-darkBlue-900 via-darkBlue-900 to-transparent opacity-90"></div>
          <div className="flex flex-wrap -mx-4 -mb-8">
            <div className="w-full xs:w-1/2 -mb-5 px-4">
              <div className="mb-8 px-6 py-8 rounded-3xl shadow-box-violet overflow-hidden bg-white bg-opacity-10">
                <Image
                  className="block h-7 mx-auto"
                  src="/logo-color-icons7.svg"
                  width="126"
                  height="28"
                  alt="Brand Logo"
                />
              </div>
              <div className="mb-8 px-6 py-8 rounded-3xl shadow-box-violet overflow-hidden bg-white bg-opacity-10">
                <Image
                  className="block h-7 mx-auto"
                  src="/logo-color-icons3.svg"
                  width="105"
                  height="28"
                  alt="Brand Logo"
                />
              </div>
              <div className="mb-8 px-6 py-8 rounded-3xl shadow-box-violet overflow-hidden bg-white bg-opacity-10">
                <Image
                  className="block h-7 mx-auto"
                  src="/logo-color-icons4.svg"
                  width="100"
                  height="28"
                  alt="Brand Logo"
                />
              </div>
              <div className="mb-8 px-6 py-8 rounded-3xl shadow-box-violet overflow-hidden bg-white bg-opacity-10">
                <Image
                  className="block h-7 mx-auto"
                  src="/logo-color-icons3.svg"
                  width="105"
                  height="28"
                  alt="Brand Logo"
                />
              </div>
              <div className="mb-8 px-6 py-8 rounded-3xl shadow-box-violet overflow-hidden bg-white bg-opacity-10">
                <Image
                  className="block h-7 mx-auto"
                  src="/logo-color-icons4.svg"
                  width="100"
                  height="28"
                  alt="Brand Logo"
                />
              </div>
              <div className="px-6 py-8 rounded-3xl shadow-box-violet overflow-hidden bg-white bg-opacity-10">
                <Image
                  className="block h-7 mx-auto"
                  src="/logo-color-icons2.svg"
                  width="126"
                  height="29"
                  alt="Brand Logo"
                />
              </div>
            </div>
            <div className="w-full xs:w-1/2 px-4 -mt-5">
              <div className="mb-8 px-6 py-8 rounded-3xl shadow-box-violet overflow-hidden bg-white bg-opacity-10">
                <Image
                  className="block h-7 mx-auto"
                  src="/logo-color-icons2.svg"
                  width="126"
                  height="29"
                  alt="Brand Logo"
                />
              </div>
              <div className="mb-8 px-6 py-8 rounded-3xl shadow-box-violet overflow-hidden bg-white bg-opacity-10">
                <Image
                  className="block h-7 mx-auto"
                  src="/logo-color-icons4.svg"
                  width="100"
                  height="28"
                  alt="Brand Logo"
                />
              </div>
              <div className="mb-8 px-6 py-8 rounded-3xl shadow-box-violet overflow-hidden bg-white bg-opacity-10">
                <Image
                  className="block h-7 mx-auto"
                  src="/logo-color-icons2.svg"
                  width="126"
                  height="29"
                  alt="Brand Logo"
                />
              </div>
              <div className="mb-8 px-6 py-8 rounded-3xl shadow-box-violet overflow-hidden bg-white bg-opacity-10">
                <Image
                  className="block h-7 mx-auto"
                  src="/logo-color-icons5.svg"
                  width="105"
                  height="28"
                  alt="Brand Logo"
                />
              </div>
              <div className="mb-8 px-6 py-8 rounded-3xl shadow-box-violet overflow-hidden bg-white bg-opacity-10">
                <Image
                  className="block h-7 mx-auto"
                  src="/logo-color-icons6.svg"
                  width="105"
                  height="28"
                  alt="Brand Logo"
                />
              </div>
              <div className="px-6 py-8 rounded-3xl shadow-box-violet overflow-hidden bg-white bg-opacity-10">
                <Image
                  className="block h-7 mx-auto"
                  src="/logo-color-icons7.svg"
                  width="126"
                  height="28"
                  alt="Brand Logo"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Brands;
