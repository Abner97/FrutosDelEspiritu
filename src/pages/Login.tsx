import React from "react";

//Components
import { Col, Container, Row } from "react-bootstrap";
import LoginForm from "../components/LoginForm";
import styled from "styled-components";

//Assets
import bottom_right_image from "../assets/images/logo_without_label.png";
import bottom_left_image from "../assets/images/A1.png";
import LOGO_NEGRO from "../assets/images/LOGO_NEGRO.png";

const StyledContainer = styled.div`
  background: white;
  z-index: -2;
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

const LogoImage = styled.img`
  width: 20%;
  margin-bottom: 2%;

`;


const Login: React.FC = () => {
  return (
    <StyledContainer className="d-flex h-100 justify-content-center  align-items-center">
      <Container fluid>
      <Row className="justify-content-center  ">  
            <LogoImage src={LOGO_NEGRO}/>   
        </Row>
        <Row className="justify-content-center  ">
          <Col lg={4} xl={4} xs={12}>
            <LoginForm/>
          </Col>
        </Row>
      </Container>
  
        <RightBottomImage src={bottom_right_image} />
        <LeftBottomImage src={bottom_left_image} />
    </StyledContainer>
  );
};

export default Login;
