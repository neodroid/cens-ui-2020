import React from "react";
import LogoAbout from "../components/LogoAbout";
import { aboutObjOne } from "../components/InfoSection/Data";
import AboutBanner from "../components/AboutBanner";

const AboutPage = () => {
  return (
    <>
      <AboutBanner />
      <LogoAbout {...aboutObjOne} />
    </>
  );
};

export default AboutPage;
