const Hero = () => {
  return (
    <>
      <section id="home" className="pt-20 ">
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
    </>
  );
};

export default Hero;
