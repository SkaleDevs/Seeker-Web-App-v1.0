// ** React Imports
import { useState, Fragment, forwardRef, useRef } from "react";

// ** Next Imports
import Link from "next/link";

// ** Stepper Imports
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import StepContent from "@mui/material/StepContent";

// ** MUI Components
import Box from "@mui/material/Box";
import Radio from "@mui/material/Radio";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import Chip from "@mui/material/Chip";

import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import { styled, useTheme } from "@mui/material/styles";
import MuiCard from "@mui/material/Card";
import MuiFormControlLabel from "@mui/material/FormControlLabel";

// ** Third Party Imports
import DatePicker from "react-datepicker";

// ** Styled Components Imports
import DatePickerWrapper from "src/@core/styles/libs/react-datepicker";

const CustomInput = forwardRef((props, ref) => {
  return <TextField inputRef={ref} label="Birth Date" fullWidth {...props} />;
});

const LinkStyled = styled("a")(({ theme }) => ({
  fontSize: "0.875rem",
  textDecoration: "none",
  color: theme.palette.primary.main,
}));

const FormControlLabel = styled(MuiFormControlLabel)(({ theme }) => ({
  marginTop: theme.spacing(1.5),
  marginBottom: theme.spacing(4),
  "& .MuiFormControlLabel-label": {
    fontSize: "0.875rem",
    color: theme.palette.text.secondary,
  },
}));

