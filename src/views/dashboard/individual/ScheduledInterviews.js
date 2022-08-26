import Image from 'next/image';
// ** MUI Imports
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";

// ** Icons Imports
// import MenuUp from "mdi-material-ui/MenuUp";
// import DotsVertical from "mdi-material-ui/DotsVertical";

const data = [
  {
    progress: 75,
    imgHeight: 20,
    title: "PG Indira Gandhi Scholarship for Single Girl Child",
    color: "primary",
    // amount: "DEC 06, 04:30 PM",
    subtitle: "UGC/AICTE",
    imgSrc: "/images/logos/scholarship.png",
  },
  {
    progress: 50,
    color: "info",
    imgHeight: 27,
    title: "Pre Matric Scholarships Scheme for Minorities",
    // amount: "Nov 25, 07:30 PM",
    subtitle: "Central Govt.",
    imgSrc: "/images/logos/scholarship.png",
  },
  {
    progress: 20,
    imgHeight: 20,
    title: "The Prime Minister Narendra Modi Scholarship Scheme",
    color: "secondary",
    // amount: "NOV 31, 8:00 PM", 
    subtitle: "UGC/AICTE",
    imgSrc: "/images/cards/logo-aviato.png",
  },
];

const ScheduledInterviews = () => {
  return (
    <Card sx={{ height: "19.5rem", overflow: "auto" }}>
      <CardHeader
        title="Schemes Relevant to You"
        titleTypographyProps={{
          sx: {
            lineHeight: "1.6 !important",
            letterSpacing: "0.15px !important",
          },
        }}
      />
      <CardContent sx={{ pt: (theme) => `${theme.spacing(2.25)} !important` }}>
        {data.map((item, index) => {
          return (
            <Box
              key={item.title}
              sx={{
                display: "flex",
                alignItems: "center",
                ...(index !== data.length - 1 ? { mb: 8.5 } : {}),
              }}
            >
              <Avatar
                variant="rounded"
                sx={{
                  mr: 3,
                  width: 40,
                  height: 40,
                  backgroundColor: (theme) =>
                    `rgba(${theme.palette.customColors.main}, 0.04)`,
                }}
              >
                <Image
                  src={item.imgSrc}
                  alt={item.title}
                  height={item.imgHeight}
                  width={item.imgHeight}
                />
              </Avatar>
              <Box
                sx={{
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
                  <Typography
                    variant="body2"
                    sx={{ mb: 0.5, fontWeight: 600, color: "text.primary" }}
                  >
                    {item.title}
                  </Typography>
                  <Typography variant="caption">{item.subtitle}</Typography>
                </Box>
                <Box
                  sx={{
                    minWidth: 85,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{ mb: 2, fontWeight: 600, color: "text.primary" }}
                  >
                    {item.amount}
                  </Typography>
                </Box>
              </Box>
            </Box>
          );
        })}
      </CardContent>
    </Card>
  );
};

export default ScheduledInterviews;
