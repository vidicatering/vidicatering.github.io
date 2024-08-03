"use client";
import Script from "next/script";
import React, { useEffect } from "react";
import Image from "next/image";
import image11 from "/public/img/Buffet.webp";
import Link from "next/link";

const PopUp = () => {
  return (
    <>
      <Script src="/js/popup.js" />;
      <div id="popup" className="opacity-0 transition-all duration-1000 ease-in w-full h-full fixed bg-white bg-opacity-80 ">
        <div className="  mx-auto lg:mt-60 mt-10">
          <div className=" h-10">
            <button id="popup_close" className="absolute right-10 top-10 lg:right-72 lg:top-60 font-mukta font-black text-xl">
              X
            </button>
          </div>
          <div className="max-w-xs md:max-w-4xl lg:max-w-7xl flex items-center justify-center m-auto ">
            <div className="overflow-hidden rounded-lg shadow-2xl md:grid md:grid-cols-3 bg-white ">
              <Image src={image11} alt="kabah" className="h-60 w-full object-cover md:h-full " />
              <div className="p-4 text-center sm:p-6 md:col-span-2 lg:p-8 m-auto">
                <h2 className="mt-2 px-4 block lg:text-xl text-base font-bold uppercase"> All You Can Eat Food Testing at Grha Sarina Vidi</h2>
                <h1 className="mt-2 text-4xl font-black sm:text-5xl lg:text-6xl uppercase">GRATIS Tiket Umroh!</h1>
                <button className=" mt-6 inline-block w-full bg-vidi rounded-lg py-4 text-sm font-bold uppercase tracking-widest text-white">
                  <Link
                    href="https://wa.me/628112546265?text=Hai%20Admin%20VIDI%20Catering%2C%20Saya%20ingin%20bergabung%20di%20acara%20Free%20Food%20Tasting%20Flight%20Batch%202"
                    passHref
                    target="_blank"
                    rel="noopener noreferrer"
                    className=""
                  >
                    KLAIM SEKARANG!
                  </Link>
                </button>
                <p className="mt-8 text-xs font-medium uppercase text-gray-400">Syarat dan Ketentuan Berlaku *</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopUp;
