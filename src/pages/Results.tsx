import React, { useEffect } from "react";
import { useContext, useState } from "react";
import FruitsContext from "../context/frutos/FruitsContext";
import QuestionsContext from "../context/questions/QuestionsContext";
import { getresults, results } from "../helper/results";
import ReactApexChart from "react-apexcharts";
import { Col, Container, Row } from "react-bootstrap";
import { QuestionModel } from "../models/question_model";

const Results = () => {
  const questionsContext = useContext(QuestionsContext);
  const fruitsContexts = useContext(FruitsContext);

  const { questions } = questionsContext;
  const { frutos } = fruitsContexts;

  let resultss: Array<results> = [
    { fruto: "Amor", result: 0 },
    { fruto: "Benignidad", result: 0 },
    { fruto: "Bondad", result: 0 },
    { fruto: "Dominio Propio", result: 0 },
    { fruto: "Fe", result: 0 },
    { fruto: "Gozo", result: 0 },
    { fruto: "Mansedumbre", result: 0 },
    { fruto: "Paciencia", result: 0 },
    { fruto: "Paz", result: 0 },
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
        name: "Frutos del espíritu",
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
        text: "Frutos del espíritu",
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

  useEffect(() => {
    console.log(questions);
    if (questions.length === 0) {
      let questions: Array<QuestionModel> = JSON.parse(
        localStorage.getItem("Questions")!
      );
      getresults(questions, frutos);
    } else {
      getresults(questions, frutos);
    }

    //Crear array con frutos
    // con ese array mapearlo a el get item y con eso setear los promedios de esa vaina crear el objeto y pasarselo a el results
    // const index = localStorage.getItem(fruit);

    resultss.forEach((item) => {
      item.result = parseInt(localStorage.getItem(`P${item.fruto}`)!);
    });
    resultss.forEach((fruto) => {
      chartValue.options.xaxis.categories.push(fruto.fruto);
      chartValue.series[0].data.push(fruto.result);
    });
    setChart(chartValue);
    window.dispatchEvent(new Event("resize"));
  }, []);

  return (
    <Container fluid className="w-100 h-full align-content-center">
      <Row className="justify-content-center h-100 ">
        <Col lg={8} md={6} sm={12} xs={12} className="my-4 ">
          <ReactApexChart
            series={chart.series}
            options={chart.options}
            type="radar"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Results;
