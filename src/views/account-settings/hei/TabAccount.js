// ** React Imports
import { useState } from "react";

// ** MUI Imports
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Alert from "@mui/material/Alert";
import Select from "@mui/material/Select";
import { styled } from "@mui/material/styles";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import AlertTitle from "@mui/material/AlertTitle";
import IconButton from "@mui/material/IconButton";
import CardContent from "@mui/material/CardContent";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import TextareaAutosize from "@mui/material/TextareaAutosize";

// ** Icons Imports
import Close from "mdi-material-ui/Close";
import { Divider, OutlinedInput } from "@mui/material";
import Chip from "@mui/material/Chip";

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

const TabAccount = () => {
  // ** State
  const [openAlert, setOpenAlert] = useState(true);
  const [imgSrc, setImgSrc] = useState("/images/avatars/1.png");

  const onChange = (file) => {
    const reader = new FileReader();
    const { files } = file.target;
    if (files && files.length !== 0) {
      reader.onload = () => setImgSrc(reader.result);
      reader.readAsDataURL(files[0]);
    }
  };

  return (
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
                  Institute
                </Typography>
              </Box>
            </Box>
          </Grid>
          {/* for each field fetch the details from the info tab  */}
          <Grid item xs={12} sm={12}>
            <Divider variant="middle" textAlign="left">
            <Chip label="Institute Representative's Details" />
            </Divider>
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              fullWidth
              helperText="Representative's Name"
              //placeholder=" Name"
              // defaultValue="John"
              inputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              fullWidth
              height="100"
              type="number"
              helperText="Designation"
              //placeholder="Dean of Academics"
              // defaultValue="7438748373"
              inputProps={{ readOnly: true }}
            />
          </Grid>

          <Grid item xs={12} sm={5}>
            <TextField
              fullWidth
              type="email"
              helperText="Email"
             // placeholder="johnDoe@example.com"
              // defaultValue="johnDoe@example.com"
              inputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              fullWidth
              height="100"
              type="number"
              helperText="Phone"
              //placeholder="1234567890"
              // defaultValue="7438748373"
              inputProps={{ readOnly: true }}
            />
          </Grid>

          <Grid item xs={12} sm={3}>
            <TextField
              fullWidth
              height="100"
              helperText="Gender"
              //placeholder="MALE"
              // defaultValue="7438748373"
              inputProps={{ readOnly: true }}
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
              helperText="College Name"
              //placeholder="Bangalore Institute of Technology"
              // defaultValue="7438748373"
              inputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              height="100"
              helperText="College Type"
              //placeholder="Semi-Private"
              // defaultValue="7438748373"
              inputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              height="100"
              helperText="Location"
              //placeholder="Urban"
              // defaultValue="7438748373"
              inputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              fullWidth
              height="100"
              helperText="District"
              //placeholder="Bengaluru"
              // defaultValue="7438748373"
              inputProps={{ readOnly: true }}
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
              helperText="Management Type"
              //placeholder="Project Management"
              // defaultValue="7438748373"
              inputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              height="100"
              helperText="Accreditation Number"
              //placeholder="Regional Accrediation"
              // defaultValue="7438748373"
              inputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              height="100"
              helperText="Course Offered"
              //placeholder="B.Sc."
              // defaultValue="7438748373"
              inputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              height="100"
              helperText="AISHE/ITI(NCNT) Code or DISE Code"
              //placeholder="C-1340"
              // defaultValue="7438748373"
              inputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              height="100"
              helperText="Affiliated University State"
              ////placeholder="UGC"
              // defaultValue="7438748373"
              inputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              height="100"
              helperText="Affiliated University Name"
              //placeholder="UGC"
              // defaultValue="7438748373"
              inputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              height="100"
              helperText="Earlier Affiliation"
              //placeholder="UGC"
              // defaultValue="7438748373"
              inputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              height="100"
              helperText="First Admission Year"
             // placeholder="2001"
              // defaultValue="7438748373"
              inputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              height="100"
              helperText="Admission Completed"
             // placeholder="Yes"
              // defaultValue="7438748373"
              inputProps={{ readOnly: true }}
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
              helperText="College Name"
             // placeholder="Bangalore Institute of Technology"
              // defaultValue="7438748373"
              inputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              height="100"
              helperText="College Type"
             // placeholder="Semi-Private"
              // defaultValue="7438748373"
              inputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              height="100"
              helperText="Location"
             // placeholder="Urban"
              // defaultValue="7438748373"
              inputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              fullWidth
              height="100"
              helperText="District"
             // placeholder="Bengaluru"
              // defaultValue="7438748373"
              inputProps={{ readOnly: true }}
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
              helperText="Address"
             // placeholder="V.V. Puram, Bengaluru."
              // defaultValue="7438748373"
              inputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              height="100"
              helperText="City"
             // placeholder="Bengaluru"
              // defaultValue="7438748373"
              inputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              height="100"
              helperText="State"
             // placeholder="Karnataka"
              // defaultValue="7438748373"
              inputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              height="100"
              helperText="District"
             // placeholder="Bengaluru Urban"
              // defaultValue="7438748373"
              inputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              height="100"
              helperText="Pincode"
             // placeholder="56004"
              // defaultValue="7438748373"
              inputProps={{ readOnly: true }}
            />
          </Grid>
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
      </form>
    </CardContent>
  );
};

export default TabAccount;
