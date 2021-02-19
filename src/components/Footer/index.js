import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import {
  FooterContainer,
  FooterLink,
  FooterLinkItems,
  FooterLinksContainer,
  FooterLinkTitle,
  FooterLinkWrapper,
  FooterWrap,
  SocialIconLink,
  SocialIcons,
  SocialLogo,
  SocialMedia,
  SocialMediaWrap,
  WebsiteRights,
  ImgWrap,
  Img,
  Img2,
  Img3,
} from "./FooterElements";
import Bg1 from "../../images/medpar/medpar (1).jpeg";
import Bg2 from "../../images/medpar/medpar (1).jpg";
import Bg3 from "../../images/medpar/medpar (1).png";
import Bg4 from "../../images/medpar/medpar (2).png";
import Bg5 from "../../images/medpar/medpar (2).JPG";
import Bg6 from "../../images/medpar/medpar (2).jpeg";
import Bg7 from "../../images/medpar/medpar (3).png";
import Bg8 from "../../images/medpar/medpar (3).jpg";
import Bg9 from "../../images/medpar/medpar (4).png";
import Bg10 from "../../images/medpar/medpar (4).jpg";
import Bg11 from "../../images/medpar/medpar (5).jpg";
import Bg12 from "../../images/medpar/medpar (5).png";
import Bg13 from "../../images/medpar/medpar (6).png";
import Bg14 from "../../images/medpar/medpar (7).png";
import Bg15 from "../../images/medpar/medpar (8).png";
import Bg16 from "../../images/medpar/medpar (9).png";
import Bg17 from "../../images/medpar/medpar (10).png";
import Bg18 from "../../images/medpar/medpar (12).png";
import Bg19 from "../../images/medpar/medpar (11).png";
import Bg20 from "../../images/medpar/medpar (13).png";
import Bg21 from "../../images/medpar/medpar (14).png";
import Bg22 from "../../images/medpar/adhi.png";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinkWrapper>
            <FooterLinkItems>
              <FooterLink to="/">Home</FooterLink>
              <FooterLink to="/about">About Us</FooterLink>
              {/* <FooterLink to="/">Partners</FooterLink> */}
              <FooterLink to="/cfi">CFI</FooterLink>
              <FooterLink to="/summit">National Summit</FooterLink>
              <FooterLink to="/register">Register</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Strategic Partners</FooterLinkTitle>
              <ImgWrap>
                <Img src={Bg1} />
                <Img src={Bg2} />
                <Img src={Bg3} />
                <Img3 src={Bg4} />
                <Img src={Bg5} />
                <Img src={Bg6} />
                <Img src={Bg7} />
                <Img src={Bg8} />
                <Img src={Bg9} />
                <Img src={Bg10} />
                <Img src={Bg11} />
                <Img src={Bg12} />
                <Img src={Bg13} />
                <Img src={Bg14} />
                <Img src={Bg15} />
                <Img src={Bg16} />
                <Img src={Bg17} />
                <Img src={Bg18} />
                <Img src={Bg19} />
                <Img src={Bg20} />
                <Img3 src={Bg21} />
              </ImgWrap>
            </FooterLinkItems>
          </FooterLinkWrapper>
          <FooterLinkWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Media Partners</FooterLinkTitle>
              <ImgWrap>
                <Img2 src={Bg22} />
              </ImgWrap>
            </FooterLinkItems>
            <FooterLinkItems>
              {/* <FooterLinkTitle>General Queries</FooterLinkTitle> */}
              <FooterLink>Juan </FooterLink>
              <FooterLink> (+62) 858 6939 8270</FooterLink>
              <FooterLink>Herwinda</FooterLink>
              <FooterLink> (+62) 896 6378 5814</FooterLink>
              <FooterLink>Rizka</FooterLink>
              <FooterLink> (+62) 812 9676 0588</FooterLink>
            </FooterLinkItems>
          </FooterLinkWrapper>
        </FooterLinksContainer>

        <SocialMedia>
          <SocialMediaWrap>
            {/* <SocialLogo to="/">CENS-UI 2020</SocialLogo> */}
            <WebsiteRights>CENS-UI © 2020 All rights reserved.</WebsiteRights>
            <SocialIcons>
              <SocialIconLink
                href="https://www.facebook.com/the18thcensui/"
                target="_blank"
                aria-label="Facebook"
              >
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink
                href="https://www.instagram.com/cens_ui/"
                target="_blank"
                aria-label="Instagram"
              >
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink
                href="https://www.youtube.com/channel/UCtPqEA_m7YWlI-pMCoqMl-A"
                target="_blank"
                aria-label="Youtube"
              >
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink
                href="https://www.linkedin.com/company/civil-engineering-national-summit/"
                target="_blank"
                aria-label="Linkedin"
              >
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
