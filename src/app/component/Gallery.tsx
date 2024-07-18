import React from "react";
import Image from "next/image";
import VidiCatering from "/public/img/vidi1.webp";
import Stall from "/public/img/Stall.webp";
import Buffet from "/public/img/Buffet.webp";
import NasiKotak from "/public/img/nasi_box.webp";
import Aqiqah from "/public/img/Aqiqah.webp";
import TumpengMini from "/public/img/tumpeng_mini.webp";

const Gallery = () => {
  return (
    <div className="flex justify-center items-center mb-6 ">
      <div className=" min-h-screen  max-w-[1280px]">
        <div className="mt-16 mb-12">
          <h1 className="text-5xl font-bold text-yellow-600 text-center">Gallery</h1>
        </div>
        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-20">
          <div className="">
            <Image src={Stall} alt="Stall" className="rounded-lg  " />
          </div>
          <div className="">
            <Image src={Buffet} alt="Buffet" className="rounded-lg " />
          </div>
          <div className="">
            <Image src={NasiKotak} alt="Nasi Kotak" className="rounded-lg " />
          </div>
          <div>
            <Image src={NasiKotak} alt="NasiBox" className="rounded-lg " />
          </div>
          <div className="">
            <Image src={Aqiqah} alt="Aqiqah" className="rounded-lg " />
          </div>
          <div className="">
            <Image src={TumpengMini} alt="Tumpeng Mini" className="rounded-lg " />
          </div>
          <div className="">
            <Image src={Stall} alt="Stall" className="rounded-lg " />
          </div>
          <div className="">
            <Image src={Buffet} alt="Buffet" className="rounded-lg " />
          </div>
          <div className="">
            <Image src={NasiKotak} alt="Nasi Kotak" className="rounded-lg " />
          </div>
          <div>
            <Image src={NasiKotak} alt="NasiBox" className="rounded-lg " />
          </div>
          <div className="">
            <Image src={Aqiqah} alt="Aqiqah" className="rounded-lg " />
          </div>
          <div className="">
            <Image src={TumpengMini} alt="Tumpeng Mini" className="rounded-lg mb-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
