"use client";
import Script from "next/script";
import React, { useEffect } from "react";
import Link from "next/link";
import { useState } from "react";

const Nav = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  return (
    <>
      <Script src="/js/script.js" />
      <header className="bg-transparent absolute top-0 left-0 w-full flex items-center z-10 my-0 bg-white">
        <div className="container lg:mx-32 md:mx-32 mx-5">
          <div className="flex items-center justify-between relative">
            <div className="">
              <a href="#home">
                <img src="/img/vidi_logo.png" alt="Logo Vidi" className="w-36 m-auto" />
              </a>
            </div>
            <div className="flex items-center px-4 ">
              <button id="hamburger" name="hamburger" type="button" className="block absolute right-4 lg:hidden ">
                <span className="hamburger-line transition duration-300 ease-in-out origin-top-left"></span>
                <span className="hamburger-line transition duration-300 ease-in-out "></span>
                <span className="hamburger-line transition duration-300 ease-in-out origin-bottom-left"></span>
              </button>
              <nav id="nav-menu" className="hidden absolute py-5 bg-white shadow-lg rounded-lg max-w-[320px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none">
                <ul className="block lg:flex">
                  <li className="group">
                    <Link href="/" className="text-base py-2 mx-8 flex group-hover:text-vidi">
                      Beranda
                    </Link>
                  </li>
                  <li onClick={() => setDropdownOpen(!dropdownOpen)} className="group">
                    <button className="text-base py-2 mx-8 flex group-hover:text-vidi ">Catering Service</button>
                    {dropdownOpen && (
                      <div className="absolute  mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-20 ">
                        <Link href="/wedding-catering" className="block px-4 py-2 hover:text-vidi ">
                          Wedding Service
                        </Link>
                        <a href="#" className="block px-4 py-2 hover:text-vidi ">
                          Link2
                        </a>
                        <a href="#" className="block px-4 py-2 hover:text-vidi ">
                          Link 3
                        </a>
                      </div>
                    )}
                  </li>
                  <li className="group">
                    <Link href="/ballroom-convention-hall" className="block mx-8 py-2 hover:text-vidi ">
                      Ballroom & Convention Hall
                    </Link>
                  </li>
                  <li className="group">
                    <Link href="/about-us" className="text-base py-2 mx-8 flex group-hover:text-vidi">
                      About Us
                    </Link>
                  </li>
                  <li className="group">
                    <button className=" bg-vidi rounded-xl hover:opacity-90 mx-4 ">
                      <Link href="https://api.whatsapp.com/send?phone=628112546265" passHref target="_blank" rel="noopener noreferrer" className="text-white text-xl py-2 mx-8 flex">
                        Hubungi Kami
                      </Link>
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Nav;
