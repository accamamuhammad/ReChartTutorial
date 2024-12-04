import React from "react";

import { Bar } from "react-chartjs-2";
import { BarChartData } from "./BarData";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {
  const options = {};

  return <Bar options={options} data={BarChartData} />;
};

export default BarChart;
