import React from "react";
import { Ichart } from "./interfaces";

//TODO
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
      foreColor: "#",
    },
    title: {
      text: `Tu Fruto del Espíritu ${name}`,
    },
    xaxis: {
      categories: [],
      labels: {
        show: true,
        style: {
          colors: [],
          fontSize: "12px",
        },
      },
    },
    responsive: [
      {
        breakpoint: 768,
        options: {
          chart: {
            width: "100%",
            height: "500",
            type: "radar",
            foreColor: "#36773a",
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
        enabled: true,
        color: "#36773a",
        shadeTo: "light",
        shadeIntensity: 0.65,
      },
    },
  },
};

const RadarChart = () => {
  return <div></div>;
};

export default RadarChart;
