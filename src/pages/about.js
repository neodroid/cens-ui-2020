import React from "react";
import LogoAbout from "../components/LogoAbout";
import GrandTheme from "../components/GrandTheme";
import { aboutObjOne, aboutObjTwo } from "../components/InfoSection/Data";
import AboutBanner from "../components/AboutBanner";

const AboutPage = () => {
  return (
    <>
      <AboutBanner />
      <LogoAbout {...aboutObjOne} />
      <GrandTheme {...aboutObjTwo} />
    </>
  );
};

export default AboutPage;
