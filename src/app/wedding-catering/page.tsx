// src/app/wedding-catering.tsx

import React from "react";
import Nav from "../component/Nav";
import Image from "next/image";
import VidiCatering from "/public/img/vidi1.webp";
import stall from "/public/img/Stall.webp";
import buffet from "/public/img/Buffet.webp";
import VIPTable from "/public/img/VIPTable.webp";
import Aqiqah from "/public/img/Aqiqah.webp";
import TumpengMini from "/public/img/TumpengMini.webp";
import Gallery from "../component/Gallery";

const WeddingCatering = () => {
  return (
    <div>
      <Nav />
      <div className=" h-screen bg-no-repeat bg-cover bg-[url('/img/wedding-catering.webp')] pt-20 ">
        <div className="h-full bg-gradient-to-t from-white to-transparent">
          <div className="flex flex-col justify-center w-full space-y-2 h-full px-32">
            <h1 className="font-argent text-6xl text-vidi font-medium">
              Memorable Wedding <span className="block text-brown">Memorable Catering</span>
            </h1>
            <h2 className="text-vidi font-normal text-xl">~ With Vidi Catering ~</h2>
            <p className="text-brown italic text-xl">
              Experience the Best with VIDI Commitment <br /> to Quality on Your Special Day
            </p>
            <button id="" className="bg-vidi rounded-lg w-max px-6 py-2 text-white text-lg font-semibold hover:opacity-90">
              <a href="#" className="">
                Pricelist VIDI Catering
              </a>
            </button>
          </div>
        </div>
      </div>
      <div className="min-h-max bg-gradient-to-t from-white via-bg_vidi to-white flex justify-center items-center py-28">
        <div className="grid grid-cols-3 gap-8 mx-32 w-full">
          <div className="bg-white rounded-xl shadow-2xl shadow-bg_vidi flex min-w-28 max-h-max items-center  gap-6 px-4 py-4">
            <div className="w-20 h-20 bg-gray-100"></div>
            <div className="text-xl font-semibold text-vidi">
              <h1>Gratis Konsultasi 24 Jam</h1>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-2xl shadow-bg_vidi flex min-w-28 max-h-max items-center gap-6 px-4">
            <div className="w-20 h-20 bg-gray-100"></div>
            <div className="text-xl font-semibold text-vidi">
              <h1>Gratis Food Tasting</h1>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-2xl shadow-bg_vidi flex min-w-28 max-h-max items-center gap-6 px-4">
            <div className="w-20 h-20 bg-gray-100"></div>
            <div className="text-xl font-semibold text-vidi">
              <h1>Gratis Biaya Pengiriman</h1>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex items-center justify-center ">
        <div className="bg-white p-6 rounded-lg max-w-7xl w-full mx-32">
          <h2 className="text-5xl font-bold text-yellow-600 text-center mb-4">Our Offering</h2>
          <p className="text-center text-gray-600 mb-8">Lorem ipsum dolor sit amet consectetur. Metus sed fringilla.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14">
            <div className="flex flex-col items-center bg-white rounded-b-3xl rounded-t-[150px] shadow-md p-4 ">
              <Image src={stall} alt="Stall" className="rounded-3xl mb-4 hover:shadow-xl hover:scale-105 duration-700" />
              <h3 className="text-xl font-medium">Stall</h3>
            </div>
            <div className="flex flex-col items-center bg-white rounded-b-3xl rounded-t-[150px] shadow-md p-4  ">
              <Image src={buffet} alt="Buffet" className="rounded-3xl mb-4 hover:shadow-xl hover:scale-105 duration-700 " />
              <h3 className="text-xl font-medium">Buffet</h3>
            </div>
            <div className="flex flex-col items-center bg-white rounded-b-3xl rounded-t-[150px] shadow-md p-4">
              <Image src={VIPTable} alt="Nasi Kotak" className="rounded-3xl mb-4 hover:shadow-xl hover:scale-105 duration-700" />
              <h3 className="text-xl font-medium">VIP Table</h3>
            </div>
          </div>
        </div>
      </div>
      <Gallery />
    </div>
  );
};

export default WeddingCatering;
