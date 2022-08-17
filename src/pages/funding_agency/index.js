// ** MUI Imports
import Grid from "@mui/material/Grid";

// ** Styled Component Import
import ApexChartWrapper from "src/@core/styles/libs/react-apexcharts";

const Home_agency = () => {
  return (
    <ApexChartWrapper>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          {/* <HeiStats /> */}
        </Grid>

        {/* Graph */}

        <Grid item xs={12} md={4} mt={10}>
          {/* <IndividStatsChart /> */}
        </Grid>

        {/* /Graph */}

        <Grid item xs={12} md={8} mt={10}>
          {/* <ScheduledInterviews /> */}
        </Grid>
        <Grid item xs={12}>
          {/* <AppsAndSchemes /> */}
        </Grid>
        <Grid item xs={12}>
          {/* <Table /> */}
        </Grid>
      </Grid>
    </ApexChartWrapper>
  );
}

export default Home_agency