import React from "react";
import Icon1 from "../../images/card6.png";
import Icon2 from "../../images/card5.png";
import Icon3 from "../../images/timelineSummit.png";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ImgWrap,
  Img,
  ServicesP,
  ServicesCard,
  ServicesCardInside,
  Button,
} from "./ServicesElements";

const TimelineNS = () => {
  return (
    <ServicesContainer>
      <ServicesH1>Timeline</ServicesH1>
      <ServicesWrapper>
        <ImgWrap>
          <Img src={Icon3} />
        </ImgWrap>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default TimelineNS;
