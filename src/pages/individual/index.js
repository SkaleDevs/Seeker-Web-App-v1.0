// ** React Imports
import React from "react";
import { useState, useRef } from "react";

// ** MUI Imports

import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Divider } from "@mui/material";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

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
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const handleReset = () => {
    setOpen(false);
    setFormats([]);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const handleSave = async () => {
    if (formats.length > 2) {
      setOpen(false);
      console.log("formats: " + formats);
      let data = await axios
        .post("/api/controller/seeker/addwebseekerrecommendation", {
          interest: formats,
        })
        .then((res) => {
          alert(res.data);
        });
    } else {
      alert("Please select atleast 3 interests");
    }
  };

  // ** Toggle Button Data

  const tog = [
    {
      name: "MBA",
    },
    {
      name: "Phd",
    },
    {
      name: "Science",
    },
    {
      name: "Management",
    },
    {
      name: "Engineering",
    },
    {
      name: "Medical",
    },
    {
      name: "Arts",
    },
    {
      name: "Commerce",
    },
    {
      name: "Physics",
    },
    {
      name: "Chemistry",
    },
    {
      name: "Biology",
    },
    {
      name: "Mathematics",
    },
    {
      name: "English",
    },
    {
      name: "Hindi",
    },
    {
      name: "Marathi",
    },
    {
      name: "Kannada",
    },
    {
      name: "Girl",
    },
    {
      name: "Disable",
    },
    {
      name: "OBC",
    },
    {
      name: "SC/ST",
    },
  ];

  // ** Modal Transition

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

  useEffect(() => {
    setTimeout(handleOpen, 3000);
  }, []);

  // ** Toggle Button Handlers
  const [formats, setFormats] = useState(() => []);

  const handleFormat = (event, newFormats) => {
    setFormats(newFormats);
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
      {/* -----------------------------Modal Popup----------------------------------------------------------- */}

      <div>
        <Dialog open={open} onClose={handleClose} fullWidth="30%">
          <DialogTitle>Select your fields of interest</DialogTitle>
          <Divider />
          <DialogContent>
            <DialogContentText>Min. 3 interests</DialogContentText>
            <ToggleButtonGroup
              value={formats}
              onChange={handleFormat}
              aria-label="text formatting"
            >
              {/* <Grid container spacing={2}> */}
              {tog.map(function (item) {
                return (
                  // <Grid item key={item.name}>
                  <ToggleButton
                    color="primary"
                    variant="outlined"
                    sx={{ margin: "8px" }}
                    value={item.name}
                    aria-label={item.name}
                    key={item.name}
                  >
                    {item.name}
                  </ToggleButton>
                  // </Grid>
                );
              })}
              {/* </Grid> */}
            </ToggleButtonGroup>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleReset}>Cancel</Button>
            <Button onClick={handleSave}>Save</Button>
          </DialogActions>
        </Dialog>
      </div>

      {/* -----------------------------/Modal Popup----------------------------------------------------------- */}
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
