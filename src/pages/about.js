import React from "react";
import LogoAbout from "../components/LogoAbout";
import { aboutObjOne } from "../components/InfoSection/Data";

const AboutPage = () => {
  return (
    <>
      <LogoAbout {...aboutObjOne} />
    </>
  );
};

export default AboutPage;
