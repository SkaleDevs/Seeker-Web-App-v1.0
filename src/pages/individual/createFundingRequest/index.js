import React from "react";
import { useState } from "react";
import axios from "axios";
import {
  Typography,
  Card,
  CardContent,
  CardHeader,
  CardActions,
  Button,
  TextField,
} from "@mui/material";

const Fund = () => {
    const [transactionId, setTransactionId] = useState();

    const submitHandler = async (e) =>{
        try{
            console.log(transactionId);
            let a = await axios.post("/api/controller/seeker/addContractId/",{contractID:transactionId});
        }catch(e){
            console.log(e);
        }

    }

  return (
    <>
      <Card>
        <form>
        <CardContent>
          <Typography variant="h5" color="primary" sx={{ color: "black" }}>
            Funding
          </Typography>
          <Typography variant="body2" gutterBottom>
            Click here to create a new funding request
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            href="http://localhost:3001/campaigns/new/"
            variant="outlined"
            target="_blank"
          >
            Raise Fund
          </Button>
        </CardActions>
        <CardContent>
          <TextField
            fullWidth
            placeholder="Add the contract ID ( the last one from EthTransfer website )"
            label="Contract ID"
            value={transactionId}
            onChange={(e) => setTransactionId(e.target.value)}
          />
        </CardContent>
        <CardActions>
          <Button variant="outlined" onClick={submitHandler} >Submit</Button>
        </CardActions>
      </form>
      </Card>
    </>
  );
};

export default Fund;
