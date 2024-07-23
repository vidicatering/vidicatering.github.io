import Nav from "./component/Nav";
import Hero from "./component/Hero";
import Footer from "./component/Footer";
import React from "react";
import Layout from "./layout";
import PopUp from "./component/Popup";

const Main = () => (
  <>
    <PopUp />
    <Nav />
    <Hero />
    <Footer />
  </>
);
export default Main;
