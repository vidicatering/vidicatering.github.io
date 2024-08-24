import Image from "next/image";
import React from "react";
import image1 from "/public/img/vidicaa.png";
import image2 from "/public/img/jutaanmoment.png";
import image3 from "/public/img/gsv2.webp";
import image4 from "/public/img/gsv4.webp";
import image5 from "/public/img/gsv5.webp";
import image6 from "/public/img/hampersbesek.png";
import image7 from "/public/img/image7.webp";
import image8 from "/public/img/image8.webp";
import image13 from "/public/img/image14.webp";
import image14 from "/public/img/image13.webp";
import image15 from "/public/img/image15.webp";
import image16 from "/public/img/image16.webp";
import ballroom from "/public/img/ballroom.webp";
import umrah from "/public/img/umrah.webp";

import Link from "next/link";
import Footer from "../component/Footer";

const vidiPage = () => {
  return (
    <div className="max-w-screen-sm mx-auto">
      <Image src={image1} alt="gsv1" />
      <div className="flex justify-center">
        <button className=" bg-vidi rounded-xl hover:opacity-90 mt-5">
          <Link
            href="https://wa.me/628112546265?text=Hai%20Admin%20VIDI%20Catering%2C%20Saya%20ingin%20bergabung%20di%20acara%20Free%20Food%20Tasting%20Flight%20Batch%202"
            passHref
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-xl py-2 mx-8 flex"
          >
            Pricelist Vidi Catering
          </Link>
        </button>
      </div>
      <Image src={image2} alt="gsv2" />
      <div className="flex justify-center">
        <button className=" bg-vidi rounded-xl hover:opacity-90">
          <Link
            href="https://wa.me/628112546265?text=Hai%20Admin%20VIDI%20Catering%2C%20Saya%20ingin%20bergabung%20di%20acara%20Free%20Food%20Tasting%20Flight%20Batch%202"
            passHref
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-xl py-2 mx-8 flex"
          >
            Hubungi Kami
          </Link>
        </button>
      </div>
      <Image src={image3} alt="gsv3" />
      <div className="flex justify-center">
        <button className=" bg-vidi rounded-xl hover:opacity-90">
          <Link
            href="https://wa.me/628112546265?text=Hai%20Admin%20VIDI%20Catering%2C%20Saya%20ingin%20bergabung%20di%20acara%20Free%20Food%20Tasting%20Flight%20Batch%202"
            passHref
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-xl py-2 mx-8 flex"
          >
            Hubungi Kami
          </Link>
        </button>
      </div>
      <Image src={image6} alt="image3" />
      <div className="flex justify-center">
        <button className=" bg-vidi rounded-xl hover:opacity-90">
          <Link
            href="https://wa.me/628112546265?text=Hai%20Admin%20VIDI%20Catering%2C%20Saya%20ingin%20bergabung%20di%20acara%20Free%20Food%20Tasting%20Flight%20Batch%202"
            passHref
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-xl py-2 mx-8 flex"
          >
            Hubungi Kami
          </Link>
        </button>
      </div>
      <Image src={image4} alt="image3" />
      <div className="flex justify-center">
        <button className=" bg-vidi rounded-xl hover:opacity-90">
          <Link
            href="https://wa.me/628112546265?text=Hai%20Admin%20VIDI%20Catering%2C%20Saya%20ingin%20bergabung%20di%20acara%20Free%20Food%20Tasting%20Flight%20Batch%202"
            passHref
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-xl py-2 mx-8 flex"
          >
            Hubungi Kami
          </Link>
        </button>
      </div>
      <Image src={image5} alt="image5" />
      <div className="flex justify-center -mt-5">
        <button className=" bg-vidi rounded-xl hover:opacity-90">
          <Link
            href="https://wa.me/628112546265?text=Hai%20Admin%20VIDI%20Catering%2C%20Saya%20ingin%20bergabung%20di%20acara%20Free%20Food%20Tasting%20Flight%20Batch%202"
            passHref
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-xl py-2 mx-8 flex"
          >
            Hubungi Kami
          </Link>
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default vidiPage;
