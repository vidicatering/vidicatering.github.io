import React from "react";
import Image, { ImageProps } from "next/image";
import Stall from "/public/img/Stall.webp";
import Buffet from "/public/img/Buffet.webp";
import NasiKotak from "/public/img/nasi_box.webp";
import TumpengMini from "/public/img/tumpeng_mini.webp";
import gsv from "/public/img/gsv.webp";
import Wedding from "/public/img/Wedding.webp";
import Gathering from "/public/img/Gathering.webp";
import Ballroom from "/public/img/ballroom.webp";
import Meeting from "/public/img/Meeting.webp";
import Wisuda from "/public/img/Wisuda.webp";
import Syukuran from "/public/img/Syukuran.webp";
import hampers from "/public/img/hampers.webp";

interface CustomImageProps {
  src: StaticImageData;
  alt: string;
}

const images: CustomImageProps[] = [
  { src: Stall, alt: "Stall" },
  { src: Buffet, alt: "Buffet" },
  { src: NasiKotak, alt: "Nasi Kotak" },
  { src: TumpengMini, alt: "Tumpeng Mini" },
  { src: hampers, alt: "Hampers" },
  { src: gsv, alt: "Grha Sarina Vidi" },
  { src: Wedding, alt: "Wedding" },
  { src: Gathering, alt: "Gathering" },
  { src: Ballroom, alt: "Ballroom" },
  { src: Meeting, alt: "Meeting" },
  { src: Wisuda, alt: "Wisuda" },
  { src: Syukuran, alt: "Syukuran" },
];

const shuffleArray = (array: CustomImageProps[]): CustomImageProps[] => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const Gallery: React.FC = () => {
  const shuffledImages = shuffleArray([...images]);

  return (
    <div className="flex justify-center items-center mb-6">
      <div className="min-h-screen max-w-[1280px]">
        <div className="mt-16 mb-12">
          <h1 className="text-5xl font-bold text-yellow-600 text-center">Gallery</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mx-10 lg:mx-2">
          {shuffledImages.map((image, index) => (
            <div key={index} className="">
              <Image src={image.src} alt={image.alt} className="rounded-lg" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
