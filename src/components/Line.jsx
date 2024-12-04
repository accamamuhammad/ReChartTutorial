import React from "react";
import { Line } from "react-chartjs-2";
import { lineChartData } from "./FakeData";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineGraph = () => {
  const options = {
    responsive: "true",
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
        text: "Graph about representing my daily steps",
      },
    },
  };

  return <Line options={options} data={lineChartData} />;
};

export default LineGraph;
