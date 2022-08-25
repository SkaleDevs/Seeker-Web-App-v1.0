// ** React Imports
import { useState, useRef } from "react";

import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

// ** Styled Component Import
import ApexChartWrapper from "src/@core/styles/libs/react-apexcharts";

// ** Demo Components Imports
import IndividualStats from "src/views/dashboard/individual/IndividualStats";
import IndividStatsChart from "src/views/dashboard/individual/IndividualStatGraph";
import ScheduledInterviews from "src/views/dashboard/individual/ScheduledInterviews";
import AppsAndSchemes from "src/views/dashboard/individual/AppsAndSchemes";

import axios from "axios";

import { getSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/router";
// ** Third Party Styles Imports
import "react-datepicker/dist/react-datepicker.css";

const Home = ({ sess }) => {
  const phoneRef = useRef();
  const clickHanlder = async () => {
    try {
      console.log("hello");
      await axios.post("/api/controller/seeker/sendotp").then((res) => {
        console.log(res.data);
        if (res.data.message === "yes") {
          window.alert("yessss");
        } else {
          window.alert("no");
        }
      });
    } catch (error) {
      console.log(error);
    }
  };
  const clickHanlder1 = async () => {
    try {
      console.log(phoneRef.current.value);
      await axios
        .post("/api/controller/seeker/verifyotp", {
          phoneNo: phoneRef.current.value,
        })
        .then((res) => {
          window.alert("otp sent");
        });
    } catch (error) {
      console.log(error);
    }
  };

  const rtr = useRouter();
  useEffect(() => {
    if (sess?.user?.role !== "individual") {
      rtr.push(`/${sess?.user?.role}`);
    }
  }, []);
  // ** State
  const [value, setValue] = useState("account");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  if (sess?.status == "loading") return <div>Loading...</div>;

  return (
    <ApexChartWrapper>
      <Button
        variant="contained"
        color="primary"
        sx={{ flexGrow: 1 }}
        onClick={clickHanlder}
      >
        Send OTP
      </Button>
      <TextField
        autoFocus
        fullWidth
        id="email"
        label="Enter Number"
        sx={{ marginBottom: 4 }}
        inputRef={phoneRef}
        // value={email}
        type="Number"
      />
      <Button
        variant="contained"
        color="primary"
        sx={{ flexGrow: 1 }}
        onClick={clickHanlder1}
      >
        verify
      </Button>
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
  const sess = await getSession(context);
  return {
    props: {
      sess: sess,
    },
  };
}
