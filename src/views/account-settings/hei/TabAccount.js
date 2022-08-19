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
import TextareaAutosize from '@mui/material/TextareaAutosize';


// ** Icons Imports
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
                  Agency
                </Typography>
              </Box>
            </Box>
          </Grid>
          {/* for each field fetch the details from the info tab  */}
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Name"
              placeholder="Agency's Name"
              // defaultValue="John"
              inputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              type="email"
              label="Email"
              placeholder="johnDoe@example.com"
              // defaultValue="johnDoe@example.com"
              inputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              height="100"
              type="number"
              label="Phone"
              placeholder="1234567890"
              // defaultValue="7438748373"
              inputProps={{ readOnly: true }}
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
              inputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>  
            <TextField
              fullWidth
              label="Entity Type"
              placeholder="Private Limited Company"
              inputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Organisation Type"
              placeholder="TISS"
              // defaultValue="John"
              inputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Trust Type"
              placeholder="Living"
              // defaultValue="John"
              inputProps={{ readOnly: true }}
            />
          </Grid>
         

          

          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              type="string"
              label="Address"
              placeholder="Bengakuru, Karnataka, India."
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
      </form>
    </CardContent>
  );
};

export default TabAccount;
