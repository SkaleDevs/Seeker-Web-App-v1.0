import { useState } from "react";
// ** MUI Imports
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import TabContext from "@mui/lab/TabContext";
import { styled } from "@mui/material/styles";
import MuiTab from "@mui/material/Tab";

// ** Icons Imports
import AccountOutline from "mdi-material-ui/AccountOutline";
import LockOpenOutline from "mdi-material-ui/LockOpenOutline";
import InformationOutline from "mdi-material-ui/InformationOutline";

// ** Demo Tabs Imports
import Appl from "src/views/applications/individual/Appl";
import {getSession} from 'next-auth/react';
import { useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
// ** Third Party Styles Imports
import "react-datepicker/dist/react-datepicker.css";

const Tab = styled(MuiTab)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    minWidth: 100,
  },
  [theme.breakpoints.down("sm")]: {
    minWidth: 67,
  },
}));

const TabName = styled("span")(({ theme }) => ({
  lineHeight: 1.71,
  fontSize: "0.875rem",
  marginLeft: theme.spacing(2.4),
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const Application = ({sess}) => {
  const [data, setData] = useState();
  const rtr = useRouter();
  const { sch } = rtr.query


  useEffect(() => {
    if(sess?.user?.role!=="individual" && sess?.user?.role!=="funding_agency") {
      rtr.push(`/${sess?.user?.role}`);
    }
    const fetch =async()=>{

      let r  =await axios.post(`/api/controller/seeker/getSeekerInfo`)
      console.log(r)
      setData(r.data);
    }
    fetch();
    
  },[])
  const [value, setValue] = useState("apply");
  if (sess?.status=="loading") return <div>Loading...</div>;
 
  // ** State
  

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Card>
      <TabContext value={value}>
        <TabList
          onChange={handleChange}
          aria-label="apply tabs"
          sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
        >
         
         
          <Tab
            value="apply"
            label={
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <InformationOutline />
                <TabName>Application</TabName>
              </Box>
            }
          />
        </TabList>
        <TabPanel sx={{ p: 0 }} value="apply">
          <Appl session={sess} user= {data} scholarshipID= {sch} />
        </TabPanel>
      </TabContext>
    </Card>
  );
};

export default Application;

export async function getServerSideProps(context) {
  const sess= await getSession(context);
  return {
    props: {
        sess:sess
    },
  };
}
