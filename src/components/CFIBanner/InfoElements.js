import styled from "styled-components";

export const InfoContainer = styled.div`
  color: #fff;
  background: ${({ lightBg }) => (lightBg ? "#fff" : "#000")};
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

export const InfoWrapper = styled.div`
  display: grid;

  z-index: 1;
  width: 710px;
  /* height: 840px; */
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  padding-top: 100px;
  justify-content: center;
`;

export const InfoRow = styled.div`
  /* background-color: "#fff"; */
  background: "#fff";
  display: flex;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};

  @media screen and (max-width: 768px) {
    display: grid;
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
`;

export const Column1 = styled.div`
  /* background-color: #333; */
  margin-bottom: 15px;
  padding: 0 50px;
  grid-area: col1;
`;

export const Column2 = styled.div`
  justify-content: right;
  justify-items: right;
  /* background-color: #fff; */
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`;

export const TopLine = styled.p`
  color: #01bf71;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 32px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? "#f7f8fa" : "#0110606")};

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  /* letter-spacing:1.5; */
  font-size: 14px;
  line-height: 24px;
  color: ${({ darkText }) => (darkText ? "#010606" : "#fff")};
`;

export const BtnWrap = styled.div`
  display: ${({ button }) => (button ? "flex" : "none")};
  justify-content: flex-start;
`;

export const ImgWrap = styled.div`
  max-width: 300px;
  height: 70%;
  margin-bottom: 60px;
`;

export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`;
