"use client";

import React from "react";
import Image from "next/image";
import VidiCatering from "/public/img/vidi1.webp";
import Stall from "/public/img/Stall.webp";
import Buffet from "/public/img/Buffet.webp";
import NasiKotak from "/public/img/NasiBox.webp";
import Aqiqah from "/public/img/Aqiqah.webp";
import TumpengMini from "/public/img/TumpengMini.webp";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import logo from "/public/img/iso_1.png";

const Hero = () => {
  const handleDragStart = (e) => e.preventDefault();

  const items = [
    <div className="flex justify-center" onDragStart={handleDragStart} role="presentation">
      <Image src={logo} alt="Client 1" className="h-24 w-auto" />
    </div>,
    <div className="flex justify-center" onDragStart={handleDragStart} role="presentation">
      <Image src={logo} alt="Client 2" className="h-24 w-auto" />
    </div>,
    <div className="flex justify-center" onDragStart={handleDragStart} role="presentation">
      <Image src={logo} alt="Client 3" className="h-24 w-auto" />
    </div>,
    <div className="flex justify-center" onDragStart={handleDragStart} role="presentation">
      <Image src={logo} alt="Client 4" className="h-24 w-auto" />
    </div>,
    <div className="flex justify-center" onDragStart={handleDragStart} role="presentation">
      <Image src={logo} alt="Client 5" className="h-24 w-auto" />
    </div>,
    <div className="flex justify-center" onDragStart={handleDragStart} role="presentation">
      <Image src={logo} alt="Client 6" className="h-24 w-auto" />
    </div>,
    <div className="flex justify-center" onDragStart={handleDragStart} role="presentation">
      <Image src={logo} alt="Client 7" className="h-24 w-auto" />
    </div>,
    <div className="flex justify-center" onDragStart={handleDragStart} role="presentation">
      <Image src={logo} alt="Client 8" className="h-24 w-auto" />
    </div>,
  ];

  const testimonials = [
    {
      name: "Elia Nang",
      feedback: "Catering yang legend dari saya masih kecil. Semua menu saya sukai, karyawannya juga ramah, pelayanan memuaskan, tidak ragu untuk pesan & menggunakan jasa cateringnya lagi. Semoga lebih maju & lebih berkembang lagi. ",
    },
    {
      name: "Anita Chandra",
      feedback: "Salah satu catering endul di jogja ya. Worth the money banget untuk rasa dan jenis makanan yang di tawarkan. Marketingnya ramah, ibu ownernya juga ramah, pemesanan banyak free ongkir kok",
    },
    {
      name: "Arsisca Yulyant",
      feedback: "Makan di atas bus Pandawa 87 acara family gathering pake vidi katering pun terasa nikmaattt",
    },
    {
      name: "Vida",
      feedback: "Masakannya enak, sehat, bersih dan pelayanannya baik,belum lagi harga terjangkau.... Jadi pengen mesen masakannya lagi",
    },
  ];
  return (
    <>
      <section id="home" className="pt-20 ">
        <div className=" h-screen bg-no-repeat bg-cover bg-[url('/img/bg-hero.webp')]">
          <div className="w-full h-full bg-gradient-to-t from-white to-transparent ">
            <div className="flex flex-wrap justify-center mx-24">
              <div className="w-full self-center pl-6 lg:pl-28 pt-20  lg:pt-[265px] space-y-2">
                <h1 className="font-argent  text-6xl text-vidi font-medium">
                  Memorable Event <span className="block text-brown">Memorable Catering</span>
                </h1>
                <h2 className="text-vidi font-normal text-xl">~ With Vidi Catering ~</h2>
                <p className="text-brown italic text-xl">
                  Experience the Best with VIDI Commitment <br /> to Quality on Your Special Day
                </p>
                <button id="" className="bg-vidi rounded-full px-4 py-2 text-white text-lg font-semibold hover:opacity-90">
                  <a href="#" className="">
                    Pricelist VIDI Catering
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-no-repeat bg-cover bg-[url('/img/indonesia.webp')] text-gray-800 ">
          <h1 className="text-5xl font-bold text-yellow-600 mb-5">Mengapa Harus VIDI?</h1>
          <p className="mb-14 text-center text-xl">Satu-satunya catering di Yogyakarta dan Jawa Tengah yang memiliki 4 standar ISO.</p>

          <div className="flex flex-wrap justify-center mb-8">
            <div className="bg-white shadow-xl rounded-xl p-6 m-4 w-64 text-center ">
              <h2 className="text-xl font-bold mb-2">Sertifikat Halal</h2>
              <p>Memiliki sertifikasi HALAL dari MUI</p>
            </div>
            <div className="bg-white shadow-xl rounded-xl p-6 m-4 w-64">
              <h2 className="text-xl font-bold mb-2">12.000+</h2>
              <p>Telah Melayani lebih dari 12.000+ events</p>
            </div>
            <div className="bg-white shadow-xl rounded-xl p-6 m-4 w-64">
              <h2 className="text-xl font-bold mb-2">4 WQA-ISO +</h2>
              <p>Memiliki 4 sertifikat WQA-ISO tentang keamanan pangan</p>
            </div>
            <div className="bg-white shadow-xl rounded-xl p-6 m-4 w-64">
              <h2 className="text-xl font-bold mb-2">Sejak 1983</h2>
              <p>Pengalaman Dalam Jasa Boga dan Hospitality</p>
            </div>
          </div>
          <div className="overflow-hidden w-full h-28 mt-8 flex justify-center">
            <div className="flex items-center space-x-8 gap-x-48">
              <div className="relative w-32">
                <img src="/img/chse.png" alt="chse" />
              </div>
              <div className="relative w-32">
                <img src="/img/halal.png" alt="halal" />
              </div>
              <div className="relative w-32">
                <img src="/img/iso_1.png" alt="iso" />
              </div>
              <div className="relative w-32">
                <img src="/img/iso2.png" alt="iso" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="min-h-screen flex items-center justify-center py-4 ">
          <div className="bg-bg_vidi p-6 rounded-tl-[80px] rounded-tr-xl rounded-bl-xl rounded-br-[80px] max-w-[1336px] max-h-[624px]  ">
            <div className="flex flex-col md:flex-row items-center px-20 py-14 gap-10">
              <div className="md:w-1/2 relative rounded-tl-[50px] rounded-bl-xl rounded-tr-xl rounded-br-[50px] max-w-[500px] max-h-[464px] overflow-hidden">
                <Image src={VidiCatering} alt="Grha Sarina Vidi" className="" />
              </div>
              <div className="md:w-1/2 md:pl-6 mt-4 md:mt-0">
                <h3 className="text-2xl font-semibold text-vidi mb-2">Tentang</h3>
                <div className="w-16 border-b-2 border-vidi mb-4"></div>
                <h2 className="text-3xl font-bold mb-4">VIDI Catering</h2>
                <p className="mb-4 text-justify">
                  Vidi Catering merupakan perusahaan yang bergera dalam bidang jasa boga dan hospitality service yang spesialis melayani food catering, Catering Weddding, Catering Harian, Government Tender, dan lain-lain. Dengan pengalaman
                  yang dimiliki, VIDI Group terus berkembang dengan mengutamakan kualitas, cita rasa, pelayanan, hingga kebersihan untuk memberikan kepuasan kepada konsumen setia kami. VIDI Group juga menjaga keamanan pangan dengan adanya
                  sertifikasi nasional hingga internasional.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="">
        <div className=" flex items-center justify-center ">
          <div className="bg-white p-6 rounded-lg max-w-7xl w-full">
            <h2 className="text-5xl font-bold text-yellow-600 text-center mb-4">Our Offering</h2>
            <p className="text-center text-gray-600 mb-8">Lorem ipsum dolor sit amet consectetur. Metus sed fringilla.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14">
              <div className="flex flex-col items-center bg-white rounded-b-3xl rounded-t-[150px] shadow-md p-4 ">
                <Image src={Stall} alt="Stall" className="rounded-lg mb-4 " />
                <h3 className="text-xl font-medium">Wedding Catering</h3>
              </div>
              <div className="flex flex-col items-center bg-white rounded-b-3xl rounded-t-[150px] shadow-md p-4">
                <Image src={Buffet} alt="Buffet" className="rounded-lg mb-4" />
                <h3 className="text-xl font-medium">Event Catering</h3>
              </div>
              <div className="flex flex-col items-center bg-white rounded-b-3xl rounded-t-[150px] shadow-md p-4">
                <Image src={NasiKotak} alt="Nasi Kotak" className="rounded-lg mb-4" />
                <h3 className="text-xl font-medium">Ballroom & Convention Hall</h3>
              </div>
              <div className="flex flex-col items-center bg-white rounded-b-3xl rounded-t-[150px] shadow-md p-4">
                <Image src={NasiKotak} alt="NasiBox" className="rounded-lg mb-4" />
                <h3 className="text-xl font-medium">Nasi Box</h3>
              </div>
              <div className="flex flex-col items-center bg-white rounded-b-3xl rounded-t-[150px] shadow-md p-4">
                <Image src={Aqiqah} alt="Aqiqah" className="rounded-lg mb-4" />
                <h3 className="text-xl font-medium">Aqiqah</h3>
              </div>
              <div className="flex flex-col items-center bg-white rounded-b-3xl rounded-t-[150px] shadow-md p-4">
                <Image src={TumpengMini} alt="Tumpeng Mini" className="rounded-lg mb-4" />
                <h3 className="text-xl font-medium">Tumpeng Mini</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="min-h-screen flex items-center justify-center py-4 ">
          <div className="bg-bg_vidi p-6 rounded-tl-[80px] rounded-tr-xl rounded-bl-xl rounded-br-[80px] max-w-[1336px] max-h-[624px]">
            <div className="flex flex-col md:flex-row items-center px-20 py-14 gap-10">
              <div className="md:w-1/2 relative rounded-tl-[50px] rounded-bl-xl rounded-tr-xl rounded-br-[50px] max-w-[500px] max-h-[464px] overflow-hidden">
                <Image src={VidiCatering} alt="Grha Sarina Vidi" className="" />
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
      </section>
      <div className=" flex flex-col items-center justify-center p-4">
        <div className="bg-white p-6 rounded-lg max-w-7xl w-full">
          <h2 className="text-3xl font-bold text-center mb-8">Our Clients</h2>
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
          />
        </div>
      </div>
      <section>
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-t from-bg_vidi to-transparent">
          <div className="grid grid-cols-2 gap-1 max-w-7xl w-full items-center justify-center ">
            <div className="">
              <h3 className="text-lg"> Testimoni</h3>
              <div className="w-20 border-b-2 border-vidi mb-3"></div>
              <h1 className="text-6xl mb-4 font-semibold">Read From Our Satisfied Clients.</h1>
              <p className="text-lg">
                Discover what our satisfied customers have to say <br /> about their experiences with our product/services
              </p>
            </div>
            <div className=" ">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  gap-8 justify-center">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className=" bg-white shadow-lg lg p-8 rounded-2xl h-80  ">
                    <div className="flex items-center mb-4 ">
                      <div className=" text-justify">
                        <h3 className="text-2xl font-semibold">{testimonial.name}</h3>
                      </div>
                    </div>
                    <p className="text-gray-500">{testimonial.feedback}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="min-h-screen flex bg-slate-300 justify-center items-center">
          <div className="max-w-7xl w-full bg-white shadow-2xl min-h-52 rounded-full">
            <div>
              <h1>Fuck</h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
