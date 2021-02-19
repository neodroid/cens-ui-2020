import React from "react";

import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import { homeObjOne } from "../components/InfoSection/Data";
import Services from "../components/Services";
import Footer from "../components/Footer";
import Partner from "../components/Partner";

const Home = () => {
  return (
    <>
      <HeroSection />
      <InfoSection {...homeObjOne} />

      <Services />
      <Partner {...homeObjOne} />
    </>
  );
};

export default Home;
