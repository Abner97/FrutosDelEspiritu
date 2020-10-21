import React, { useContext, useEffect } from "react";

//Components
import { Container } from "react-bootstrap";
import Question from "./Question";
import styled from "styled-components";

//Assets
import top_left_image from "../assets/images/toque_gracia_logo.svg";
import bottom_right_image from "../assets/images/logo_without_label.png";
import bottom_left_image from "../assets/images/A1.png";
import QuestionsContext from "../context/questions/QuestionsContext";
import { useHistory } from "react-router-dom";
//Styled Components
const StyledContainer = styled.div`
  background: white;
  z-index: -2;
`;

const LeftTopImage = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 10%;
`;

const RightBottomImage = styled.img`
  position: absolute;
  bottom: 0px;
  right: 0px;
  width: 20%;
`;

const LeftBottomImage = styled.img`
  position: absolute;
  bottom: 0px;
  left: 0px;
  width: 20%;
`;

const Home: React.FC = () => {
  const { actualIndex, questions } = useContext(QuestionsContext);
  const history = useHistory();

  useEffect(() => {
    if (actualIndex > questions.length - 1) {
      history.push("/results");
    }
  }, []);

  return (
    <>
      <StyledContainer className="d-flex h-100 justify-content-center  align-items-center">
        <Container fluid className="h-full p-5">
          <Question />
        </Container>
        <LeftTopImage src={top_left_image} />
        <RightBottomImage src={bottom_right_image} />
        <LeftBottomImage src={bottom_left_image} />
      </StyledContainer>
    </>
  );
};

export default Home;
