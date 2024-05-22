
import Chart from "react-apexcharts";

const LineChart = ({ chartData, chartOptions }:any) => {
  return <Chart options={chartOptions} series={chartData} type="line" height={350} />;
};

export default LineChart;
