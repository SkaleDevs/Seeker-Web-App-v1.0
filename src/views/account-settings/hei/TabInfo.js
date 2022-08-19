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

  return (
    //form validation needs to be done
    //pan card upload file tab needs to be added (along with entity logo & identity proof file)

    <CardContent>
      <form>
        <Grid container spacing={7}>
          \
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
