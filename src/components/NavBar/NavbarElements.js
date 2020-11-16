import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import Icon1 from "../../images/logo.png";

export const Nav = styled.nav`
  background: ${({ scrollNav }) => (scrollNav ? "#fff" : "transparent")};
  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  font-size: 1 rem;
  position: sticky;
  top: 0;
  z-index: 10;
  transition: 0.8s all ease;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
  /* position: relative; */
`;

export const NavLogo = styled(LinkR)`
  color: ${({ scrollNav }) => (scrollNav ? "#000" : "#fff")};
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: ${({ scrollNav }) => (scrollNav ? "#000" : "#fff")};
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;
  color: ${({ scrollNav }) => (scrollNav ? "#000" : "#fff")};

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavbarDropdownContent = styled.div`
  border-radius: 50;
  margin-top: 150px;

  display: none;
  color: #333;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0, 2);
  padding: 12px 12px;
  z-index: 1;
`;

export const NavLinks = styled(LinkR)`
  display: flex;
  align-items: center;
  text-decoration: none;
  margin-bottom: 10px;
  padding: 0 1rem;
  height: 80%;
  cursor: pointer;
  color: ${({ scrollNav }) => (scrollNav ? "#000" : "#fff")};

  &.active {
    border-bottom: 3px solid #09508b;
  }

  &:hover {
    color: #09508b;
    transition: 0.2s ease-in-out;
    border-color: #09508b;
    border-bottom: 3px solid #09508b;
  }

  &:hover ${NavbarDropdownContent} {
    display: block;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(LinkR)`
  border-radius: 50px;
  background: #09508b;
  white-space: nowrap;
  padding: 10px 22px;
  color: #f7f7f7;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #09508b;
  }
`;

export const LogoImage = styled.img`
  src: url(${Icon1});
  width: 100%;
  height: 100%;
`;

export const ImgWrap = styled.div`
  max-width: 100px;
  height: 100%;
`;

export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`;
