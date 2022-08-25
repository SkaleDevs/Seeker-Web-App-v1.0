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
import TabInfo from "src/views/account-settings/hei/TabInfo";
import TabAccount from "src/views/account-settings/hei/TabAccount";
import TabSecurity from "src/views/account-settings/hei/TabSecurity";
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

  const AccountSettings = ({sess}) => {

    const rtr = useRouter();
    useEffect(() => {
      if(sess?.user?.role!=="hei") {
        rtr.push(`/${sess?.user?.role}`);
        
      }
  
    },[])
    const [value, setValue] = useState("account");
    const [user, setUser] = useState({});
    useEffect(() => {
  
      const fetch= async () =>{
        await axios.get(`/api/controller/institute/getInstituteInfo`).then((res) => {
          setUser(res.data);
          console.log(res.data);
          
        }).catch((err) => {
          console.log(err);
        })
      }
      fetch();
      
    }, []);
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
          aria-label="account-settings tabs"
          sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
        >
          <Tab
            value="account"
            label={
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <AccountOutline />
                <TabName>Account</TabName>
              </Box>
            }
          />
          {/* <Tab
            value="security"
            label={
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <LockOpenOutline />
                <TabName>Security</TabName>
              </Box>
            }
          /> */}
          <Tab
            value="info"
            label={
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <InformationOutline />
                <TabName>Info</TabName>
              </Box>
            }
          />
        </TabList>

        <TabPanel sx={{ p: 0 }} value="account">
          <TabAccount user={user} />
        </TabPanel>
        <TabPanel sx={{ p: 0 }} value="security">
          <TabSecurity />
        </TabPanel>
        <TabPanel sx={{ p: 0 }} value="info">
          <TabInfo  user={user}/>
        </TabPanel>
      </TabContext>
    </Card>
  );
};

export default AccountSettings;

export async function getServerSideProps(context) {
  const sess= await getSession(context);
  return {
    props: {
        sess:sess
    },
  };
}