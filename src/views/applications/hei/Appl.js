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
import axios from "axios";
import { useEffect } from "react";

// ** Third Party Imports
import DatePicker from "react-datepicker";

// ** Styled Components
import DatePickerWrapper from "src/@core/styles/libs/react-datepicker";
import Divider from "@mui/material/Divider";

const CustomInput = forwardRef((props, ref) => {
  return <TextField inputRef={ref} label="Birth Date" fullWidth {...props} />;
});

const Appl = ({ session }) => {
  // ** State
  const [user, setUser] = useState({});
  useEffect(() => {
    const fetch = async () => {
      await axios
        .get(`/api/controller/institute/getInstituteInfo`, {
          email: session.email,
        })
        .then((res) => {
          setUser(res.data);
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetch();
  }, []);

  let initialvalue = {
    scholarshipID: user?.scholarshipID,
    seekerID: user?.seekerID,
    email: user?.email,
    phNo: user?.phNo,
    name: user?.name,
    url: user?.url,
    aadharNo: user?.aadharNo,
    guardianFirstName: user?.guardianFirstName,
    guardianMiddleName: user?.guardianMiddleName,
    guardianLastName: user?.guardianLastName,
    dateOfBirth: user?.dateOfBirth,
    category: user?.category,
    sex: user?.sex,
    marks12: user?.marks12,
    marks12File: user?.marks12File,
    marks10: user?.marks10,
    marks10File: user?.marks10File,
    highestQualification: user?.highestQualification,
    marks: user?.marks,
    income: user?.income,
    panNo: user?.panNo,
    state: user?.state,
    address: user?.address,
    locality: user?.locality,
    city: user?.city,
    pincode: user?.pincode,
    resume: user?.resume,
    ifscCode: user?.ifscCode,
    banker: user?.banker,
    bankBranch: user?.bankBranch,
    accountType: user?.accountType,
    accountNo: user?.accountNo,
    proposal: user?.proposal,
    othersFile: user?.othersFile,
  };
  const [date, setDate] = useState();
  const [data, setdata] = useState(initialvalue);
  const [propsalLetterFile, setProposalLetterFile] = useState();
  const [uploadProposalLetterFile, setUploadPropsalLetterFile] = useState(null);
  

  // ** Submission handling-------------------------------------------------------------------------------
  const uploadProposalLetter = async () => {
    try {
      let { data} = await axios.post("/api/controller/upload", {
        name: ProposalLetterFile?.name,
        type: ProposalLetterFile?.type,
      })
      console.log(data);

      const url = data.url;
      let { data: newData } = await axios.put(url, proposalLetterFile, {
        headers: {
          "Content-Type": proposalLetterFile?.type,
          "Access-Control-Allow-Origin": "*",
          },
      });

      setUploadProposalLetterFile(BUCKET_URL + proposalLetterFile?.name);
      setProposalLetterFile(null);

    } catch (e) {
      console.log(e);
    }
  }

  //  useEffect(() => {
  const fetch = async (e) => {
    console.log(e.target.value);
    await axios
      .get(`https://ifsc.razorpay.com/${e.target.value}`)
      .then((res) => {
        console.log(res.data.BANK);
        // setdata({ ...data, [e.target.name]: e.target.value });
        // setdata({ ...data, banker: res?.data?.BANK });

        setdata({
          ...data,
          bankBranch: res?.data?.BRANCH,
          banker: res?.data?.BANK,
          [e.target.name]: e.target.value,
        });
        console.log(data);
        console.log(data.banker);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // fetch();
  // }, [data.ifscCode]);

  const handlechange = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
    console.log(data);
  };


  return (
    //form validation needs to be done
    //AADHAAR AND PAN FILES TAB FOR UPLOAD NEEDS TO BE ADDED (MARKSHEETS TOO)

    <CardContent>
      <form>
        <Grid container spacing={7}>
        <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              required
              helperText="Institute ID"
              onChange={(e) => handlechange(e)}
              name="sochlarshipID"
              inputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              required
              helperText="Agency ID"
              //placeholder="Seeker's First Name"
              onChange={(e) => handlechange(e)}
              name="seekerID"
              inputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              fullWidth
              required
              helperText="Name"
              //placeholder="Seeker's First Name"
              onChange={(e) => handlechange(e)}
              name="Name"
              inputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              fullWidth
              required
              type="number"
              helperText="Phone"
             // placeholder="+91 1231231234"
              onChange={(e) => handlechange(e)}
              name="phNo"
              inputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              required
              fullWidth
              type="email"
              helperText="Email"
              //placeholder="johnDoe@example.com"
              onChange={(e) => handlechange(e)}
              name="email"
              inputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              fullWidth
              required
              helperText="url"
              //placeholder="Seeker's First Name"
              onChange={(e) => handlechange(e)}
              name="url"
              //inputProps={{ readOnly: true }}
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
              helperText="Address"
             // placeholder="B.H. Area"
              onChange={(e) => handlechange(e)}
              name="address"
              // inputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={12} sm={2.5}>
            <TextField
              fullWidth
              helperText="State"
             // placeholder="New Delhi"
              onChange={(e) => handlechange(e)}
              name="state"
              // inputProps={{ readOnly: true }}
            />
          </Grid>
         
          {/* <Grid item xs={12} sm={2}>
            <TextField
              fullWidth
              helperText="Locality"
             // placeholder="Kadma"
              onChange={(e) => handlechange(e)}
              name="locality"
              // inputProps={{ readOnly: true }}
            />
          </Grid> */}
          <Grid item xs={12} sm={2.5}>
            <TextField
              fullWidth
              helperText="City"
             // placeholder="New Delhi"
              onChange={(e) => handlechange(e)}
              name="city"
              // inputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={12} sm={2.5}>
            <TextField
              fullWidth
              helperText="Pincode"
             // placeholder="560004"
              onChange={(e) => handlechange(e)}
              name="pincode"
              // inputProps={{ readOnly: true }}
            />
          </Grid>


          
        
          
        

        
      
         
         
          <Grid item xs={12}>
            <Divider variant="middle" textAlign="left">
              <Chip label="Proposal"/>
            </Divider>
          </Grid>
          <Grid item xs={12} sm={2.5}>
            <TextField
              fullWidth
              helperText="Proposal"
             // placeholder="560004"
              onChange={(e) => handlechange(e)}
              name="proposal"
              // inputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              required
              type="file"
              helperText="Proposal Letter"
              onChange={(e) => setProposalletterFile(e)}
              name="proposalLetter"
            />
          </Grid>


          <Grid item xs={12}>
            <Button variant="contained" sx={{ marginRight: 3.5 }}>
              Apply
            </Button>
          </Grid>
        </Grid>
      </form>
    </CardContent>
  );
};

export default Appl;
