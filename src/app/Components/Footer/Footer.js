import Image from "next/image";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative px-4  w-full lg:px-10 py-12 pt-10 bg-gray-900 overflow-hidden">
      <div className="w-full ">
        
 

      </div>
      <div className="absolute top-0 right-0 -mt-112 -mr-52 w-186 h-186 bg-gradient-to-t from-violet-700 via-darkBlue-900 to-transparent rounded-full filter blur-4xl"></div>
      <Image
        className="absolute -top-10 left-1/2 mt-16 sm:ml-20 md:ml-0 animate-spin"
        src="/blink-star.png"
        alt="Blink Star"
        width="50"
        height="37"
      />
      <Image
        className="hidden md:block absolute top-0 right-0  w-[80px] lg:w-[150px] mr-20 mt-20"
        src="/axe.png"
        alt="Axe Photo"
        width="200"
        height="100"
      />
      
      <div className="relative container mx-auto w-full px-4">
        <div className="flex flex-wrap -mx-4 mb-12">


          <div className="w-full lg:w-2/5 p-4 my-10 ">
            <div className="text-center gap-4 flex flex-col ">
              <Link className=" text-center" href="/">
                <Image
                  className="inline-block  w-[200px] h-[250px]  "
                  src="/rlogo.png"
                  alt="Logo"
                  width="125"
                  height="100"
                />
              </Link>
              <h3 className="text-4xl font-medium text-white mb-3">
                Subscribe to our newsletter!
              </h3>
              <div>
                <span className="block mb-4 text-[#53DD81] text-2xl ml-4 text-muted b">
                  Email:
                </span>
                <div className="inline-flex items-center w-2/3 h-12 py-2 pl-3 pr-2 rounded-full bg-gray-800">
                  <span>
                    <svg
                      width="24"
                      height="25"
                      
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19 4.5H5C4.20435 4.5 3.44129 4.81607 2.87868 5.37868C2.31607 5.94129 2 6.70435 2 7.5V17.5C2 18.2956 2.31607 19.0587 2.87868 19.6213C3.44129 20.1839 4.20435 20.5 5 20.5H19C19.7956 20.5 20.5587 20.1839 21.1213 19.6213C21.6839 19.0587 22 18.2956 22 17.5V7.5C22 6.70435 21.6839 5.94129 21.1213 5.37868C20.5587 4.81607 19.7956 4.5 19 4.5ZM18.59 6.5L12.71 12.38C12.617 12.4737 12.5064 12.5481 12.3846 12.5989C12.2627 12.6497 12.132 12.6758 12 12.6758C11.868 12.6758 11.7373 12.6497 11.6154 12.5989C11.4936 12.5481 11.383 12.4737 11.29 12.38L5.41 6.5H18.59ZM20 17.5C20 17.7652 19.8946 18.0196 19.7071 18.2071C19.5196 18.3946 19.2652 18.5 19 18.5H5C4.73478 18.5 4.48043 18.3946 4.29289 18.2071C4.10536 18.0196 4 17.7652 4 17.5V7.91L9.88 13.79C10.4425 14.3518 11.205 14.6674 12 14.6674C12.795 14.6674 13.5575 14.3518 14.12 13.79L20 7.91V17.5Z"
                        fill="#80818C"
                      ></path>
                    </svg>
                  </span>
                  <input
                    className="px-1 lg:text-md w-full placeholder-gray-600 text-gray-200 bg-transparent  outline-none "
                    type="email"
                    placeholder="elon.musk@x.com"
                  />
                  <button
                    className="flex  items-center justify-center w-9 h-9 rounded-full text-black hover:text-white  bg-[#53DD81]"
                    type="submit"
                  >
                    <span className="relative p-4 rounded-full  py-2 transition-all ease-in duration-75 bg-[#53DD81]  group-hover:bg-opacity-0">
                      <svg
                        width="20"
                        height="25"
                        
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17.4333 11.0167C17.3937 10.9144 17.3342 10.8209 17.2583 10.7417L14.7583 8.24167C14.6014 8.08475 14.3886 7.99659 14.1667 7.99659C13.9447 7.99659 13.7319 8.08475 13.575 8.24167C13.4181 8.39859 13.3299 8.61142 13.3299 8.83333C13.3299 9.05525 13.4181 9.26808 13.575 9.425L14.6583 10.5H6.66666C6.44564 10.5 6.23368 10.4122 6.0774 10.2559C5.92112 10.0996 5.83332 9.88768 5.83332 9.66667V6.33333C5.83332 6.11232 5.74553 5.90036 5.58925 5.74408C5.43297 5.5878 5.221 5.5 4.99999 5.5C4.77898 5.5 4.56701 5.5878 4.41073 5.74408C4.25445 5.90036 4.16666 6.11232 4.16666 6.33333V9.66667C4.16666 10.3297 4.43005 10.9656 4.89889 11.4344C5.36773 11.9033 6.00362 12.1667 6.66666 12.1667H14.6583L13.575 13.2417C13.4969 13.3191 13.4349 13.4113 13.3926 13.5129C13.3503 13.6144 13.3285 13.7233 13.3285 13.8333C13.3285 13.9433 13.3503 14.0523 13.3926 14.1538C13.4349 14.2554 13.4969 14.3475 13.575 14.425C13.6525 14.5031 13.7446 14.5651 13.8462 14.6074C13.9477 14.6497 14.0566 14.6715 14.1667 14.6715C14.2767 14.6715 14.3856 14.6497 14.4871 14.6074C14.5887 14.5651 14.6809 14.5031 14.7583 14.425L17.2583 11.925C17.3342 11.8457 17.3937 11.7523 17.4333 11.65C17.5167 11.4471 17.5167 11.2196 17.4333 11.0167Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </span>
                  </button>

          
                </div>
              </div>
            </div>
          </div>

                {/* Footer Links */}

          <div className="w-full lg:w-3/5   justify-center px-4">
            <div className=" text-xl text-center gap-12 justify-center flex flex-col content-center lg:flex-row flex-wrap h-full  ">
              
              <div className="w-auto lg:mb-10 lg:mr-10   p-8">
                <h4 className="text-2xl font-medium text-white tracking-tight mb-4">
                  Services
                </h4>


                <ul>
                  <li className="mb-4">
                    <Link
                      className="inline-block text-gray-500 hover:text-white tracking-tight"
                      href="#"
                    >
                      Email Marketing
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link
                      className="inline-block text-gray-500 hover:text-white tracking-tight"
                      href="#"
                    >
                      Campaigns
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link
                      className="inline-block text-gray-500 hover:text-white tracking-tight"
                      href="#"
                    >
                      Branding
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="inline-block text-gray-500 hover:text-white tracking-tight"
                      href="#"
                    >
                      Offline
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="w-auto lg:mb-10 lg:mr-10 p-8">
                <h4 className="text-2xl font-medium text-white tracking-tight mb-4">
                  About
                </h4>
                <ul>
                  <li className="mb-4">
                    <Link
                      className="inline-block text-gray-500 hover:text-white tracking-tight"
                      href="#"
                    >
                      Our Story
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link
                      className="inline-block text-gray-500 hover:text-white tracking-tight"
                      href="#"
                    >
                      Benefits
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link
                      className="inline-block text-gray-500 hover:text-white tracking-tight"
                      href="#"
                    >
                      Team
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="inline-block text-gray-500 hover:text-white tracking-tight"
                      href="#"
                    >
                      Careers
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="w-auto text-xl lg:mb-10 lg:mr-10  p-8">
                <h4 className="text-2xl font-medium text-white tracking-tight mb-4">
                  Help
                </h4>
                <ul>
                  <li className="mb-4">
                    <Link
                      className="inline-block text-gray-500 hover:text-white tracking-tight"
                      href="#"
                    >
                      FAQs
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="inline-block text-gray-500 hover:text-white tracking-tight"
                      href="#"
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>

          
            </div>
          </div>
        </div>


        <div className="pt-10 border-t border-gray-800">
          <div className="md:flex items-center justify-between">
            <div className="mb-6 md:mb-0">
              <span className="text-gray-600 tracking-tight">
                <Link
                  href="berkmehmetguler-portfolio.netlify.app"
                  className="text-[#53DD81] underline"
                >
                  © BMG.
                </Link>{" "}
                All rights reserved
              </span>
            </div>
            <div className="text-end">
              <Link
                className="inline-block mr-5 text-white hover:underline decoration-[#53DD81] tracking-tight"
                href="#"
              >
                Terms & Conditions
              </Link>
              <Link
                className="inline-block text-white hover:underline decoration-violet-500 tracking-tight"
                href="#"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
      
    </footer>
  );
}
