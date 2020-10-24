import React, { useEffect } from "react";

//Components
import ReactApexChart from "react-apexcharts";
import StartAgainButton from "../components/StartAgainButton";
import { Col, Container, Row, Table } from "react-bootstrap";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
//State
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
import bottom_right_image from "../assets/images/logo_without_label.png";
import bottom_left_image from "../assets/images/A1.png";
import { DES_AMOR, DES_BENIGNIDAD, DES_BONDAD, DES_DOMINIO_PROPIO, DES_FE, DES_GOZO, DES_MANSEDUMBRE, DES_PACIENCIA, DES_PAZ } from '../data/answers/all_descriptions';

const StyledContainer = styled.div`
  background: white;
  z-index: -2;
  padding-top:8%
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
  width:0px;
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
  color:#757373;
  margin-top: 20px
  
`;



const Results = () => {
  //State Handling
  const questionsContext = useContext(QuestionsContext);
  const fruitsContexts = useContext(FruitsContext);
  const { name } = useContext(AuthContext);
  const { questions } = questionsContext;
  const { frutos } = fruitsContexts;

  let resultss: Array<results> = [
    { fruto: "Amor", result: 0 , description:DES_AMOR},
    { fruto: "Benignidad", result: 0,description:DES_BENIGNIDAD },
    { fruto: "Bondad", result: 0,description:DES_BONDAD },
    { fruto: "Dominio propio", result: 0,description:DES_DOMINIO_PROPIO },
    { fruto: "Fe", result: 0,description:DES_FE },
    { fruto: "Gozo", result: 0,description:DES_GOZO },
    { fruto: "Mansedumbre", result: 0,description:DES_MANSEDUMBRE },
    { fruto: "Paciencia", result: 0,description:DES_PACIENCIA },
    { fruto: "Paz", result: 0,description:DES_PAZ },
  ];

  interface series {
    name: string;
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
        height: number;
        type: string;
        foreColor: string;
      };
      title: {
        text: string;
      };
      xaxis: {
        categories: Array<string>;
      };
      responsive: Array<responsive>;
      colors: Array<string>;
      dataLabels: {
        style: {};
      };
      theme: {
        mode: string;
        palette: string;
        monochrome: {
          enabled: boolean;
          color: string;
          shadeTo: string;
          shadeIntensity: number;
        };
      };
    };
  }

  let chartValue: Ichart = {
    series: [
      {
        name: `Resultados de tu fruto del Espíritu ${name}`,
        data: [],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "radar",
        foreColor: "#000000",
      },
      title: {
        text: `Tu Fruto del Espíritu ${name}`,
      },
      xaxis: {
        categories: [],
      },
      responsive: [
        {
          breakpoint: 768,
          options: {
            chart: {
              width: "100%",
              height: "500",
              type: "radar",
              foreColor: "#000000",
            },
          },
        },
        {
          breakpoint: 992,
          options: {
            chart: {
              width: "100%",
              height: "500",
              type: "radar",
              foreColor: "#000000",
            },
          },
        },
        {
          breakpoint: 1200,
          options: {
            chart: {
              width: "100%",
              height: "500",
              type: "radar",
              foreColor: "#000000",
            },
          },
        },
        {
          breakpoint: 500000,
          options: {
            chart: {
              width: "100%",
              height: "500",
              type: "radar",
              foreColor: "#000000",
            },
          },
        },
      ],
      colors: ["#36773a"],
      dataLabels: {
        style: {
          colors: ["#F44336", "#E91E63", "#9C27B0"],
        },
      },
      theme: {
        mode: "light",
        palette: "palette10",
        monochrome: {
          enabled: false,
          color: "#36773a",
          shadeTo: "light",
          shadeIntensity: 0.65,
        },
      },
    },
  };

  const [chart, setChart] = useState<Ichart>(chartValue);
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
      //TODO DELETE
    //Crear array con frutos
    // con ese array mapearlo a el get item y con eso setear los promedios de esa vaina crear el objeto y pasarselo a el results
    // const index = localStorage.getItem(fruit);

    resultss.forEach((item) => {
      tempArray.push(false);
      setShowDescription(tempArray);
      item.result = parseFloat(localStorage.getItem(`P${item.fruto}`)!);
    });

    resultss.forEach((fruto) => {
      chartValue.options.xaxis.categories.push(fruto.fruto);
      chartValue.series[0].data.push(fruto.result);
    });
    setResults(resultss);
    setShow(true);
    setChart(chartValue);
    window.dispatchEvent(new Event("resize"));
    // eslint-disable-next-line
  }, []);

  //TODO DELETE
  // function getResult(fruto: fruitsPoints, index: number) {
  //   setResults([...results, localStorage.getItem(`P${fruto.fruto}`)!]);
  //   return results[index];
  // }

  function changeArrow(index: number, value: boolean) {
    tempArray[index] = value;
    setShowDescription(tempArray);
  }
  return (
    <StyledContainer className="h-100">
      <Container className="w-100 h-full  align-content-center justify-content-center ">
        <Row className="justify-content-center ">
          <Col lg={6} md={6} sm={12} xs={12} className="my-4 ">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Fruto</th>
                  <th>Puntuación</th>
                </tr>
              </thead>
              <tbody>
                {show
                  ? results.map(({ fruto, result, description }, index) => (
                      <tr key={index}>
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
                                  />
                                ) : (
                                  <FontAwesomeIcon
                                    icon={faAngleDown}
                                    onClick={() => changeArrow(index, true)}
                                  />
                                )}
                              </Col>
                            </Row>
                            {showDescription[index] && (<DescriptionText>{description}</DescriptionText>)}
                          </Container>
                        </td>
                        <td>{result}</td>
                      </tr>
                    ))
                  : null}
              </tbody>
            </Table>
          </Col>
          <Col lg={6} md={6} sm={12} xs={12} className="my-4 ">
            <ReactApexChart
              series={chart.series}
              options={chart.options}
              type="radar"
            />
          </Col>
        </Row>
        <Row className="justify-content-center align-content-center">
          <Col lg={8} md={6} sm={8} xs={8}>
            <StartAgainButton />
          </Col>
          <Col>
            
            {/* <PayPalButton
            currency="USD"
            options={{ clientId: "sb56AHJTZZYRWWE", currency: "USD" }}
          ></PayPalButton> */}
          </Col>
        </Row>
      </Container>
      <LeftTopImage src={top_left_image} />
     
      <LeftBottomImage src={bottom_left_image} />
    </StyledContainer>
  );
};

export default Results;
