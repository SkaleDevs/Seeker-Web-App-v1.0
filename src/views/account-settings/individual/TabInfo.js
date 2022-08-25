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
import {useEffect} from "react";

// ** Third Party Imports
import DatePicker from "react-datepicker";

// ** Styled Components
import DatePickerWrapper from "src/@core/styles/libs/react-datepicker";
import Divider from "@mui/material/Divider";

const CustomInput = forwardRef((props, ref) => {
  return <TextField inputRef={ref} label="Birth Date" fullWidth {...props} />;
});

const TabInfo = ({session}) => {
  // ** State
  const [user, setUser] = useState({});
  useEffect(() => {

    const fetch= async () =>{
      await axios.get(`https://localhost:3000/api/controller/seeker/getSeekerInfo`,{email:session.email}).then((res) => {
        setUser(res.data);
        console.log(res.data);
        
      }).catch((err) => {
        console.log(err);
      })
    }
    fetch();
    
  }, []);


  let initialvalue={
    scholarshipID:user?.scholarshipID,
          seekerID:user?.seekerID,
          email:user?.email,
          phNo:user?.phNo,
          firstName:user?.firstName,
          middleName:user?.middleName,
          aadharNo:user?.aadharNo,
          category:user?.category,
          birthDate:user?.birthDate,
          lastName:user?.lastName,
          guardianFirstName:user?.guardianFirstName,
          guardianMiddleName:user?.guardianMiddleName,
          guardianLastName:user?.guardianLastName ,
          dateOfBirth:user?. dateOfBirth,
          category:user?.category,
          sex:user?.sex,
          marks12:user?.marks12,
          marks12File:user?.marks12File,
          marks10:user?.marks10,
          marks10File:user?.marks10File,
          highestQualification:user?.highestQualification,
          marks:user?.marks ,
          income:user?.income,
          panNo:user?.panNo,
          state:user?.state ,
          address:user?.address,
          locality:user?.locality,
          town:user?.town,
          pincode:user?.pincode,
          resume:user?.resume,
          ifscCode:user?.ifscCode,
          banker:user?.banker,
          bankBranch:user?.bankBranch,
          accountType:user?.accountType,
          accountNo:user?.accountNo,
          proposal:user?.proposal,
          othersFile:user?.othersFile
 }
  const [date, setDate] = useState();
  const [data,setdata]  = useState(initialvalue);
  


  //  useEffect(() => {
    const fetch = async(e)=>{
      console.log(e.target.value);
      await axios.get(`https://ifsc.razorpay.com/${e.target.value}`).then((res) => {
        console.log(res.data.BANK);
       // setdata({ ...data, [e.target.name]: e.target.value });
       // setdata({ ...data, banker: res?.data?.BANK });

        setdata({ ...data, bankBranch: res?.data?.BRANCH ,banker: res?.data?.BANK, [e.target.name]: e.target.value});
        console.log(data)
        console.log(data.banker)
      }).catch((err) => {
        console.log(err);
      })
      
    }

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
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              required
              helperText="First Name"
              //placeholder="Seeker's First Name"
              onChange={(e) => handlechange(e)}
              name="firstname"
              // defaultValue="John"
               inputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              helperText="Middle Name"
              //placeholder="Middle Name"
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
              //placeholder="Last Name"
              onChange={(e) => handlechange(e)}
              name="birthDate"
               inputProps={{ readOnly: true }}
            />
          </Grid>
      
          <Grid item xs={12} sm={6}>
            <FormControl>
              <FormLabel sx={{ fontSize: "0.875rem" }}>Gender</FormLabel>
              <RadioGroup
                row
                defaultValue={initialvalue.sex}
                aria-label="gender"
                onChange={(e) => handlechange(e)}
                name="sex"
                // name="account-settings-info-radio"
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
              helperText="Phone"
              //placeholder="+91 1231231234"
              onChange={(e) => handlechange(e)}
              name="phNo"
              inputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
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
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              helperText="Aadhaar Card"
              //placeholder="xxxx-xxxx-xxxx"
              inputProps={{ maxLength: 12,readOnly: true }}
              onChange={(e) => handlechange(e)}
              name="aadharNo"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              helperText="Pan Card"
              //placeholder="AAAAA1234A"
              inputProps={{ maxLength: 10,readOnly: true }}
              onChange={(e) => handlechange(e)}
              name="panNo"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              
              helperText="Category"
              //placeholder="johnDoe@example.com"
              onChange={(e) => handlechange(e)}
              name="category"


              // inputProps={{ readOnly: true }}
            />
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
              //placeholder="Middle Name"
              onChange={(e) => handlechange(e)}
              name="guardianMiddleirstName"
               inputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              helperText="Last Name"
              //placeholder="Last Name"
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
              helperText="State"
              //placeholder="New Delhi"
              onChange={(e) => handlechange(e)}
              name="state"
              // inputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              fullWidth
              helperText="Address"
              //placeholder="B.H. Area"
              onChange={(e) => handlechange(e)}
              name="address"
              // inputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <TextField
              fullWidth
              helperText="Locality"
              //placeholder="Kadma"
              onChange={(e) => handlechange(e)}
              name="locality"
              // inputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <TextField
              fullWidth
              helperText="Town"
              //placeholder="New Delhi"
              onChange={(e) => handlechange(e)}
              name="town"
              // inputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <TextField
              fullWidth
              helperText="Pincode"
              //placeholder="560004"
              onChange={(e) => handlechange(e)}
              name="pincode"
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
              helperText="Intermediate (XII) Marks"
              //placeholder="99.9% or 9.9 CGPA"
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
              //placeholder="99.9% or 9.9 CGPA"
              onChange={(e) => handlechange(e)}
              name="marks10"
               inputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <FormControl fullWidth>
              <InputLabel id="form-layouts-separator-single-select-label">
                Highest Qualification
              </InputLabel>
              <Select
                defaultValue={initialvalue.qualification}
                id="account-settings-single-select"
                labelId="account-settings-single-select-label"
                input={
                  <OutlinedInput
                    label="Highest Qualifications"
                    id="select-multiple-language"
                  />
                  
                }
                onChange={(e) => handlechange(e)}
              name="highestQualification"
              >
                <MenuItem value="Matriculation(X)">Matriculation</MenuItem>
                <MenuItem value="Intermediate(XII)">Intermediate</MenuItem>
                <MenuItem value="Undergraduate">Undergraduate</MenuItem>
                <MenuItem value="Postgraduate">Postgraduate</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              fullWidth
              helperText="Highest Qualification Marks"
              //placeholder="99.9% or 9.9 CGPA"
              onChange={(e) => handlechange(e)}
              name="marks"
               inputProps={{ readOnly: true }}
            />
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
                defaultValue={initialvalue.income}
                id="account-settings-single-select"
                labelId="account-settings-single-select-label"
                input={
                  <OutlinedInput
                    label="Income"
                    id="select-single-language"
                  />
                }
                onChange={(e) => handlechange(e)}
              name="income"
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
              helperText="IFSC Code"
              //placeholder="Jayanagar, Bengaluru"
              onChange={(e) => fetch(e)}
              name="ifscCode"
               inputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              fullWidth
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
              //placeholder="xxxxxxxxxxxxxxxx"
              inputProps={{ maxLength: 16,readOnly: true }}
               onChange={(e) => handlechange(e)}
              name="accountNo"
             
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              fullWidth
              helperText="Bank Branch Name"
              //placeholder="Jayanagar, Bengaluru"
              onChange={(e) => handlechange(e)}
              name="bankBranch"
               inputProps={{ readOnly: true }}
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