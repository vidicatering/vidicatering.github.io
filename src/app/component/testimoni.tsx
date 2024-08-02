import Link from "next/link";
import React from "react";

const testimonials = [
  {
    id: 1,
    name: "Elia Nang",
    feedback: "Catering yang legend dari saya masih kecil. Semua menu saya sukai, karyawannya juga ramah, pelayanan memuaskan, tidak ragu untuk pesan & menggunakan jasa cateringnya lagi.",
  },
  {
    id: 2,
    name: "Anita Chandra",
    feedback: "Worth the money banget untuk rasa dan jenis makanan yang di tawarkan. Marketingnya ramah, ibu ownernya juga ramah, pemesanan banyak free ongkir kok",
  },
  {
    id: 3,
    name: "Arsisca Yulyant",
    feedback: "Makan di atas bus Pandawa 87 acara family gathering pake vidi katering pun terasa nikmaattt",
  },
];

const Testi = () => {
  return (
    <div className="min-h-max py-60 flex items-center justify-center bg-gradient-to-t from-white via-bg_vidi to-white">
      <div className="flex lg:flex-row flex-col my-auto max-w-7xl  items-center justify-center lg:mx-32 mx-10">
        <div className="lg:min-w-[500px]">
          <h1 className="text-6xl mb-4 font-semibold">Read From Our Satisfied Clients.</h1>
          <p className="text-xl">Pengalaman nyata dari pelanggan kami ketika menggunakan produk/layanan dari VIDI Catering</p>
          <button className="bg-vidi hover:shadow-lg hover:opacity-90 duration-200 rounded-xl px-4 py-2 mt-4 text-lg text-white">
            <Link href="https://g.page/r/CcduN-goyu0rEAE/review" passHref target="_blank" rel="noopener noreferrer" className="">
              Beri Kami Ulasan
            </Link>
          </button>
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center overflow-hidden">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white shadow-lg p-8 rounded-lg h-80">
                <div className="flex items-center mb-4">
                  <div className="text-justify w-full p-0">
                    <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                    <div className="w-full border-b-2 border-vidi mt-2"></div>
                  </div>
                </div>
                <p className="text-gray-500 text-sm">{testimonial.feedback}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testi;

// src/app/component/Testimonials.tsx
