// ** Next Import
import Link from 'next/link'

// ** MUI Components
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import Box from '@mui/material/Box'

// ** Layout Import
import BlankLayout from 'src/@core/layouts/BlankLayout'

// ** Demo Imports
import FooterIllustrations from 'src/views/pages/misc/FooterIllustrations'
import { CardActions, CardContent, CardHeader } from '@mui/material'
import router, { useRouter } from 'next/router'

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

  const clickHanlder = () =>{
    router.push('/pages/login')
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
              This is a platform for the students to manage and track the
              applications and interviews.
            </Typography>
          </CardContent>
          <CardActions>
            <Button variant="contained" color="primary" sx={{flexGrow: 1}} onClick= {clickHanlder} >
              Get Started
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
