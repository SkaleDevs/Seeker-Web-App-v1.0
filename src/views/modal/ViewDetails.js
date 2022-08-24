import React, { useEffect, useState, forwardRef } from "react";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "authConfig";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createEvents } from "graph";
import { useIsAuthenticated } from "@azure/msal-react";
import { useRouter } from "next/router";

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

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubHeader";

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
  bgcolor: "background.paper",
  border: "2px solid #000",
  borderRadius: "10px",

  boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px",
  p: 4,
};

export default function CreateMeeting() {
  const router = useRouter();

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

  const applyHandler = () => {
    return router.push("/individual/application");
  };

  function generate(element) {
    return [0, 1, 2].map((value) =>
      React.cloneElement(element, {
        key: value,
      })
    );
  }

  return (
    <div style={{ overflow: "scroll" }}>
      <Button
        onClick={handleOpen}
        variant="contained"
        color="success"
        size="small"
      >
        Apply
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ overflow: "scroll" }}
      >
        <Box sx={style}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Typography id="modal-modal-title" variant="h5" component="h2">
              Scheme Details
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
          <Grid container sx={{ overflow: { sm: "scroll" }, height: "30rem" }}>
            <Grid item xs={12} sm={12} sx={{ margin: "5px 0" }}>
              <Typography
                variant="subtitle1"
                component="h5"
                sx={{ margin: "5px 0" }}
              >
                Description
              </Typography>
              <Typography variant="body2" component="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                eget varius nibh, vel venenatis enim. Nam elementum sem nisi, ut
                aliquet risus aliquet id. Phasellus pellentesque eros felis, sit
                amet elementum eros ornare a. Cras libero tortor, tristique ac
                tempus quis, viverra quis diam. Aenean et odio a massa
                condimentum pretium sed lacinia sapien. Maecenas ornare nisi nec
                massa viverra.
              </Typography>
            </Grid>

            <Grid item xs={12} sm={12} sx={{ margin: "5px 0" }}>
              <List>
                <ListSubheader
                  variant="subtitle1"
                  component="h2"
                  sx={{ margin: "0", padding: "0" }}
                >
                  Eligibility Criteria
                </ListSubheader>
                {generate(
                  <ListItem sx={{ margin: "0" }}>
                    <ListItemText primary="Single-line item" />
                  </ListItem>
                )}
              </List>
            </Grid>
            <Grid item xs={12} sm={12} sx={{ margin: "5px 0" }}>
              <List>
                <ListSubheader
                  variant="subtitle1"
                  component="h2"
                  sx={{ margin: "0", padding: "0" }}
                >
                  Eligibility Criteria
                </ListSubheader>
                {generate(
                  <ListItem sx={{ margin: "0" }}>
                    <ListItemText primary="Single-line item" />
                  </ListItem>
                )}
              </List>
            </Grid>
            <Grid item xs={12} sm={12} sx={{ margin: "5px 0" }}>
              <List>
                <ListSubheader
                  variant="subtitle1"
                  component="h2"
                  sx={{ margin: "0", padding: "0" }}
                >
                  Additional Information
                </ListSubheader>
                {generate(
                  <ListItem sx={{ margin: "0" }}>
                    <ListItemText primary="Single-line item" />
                  </ListItem>
                )}
              </List>
            </Grid>
            <Grid item xs={12} sx={{ margin: "5px 0px" }}>
              <Button
                variant="contained"
                sx={{ marginRight: 3.5 }}
                onClick={applyHandler}
              >
                Apply
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Modal>
      <ToastContainer />
    </div>
  );
}
