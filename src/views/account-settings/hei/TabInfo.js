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
import { useSession } from "next-auth/react";
// ** Third Party Imports
import DatePicker from "react-datepicker";

// ** Styled Components
import DatePickerWrapper from "src/@core/styles/libs/react-datepicker";
import Divider from "@mui/material/Divider";

const CustomInput = forwardRef((props, ref) => {
  return <TextField inputRef={ref} label="Birth Date" fullWidth {...props} />;
});

const TabInfo = () => {
  const {data: session} = useSession();
  // ** State
  const [user, setUser] = useState({});
  console.log("sess:",session.user.email);
  useEffect(() => {

    const fetch= async () =>{
      await axios.get(`https://localhost:3000/api/controller/institute/getInstituteInfo`,{email:session.user.email}).then((res) => {
      setUser(res.data);
      console.log(res.data);
        
      }).catch((err) => {
        console.log(err);
      })
    }
    fetch();
    
  }, []);


  let initialvalue={
    
      headName:user?.headName,
      gender:user?.gender,
      designation:user?.designation,
      email:user?.email,
      phNo:user?.phNo,
      district:user?.district,
      clgName:user?.clgName,
      location:user?.location, 
      collegeType:user?.collegeType,
      managementType:user?.managementType,
      accrediationNo:user?.accrediationNo,
      courseOffered:user?.courseOffered,
      aishecode:user?.aishecode,
      aishefile:user?.aishefile,
      affiliatedUniversityState:user?.affiliatedUniversityState,
      affiliatedUniversityName:user?.affiliatedUniversityName,
      earlierAffiliation:user?.earlierAffiliation,
      firstAdmissionYear:user?.firstAdmissionYear,
      admissionCompleted:user?.admissionCompleted,
      proof:user?.proof,
      addressCorrespondence:user?.addressCorrespondence,
      cityCorrespondence:user?.cityCorrespondence,
      stateCorrespondence:user?.stateCorrespondence,
      districtCorrespondence:user?.districtCorrespondence,
      pincodeCorrespondence:user?.pincodeCorrespondence,
    
      
}
 
  const [date, setDate] = useState();
  const [data,setdata]  = useState(initialvalue);

  const handlechange = (e) => {
      
    setdata({ ...data, [e.target.name]: e.target.value });
    console.log(data);
  };
  return (
    //form validation needs to be done
    //pan card upload file tab needs to be added (along with entity logo & identity proof file)

    <CardContent>
      <form>
        <Grid container spacing={7}>
          <Grid item xs={12} sm={12}>
            <Divider variant="middle" textAlign="left">
              <Chip label="Institute Representative's Details" />
            </Divider>
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              fullWidth
              label="Representative's Name"
              placeholder=" Name"
              onChange={(e) => handlechange(e)}
              name="headName"
              // defaultValue="John"
              // inputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              fullWidth
              height="100"
              type="number"
              label="Designation"
              placeholder="Dean of Academics"
              onChange={(e) => handlechange(e)}
              name="designation"
              // defaultValue="7438748373"
              // inputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={12} sm={5}>
            <TextField
              fullWidth
              type="email"
              label="Email"
              placeholder="johnDoe@example.com"
              onChange={(e) => handlechange(e)}
              name="email"
              // defaultValue="johnDoe@example.com"
              // inputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              fullWidth
              height="100"
              type="number"
              label="Phone"
              placeholder="1234567890"
              onChange={(e) => handlechange(e)}
              name="phNo"
              // defaultValue="7438748373"
              // inputProps={{ readOnly: true }}
            />
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
                  value="Rather not say"
                  label="Rather not say"
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
          <Grid item xs={12} sm={12}>
            <Divider variant="middle" textAlign="left">
              <Chip label="College Detalis" />
            </Divider>
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              height="100"
              label="College Name"
              placeholder="Bangalore Institute of Technology"
              onChange={(e) => handlechange(e)}
              name="clgName"
              // defaultValue="7438748373"
              // inputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              height="100"
              label="College Type"
              placeholder="Semi-Private"
              onChange={(e) => handlechange(e)}
              name="collegeType"
              // defaultValue="7438748373"
              // inputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              height="100"
              label="Location"
              placeholder="Urban"
              onChange={(e) => handlechange(e)}
              name="location"
              // defaultValue="7438748373"
              // inputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              fullWidth
              height="100"
              label="District"
              placeholder="Bengaluru"
              onChange={(e) => handlechange(e)}
              name="district"
              // defaultValue="7438748373"
              // inputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <Divider variant="middle" textAlign="left">
              <Chip label="Management Style" />
            </Divider>
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              height="100"
              label="Management Type"
              placeholder="Project Management"
              onChange={(e) => handlechange(e)}
              name="managementType"
              // defaultValue="7438748373"
              // inputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              height="100"
              label="Accreditation Number"
              placeholder="Regional Accrediation"
              onChange={(e) => handlechange(e)}
              name="accreditationNo"
              // defaultValue="7438748373"
              // inputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              height="100"
              label="Course Offered"
              placeholder="B.Sc."
              onChange={(e) => handlechange(e)}
              name="courseOffered"
              // defaultValue="7438748373"
              // inputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              height="100"
              label="AISHE/ITI(NCNT) Code or DISE Code"
              placeholder="C-1340"
              onChange={(e) => handlechange(e)}
              name="aishecode"
              // defaultValue="7438748373"
              // inputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              height="100"
              label="Affiliated University State"
              placeholder="UGC"
              onChange={(e) => handlechange(e)}
              name="affiliatedUniversityState"
              // defaultValue="7438748373"
              // inputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              height="100"
              label="Affiliated University Name"
              placeholder="UGC"
              onChange={(e) => handlechange(e)}
              name="affiliatedUniversityName"
              // defaultValue="7438748373"
              // inputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              height="100"
              label="Earlier Affiliation"
              placeholder="UGC"
              onChange={(e) => handlechange(e)}
              name="earlierAffiliation"
              // defaultValue="7438748373"
              // inputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              height="100"
              label="First Admission Year"
              placeholder="2001"
              onChange={(e) => handlechange(e)}
              name="firstAdmissionYear"
              // defaultValue="7438748373"
              // inputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              height="100"
              label="Admission Completed"
              placeholder="Yes"
              onChange={(e) => handlechange(e)}
              name="admissionCompleted"
              // defaultValue="7438748373"
              // inputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <Divider variant="middle" textAlign="left">
              <Chip label="College Detalis" />
            </Divider>
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              height="100"
              label="College Name"
              placeholder="Bangalore Institute of Technology"
              onChange={(e) => handlechange(e)}
              name="clgName"
              // defaultValue="7438748373"
              // inputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              height="100"
              label="College Type"
              placeholder="Semi-Private"
              onChange={(e) => handlechange(e)}
              name="collegeType"
              // defaultValue="7438748373"
              // inputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              height="100"
              label="Location"
              placeholder="Urban"
              onChange={(e) => handlechange(e)}
              name="location"
              // defaultValue="7438748373"
              // inputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              fullWidth
              height="100"
              label="District"
              placeholder="Bengaluru"
              onChange={(e) => handlechange(e)}
              name="district"
              // defaultValue="7438748373"
              // inputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <Divider variant="middle" textAlign="left">
              <Chip label="Correspondence Address" />
            </Divider>
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              height="100"
              label="Address"
              placeholder="V.V. Puram, Bengaluru."
              onChange={(e) => handlechange(e)}
              name="addressCorrespondence"
              // defaultValue="7438748373"
              // inputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              height="100"
              label="City"
              placeholder="Bengaluru"
              onChange={(e) => handlechange(e)}
              name="cityCorrespondence"
              // defaultValue="7438748373"
              // inputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              height="100"
              label="State"
              placeholder="Karnataka"
              onChange={(e) => handlechange(e)}
              name="stateCorrespondence"
              // defaultValue="7438748373"
              // inputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              height="100"
              label="District"
              placeholder="Bengaluru Urban"
              onChange={(e) => handlechange(e)}
              name="districtCorrespondence"
              // defaultValue="7438748373"
              // inputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              height="100"
              label="Pincode"
              placeholder="56004"
              onChange={(e) => handlechange(e)}
              name="pincodeCorrespondence"
              // defaultValue="7438748373"
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


// export async function getServerSideProps(context) {
//   const sess= await getSession(context);
//   return {
//     props: {
//         sess:sess
//     },
//   };
// }
