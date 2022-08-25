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
// import OutlinedInput from "@mui/material/OutlinedInput";
import { styled } from "@mui/material/styles";
import FormControlLabel from "@mui/material/FormControlLabel";
import Chip from "@mui/material/Chip";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import axios from "axios";

// ** Third Party Imports
import DatePicker from "react-datepicker";

// ** Styled Components
import DatePickerWrapper from "src/@core/styles/libs/react-datepicker";
import Divider from "@mui/material/Divider";
import { Box } from "@mui/material";

//---------------------tab account name----------------------------------------------------------------

import Close from "mdi-material-ui/Close";
import { OutlinedInput } from "@mui/material";

const ImgStyled = styled("img")(({ theme }) => ({
  width: 120,
  height: 120,
  marginRight: theme.spacing(6.25),
  borderRadius: theme.shape.borderRadius,
}));

const ButtonStyled = styled(Button)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    textAlign: "center",
  },
}));

const ResetButtonStyled = styled(Button)(({ theme }) => ({
  marginLeft: theme.spacing(4.5),
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    marginLeft: 0,
    textAlign: "center",
    marginTop: theme.spacing(4),
  },
}));
//---------------------tab account--------------------------------------------

const CustomInput = forwardRef((props, ref) => {
  return <TextField inputRef={ref} label="Birth Date" fullWidth {...props} />;
});

