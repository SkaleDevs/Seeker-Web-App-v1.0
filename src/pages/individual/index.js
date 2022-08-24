// ** React Imports
import { useState } from "react";

import Grid from "@mui/material/Grid";

// ** Styled Component Import
import ApexChartWrapper from "src/@core/styles/libs/react-apexcharts";

// ** Demo Components Imports
import IndividualStats from "src/views/dashboard/individual/IndividualStats";
import IndividStatsChart from "src/views/dashboard/individual/IndividualStatGraph";
import ScheduledInterviews from "src/views/dashboard/individual/ScheduledInterviews";
import AppsAndSchemes from "src/views/dashboard/individual/AppsAndSchemes";



import {getSession} from 'next-auth/react';
import { useEffect } from "react";
import { useRouter } from "next/router";
// ** Third Party Styles Imports
import "react-datepicker/dist/react-datepicker.css";




const Home = ({sess}) => {

  const rtr = useRouter();
  useEffect(() => {
    if(sess?.user?.role!=="individual") {
      rtr.push(`/${sess?.user?.role}`);
      
    }
    
  },[])
  // ** State
  const [value, setValue] = useState("account");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  if (sess?.status=="loading") return <div>Loading...</div>;
  

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

export default Home;
export async function getServerSideProps(context) {
  const sess= await getSession(context);
  return {
    props: {
        sess:sess
    },
  };
}