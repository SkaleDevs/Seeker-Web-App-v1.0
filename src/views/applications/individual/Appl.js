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


let BUCKET_URL= "https://253762017528.signin.aws.amazon.com/console"
const CustomInput = forwardRef((props, ref) => {
  return <TextField inputRef={ref} label="Birth Date" fullWidth {...props} />;
});

const Appl = ({user, session,scholarshipID }) => {
  // ** State
  // const [user, setUser] = useState({});
  // console.log("user",user);
let initialvalue;
 useEffect(() => {

   initialvalue = {
     scholarshipID: scholarshipID,
    seekerID: user?.seekerID,
    email: user?.email,
    phNo: user?.phNo,
    firstName: user?.firstName,
    middleName: user?.middleName,
    aadharNo: user?.aadharNo,
    lastName: user?.lastName,
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
    marks: user?.highestQualificationmarks,
    income: user?.income,
    panNo: user?.panNo,
    state: user?.state,
    address: user?.address,
    locality: user?.locality,
    town: user?.town,
    pincode: user?.pincode,
    resume: user?.resume,
    ifscCode: user?.ifscCode,
    banker: user?.banker,
    bankBranch: user?.bankBranch,
    accountType: user?.accountType,
    accountNo: user?.accountNo,
    othersFile: user?.othersFile,
    proposal:"NA",
  };
  setdata(initialvalue)
},[user])
  const [date, setDate] = useState();
  const [data, setdata] = useState(initialvalue);
  const [coverLetterFile, setCoverLetterFile] = useState();
  const [uploadCoverLetterFile, setUploadCoverLetterFile] = useState(null);
  

  // ** Submission handling-------------------------------------------------------------------------------
  const uploadCoverLetter = async () => {
    try {
      console.log(coverLetterFile)
      let { data} = await axios.post("/api/controller/upload", {
        name: coverLetterFile?.name,
        type: coverLetterFile?.type,
      })
      console.log(data);

      const url = data.url;
      let { data: newData } = await axios.put(url, coverLetterFile, {
        headers: {
          "Content-Type": coverLetterFile?.type,
          "Access-Control-Allow-Origin": "*",
          },
      });

      setUploadCoverLetterFile(BUCKET_URL + coverLetterFile?.name);
      // setCoverLetterFile(null);

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

  const handleClick = async()=>{
    try{
      uploadCoverLetter();
      // console.log(uploadCoverLetterFile);
      let cov  = BUCKET_URL+ coverLetterFile?.name;
      setdata({ ...data, proposal: cov });
     
      // setdata({
      //   ...data,
      //   proposal: uploadCoverLetterFile,
      // });
      console.log("data inside post",data);
      let da = await axios.post("/api/controller/seeker/applyNowSeeker",data )
      window.alert(da?.message);
    }catch(e){
      console.log(e);
    }

      
  }

  // fetch();
  // }, [data.ifscCode]);

  const handlechange = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
    console.log(data);
  };
  console.log(data);

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
              helperText="Scolarship ID"
              
              onChange={(e) => handlechange(e)}
              name="sochlarshipID"
              // value={scholarshipID}
              // inputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              required
              helperText="Seeker ID"
              value={user?._id}
              //placeholder="Seeker's First Name"
              onChange={(e) => handlechange(e)}
              name="seekerID"
              // defaultValue="John"
              inputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              required
              helperText="First Name"
              //placeholder="Seeker's First Name"
              onChange={(e) => handlechange(e)}
              name="firstname"
              // defaultValue="John"
              value={user?.firstName}
              inputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              helperText="Middle Name"
              //placeholder="Middle Name"
              value={user?.middleName}
              onChange={(e) => handlechange(e)}
              name="middleName"
              inputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              required
              helperText="Last Name"
              value={user?.lastName}
              //placeholder="Last Name"
              onChange={(e) => handlechange(e)}
              name="lastName"
              inputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              required
              helperText="Birth Date"
              value={user?.dateOfBirth}
              onChange={(e) => handlechange(e)}
              name="birthDate"
              inputProps={{ readOnly: true }}
            />
          </Grid>
          {/* <Grid item xs={12} sm={6}>
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
          </Grid> */}
             <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              required
              // type="number"
              helperText="Gender"
              value={user?.sex}
              // placeholder="+91 1231231234"
              onChange={(e) => handlechange(e)}
              name="sex"
              inputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              required
              type="number"
              helperText="Phone"
              value={user?.phNo}
              // placeholder="+91 1231231234"
              onChange={(e) => handlechange(e)}
              name="phNo"
              inputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              value={user?.email}
              type="email"
              helperText="Email"
              //placeholder="johnDoe@example.com"
              onChange={(e) => handlechange(e)}
              name="email"
              inputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              helperText="Aadhaar Card"
              value={user?.aadharNo}
              //placeholder="xxxx-xxxx-xxxx"
              inputProps={{ maxLength: 12 , readOnly: true }}
              onChange={(e) => handlechange(e)}
              name="aadharNo"
              
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              helperText="Pan Card"
              value={user?.panNo}
              //placeholder="AAAAA1234A"
              inputProps={{ maxLength: 10, readOnly: true }}
              onChange={(e) => handlechange(e)}
              name="panNo"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              helperText="Category"
              value={user?.category}
              //placeholder="AAAAA1234A"
              inputProps={{ maxLength: 10, readOnly: true }}
              onChange={(e) => handlechange(e)}
              name="category"
            />
          </Grid>
          {/* <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel id="form-layouts-separator-single-select-label">
                Category
              </InputLabel>
              <Select
                required
                defaultValue={initialvalue.category}
                id="account-settings-single-select"
                labelId="account-settings-single-select-label"
                onChange={(e) => handlechange(e)}
                name="category"
                input={
                  <OutlinedInput label="Category" id="select-single-language" />
                }
              >
                <MenuItem value="General">General</MenuItem>
                <MenuItem value="OBC">OBC</MenuItem>
                <MenuItem value="SC/ST">SC/ST </MenuItem>
              </Select>
            </FormControl>
          </Grid> */}
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
              value={user?.guardianFirstName}
              helperText="Guardian's First Name"
              //placeholder="Guardian's First Name"
              onChange={(e) => handlechange(e)}
              name="guardianFirstName"
              inputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              helperText="Middle Name"
              // placeholder="Middle Name"
              value={user?.guardianMiddleName}
              onChange={(e) => handlechange(e)}
              name="guardianMiddleirstName"
              inputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              helperText="Last Name"
              // placeholder="Last Name"
              value={user?.guardianLastName}
              onChange={(e) => handlechange(e)}
              name="guardianLastName"
              inputProps={{ readOnly: true }}
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
              value={user?.state}
              helperText="State"
              // placeholder="New Delhi"
              onChange={(e) => handlechange(e)}
              name="state"
              //inputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              fullWidth
              value={user?.address}
              helperText="Address"
              // placeholder="B.H. Area"
              onChange={(e) => handlechange(e)}
              name="address"
              //inputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <TextField
              fullWidth
              helperText="Locality"
              value={user?.locality}
              // placeholder="Kadma"
              onChange={(e) => handlechange(e)}
              name="locality"
              //inputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <TextField
              fullWidth
              helperText="Town"
              value={user?.town}
              // placeholder="New Delhi"
              onChange={(e) => handlechange(e)}
              name="town"
              //inputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <TextField
              fullWidth
              helperText="Pincode"
              // placeholder="560004"
              value={user?.pincode}
              onChange={(e) => handlechange(e)}
              name="pincode"
              //inputProps={{ readOnly: true }}
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
              helperText="Intermediate (XII) Marks"
              // placeholder="99.9% or 9.9 CGPA"
              value={user?.marks12}
              onChange={(e) => handlechange(e)}
              name="marks12"
              // defaultValue="John"
              inputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              fullWidth
              helperText="Matriculation (X) Marks"
              // placeholder="99.9% or 9.9 CGPA"
              value={user?.marks10}
              onChange={(e) => handlechange(e)}
              name="marks10"
              inputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              fullWidth
              helperText="Highest Qualification "
              // placeholder="99.9% or 9.9 CGPA"
              value={user?.highestQualification}
              onChange={(e) => handlechange(e)}
              name="highestQualification"
              inputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              fullWidth
              helperText="Highest Qualification Marks"
              // placeholder="99.9% or 9.9 CGPA"
              onChange={(e) => handlechange(e)}
              value={user?.highestQualificationmarks}
              name="highestQualificationmarks"
              inputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={12}>
            <Divider variant="middle" textAlign="left">
              <Chip label="Finance" />
            </Divider>
          </Grid>

         
          <Grid item xs={12} sm={3}>
            <TextField
              fullWidth
              helperText="Income"
              // placeholder="Jayanagar, Bengaluru"
              value={user?.income}
              onChange={(e) => fetch(e)}
              name="income"
              inputProps={{ readOnly: true }}
            />
          </Grid>


          <Grid item xs={12} sm={3}>
            <TextField
              fullWidth
              helperText="IFSC Code"
              // placeholder="Jayanagar, Bengaluru"
              value={user?.ifscCode}
              onChange={(e) => fetch(e)}
              name="ifscCode"
              inputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              fullWidth
              value={user?.banker}
              helperText="Bank Name"

              // placeholder="Kotak Mahindra Bank"
              onChange={(e) => handlechange(e)}
              name="banker"
              inputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              fullWidth

              helperText="Account Number"
              value={user?.accountNo}
              // placeholder="xxxxxxxxxxxxxxxx"
              inputProps={{ maxLength: 16, readOnly: true }}
              onChange={(e) => handlechange(e)}
              name="accountNo"
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              fullWidth
              helperText="Bank Branch Name"
              value={user?.bankBranch}
              // placeholder="Jayanagar, Bengaluru"
              onChange={(e) => handlechange(e)}
              name="bankBranch"
              inputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={12}>
            <Divider variant="middle" textAlign="left">
              <Chip label="Upload Documents" />
            </Divider>
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              required
              type="file"
              helperText="Cover Letter"
              onChange={(e) => setCoverLetterFile(e)}
              name="coverLetter"
            />
          </Grid>

          <Grid item xs={12}>
            <Button variant="contained" onClick={handleClick} sx={{ marginRight: 3.5 }}>
              Apply
            </Button>
          </Grid>
        </Grid>
      </form>
    </CardContent>
  );
};

export default Appl;
