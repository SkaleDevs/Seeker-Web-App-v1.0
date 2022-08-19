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

// ** Third Party Imports
import DatePicker from "react-datepicker";

// ** Styled Components
import DatePickerWrapper from "src/@core/styles/libs/react-datepicker";

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

  // ** For Tabs End

  const defaultColDef = useMemo(
    () => ({
      sortable: true,
      filter: true,
    }),
    []
  );

  const [date, setDate] = useState(null);

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
                    >
                      <MenuItem value="Institute">Institute</MenuItem>
                      <MenuItem value="Student">Student</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <DatePickerWrapper>
                    <DatePicker
                      selected={date}
                      showYearDropdown
                      showMonthDropdown
                      id="account-settings-date"
                      placeholderText="MM-DD-YYYY"
                      customInput={<CustomInput />}
                      onChange={(date) => setDate(date)}
                    />
                  </DatePickerWrapper>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    fullWidth
                    required
                    type="number"
                    label="Maximum Amount"
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
                    // inputProps={{ readOnly: true }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button variant="contained" sx={{ marginRight: 3.5 }}>
                    Save Changes
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
