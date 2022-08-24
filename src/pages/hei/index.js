// ** MUI Imports
import Grid from "@mui/material/Grid";

// ** Styled Component Import
import ApexChartWrapper from "src/@core/styles/libs/react-apexcharts";
import AppsAndSchemes from "src/views/dashboard/hei/AppsAndSchemes";
import HeiStats from "src/views/dashboard/hei/HeiStats";
import HeiStatsChart from "src/views/dashboard/hei/HeiStatGraph";
import ScheduledInterviews from "src/views/dashboard/hei/ScheduledInterviews";
import {getSession} from 'next-auth/react';
import { useEffect } from "react";
import { useRouter } from "next/router";
const Home_hei = ({sess}) => {
  
  const rtr = useRouter();
  useEffect(() => {
    if(sess?.user?.role!=="individual") {
      rtr.push(`/${sess?.user?.role}`);
      
    }
    
  },[])
  if (sess?.status=="loading") return <div>Loading...</div>;
  return (
    <ApexChartWrapper>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <HeiStats />
        </Grid>

        {/* Graph */}

        <Grid item xs={12} md={4} mt={10}>
          <HeiStatsChart />
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

export default Home_hei;

export async function getServerSideProps(context) {
  const sess= await getSession(context);
  return {
    props: {
        sess:sess
    },
  };
}
