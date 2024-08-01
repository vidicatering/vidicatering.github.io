// src/app/wedding-catering.tsx

import React from "react";
import Image from "next/image";
import Wedding from "/public/img/Wedding.webp";
import Gathering from "/public/img/Gathering.webp";
import Ballroom from "/public/img/ballroom.webp";
import Meeting from "/public/img/Meeting.webp";
import Wisuda from "/public/img/Wisuda.webp";
import Syukuran from "/public/img/Syukuran.webp";
import Gallery from "../component/Gallery";
import Contact from "../component/Contact";
import Footer from "../component/Footer";
import Link from "next/link";
import Hall from "/public/img/hall.webp";
import Youth from "/public/img/youth.webp";
import map from "/public/img/map.webp";

const WeddingCatering = () => {
  return (
    <div>
      <div className=" h-screen bg-no-repeat bg-cover bg-[url('/img/GrhaSarinaVidi.webp')] pt-20 ">
        <div className="h-full bg-gradient-to-t from-white to-transparent">
          <div className="flex flex-col justify-center w-full space-y-2 h-full lg:px-32 md:px-32 px-10">
            <h1 className="font-argent lg:text-8xl md:text-6xl text-vidi font-medium text-5xl">Grha Sarina Vidi</h1>

            <h2 className="text-brown font-medium font-argent text-3xl">Ballroom and Convention Hall</h2>
            <button className="bg-vidi rounded-lg w-max px-6 py-2 text-white text-lg font-semibold hover:opacity-90">
              <Link href="https://api.whatsapp.com/send?phone=628112546265" passHref target="_blank" rel="noopener noreferrer" className="">
                Pricelist Grha Sarina Vidi
              </Link>
            </button>
          </div>
        </div>
      </div>
      <div className="min-h-max bg-gradient-to-t from-white via-bg_vidi to-white flex justify-center items-center py-28">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 lg:mx-32 mx-10">
          <div className="bg-white rounded-xl shadow-2xl shadow-bg_vidi flex min-w-28 max-h-max items-center gap-6 px-8 py-4">
            <div className="w-20 h-20 ">
              <Image src={Hall} alt="Grha Sarina Vidi" className=" drop-shadow-xl" />
            </div>
            <div className="text-2xl font-semibold text-vidi">
              <h1>Fasilitas Lengkap</h1>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-2xl shadow-bg_vidi flex min-w-28 max-h-max items-center gap-6 px-8 py-4">
            <div className="w-20 h-20 ">
              <Image src={Youth} alt="Grha Sarina Vidi" className=" drop-shadow-xl" />
            </div>
            <div className="text-2xl font-semibold text-vidi">
              <h1>2500+ Tamu</h1>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-2xl shadow-bg_vidi flex min-w-28 max-h-max items-center gap-6 px-8 py-4">
            <div className="w-20 h-20 ">
              <Image src={map} alt="Grha Sarina Vidi" className="" />
            </div>
            <div className="text-2xl font-semibold text-vidi">
              <h1>Akses Mudah</h1>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex items-center justify-center ">
        <div className="bg-white py-6 rounded-lg max-w-7xl w-full lg:mx-32 mx-10">
          <h2 className="lg:text-5xl text-4xl font-bold text-yellow-600 text-center mb-4">Our Offering</h2>
          <p className="lg:text-2xl text-lg text-center text-brown my-4 mb-10">Mendapatkan pelayanan terbaik dengan harga terjangkau adalah hak setiap orang.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14">
            <div className="flex flex-col items-center bg-white rounded-b-3xl rounded-t-[150px] shadow-md p-4 ">
              <Image src={Wedding} alt="Stall" className="rounded-3xl mb-4 hover:shadow-xl hover:scale-105 duration-700" />
              <h3 className="text-xl font-medium">Wedding</h3>
            </div>
            <div className="flex flex-col items-center bg-white rounded-b-3xl rounded-t-[150px] shadow-md p-4  ">
              <Image src={Meeting} alt="Buffet" className="rounded-3xl mb-4 hover:shadow-xl hover:scale-105 duration-700 " />
              <h3 className="text-xl font-medium">Meeting</h3>
            </div>
            <div className="flex flex-col items-center bg-white rounded-b-3xl rounded-t-[150px] shadow-md p-4">
              <Image src={Gathering} alt="Nasi Kotak" className="rounded-3xl mb-4 hover:shadow-xl hover:scale-105 duration-700" />
              <h3 className="text-xl font-medium">Gathering</h3>
            </div>
            <div className="flex flex-col items-center bg-white rounded-b-3xl rounded-t-[150px] shadow-md p-4 ">
              <Image src={Syukuran} alt="Stall" className="rounded-3xl mb-4 hover:shadow-xl hover:scale-105 duration-700" />
              <h3 className="text-xl font-medium">Syukuran</h3>
            </div>
            <div className="flex flex-col items-center bg-white rounded-b-3xl rounded-t-[150px] shadow-md p-4  ">
              <Image src={Wisuda} alt="Buffet" className="rounded-3xl mb-4 hover:shadow-xl hover:scale-105 duration-700 " />
              <h3 className="text-xl font-medium">Wisuda</h3>
            </div>
            <div className="flex flex-col items-center bg-white rounded-b-3xl rounded-t-[150px] shadow-md p-4">
              <Image src={Ballroom} alt="Nasi Kotak" className="rounded-3xl mb-4 hover:shadow-xl hover:scale-105 duration-700" />
              <h3 className="text-xl font-medium">Ballroom Rental</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-screen flex items-center justify-center py-4 lg:my-0 lg:mx-32 mx-10 mb-10">
        <div className="bg-bg_vidi p-6 rounded-tl-[80px] rounded-tr-xl rounded-bl-xl rounded-br-[80px] max-w-[1336px] lg:max-h-[624px] max-h-max ">
          <div className="flex flex-col md:flex-row justify-center items-center lg:px-20 lg:py-14 px-10 py-10 gap-2 lg:gap-10">
            <div className="md:w-1/2  rounded-tl-[50px] rounded-bl-xl rounded-tr-xl rounded-br-[50px] min-w-[200px] min-h-[150px] lg:max-w-[445px] lg:max-h-[372px] overflow-hidden">
              <Image src={Ballroom} alt="Grha Sarina Vidi" className="" />
            </div>
            <div className="md:w-1/2 md:pl-6 mt-4 md:mt-0">
              <h3 className="lg:text-2xl text-xl font-semibold text-vidi mb-2">Ballroom & Convention Hall</h3>
              <div className="w-16 border-b-2 border-vidi mb-4"></div>
              <h2 className="lg:text-3xl text-2xl font-bold mb-4">Grha Sarina Vidi</h2>
              <p className="mb-4 lg:text-justify">
                Berdiri sejak tahun 2003 Grha Sarina Vidi mampu menampung kapasitas tamu undangan sebanyak 1500 di setiap acara. Dengan fasilitas yang mendukung yang di sediakan GSV dan dibantu Vidi Catering yang sudah berpengalaman lebih
                dari 38 tahun Sehingga mampu menyajikan Fasilitas dan jasa boga secara profesional yang membuat pesta pernikahhan ataupun (MICT) Meeting, Incentive, Convention, & Exhibition terasa mewah.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Contact />
      <Gallery />
      <Footer />
    </div>
  );
};

export default WeddingCatering;