const TabInfo = () => {
  const { data: session } = useSession();
  // ** State
  const [user, setUser] = useState({});
  console.log("sess:", session.user.email);
  useEffect(() => {
    const fetch = async () => {
      await axios
        .get(`/api/controller/agency/getMyDetails`, { email: session.user.id })
        .then((res) => {
          setUser(res.data);
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetch();
  }, []);

  let initialvalue = {
    name: user?.name,
    email: user?.email,
    phone: user?.phone,
    url: user?.url,
    description: user?.description,
    entityType: user?.entityType,
    organisationType: user?.organisationType,
    trustType: user?.trustType,
    trustName: user?.trustName,
    registrationNumber: user?.registrationNumber,
    address: user?.address,
    state: user?.state,
    locality: user?.locality,
    town: user?.town,
    pincode: user?.pincode,
    panCard: user?.panCard,
    nameAsPerBank: user?.nameAsPerBank,
    ifscCode: user?.ifscCode,
    bankName: user?.bankName,
    accountNumber: user?.accountNumber,
    bankBranchName: user?.bankBranchName,
  };

  return (
    //form validation needs to be done
    //pan card upload file tab needs to be added (along with entity logo & identity proof file)

    <CardContent>
      <form>
      <Grid container spacing={7}>
          <Grid item xs={12} sx={{ marginTop: 4.8, marginBottom: 3 }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <ImgStyled src={imgSrc} alt="Profile Pic" />
              <Box>
                <ButtonStyled
                  component="label"
                  variant="contained"
                  htmlFor="account-settings-upload-image"
                >
                  Upload New Photo
                  <input
                    hidden
                    type="file"
                    onChange={onChange}
                    accept="image/png, image/jpeg"
                    id="account-settings-upload-image"
                  />
                </ButtonStyled>
                <ResetButtonStyled
                  color="error"
                  variant="outlined"
                  onClick={() => setImgSrc("/images/avatars/1.png")}
                >
                  Reset
                </ResetButtonStyled>
                <Typography variant="body2" sx={{ marginTop: 5 }}>
                  Agency
                </Typography>
              </Box>
            </Box>
          </Grid>
          {/* for each field fetch the details from the info tab  */}
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              helperText="Name"
              // placeholder="Agency's Name"
              // defaultValue="John"
              inputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              type="email"
              helperText="Email"
              // placeholder="johnDoe@example.com"
              // defaultValue="johnDoe@example.com"
              inputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              height="100"
              type="number"
              helperText="Phone"
              // placeholder="1234567890"
              // defaultValue="7438748373"
              inputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <TextField
              fullWidth
              multiline
              rows={2}
              helperText="Description"
              // placeholder="A Funding Agency is any external organization, public or private, which undertakes a contractual agreement with the University to sponsor research or an entrepreneurial activity."
              // defaultValue=""
              inputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>  
            <TextField
              fullWidth
              helperText="Entity Type"
              // placeholder="Education Fund Provider"
              inputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              helperText="Organisation Type"
              // placeholder="TISS"
              // defaultValue="John"
              inputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              helperText="Trust Type"
              // placeholder="Living"
              // defaultValue="John"
              inputProps={{ readOnly: true }}
            />
          </Grid>
         

          

          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              type="string"
              helperText="Address"
              // placeholder="Bengakuru, Karnataka, India."
              // defaultValue="Bengakuru, Karnataka, India."
              inputProps={{ readOnly: true }}
            />
          </Grid>

          {/* <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel>Role</InputLabel>
              <Select label="Role" defaultValue="admin">
                <MenuItem value="admin">Admin</MenuItem>
                <MenuItem value="author">Author</MenuItem>
                <MenuItem value="editor">Editor</MenuItem>
                <MenuItem value="maintainer">Maintainer</MenuItem>
                <MenuItem value="subscriber">Subscriber</MenuItem>
              </Select>
            </FormControl>
          </Grid> */}
          {/* <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel>Status</InputLabel>
              <Select label="Status" defaultValue="active">
                <MenuItem value="active">Active</MenuItem>
                <MenuItem value="inactive">Inactive</MenuItem>
                <MenuItem value="pending">Pending</MenuItem>
              </Select>
            </FormControl>
          </Grid> */}
          {/* <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Company"
              placeholder="ABC Pvt. Ltd."
              defaultValue="ABC Pvt. Ltd."
            />
          </Grid> */}

          {openAlert ? (
            <Grid item xs={12} sx={{ mb: 3 }}>
              <Alert
                severity="warning"
                sx={{ "& a": { fontWeight: 400 } }}
                action={
                  <IconButton
                    size="small"
                    color="inherit"
                    aria-label="close"
                    onClick={() => setOpenAlert(false)}
                  >
                    <Close fontSize="inherit" />
                  </IconButton>
                }
              >
                <AlertTitle>
                  Your email is not confirmed. Please check your inbox.
                </AlertTitle>
                <Link href="/" onClick={(e) => e.preventDefault()}>
                  Resend Confirmation
                </Link>
              </Alert>
            </Grid>
          ) : null}

          <Grid item xs={12}>
            <Button variant="contained" sx={{ marginRight: 3.5 }}>
              Save Changes
            </Button>
            <Button type="reset" variant="outlined" color="secondary">
              Reset
            </Button>
          </Grid>
        </Grid>
        {/* <Grid container spacing={7}>
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
              onChange={(e) => handlechange(e)}
              name="email"
              //placeholder="johnDoe@example.com"
              // inputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              fullWidth
              required
              type="number"
              label="Phone"
              onChange={(e) => handlechange(e)}
              name="phone"
              // placeholder="+91 1231231234"
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <TextField
              fullWidth
              // required
              label="Url"
              // placeholder="www.example.com"
              onChange={(e) => handlechange(e)}
              name="url"
            />
          </Grid>

          <Grid item xs={12} sm={12}>
            <TextField
              fullWidth
              multiline
              rows={2}
              label="Description"
              onChange={(e) => handlechange(e)}
              name="description"
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
                onChange={(e) => handlechange(e)}
                name="entityType"
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
                onChange={(e) => handlechange(e)}
                name="organisationType"
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
                onChange={(e) => handlechange(e)}
                name="trustType"
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
              onChange={(e) => handlechange(e)}
              name="trustName"
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
              onChange={(e) => handlechange(e)}
              name="registrationNumber"
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
              onChange={(e) => handlechange(e)}
              name="address"
              // inputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <TextField
              fullWidth
              label="State"
              placeholder="New Delhi"
              onChange={(e) => handlechange(e)}
              name="state"
              // inputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <TextField
              fullWidth
              label="Locality"
              placeholder="Kadma"
              onChange={(e) => handlechange(e)}
              name="locality"
              // inputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <TextField
              fullWidth
              label="Town"
              placeholder="New Delhi"
              onChange={(e) => handlechange(e)}
              name="town"
              // inputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <TextField
              fullWidth
              label="Pincode"
              placeholder="560004"
              onChange={(e) => handlechange(e)}
              name="pincode"
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
              onChange={(e) => handlechange(e)}
              name="panCard"
              inputProps={{ maxLength: 10 }}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              fullWidth
              label="Name as per Bank"
              placeholder="Account name as per bank"
              onChange={(e) => handlechange(e)}
              name="nameAsPerBank"
              // inputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              fullWidth
              label="IFSC Code"
              placeholder="AAAAA0XXXXXX"
              inputProps={{ maxLength: 10 }}
              onChange={(e) => handlechange(e)}
              name="ifscCode"
              // inputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              fullWidth
              label="Bank Name"
              placeholder="Kotak Mahindra Bank"
              onChange={(e) => handlechange(e)}
              name="bankName"
              // inputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              fullWidth
              label="Account Number"
              placeholder="xxxxxxxxxxxxxxxx"
              onChange={(e) => handlechange(e)}
              name="accountNumber"
              inputProps={{ maxLength: 16 }}
              // inputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              fullWidth
              label="Bank Branch Name"
              placeholder="Jayanagar, Bengaluru"
              onChange={(e) => handlechange(e)}
              name="bankBranchName"
              // inputProps={{ readOnly: true }}
            />
          </Grid>

          <Grid item xs={12}>
            <Button variant="contained" sx={{ marginRight: 3.5 }}>
              Save Changes
            </Button>
          </Grid>
        </Grid> */}
      </form>
    </CardContent>
  );
};

export default TabInfo;
