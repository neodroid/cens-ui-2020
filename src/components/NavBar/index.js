import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
  LogoImage,
  NavbarDropdownContent,
} from "./NavbarElements";

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollnav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollnav(true);
    } else {
      setScrollnav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to="/" scrollNav={scrollNav}>
            cens
            {/* <LogoImage /> */}
          </NavLogo>
          <MobileIcon onClick={toggle} scrollNav={scrollNav}>
            <FaBars />
          </MobileIcon>
          <NavMenu scrollNav={scrollNav}>
            <NavItem>
              <NavLinks to="/" scrollNav={scrollNav}>
                Home
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/about" scrollNav={scrollNav}>
                About
              </NavLinks>
            </NavItem>
            {/* <NavItem>
              <NavLinks to="/partners" scrollNav={scrollNav}>
                Partners
              </NavLinks>
            </NavItem> */}
            <NavItem>
              <NavLinks to="" scrollNav={scrollNav}>
                Events
                <NavbarDropdownContent>
                  <NavLinks to="/cfi" scrollNav={true}>
                    CFI
                  </NavLinks>
                  <NavLinks to="/summit" scrollNav={true}>
                    National Summit
                  </NavLinks>
                </NavbarDropdownContent>
              </NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/register" scrollNav={scrollNav}>
              Register
            </NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
