// ** Next Import
import Link from 'next/link'

// ** MUI Components
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import Box from '@mui/material/Box'
import TextField from "@mui/material/TextField";
// ** Layout Import
import BlankLayout from 'src/@core/layouts/BlankLayout'
import { useRef } from 'react'
// ** Demo Imports
import FooterIllustrations from 'src/views/pages/misc/FooterIllustrations'
import { CardActions, CardContent, CardHeader } from '@mui/material'
import router, { useRouter } from 'next/router'
import axios from 'axios'

const TreeIllustration = styled('img')(({ theme }) => ({
  left: 0,
  bottom: '5rem',
  position: 'absolute',
  [theme.breakpoints.down('lg')]: {
    bottom: 0
  }
}))

const Home = () => {
  const router = useRouter();
  const phoneRef = useRef();
  const clickHanlder = async() =>{
    try{
      console.log(phoneRef.current.value)
    await axios.post("/api/controller/sendotp",{phoneNo:phoneRef.current.value}).then((res)=>{
      window.alert("otp sent")})
    }
  
    catch(error){
      console.log(error)
    }
  }
  return (
    <Box className="content-center">
      <Box
        sx={{
          p: 5,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Card>
          <CardHeader title="Welcome to the Scholarship Portal" />
          <CardContent>
            <Typography variant="body1">
              This is the place to verify your aadhar phone number
            </Typography>
          </CardContent>
          <CardActions>
          <TextField
              autoFocus
              fullWidth
              id="email"
              label="Enter Number"
              sx={{ marginBottom: 4 }}
              inputRef={phoneRef}
              // value={email}
              type="Number"
            />
            <Button variant="contained" color="primary" sx={{flexGrow: 1}} onClick= {clickHanlder} >
              Send OTP
            </Button>
          </CardActions>
        </Card>
      </Box>
      <FooterIllustrations
        image={<TreeIllustration alt="tree" src="/images/pages/tree.png" />}
      />
    </Box>
  );
}
Home.getLayout = page => <BlankLayout>{page}</BlankLayout>

export default Home
