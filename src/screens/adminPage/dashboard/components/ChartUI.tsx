
import LineChart from "./Chart";
const ChartUI = ({className,chartData}:any) => {
    const lineChartDataOverallRevenue = chartData;


      const lineChartOptionsOverallRevenue = {
        chart: {
          toolbar: {
            show: true,
          },
        },
        xaxis: {
            categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
     
          },
        yaxis: {
        },
        colors: ["#56c3ff", "#5e3aff"], // Set the colors for each line
        stroke: {
          curve: "smooth",
        },
        markers: {
          size: 8,

        },
        tooltip: {
          theme: "dark",
        },grid: {
            show: false, // Remove grid lines
          },
      };
      
            
  return (
    <div className={" w-full " + className}>
      <LineChart chartData={lineChartDataOverallRevenue} chartOptions={lineChartOptionsOverallRevenue} />
   </div>

  );
};

export default ChartUI;