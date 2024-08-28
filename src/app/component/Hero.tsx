"use client";

import Link from "next/link";
import React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import VidiCatering from "/public/img/vidi1.webp";
import WeddingCatering from "/public/img/weddingcatering.webp";
import EventCatering from "/public/img/eventCatering.webp";
import NasiKotak from "/public/img/nasi_box.webp";
import Hampers from "/public/img/hampers.webp";
import TumpengMini from "/public/img/tumpeng_mini.webp";
import Gallery from "./Gallery";
import Contact from "./Contact";
// import "react-alice-carousel/lib/alice-carousel.css";
import logo from "/public/img/iso_1.png";
import Ballroom from "/public/img/ballroom.webp";
import Testi from "./testimoni";
import empatPuluh from "/public/img/40tahun.webp";
import image11 from "/public/img/image11.webp";
import image12 from "/public/img/jaminanPangan.webp";
import image13 from "/public/img/menu.webp";
import image14 from "/public/img/testingFood.webp";

// Load AliceCarousel dynamically
const AliceCarousel = dynamic(() => import("react-alice-carousel"), { ssr: false });

const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => e.preventDefault();

const items = [
  { id: 1, src: logo, alt: "Client 1" },
  { id: 2, src: logo, alt: "Client 2" },
  { id: 3, src: logo, alt: "Client 3" },
  { id: 4, src: logo, alt: "Client 4" },
  { id: 5, src: logo, alt: "Client 5" },
  { id: 6, src: logo, alt: "Client 6" },
  { id: 7, src: logo, alt: "Client 7" },
  { id: 8, src: logo, alt: "Client 8" },
].map((item) => (
  <div key={item.id} className="flex justify-center" onDragStart={handleDragStart} role="presentation">
    <Image src={item.src} alt={item.alt} className="h-24 w-auto " />
  </div>
));

