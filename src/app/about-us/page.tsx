// src/app/wedding-catering.tsx
"use client";

import React from "react";
import Image from "next/image";
import Gallery from "../components/Gallery";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import "react-alice-carousel/lib/alice-carousel.css";
import logo from "/public/img/iso_1.png";
import dynamic from "next/dynamic";

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
    <Image src={item.src} alt={item.alt} className="h-24 w-auto" />
  </div>
));

const about_us = () => {
  return (
    <div>
      <div className=" h-[450px] bg-no-repeat bg-cover bg-[url('/img/about_us.webp')]  ">
        <div className="h-full bg-white bg-opacity-30">
          <div className="h-full bg-gradient-to-t from-white to-100% ">
            <div className="flex flex-col justify-center items-center w-full space-y-2 h-full pt-40">
              <h1 className="font-argent text-7xl text-vidi font-medium drop-shadow-2xl">About Us</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-max flex items-center justify-center mb-10 mt-14 mx-32">
        <div className=" p-6 rounded-tl-[80px] rounded-tr-xl rounded-bl-xl rounded-br-[80px] w-[1336px] h-max flex flex-col items-center py-10 px-8">
          <h1 className="text-brown text-5xl font-argent mb-7 text-center">Ikhtisar Perusahaan</h1>
          <p className="font-argent text-xl text-center">
            VIDI Group merupakan perusahaan yang bergerak dalam bidang jasa boga dan hospitality service yang menjadi spesialis dalam melayani food catering, wedding, gathering, meeting, corporate catering, government tender, dan lain lain.
            Dengan pengalaman yang dimiliki, VIDI Group terus berkembang dengan mengutamakan kualitas, cita rasa, pelayanan, hingga kebersihan untuk memberikan kepuasan kepada konsumen setia kami. VIDI Group juga menjaga keamanan pangan
            dengan adanya sertifikasi nasional hingga internasional.
          </p>
        </div>
      </div>
      <div className="min-h-max bg-white flex flex-col justify-center items-center pb-32 pt-10 gap-10">
        <div className="min-h-max grid lg:grid-cols-2 grid-cols-1 justify-center items-center gap-10 mx-10">
          <div className="flex flex-col text-center justify-center h-max max-w-[500px] bg-white shadow-2xl rounded-xl px-8 py-10 ">
            <h1 className="text-brown text-4xl font-argent mb-4">VISI</h1>
            <p className="font-argent text-lg">
              Menjadikan VIDI Group sebagai perusahaan jasa boga terbaik di Indonesia dimana semua orang bisa mendapatkan jasa catering, pelayanan, dan keamanan pangan yang terbaik dengan harga terjangkau.
            </p>
          </div>
          <div className="flex flex-col text-center justify-center h-max max-w-[500px] bg-white shadow-2xl rounded-xl px-8 py-9">
            <h1 className="text-brown text-4xl font-argent mb-4">MISI</h1>
            <p className="font-argent text-lg">Menyajikan makanan dan pelayanan yang berkualitas dengan keamanan pangan yang terjamin dan harga terjangkau agar konsumen mendapatkan pengalaman terbaik di momen berharga.</p>
          </div>
        </div>
        <div className="min-h-max flex items-center justify-center mb-0 mt-14 lg:mx-32 mx-10">
          <div className=" p-6 rounded-tl-[80px] rounded-tr-xl rounded-bl-xl rounded-br-[80px] h-max flex flex-col items-center py-10 px-8">
            <p className="font-argent text-3xl text-center">
              Lebih dari 35 tahun pengalaman, VIDI Group telah dipercaya lebih dari 300 institusi terkemuka, melayani 5000<span className="font-mukta">+</span> Wedding<span className="font-serif"> & </span>Event dengan 1000 lebih menu
              pilihan. Kami mendedikasikan pengalaman dalam bidang ini untuk memberikan pelayanan terbaik di moment berharga anda
            </p>
          </div>
        </div>
      </div>
      {/* <div className="flex flex-col items-center justify-center mb-20 mx-32 h-28">
        <div className="bg-white p-6 rounded-lg max-w-7xl w-full">
          <AliceCarousel
            mouseTracking
            items={items}
            responsive={{
              0: { items: 1 },
              568: { items: 2 },
              1024: { items: 4 },
            }}
            autoPlay
            autoPlayInterval={3000}
            disableButtonsControls={true}
            infinite
          />
        </div>
      </div> */}
      <div className="min-h-screen flex items-center justify-center my-0 mb-12">
        <div className="bg-white p-6 rounded-3xl border border-bg_vidi max-w-[1336px] min-h-max shadow-xl lg:mx-32 mx-10">
          <div className="grid lg:grid-cols-2 grid-cols-1 items-center lg:px-10 py-14 gap-8 text-3xl text-vidi font-medium font-mukta">
            <div className="grid grid-cols-1 gap-y-7">
              <div className=" rounded-xl flex  max-h-max items-center px-8 py-4 lg:min-w-96 ">
                <div className="">
                  <h1 className="mb-2">2011 - Kemenag DKI Jakarta</h1>
                  <p className="text-xl text-brown font-argent">VIDI berkontribusi dalam menyediakan catering jamaah haji DKI Jakarta di Mekkah, Arab Saudi.</p>
                </div>
              </div>
              <div className="brounded-xl flex  max-h-max items-center px-8 py-4 lg:min-w-96">
                <div className="">
                  <h1 className="mb-2">2015 - Badan Narkotika Nasional</h1>
                  <p className="text-xl text-brown font-argent">VIDI berkontribusi dalam pengadaan makanan di Balai Besar Rehabilitasi BNN</p>
                </div>
              </div>
              <div className="rounded-xl flex  max-h-max items-center px-8 py-4 lg:min-w-96 ">
                <div className="">
                  <h1 className="mb-2">2015 - Lembaga Sandi Negara</h1>
                  <p className="text-xl text-brown font-argent">VIDI berkontribusi dalam pengadaan konsumsi mahasiswa Sekolah Tinggi Sandi Negara</p>
                </div>
              </div>
              <div className="rounded-xl flex  max-h-max items-center px-8 py-4 lg:min-w-96">
                <div className="">
                  <h1 className="mb-2">2016 - Kementerian Keuangan</h1>
                  <p className="text-xl text-brown font-argent">VIDI berkontribusi dalam pengadaan konsumsi Diklat Tahap I Pusdiklat Bea Dan Cukai Tahun 2016.</p>
                </div>
              </div>
              <div className="rounded-xl flex  max-h-max items-center px-8 py-4 lg:min-w-96">
                <div className="">
                  <h1 className="mb-2">2017 - Politeknik Ilmu Pelayaran</h1>
                  <p className="text-xl text-brown font-argent">VIDI berkontribusi dalam pengadaan konsumsi Diklat Keterampilan Khusus Pelaut di Semarang.</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-y-7">
              <div className="rounded-xl flex  max-h-max items-center px-8 py-4 lg:min-w-96 ">
                <div className="">
                  <h1 className="mb-2">2018 - Kemendikbudristek</h1>
                  <p className="text-xl text-brown font-argent">VIDI berkontribusi dalam pengadaan konsumsi Seminar Pendidikan Matematika.</p>
                </div>
              </div>
              <div className="rounded-xl flex  max-h-max items-center px-8 py-4 lg:min-w-96">
                <div className="">
                  <h1 className="mb-2">2020 - Akademi Imigrasi</h1>
                  <p className="text-xl text-brown font-argent">VIDI berkontribusi dalam pengadaan konsumsi makan Taruna di Politeknik Imigrasi BPSDM Hukum dan HAM</p>
                </div>
              </div>
              <div className="rounded-xl flex  max-h-max items-center px-8 py-4 lg:min-w-96">
                <div className="">
                  <h1 className="mb-2">2022 - PKN STAN</h1>
                  <p className="text-xl text-brown font-argent">VIDI berkontribusi dalam pengadaan konsumsi mahasiswa Politeknik Keuangan Negara STAN</p>
                </div>
              </div>
              <div className="rounded-xl flex  max-h-max items-center px-8 py-4 lg:min-w-96">
                <div className="">
                  <h1 className="mb-2">2023 - Embarkasi Haji Bekasi</h1>
                  <p className="text-xl text-brown font-argent">VIDI berkontribusi dalam menyediakan catering jamaah haji Bekasi</p>
                </div>
              </div>
              <div className="rounded-xl flex  max-h-max items-center px-8 py-4 lg:min-w-96">
                <div className="">
                  <h1 className="mb-2">2023 - Embarkasi Haji Indramayu</h1>
                  <p className="text-xl text-brown font-argent">VIDI berkontribusi dalam pengadaan makanan di Balai Besar Rehabilitasi BNN</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-max flex items-center justify-center mt-14 mb-20 lg:mx-32 mx-10">
        <div className=" p-6 rounded-tl-[80px] rounded-tr-xl rounded-bl-xl rounded-br-[80px] w-[1336px] h-max flex flex-col items-center py-10 px-8">
          <p className="font-argent text-3xl text-center">Mendapatkan pelayanan catering terbaik dengan harga terjangkau adalah hak setiap orang.</p>
        </div>
      </div>
      <Contact />
      <Gallery />
      <Footer />
    </div>
  );
};

export default about_us;
