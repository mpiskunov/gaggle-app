"use client";
import { Chart as ChartJS, registerables } from "chart.js";
import { Line } from "react-chartjs-2";
ChartJS.register(...registerables);

const BasicChart = () => {
  return (
    <>
      <Line
        data={{
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "June", "July"],
          datasets: [
            {
              label: "My First Dataset",
              data: [65, 59, 80, 81, 56, 55, 40],
              fill: false,
              borderColor: "rgb(75, 192, 192)",
              tension: 0.1,
            },
          ],
        }}
      />
    </>
  );
};

export default BasicChart;
