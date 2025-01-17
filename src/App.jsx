import React from "react";
import Header from "./components/Header";
import "./styles/global.css";
import "@fontsource/lexend";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import Gallery from "./components/Galery";
import ServicesPlus from "./components/ServicesPlus";
import CountNumber from "./components/CountNumber";
import Footer from "./components/Footer";
import Apresentation from "./components/Apresentation";
import Curiosities from "./components/Curiosities";

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <Apresentation />
      <ServicesSection />
      <Gallery />
      <CountNumber />
      <ServicesPlus />
      <Curiosities />
      <Footer />
    </div>
  );
}

export default App;
