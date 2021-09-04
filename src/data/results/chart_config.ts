import { ApexOptions } from "apexcharts";
import { Ichart } from "../../interfaces/result-interfaces";

export const chartOptions: ApexOptions = {
  chart: {
    background: "#FFFFFF",

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
};

export const chartValue: Ichart = {
  series: [
    {
      name: `Elementos del Fruto`,
      data: [],
    },
  ],
  options: chartOptions,
};
