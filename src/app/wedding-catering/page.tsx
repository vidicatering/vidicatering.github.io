// src/app/wedding-catering.tsx

import React from "react";
import Image from "next/image";
import VidiCatering from "/public/img/vidi1.webp";
import stall from "/public/img/Stall.webp";
import buffet from "/public/img/Buffet.webp";
import VIPTable from "/public/img/VIPTable.webp";
import Aqiqah from "/public/img/Aqiqah.webp";
import TumpengMini from "/public/img/TumpengMini.webp";
import Gallery from "../component/Gallery";
import Contact from "../component/Contact";
import Footer from "../component/Footer";
import Hours from "/public/img/24-hours.webp";
import Tag from "/public/img/tag.webp";
import delivery from "/public/img/free-delivery.webp";
import Link from "next/link";

const WeddingCatering = () => {
  return (
    <div>
      <div className=" h-screen bg-no-repeat bg-cover bg-[url('/img/wedding-catering.webp')] pt-20 ">
        <div className="h-full bg-gradient-to-t from-white via-transparent to-transparent ">
          <div className="flex flex-col justify-center w-full space-y-2 h-full px-32">
            <h1 className="font-argent text-6xl text-vidi font-medium">
              Memorable Wedding <span className="block text-brown">Memorable Catering</span>
            </h1>
            <h2 className="text-vidi font-normal text-xl">~ With Vidi Catering ~</h2>
            <p className="text-brown italic text-xl">
              Experience the Best with VIDI Commitment <br /> to Quality on Your Special Day
            </p>
            <button className="bg-vidi rounded-lg w-max px-6 py-2 text-white text-lg font-semibold hover:opacity-90">
              <Link href="https://api.whatsapp.com/send?phone=628112546265" passHref target="_blank" rel="noopener noreferrer" className="">
                Pricelist VIDI Catering
              </Link>
            </button>
          </div>
        </div>
      </div>
      <div className="min-h-max bg-gradient-to-t from-white via-bg_vidi to-white flex justify-center items-center py-28">
        <div className="grid grid-cols-3 gap-10 mx-32">
          <div className="bg-white rounded-xl shadow-2xl shadow-bg_vidi flex min-w-28 max-h-max items-center  gap-6 px-8 py-4">
            <div className="w-20 h-20 ">
              <Image src={Hours} alt="Grha Sarina Vidi" className="" />
            </div>
            <div className="text-2xl font-semibold text-vidi">
              <h1>Gratis Konsultasi 24 Jam</h1>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-2xl shadow-bg_vidi flex min-w-28 max-h-max items-center gap-6 px-8 py-4">
            <div className="w-20 h-20 ">
              <Image src={Tag} alt="Grha Sarina Vidi" className="" />
            </div>
            <div className="text-2xl font-semibold text-vidi">
              <h1>Gratis Food Tasting</h1>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-2xl shadow-bg_vidi flex min-w-28 max-h-max items-center gap-6 px-8 py-4">
            <div className="w-20 h-20 ">
              <Image src={delivery} alt="Grha Sarina Vidi" className="" />
            </div>
            <div className="text-2xl font-semibold text-vidi">
              <h1>Gratis Biaya Pengiriman</h1>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex items-center justify-center ">
        <div className="bg-white p-6 rounded-lg max-w-7xl w-full mx-32">
          <h2 className="text-5xl font-bold text-yellow-600 text-center mb-4">Our Offering</h2>
          <p className="text-2xl text-center text-brown my-4 mb-10">Mendapatkan pelayanan catering terbaik dengan harga terjangkau adalah hak setiap orang.</p>
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
