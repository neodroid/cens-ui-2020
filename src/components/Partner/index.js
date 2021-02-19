import React from "react";
import { Button } from "../ButtonElement";
import Bg1 from "../../images/logo home.png";
import Bg2 from "../../images/medpar/adhi.png";
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
  Img2,
  ImgWrap,
  BtnWrap,
} from "./InfoElements";

const Partner = ({
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
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <Heading lightText={lightText}>Media Partners</Heading>
                <ImgWrap>
                  <Img src={Bg1} alt={alt} />
                </ImgWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <TextWrapper>
                <Heading lightText={lightText}>Strategic Partners</Heading>
                <ImgWrap>
                  <Img2 src={Bg2} alt={alt} />
                </ImgWrap>
              </TextWrapper>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default Partner;
