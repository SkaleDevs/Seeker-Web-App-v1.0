// ** React Imports
import { useState, Fragment, forwardRef, useRef } from "react";

// ** Next Imports
import Link from "next/link";
import Image from "next/image";

// ** MUI Components
import Box from "@mui/material/Box";
import Radio from "@mui/material/Radio";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import Chip from "@mui/material/Chip";

import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import IconButton from "@mui/material/IconButton";
import CardContent from "@mui/material/CardContent";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import { styled, useTheme } from "@mui/material/styles";
import MuiCard from "@mui/material/Card";
import InputAdornment from "@mui/material/InputAdornment";
import MuiFormControlLabel from "@mui/material/FormControlLabel";

// ** Third Party Imports
import DatePicker from "react-datepicker";

// ** SVG Imports
import SignUp from "public/signUp.svg";

// ** Styled Components Imports
import DatePickerWrapper from "src/@core/styles/libs/react-datepicker";

// ** Icons Imports
// ** Configs
import themeConfig from "src/configs/themeConfig";

// ** Layout Import
import BlankLayout from "src/@core/layouts/BlankLayout";

// ** Demo Imports
import FooterIllustrationsV1 from "src/views/pages/auth/FooterIllustration";

// ** Styled Components
const Card = styled(MuiCard)(({ theme }) => ({
  [theme.breakpoints.up("sm")]: { width: "75rem" },
}));

const CustomInput = forwardRef((props, ref) => {
  return <TextField inputRef={ref} label="Birth Date" fullWidth {...props} />;
});

const LinkStyled = styled("a")(({ theme }) => ({
  fontSize: "0.875rem",
  textDecoration: "none",
  color: theme.palette.primary.main,
}));

const FormControlLabel = styled(MuiFormControlLabel)(({ theme }) => ({
  marginTop: theme.spacing(1.5),
  marginBottom: theme.spacing(4),
  "& .MuiFormControlLabel-label": {
    fontSize: "0.875rem",
    color: theme.palette.text.secondary,
  },
}));

