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
import aboutus from "/public/img/about_us.webp";

const about_us = () => {
  return (
    <div>
      <Nav />
      <div className=" h-[450px] bg-no-repeat bg-cover bg-[url('/img/about_us.webp')] pt-20 ">
        <div className="h-full bg-white bg-opacity-30">
          <div className="h-full bg-gradient-to-t from-white to-100% ">
            <div className="flex flex-col justify-center items-center w-full space-y-2 h-full pt-20">
              <h1 className="font-argent text-7xl text-vidi font-medium drop-shadow-2xl">About Us</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-max flex items-center justify-center mb-10 mt-14 mx-32">
        <div className=" p-6 rounded-tl-[80px] rounded-tr-xl rounded-bl-xl rounded-br-[80px] w-[1336px] h-max flex flex-col items-center py-10 px-8">
          <h1 className="text-brown text-5xl font-argent mb-7">Ikhtisar Perusahaan</h1>
          <p className="font-argent text-xl text-center">
            VIDI Group merupakan perusahaan yang bergerak dalam bidang jasa boga dan hospitality service yang menjadi spesialis dalam melayani food catering, wedding, gathering, meeting, corporate catering, government tender, dan lain lain.
            Dengan pengalaman yang dimiliki, VIDI Group terus berkembang dengan mengutamakan kualitas, cita rasa, pelayanan, hingga kebersihan untuk memberikan kepuasan kepada konsumen setia kami. VIDI Group juga menjaga keamanan pangan
            dengan adanya sertifikasi nasional hingga internasional.
          </p>
        </div>
      </div>
      <div className="min-h-max bg-white w-full flex flex-col justify-center items-center pb-32 pt-10 gap-10">
        <div className="min-h-max grid grid-cols-2 justify-center items-center gap-10">
          <div className="flex flex-col text-center justify-center h-max w-[500px] bg-white shadow-2xl rounded-xl px-8 py-10">
            <h1 className="text-brown text-4xl font-argent mb-4">VISI</h1>
            <p className="font-argent text-lg">
              Menjadikan VIDI Group sebagai perusahaan jasa boga terbaik di Indonesia dimana semua orang bisa mendapatkan jasa catering, pelayanan, dan keamanan pangan yang terbaik dengan harga terjangkau.
            </p>
          </div>
          <div className="flex flex-col text-center justify-center h-max w-[500px] bg-white shadow-2xl rounded-xl px-8 py-9">
            <h1 className="text-brown text-4xl font-argent mb-4">MISI</h1>
            <p className="font-argent text-lg">Menyajikan makanan dan pelayanan yang berkualitas dengan keamanan pangan yang terjamin dan harga terjangkau agar konsumen mendapatkan pengalaman terbaik di momen berharga.</p>
          </div>
        </div>
        <div className="min-h-max bg-black justify-center items-center">
          <div className="flex flex-col text-center justify-center h-max w-full bg-white shadow-2xl rounded-xl mx-20 py-10">
            <h1 className="text-brown text-4xl font-argent mb-4">VISI</h1>
          </div>
        </div>
      </div>
      <div className="min-h-max bg-white w-full flex justify-center items-center pb-32 pt-10">
        <div className="min-h-max grid grid-cols-1 justify-center items-center gap-10">
          <div className="flex flex-col text-center justify-center h-max bg-white shadow-2xl rounded-xl mx-36 py-10">
            <h1 className="text-brown text-4xl font-argent mb-4">VISI</h1>
            <p className="font-argent text-lg">
              Menjadikan VIDI Group sebagai perusahaan jasa boga terbaik di Indonesia dimana semua orang bisa mendapatkan jasa catering, pelayanan, dan keamanan pangan yang terbaik dengan harga terjangkau.
            </p>
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
            <div className="md:w-1/2 relative rounded-tl-[50px] rounded-bl-xl rounded-tr-xl rounded-br-[50px] max-w-[445px] max-h-[372px] overflow-hidden">
              <Image src={Ballroom} alt="Grha Sarina Vidi" className="" />
            </div>
            <div className="md:w-1/2 md:pl-6 mt-4 md:mt-0">
              <h3 className="text-2xl font-semibold text-vidi mb-2">Ballroom & Convention Hall</h3>
              <div className="w-16 border-b-2 border-vidi mb-4"></div>
              <h2 className="text-4xl font-bold mb-4">Grha Sarina Vidi</h2>
              <p className="mb-4 text-justify">
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

export default about_us;
