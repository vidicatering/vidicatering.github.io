"use client";
import Script from "next/script";
import React, { useEffect } from "react";
import Image from "next/image";
import kabah from "/public/img/kaabah.webp";
import senja from "/public/img/senja.webp";
import umrah from "/public/img/umrah.webp";

const PopUp = () => {
  return (
    <>
      <Script src="/js/popup.js" />
      <div id="popup" className="opacity-0 transition-all duration-1000 ease-in w-full h-full fixed bg-white bg-opacity-80 m-0 p-0">
        <div className="  mx-auto ">
          {/* <div className="max-w-xs lg:max-w-7xl md:max-w-2xl flex items-center justify-center m-auto ">
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
          </div> */}
          <div className="max-w-max m-auto">
            <div className=" h-10">
              <button id="popup_close" className="absolute top-14 right-6 lg:right-[700px] font-mukta font-bold text-lg">
                X
              </button>
            </div>
            <Image src={umrah} alt="senja wedding" className="m-auto max-h-screen w-auto pb-20 pt-10 " />
            {/*
  Heads up! 👋

  This component comes with some `rtl` classes. Please remove them if they are not needed in your project.
*/}

            {/* Base - Right */}

            <a className="group relative inline-flex items-center overflow-hidden rounded bg-indigo-600 px-8 py-3 text-white focus:outline-none focus:ring active:bg-indigo-500" href="#">
              <span className="absolute -start-full transition-all group-hover:start-4">
                <svg className="size-5 rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>

              <span className="text-sm font-medium transition-all group-hover:ms-4"> Download </span>
            </a>

            {/* Border - Right */}

            <a className="group relative inline-flex items-center overflow-hidden rounded border border-current px-8 py-3 text-indigo-600 focus:outline-none focus:ring active:text-indigo-500" href="#">
              <span className="absolute -start-full transition-all group-hover:start-4">
                <svg className="size-5 rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>

              <span className="text-sm font-medium transition-all group-hover:ms-4"> Download </span>
            </a>

            {/* Base - Left */}

            <a className="group relative inline-flex items-center overflow-hidden rounded bg-indigo-600 px-8 py-3 text-white focus:outline-none focus:ring active:bg-indigo-500" href="#">
              <span className="absolute -end-full transition-all group-hover:end-4">
                <svg className="size-5 rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>

              <span className="text-sm font-medium transition-all group-hover:me-4"> Download </span>
            </a>

            {/* Border - Left */}

            <a className="group relative inline-flex items-center overflow-hidden rounded border border-current px-8 py-3 text-indigo-600 focus:outline-none focus:ring active:text-indigo-500" href="#">
              <span className="absolute -end-full transition-all group-hover:end-4">
                <svg className="size-5 rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>

              <span className="text-sm font-medium transition-all group-hover:me-4"> Download </span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopUp;
