import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Testi from "./components/testimoni";
import Gallery from "./components/Gallery";
import React from "react";
import Layout from "./layout";
import PopUp from "./components/Popup";
import Contact from "./components/Contact";

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
