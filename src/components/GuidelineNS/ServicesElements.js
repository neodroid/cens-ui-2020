import styled from "styled-components";

export const ServicesContainer = styled.div`
  min-height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;

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
  /* background-image: url(${(props) => props.img}); */
  /* background: #fff; */
  background-size: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: flex-start;
  border-radius: 10px;
  min-height: 340px;
  width: 400px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
  transition: all 0.2 ease-in-out;
  z-index: 1;

  /* &:hover {
    transform: scale(1.02);
    transition: all 0.4s ease-in-out;
    cursor: pointer;
    
    background-image: url();
    background-color: #fff;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 1.5);
  } */
`;

export const ServicesIcon = styled.img`
  height: 100%;
  width: 100%;
  z-index: 2;
  /* margin-bottom: 10px; */
`;

export const ServicesH1 = styled.h1`
  font-size: 2rem;
  color: #333;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const ServicesH2 = styled.h2`
  line-height: 2;
  font-size: 14px;
  /* margin-bottom: 10px; */
  color: #333;
  justify-self: center;
  /* margin-left: 30px; */
  display: block;
`;

export const ServicesP = styled.p`
  font-size: 14px;
  text-align: center;
  display: block;
`;

export const Button = styled.button`
  border-radius: 10px;
  padding: 10px 30px;
  width: 100%;
  margin-top: 5px;
  white-space: nowrap;
  outline: none;
  border: none;
  display: flex;
  transition: all 0.2s ease-in-out;
  justify-content: flex-start;
  align-items: center;
  color: #333;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  direction: row;
  background-color: #ededed;
  /* background-color: ${({ active }) => (active ? "#fff" : "#000")}; */

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #09508b;
    background-color: #d3d3d3;
  }
`;

export const Number = styled.div`
  border-radius: 10px;
  height: 50px;
  width: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #094f8a;
  margin-right: 10px;
  color: #fff;

  ${Button}:hover & {
    transform: scale(1.1);
    transition: all 0.4s ease-in-out;
    cursor: pointer;

    box-shadow: 0 1px 3px rgba(0, 0, 0, 1.5);
  }
`;
