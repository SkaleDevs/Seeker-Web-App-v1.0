// ** React Imports
import { forwardRef, useState ,useEffect} from "react";

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
import { useSession } from "next-auth/react";



// ** Third Party Imports
import DatePicker from "react-datepicker";

// ** Styled Components
import DatePickerWrapper from "src/@core/styles/libs/react-datepicker";
import Divider from "@mui/material/Divider";

const CustomInput = forwardRef((props, ref) => {
  return <TextField inputRef={ref} label="Birth Date" fullWidth {...props} />;
});

const TabInfo = ({user}) => {
  // const {data: session} = useSession();

  // ** State
 


  let initialvalue={
  
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

    const update  = async (e) => {
      e.preventDefault();
      // window.alert("hello");
      console.log("hello");
      try{

          let res = await axios.post("/api/controller/seeker/editSeekerProfile", data);
        console.log(res);
      }catch(err){
        console.log(err);
      }
      // window.alert(res.data);
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
              label="First Name"
              // placeholder={initialvalue.email}
              value={user.firstName}
              onChange={(e) => handlechange(e)}
              name="firstName"
              // defaultValue="John"
              //  inputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Middle Name"
              // placeholder="Middle Name"
              defaultvalue  = {data.middleName}
              value = {data.middleName}
              // value = "a"
              onChange={(e) => handlechange(e)}
              name="middleName"
               inputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              required
              label="Last Name"
              // placeholder="Last Name"
              value = {user.lastName}
              onChange={(e) => handlechange(e)}
              name="lastName"
              inputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              required
                selected={date}
                showYearDropdown
                showMonthDropdown
                id="account-settings-date"
                // placeholderText="MM-DD-YYYY"
                value = {user.dateOfBirth}
                customInput={<CustomInput />}
                onChange={(date) => setDate(date)}
              />
            
          </Grid>
      
          <Grid item xs={12} sm={6}>
            <FormControl>
              <FormLabel sx={{ fontSize: "0.875rem" }}>Gender</FormLabel>
              <RadioGroup
                row
                
                aria-label="gender"
                onChange={(e) => handlechange(e)}
                name="sex"
                value  = {user.sex}
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
              label="Phone"
              // placeholder="+91 1231231234"
              value = {user.phNo}
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
              label="Email"
              // placeholder="johnDoe@example.com"
              value  = {user.email}
              onChange={(e) => handlechange(e)}
              name="email"

               inputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              label="Aadhaar Card"
              // placeholder="xxxx-xxxx-xxxx"
              value = {user.aadharNo}
              inputProps={{ maxLength: 12 }}
              onChange={(e) => handlechange(e)}
              name="aadharNo"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              label="Pan Card"
              value={user.panNo}
              // placeholder="AAAAA1234A"
              inputProps={{ maxLength: 10 }}
              onChange={(e) => handlechange(e)}
              name="panNo"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel id="form-layouts-separator-single-select-label">
                Category
              </InputLabel>
              <Select
                required
                // defaultValue={initialvalue.category}
                value  = {user.category}
                id="account-settings-single-select"
                labelId="account-settings-single-select-label"
                onChange={(e) => handlechange(e)}
                name="category"
                input={
                  <OutlinedInput label="Category" id="select-single-language" />
                }
              >
                <MenuItem value="general">General</MenuItem>
                <MenuItem value="obc">OBC</MenuItem>
                <MenuItem value="sc/st">SC/ST </MenuItem>
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
              // placeholder="Guardian's First Name"
              value = {user.guardianFirstName}
              onChange={(e) => handlechange(e)}
              name="guardianFirstName"
              inputProps={{ readOnly: true }}

            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Middle Name"
              // placeholder="Middle Name"
              onChange={(e) => handlechange(e)}
              name="guardianMiddletName"
              value = {user.guardianMiddleName}
              // inputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Last Name"
              // placeholder="Last Name"
              onChange={(e) => handlechange(e)}
              name="guardianLastName"
              value  = {user.guardianLastName}
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
              // placeholder="New Delhi"
              value = {user.state}
              onChange={(e) => handlechange(e)}
              name="state"
              // inputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              fullWidth
              label="Address"
              // placeholder="B.H. Area"
              value = {user.address}
              onChange={(e) => handlechange(e)}
              name="address"
              // inputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <TextField
              fullWidth
              label="Locality"
              // placeholder="Kadma"
              value = {user.locality}
              onChange={(e) => handlechange(e)}
              name="locality"
              // inputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <TextField
              fullWidth
              label="Town"
              // placeholder="New Delhi"
              value = {user.town}
              onChange={(e) => handlechange(e)}
              name="town"
              // inputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <TextField
              fullWidth
              label="Pincode"
              // placeholder="560004"
              value = {user.pincode}
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
              label="Highest Qualification Marks"
              // placeholder="99.9% or 9.9 CGPA"
              value = {user.highestQualificationMarks}
              onChange={(e) => handlechange(e)}
              name="highestQualificationMarks"
              // inputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              fullWidth
              label="Intermediate (XII) Marks"
              // placeholder="99.9% or 9.9 CGPA"
              value = {user.marks12}
              onChange={(e) => handlechange(e)}
              name="marks12"
              // defaultValue="John"
               inputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              fullWidth
              label="Matriculation (X) Marks"
              // placeholder="99.9% or 9.9 CGPA"
              onChange={(e) => handlechange(e)}
              name="marks10"
              value = {user.marks10}
              // inputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <FormControl fullWidth>
              <InputLabel id="form-layouts-separator-single-select-label">
                Highest Qualification
              </InputLabel>
              <Select
                // defaultValue={initialvalue.qualification}
                id="account-settings-single-select"
                labelId="account-settings-single-select-label"
                input={
                  <OutlinedInput
                    label="Highest Qualifications"
                    id="select-multiple-language"
                  />
                  
                }
                onChange={(e) => handlechange(e)}
                value = {user.highestQualification}
              name="highestQualification"
              >
                <MenuItem value="matriculation">Matriculation</MenuItem>
                <MenuItem value="intermediate">Intermediate</MenuItem>
                <MenuItem value="undergraduate">Undergraduate</MenuItem>
                <MenuItem value="postgraduate">Postgraduate</MenuItem>
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
                value  ={user.income}
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
                <MenuItem value="3.5lpa">Upto Rs 3.5 LPA</MenuItem>
                <MenuItem value="3.5to7.5lpa">
                  Rs 3.5 LPA - Rs 7.5 LPA
                </MenuItem>
                <MenuItem value="above7.5lpa">Above Rs 7.5 LPA</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              fullWidth
              label="IFSC Code"
              // placeholder="Jayanagar, Bengaluru"
              value = {user.ifscCode}
              onChange={(e) => fetch(e)}
              name="ifscCode"
               inputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              fullWidth
              label="Bank Name"
              // placeholder="Kotak Mahindra Bank"
              onChange={(e) => handlechange(e)}
              name="banker"
              value={user.banker}
              // inputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              fullWidth
              label="Account Number"
              value={user.accountNo}
              // placeholder="xxxxxxxxxxxxxxxx"
              inputProps={{ maxLength: 16 , readOnly: true }}
               onChange={(e) => handlechange(e)}
              name="accountNo"
              
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              fullWidth
              label="Bank Branch Name"
              value={user.bankBranch}
              // placeholder="Jayanagar, Bengaluru"
              onChange={(e) => handlechange(e)}
              name="bankBranch"
               inputProps={{ readOnly: true }}
            />
          </Grid>
          

          <Grid item xs={12}>
            <Button variant="contained" type="button" onClick ={update} sx={{ marginRight: 3.5 }}>
              Save Changes
            </Button>
          
          </Grid>
        </Grid>
      </form>
    </CardContent>
  );
};

export default TabInfo;