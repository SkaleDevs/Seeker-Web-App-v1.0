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

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

// ** AG Grid Imports
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import { TabContext, TabList, TabPanel } from "@mui/lab";

const ScheduledInterviews = ({getCentralSchemes,getUGCSchemes,getStateSchemes}) => {
  // const [rowData, setRowData] = useState();
  const viewButton = (p) => (
    <Button
      variant="contained"
      color="success"
      size="small"
      startIcon={<FontAwesomeIcon icon={faEye} size="xs" />}
      href={`/schemes/${p.data.id}`}
    >
      View
    </Button>
  );

  const meetButton = (p) => (
    <Button
      variant="contained"
      color="primary"
      size="small"
      startIcon={<FontAwesomeIcon icon={faEye} size="xs" />}
      href={`/schemes/${p.data.id}`}
    >
      Meet
    </Button>
  );

  const rowData = [
    {
      schemeName: "Scheme 1",
      schemeOrganisation: "Organisation 1",
      interviewDateTime: "Date 1",
      interviewLink: "Link",
      viewApplication: "Button", //pass the id of the application to the view application page
    },
    {
      schemeName: "Scheme 2",
      schemeOrganisation: "Organisation 2",
      interviewDateTime: "Date 2",
      interviewLink: "Link",
      viewApplication: "Button",
    },
    {
      schemeName: "Scheme 3",
      schemeOrganisation: "Organisation 3",
      interviewDateTime: "Date 3",
      interviewLink: "Link",
      viewApplication: "Button",
    },
    {
      schemeName: "Scheme 4",
      schemeOrganisation: "Organisation 4",
      interviewDateTime: "Date 4",
      interviewLink: "Link",
      viewApplication: "Button",
    },
    {
      schemeName: "Scheme 5",
      schemeOrganisation: "Organisation 5",
      interviewDateTime: "Date 5",
      interviewLink: "Link",
      viewApplication: "Button",
    },
    {
      schemeName: "Scheme 6",
      schemeOrganisation: "Organisation 6",
      interviewDateTime: "Date 6",
      interviewLink: "Link",
      viewApplication: "Button",
    },
  ];

  const [columnDefs, setColumnDefs] = useState([
    {
      field: "schemeName",
      headerName: "Scheme Name",
      width: 280,
    },
    {
      field: "schemeOrganisation",
      headerName: "Host Organisation",
      width: 280,
    },
    {
      field: "interviewDateTime",
      headerName: "Interview Date/Time",
      width: 250,
    },
    {
      field: "interviewLink",
      headerName: "Interview Link",
      width: 150,
      cellRenderer: meetButton,
    },
    {
      field: "viewApplication",
      headerName: "View Application",
      width: 180,
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

  //   // Example load data from sever
  //   useEffect(() => {
  //   fetch('https://www.ag-grid.com/example-assets/row-data.json')
  //   .then(result => result.json())
  //   .then(rowData => setRowData(rowData))
  //   }, []);

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
                <div
                  className="ag-theme-alpine"
                  style={{
                    width: "72rem",
                    height: "20rem",
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
                    paginationPageSize={5} // Pagination Page Size
                  />
                </div>
              </TabPanel>
              <TabPanel value="1">Panel 2</TabPanel>
              <TabPanel value="2">Panel 3</TabPanel>
            </TabContext>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default ScheduledInterviews;

export async function getServerSideProps(context) {
  
  const sess= await getSession(context);

const getCentralSchemes = await fetch(`http://localhost:3000/api/controller/getCentralApplication`)
.then(res => res.json())

const getUGCSchemes = await fetch(`http://localhost:3000/api/controller/getUGCApplication`)
.then(res => res.json())
// .then(data => {
const getStateSchemes = await fetch(`http://localhost:3000/api/controller/getStateApplication`)
.then(res => res.json())

  console.log("ok1",getCentralSchemes)
  console.log("ok2",getUGCSchemes)
  console.log("ok3",getStateSchemes)
  return {
    props: {
      getCentralSchemes,getUGCSchemes,getStateSchemes
    },
  };
}