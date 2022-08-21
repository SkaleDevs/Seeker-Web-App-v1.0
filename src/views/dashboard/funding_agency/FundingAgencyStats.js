//CSS imports
import classes from '../../../../styles/statsCard.module.css';

// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// ** FA Icons Imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile, faCircleCheck, faPause, faXmark  } from '@fortawesome/free-solid-svg-icons'

// Icon Declarations

const applicationIcon = <FontAwesomeIcon icon={faFile} size='lg' />
const approvedIcon = <FontAwesomeIcon icon={faCircleCheck} size='lg' />
const pendingIcon = <FontAwesomeIcon icon= { faPause } size='lg' />
const rejectedIcon = <FontAwesomeIcon icon= { faXmark } size='lg' />

//sales data

const salesData = [
  {
    stats: '20',
    title: 'Schemes',
    color: 'info',
    icon: applicationIcon,
  },
  {
    stats: '10',
    title: 'Funded',
    color: 'success',
    icon: approvedIcon
  },
  {
    stats: '10',
    title: 'Applicants',
    color: 'success',
    icon: approvedIcon
  },
  {
    stats: 'Rs. 3 Lacs',
    title: 'Amount Funded',
    color: 'warning',
    icon: pendingIcon
  }
]

const renderStats = () => {
  // Cards

  return salesData.map((item, index) => (
    <Grid item xs={12} md={3} key={index} >
      <div className={classes.neum} key={index}>
        <Box
          key={index}
          sx={{ display: "flex", alignItems: "center", paddingY: "1rem" }}
        >
          <Avatar
            variant="rounded"
            sx={{
              mr: 10,
              ml: -3,
              width: 65,
              height: 65,
              boxShadow: 3,
              color: "common.white",
              backgroundColor: `${item.color}.main`,
            }}
          >
            {item.icon}
          </Avatar>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography variant="body1">{item.title}</Typography>
            <Typography variant="h6">{item.stats}</Typography>
          </Box>
        </Box>
      </div>
    </Grid>
  ));
}

const StatisticsCard = () => {
  return (
    <>
      <CardContent sx={{ pt: theme => `${theme.spacing(3)} !important` }}>
        <Grid container spacing={[5, 12]}>
          {renderStats()}
        </Grid>
      </CardContent>
    </>
  )
}

export default StatisticsCard
