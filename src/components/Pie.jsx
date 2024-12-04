import React from "react";

import { Pie } from "react-chartjs-2";
import { PieChartData } from "./PieData";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const options = {
    responsive: "true",
    plugins: {
      Legend: {
        position: "bottom",
      },
    },
  };

  return <Pie options={options} data={PieChartData} />;
};

export default PieChart;
