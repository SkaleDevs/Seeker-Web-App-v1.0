import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Typography,
  Grid,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import axios from 'axios,;'
const FundRequests = async() => {
// let data=await axios.pos
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Card>
            <Typography variant="h5" sx={{ margin: "2rem", marginY: "auto" }}>
              Fund Requests
            </Typography>
            {/* Data to be mapped  */}
            <Grid item xs={12} sm={6} margin="5rem">
              <Card elevation={2}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={8}>
                    <Typography>Applicant Name</Typography>
                  </Grid>
                  <Grid item xs={8} sm={4}>
                    <CardActions>
                      <Button variant="outlined">View Request</Button>
                    </CardActions>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
            {/* .................................................................................. */}
        </Card>
      </Grid>
    </Grid>
  );
};

export default FundRequests;
