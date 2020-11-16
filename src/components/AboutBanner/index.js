import React from "react";
import { Button } from "../ButtonElement";
import Bg1 from "../../images/About_BG.png";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  Column2,
  Img,
  ImgWrap,
  BtnWrap,
} from "./InfoElements";

const AboutBanner = ({
  lightText,
  lightBg,
  id,
  imgStart,
  headline,
  topLine,
  darktext,
  description1,
  description2,
  description3,
  description4,
  buttonLabel,
  img,
  button,
  alt,
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id} img={Bg1}>
        <InfoWrapper>
          <Heading lightText={true}>About Us</Heading>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default AboutBanner;
