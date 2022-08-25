// ** React Imports
import { useState, Fragment, forwardRef, useRef, useEffect } from "react";

// ** Axios Imports
import axios from "axios";
// ** Next Imports
import Link from "next/link";
import { useRouter } from "next/router";

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

const FundingAgencyRegistration = () => {
  const router = useRouter();

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
  const [identityFile, setIdentityFile] = useState(null);
  const [panFile, setPanFile] = useState(null);
  const [uploadpanFile, setuploadPanFile] = useState(null);
  const [uploadidentityFile, setuploadidentityFile] = useState(null);
  const [uploadEntityLogoFile, setuploadEntityLogoFile] = useState(null);
  const [entityLogo, setEntityLogo] = useState(null);
  const [ifsc, setifsc] = useState(null);
  const [pincode, setPincode] = useState(null);
  const [signUpAllowed, setSignUpAllowed] = useState(false);
  const [proof, setProof] = useState(null);
  const [pincodeCorrespondence, setPincodeCorrespondence] = useState(null);
  const [trustType, setTrustType] = useState(null);
  const [organizationType, setOrganizationType] = useState("state");

  // **--------------------------------------------------------------------------------------------------------------
  // ** Refs
  const entityTypeRef = useRef(null);
  const nameRef = useRef(null);
  const emailRef = useRef();
  const stateRef = useRef();
  const addressRef = useRef();
  const cityRef = useRef();
  const trustNameRef = useRef();
  const urlRef = useRef();
  const regNoRef = useRef();
  const panNoRef = useRef();
  const nameAsPerBankRef = useRef();
  const schemeManagedRef = useRef();
  const bankNameRef = useRef();
  const accNoRef = useRef();
  const bankBranchRef = useRef();
  const descriptionRef = useRef();
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
      };
      fetchData();
    }
  }, [pincode]);

  // ** ---------------------------------------------------------------------------------------------------------------

  // ** Submission handling--------------------------------------------------------------------------------------------
  const uploadIdentity = async () => {
    let { data } = await axios.post("/api/controller/upload", {
      name: identityFile?.name,
      type: identityFile?.type,
    });

    console.log(data);

    const url = data.url;
    let { data: newData } = await axios.put(url, identityFile, {
      headers: {
        "Content-type": identityFile?.type,
        "Access-Control-Allow-Origin": "*",
      },
    });

    setuploadidentityFile(BUCKET_URL + identityFile?.name);
    setIdentityFile(null);
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
  const uploadEntityLogo = async () => {
    let { data } = await axios.post("/api/controller/upload", {
      name: entityLogo?.name,
      type: entityLogo?.type,
    });

    console.log(data);

    const url = data.url;
    let { data: newData } = await axios.put(url, entityLogo, {
      headers: {
        "Content-type": entityLogo?.type,
        "Access-Control-Allow-Origin": "*",
      },
    });

    setuploadEntityLogoFile(BUCKET_URL + entityLogo?.name);
    setEntityLogo(null);
  };

  const upload = async () => {
    uploadIdentity();
    uploadpan();
    uploadEntityLogo();
    console.log(uploadIdentity, uploadpan, uploadEntityLogo);

    let { data } = await axios.post("/api/controller/registerSeeker", {
      email: emailRef?.current?.value,
      panNo: panNoRef?.current?.value,
      panFile: uploadpanFile,
      state: stateRef?.current?.value,
      address: addressRef?.current?.value,
      city: cityRef?.current?.value,
      pincode: pincode,
      ifsc: ifsc,
      bankeName: bankNameRef?.current?.value,
      branchName: bankBranchRef?.current?.value,
      bankAccountNo: accNoRef?.current?.value,
      typeEntity: entityTypeRef?.current?.value,
      name: nameRef?.current?.value,
      discription: descriptionRef?.current?.value,
      typeOrganisation: organizationType,
      trustType: trustType,
      trustName: trustNameRef?.current?.value,
      url: urlRef?.current?.value,
      regNo: regNoRef?.current?.value,
      nameAsPerBank: nameAsPerBankRef?.current?.value,
      entityLogo: entityLogo,
      schemeManaged: schemeManagedRef?.current?.value,
      identityProofFile: identityFile,
      verfied: "No",
      banned: "No",
    });

    window.alert(data.message);
    if(data.message === "Successfully registered"){
      // window.location.href = "/login";
      router.push("/login");
    }
  };

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Divider variant="middle" textAlign="left">
            <Chip label="Agency Info" />
          </Divider>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            required
            label="Agency Name"
            placeholder="Bharat Education Foundation"
            inputRef={nameRef}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            required
            label="Agency Email Address"
            placeholder="Enter Agency Email Address"
            inputRef={emailRef}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            multiline={true}
            required
            label="Description"
            placeholder="Enter description"
            inputRef={descriptionRef}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            required
            label="Type of Entity"
            placeholder="Enter the type of entity"
            inputRef={entityTypeRef}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <FormControl fullWidth>
            <InputLabel id="form-layouts-separator-single-select-label">
              Type of Organization*
            </InputLabel>
            <Select
              required
              id="account-settings-single-select"
              labelId="account-settings-single-select-label"
              label="Organistation Type"
              value={organizationType}
              onChange={(e) => setOrganizationType(e.target.value)}
            >
              <MenuItem value="central">Central</MenuItem>
              <MenuItem value="state">State</MenuItem>
              <MenuItem value="ugc/aicte">UGC/AICTE</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            fullWidth
            required
            label="Name of the Trust"
            placeholder=""
            inputRef={trustNameRef}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <FormControl fullWidth>
            <InputLabel id="form-layouts-separator-single-select-label">
              Type of Trust*
            </InputLabel>
            <Select
              required
              id="account-settings-single-select"
              labelId="account-settings-single-select-label"
              label="Trust Type"
              value={trustType}
              onChange={(e) => setTrustType(e.target.value)}
            >
              <MenuItem value="central">Central</MenuItem>
              <MenuItem value="state">State</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            required
            type="file"
            helperText="Upload Logo*"
            onChange={(e) => setEntityLogo(e.target.files[0])}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            fullWidth
            required
            label="Scheme Managed"
            placeholder=""
            inputRef={schemeManagedRef}
          />
        </Grid>
        <Grid item xs={12}>
          <Divider variant="middle" textAlign="left">
            <Chip label="Agency Address" />
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
            <Chip label="Agency Details" />
          </Divider>
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            required
            label="Agency Website Link"
            placeholder="www.agency.org"
            inputRef={urlRef}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            required
            label="Registration Number"
            placeholder="XXXXXXXXXXXXXXXX"
            inputRef={regNoRef}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            required
            label="Pan Number"
            placeholder="XXXXXXXXXXXXXXXX"
            inputRef={panNoRef}
          />
        </Grid>
        
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            required
            type="file"
            helperText="Upload the Pan No.*"
            onChange={(e) => setPanFile(e.target.files[0])}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            required
            type="file"
            helperText="Upload an Identity proof*"
            onChange={(e) => setIdentityFile(e.target.files[0])}
          />
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
        <Grid item xs={12} sm={12}>
          <TextField
            fullWidth
            required
            helperText="Name as per Bank"
            placeholder="John Doe"
            inputRef={nameAsPerBankRef}
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
        onClick={upload}
      >
        Sign up
      </Button>
    </>
  );
};

export default FundingAgencyRegistration;
