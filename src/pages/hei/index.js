// ** MUI Imports
import Grid from "@mui/material/Grid";

// ** Styled Component Import
import ApexChartWrapper from "src/@core/styles/libs/react-apexcharts";
import AppsAndSchemes from "src/views/dashboard/hei/AppsAndSchemes"
import HeiStats from "src/views/dashboard/hei/HeiStats"
import IndividStatsChart from "src/views/dashboard/IndividStatsChart";
import ScheduledInterviews from "src/views/dashboard/hei/ScheduledInterviews";


const Home_hei = () => {
  return (
    <ApexChartWrapper>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <HeiStats />
        </Grid>

        {/* Graph */}

        <Grid item xs={12} md={4} mt={10}>
          <IndividStatsChart />
        </Grid>

        {/* /Graph */}

        <Grid item xs={12} md={8} mt={10}>
          <ScheduledInterviews />
        </Grid>
        <Grid item xs={12}>
          <AppsAndSchemes />
        </Grid>
        <Grid item xs={12}>
          {/* <Table /> */}
        </Grid>
      </Grid>
    </ApexChartWrapper>
  );
}

export default Home_hei