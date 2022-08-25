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
          type="polarArea"
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
