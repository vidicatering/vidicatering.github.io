import Nav from "./component/Nav";
import Hero from "./component/Hero";
import Footer from "./component/Footer";
import Testi from "./component/testimoni";
import Gallery from "./component/Gallery";
import React from "react";
import Layout from "./layout";
import PopUp from "./component/Popup";
import Contact from "./component/Contact";

const Main = () => (
  <>
    <Nav />
    <Hero />
    <Testi />
    <Contact />
    <Gallery />
    <Footer />
  </>
);
export default Main;
