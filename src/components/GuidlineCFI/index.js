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

const GuidelineCFI = () => {
  const [status, setStatus] = useState(1);

  const Textnya = (props) => {
    if (props.num == 1) {
      return (
        <>
          <ServicesH2>
            1. Download our Term of Reference{" "}
            <a
              target="_blank"
              href="https://drive.google.com/u/0/uc?id=1UbIo5VbA20nmFSmfQ_DwZglh0I61yjCj&export=download"
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
            4. Submit your participation by uploading a 3-slide pdf document in
            Bahasa or English
            <br />
            <br />
            5. Here’s a template to help you out template{" "}
            <a
              target="_blank"
              href="https://drive.google.com/u/0/uc?id=1s4cIvUu3gycVY_rtWebx-S7t-p3HohlA&export=download"
            >
              CLICK HERE
            </a>
            <br />
            <br />
            6. Download reference kit{" "}
            <a target="_blank" href="https://bit.ly/CompetitonCFI">
              CLICK HERE
            </a>
          </ServicesH2>
        </>
      );
    } else if (props.num == 2) {
      return (
        <ServicesH2>
          In the expansion stage the selected teams will refine and develop
          their project into a 20-slide pitch deck. Participants that passed the
          abstract selection must submit the final power point and pay the
          registration fee.
        </ServicesH2>
      );
    } else if (props.num == 3) {
      return (
        <ServicesH2>
          The selected teams for the final stage will be mentored by our
          knowledge partners to develop their project. The finalist teams will
          be invited to pitch their project. Finalists will get the privilege to
          join our national summit and an awards ceremony will follow these
          events to put an end to this great innovation challenge.
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
            <ServicesH2>Registration and Ideation</ServicesH2>
          </Button>
          <Button onClick={() => setStatus(2)}>
            <Number>2</Number>
            <ServicesH2>Expansion</ServicesH2>
          </Button>
          <Button onClick={() => setStatus(3)}>
            <Number>3</Number>
            <ServicesH2>Final</ServicesH2>
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

export default GuidelineCFI;
