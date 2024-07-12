const Hero = () => {
  return (
    <>
      <section id="home" className="pt-14 ">
        <div className=" h-[720px] bg-no-repeat bg-cover bg-[url('/img/bg-hero.webp')]">
          <div className="w-full h-full bg-gradient-to-t from-white to-transparent">
            <div className="flex flex-wrap">
              <div className="w-full self-center pl-6 lg:pl-28 pt-20  lg:pt-[200px] space-y-2">
                <h1 className="font-argent  text-5xl text-vidi font-semibold">
                  Memorable Event <span className="block text-brown">Memorable Catering</span>
                </h1>
                <h2 className="text-vidi font-normal text-lg">~ With Vidi Catering ~</h2>
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
          <h1 className="text-5xl font-bold text-yellow-600 mb-5">Why Should Choose Us ?</h1>
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
    </>
  );
};

export default Hero;
