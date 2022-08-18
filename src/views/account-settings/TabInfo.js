// ** React Imports
import { forwardRef, useState } from "react";

// ** MUI Imports
import Grid from "@mui/material/Grid";
import Radio from "@mui/material/Radio";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import FormLabel from "@mui/material/FormLabel";
import InputLabel from "@mui/material/InputLabel";
import RadioGroup from "@mui/material/RadioGroup";
import CardContent from "@mui/material/CardContent";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormControlLabel from "@mui/material/FormControlLabel";
import Chip from "@mui/material/Chip";

// ** Third Party Imports
import DatePicker from "react-datepicker";

// ** Styled Components
import DatePickerWrapper from "src/@core/styles/libs/react-datepicker";
import Divider from "@mui/material/Divider";

const CustomInput = forwardRef((props, ref) => {
  return <TextField inputRef={ref} label="Birth Date" fullWidth {...props} />;
});

const TabInfo = () => {
  // ** State
  const [date, setDate] = useState(null);

  return (





    //form validation needs to be done






    <CardContent>
      <form>
        <Grid container spacing={7}>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              required
              label="First Name"
              placeholder="John Doe"
              defaultValue="John"
              // inputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Middle Name"
              placeholder="John Doe"
              // inputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              required
              label="Last Name"
              placeholder="John Doe"
              // inputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <DatePickerWrapper>
              <DatePicker
              required
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
          <Grid item xs={12} sm={6}>
            <FormControl>
              <FormLabel sx={{ fontSize: "0.875rem" }}>Gender</FormLabel>
              <RadioGroup
                row
                defaultValue="male"
                aria-label="gender"
                name="account-settings-info-radio"
              >
                <FormControlLabel
                  value="male"
                  label="Male"
                  control={<Radio />}
                />
                <FormControlLabel
                  value="female"
                  label="Female"
                  control={<Radio />}
                />
                <FormControlLabel
                  value="other"
                  label="Other"
                  control={<Radio />}
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              required
              type="number"
              label="Phone"
              placeholder="+91 1231231234"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              type="email"
              label="Email"
              placeholder="johnDoe@example.com"

              // inputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              label="Aadhaar Card"
              placeholder="xxxx-xxxx-xxxx"
              inputProps={{ maxLength: 12 }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              label="Pan Card"
              placeholder="AAAAA1234A"
              inputProps={{ maxLength: 10 }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel id="form-layouts-separator-single-select-label">
                Category
              </InputLabel>
              <Select
                required
                defaultValue={["General"]}
                id="account-settings-single-select"
                labelId="account-settings-single-select-label"
                input={
                  <OutlinedInput label="Category" id="select-single-language" />
                }
              >
                <MenuItem value="General">General</MenuItem>
                <MenuItem value="OBC">OBC</MenuItem>
                <MenuItem value="SC/ST">SC/ST </MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel id="form-layouts-separator-multiple-select-label">
                Languages
              </InputLabel>
              <Select
                multiple
                defaultValue={["English"]}
                id="account-settings-multiple-select"
                labelId="account-settings-multiple-select-label"
                input={
                  <OutlinedInput
                    label="Languages"
                    id="select-multiple-language"
                  />
                }
              >
                <MenuItem value="English">English</MenuItem>
                <MenuItem value="Hindi">Hindi</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Guardian's First Name"
              placeholder="John Doe"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Middle Name"
              placeholder="John Doe"
              // inputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Last Name"
              placeholder="John Doe"
              // inputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={12}>
            <Divider variant="middle" textAlign="left">
              <Chip label="Address" />
            </Divider>
          </Grid>
          <Grid item xs={12} sm={2}>
            <TextField
              fullWidth
              label="State"
              placeholder="New Delhi"
              // inputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              fullWidth
              label="Address"
              placeholder="B.H. Area"
              // inputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <TextField
              fullWidth
              label="Locality"
              placeholder="Kadma"
              // inputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <TextField
              fullWidth
              label="Town"
              placeholder="New Delhi"
              // inputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <TextField
              fullWidth
              label="Pincode"
              placeholder="560004"
              // inputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={12}>
            <Divider variant="middle" textAlign="left">
              <Chip label="Academics" />
            </Divider>
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              fullWidth
              label="Highest Qualification Marks"
              placeholder="99.9% or 9.9 CGPA"
              // inputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              fullWidth
              label="Intermediate (XII) Marks"
              placeholder="99.9% or 9.9 CGPA"
              // defaultValue="John"
              // inputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              fullWidth
              label="Matriculation (X) Marks"
              placeholder="99.9% or 9.9 CGPA"
              // inputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <FormControl fullWidth>
              <InputLabel id="form-layouts-separator-single-select-label">
                Highest Qualification
              </InputLabel>
              <Select
                defaultValue={["Intermediate"]}
                id="account-settings-single-select"
                labelId="account-settings-single-select-label"
                input={
                  <OutlinedInput
                    label="Highest Qualifications"
                    id="select-multiple-language"
                  />
                }
              >
                <MenuItem value="Matriculation(X)">Matriculation</MenuItem>
                <MenuItem value="Intermediate(XII)">Intermediate</MenuItem>
                <MenuItem value="Undergraduate">Undergraduate</MenuItem>
                <MenuItem value="Postgraduate">Postgraduate</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <Divider variant="middle" textAlign="left">
              <Chip label="Finance" />
            </Divider>
          </Grid>

          <Grid item xs={12} sm={3}>
            <FormControl fullWidth>
              <InputLabel id="form-layouts-separator-single-select-label">
                Income
              </InputLabel>
              <Select
                defaultValue={["Intermediate"]}
                id="account-settings-single-select"
                labelId="account-settings-single-select-label"
                input={
                  <OutlinedInput
                    label="Highest Qualifications"
                    id="select-multiple-language"
                  />
                }
              >
                <MenuItem value="Upto Rs 3.5 LPA">Upto Rs 3.5 LPA</MenuItem>
                <MenuItem value="Rs 3.5 LPA - Rs 7.5 LPA">
                  Rs 3.5 LPA - Rs 7.5 LPA
                </MenuItem>
                <MenuItem value="Above Rs 7.5 LPA">Above Rs 7.5 LPA</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              fullWidth
              label="IFSC Code"
              placeholder="Jayanagar, Bengaluru"
              // inputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              fullWidth
              label="Bank Name"
              placeholder="Kotak Mahindra Bank"
              // inputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              fullWidth
              label="Account Number"
              placeholder="xxxxxxxxxxxxxxxx"
              inputProps={{ maxLength: 16 }}
              // inputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              fullWidth
              label="Bank Branch Name"
              placeholder="Jayanagar, Bengaluru"
              // inputProps={{ readOnly: true }}
            />
          </Grid>
          

          <Grid item xs={12}>
            <Button variant="contained" sx={{ marginRight: 3.5 }}>
              Save Changes
            </Button>
          
          </Grid>
        </Grid>
      </form>
    </CardContent>
  );
};

export default TabInfo;
