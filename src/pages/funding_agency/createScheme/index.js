// **React Imports
import React, { useState, useEffect, useMemo, forwardRef } from "react";

// ** MUI Imports
import {
  Card,
  CardContent,
  CardHeader,
  Grid,
  Typography,
  Box,
  Tab,
  Button,
} from "@mui/material";

import FormGroup from "@mui/material/FormGroup";
import Checkbox from "@mui/material/Checkbox";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

// ** MUI Imports
import Radio from "@mui/material/Radio";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import FormLabel from "@mui/material/FormLabel";
import InputLabel from "@mui/material/InputLabel";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormControlLabel from "@mui/material/FormControlLabel";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import { useRef } from "react";
// ** Third Party Imports
import axios from "axios";

// ** Date Picker Imports
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const CustomInput = forwardRef((props, ref) => {
  return (
    <TextField inputRef={ref} label="Deadline Date" fullWidth {...props} />
  );
});

const CreateScheme = () => {
  const [value, setValue] = useState("0");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const checkbox = [
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

  // ** For Tabs End

  // ** Toggle Button Handlers
  const [formats, setFormats] = useState(() => []);

  const handleFormat = (event, newFormats) => {
    setFormats(newFormats);
  };

  const defaultColDef = useMemo(
    () => ({
      sortable: true,
      filter: true,
    }),
    []
  );
  // let eleg  =
  const name = useRef();
  const [type, setType] = useState(null);
  const [orgType, setOrgType] = useState(null);
  const agencyDescription = useRef();
  const [date, setDate] = useState(null);
  const [extraDocsFile, setExtraDocsFile] = useState(["Bonafide", "Passport"]);
  const maxAmount = useRef();
  const [eligibility1, setEligibility1] = useState(null);
  
  const submit = async () => {
    try {
      console.log(name.current.value);
      console.log(type);
      console.log(agencyDescription.current.value);
      console.log(date);
      console.log(extraDocsFile);
      console.log(maxAmount.current.value);
      const data = await axios
        .post("/api/controller/agency/createScholarship", {
          name: name.current.value,
          schemeType: type,
          schemeOrganisationType: orgType,
          agencyDescription: agencyDescription.current.value,
          eligibility: "gdf",
          deadline: date,
          documentsRequired: extraDocsFile,
          maxAmount: maxAmount.current.value,
          interest: formats,
        })
        .then(async(res) => {
          const da=await axios.post("/api/controller/sendmultiplemail",{interest:formats,name:name.current.value}).then(
            as=>{
              if(as){
                window.alert("Successfully Created");
              }
            }
          )
          console.log(formats)
          console.log(res);
          
        });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Card>
          <CardHeader title="Create Schemes" />
          <CardContent>
            <form>
              <Grid container spacing={7}>
                <Grid item xs={12} sm={12}>
                  <TextField
                    fullWidth
                    label="Scheme Name"
                    placeholder="PG Indira Gandhi Scholarship for Single Girl Child"
                    // inputProps={{ readOnly: true }}
                    inputRef={name}
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <FormControl fullWidth>
                    <InputLabel id="form-layouts-separator-single-select-label">
                      Type
                    </InputLabel>
                    <Select
                      id="account-settings-single-select"
                      labelId="account-settings-single-select-label"
                      input={
                        <OutlinedInput
                          label="Type"
                          id="select-single-language"
                        />
                      }
                      onChange={(e) => setType(e.target.value)}
                    >
                      <MenuItem value="hei">Institute</MenuItem>
                      <MenuItem value="individual">Student</MenuItem>
                    </Select>
                  </FormControl>

                  <FormControl fullWidth sx={{ marginTop: "20px" }}>
                    <InputLabel id="form-layouts-separator-single-select-label">
                      SchemeOrgansisationType
                    </InputLabel>
                    <Select
                      id="account-settings-single-select"
                      labelId="account-settings-single-select-label"
                      input={
                        <OutlinedInput
                          label="Scheme Organisation Type"
                          id="select-single-language"
                        />
                      }
                      onChange={(e) => setOrgType(e.target.value)}
                    >
                      <MenuItem value="central">central</MenuItem>
                      <MenuItem value="UGC/aicte">UGC/aicte</MenuItem>
                      <MenuItem value="state">state</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                      label="Deadline Date*"
                      value={date}
                      onChange={(newDate) => {
                        setDate(newDate);
                      }}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </LocalizationProvider>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    fullWidth
                    required
                    type="number"
                    label="Maximum Amount"
                    inputRef={maxAmount}
                    placeholder="+91 1231231234"
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <TextField
                    fullWidth
                    multiline
                    rows={5}
                    label="Scheme Description"
                    placeholder="Lorem Ipsum"
                    inputRef={agencyDescription}
                    // inputProps={{ readOnly: true }}
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <Typography>Eligibility Criteria</Typography>
                  <TextField
                    fullWidth
                    multiline
                    rows={5}
                    label="Eligibility Criteria"
                    placeholder="Lorem Ipsum"
                    sx={{ marginTop: "20px" }}
                    onChange={(newDate) => {
                      setEligibility1(newDate);
                    }}
                    // inputProps={{ readOnly: true }}
                  />
                 
                </Grid>
                
                <Grid item xs={12} sm={12}>
                  <Typography>Scope of Scheme</Typography>
                  <>
                    <ToggleButtonGroup
                      value={formats}
                      onChange={handleFormat}
                      aria-label="text formatting"
                      sx={{ display: "flex", flexDirection: "column" }}
                    >
                      {checkbox.map(function (item) {
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
                    </ToggleButtonGroup>
                  </>
                </Grid>
                <Grid item xs={12}>
                  <Button
                    variant="contained"
                    onClick={submit}
                    sx={{ marginRight: 3.5 }}
                  >
                    Post Scheme
                  </Button>
                  <Button
                    type="reset"
                    variant="outlined"
                    color="secondary"
                    onClick={() => setDate(null)}
                  >
                    Reset
                  </Button>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default CreateScheme;
