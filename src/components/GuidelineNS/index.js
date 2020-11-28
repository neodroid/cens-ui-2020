import React, { useState } from "react";
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
  Number,
  Button,
} from "./ServicesElements";
import { Link } from "react-router-dom";

const GuidelineNS = () => {
  const [status, setStatus] = useState(1);

  const Textnya = (props) => {
    if (props.num == 1) {
      return (
        <>
          <ServicesH2>
            1. Download our Term of Reference{" "}
            <a
              href="https://drive.google.com/u/0/uc?id=1R4Zf7MlVkdu7aCtHXelT_YGphcnTmgYp&export=download"
              target="_blank"
            >
              CLICK HERE
            </a>
            <br />
            <br />
            2. Built up a team of 3 Members
            <br />
            <br />
            3. Register on the platform
            <br />
            <br />
            4. pay the registration fee of Rp100.000,00/team to to BCA
            7651090184 (Almira Naila) in a period between November 16th 2020 and
            February 7th 2021
          </ServicesH2>
        </>
      );
    } else if (props.num == 2) {
      return (
        <>
          <ServicesH2>
            1. The essay should be written based on the study guide that will be
            distributed on December 23rd 2020.
            <br />
            <br />
          </ServicesH2>
          <ServicesH2>
            2. Essay must be written in 500 -1500 words in correct English or
            Bahasa and should not use any abbreviation.
            <br />
            <br />
          </ServicesH2>
        </>
      );
    } else if (props.num == 3) {
      return (
        <ServicesH2>
          The selected teams for each chamber would participating in the
          National Summit
        </ServicesH2>
      );
    }
  };

  return (
    <ServicesContainer>
      <ServicesH1>Step by step Guideline</ServicesH1>
      <ServicesWrapper>
        <ServicesCard img={Icon1}>
          <Button onClick={() => setStatus(1)}>
            <Number>1</Number>
            <ServicesH2>Registration and Payment</ServicesH2>
          </Button>
          <Button onClick={() => setStatus(2)}>
            <Number>2</Number>
            <ServicesH2>Essay Submission</ServicesH2>
          </Button>
          <Button onClick={() => setStatus(3)}>
            <Number>3</Number>
            <ServicesH2>Announcement</ServicesH2>
          </Button>
        </ServicesCard>
        <ServicesCard img={Icon2}>
          <Number>{status}</Number>
          <Textnya num={status} />
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default GuidelineNS;
