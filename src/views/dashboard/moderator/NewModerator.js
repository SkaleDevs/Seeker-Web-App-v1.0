// ** MUI Imports
import { useTheme } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";

// ** MUI Imports
import {
  Card,
  CardContent,
  CardHeader,
  Grid,
  Typography,
  Box,
  Tab,
  Button,
} from "@mui/material";

// ** Icons Imports
import DotsVertical from "mdi-material-ui/DotsVertical";

// ** Custom Components Imports
import ReactApexcharts from "src/@core/components/react-apexcharts";

// ** Data
const chartData = [
  {
    name: "Applied",
    value: 20,
  },
  {
    name: "Accepted",
    value: 10,
  },
  {
    name: "Rejected",
    value: 5,
  },
  {
    name: "Pending",
    value: 5,
  },
];

const NewModerator = () => {
  // ** Hook
  const theme = useTheme();

  return (
    <Card>
      <CardHeader
        title="Create New Moderator Account"
        titleTypographyProps={{
          sx: {
            lineHeight: "2rem !important",
            letterSpacing: "0.15px !important",
          },
        }}
      />
      <Grid item xs={12} sm={12} sx={{ margin: "10px" }}>
        <TextField
          fullWidth
          label="Email"
          placeholder="abc@example.com"
          // inputProps={{ readOnly: true }}
        />
      </Grid>
      <Grid item xs={12} sx={{ margin: "10px" }}>
        <Button variant="contained" sx={{ marginRight: 3.5 }}>
          Create Account
        </Button>
      </Grid>
    </Card>
  );
};

export default NewModerator;
