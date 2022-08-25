// **React Imports
import React, { useState, useEffect, useMemo } from "react";

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

// ** AG Grid Imports
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import axios from "axios";
// ** Custom Components Imports

import Dropdown from "src/views/schemes/Dropdown";
import {getSession} from 'next-auth/react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

const ScheduleInterviews = ({ allIndividualScholarships,allHeiScholarships,allSeekerApplications,allInstituteApplications}) => {
  const meetButton = (p) => (
    <Button
      variant="contained"
      color="primary"
      size="small"
      onClick={()=>{
        location.replace(`${p.data.scheduleMeeting}`)
      }}
    >
      Join Meeting
      
    </Button>
  );
   
  const rowData1 = [
    allSeekerApplications.map(item=>{
      console.log("gh",item[0])
      return(item.map(ans=>{
        console.log("mija",ans.firstName)
        return(
          {
          applicantName: `${ans.firstName} ${ans.lastName}`,
          date: `${ans.meetingDate}`,
          time: `${ans.meetingStartTime}`,
          scheduleMeeting: `${ans.scheduledMeeting}`,
        })
      }))
    })
  ];
  const rowData2 = [
    allInstituteApplications.map(item=>{
      console.log("gh",item[0])
      return(item.map(ans=>{
        console.log("mija",ans?.name)
        return(
          {
            applicantName: `${ans.name}`,
            date: `${ans.meetingDate}`,
            time: `${ans.meetingStartTime}`,
            scheduleMeeting: `${ans.scheduledMeeting}`,
        })
      }))
    })
  ];
  
  // const rowData = [
  //   {
  //     applicantName: "Rahul Gandhi",
  //     date: "11/03/2022",
  //     time: "09:30 PM",
  //     scheduleMeeting: "Button",
  //   },
  // ];

  const [columnDefs, setColumnDefs] = useState([
    {
      field: "applicantName",
      headerName: "Applicant Name",
      width: 320,
    },
    {
      field: "date",
      headerName: "Date",
      width: 250,
    },
    {
      field: "time",
      headerName: "Time",
      width: 250,
    },
    {
      field: "",
      headerName: "Schedule Meeting",
      width: 280,
      cellRenderer: meetButton,
    },
  ]);

  // ** For Tabs

  const [value, setValue] = useState("0");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // ** For Tabs End

  const defaultColDef = useMemo(
    () => ({
      sortable: true,
      filter: true,
    }),
    []
  );

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Card>
          <CardHeader title="Scheduled Interviews" />
          <CardContent sx={{ width: "100%" }}>
            {/* <Typography variant="caption">
              ( Click on the column header to sort, hover over the column header
              to see the filter options )
            </Typography> */}
            <TabContext value={value}>
            <TabList
                  value={value}
                  onChange={handleChange}
                  variant="scrollable"
                  allowScrollButtonsMobile
                >
                  <Tab label="Student" value="0" />
                  <Tab label="Institute" value="1" />
                  {/* <Tab label="State Schemes" value="2" /> */}
                </TabList>
              <TabPanel value="0" sx={{ overflow: "auto", width: "100%" }}>
              { allIndividualScholarships?.map((item,val)=>{
              
               
              return(
                <Dropdown authority={item.name} key={val}>
                  <div
                    className="ag-theme-alpine"
                    style={{
                      width: "69.8rem",
                      height: "35rem",
                      marginTop: "1rem",
                      overflow: "auto",
                    }}
                  >
                    <AgGridReact
                      rowData={rowData1[0][val]} // Row Data for Rows
                      columnDefs={columnDefs} // Column Defs for Columns
                      defaultColDef={defaultColDef} // Default Column Properties
                      animateRows={true} // Optional - set to 'true' to have rows animate when sorted
                      rowSelection="multiple" // Options - allows click selection of rows
                      pagination={true}
                      paginationPageSize={10} // Pagination Page Size
                    />
                  </div>
                </Dropdown>)})}
              </TabPanel>
              <TabPanel value="1">
              { allHeiScholarships?.map((item,val)=>{
              //  allScholarships.schemeType==="hei" && (
                return(
                <Dropdown authority={item.name} key={val}>
                  <div
                    className="ag-theme-alpine"
                    style={{
                      width: "69.8rem",
                      height: "35rem",
                      marginTop: "1rem",
                      overflow: "auto",
                    }}
                  >
                    <AgGridReact
                      rowData={rowData2[0][val]} // Row Data for Rows
                      columnDefs={columnDefs} // Column Defs for Columns
                      defaultColDef={defaultColDef} // Default Column Properties
                      animateRows={true} // Optional - set to 'true' to have rows animate when sorted
                      rowSelection="multiple" // Options - allows click selection of rows
                      pagination={true}
                      paginationPageSize={10} // Pagination Page Size
                    />
                  </div>
                </Dropdown>)})}
              </TabPanel>
            </TabContext>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default ScheduleInterviews;

export async function getServerSideProps(context) {
  console.log("RFWfr")
  const sess= await getSession(context);

const allIndividualScholarships = await fetch(`http://localhost:3000/api/controller/getAllSeekerScholarship`)
.then(res => res.json())

const allHeiScholarships = await fetch(`http://localhost:3000/api/controller/getAllInstituteScholarship`)
.then(res => res.json())
// .then(data => {
const allSeekerApplications = await fetch(`http://localhost:3000/api/controller/agency/getStructuredData`)
.then(res => res.json())
const allInstituteApplications = await fetch(`http://localhost:3000/api/controller/agency/getStructuredData1`)
.then(res => res.json())


  
  console.log("ok",allSeekerApplications)
  return {
    props: {
        allIndividualScholarships,
        allHeiScholarships,
        allSeekerApplications,
        allInstituteApplications
    },
  };
}
