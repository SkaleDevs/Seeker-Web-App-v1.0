// **React Imports
import React, { useState, useEffect, useMemo } from "react";
import { getSession } from "next-auth/react";
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

// ** Custom Components Imports

import Dropdown from "src/views/schemes/Dropdown";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

import ViewDetails from "../../../views/modal/ViewDetailsIndividual";
import { getSession } from "next-auth/react";

const FundingSchemes = () => {
  // const [rowData, setRowData] = useState();
  const viewButton = (p) => <ViewDetails />;

  const rowData = [
    {
      schemeName: "PG Indira Gandhi Scholarship for Single Girl Child",
      schemeEndDate: "End Date 1",
      schemeDefectiveApplicationVerification: "Duration 1",
      applicantVerification: "Verfiication Duration 1",
      viewApplication: "Button", //pass the id of the application to the view application page
    },
    {
      schemeName: "Scheme 2",
      schemeEndDate: "End Date 2",
      schemeDefectiveApplicationVerification: "Duration 2",
      applicantVerification: "Verfiication Duration 2",
      viewApplication: "Button",
    },
    {
      schemeName: "Scheme 3",
      schemeEndDate: "End Date 3",
      schemeDefectiveApplicationVerification: "Duration 3",
      applicantVerification: "Verfiication Duration 3",
      viewApplication: "Button",
    },
    {
      schemeName: "Scheme 4",
      schemeEndDate: "End Date 4",
      schemeDefectiveApplicationVerification: "Duration 4",
      applicantVerification: "Verfiication Duration 4",
      viewApplication: "Button",
    },
    {
      schemeName: "Scheme 5",
      schemeEndDate: "End Date 5",
      schemeDefectiveApplicationVerification: "Duration 5",
      applicantVerification: "Verfiication Duration 5",
      viewApplication: "Button",
    },
    {
      schemeName: "Scheme 6",
      schemeEndDate: "End Date 6",
      schemeDefectiveApplicationVerification: "Duration 6",
      applicantVerification: "Verfiication Duration 6",
      viewApplication: "Button",
    },
    {
      schemeName: "Scheme 7",
      schemeEndDate: "End Date 7",
      schemeDefectiveApplicationVerification: "Duration 7",
      applicantVerification: "Verfiication Duration 7",
      viewApplication: "Button",
    },
    {
      schemeName: "Scheme 8",
      schemeEndDate: "End Date 8",
      schemeDefectiveApplicationVerification: "Duration 8",
      applicantVerification: "Verfiication Duration 8",
      viewApplication: "Button",
    },
    {
      schemeName: "Scheme 9",
      schemeEndDate: "End Date 9",
      schemeDefectiveApplicationVerification: "Duration 9",
      applicantVerification: "Verfiication Duration 9",
      viewApplication: "Button",
    },
    {
      schemeName: "Scheme 10",
      schemeEndDate: "End Date 10",
      schemeDefectiveApplicationVerification: "Duration 10",
      applicantVerification: "Verfiication Duration 10",
      viewApplication: "Button",
    },
    {
      schemeName: "Scheme 11",
      schemeEndDate: "End Date 11",
      schemeDefectiveApplicationVerification: "Duration 11",
      applicantVerification: "Verfiication Duration 11",
      viewApplication: "Button",
    },
    {
      schemeName: "Scheme 12",
      schemeEndDate: "End Date 12",
      schemeDefectiveApplicationVerification: "Duration 12",
      applicantVerification: "Verfiication Duration 12",
      viewApplication: "Button",
    },
    {
      schemeName: "Scheme 13",
      schemeEndDate: "End Date 13",
      schemeDefectiveApplicationVerification: "Duration 13",
      applicantVerification: "Verfiication Duration 13",
      viewApplication: "Button",
    },
  ];

  const [columnDefs, setColumnDefs] = useState([
    {
      field: "schemeName",
      headerName: "Scheme Name",
      width: 300,
    },
    { field: "schemeEndDate", headerName: "Scheme Closing Date", width: 200 },
    {
      field: "schemeDefectiveApplicationVerification",
      headerName: "Defective Application Verification Date",
      width: 310,
    },
    {
      field: "applicantVerification",
      headerName: "Applicant Verification",
      width: 250,
    },
    {
      field: "viewApplication",
      headerName: "View Application",
      width: 170,
      cellRenderer: viewButton,
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
          <CardHeader title="Funding Schemes" />
          <CardContent sx={{ width: "100%" }}>
            <Typography variant="caption">
              ( Click on the column header to sort, hover over the column header
              to see the filter options )
            </Typography>
            <TabContext value={value}>
              <Box
                sx={{
                  width: "100%",
                  bgcolor: "background.paper",
                  marginTop: "2rem",
                  borderBottom: 1,
                  borderColor: "divider",
                }}
              >
                <TabList
                  value={value}
                  onChange={handleChange}
                  variant="scrollable"
                  allowScrollButtonsMobile
                >
                  <Tab label="Central Schemes" value="0" />
                  <Tab label="UGC/AICTE Schemes" value="1" />
                  <Tab label="State Schemes" value="2" />
                </TabList>
              </Box>
              <TabPanel value="0" sx={{ overflow: "auto", width: "100%" }}>
                <Dropdown authority="Ministry of Minority Affairs">
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
                      rowData={rowData} // Row Data for Rows
                      columnDefs={columnDefs} // Column Defs for Columns
                      defaultColDef={defaultColDef} // Default Column Properties
                      animateRows={true} // Optional - set to 'true' to have rows animate when sorted
                      rowSelection="multiple" // Options - allows click selection of rows
                      pagination={true}
                      paginationPageSize={10} // Pagination Page Size
                    />
                  </div>
                </Dropdown>
              </TabPanel>
              <TabPanel value="1">
                <Dropdown authority="University Grants Commission - MHRD">
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
                      rowData={rowData} // Row Data for Rows
                      columnDefs={columnDefs} // Column Defs for Columns
                      defaultColDef={defaultColDef} // Default Column Properties
                      animateRows={true} // Optional - set to 'true' to have rows animate when sorted
                      rowSelection="multiple" // Options - allows click selection of rows
                      pagination={true}
                      paginationPageSize={10} // Pagination Page Size
                    />
                  </div>
                </Dropdown>
              </TabPanel>
              <TabPanel value="2">
                <Dropdown authority="Karnataka">
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
                      rowData={rowData} // Row Data for Rows
                      columnDefs={columnDefs} // Column Defs for Columns
                      defaultColDef={defaultColDef} // Default Column Properties
                      animateRows={true} // Optional - set to 'true' to have rows animate when sorted
                      rowSelection="multiple" // Options - allows click selection of rows
                      pagination={true}
                      paginationPageSize={10} // Pagination Page Size
                    />
                  </div>
                </Dropdown>
              </TabPanel>
            </TabContext>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default FundingSchemes;

export async function getServerSideProps(context) {
  console.log("RFWfr")
  const sess= await getSession(context);

const allCentralScheme = await fetch(`http://localhost:3000/api/controller/getAllSeekerScholarship`)
.then(res => res.json())

const allUGCSch = await fetch(`http://localhost:3000/api/controller/getAllInstituteScholarship`)
.then(res => res.json())
// .then(data => {
const allSeekerApplications = await fetch(`http://localhost:3000/api/controller/agency/getStructuredData`)
.then(res => res.json())
const allInstituteApplications = await fetch(`http://localhost:3000/api/controller/agency/getStructuredData1`)
.then(res => res.json())


  
  console.log("ok",allSeekerApplications)
  return {
    props: {
        allUGCSch,
        allCentralScheme,
        allSeekerApplications,
        allInstituteApplications
    },
  };
}
