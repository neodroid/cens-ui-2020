import React from "react";
import Icon3 from "../../images/banner 3-.jpg";
import Icon2 from "../../images/banner 2-.jpg";
import Icon1 from "../../images/banner 1-.jpg";
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

const Announcement = () => {
  return (
    <ServicesContainer>
      <ServicesH1>Announcement</ServicesH1>
      <ServicesWrapper>
        <ImgWrap>
          <Img src={Icon1} />
        </ImgWrap>
        <ImgWrap>
          <Img src={Icon2} />
        </ImgWrap>
        <ImgWrap>
          <Img src={Icon3} />
        </ImgWrap>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Announcement;
