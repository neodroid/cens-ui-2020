import React from "react";
import { Button } from "../ButtonElement";
import Bg1 from "../../images/pagehome_about.png";
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

const InfoSection = ({
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
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darktext={darktext}>
                  {description1}
                  <br />
                  <br />
                  {description2}
                </Subtitle>
                <BtnWrap button={button}>
                  <Button
                    primary="true"
                    to="/about"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                  >
                    {buttonLabel}
                  </Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
