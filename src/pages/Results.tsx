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

import banner from "../assets/images/banner.png";

import DonateButton from "../components/DonateButton";
import { saveResultsOnFireBase } from "../services/results";
import BarChart from "../components/BarChart";
import ResultsTable from "../components/ResultsTable";

import {
  DES_AMOR,
  DES_BENIGNIDAD,
  DES_BONDAD,
  DES_DOMINIO_PROPIO,
  DES_FE,
  DES_GOZO,
  DES_MANSEDUMBRE,
  DES_PACIENCIA,
  DES_PAZ,
} from "../data/answers/all_descriptions";
import {
  COL_AMOR,
  COL_BENIGNIDAD,
  COL_BONDAD,
  COL_DOMINIO_PROPIO,
  COL_FE,
  COL_GOZO,
  COL_MANSEDUMBRE,
  COL_PACIENCIA,
  COL_PAZ,
} from "../data/answers/all_colors";
import { ApexOptions } from "apexcharts";
import { Ichart } from "../interfaces/result-interfaces";

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

const AmazonIframe = styled.iframe`
  width: 100%;
  heigth: 200px;
`;

// const LeftBottomImage = styled.img`
//   width: 0px;
//   @media (min-width: 800px) {
//     position: absolute;
//     bottom: 0px;
//     right: 0px;
//     width: 15%;
//   }
// `;

const CourseImage = styled.img`
  width: 100%;
  filter: drop-shadow(5px 5px 5px #7d7d7d);
  cursor: pointer;
`;

const InfoStyled = styled.b`
  color: #787878;
  font-size: 14px;
`;

function gotoCoursePage() {
  window.open(
    "https://toquedegracia.net/cursos/madurez-a-otro-nivel/",
    "_blank"
  );
}

const Results = () => {
  //State Handling
  let resultsMap: Array<RS> = [
    { fruto: "Amor", result: 0, description: DES_AMOR, color: COL_AMOR },
    {
      fruto: "Benignidad",
      result: 0,
      description: DES_BENIGNIDAD,
      color: COL_BENIGNIDAD,
    },
    { fruto: "Bondad", result: 0, description: DES_BONDAD, color: COL_BONDAD },
    {
      fruto: "Dominio propio",
      result: 0,
      description: DES_DOMINIO_PROPIO,
      color: COL_DOMINIO_PROPIO,
    },
    { fruto: "Fe", result: 0, description: DES_FE, color: COL_FE },
    { fruto: "Gozo", result: 0, description: DES_GOZO, color: COL_GOZO },
    {
      fruto: "Mansedumbre",
      result: 0,
      description: DES_MANSEDUMBRE,
      color: COL_MANSEDUMBRE,
    },
    {
      fruto: "Paciencia",
      result: 0,
      description: DES_PACIENCIA,
      color: COL_PACIENCIA,
    },
    { fruto: "Paz", result: 0, description: DES_PAZ, color: COL_PAZ },
  ];

  const chartOptions: ApexOptions = {
    chart: {
      background: "#314613",

      animations: {
        enabled: true,
        easing: "easeinout",
        speed: 800,
        animateGradually: {
          enabled: true,
          delay: 150,
        },
        dynamicAnimation: {
          enabled: true,
          speed: 350,
        },
      },
      height: 500,
      type: "bar",
      events: {
        click: function (chart: any, w: any, e: any) {
          // console.log(chart, w, e)
        },
      },
    },
    title: {
      text: `Fruto del Espíritu: `,
      align: "left",

      margin: 10,
      offsetX: 0,
      offsetY: 0,
      floating: false,
      style: {
        fontSize: "14px",
        fontWeight: "bold",
        fontFamily: "Average, serif",
        color: "#90c73f",
      },
    },
    colors: [],
    plotOptions: {
      bar: {
        columnWidth: "45%",
        distributed: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    xaxis: {
      categories: [],
      labels: {
        style: {
          colors: [],
          fontSize: "12px",
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: "#90c73f",
          fontSize: "12px",
        },
      },
    },
  };

  const chartValue: Ichart = {
    series: [
      {
        name: `Elementos del Fruto`,
        data: [],
      },
    ],
    options: chartOptions,
  };

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
      fruto.result = parseFloat(localStorage.getItem(`P${fruto.fruto}`)!);
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

    setChart(chartValue);

    window.dispatchEvent(new Event("resize"));
    setShow(true);
    // eslint-disable-next-line
  }, []);

  return (
    <StyledContainer className='h-100'>
      {/* <BookModal /> */}
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
            {show ? (
              <ResultsTable show={show} results={results}></ResultsTable>
            ) : (
              <div></div>
            )}
          </Col>
          <Col lg={6} md={6} sm={12} xs={12} className='my-4'>
            <Row className='justify-content-start my-1'>
              <Col>
                <InfoStyled>
                  Te invitamos a que te tomes este curso para ayudarte a crecer
                  en cada elemento del fruto del Espíritu.
                </InfoStyled>
              </Col>
            </Row>
            <Row>
              <Col>
                <CourseImage src={banner} onClick={gotoCoursePage} />
              </Col>
            </Row>
          </Col>
        </Row>

        <Row className='justify-content-center align-items-center'>
          {show ? <BarChart chart={chart} /> : <div></div>}

          <Col lg={6} md={6} sm={12} xs={12} className='my-4'>
            <Row className='justify-content-start my-1'>
              <Col>
                <InfoStyled>
                  Este libro te ayudará a crecer en tu carácter y es el libro de
                  texto del curso Madurez a Otro Nivel.
                </InfoStyled>
              </Col>
            </Row>
            <Row>
              <Col>
                <AmazonIframe
                  height='425'
                  src='https://read.amazon.com/kp/card?asin=B09NCX55WV&preview=inline&linkCode=kpe&ref_=cm_sw_r_kb_dp_6TYDGYBQYMVD1GEVX9WF&tag=mobilea083c99-20'
                />
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className='justify-content-center '>
          <Col
            lg={12}
            md={12}
            sm={12}
            xs={12}
            className='d-flex justify-content-center align-items-center flex-wrap'
          >
            <StartAgainButton />
            <DonateButton />
          </Col>
          <Col></Col>
        </Row>
      </Container>

      <LeftTopImage src={top_left_image} />
    </StyledContainer>
  );
};

export default Results;
