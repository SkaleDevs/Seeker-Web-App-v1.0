import React, { useEffect, useState } from "react";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "./authConfig";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createEvents } from "./graph";
import { useIsAuthenticated } from "@azure/msal-react";

import {
  Box,
  Button,
  Modal,
  FormControl,
  TextField,
  FormControlLabel,
  Typography,
} from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import CloseIcon from "@mui/icons-material/Close";
// import Axios from "axios";

import Multiselect from "multiselect-react-dropdown";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 750,
  height: 550,
  bgcolor: "background.paper",
  border: "2px solid #000",
  borderRadius: "10px",

  boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px",
  p: 4,
};

export default function ModalComponent({
  _name,
  _startTime,
  _endTime,
  _email,
  _ht,
  setOpen1,
}) {
  const isAuthenticated = useIsAuthenticated();
  const { instance, accounts } = useMsal();
  const [open, setOpen] = useState(true);
  const handleClose = () => {
    setOpen(false);
    // setOpen1(false);
  };

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
          createEvents(response.accessToken, event).then((response) => {
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
      {/* <Button
        variant="outlined"
        onClick={handleOpen}
        style={{ height: "45px", marginLeft: "20px" }}
        sx={{
          "&:hover": {
            backgroundColor: "skyBlue",
          },
        }}
      >
        Send
      </Button> */}

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div style={{ display: "flex" }}>
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              style={{ flexGrow: 1, fontFamily: "serif", fontWeight: "bold" }}
            >
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
          <hr />
          {/* <Form onSubmit={handleSubmit}> */}
          <FormControl fullWidth>
            <TextField
              id="outlined-basic"
              label="Email Subject"
              value={subject}
              onChange={subjectChangeHandler}
              margin="none"
              variant="filled"
              size="small"
              style={{ marginBottom: "20px", width: "100%" }}
            />

            <TextField
              id="outlined-basic"
              label="Panelist Name"
              value={name}
              onChange={nameChangeHandler}
              margin="none"
              variant="filled"
              size="small"
              style={{ marginBottom: "10px", width: "100%" }}
            />
            <TextField
              id="outlined-basic"
              label="Email id"
              value={email}
              onChange={emailChangeHandler}
              margin="none"
              variant="filled"
              size="small"
              style={{ marginBottom: "10px", width: "100%" }}
            />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "20px",
              }}
            >
              {/* <TextField
                id="outlined-basic"
                label="Email Subject"
                value={subject}
                onChange={subjectChangeHandler}
                margin="none"
                variant="filled"
                size="small"
                style={{ marginBottom: "20px", width: "100%" }}
              /> */}
              <input
                type="date"
                value={date}
                onChange={dateChangeHandler}
                style={{
                  margin: "20px",

                  width: "100%",
                }}
              />
              {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label="Basic example"
                  value={date}
                  onChange={dateChangeHandler}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider> */}
              <TextField
                id="outlined-basic"
                label="Start Time"
                value={startTime}
                onChange={startTimeChangeHandler}
                margin="none"
                variant="filled"
                size="small"
                style={{ margin: "10px", width: "100%", marginTop: "0px" }}
              />
              <TextField
                id="outlined-basic"
                label="End Time"
                value={endTime}
                onChange={endTimeChangeHandler}
                margin="none"
                variant="filled"
                size="small"
                style={{ marginBottom: "10px", width: "100%" }}
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                marginBottom: "20px",
              }}
            >
              <Typography
                id="modal-modal-title"
                variant="subtitle1"
                component="h4"
                style={{ width: "120px", marginTop: "4px", fontSize: "14.5px" }}
              >
                Domain selected :
              </Typography>
              <RadioGroup
                className="domainCheckboxModal"
                style={{
                  display: "flex",
                  flexDirection: "row",

                  marginLeft: "20px",
                }}
              >
                <FormControlLabel
                  control={
                    <Radio
                      checked={domain[0] === "AWS" ? true : false}
                      sx={{ "& .MuiSvgIcon-root": { fontSize: 18 } }}
                    />
                  }
                  label={<Typography sx={{ fontSize: 12 }}>AWS</Typography>}
                  value="AWS"
                  onChange={(e) => getDomain(e)}
                />
                <FormControlLabel
                  control={
                    <Radio
                      checked={domain[0] === "GCP" ? true : false}
                      sx={{ "& .MuiSvgIcon-root": { fontSize: 18 } }}
                    />
                  }
                  label={<Typography sx={{ fontSize: 12 }}>GCP</Typography>}
                  value="GCP"
                  onChange={(e) => getDomain(e)}
                />

                <FormControlLabel
                  control={
                    <Radio
                      checked={domain[0] === "AZURE" ? true : false}
                      sx={{ "& .MuiSvgIcon-root": { fontSize: 18 } }}
                    />
                  }
                  label={<Typography sx={{ fontSize: 12 }}>AZURE</Typography>}
                  value="AZURE"
                  onChange={(e) => getDomain(e)}
                />
              </RadioGroup>
            </div>
            <div style={{ display: "flex", justifyContent: "flex-start" }}>
              <Typography
                id="modal-modal-title"
                variant="subtitle1"
                component="h6"
                style={{ width: "120px", marginTop: "4px", fontSize: "14.5px" }}
              >
                Career stage selected :
              </Typography>
              <div className="roleCol">
                <RadioGroup
                  className="domainCheckboxModal"
                  sx={{ height: "30px" }}
                  style={{
                    display: "flex",
                    flexDirection: "row",

                    marginLeft: "20px",
                  }}
                >
                  <FormControlLabel
                    control={
                      <Radio
                        checked={role[0] === "AL1" ? true : false}
                        sx={{ "& .MuiSvgIcon-root": { fontSize: 18 } }}
                      />
                    }
                    label={<Typography sx={{ fontSize: 12 }}>AL1</Typography>}
                    value="AL1"
                    onChange={(e) => getRole(e)}
                  />
                  <FormControlLabel
                    control={
                      <Radio
                        checked={role[0] === "AL2" ? true : false}
                        sx={{ "& .MuiSvgIcon-root": { fontSize: 18 } }}
                      />
                    }
                    label={<Typography sx={{ fontSize: 12 }}>AL2</Typography>}
                    value="AL2"
                    onChange={(e) => getRole(e)}
                  />
                  <FormControlLabel
                    control={
                      <Radio
                        checked={role[0] === "SAL1" ? true : false}
                        sx={{ "& .MuiSvgIcon-root": { fontSize: 18 } }}
                      />
                    }
                    label={<Typography sx={{ fontSize: 12 }}>SAL1</Typography>}
                    value="SAL1"
                    onChange={(e) => getRole(e)}
                  />
                  <FormControlLabel
                    control={
                      <Radio
                        checked={role[0] === "SAL2" ? true : false}
                        sx={{ "& .MuiSvgIcon-root": { fontSize: 18 } }}
                      />
                    }
                    label={<Typography sx={{ fontSize: 12 }}>SAL2</Typography>}
                    value="SAL2"
                    onChange={(e) => getRole(e)}
                  />

                  <FormControlLabel
                    control={
                      <Radio
                        checked={role[0] === "Specialist" ? true : false}
                        sx={{ "& .MuiSvgIcon-root": { fontSize: 18 } }}
                      />
                    }
                    label={
                      <Typography sx={{ fontSize: 12 }}>Specialist</Typography>
                    }
                    value="Specialist"
                    onChange={(e) => getRole(e)}
                  />
                </RadioGroup>
                <RadioGroup
                  className="domainCheckboxModal"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginBottom: "2px",
                    marginLeft: "20px",
                  }}
                >
                  <FormControlLabel
                    control={
                      <Radio
                        checked={role[0] === "Sr. Specialist" ? true : false}
                        sx={{ "& .MuiSvgIcon-root": { fontSize: 18 } }}
                      />
                    }
                    label={
                      <Typography sx={{ fontSize: 12 }}>
                        Sr. Specialist
                      </Typography>
                    }
                    value="Sr. Specialist"
                    onChange={(e) => getRole(e)}
                  />
                  <FormControlLabel
                    control={
                      <Radio
                        checked={role[0] === "Manager" ? true : false}
                        sx={{ "& .MuiSvgIcon-root": { fontSize: 18 } }}
                      />
                    }
                    label={
                      <Typography sx={{ fontSize: 12 }}>Manager</Typography>
                    }
                    value="Manager"
                    onChange={(e) => getRole(e)}
                  />
                  <FormControlLabel
                    control={
                      <Radio
                        checked={role[0] === "Director" ? true : false}
                        sx={{ "& .MuiSvgIcon-root": { fontSize: 18 } }}
                      />
                    }
                    label={
                      <Typography sx={{ fontSize: 12 }}>Director</Typography>
                    }
                    value="Director"
                    onChange={(e) => getRole(e)}
                  />
                  <FormControlLabel
                    control={
                      <Radio
                        checked={role[0] === "Sr. Director" ? true : false}
                        sx={{ "& .MuiSvgIcon-root": { fontSize: 18 } }}
                      />
                    }
                    label={
                      <Typography sx={{ fontSize: 12 }}>
                        Sr. Director
                      </Typography>
                    }
                    value="Sr. Director"
                    onChange={(e) => getRole(e)}
                  />
                </RadioGroup>
              </div>
            </div>
            <div
              className="addPanelistButton"
              style={{ display: "flex", justifyContent: "flex-end" }}
            >
              <Button
                style={{ marginRight: "40px" }}
                variant="contained"
                onClick={RequestCreate}
              >
                Send
              </Button>
            </div>
          </FormControl>
          <hr />
        </Box>
      </Modal>
      <ToastContainer />
    </div>
  );
}
