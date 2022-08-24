// ** MUI Imports
import Grid from "@mui/material/Grid";

// ** Styled Component Import
import ApexChartWrapper from "src/@core/styles/libs/react-apexcharts";

import ModeratorStats from "src/views/dashboard/moderator/ModeratorStats";
import NewModerator from "src/views/dashboard/moderator/NewModerator";
import AppsAndSchemes from "src/views/dashboard/moderator/AppsAndSchemes";

const HomeModerator = () => {
  return (
    <ApexChartWrapper>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <ModeratorStats />
        </Grid>

        {/* Graph */}

        <Grid item xs={12} md={4} mt={10}>
          <NewModerator />
        </Grid>

        {/* /Graph */}

        <Grid item xs={12} md={8} mt={10}>
          <AppsAndSchemes />
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
};

export default HomeModerator;
