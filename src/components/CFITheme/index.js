import React from "react";
import Icon1 from "../../images/logo_cfi.png";
import Icon2 from "../../images/logo_ns.png";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesIcon,
  ServicesH2,
  ServicesP,
  ServicesCard,
  ServicesCardInside,
  Button,
} from "./ServicesElements";

const CFITheme = () => {
  return (
    <ServicesContainer>
      <ServicesH1>Themes</ServicesH1>
      <ServicesWrapper>
        <ServicesCard img={Icon1}>
          {/* <ServicesIcon src={Icon1} /> */}
          <ServicesH2>Resilient infrastructure & city systems</ServicesH2>
          <ServicesP>
            Approach infrastructure development from a different angle. Imagine
            a world where cities provide reliable infrastructure and maintain
            continuity of critical services in the face of climate disasters!
          </ServicesP>
        </ServicesCard>
        <ServicesCard img={Icon2}>
          {/* <ServicesIcon src={Icon2}></ServicesIcon> */}
          <ServicesH2>Nature-based solutions</ServicesH2>
          <ServicesP>
            Traditionally, "grey" or "hard" infrastructural solutions have
            dominated efforts to reduce and manage impacts from climate
            disasters. Can you help in mainstreaming, reducing costs, risks and
            emissions from nature-based solutions at scale?{" "}
          </ServicesP>
        </ServicesCard>
        <ServicesCard img={Icon2}>
          {/* <ServicesIcon src={Icon2}></ServicesIcon> */}
          <ServicesH2>High tech construction /advanced materials</ServicesH2>
          <ServicesP>
            Design and submit a project that brings together the latest and best
            technology or materials to improve the construction sites of the
            future, making them both productive and eco-friendly!
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default CFITheme;
