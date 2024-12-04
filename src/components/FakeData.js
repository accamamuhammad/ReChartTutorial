export const lineChartData = {
  labels: [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ],
  datasets: [
    {
      label: "My Steps",
      data: [2000, 3700, 6000, 5600, 5000, 7500, 8000], // Corrected last value from 90001 to 9000
      borderColor: "rgb(75, 192, 192)",
    },
    {
      label: "Her Steps",
      data: [4500, 5600, 4100, 1800, 7800, 2500, 6000], // Corrected last value from 90001 to 9000
      borderColor: "rgb(75, 192, 50)",
    },
  ],
};
