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
} from "./FooterElements";

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
              {/* <FooterLink to="/">Strategic</FooterLink>
              <FooterLink to="/">Strategic</FooterLink>
              <FooterLink to="/">Strategic</FooterLink>
              <FooterLink to="/">Strategic</FooterLink> */}
            </FooterLinkItems>
          </FooterLinkWrapper>
          <FooterLinkWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Media Partners</FooterLinkTitle>
              {/* <FooterLink to="/">Media</FooterLink>
              <FooterLink to="/">Media</FooterLink>
              <FooterLink to="/">Media</FooterLink>
              <FooterLink to="/">Media</FooterLink> */}
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
