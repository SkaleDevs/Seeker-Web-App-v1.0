// ** MUI Imports
import Grid from "@mui/material/Grid";

// ** Styled Component Import
import ApexChartWrapper from "src/@core/styles/libs/react-apexcharts";

const Home_agency = ({sess}) => {

  const rtr = useRouter();
 
  if (sess?.status=="loading") return <div>Loading...</div>;
  useEffect(() => {
    if(sess?.user?.role!=="agency") {
      rtr.push(`/${sess?.user?.role}`);
      
    }

  },[sess])
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

export async function getServerSideProps(context) {
  const sess= await getSession(context);
  return {
    props: {
        sess:sess
    },
  };
}
