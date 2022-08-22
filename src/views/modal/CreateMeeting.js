import React, { useEffect, useState, forwardRef } from "react";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "authConfig";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createEvents } from "graph";
import { useIsAuthenticated } from "@azure/msal-react";

// ** Date Picker Imports
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import {
  Box,
  Button,
  Modal,
  FormControl,
  TextField,
  FormControlLabel,
  Typography,
  Grid,
} from "@mui/material";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import CloseIcon from "@mui/icons-material/Close";

import Multiselect from "multiselect-react-dropdown";

import DatePickerWrapper from "src/@core/styles/libs/react-datepicker";

const CustomInput = forwardRef((props, ref) => {
  return (
    <TextField inputRef={ref} label="Deadline Date" fullWidth {...props} />
  );
});

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 750,
  height: 450,
  bgcolor: "background.paper",
  border: "2px solid #000",
  borderRadius: "10px",

  boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px",
  p: 4,
};

export default function CreateMeeting({
  _name,
  _startTime,
  _endTime,
  _email,
  _ht,
}) {
  const isAuthenticated = useIsAuthenticated();
  const { instance, accounts } = useMsal();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [date, setDate] = useState();
  const [startTime, setStartTime] = useState();
  const [endTime, setEndTime] = useState();
  const [startTimeDate, setStartTimeDate] = useState("");
  const [endTimeDate, setEndTimeDate] = useState("");
  const [ht, setHt] = useState("");
  const [domain, setDomain] = useState([]);
  const [role, setRole] = useState([]);
  const event = {
    subject: subject,
    body: {
      contentType: "HTML",
      content: `<h1>u have a meet<h1>`,
    },
    start: {
      dateTime: startTimeDate,
      timeZone: "India Standard Time",
    },
    end: {
      dateTime: endTimeDate,
      timeZone: "India Standard Time",
    },
    location: {
      displayName: "Online meeting",
    },
    attendees: [
      {
        emailAddress: {
          address: email,
          name: name,
        },
        type: "required",
      },
    ],
    isOnlineMeeting: true,
  };
  function RequestCreate() {
    // Silently acquires an access token which is then attached to a request for MS Graph data
    if (isAuthenticated) {
      instance
        .acquireTokenSilent({
          ...loginRequest,
          account: accounts[0],
        })
        .then((response) => {
          console.log(response);
          createEvents(response.accessToken, event).then((response) => {
            console.log(response);
            console.log(startTimeDate, endTimeDate, email, name);

            setOpen(false);
            // setOpen1(false);
          });
        });
    } else {
      instance.loginPopup(loginRequest).catch((e) => {
        console.error(e);
      });
    }
  }
  useEffect(() => {
    if (date && startTime && endTime) {
      var tempDate = new Date(date);
      var month = tempDate.getMonth();
      var year = tempDate.getFullYear();
      var day = tempDate.getDate();
      var tempStartTime = new Date(
        year,
        month,
        day,
        startTime.substring(0, 2),
        startTime.substring(3, 5)
      );
      var tempEndTime = new Date(
        year,
        month,
        day,
        endTime.substring(0, 2),
        endTime.substring(3, 5)
      );
      setStartTimeDate(tempStartTime);

      setEndTimeDate(tempEndTime);
    }
  }, [date, startTime, endTime]);
  useEffect(() => {
    setName(_name ? _name : "");
    setEmail(_email ? _email : "");
    setStartTime(_startTime ? _startTime : "");
    setEndTime(_endTime ? _endTime : "");
    // setHt(_ht ? _ht : "");
    setHt("<h1>your meeting have been scheduled</h1>");
  }, [_name, _startTime, _endTime, _email, _ht]);
  const getDomain = (e) => {
    const { value, checked } = e.target;
    console.log(`${value} is ${checked}`);

    if (checked) {
      setDomain([value]);
    } else {
      setDomain([]);
    }
    console.log(domain);
  };

  const getRole = (e) => {
    const { value, checked } = e.target;
    console.log(`${value} is ${checked}`);

    if (checked) {
      setRole([value]);
    } else {
      setRole([]);
    }
  };

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const subjectChangeHandler = (event) => {
    setSubject(event.target.value);
  };

  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setDate(event.target.value);
  };

  const startTimeChangeHandler = (event) => {
    setStartTime(event.target.value);
  };

  const endTimeChangeHandler = (event) => {
    setEndTime(event.target.value);
  };

  const edithandleclick = () => {
    setName("");
    setEmail("");
    setDomain([]);
    setRole([]);
  };
  const notify = () =>
    toast.success("Email Sent Successfully", { autoClose: 1000 });

  return (
    <div>
      <Button
        onClick={handleOpen}
        variant="contained"
        color="primary"
        size="small"
      >
        Create
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Details
            </Typography>
            <CloseIcon
              variant="outlined"
              sx={{
                color: "red",
                cursor: "pointer",

                borderRadius: "5px",
                "&:hover": {
                  backgroundColor: "#FFC3C3",
                },
              }}
              onClick={handleClose}
            />
          </div>
          {/* <Form onSubmit={handleSubmit}> */}
          <Grid container>
            <Grid item xs={12} sm={12} sx={{ margin: "5px 0" }}>
              <TextField
                fullWidth
                type="email"
                required
                label="Email Subject"
                value={subject}
                placeholder="johnDoe@example.com"
                onChange={subjectChangeHandler}
                // inputProps={{ readOnly: true }}
              />
            </Grid>
            <Grid item xs={12} sm={12} sx={{ margin: "5px 0" }}>
              <TextField
                fullWidth
                label="Panelist Name"
                value={name}
                onChange={nameChangeHandler}
                // inputProps={{ readOnly: true }}
              />
            </Grid>
            <Grid item xs={12} sm={12} sx={{ margin: "5px 0" }}>
              <TextField
                fullWidth
                label="Email id"
                value={email}
                onChange={emailChangeHandler}
                // inputProps={{ readOnly: true }}
              />
            </Grid>

            <Grid item xs={12} sm={6} sx={{ margin: "5px 0" }}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label="Birth Date*"
                  value={date}
                  onChange={(newDate) => {
                    setDate(newDate);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </Grid>
            <Grid item xs={12} sm={6} sx={{ margin: "5px 0px" }}>
              <TextField
                fullWidth
                label="Start Time"
                value={startTime}
                onChange={startTimeChangeHandler}
                placeholder="John Doe"
                // defaultValue="John"
                // inputProps={{ readOnly: true }}
              />
            </Grid>
            <Grid item xs={12} sm={6} sx={{ margin: "5px 0px" }}>
              <TextField
                fullWidth
                label="End Time"
                value={endTime}
                onChange={endTimeChangeHandler}
                placeholder="John Doe"
                // defaultValue="John"
                // inputProps={{ readOnly: true }}
              />
            </Grid>

            <Grid item xs={12} sx={{ margin: "5px 0px" }}>
              <Button
                variant="contained"
                sx={{ marginRight: 3.5 }}
                onClick={RequestCreate}
              >
                Send
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Modal>
      <ToastContainer />
    </div>
  );
}