"use client";
import Script from "next/script";
import React, { useEffect } from "react";
import Image from "next/image";
import kabah from "/public/img/kaabah.webp";

const PopUp = () => {
  return (
    <>
      <Script src="/js/popup.js" />;
      <div id="popup" className="opacity-0 transition-all duration-1000 ease-in w-full h-full fixed bg-white bg-opacity-80 ">
        <div className="  mx-auto my-40">
          <div className=" h-10">
            <button id="popup_close" className="absolute right-40 top-40 font-mukta font-bold text-lg">
              X
            </button>
          </div>
          <div className="max-w-xs lg:max-w-7xl md:max-w-2xl flex items-center justify-center m-auto ">
            <div className="overflow-hidden rounded-xl shadow-2xl md:grid md:grid-cols-3 bg-white">
              <Image src={kabah} alt="kabah" className="h-60 w-full object-cover md:h-full " />
              <div className="p-4 text-center sm:p-6 md:col-span-2 lg:p-8 m-auto">
                <p className="text-sm font-semibold uppercase tracking-widest">🎉 Promo Spesial! 🎉</p>

                <h2 className="mt-6 font-black uppercase">
                  <span className="text-4xl font-black sm:text-5xl lg:text-6xl"> GRATIS Tiket Umroh!</span>

                  <span className="mt-2 px-4 block text-sm">& All You Can Eat Food Testing at Grha Sarina Vidi</span>
                </h2>

                <a className="mt-4 inline-block w-full bg-vidi rounded-lg py-4 text-sm font-bold uppercase tracking-widest text-white" href="#">
                  KLAIM SEKARANG!
                </a>

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