const RegisterPage = () => {
  // ** States
  const [date, setDate] = useState(null);
  const [category, setCategory] = useState("general");
  const [gender, setGender] = useState("male");
  const [language, setLanguage] = useState("english");
  const [highestQualification, setHighestQualification] = useState('intermediate')
  const [financeIncome, setFinanceIncome] = useState('3.5lpa')
  const [aadharFile, setAadharFile] = useState(null);
  const [panFile, setPanFile] = useState(null);
  const [highestQualFile, sethighestQualFile] = useState(null);
  const [mark12File, setmark12File] = useState(null);
  const [mark10File, setmark10File] = useState(null);
  // ** Refs
  
  const firstnameRef = useRef();
  const middlenameRef = useRef();
  const lastnameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const aadharNoRef = useRef();
  const panNoRef = useRef();
  const guardianfirstnameRef = useRef();
  const guardianmiddlenameRef = useRef();
  const guardianlastnameRef = useRef();
  const stateRef = useRef();
  const addressRef = useRef();
  const localityRef = useRef();
  const cityRef = useRef();
  const pincodeRef = useRef();
  const highestQualRef = useRef();
  const mark12Ref = useRef();
  const mark10Ref = useRef();
  const ifscRef = useRef();
  const bankNameRef = useRef();
  const accNoRef = useRef();
  const bankBranchRef = useRef();
  

  // ** Hooks
  const theme = useTheme();

  return (
    <Box className="content-center">
      <Card sx={{ zIndex: 1 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} sx={{ background: "#AFB4FF"}}>
            <CardContent sx={{ display: { xs: "none", sm: "block" } }}>
              <Image src={SignUp} alt="sign up svg" />
            </CardContent>
          </Grid>
          <Grid item xs={12} sm={6}>
            <CardContent
              sx={{
                padding: (theme) => `${theme.spacing(12, 9, 7)} !important`,
              }}
            >
              <Box
                sx={{
                  mb: 8,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg
                  width={35}
                  height={29}
                  version="1.1"
                  viewBox="0 0 30 23"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <g
                    stroke="none"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd"
                  >
                    <g
                      id="Artboard"
                      transform="translate(-95.000000, -51.000000)"
                    >
                      <g id="logo" transform="translate(95.000000, 50.000000)">
                        <path
                          id="Combined-Shape"
                          fill={theme.palette.primary.main}
                          d="M30,21.3918362 C30,21.7535219 29.9019196,22.1084381 29.7162004,22.4188007 C29.1490236,23.366632 27.9208668,23.6752135 26.9730355,23.1080366 L26.9730355,23.1080366 L23.714971,21.1584295 C23.1114106,20.7972624 22.7419355,20.1455972 22.7419355,19.4422291 L22.7419355,19.4422291 L22.741,12.7425689 L15,17.1774194 L7.258,12.7425689 L7.25806452,19.4422291 C7.25806452,20.1455972 6.88858935,20.7972624 6.28502902,21.1584295 L3.0269645,23.1080366 C2.07913318,23.6752135 0.850976404,23.366632 0.283799571,22.4188007 C0.0980803893,22.1084381 2.0190442e-15,21.7535219 0,21.3918362 L0,3.58469444 L0.00548573643,3.43543209 L0.00548573643,3.43543209 L0,3.5715689 C3.0881846e-16,2.4669994 0.8954305,1.5715689 2,1.5715689 C2.36889529,1.5715689 2.73060353,1.67359571 3.04512412,1.86636639 L15,9.19354839 L26.9548759,1.86636639 C27.2693965,1.67359571 27.6311047,1.5715689 28,1.5715689 C29.1045695,1.5715689 30,2.4669994 30,3.5715689 L30,3.5715689 Z"
                        />
                        <polygon
                          id="Rectangle"
                          opacity="0.077704"
                          fill={theme.palette.common.black}
                          points="0 8.58870968 7.25806452 12.7505183 7.25806452 16.8305646"
                        />
                        <polygon
                          id="Rectangle"
                          opacity="0.077704"
                          fill={theme.palette.common.black}
                          points="0 8.58870968 7.25806452 12.6445567 7.25806452 15.1370162"
                        />
                        <polygon
                          id="Rectangle"
                          opacity="0.077704"
                          fill={theme.palette.common.black}
                          points="22.7419355 8.58870968 30 12.7417372 30 16.9537453"
                          transform="translate(26.370968, 12.771227) scale(-1, 1) translate(-26.370968, -12.771227) "
                        />
                        <polygon
                          id="Rectangle"
                          opacity="0.077704"
                          fill={theme.palette.common.black}
                          points="22.7419355 8.58870968 30 12.6409734 30 15.2601969"
                          transform="translate(26.370968, 11.924453) scale(-1, 1) translate(-26.370968, -11.924453) "
                        />
                        <path
                          id="Rectangle"
                          fillOpacity="0.15"
                          fill={theme.palette.common.white}
                          d="M3.04512412,1.86636639 L15,9.19354839 L15,9.19354839 L15,17.1774194 L0,8.58649679 L0,3.5715689 C3.0881846e-16,2.4669994 0.8954305,1.5715689 2,1.5715689 C2.36889529,1.5715689 2.73060353,1.67359571 3.04512412,1.86636639 Z"
                        />
                        <path
                          id="Rectangle"
                          fillOpacity="0.35"
                          fill={theme.palette.common.white}
                          transform="translate(22.500000, 8.588710) scale(-1, 1) translate(-22.500000, -8.588710) "
                          d="M18.0451241,1.86636639 L30,9.19354839 L30,9.19354839 L30,17.1774194 L15,8.58649679 L15,3.5715689 C15,2.4669994 15.8954305,1.5715689 17,1.5715689 C17.3688953,1.5715689 17.7306035,1.67359571 18.0451241,1.86636639 Z"
                        />
                      </g>
                    </g>
                  </g>
                </svg>

                <Typography
                  variant="h6"
                  sx={{
                    ml: 3,
                    lineHeight: 1,
                    fontWeight: 600,
                    textTransform: "uppercase",
                    fontSize: "1.5rem !important",
                  }}
                >
                  {themeConfig.templateName}
                </Typography>
              </Box>
              <Box sx={{ mb: 6 }}>
                <Typography
                  variant="h5"
                  sx={{ fontWeight: 600, marginBottom: 1.5 }}
                >
                  Sign Up
                </Typography>
                <Typography variant="body2">
                  One platform to access all the scholarships
                </Typography>
              </Box>
                
              {/* Form */}

              <form
                noValidate
                autoComplete="off"
                onSubmit={(e) => e.preventDefault()}
              >
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <Divider variant="middle" textAlign="left">
                      <Chip label="Personal Information" />
                    </Divider>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      required
                      label="First Name"
                      placeholder="First Name"
                      inputRef={firstnameRef}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Middle Name"
                      placeholder="Middle Name"
                      inputRef={middlenameRef}
                    />
                  </Grid>
                  <Grid item xs={12} sm={8}>
                    <TextField
                      fullWidth
                      required
                      label="Last Name"
                      placeholder="Last Name"
                      inputRef={lastnameRef}
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
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
                  </Grid>
                  <Grid item xs={12}>
                    <FormControl required>
                      <FormLabel sx={{ fontSize: "0.875rem" }}>
                        Gender
                      </FormLabel>
                      <RadioGroup
                        row
                        defaultValue="male"
                        aria-label="gender"
                        name="account-settings-info-radio"
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
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
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      required
                      type="number"
                      label="Phone"
                      placeholder="+91 1231231234"
                      inputRef={phoneRef}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      type="email"
                      label="Email"
                      placeholder="johnDoe@example.com"
                      inputRef={emailRef}
                      // inputProps={{ readOnly: true }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      type="alphanumeric"
                      fullWidth
                      label="Aadhaar Number"
                      placeholder="xxxx-xxxx-xxxx"
                      inputProps={{ maxLength: 12 }}
                      inputRef={aadharNoRef}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      type="file"
                      fullWidth
                      helperText="Upload your Aadhaar Card*"
                      onChange={(e) => setAadharFile(e.target.files[0])}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      label="Pan Card"
                      placeholder="AAAAA1234A"
                      inputProps={{ maxLength: 10 }}
                      inputRef={panNoRef}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      type="file"
                      fullWidth
                      helperText="Upload your Pan Card*"
                      onChange={(e) => setPanFile(e.target.files[0])}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        Category*
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={category}
                        label="Category"
                        required
                        onChange={(e) => setCategory(e.target.value)}
                      >
                        <MenuItem value="general">General</MenuItem>
                        <MenuItem value="sc/st">SC/ST</MenuItem>
                        <MenuItem value="obc">OBC</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormControl fullWidth>
                      <InputLabel id="form-layouts-separator-multiple-select-label">
                        Language*
                      </InputLabel>
                      <Select
                        id="account-settings-multiple-select"
                        labelId="account-settings-multiple-select-label"
                        label="Language"
                        required
                        value={language}
                        onChange={(e) => setLanguage(e.target.value)}
                      >
                        <MenuItem value="english">English</MenuItem>
                        <MenuItem value="hindi">Hindi</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    <Divider variant="middle" textAlign="left">
                      <Chip label="Guardian's Information" />
                    </Divider>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      required
                      label="First Name"
                      placeholder="First Name"
                      inputRef={guardianfirstnameRef}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      required
                      label="Middle Name"
                      placeholder="Middle Name"
                      inputRef={guardianmiddlenameRef}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      required
                      label="Last Name"
                      placeholder="Last Name"
                      inputRef={guardianlastnameRef}
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
                      required
                      label="State"
                      placeholder="New Delhi"
                      inputRef={stateRef}
                    />
                  </Grid>
                  <Grid item xs={12} sm={8}>
                    <TextField
                      multiline
                      fullWidth
                      required
                      label="Address"
                      placeholder="B.H. Area"
                      inputRef={addressRef}
                    />
                  </Grid>
                  <Grid item xs={12} sm={3}>
                    <TextField fullWidth label="Locality" placeholder="Kadma" inputRef={localityRef} />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField fullWidth label="City" placeholder="New Delhi" inputRef={cityRef}/>
                  </Grid>
                  <Grid item xs={12} sm={3}>
                    <TextField fullWidth label="Pincode" placeholder="560004" inputRef={pincodeRef}/>
                  </Grid>
                  <Grid item xs={12}>
                    <Divider variant="middle" textAlign="left">
                      <Chip label="Academics" />
                    </Divider>
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <FormControl fullWidth>
                      <InputLabel id="form-layouts-separator-single-select-label">
                        Highest Qualification*
                      </InputLabel>
                      <Select
                        required
                        id="account-settings-single-select"
                        labelId="account-settings-single-select-label"
                        label= "Highest Qualification"
                        value={highestQualification}
                        onChange={(e)=> setHighestQualification(e.target.value)}
                      >
                        <MenuItem value="matriculation">
                          Matriculation
                        </MenuItem>
                        <MenuItem value="intermediate">
                          Intermediate
                        </MenuItem>
                        <MenuItem value="undergraduate">Undergraduate</MenuItem>
                        <MenuItem value="postgraduate">Postgraduate</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      required
                      label="Highest Qualification Marks"
                      placeholder="99.9% or 9.9 CGPA"
                      inputRef={highestQualRef}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      required
                      type="file"
                      helperText="Upload marks card of your highest qualification"
                      onChange={(e) => sethighestQualFile(e.target.files[0])}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      required
                      label="Intermediate (XII) Marks"
                      placeholder="99.9% or 9.9 CGPA"
                      inputRef={mark12Ref}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      required
                      type="file"
                      helperText="Upload your Intermediate (XII) marks card"
                      onChange={(e) => setmark12File(e.target.files[0])}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      required
                      label="Matriculation (X) Marks"
                      placeholder="99.9% or 9.9 CGPA"
                      inputRef={mark10Ref}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      required
                      type="file"
                      helperText="Upload your Matriculation (X) marks card"
                      onChange={(e) => setmark10File(e.target.files[0])}
                   />
                  </Grid>

                  <Grid item xs={12}>
                    <Divider variant="middle" textAlign="left">
                      <Chip label="Finance ( Optional )" />
                    </Divider>
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <FormControl fullWidth>
                      <InputLabel id="form-layouts-separator-single-select-label">
                        Income
                      </InputLabel>
                      <Select
                        id="account-settings-single-select"
                        labelId="account-settings-single-select-label"
                        value={financeIncome}
                        onChange={(e)=> setFinanceIncome(e.target.value)}
                        input={
                          <OutlinedInput
                            label="Income"
                            id="select-single-language"
                          />
                        }
                      >
                        <MenuItem value="3.5lpa">
                          Upto Rs 3.5 LPA
                        </MenuItem>
                        <MenuItem value="3.5to7.5lpa">
                          Rs 3.5 LPA - Rs 7.5 LPA
                        </MenuItem>
                        <MenuItem value="above7.5lpa">
                          Above Rs 7.5 LPA
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="IFSC Code"
                      placeholder="Jayanagar, Bengaluru"
                      inputRef={ifscRef}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Bank Name"
                      placeholder="Kotak Mahindra Bank"
                      inputRef={bankNameRef}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Account Number"
                      placeholder="xxxxxxxxxxxxxxxx"
                      inputProps={{ maxLength: 16 }}
                      inputRef={accNoRef}
                    />
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <TextField
                      fullWidth
                      label="Bank Branch Name"
                      placeholder="Jayanagar, Bengaluru"
                      inputRef={bankBranchRef}
                      // inputProps={{ readOnly: true }}
                    />
                  </Grid>
                </Grid>
                <FormControlLabel
                  control={<Checkbox />}
                  label={
                    <Fragment>
                      <span>I agree to </span>
                      <Link href="/" passHref>
                        <LinkStyled onClick={(e) => e.preventDefault()}>
                          privacy policy & terms
                        </LinkStyled>
                      </Link>
                    </Fragment>
                  }
                />
                <Button
                  fullWidth
                  size="large"
                  type="submit"
                  variant="contained"
                  sx={{ marginBottom: 7 }}
                >
                  Sign up
                </Button>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    flexWrap: "wrap",
                    justifyContent: "center",
                  }}
                >
                  <Typography variant="body2" sx={{ marginRight: 2 }}>
                    Already have an account?
                  </Typography>
                  <Typography variant="body2">
                    <Link passHref href="/pages/login">
                      <LinkStyled>Sign in instead</LinkStyled>
                    </Link>
                  </Typography>
                </Box>
              </form>
            </CardContent>
          </Grid>
        </Grid>
      </Card>
      <FooterIllustrationsV1 />
    </Box>
  );
};
RegisterPage.getLayout = (page) => <BlankLayout>{page}</BlankLayout>;

export default RegisterPage;
