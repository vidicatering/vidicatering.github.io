"use client";
import Script from "next/script";
import React, { useEffect } from "react";
import Image from "next/image";
import image11 from "/public/img/kaabah.webp";
import banner from "/public/img/BANNER.webp";
import Link from "next/link";

const PopUp = () => {
  return (
    <>
      <Script src="/js/popup.js" />;
      <div id="popup" className="opacity-0 transition-all duration-1000 ease-in w-full h-full fixed bg-white bg-opacity-80 ">
        <div className="  mx-auto lg:mt-56 md:mt-14 mt-16">
          <div className=" h-10">
            <button id="popup_close" className="absolute right-8 top-16 lg:right-[280px] lg:top-[230px] font-mukta font-black text-xl">
              X
            </button>
          </div>
          <div className="max-w-xs md:max-w-4xl lg:max-w-7xl flex items-center justify-center m-auto ">
            <div className="overflow-hidden rounded-lg shadow-2xl md:grid md:grid-cols-3 bg-white ">
              <Image src={image11} alt="kabah" className="h-60 w-full object-cover md:h-full " />
              <div className="p-4 text-center sm:p-6 md:col-span-2 lg:p-8 m-auto">
                <h1 className="mt-2 text-4xl font-black sm:text-5xl lg:text-6xl uppercase">GRATIS Tiket Umroh!</h1>
                <button className=" mt-6 inline-block w-full bg-vidi rounded-lg py-4 text-sm font-bold uppercase tracking-widest text-white">
                  <Link href="https://wa.me/628112546265" passHref target="_blank" rel="noopener noreferrer" className="">
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
