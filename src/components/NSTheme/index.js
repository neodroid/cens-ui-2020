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

const NSTheme = () => {
  return (
    <ServicesContainer>
      <ServicesH1>Themes</ServicesH1>
      <ServicesWrapper>
        <ServicesCard img={Icon1}>
          {/* <ServicesIcon src={Icon1} /> */}
          <ServicesH2>
            Chamber 1: Infrastructure & Disaster Risk Reduction
          </ServicesH2>
          <ServicesP>
            “Strengthening the built environment with the development of climate
            resilient infrastructure & city system”
          </ServicesP>
        </ServicesCard>
        <ServicesCard img={Icon2}>
          {/* <ServicesIcon src={Icon2}></ServicesIcon> */}
          <ServicesH2>Chamber 2: Resource Use & Waste Management</ServicesH2>
          <ServicesP>
            “Transitioning towards a circular economy in the built environment
            by maximizing resource efficiency”
          </ServicesP>
        </ServicesCard>
        <ServicesCard img={Icon2}>
          {/* <ServicesIcon src={Icon2}></ServicesIcon> */}
          <ServicesH2>Chamber 3: Nature and Biodiversity</ServicesH2>
          <ServicesP>
            “Urban built environment that embraces nature and promotes
            biodiversity”
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default NSTheme;
