// ** React Imports
import { useState, Fragment, forwardRef, useRef, useEffect } from "react";

// ** Axios Imports
import axios from "axios";
// ** Next Imports
import Link from "next/link";

// ** Date Picker Imports
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

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
  const [aadharFile, setAadharFile] = useState(null);
  const [panFile, setPanFile] = useState(null);
  const [language, setLanguage] = useState("english");
  const [highestQualFile, sethighestQualFile] = useState(null);
  const [mark12File, setmark12File] = useState(null);
  const [mark10File, setmark10File] = useState(null);
  const [uploadaadharFile, setuploadAadharFile] = useState(null);
  const [uploadpanFile, setuploadPanFile] = useState(null);
  const [uploadhighestQualFile, setuploadhighestQualFile] = useState(null);
  const [uploadmark12File, setuploadmark12File] = useState(null);
  const [uploadmark10File, setuploadmark10File] = useState(null);
  const [ifsc, setifsc] = useState(null);
  const [pincode, setPincode] = useState(null);
  const [signUpAllowed, setSignUpAllowed] = useState(false);

  // **--------------------------------------------------------------------------------------------------------------
  // ** Refs
  const firstnameRef = useRef();
  const middlenameRef = useRef();
  const lastnameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const aadharNoRef = useRef();
  const panNoRef = useRef();
  const guardianfirstnameRef = useRef();
  const guardianmiddlenameRef = useRef();
  const guardianlastnameRef = useRef();
  const stateRef = useRef();
  const addressRef = useRef();
  const localityRef = useRef();
  const cityRef = useRef();
  // const pincodeRef = useRef();
  const highestQualRef = useRef();
  const mark12Ref = useRef();
  const mark10Ref = useRef();
  const bankNameRef = useRef();
  const accNoRef = useRef();
  const bankBranchRef = useRef();
  // ** ---------------------------------------------------------------------------------------------------------------

  // ** API Calls-------------------------------------------------------------------------------------------------------
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`https://ifsc.razorpay.com/${ifsc}`);
      console.log(res.data);
      bankNameRef.current.value = res.data.BANK;
      bankBranchRef.current.value = res.data.BRANCH;
    };
    fetchData();
  }, [ifsc]);

  useEffect(() => {
    if (pincode?.length === 6) {
      const fetchData = async () => {
        const res = await axios.get(
          `https://api.postalpincode.in/pincode/${pincode}`
        );
        console.log(res.data[0].PostOffice[0].Name);
        stateRef.current.value = res.data[0].PostOffice[0].State;
        cityRef.current.value = res.data[0].PostOffice[0].District;
        localityRef.current.value = res.data[0].PostOffice[0].Name;
      };
      fetchData();
    }
  }, [pincode]);

  // ** ---------------------------------------------------------------------------------------------------------------

  // ** Submission handling--------------------------------------------------------------------------------------------
  const uploadaadhar = async () => {
    let { data } = await axios.post("/api/controller/upload", {
      name: aadharFile?.name,
      type: aadharFile?.type,
    });

    console.log(data);

    const url = data.url;
    let { data: newData } = await axios.put(url, aadharFile, {
      headers: {
        "Content-type": aadharFile?.type,
        "Access-Control-Allow-Origin": "*",
      },
    });

    setuploadAadharFile(process.env.BUCKET_URL + aadharFile?.name);
    setAadharFile(null);
  };
  const uploadpan = async () => {
    let { data } = await axios.post("/api/controller/upload", {
      name: panFile?.name,
      type: panFile?.type,
    });

    console.log(data);

    const url = data.url;
    let { data: newData } = await axios.put(url, panFile, {
      headers: {
        "Content-type": panFile?.type,
        "Access-Control-Allow-Origin": "*",
      },
    });

    setuploadPanFile(process.env.BUCKET_URL + panFile?.name);
    setPanFile(null);
  };
  const uploadhighestqual = async () => {
    let { data } = await axios.post("/api/controller/upload", {
      name: highestQualFile?.name,
      type: highestQualFile?.type,
    });

    console.log(data);

    const url = data.url;
    let { data: newData } = await axios.put(url, highestQualFile, {
      headers: {
        "Content-type": highestQualFile?.type,
        "Access-Control-Allow-Origin": "*",
      },
    });

    setuploadhighestQualFile(process.env.BUCKET_URL + highestQualFile?.name);
    sethighestQualFile(null);
  };
  const uploadmark12 = async () => {
    let { data } = await axios.post("/api/controller/upload", {
      name: mark12File?.name,
      type: mark12File?.type,
    });

    console.log(data);

    const url = data.url;
    let { data: newData } = await axios.put(url, mark12File, {
      headers: {
        "Content-type": mark12File?.type,
        "Access-Control-Allow-Origin": "*",
      },
    });

    setuploadmark12File(process.env.BUCKET_URL + mark12File?.name);
    setmark12File(null);
  };
  const uploadmark10 = async () => {
    let { data } = await axios.post("/api/controller/upload", {
      name: mark10File?.name,
      type: mark10File?.type,
    });

    console.log(data);

    const url = data.url;
    let { data: newData } = await axios.put(url, mark10File, {
      headers: {
        "Content-type": mark10File?.type,
        "Access-Control-Allow-Origin": "*",
      },
    });

    setuploadmark10File(process.env.BUCKET_URL + mark10File?.name);
    setmark10File(null);
  };
  const upload = async () => {
    uploadaadhar();
    uploadpan();
    uploadhighestqual();
    uploadmark12();
    uploadmark10();
    let { data } = await axios.post("/api/controller/registerSeeker", {
      email: emailRef?.current?.value,
      phNo: phoneRef?.current?.value,
      firstName: firstnameRef?.current?.value,
      middleName: middlenameRef?.current?.value,
      lastName: lastnameRef?.current?.value,
      aadharNo: aadharNoRef?.current?.value,
      aadharFile: uploadaadharFile,
      guardianFirstName: guardianfirstnameRef?.current?.value,
      guardianMiddleName: guardianmiddlenameRef?.current?.value,
      guardianLastName: guardianlastnameRef?.current?.value,
      dateOfBirth: date,
      category: category,
      sex: gender,
      marks12: mark12Ref?.current?.value,
      marks12File: uploadmark12File,
      marks10: mark10Ref?.current?.value,
      marks10File: uploadmark10File,
      highestQualification: highestQualification,
      highestQualificationmarks: highestQualRef?.current?.value,
      highestQualificationFile: uploadhighestQualFile,
      income: financeIncome,
      panNo: panNoRef?.current?.value,
      panFile: uploadpanFile,
      state: stateRef?.current?.value,
      address: addressRef?.current?.value,
      locality: localityRef?.current?.value,
      pincode: pincode,
      ifscCode: ifsc,
      banker: bankNameRef?.current?.value,
      bankBranch: bankBranchRef?.current?.value,
      accountNo: accNoRef?.current?.value,
    });

    window.alert(data.message);
  };

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
            inputRef={firstnameRef}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Middle Name"
            placeholder="Middle Name"
            inputRef={middlenameRef}
          />
        </Grid>
        <Grid item xs={12} sm={8}>
          <TextField
            fullWidth
            required
            label="Last Name"
            placeholder="Last Name"
            inputRef={lastnameRef}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
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
            inputRef={phoneRef}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            type="email"
            label="Email"
            placeholder="johnDoe@example.com"
            inputRef={emailRef}
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
            inputRef={aadharNoRef}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            type="file"
            fullWidth
            helperText="Upload your Aadhaar Card*"
            onChange={(e) => setAadharFile(e.target.files[0])}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            label="Pan Card"
            placeholder="AAAAA1234A"
            inputProps={{ maxLength: 10 }}
            inputRef={panNoRef}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            type="file"
            fullWidth
            helperText="Upload your Pan Card*"
            onChange={(e) => setPanFile(e.target.files[0])}
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
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel id="form-layouts-separator-multiple-select-label">
              Language*
            </InputLabel>
            <Select
              id="account-settings-multiple-select"
              labelId="account-settings-multiple-select-label"
              label="Language"
              required
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            >
              <MenuItem value="english">English</MenuItem>
              <MenuItem value="hindi">Hindi</MenuItem>
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
            inputRef={guardianfirstnameRef}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            required
            label="Middle Name"
            placeholder="Middle Name"
            inputRef={guardianmiddlenameRef}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            required
            label="Last Name"
            placeholder="Last Name"
            inputRef={guardianlastnameRef}
          />
        </Grid>
        <Grid item xs={12}>
          <Divider variant="middle" textAlign="left">
            <Chip label="Address" />
          </Divider>
        </Grid>

        <Grid item xs={12} sm={4}>
          <TextField
            fullWidth
            required
            label="Pincode"
            placeholder="560004"
            onChange={(e) => setPincode(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={8}>
          <TextField
            multiline
            fullWidth
            required
            label="Address"
            placeholder="B.H. Area"
            inputRef={addressRef}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            helperText="Locality"
            placeholder="Kadma"
            inputRef={localityRef}
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            fullWidth
            required
            helperText="City"
            placeholder="New Delhi"
            inputRef={cityRef}
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            fullWidth
            required
            helperText="State"
            placeholder="New Delhi"
            inputRef={stateRef}
          />
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
            inputRef={highestQualRef}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            required
            type="file"
            helperText="Upload marks card of your highest qualification*"
            onChange={(e) => sethighestQualFile(e.target.files[0])}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            required
            label="Intermediate (XII) Marks"
            placeholder="99.9% or 9.9 CGPA"
            inputRef={mark12Ref}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            required
            type="file"
            helperText="Upload your Intermediate (XII) marks card*"
            onChange={(e) => setmark12File(e.target.files[0])}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            required
            label="Matriculation (X) Marks"
            placeholder="99.9% or 9.9 CGPA"
            inputRef={mark10Ref}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            required
            type="file"
            helperText="Upload your Matriculation (X) marks card*"
            onChange={(e) => setmark10File(e.target.files[0])}
          />
        </Grid>

        <Grid item xs={12}>
          <Divider variant="middle" textAlign="left">
            <Chip label="Finance" />
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
              required
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
            required
            label="IFSC Code"
            placeholder="Jayanagar, Bengaluru"
            onChange={(e) => setifsc(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            required
            helperText="Bank Name"
            placeholder="Kotak Mahindra Bank"
            inputRef={bankNameRef}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            required
            label="Account Number"
            placeholder="xxxxxxxxxxxxxxxx"
            inputProps={{ maxLength: 16 }}
            inputRef={accNoRef}
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            fullWidth
            required
            helperText="Branch Name"
            placeholder="Jayanagar, Bengaluru"
            inputRef={bankBranchRef}
            // inputProps={{ readOnly: true }}
          />
        </Grid>
      </Grid>
      <FormControlLabel
        control={<Checkbox onClick={() => setSignUpAllowed(true)} />}
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
        disabled={signUpAllowed ? false : true}
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
