// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Avatar from '@mui/material/Avatar'
import CardHeader from '@mui/material/CardHeader'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// ** Icons Imports
import TrendingUp from 'mdi-material-ui/TrendingUp'
import CurrencyUsd from 'mdi-material-ui/CurrencyUsd'
import DotsVertical from 'mdi-material-ui/DotsVertical'
import CellphoneLink from 'mdi-material-ui/CellphoneLink'
import AccountOutline from 'mdi-material-ui/AccountOutline'
import CheckCircleIcon from 'mdi-material-ui/CheckCircle';

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
    title: 'Applied',
    color: 'info',
    icon: applicationIcon,
  },
  {
    stats: '10',
    title: 'Approved',
    color: 'success',
    icon: approvedIcon
  },
  {
    stats: '5',
    title: 'Pending',
    color: 'warning',
    icon: pendingIcon
  },
  {
    stats: '5',
    color: 'error',
    title: 'Rejected',
    icon: rejectedIcon
  }
]

const renderStats = () => {
  return salesData.map((item, index) => (
    <Grid item xs={12} sm={3} key={index}>
      <Box key={index} sx={{ display: 'flex', alignItems: 'center' }}>
        <Avatar
          variant='rounded'
          sx={{
            mr: 3,
            width: 44,
            height: 44,
            boxShadow: 3,
            color: 'common.white',
            backgroundColor: `${item.color}.main`
          }}
        >
          {item.icon}
        </Avatar>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography variant='caption'>{item.title}</Typography>
          <Typography variant='h6'>{item.stats}</Typography>
        </Box>
      </Box>
    </Grid>
  ))
}

const StatisticsCard = () => {
  return (
    <Card>
      <CardHeader
        title='Statistics Card'
        action={
          <IconButton size='small' aria-label='settings' className='card-more-options' sx={{ color: 'text.secondary' }}>
            <DotsVertical />
          </IconButton>
        }
        subheader={
          <Typography variant='body2'>
            <Box component='span' sx={{ fontWeight: 600, color: 'text.primary' }}>
              Total 48.5% growth
            </Box>{' '}
            😎 this month
          </Typography>
        }
        titleTypographyProps={{
          sx: {
            mb: 2.5,
            lineHeight: '2rem !important',
            letterSpacing: '0.15px !important'
          }
        }}
      />
      <CardContent sx={{ pt: theme => `${theme.spacing(3)} !important` }}>
        <Grid container spacing={[5, 0]}>
          {renderStats()}
        </Grid>
      </CardContent>
    </Card>
  )
}

export default StatisticsCard
