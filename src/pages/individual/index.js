// ** MUI Imports
import Grid from "@mui/material/Grid";

// ** Styled Component Import
import ApexChartWrapper from "src/@core/styles/libs/react-apexcharts";

// ** Demo Components Imports
import TotalEarning from "src/views/dashboard/TotalEarning";
import IndividualStats from "src/views/dashboard/individual/IndividualStats";
import IndividStatsChart from "src/views/dashboard/IndividStatsChart";
import DepositWithdraw from "src/views/dashboard/DepositWithdraw";

const Home = () => {
  return (
    <ApexChartWrapper>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <IndividualStats />
        </Grid>

        {/* Graph */}

        <Grid item xs={12} md={4} mt={10}>
          <IndividStatsChart />
        </Grid>

        {/* /Graph */}
        
        <Grid item xs={12} md={8} mt={10}>
          <TotalEarning />
        </Grid>
        <Grid item xs={12}>
          <DepositWithdraw />
        </Grid>
        <Grid item xs={12}>
          {/* <Table /> */}
        </Grid>
      </Grid>
    </ApexChartWrapper>
  );
};

export default Home;
