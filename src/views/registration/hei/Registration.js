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
import { Autocomplete } from "@mui/material";

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
let BUCKET_URL = "https://253762017528.signin.aws.amazon.com/console";

const HeiRegistration = () => {
  const courses = [
    { courseName: "BE in Computer Science" },
    { courseName: "BE in Information Science" },
    { courseName: "BE in Electrical and Electronics" },
    { courseName: "BCA" },
    { courseName: "MCA" },
    { courseName: "BSc" },
  ];
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
  const [collegeType, setCollegeType] = useState("state");
  const [highestQualFile, sethighestQualFile] = useState(null);
  const [mark12File, setmark12File] = useState(null);
  const [aisheCert, setAisheCert] = useState(null);
  const [uploadaadharFile, setuploadAadharFile] = useState(null);
  const [uploadpanFile, setuploadPanFile] = useState(null);
  const [uploadhighestQualFile, setuploadhighestQualFile] = useState(null);
  const [uploadmark12File, setuploadmark12File] = useState(null);
  const [uploadAisheCert, setUploadAisheCert] = useState(null);
  const [ifsc, setifsc] = useState(null);
  const [pincode, setPincode] = useState(null);
  const [signUpAllowed, setSignUpAllowed] = useState(false);
  const [proof, setProof] = useState(null);
  const [pincodeCorrespondence, setPincodeCorrespondence] = useState(null);

  // **--------------------------------------------------------------------------------------------------------------
  // ** Refs
  const firstnameRef = useRef();
  const middlenameRef = useRef();
  const lastnameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const stateRef = useRef();
  const addressRef = useRef();
  const localityRef = useRef();
  const cityRef = useRef();
  const designationRef = useRef();
  const collegeNameRef = useRef();
  const managementTypeRef = useRef();
  const accrediationNumberRef = useRef();
  const courseRef = useRef();
  const aisheRef = useRef();
  const affiliatedUniversityNameRef = useRef();
  const affiliatedUniversityStateRef = useRef();
  const earlierAffiliationRef = useRef();
  const firstAdmissionYearRef = useRef();
  const admissionCompletedRef = useRef();
  const addressCorrespondenceRef = useRef();
  const cityCorrespondenceRef = useRef();
  const stateCorrespondenceRef = useRef();
  const districtCorrespondenceRef = useRef();
  // const pincodeCorrespondenceRef = useRef();

  const highestQualRef = useRef();
  const mark12Ref = useRef();
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

  useEffect(() => {
    if (pincodeCorrespondence?.length === 6) {
      const fetchData = async () => {
        const res = await axios.get(
          `https://api.postalpincode.in/pincode/${pincodeCorrespondence}`
        );
        console.log(res.data[0].PostOffice[0].Name);
        stateCorrespondenceRef.current.value = res.data[0].PostOffice[0].State;
        cityCorrespondenceRef.current.value =
          res.data[0].PostOffice[0].District;
        // districtCorrespondenceRef.current.value = res.data[0].PostOffice[0].District;
      };
      fetchData();
    }
  }, [pincodeCorrespondence]);

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

    setuploadAadharFile(BUCKET_URL + aadharFile?.name);
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

    setuploadPanFile(BUCKET_URL + panFile?.name);
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

    setuploadhighestQualFile(BUCKET_URL + highestQualFile?.name);
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

    setuploadmark12File(BUCKET_URL + mark12File?.name);
    setmark12File(null);
  };
  const uploadAisheCertHandler = async () => {
    let { data } = await axios.post("/api/controller/upload", {
      name: aisheCert?.name,
      type: aisheCert?.type,
    });

    console.log(data);

    const url = data.url;
    let { data: newData } = await axios.put(url, aisheCert, {
      headers: {
        "Content-type": aisheCert?.type,
        "Access-Control-Allow-Origin": "*",
      },
    });

    setUploadAisheCert(BUCKET_URL + aisheCert?.name);
    setAisheCert(null);
  };
  const upload = async () => {
    uploadaadhar();
    uploadpan();
    uploadhighestqual();
    uploadmark12();
    uploadAisheCertHandler();
    console.log(
      uploadaadharFile,
      uploadpanFile,
      uploadhighestQualFile,
      uploadmark12File,
      uploadAisheCert
    );
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
      marks10: aisheRef?.current?.value,
      marks10File: uploadAisheCert,
      highestQualification: highestQualification,
      highestQualificationmarks: highestQualRef?.current?.value,
      highestQualificationFile: uploadhighestQualFile,
      income: income,
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
            <Chip label="College Representative Information" />
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
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            required
            type="number"
            label="Phone"
            placeholder="+91 1231231234"
            inputRef={phoneRef}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            required
            label="Designation"
            placeholder="Designation"
            inputRef={designationRef}
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
        <Grid item xs={12}>
          <Divider variant="middle" textAlign="left">
            <Chip label="College Address" />
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
            <Chip label="College Details" />
          </Divider>
        </Grid>
        <Grid item xs={12} sm={8}>
          <TextField
            fullWidth
            required
            label="College Name"
            placeholder="College Name"
            inputRef={collegeNameRef}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <FormControl fullWidth>
            <InputLabel id="form-layouts-separator-single-select-label">
              College Type*
            </InputLabel>
            <Select
              required
              id="account-settings-single-select"
              labelId="account-settings-single-select-label"
              label="College Type"
              value={collegeType}
              onChange={(e) => setCollegeType(e.target.value)}
            >
              <MenuItem value="central">Central</MenuItem>
              <MenuItem value="state">State</MenuItem>
              <MenuItem value="deemed">Deemed</MenuItem>
              <MenuItem value="private">Private</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            required
            label="Management Type"
            placeholder="Management Type"
            inputRef={managementTypeRef}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            required
            label="Accreditation Number"
            placeholder="Accreditation Number"
            inputRef={accrediationNumberRef}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Autocomplete
            options={courses}
            getOptionLabel={(option) => option.courseName}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Courses Offered"
                placeholder="Select Course"
                variant="outlined"
                inputRef={courseRef}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            required
            label="AISHE Code"
            placeholder="Enter the AISHE Code for your college"
            inputRef={aisheRef}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            required
            type="file"
            helperText="Upload the AISHE Code Certificate*"
            onChange={(e) => setAisheCert(e.target.files[0])}
          />
        </Grid>
        <Grid item xs={12}>
          <Divider variant="middle" textAlign="left">
            <Chip label="Other Details" />
          </Divider>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            required
            label="Affiliated University Name"
            placeholder="Karnataka"
            inputRef={affiliatedUniversityNameRef}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            required
            label="Affiliated University State"
            placeholder="Karnataka"
            inputRef={affiliatedUniversityStateRef}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            required
            label="Earlier Affiliation"
            placeholder="Karnataka"
            inputRef={earlierAffiliationRef}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            required
            label="First Admission Year"
            placeholder="2017"
            inputRef={firstAdmissionYearRef}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            required
            label="Admission Completed"
            placeholder="2017"
            inputRef={admissionCompletedRef}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            required
            type="file"
            helperText="Upload proof"
            onChange={(e) => setProof(e.target.value)}
          />
        </Grid>
        {/* Confusion In this part */}
        <Grid item xs={12} sm={12}>
          <TextField
            fullWidth
            required
            label="Correspondence Postal Code"
            placeholder="Postal Code"
            value={pincodeCorrespondence}
            onChange={(e) => setPincodeCorrespondence(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            required
            label="Correspondence Address"
            placeholder="X/Y Street Address"
            inputRef={addressCorrespondenceRef}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            required
            helperText="Correspondence City"
            placeholder="Bengaluru"
            inputRef={cityCorrespondenceRef}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            required
            helperText="Correspondence State"
            placeholder="Karnataka"
            inputRef={stateCorrespondenceRef}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            helperText="Correspondence District"
            placeholder="District Name"
            inputRef={districtCorrespondenceRef}
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
        onClick={upload}
      >
        Sign up
      </Button>
    </>
  );
};

export default HeiRegistration;
