import React, { useEffect } from "react";

//Components
import ReactApexChart from "react-apexcharts";
import StartAgainButton from "../components/StartAgainButton";
import { Col, Container, Row, Table } from "react-bootstrap";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
//Stat
import { useContext, useState } from "react";
import FruitsContext from "../context/frutos/FruitsContext";
import QuestionsContext from "../context/questions/QuestionsContext";

//Helpers
// eslint-disable-next-line
import { getresults, results } from "../helper/results";

//Models
import { QuestionModel } from "../models/question_model";
import { AuthContext } from "../context/auth/AuthContext";

//Assets
import top_left_image from "../assets/images/toque_gracia_logo.svg";

import bottom_left_image from "../assets/images/A1.png";
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
import DonateButton from "../components/DonateButton";

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

// const RightBottomImage = styled.img`

//   width: 0px;
//   @media (min-width: 800px) {
//     position: absolute;
//     bottom: 0px;
//     right: 0px;
//     width: 20%;
//   }
// `;

const LeftBottomImage = styled.img`
  width: 0px;
  @media (min-width: 800px) {
    position: absolute;
    bottom: 0px;
    right: 0px;
    width: 20%;
  }
`;

const DescriptionText = styled.p`
  font-size: 14px;
  font-style: italic;
  color: #757373;
  margin-top: 20px;
`;

const InfoStyled = styled.i`
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

  let resultss: Array<results> = [
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

  interface series {
    name?: string;
    data: Array<number>;
  }

  interface optionsResponsiveObject {
    chart: {
      width: string;
      height: string;
      type: string;
      foreColor: string;
    };
  }

  interface responsive {
    breakpoint: number;
    options: optionsResponsiveObject;
  }

  interface Ichart {
    series: Array<series>;
    options: {
      chart: {
        background?: {
          background: string;
        };
        animations?: {
          enabled: boolean;
          easing: string;
          speed: number;
          animateGradually: {
            enabled: boolean;
            delay: number;
          };
          dynamicAnimation: {
            enabled: boolean;
            speed: number;
          };
        };
        height: number;
        type: string;
        events: {
          click: Function;
        };
      };
      title: {
        text: string | undefined;
        align: string;
        margin: number;
        offsetX: number;
        offsetY: number;
        floating: boolean;
        style: {
          fontSize: string;
          fontWeight: string;
          fontFamily: string | undefined;
          color: string;
        };
      };
      colors: Array<string>;
      plotOptions: {
        bar: {
          columnWidth: string;
          distributed: boolean;
        };
      };
      dataLabels: {
        enabled: boolean;
      };
      legend: {
        show: boolean;
      };
      xaxis: {
        categories: Array<string>;
        labels: {
          style: {
            colors: Array<string>;
            fontSize?: string;
            fontFamily?: string;
          };
        };
      };
      responsive?: Array<responsive>;

      theme?: {
        mode?: string;
        palette?: string;
        monochrome?: {
          enabled?: boolean;
          color?: string;
          shadeTo?: string;
          shadeIntensity?: number;
        };
      };
    };
  }

  //esta funcion ordena los resultado de menor a mayor
  const sortResults = (results: Array<results>) => {
    const temp = results;
    temp.sort((a, b) => {
      return a.result - b.result;
    });

    setResults(temp);
  };

  let chartValue: Ichart = {
    series: [
      {
        name: `Elementos del Fruto`,
        data: [],
      },
    ],
    options: {
      chart: {
        background: {
          background: "#000000",
        },
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
        text: `Fruto del Espíritu: ${name}`,
        align: "left",
        margin: 10,
        offsetX: 0,
        offsetY: 0,
        floating: false,
        style: {
          fontSize: "14px",
          fontWeight: "bold",
          fontFamily: "Average, serif",
          color: "#263238",
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
    },
  };

  // const [chart, setChart] = useState<Ichart>(chartValue);
  const [chart, setChart] = useState(chartValue);
  const [results, setResults] = useState(resultss);
  const [show, setShow] = useState(false);
  const [showDescription, setShowDescription] = useState<Array<boolean>>([]);
  const tempArray: Array<boolean> = [];

  useEffect(() => {
    if (questions.length === 0) {
      let questions: Array<QuestionModel> = JSON.parse(
        localStorage.getItem("Questions")!
      );
      getresults(questions, frutos);
    } else {
      getresults(questions, frutos);
    }

    resultss.forEach((item) => {
      tempArray.push(false);
      setShowDescription(tempArray);
      item.result = parseFloat(localStorage.getItem(`P${item.fruto}`)!);
    });

    resultss.forEach((fruto) => {
      chartValue.options.xaxis.categories.push(fruto.fruto);
      chartValue.options.xaxis.labels.style.colors.push(fruto.color);
      chartValue.options.colors.push(fruto.color);
      chartValue.series[0].data.push(fruto.result);
    });

    setResults(resultss);
    sortResults(results);
    setShow(true);
    setChart(chartValue);
    window.dispatchEvent(new Event("resize"));
    // eslint-disable-next-line
  }, []);

  function changeArrow(index: number, value: boolean) {
    tempArray[index] = value;
    setShowDescription(tempArray);
  }

  return (
    <StyledContainer className="h-100">
      <Container className="w-100 h-full  align-content-center justify-content-center ">
        <Row className="justify-content-start">
          <Col lg={6} md={6} sm={12} xs={12}>
            <InfoStyled>
              Estos porcentajes indican tu estado actual en los elementos del
              Fruto del Espíritu, debes trabajar en los que tengan menor
              porcentaje.
            </InfoStyled>
          </Col>
        </Row>
        <Row className="justify-content-center align-items-center">
          <Col lg={6} md={6} sm={12} xs={12} className="my-4 ">
            <Table striped bordered hover>
              <thead>
                <tr style={{ backgroundColor: "#36773a", color: "white" }}>
                  <th>Elementos del Fruto del Espíritu</th>
                  <th>Porcentaje</th>
                </tr>
              </thead>
              <tbody>
                {show
                  ? results.map(
                      ({ fruto, result, description, color }, index) => (
                        <tr
                          key={index}
                          style={{
                            background: `${color}`,
                          }}
                          onClick={() =>
                            changeArrow(
                              index,
                              showDescription[index] ? false : true
                            )
                          }
                        >
                          <td>
                            <Container fluid>
                              <Row>
                                <Col lg={10} xl={10} xs={10} sm={10}>
                                  <b>{fruto}</b>
                                </Col>
                                <Col lg={10} xl={2} xs={2} sm={2}>
                                  {showDescription[index] ? (
                                    <FontAwesomeIcon
                                      icon={faAngleUp}
                                      onClick={() => changeArrow(index, false)}
                                      size={"1x"}
                                    />
                                  ) : (
                                    <FontAwesomeIcon
                                      icon={faAngleDown}
                                      onClick={() => changeArrow(index, true)}
                                      size={"1x"}
                                    />
                                  )}
                                </Col>
                              </Row>
                              {showDescription[index] && (
                                <DescriptionText>{description}</DescriptionText>
                              )}
                            </Container>
                          </td>
                          <td>{result}%</td>
                        </tr>
                      )
                    )
                  : null}
              </tbody>
            </Table>
          </Col>
          <Col lg={6} md={6} sm={12} xs={12} className="my-4 ">
            {chart.series[0].data.length !== 0 ? (
              <ReactApexChart
                series={chart.series}
                options={chart.options}
                type="bar"
              />
            ) : null}
          </Col>
        </Row>
        <Row className="justify-content-center ">
          <Col
            lg={12}
            md={6}
            sm={12}
            xs={12}
            className="d-flex justify-content-center"
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