const IndivRegistration = () => {
  const theme = useTheme();
  // ** States-----------------------------------------------------------------------------------------------------------
  const [date, setDate] = useState(null);
  const [category, setCategory] = useState("general");
  const [gender, setGender] = useState("male");
  const [highestQualification, setHighestQualification] =
    useState("intermediate");
  const [income, setIncome] = useState("3.5lpa");

 // **--------------------------------------------------------------------------------------------------------------
  // ** Refs
  // ** ---------------------------------------------------------------------------------------------------------------
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Divider variant="middle" textAlign="left">
            <Chip label="Personal Information" />
          </Divider>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            required
            label="First Name"
            placeholder="First Name"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="Middle Name" placeholder="Middle Name" />
        </Grid>
        <Grid item xs={12} sm={8}>
          <TextField
            fullWidth
            required
            label="Last Name"
            placeholder="Last Name"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
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
        <Grid item xs={12}>
          <FormControl required>
            <FormLabel sx={{ fontSize: "0.875rem" }}>Gender</FormLabel>
            <RadioGroup
              row
              defaultValue="male"
              aria-label="gender"
              name="account-settings-info-radio"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <FormControlLabel value="male" label="Male" control={<Radio />} />
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
        <Grid item xs={12}>
          <TextField
            fullWidth
            required
            type="number"
            label="Phone"
            placeholder="+91 1231231234"
          />
        </Grid>
        <Grid item xs={12}>
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
            type="alphanumeric"
            fullWidth
            label="Aadhaar Number"
            placeholder="xxxx-xxxx-xxxx"
            inputProps={{ maxLength: 12 }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            type="file"
            fullWidth
            helperText="Upload your Aadhaar Card*"
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
          <TextField
            required
            type="file"
            fullWidth
            helperText="Upload your Pan Card*"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Category*</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={category}
              label="Category"
              required
              onChange={(e) => setCategory(e.target.value)}
            >
              <MenuItem value="general">General</MenuItem>
              <MenuItem value="sc/st">SC/ST</MenuItem>
              <MenuItem value="obc">OBC</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Divider variant="middle" textAlign="left">
            <Chip label="Guardian's Information" />
          </Divider>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            required
            label="First Name"
            placeholder="First Name"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            required
            label="Middle Name"
            placeholder="Middle Name"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            required
            label="Last Name"
            placeholder="Last Name"
          />
        </Grid>
        <Grid item xs={12}>
          <Divider variant="middle" textAlign="left">
            <Chip label="Address" />
          </Divider>
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField fullWidth required label="State" placeholder="New Delhi" />
        </Grid>
        <Grid item xs={12} sm={8}>
          <TextField
            multiline
            fullWidth
            required
            label="Address"
            placeholder="B.H. Area"
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField fullWidth label="Locality" placeholder="Kadma" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="City" placeholder="New Delhi" />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField fullWidth label="Pincode" placeholder="560004" />
        </Grid>
        <Grid item xs={12}>
          <Divider variant="middle" textAlign="left">
            <Chip label="Academics" />
          </Divider>
        </Grid>
        <Grid item xs={12} sm={12}>
          <FormControl fullWidth>
            <InputLabel id="form-layouts-separator-single-select-label">
              Highest Qualification*
            </InputLabel>
            <Select
              required
              id="account-settings-single-select"
              labelId="account-settings-single-select-label"
              label="Highest Qualification"
              value={highestQualification}
              onChange={(e) => setHighestQualification(e.target.value)}
            >
              <MenuItem value="matriculation">Matriculation</MenuItem>
              <MenuItem value="intermediate">Intermediate</MenuItem>
              <MenuItem value="undergraduate">Undergraduate</MenuItem>
              <MenuItem value="postgraduate">Postgraduate</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            required
            label="Highest Qualification Marks"
            placeholder="99.9% or 9.9 CGPA"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            required
            type="file"
            helperText="Upload marks card of your highest qualification*"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            required
            label="Intermediate (XII) Marks"
            placeholder="99.9% or 9.9 CGPA"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            required
            type="file"
            helperText="Upload your Intermediate (XII) marks card*"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            required
            label="Matriculation (X) Marks"
            placeholder="99.9% or 9.9 CGPA"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            required
            type="file"
            helperText="Upload your Matriculation (X) marks card*"
          />
        </Grid>

        <Grid item xs={12}>
          <Divider variant="middle" textAlign="left">
            <Chip label="Finance ( Optional )" />
          </Divider>
        </Grid>

        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel id="form-layouts-separator-single-select-label">
              Income
            </InputLabel>
            <Select
              id="account-settings-single-select"
              labelId="account-settings-single-select-label"
              value={income}
              onChange={(e) => setIncome(e.target.value)}
              input={
                <OutlinedInput label="Income" id="select-single-language" />
              }
            >
              <MenuItem value="3.5lpa">Upto Rs 3.5 LPA</MenuItem>
              <MenuItem value="3.5to7.5lpa">Rs 3.5 LPA - Rs 7.5 LPA</MenuItem>
              <MenuItem value="above7.5lpa">Above Rs 7.5 LPA</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="IFSC Code"
            placeholder="Jayanagar, Bengaluru"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Bank Name"
            placeholder="Kotak Mahindra Bank"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Account Number"
            placeholder="xxxxxxxxxxxxxxxx"
            inputProps={{ maxLength: 16 }}
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            fullWidth
            label="Bank Branch Name"
            placeholder="Jayanagar, Bengaluru"
            // inputProps={{ readOnly: true }}
          />
        </Grid>
      </Grid>
      <FormControlLabel
        control={<Checkbox />}
        label={
          <Fragment>
            <span>I agree to </span>
            <Link href="/" passHref>
              <LinkStyled onClick={(e) => e.preventDefault()}>
                privacy policy & terms
              </LinkStyled>
            </Link>
          </Fragment>
        }
      />
      <Button
        fullWidth
        size="large"
        type="submit"
        variant="contained"
        sx={{ marginBottom: 7 }}
      >
        Sign up
      </Button>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <Typography variant="body2" sx={{ marginRight: 2 }}>
          Already have an account?
        </Typography>
        <Typography variant="body2">
          <Link passHref href="/pages/login">
            <LinkStyled>Sign in instead</LinkStyled>
          </Link>
        </Typography>
      </Box>
    </>
  );
};

export default IndivRegistration;
