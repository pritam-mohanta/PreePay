import React from "react";
import Navbar from "./navbar";
import Header from "./header";
import HowItWorks from "./howitworks";
import Aboutus from "./aboutus";
import Services from "./services";
import Contact from "./Contact";
//import Footer from "./footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <HowItWorks />
      <Aboutus />
      <Services />
      <Contact />
    </>
  );
};

export default Home;