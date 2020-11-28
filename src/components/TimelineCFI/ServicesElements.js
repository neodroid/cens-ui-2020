import styled from "styled-components";

export const ServicesContainer = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;

  @media screen and (max-width: 768px) {
    height: 800px;
  }
`;

export const ServicesWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media screen and (max-width: 600px) {
    display: grid;
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
  justify-content: flex-end;
  /* align-items: bottom; */
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
    justify-content: center;
  }
`;

export const ImgWrap = styled.div`
  /* background-color: #333; */
  max-width: 300px;
  /* height: 800px; */
`;

export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`;

export const ServicesIcon = styled.img`
  height: 100%;
  width: 100%;
  z-index: 2;
  /* margin-bottom: 10px; */
`;

export const ServicesH1 = styled.h1`
  font-size: 2.5rem;
  color: #333;
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

export const Button = styled.button`
  border-radius: 50px;
  background: #09508b;
  padding: 12px 30px;
  width: 100%;
  margin-top: 20px;
  white-space: nowrap;
  outline: none;
  border: none;
  display: flex;
  transition: all 0.2s ease-in-out;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  display: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #09508b;
  }

  ${ServicesCard}:hover & {
    display: block;
  }
`;
