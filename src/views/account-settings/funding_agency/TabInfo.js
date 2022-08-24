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
  const [user, setUser] = useState({});
  useEffect(() => {

    const fetch= async () =>{
      await axios.get(`https://localhost:3000/api/controller/agency/getMyDetails`,{email:session.email}).then((res) => {
        setUser(res.data);
        console.log(res.data);
        
      }).catch((err) => {
        console.log(err);
      })
    }
    fetch();
    
  }, []);
  let initialvalue={
    email:user?.email,
    typeEnitity:user?.typeEnitity,
    name:user?.name,
    discription:user?.discription,
    typeOrganisation:user?.typeOrganisation,
    trustType:user?.trustType,
    trustName:user?.trustName,
    address:user?.address,
    pincode:user?.pincode,
    city:user?.city,
    state:user?.state,
    url:user?.url,
    regNo:user?.regNo,
    panNo:user?.panNo,
    ifsc:user?.ifsc,
    bankName:user?.bankName,
    branchName:user?.branchName,
    bankAccountNo:user?.bankAccountNo,
    nameAsPerBank:user?.nameAsPerBank,
    entityLogo:user?.entityLogo,
    schemeManaged:user?.schemeManaged,
    panFile:user?.panFile,
    identityProofFile:user?.identityProofFile,
    phone:user?.phone
 }
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
          <Grid item xs={12} sm={3}>
            <TextField
              fullWidth
              required
              label="Name"
              placeholder="Agency's Name"
              onChange={(e) => handlechange(e)}
              name="name"
              // defaultValue="John"
              // inputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              required
              fullWidth
              type="email"
              label="Email"
              placeholder="johnDoe@example.com"
              onChange={(e) => handlechange(e)}
              name="email"

              // inputProps={{ readOnly: true }}
            />
            </Grid>
            <Grid item xs={12} sm={3}>
            <TextField
              fullWidth
              required
              type="number"
              label="Phone"
              placeholder="+91 1231231234"
              onChange={(e) => handlechange(e)}
              name="phone"
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <TextField
              fullWidth
              // required
              label="Url"
              placeholder="www.example.com"
            />
          </Grid>
         
          <Grid item xs={12} sm={12}>
            <TextField
              fullWidth
              multiline
              rows={2}
              label="Description"
              placeholder="A Funding Agency is any external organization, public or private, which undertakes a contractual agreement with the University to sponsor research or an entrepreneurial activity."
              // defaultValue=""
              // inputProps={{ readOnly: true }}
            />
          </Grid>
          
          <Grid item xs={12} sm={4}>
            <FormControl fullWidth>
              <InputLabel id="form-layouts-separator-single-select-label">
                Entity Type
              </InputLabel>
              <Select
                required
                // defaultValue={["Private Limited Company"]}
                id="account-settings-single-select"
                labelId="account-settings-single-select-label"
                input={
                  <OutlinedInput
                    label="Entity Type"
                    id="select-single-language"
                  />
                }
              >
                <MenuItem value="Private Limited Company">
                  Private Limited Company
                </MenuItem>
                <MenuItem value="Public Company">Public Company</MenuItem>
                <MenuItem value=" Sole Proprietorship">
                  {" "}
                  Sole Proprietorship{" "}
                </MenuItem>
                <MenuItem value=" One Person Company">
                  {" "}
                  One Person Company{" "}
                </MenuItem>
                <MenuItem value=" Partnership"> Partnership </MenuItem>
                <MenuItem value=" Limited Liability Partnership (LLP)">
                  {" "}
                  Limited Liability Partnership (LLP){" "}
                </MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={4}>
            <FormControl fullWidth>
              <InputLabel id="form-layouts-separator-single-select-label">
                Organisation Type
              </InputLabel>
              <Select
                required
                // defaultValue={["TISS"]}
                id="account-settings-single-select"
                labelId="account-settings-single-select-label"
                input={
                  <OutlinedInput
                    label="Organisation Type"
                    id="select-single-language"
                  />
                }
              >
                <MenuItem value="TISS">TISS</MenuItem>
                <MenuItem value="Own Trust Name">Own Trust Name</MenuItem>
                
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={2}>
            <FormControl fullWidth>
              <InputLabel id="form-layouts-separator-single-select-label">
                Trust Type
              </InputLabel>
              <Select
                required
                // defaultValue={["TISS"]}
                id="account-settings-single-select"
                labelId="account-settings-single-select-label"
                input={
                  <OutlinedInput
                    label="Trust Type"
                    id="select-single-language"
                  />
                }
              >
                <MenuItem value="Living">Living</MenuItem>
                <MenuItem value="Testamentary">Testamentary</MenuItem>
                <MenuItem value="Revocable">Revocable</MenuItem>
                <MenuItem value="Irrevocable">Irrevocable</MenuItem>
               
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={2}>
            <TextField
              fullWidth
              required
              label="Trust Name"
              placeholder="Trust's Name"
              // defaultValue="John"
              // inputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              fullWidth
              required
              label="Registration Number"
              placeholder="Registration number"
              // defaultValue="John"
              // inputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={12}>
            <Divider variant="middle" textAlign="left">
              <Chip label="Address" />
            </Divider>
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              fullWidth
              multiline
              rows={1}
              label="Address"
              placeholder="B.H. Area"
              // inputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <TextField
              fullWidth
              label="State"
              placeholder="New Delhi"
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
              <Chip label="Finance" />
            </Divider>
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              required
              fullWidth
              label="Pan Card"
              placeholder="AAAAA1234A"
              inputProps={{ maxLength: 10 }}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              fullWidth
              label="Name as per Bank"
              placeholder="Account name as per bank"
              // inputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              fullWidth
              label="IFSC Code"
              placeholder="AAAAA0XXXXXX"
              inputProps={{ maxLength: 10 }}
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
