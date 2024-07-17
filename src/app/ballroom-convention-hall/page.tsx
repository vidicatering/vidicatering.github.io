// src/app/wedding-catering.tsx

import React from "react";
import Nav from "../component/Nav";
import Image from "next/image";
import VidiCatering from "/public/img/vidi1.webp";
import Wedding from "/public/img/Wedding.webp";
import Gathering from "/public/img/Gathering.webp";
import Ballroom from "/public/img/ballroom.webp";
import Meeting from "/public/img/Meeting.webp";
import Wisuda from "/public/img/Wisuda.webp";
import Syukuran from "/public/img/Syukuran.webp";
import Gallery from "../component/Gallery";
import Contact from "../component/Contact";
import Footer from "../component/Footer";

const WeddingCatering = () => {
  return (
    <div>
      <Nav />
      <div className=" h-screen bg-no-repeat bg-cover bg-[url('/img/wedding-catering.webp')] pt-20 ">
        <div className="h-full bg-gradient-to-t from-white to-transparent">
          <div className="flex flex-col justify-center w-full space-y-2 h-full px-32">
            <h1 className="font-argent text-8xl text-vidi font-medium">Grha Sarina Vidi</h1>
            <h2 className="text-brown font-medium font-argent text-4xl">Ballroom and Convention Hall</h2>
            <button id="" className="bg-vidi rounded-lg w-max px-6 py-2 text-white text-lg font-semibold hover:opacity-90">
              <a href="#" className="">
                Pricelist Grha Sarina Vidi
              </a>
            </button>
          </div>
        </div>
      </div>
      <div className="min-h-max bg-gradient-to-t from-white via-bg_vidi to-white flex justify-center items-center py-28">
        <div className="grid grid-cols-3 gap-24 mx-32">
          <div className="bg-white rounded-xl flex  max-h-max items-center  gap-6 px-4 py-4 min-w-96">
            <div className="w-20 h-20 bg-gray-100"></div>
            <div className="text-xl font-semibold text-vidi">
              <h1>Fasilitas Lengkap</h1>
            </div>
          </div>
          <div className="bg-white rounded-xl flex  min-w-80 max-h-max items-center gap-6 px-4">
            <div className="w-20 h-20 bg-gray-100"></div>
            <div className="text-xl font-semibold text-vidi">
              <h1>2500+ Tamu</h1>
            </div>
          </div>
          <div className="bg-white rounded-xl  flex min-w-80 max-h-max items-center gap-6 px-4">
            <div className="w-20 h-20 bg-gray-100"></div>
            <div className="text-xl font-semibold text-vidi">
              <h1>Akses Mudah</h1>
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
      <div className="min-h-screen flex items-center justify-center my-0 mx-32">
        <div className="bg-bg_vidi p-6 rounded-tl-[80px] rounded-tr-xl rounded-bl-xl rounded-br-[80px] max-w-[1336px] max-h-[624px]">
          <div className="flex flex-col md:flex-row items-center px-20 py-14 gap-10">
            <div className="md:w-1/2 relative rounded-tl-[50px] rounded-bl-xl rounded-tr-xl rounded-br-[50px] max-w-[500px] max-h-[464px] overflow-hidden">
              <Image src={VidiCatering} alt="Grha Sarina Vidi" className="" />
            </div>
            <div className="md:w-1/2 md:pl-6 mt-4 md:mt-0">
              <h3 className="text-2xl font-semibold text-vidi mb-2">VIDI Catering</h3>
              <div className="w-16 border-b-2 border-vidi mb-4"></div>
              <h2 className="text-4xl font-bold mb-4">Wedding Catering</h2>
              <p className="mb-4 text-justify">
                Di momen pernikahan yang membahagiakan, makanan tentunya menjadi hal yang penting. VIDI Catering menyediakan layanan food tasting untuk memastikan bahwa makanan yang disajikan memiliki cita rasa dan kualitas yang baik.
                Dengan banyaknya varian dan pilihan menu, mulai dari Indonesian Food hingga European Food, VIDI Catering memberikan layanan kustomisasi menu dengan harga yang terjangkau untuk memenuhi kebutuhan dan keinginan konsumen.
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
