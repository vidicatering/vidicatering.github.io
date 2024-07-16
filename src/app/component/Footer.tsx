import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer>
      <div className="container mx-32">
        <div className="flex items-center justify-center relative my-7 gap-6">
          <div className="">
            <a href="#home">
              <img src="/img/vidi_logo.png" alt="Logo Vidi" className="w-36 m-auto" />
            </a>
          </div>
          <div className="border border-vidi h-10"></div>
          <div>
            <h3 className="text-vidi">Copyright VIDI Catering 2024</h3>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
