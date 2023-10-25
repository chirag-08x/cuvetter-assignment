import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";

const DoughnutChart = ({ correct, total }) => {
  Chart.register(ArcElement);
  //     console.log(chartRef);
  //     const ctx = chartRef.current.getContext("2d");

  //     const chartOptions = {
  //       type: "doughnut",
  //       data: {
  //         labels: ["score"],
  //         datasets: [
  //           {
  //             data: [8, 15 - 8], // 8 is the score, and 15 - 8 is the remaining
  //             backgroundColor: ["rgb(67, 138, 246)", "rgba(67, 138, 246, 0.1)"], // Colors for the segments
  //           },
  //         ],
  //       },
  //     };

  //     new Chart(ctx, chartOptions);
  //   }, []);
  const data = {
    type: "doughnut",
    labels: ["score"],
    datasets: [
      {
        data: [Number(correct), Number(total) - Number(correct)],
        backgroundColor: ["rgb(67, 138, 246)", "rgba(67, 138, 246, 0.1)"],
      },
    ],
  };

  const options = {
    title: {
      display: true,
      text: "Doughnut Chart Example",
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return <Doughnut data={data} options={options} />;
};

export default DoughnutChart;