const Hero = () => {
  return (
    <>
      <div className="h-screen bg-no-repeat bg-cover bg-[url('/img/BG3.webp')] md:bg-[url('/img/bg-hero.webp')] lg:bg-[url('/img/bg-hero.webp')] pt-20">
        <div className="h-full bg-gradient-to-t from-white to-transparent">
          <div className="flex flex-col justify-center w-full space-y-2 h-full lg:px-32 md:px-32 px-10">
            <h1 className="font-argent lg:text-6xl md:text-6xl text-vidi font-medium text-4xl">
              Memorable Event <span className="block text-brown">Memorable Catering</span>
            </h1>
            <h2 className="text-vidi font-normal text-xl">~ With Vidi Catering ~</h2>
            <p className="text-brown italic lg:text-xl md:text-xl text-base">
              Experience the Best with VIDI Commitment <br /> to Quality on Your Special Day
            </p>
            <button className="bg-vidi rounded-lg w-max px-6 py-2 text-white text-lg font-semibold hover:opacity-90">
              <Link href="https://linktr.ee/vidicatering" passHref target="_blank" rel="noopener noreferrer" className="">
                Pricelist VIDI Catering
              </Link>
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-no-repeat bg-cover bg-center bg-[url('/img/indonesia.webp')] text-gray-800">
        <h1 className="text-3xl lg:text-5xl font-bold text-yellow-600 mb-5">Mengapa Harus VIDI?</h1>
        <p className="mb-14 text-center lg:text-2xl text-xl px-4 text-brown">Satu-satunya catering di Yogyakarta dan Jawa Tengah yang memiliki 4 standar ISO.</p>
        <div className="flex flex-wrap justify-center mb-8">
          <div className="bg-white shadow-xl rounded-xl p-6 m-4 w-64 text-center">
            <h2 className="text-xl font-bold mb-2">Sertifikat Halal</h2>
            <p>Memiliki sertifikasi HALAL dari MUI</p>
          </div>
          <div className="bg-white shadow-xl rounded-xl p-6 m-4 w-64 text-center">
            <h2 className="text-xl font-bold mb-2">12.000+</h2>
            <p>Telah Melayani lebih dari 12.000+ events</p>
          </div>
          <div className="bg-white shadow-xl rounded-xl p-6 m-4 w-64 text-center">
            <h2 className="text-xl font-bold mb-2">4 WQA-ISO +</h2>
            <p>Memiliki 4 sertifikat WQA-ISO tentang keamanan pangan</p>
          </div>
          <div className="bg-white shadow-xl rounded-xl p-6 m-4 w-64 text-center">
            <h2 className="text-xl font-bold mb-2">Sejak 1983</h2>
            <p>Pengalaman Dalam Jasa Boga dan Hospitality</p>
          </div>
        </div>
        <div className="overflow-hidden w-full max-h-max my-8 flex items-center justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-4 items-center  lg:gap-x-44 gap-7">
            <div className=" w-20">
              <img src="/img/iso_1.png" alt="iso" />
            </div>
            <div className=" w-20">
              <img src="/img/iso2.png" alt="iso" />
            </div>
            <div className=" w-20">
              <img src="/img/chse.png" alt="chse" />
            </div>
            <div className=" w-20">
              <img src="/img/halal.png" alt="halal" />
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-max flex justify-center items-center my-20 bg-gradient-to-t from-transparent via-bg_vidi to-transparent">
        <div className="lg:max-w-8xl min-h-max w-full lg:mx-32 mx-10 py-12 lg:px-10 px-4 flex lg:flex-row flex-col lg:gap-32 gap-10 md:gap-20 items-center justify-center ">
          <div className="max-w-[550px]">
            <h1 className="font-bold text-6xl">40 Tahun Melayani Indonesia.</h1>
            <p className="mb-4 lg:text-xl mt-5">Berbekal pengalaman kami selama 40 tahun, kami menyajikan pelayanan terbaik disetiap event. Karena mendapatkan pelayanan catering terbaik dengan harga terjangkau adalah hak setiap orang.</p>
          </div>
          <div className="max-w-[500px]">
            <Image src={empatPuluh} alt="Grha Sarina Vidi" className="rounded-3xl mb-4 shadow-2xl" />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center mb-40">
        <div className="bg-white py-6 rounded-lg max-w-7xl w-full lg:mx-32 mx-10">
          <h1 className="lg:text-5xl text-4xl font-bold text-yellow-600 text-center mb-4">Our Offering</h1>
          <p className="lg:text-2xl  text-center text-brown my-4 mb-10">Mendapatkan pelayanan catering terbaik dengan harga terjangkau adalah hak setiap orang.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14">
            <div className="flex flex-col items-center bg-white rounded-b-3xl rounded-t-[150px] shadow-md p-4">
              <Image src={WeddingCatering} alt="Stall" className="rounded-3xl mb-4 hover:shadow-xl hover:scale-105 duration-700" />
              <h3 className="text-xl font-medium">Wedding Catering</h3>
            </div>
            <div className="flex flex-col items-center bg-white rounded-b-3xl rounded-t-[150px] shadow-md p-4">
              <Image src={EventCatering} alt="Buffet" className="rounded-3xl mb-4 hover:shadow-xl hover:scale-105 duration-700" />
              <h3 className="text-xl font-medium">Event Catering</h3>
            </div>
            <div className="flex flex-col items-center bg-white rounded-b-3xl rounded-t-[150px] shadow-md p-4">
              <Image src={Ballroom} alt="Nasi Kotak" className="rounded-3xl mb-4 hover:shadow-xl hover:scale-105 duration-700" />
              <h3 className="text-xl font-medium">Ballroom & Convention Hall</h3>
            </div>
            <div className="flex flex-col items-center bg-white rounded-b-3xl rounded-t-[150px] shadow-md p-4">
              <Image src={NasiKotak} alt="NasiBox" className="rounded-3xl mb-4 hover:shadow-xl hover:scale-105 duration-700" />
              <h3 className="text-xl font-medium">Nasi Box</h3>
            </div>
            <div className="flex flex-col items-center bg-white rounded-b-3xl rounded-t-[150px] shadow-md p-4">
              <Image src={Hampers} alt="Aqiqah" className="rounded-3xl mb-4 hover:shadow-xl hover:scale-105 duration-700" />
              <h3 className="text-xl font-medium">Hampers</h3>
            </div>
            <div className="flex flex-col items-center bg-white rounded-b-3xl rounded-t-[150px] shadow-md p-4">
              <Image src={TumpengMini} alt="Tumpeng Mini" className="rounded-3xl mb-4 hover:shadow-xl hover:scale-105 duration-700" />
              <h3 className="text-xl font-medium">Tumpeng Mini</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-max flex justify-center items-center">
        <div className="lg:max-w-8xl min-h-max w-full bg-white lg:mx-32 mx-10 py-12 lg:px-10 px-4 flex lg:flex-row flex-col lg:gap-32 gap-10 md:gap-20 items-center justify-center ">
          <div className="max-w-[550px]">
            <h1 className="font-bold text-6xl">Gratis Konsultasi 24 Jam.</h1>
            <p className="mb-4 lg:text-xl mt-5">
              Konsumen tentu menginginkan hasil yang maksimal di setiap momen yang berharga. Layanan Konsultasi 24 Jam Gratis yang dimiliki VIDI dapat membantu konsumen untuk mengoptimalkan budget dalam mempersiapkan segala kebutuhan.
            </p>
          </div>
          <div className="max-w-[500px]">
            <Image src={image11} alt="Grha Sarina Vidi" className="rounded-3xl mb-4 shadow-2xl" />
          </div>
        </div>
      </div>
      <div className="min-h-max flex justify-center items-center">
        <div className="lg:max-w-8xl min-h-max w-full bg-white lg:mx-32 mx-10 py-12 lg:px-10 px-4 flex lg:flex-row flex-col lg:gap-32 gap-10 md:gap-20 items-center justify-center ">
          <div className="max-w-[500px]">
            <Image src={image14} alt="Gratis Food Tasting." className="rounded-3xl mb-4 shadow-2xl" />
          </div>
          <div className="max-w-[550px]">
            <h1 className="font-bold text-6xl">Gratis Food Tasting.</h1>
            <p className="mb-4 lg:text-xl mt-5">
              Urusan makanan dianggap krusial bagi sebagian orang ketika akan mengadakan suatu acara karena dapat mempengaruhi ekspektasi serta kepuasan yang akan tamu terima. VIDI memberikan layanan Gratis Food Tasting kepada konsumen yang
              sudah sepakat terhadap paket menu yang telah dipilih. Hal ini akan membuat konsumen merasa aman dan nyaman karena sudah lebih dulu mengetahui bagaimana cita rasa dan kualitas makanan yang akan disajikan.
            </p>
          </div>
        </div>
      </div>
      <div className="min-h-max flex justify-center items-center">
        <div className="lg:max-w-8xl min-h-max w-full bg-white lg:mx-32 mx-10 py-12 lg:px-10 px-4 flex lg:flex-row flex-col lg:gap-32 gap-10 md:gap-20 items-center justify-center ">
          <div className="max-w-[550px]">
            <h1 className="font-bold text-6xl">Kustomisasi Menu Sepuasnya.</h1>
            <p className="mb-4 lg:text-xl mt-5">
              Makanan menjadi hal penting di momen berharga setiap orang. Oleh karena itu, VIDI menyediakan layanan kustomisasi menu untuk dapat menyesuaikan kebutuhan konsumen dengan kualitas dan cita rasa yang terjamin.
            </p>
          </div>
          <div className="max-w-[500px]">
            <Image src={image13} alt="Kustomisasi Menu Sepuasnya." className="rounded-3xl mb-4 shadow-2xl" />
          </div>
        </div>
      </div>
      <div className="min-h-max flex justify-center items-center">
        <div className="lg:max-w-8xl min-h-max w-full bg-white lg:mx-32 mx-10 py-12 lg:px-10 px-4 flex lg:flex-row flex-col lg:gap-32 gap-10 md:gap-20 items-center justify-center ">
          <div className="max-w-[500px]">
            <Image src={image12} alt="Jaminan Keamanan Pangan." className="rounded-3xl mb-4 shadow-2xl" />
          </div>
          <div className="max-w-[550px]">
            <h1 className="font-bold text-6xl">Jaminan Keamanan Pangan.</h1>
            <p className="mb-4 lg:text-xl mt-5">
              VIDI telah mendapat pengakuan internasional atas sistem manajemen keamanan pangan. Manajemen mutu standar HACCP, Sertifikasi Higiene Sanitasi Pengelolaan Makanan, hingga standar mutu sertifikasi WQA-ISO telah diterapkan oleh
              VIDI.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
