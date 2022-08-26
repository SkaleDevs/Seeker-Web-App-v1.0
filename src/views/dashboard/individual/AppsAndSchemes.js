import Image from 'next/image';
// ** MUI Imports
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import { styled } from "@mui/material/styles";
import Chip from '@mui/material/Chip'
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import MuiDivider from "@mui/material/Divider";

const applications = [
  {
    logoWidth: 38,
    logoHeight: 38,
    status: 'approved',
    title: "The Prime Minister Narendra Modi Scholarship Scheme",
    subtitle: "UGC",
    logo: "/images/logos/mastercard-label.png",
  },
  {
    logoWidth: 28,
    logoHeight: 29,
    status: 'pending',
    subtitle: "UGC/AICTE",
    title: "PG Indira Gandhi Scholarship for Single Girl Child",
    logo: "/images/logos/gumroad.png",
  },

  {
    logoWidth: 20,
    logoHeight: 28,
    status: 'rejected',
    title: "Stripe Account",
    subtitle: "iOS Application",
    logo: "/images/logos/stripe.png",
  },
  {
    logoWidth: 34,
    logoHeight: 32,
    status: 'approved',
    title: "American Bank",
    subtitle: "Bank Transfer",
    logo: "/images/logos/american-bank.png",
  },
  {
    logoWidth: 33,
    logoHeight: 22,
    status: 'pending',
    title: "Bank Account",
    subtitle: "Wallet deposit",
    logo: "/images/logos/gumroad.png",
  },
];

const schemes = [
  {
    logoWidth: 29,
    logoHeight: 30,
    amount: "",
    title: "Pre Matric Scholarships Scheme for Minorities",
    subtitle: "Central Govt",
    logo: "/images/logos/american-bank.png",
  },
  {
    logoWidth: 40,
    logoHeight: 38,
    amount: "",
    title: "Github Enterprise",
    logo: "/images/logos/scholarship.png",
    subtitle: "Security & compliance",
  },
  {
    logoWidth: 30,
    logoHeight: 30,
    amount: "",
    title: "Upgrade Slack Plan",
    subtitle: "Debit card deposit",
    logo: "/images/logos/slack.png",
  },
  {
    logoWidth: 30,
    logoHeight: 30,
    amount: "",
    title: "Sir Ratan Tata Trust & Navajbai Ratan Tata Trust Education Grants",
    subtitle: " Masters, PhD, Conferences & Travel Grants",
    logo: "/images/logos/digital-ocean.png",
  },
  {
    logoWidth: 20,
    logoHeight:26,
    amount: "",
    title: "Sanskriti Foundation's Kalakriti Fellowship",
    logo: "/images/logos/stripe.png",
    subtitle: "Indian Classical Dance",
  },
];
const statusObj = {
  approved: { color: 'success' },
  rejected: { color: 'error' },
  pending: { color: 'warning' }
  
}

// Styled Divider component
const Divider = styled(MuiDivider)(({ theme }) => ({
  margin: theme.spacing(5, 0),
  borderRight: `1px solid ${theme.palette.divider}`,
  [theme.breakpoints.down("md")]: {
    borderRight: "none",
    margin: theme.spacing(0, 5),
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
}));

const AppsAndSchemes = () => {
  return (
    <Card
      sx={{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: ["column", "column", "row"],
      }}
    >
      <Box sx={{ width: "100%" }}>
        <CardHeader
          title="Recent Applications"
          sx={{
            pt: 5.5,
            alignItems: "center",
            "& .MuiCardHeader-action": { mt: 0.6 },
          }}
          
          titleTypographyProps={{
            variant: "h6",
            sx: {
              lineHeight: "1.6 !important",
              letterSpacing: "0.15px !important",
            },
          }}
        />
        <CardContent sx={{ pb: (theme) => `${theme.spacing(5.5)} !important` }}>
          {applications.map((item, index) => {
            return (
              <Box
                key={item.title}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mb: index !== applications.length - 1 ? 6 : 0,
                }}
              >
                <Box
                  sx={{
                    minWidth: 38,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Image
                    src={item.logo}
                    alt={item.title}
                    width={item.logoWidth}
                    height={item.logoHeight}
                  />
                </Box>
                <Box
                  sx={{
                    ml: 4,
                    width: "100%",
                    display: "flex",
                    flexWrap: "wrap",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Box
                    sx={{
                      marginRight: 2,
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Typography sx={{ fontWeight: 600, fontSize: "0.875rem" }}>
                      {item.title}
                    </Typography>
                    <Typography variant="caption">{item.subtitle}</Typography>
                  </Box>
                  <Typography
                    variant="subtitle2"
                    sx={{ fontWeight: 600, color: "success.main" }}
                  >
                     <Chip
                    label={item.status}
                    color={statusObj[item.status].color}
                    sx={{
                      height: 24,
                      fontSize: '0.75rem',
                      textTransform: 'capitalize',
                      '& .MuiChip-label': { fontWeight: 500 }
                    }}
                  />
                    
                  </Typography>
                </Box>
              </Box>
            );
          })}
        </CardContent>
      </Box>

      <Divider flexItem />

      <Box sx={{ width: "100%" }}>
        <CardHeader
          // title="Top Schemes"
          sx={{
            pt: 5.5,
            alignItems: "center",
            "& .MuiCardHeader-action": { mt: 0.6 },
          }}
          action={<Typography variant="caption">View All</Typography>}
          titleTypographyProps={{
            variant: "h6",
            sx: {
              lineHeight: "1.6 !important",
              letterSpacing: "0.15px !important",
            },
          }}
        />
        <CardContent sx={{ pb: (theme) => `${theme.spacing(5.5)} !important` }}>
          {schemes.map((item, index) => {
            return (
              <Box
                key={item.title}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mb: index !== applications.length - 1 ? 6 : 0,
                }}
              >
                <Box
                  sx={{
                    minWidth: 36,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Image
                    src={item.logo}
                    alt={item.title}
                    width={item.logoWidth}
                    height={item.logoHeight}
                  />
                </Box>
                <Box
                  sx={{
                    ml: 4,
                    width: "100%",
                    display: "flex",
                    flexWrap: "wrap",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Box
                    sx={{
                      marginRight: 2,
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Typography sx={{ fontWeight: 600, fontSize: "0.875rem" }}>
                      {item.title}
                    </Typography>
                    <Typography variant="caption">{item.subtitle}</Typography>
                  </Box>
                  <Typography
                    variant="subtitle2"
                    sx={{ fontWeight: 600, color: "error.main" }}
                  >
                    {item.amount}
                  </Typography>
                </Box>
              </Box>
            );
          })}
        </CardContent>
      </Box>
    </Card>
  );
};

export default AppsAndSchemes;
