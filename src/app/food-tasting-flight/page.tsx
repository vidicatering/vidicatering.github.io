// src/app/wedding-catering.tsx

import React from "react";
import Image from "next/image";
import image1 from "/public/img/image1.webp";
import image2 from "/public/img/image2.webp";
import image3 from "/public/img/image4.webp";
import image4 from "/public/img/image3.webp";
import image5 from "/public/img/image5.webp";
import image6 from "/public/img/image6.webp";
import image7 from "/public/img/image7.webp";
import image8 from "/public/img/image8.webp";
import image13 from "/public/img/image14.webp";
import image14 from "/public/img/image13.webp";
import image15 from "/public/img/image15.webp";
import image16 from "/public/img/image16.webp";
import senja from "/public/img/senja.webp";
import umrah from "/public/img/umrah.webp";

import Link from "next/link";

const foodtasting = () => {
  return (
    <div className="max-w-sm m-auto">
      <Image src={image13} alt="Stall" className="   " />
      <div className="flex justify-center">
        <button className=" bg-vidi rounded-xl hover:opacity-90 mt-5 mb-10 animate-bounce">
          <Link
            href="https://wa.me/628112546265?text=Hai%20Admin%20VIDI%20Catering%2C%20Saya%20ingin%20bergabung%20di%20acara%20Free%20Food%20Tasting%20Flight%20Batch%202"
            passHref
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-xl py-2 mx-8 flex"
          >
            Klik Untuk Bergabung
          </Link>
        </button>
      </div>
      <Image src={image14} alt="Stall" className="mb-10" />
      <Image src={image1} alt="Stall" className="   " />
      <div className="flex justify-center">
        <button className=" bg-vidi rounded-xl hover:opacity-90  ">
          <Link href="https://api.whatsapp.com/send?phone=628112546265" passHref target="_blank" rel="noopener noreferrer" className="text-white text-xl py-2 mx-8 flex">
            Hubungi Kami
          </Link>
        </button>
      </div>
      <Image src={image2} alt="Stall" className="   " />
      <Image src={image3} alt="Stall" className="-my-5" />
      <div className="flex justify-center mt-5 mb-10">
        <button className=" bg-vidi rounded-xl hover:opacity-90  ">
          <Link href="https://api.whatsapp.com/send?phone=628112546265" passHref target="_blank" rel="noopener noreferrer" className="text-white text-xl py-2 mx-8 flex">
            Hubungi Kami
          </Link>
        </button>
      </div>
      <Image src={image4} alt="Stall" className="" />
      <Image src={image8} alt="Stall" className="" />
      <div className="flex justify-center mb-10">
        <button className=" bg-vidi rounded-xl hover:opacity-90  ">
          <Link href="https://api.whatsapp.com/send?phone=628112546265" passHref target="_blank" rel="noopener noreferrer" className="text-white text-xl py-2 mx-8 flex">
            Hubungi Kami
          </Link>
        </button>
      </div>
      <Image src={image5} alt="Stall" className="   " />
      <Image src={image15} alt="Stall" className="   " />
      <div className="flex justify-center mt-5 mb-10">
        <button className=" bg-vidi rounded-xl hover:opacity-90  ">
          <Link href="https://api.whatsapp.com/send?phone=628112546265" passHref target="_blank" rel="noopener noreferrer" className="text-white text-xl py-2 mx-8 flex">
            Hubungi Kami
          </Link>
        </button>
      </div>
      <Image src={image16} alt="Stall" className="   " />
      <Image src={image6} alt="Stall" className="" />
      <Image src={image7} alt="Stall" className="" />
    </div>
  );
};

export default foodtasting;
