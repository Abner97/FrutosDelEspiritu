import React from "react";

//Components
import Question from "./Question";
import styled from "styled-components";

//Assets
import top_left_image from "../assets/images/toque_gracia_logo.svg";
import bottom_right_image from "../assets/images/logo_without_label.png";
import bottom_left_image from "../assets/images/A1.jpeg";

//Styled Components
const StyledContainer = styled.div`
  background: white;
  z-index: -2;
`;

const LeftTopImage = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 30%;
  z-index: 0;
  @media (min-width: 768px) {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 16%;
    z-index: 0;
  }
`;
const RightBottomImage = styled.img`
  width: 0px;
  @media (min-width: 768px) {
    position: absolute;
    bottom: 0px;
    right: 0px;
    width: 15%;
  }
`;

const LeftBottomImage = styled.img`
  width: 0px;
  @media (min-width: 768px) {
    position: absolute;
    bottom: 0px;
    left: 0px;
    width: 15%;
  }
`;

const Home: React.FC = () => {
  return (
    <>
      <StyledContainer className='d-flex h-100 justify-content-center  align-items-center animation '>
        <Question />
        <LeftTopImage src={top_left_image} />
        <RightBottomImage src={bottom_right_image} />
        <LeftBottomImage src={bottom_left_image} />
      </StyledContainer>
    </>
  );
};

export default Home;
