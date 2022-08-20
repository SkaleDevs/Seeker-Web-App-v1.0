

// ** MUI Imports
import Grid from "@mui/material/Grid";

// ** Styled Component Import
import ApexChartWrapper from "src/@core/styles/libs/react-apexcharts";
import AppsAndSchemes from "src/views/dashboard/funding_agency/AppsAndSchemes";
import FundingAgencyStats from "src/views/dashboard/funding_agency/FundingAgencyStats";
import FundingAgencyStatsChart from "src/views/dashboard/funding_agency/FundingAgencyStatGraph";
import ScheduledInterviews from "src/views/dashboard/funding_agency/ScheduledInterviews";

const Home_agency = () => {
  return (
    <ApexChartWrapper>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <FundingAgencyStats />
        </Grid>

        {/* Graph */}

        <Grid item xs={12} md={6} mt={10}>
          <FundingAgencyStatsChart />
        </Grid>

        {/* /Graph */}

        <Grid item xs={12} md={6} mt={10}>
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
};

export default Home_agency;

