import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  height: 1400px;
  /* position: absolute; */
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  /* z-index: 1; */
  overflow: hidden;
  /* background: linear-gradient(
    108deg,
    rgba(1, 147, 86, 1) 0%,
    rgba(0, 201, 122, 1) 100%
  ); */
  background: #e6edf3;
  transition: all 0.2s ease-in-out;
`;

export const FormWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 400px) {
    height: 80%;
  }
`;

export const DropDiv = styled.div`
  border-radius: 5px;
  background-color: #fff;
  padding: 5px;
  border: 5px;
  border-color: #333;
  @media screen and (max-width: 400px) {
  }
`;

export const Icon = styled(Link)`
  margin-left: 32px;
  margin-top: 32px;
  text-decoration: none;
  color: #fff;
  font-weight: 700;
  font-size: 32px;

  @media screen and (max-width: 480px) {
    margin-left: 16px;
    margin-top: 8px;
  }
`;
export const FormContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 480px) {
    padding: 10px;
  }
`;

export const Form = styled.form`
  background: #e6edf3;
  width: 600px;
  height: auto;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 80px 32px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

  @media screen and (max-width: 600px) {
    width: 400px;
    padding: 32px 32px;
  }
`;

export const FormH1 = styled.h1`
  margin-bottom: 40px;
  color: #333;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
`;

export const FormLabel = styled.label`
  margin-bottom: 8px;
  font-size: 14px;
  color: #333;
`;

export const FormInput = styled.input`
  padding: 16px 16px;
  margin-bottom: 32px;
  border: none;
  border-radius: 4px;
`;

export const FormButton = styled.button`
  border-radius: 50px;
  background: #09508b;
  margin-top: 20px;
  padding: 12px 30px;
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

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #09508b;
  }
`;

export const Text = styled.span`
  text-align: center;
  margin-top: 24px;
  color: #fff;
  font-size: 14px;
`;

////////////////////////////////////////
//DROPDOWN LANGUAGE
export const DropDownContent = styled.div`
  width: 530px;
  display: none;
  position: absolute;
  background-color: #f0f0f0;
  /* min-width: 160px; */
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  padding: 16px 16px;
  /* margin-bottom: 32px; */
  border: none;
  border-radius: 4px;
`;
export const ArrowDiv = styled.div`
  /* background-color: black; */
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const ArrowDownLang = styled.div`
  border: solid black;
  /* color: #333; */
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 5px;
  position: relative;
  /* right: 100px; */
  /* top: 20px; */
  margin-right: 10px;
  margin-bottom: 4px;
  /* right: 0px;
  left: 6px; */
  top: -2px;
  transition: all 0.6s;
  align-self: flex-end;
`;
export const DropDown = styled.div`
  margin-bottom: 32px;
  background-color: #fff;
  display: inline-block;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
  > * {
    cursor: pointer;
  }

  &:focus,
  &:active {
    background-color: rgba(0, 0, 0, 0.1);
  }
  & ${ArrowDownLang} {
    transform: rotate(45deg);
  }

  &:focus ${ArrowDownLang}, &:active ${ArrowDownLang} {
    transform: rotate(225deg);
  }

  &:focus ${DropDownContent}, &:active ${DropDownContent} {
    display: block;
    max-width: 100vw;
  }

  &:hover {
    color: #e6edf3;
  }
`;
export const Dropbtn = styled.div`
  color: #333;
  display: flex;
  text-align: center;
  flex-direction: row;
  padding: 14px 16px;
  text-decoration: none;
  /* border: 1px solid;
	border-radius: 5px; */
`;

export const Item = styled.a`
  max-width: 100vw;
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;

  /* border: 1px solid; */
  max-width: 90vw;
  &:hover {
    background-color: #e6edf3;
  }
`;

export const TextBawah = styled.p`
  /* max-width: 100vw;
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left; */
  color: #333;
  cursor: pointer;
  /* border: 1px solid; */
  max-width: 90vw;
  &:hover {
    /* background-color: #333; */
    color: #094f8a;
  }
`;

export const LoadingDiv = styled.div`
  width: 50%;

  padding: 50px 50px;
  /* height: 300px; */
  position: fixed;
  z-index: 3;
  bottom: 100px;
  left: 25%;
  border-radius: 20px;
  text-align: center;
  text-justify: center;
  color: white;
  font-size: 18px;
  /* right: 50%; */
  background-color: #09508b;
`;
