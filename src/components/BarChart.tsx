import React from "react";
import ReactApexChart from "react-apexcharts";
import Col from "react-bootstrap/esm/Col";
import { Ichart } from "../interfaces/result-interfaces";

interface BarChartProps {
  chart: Ichart;
}

const BarChart = (props: BarChartProps) => {
  return (
    <Col lg={6} md={6} sm={12} xs={12} className='my-4'>
      {props.chart.series[0].data.length !== 0 ? (
        <ReactApexChart
          series={props.chart.series}
          options={props.chart.options}
          type='bar'
          height={490}
        />
      ) : null}
    </Col>
  );
};

export default BarChart;
