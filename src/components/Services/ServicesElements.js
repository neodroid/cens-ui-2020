import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const ServicesContainer = styled.div`
  min-height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #010606;
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  @media screen and (max-width: 768px) {
    height: 1100px;
  }

  @media screen and (max-width: 480px) {
    height: 1300px;
  }
`;

export const ServicesWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const ServicesCard = styled.div`
  background-image: url(${(props) => props.img});
  /* background: #fff; */
  background-size: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 10px;
  height: 340px;
  width: 340px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2 ease-in-out;
  z-index: 1;

  &:hover {
    transform: scale(1.02);
    transition: all 0.4s ease-in-out;
    cursor: pointer;
    /* opacity: -100%; */
    background-image: url();
    background-color: #fff;
  }
`;

export const ServicesIcon = styled.img`
  height: 100%;
  width: 100%;
  z-index: 2;
  /* margin-bottom: 10px; */
`;

export const ServicesH1 = styled.h1`
  font-size: 2rem;
  color: #fff;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const ServicesH2 = styled.h2`
  font-size: 1.5rem;
  /* margin-bottom: 10px; */
  color: #fff;
  justify-self: center;
  /* margin-left: 30px; */
  display: block;

  ${ServicesCard}:hover & {
    display: none;
  }
`;

export const ServicesP = styled.p`
  font-size: 14px;
  text-align: center;
  display: none;

  ${ServicesCard}:hover & {
    display: block;
  }
`;

export const Button = styled(LinkR)`
  border-radius: 50px;
  background: #09508b;
  padding: 12px 30px;
  width: 100%;
  margin-top: 20px;
  white-space: nowrap;
  outline: none;
  border: none;
  transition: all 0.2s ease-in-out;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  display: none;
  text-decoration: none;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #09508b;
  }

  ${ServicesCard}:hover & {
    display: block;
  }
`;
