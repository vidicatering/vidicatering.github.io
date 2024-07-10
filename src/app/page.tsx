export default function Home() {
  return (
    <>
      <header className="bg-transparent absolute top-0 left-0 w-full flex items-center z-10">
        <div className="container mx-auto">
          <div className="flex items-center justify-between relative">
            <div className="px-4">
              <a href="#home">
                <img src="/img/vidi_logo.png" alt="Logo Vidi" className="w-36 m-auto" />
              </a>
            </div>
            <div className="flex items-center px-4 ">
              <button id="hamburger" name="hamburger" type="button" className="block absolute right-4 lg:hidden ">
                <span className="hamburger-line transition duration-300 ease-in-out origin-top-left"></span>
                <span className="hamburger-line transition duration-300 ease-in-out "></span>
                <span className="hamburger-line transition duration-300 ease-in-out origin-bottom-left"></span>
              </button>

              <nav id="nav-menu" className="hidden absolute py-5 bg-white shadow-lg rounded-lg max-w-[320px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none">
                <ul className="block lg:flex">
                  <li className="group">
                    <a href="#home" className="text-base py-2 mx-8 flex group-hover:text-vidi">
                      Beranda
                    </a>
                  </li>
                  <li className="group">
                    <a href="#catering-service" className="text-base py-2 mx-8 flex group-hover:text-vidi">
                      Catering Service
                    </a>
                  </li>
                  <li className="group">
                    <a href="#ballroom-convention-hall" className="font- text-base py-2 mx-8 flex group-hover:text-vidi">
                      Ballroom & Convention Hall
                    </a>
                  </li>
                  <li className="group">
                    <a href="#about" className="text-base py-2 mx-8 flex group-hover:text-vidi">
                      About
                    </a>
                  </li>
                  <li className="group">
                    <button className="font-druk bg-vidi rounded-2xl hover:bg-white hover:border hover:border-vidi mx-4 hover:mx-[15px]">
                      <a href="" className="text-white py-2 mx-8 flex group-hover:text-vidi">
                        {" "}
                        Contact
                      </a>
                    </button>
                  </li>
                  <li className="group">
                    <button className="font-mukta bg-vidi rounded-2xl hover:bg-white hover:border hover:border-vidi mx-4 hover:mx-[15px]">
                      <a href="" className="text-white py-2 mx-8 flex group-hover:text-vidi">
                        {" "}
                        Contact
                      </a>
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>

      <body>
        <section id="home" className="pt-36"></section>
      </body>
      <script src="/js/script.js"></script>
    </>
  );
}
