// ** MUI Imports
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";
import CardHeader from "@mui/material/CardHeader";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";

// ** Icons Imports
import DotsVertical from "mdi-material-ui/DotsVertical";

// ** Custom Components Imports
import Chart from "src/@core/components/react-apexcharts";

// ** Data
const chartData = [
  {
    name: "Applied",
    value: 20,
  },
  {
    name: "Accepted",
    value: 10,
  },
  {
    name: "Rejected",
    value: 5,
  },
  {
    name: "Pending",
    value: 5,
  },
];

const PieChart = () => {
  // ** Hook
  const theme = useTheme();

  //   const options = {
  //     chart: {
  //       parentHeightOffset: 0,
  //       toolbar: { show: true },
  //     },
  //     plotOptions: {
  //       bar: {
  //         borderRadius: 9,
  //         distributed: true,
  //         columnWidth: "20%",
  //         endingShape: "rounded",
  //         startingShape: "rounded",
  //       },
  //     },
  //     stroke: {
  //       width: 2,
  //       colors: [theme.palette.background.paper],
  //     },
  //     legend: { show: false },
  //     grid: {
  //       strokeDashArray: 7,
  //       padding: {
  //         top: -1,
  //         right: 0,
  //         left: -12,
  //         bottom: 5,
  //       },
  //     },
  //     dataLabels: { enabled: false },
  //     colors: ["#3AB4F2", "#7DCE13", "#FFC54D", "#EB4747"],
  //     states: {
  //       hover: {
  //         filter: { type: "none" },
  //       },
  //       active: {
  //         filter: { type: "none" },
  //       },
  //     },
  //     xaxis: {
  //       categories: ["Applied", "Accepted", "Pending", "Rejected"],
  //       tickPlacement: "on",
  //       labels: { show: false },
  //       axisTicks: { show: false },
  //       axisBorder: { show: false },
  //       labels: {
  //         show: true,
  //       },
  //     },
  //     yaxis: {
  //       show: true,
  //       tickAmount: 5,
  //       labels: {
  //         offsetX: -17,
  //         // formatter: value => `${value > 999 ? `${(value / 1000).toFixed(0)}` : value}k`
  //       },
  //     },
  //   };

  const options = {
    series: [2, 4, 6],
    label: ["Apple", "Banana", "Grapes"],
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
            total: {
              show: true,
              showAlways: true,
              fontSize: 30,
              color: "#f90000",
            },
          },
        },
      },
    },
  };

  const series = [2, 4, 5];

  return (
    <Card>
      <CardHeader
        title="Pie Chart"
        titleTypographyProps={{
          sx: {
            lineHeight: "2rem !important",
            letterSpacing: "0.15px !important",
          },
        }}
      />
      <CardContent
        sx={{ "& .apexcharts-xcrosshairs.apexcharts-active": { opacity: 0 } }}
      >
        <Chart
          type="donut"
          //   width={400}
          height={220}
          series={series}
          options={options}
        />
      </CardContent>
    </Card>
  );
};

export default PieChart;
