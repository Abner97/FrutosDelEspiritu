import React, { useEffect } from "react";

//Components
import StartAgainButton from "../components/StartAgainButton";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";

//Stat
import { useContext, useState } from "react";
import FruitsContext from "../context/frutos/FruitsContext";
import QuestionsContext from "../context/questions/QuestionsContext";

//Helpers
// eslint-disable-next-line
import { getresults, Results as RS } from "../helper/results";

//Models
import { QuestionModel } from "../models/question_model";
import { AuthContext } from "../context/auth/AuthContext";

//Assets
import top_left_image from "../assets/images/toque_gracia_logo.svg";

import bottom_left_image from "../assets/images/A1.png";

import DonateButton from "../components/DonateButton";
import { saveResultsOnFireBase } from "../services/results";
import BarChart from "../components/BarChart";
import ResultsTable from "../components/ResultsTable";
import { resultsMap } from "../data/results/results_map";
import { chartValue } from "../data/results/chart_config";

const StyledContainer = styled.div`
  background: white;
  z-index: -2;
  padding-top: 8%;
`;

const LeftTopImage = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 10%;
`;

const LeftBottomImage = styled.img`
  width: 0px;
  @media (min-width: 800px) {
    position: absolute;
    bottom: 0px;
    right: 0px;
    width: 20%;
  }
`;

const InfoStyled = styled.b`
  color: #787878;
  font-size: 14px;
`;

const Results = () => {
  //State Handling
  const questionsContext = useContext(QuestionsContext);
  const fruitsContexts = useContext(FruitsContext);
  const { name } = useContext(AuthContext);
  const { questions } = questionsContext;
  const { frutos } = fruitsContexts;

  //esta funcion ordena los resultado de menor a mayor
  const sortResults = (results: Array<RS>) => {
    const temp = results;
    temp.sort((a, b) => {
      return a.result - b.result;
    });

    setResults(temp);
  };

  const [chart, setChart] = useState(chartValue);
  const [results, setResults] = useState(resultsMap);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (questions.length === 0) {
      let questions: Array<QuestionModel> = JSON.parse(
        localStorage.getItem("Questions")!
      );
      getresults(questions, frutos);
    } else {
      getresults(questions, frutos);
    }

    if (chartValue.options?.title?.text) {
      chartValue.options.title.text = `${chartValue.options.title.text} ${name} `;
    }

    resultsMap.forEach((fruto) => {
      chartValue.options.xaxis?.categories.push(fruto.fruto);

      if (chartValue.options.xaxis?.labels?.style?.colors instanceof Array) {
        chartValue.options.xaxis?.labels?.style?.colors.push(fruto.color);
      }

      chartValue.options.colors?.push(fruto.color);
      chartValue.series[0].data.push(fruto.result);
    });

    setResults(resultsMap);
    sortResults(results);
    //guardando datos en la BD
    saveResultsOnFireBase(results);
    setShow(true);
    setChart(chartValue);
    window.dispatchEvent(new Event("resize"));
    // eslint-disable-next-line
  }, []);

  return (
    <StyledContainer className='h-100'>
      <Container className='w-100 h-full  align-content-center justify-content-center '>
        <Row className='justify-content-start'>
          <Col lg={6} md={6} sm={12} xs={12}>
            <InfoStyled>
              Estos porcentajes indican tu estado actual en los elementos del
              Fruto del Espíritu, debes trabajar en los que tengan menor
              porcentaje.
            </InfoStyled>
          </Col>
        </Row>
        <Row className='justify-content-center align-items-center'>
          <Col lg={6} md={6} sm={12} xs={12} className='my-4'>
            <ResultsTable show={show} results={results}></ResultsTable>
          </Col>
          <BarChart chart={chart} />
        </Row>
        <Row className='justify-content-center '>
          <Col
            lg={12}
            md={6}
            sm={12}
            xs={12}
            className='d-flex justify-content-center'
          >
            <StartAgainButton />
            <DonateButton />
          </Col>
          <Col></Col>
        </Row>
      </Container>
      <LeftTopImage src={top_left_image} />

      <LeftBottomImage src={bottom_left_image} />
    </StyledContainer>
  );
};

export default Results;
