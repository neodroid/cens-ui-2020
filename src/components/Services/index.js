import React from "react";
import Icon1 from "../../images/logo_cfi.png";
import Icon2 from "../../images/Home_SummitButton.png";
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

const Services = () => {
  return (
    <ServicesContainer>
      <ServicesH1>Events</ServicesH1>
      <ServicesWrapper>
        <ServicesCard img={Icon1}>
          {/* <ServicesIcon src={Icon1} /> */}
          <ServicesH2>CFI</ServicesH2>
          <ServicesP>
            Call for Innovation is an annual competition brought by CENS UI,
            where students are challenged to provide a viable solution to help
            new generations successfully address future problems in the built
            environment. <br />
            <br />
            Are you a student with ideas on how to transform the built
            environment? Put together a team and take part in our call for
            innovation by developing an innovative project that will take the
            construction industry to the next level.
          </ServicesP>
          <Button>Learn More </Button>
        </ServicesCard>
        <ServicesCard img={Icon2}>
          {/* <ServicesIcon src={Icon2}></ServicesIcon> */}
          <ServicesH2>National Summit</ServicesH2>
          <ServicesP>
            The Summit is a series of events designed to prepare young leaders
            from all over Indonesia to face the challenges in the built
            environment as well as to encourage young people to make a
            progressive and sustainable shift towards a better Indonesia. All
            participants will be selected through a national essay competition.
          </ServicesP>
          <Button>Learn More </Button>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
