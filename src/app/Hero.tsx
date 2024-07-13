import Image from "next/image";
import VidiCatering from "/public/img/vidi1.webp";
import Stall from "/public/img/Stall.webp";
import Buffet from "/public/img/Buffet.webp";
import NasiKotak from "/public/img/NasiBox.webp";
import Aqiqah from "/public/img/Aqiqah.webp";
import TumpengMini from "/public/img/TumpengMini.webp";

const Hero = () => {
  return (
    <>
      <section id="home" className="pt-20 ">
        <div className=" h-[720px] bg-no-repeat bg-cover bg-[url('/img/bg-hero.webp')]">
          <div className="w-full h-full bg-gradient-to-t from-white to-transparent">
            <div className="flex flex-wrap">
              <div className="w-full self-center pl-6 lg:pl-28 pt-20  lg:pt-[200px] space-y-2">
                <h1 className="font-argent  text-6xl text-vidi font-medium">
                  Memorable Event <span className="block text-brown">Memorable Catering</span>
                </h1>
                <h2 className="text-vidi font-normal text-xl">~ With Vidi Catering ~</h2>
                <p className="text-brown italic text-xl">
                  Experience the Best with VIDI's Commitment <br /> to Quality on Your Special Day
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
        <div className="min-h-screen flex items-center justify-end py-4 pl-4 pr-0">
          <div className="bg-bg_vidi p-6 rounded-tl-[80px] rounded-bl-2xl max-w-[1336px] max-h-[624px]  right-0 mr-0">
            <div className="flex flex-col md:flex-row items-center px-20 py-14 gap-10">
              <div className="md:w-1/2 relative rounded-tl-[50px] rounded-bl-xl rounded-tr-xl rounded-br-[50px] max-w-[500px] max-h-[464px] overflow-hidden">
                <Image src={VidiCatering} alt="Grha Sarina Vidi" className="" />
              </div>
              <div className="md:w-1/2 md:pl-6 mt-4 md:mt-0">
                <h3 className="text-2xl font-semibold text-vidi mb-2">Tentang</h3>
                <div className="w-16 border-b-2 border-vidi mb-4"></div>
                <h2 className="text-3xl font-bold mb-4">VIDI Catering</h2>
                <p className="mb-4">
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
        <div className="min-h-screen flex items-center justify-center ">
          <div className="bg-white p-6 rounded-lg max-w-7xl w-full">
            <h2 className="text-3xl font-bold text-center mb-4">Our Offering</h2>
            <p className="text-center text-gray-600 mb-8">Lorem ipsum dolor sit amet consectetur. Metus sed fringilla.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex flex-col items-center bg-white rounded-lg shadow-md p-4 ">
                <Image src={Stall} alt="Stall" className="rounded-lg mb-4 -translate-x-10 -translate-y-4" />
                <h3 className="text-lg font-semibold">Stall</h3>
              </div>
              <div className="flex flex-col items-center bg-white rounded-lg shadow-md p-4">
                <Image src={Buffet} alt="Buffet" className="rounded-lg mb-4" />
                <h3 className="text-lg font-semibold">Buffet</h3>
              </div>
              <div className="flex flex-col items-center bg-white rounded-lg shadow-md p-4">
                <Image src={NasiKotak} alt="Nasi Kotak" className="rounded-lg mb-4" />
                <h3 className="text-lg font-semibold">Nasi Kotak</h3>
              </div>
              <div className="flex flex-col items-center bg-white rounded-lg shadow-md p-4">
                <Image src={Aqiqah} alt="Aqiqah" className="rounded-lg mb-4" />
                <h3 className="text-lg font-semibold">Aqiqah</h3>
              </div>
              <div className="flex flex-col items-center bg-white rounded-lg shadow-md p-4">
                <Image src={TumpengMini} alt="Tumpeng Mini" className="rounded-lg mb-4" />
                <h3 className="text-lg font-semibold">Tumpeng Mini</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="min-h-screen flex items-center justify-end py-4 pl-4 pr-0">
          <div className="bg-bg_vidi p-6 rounded-tl-[80px] rounded-bl-2xl max-w-[1336px] max-h-[624px]  right-0 mr-0">
            <div className="flex flex-col md:flex-row items-center px-20 py-14 gap-10">
              <div className="md:w-1/2 relative rounded-tl-[50px] rounded-bl-xl rounded-tr-xl rounded-br-[50px] max-w-[500px] max-h-[464px] overflow-hidden">
                <Image src={VidiCatering} alt="Grha Sarina Vidi" className="" />
              </div>
              <div className="md:w-1/2 md:pl-6 mt-4 md:mt-0">
                <h3 className="text-2xl font-semibold text-vidi mb-2">Ballroom & Convention Hall</h3>
                <div className="w-16 border-b-2 border-vidi mb-4"></div>
                <h2 className="text-3xl font-bold mb-4">Grha Sarina Vidi</h2>
                <p className="mb-4">
                  Berdiri sejak tahun 2003 Grha Sarina Vidi mampu menampung kapasitas tamu undangan sebanyak 1500 di setiap acara. Dengan fasilitas yang mendukung yang di sediakan GSV dan dibantu Vidi Catering yang sudah berpengalaman lebih
                  dari 38 tahun Sehingga mampu menyajikan Fasilitas dan jasa boga secara profesional yang membuat pesta pernikahhan ataupun (MICT) Meeting, Incentive, Convention, & Exhibition terasa mewah.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
