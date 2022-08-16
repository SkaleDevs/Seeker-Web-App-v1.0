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

// ** Custom Components Imports

import Dropdown from "src/views/schemes/Dropdown";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

const Schemes = () => {
  // const [rowData, setRowData] = useState();
  // const viewButton = (
  //   <Button
  //     variant="contained"
  //     color="primary"
  //     size="small"
  //     startIcon={<FontAwesomeIcon icon={faEye} />}
  //   >
  //     View
  //   </Button>
  // );
  const viewButton = p => (
    <Button variant="contained" color="success" size="small" startIcon={<FontAwesomeIcon icon={faEye} size='xs' />} href={`/schemes/${p.data.id}`}>
      View
    </Button>
  );

  const rowData = [
    {
      schemeName: "Scheme 1",
      schemeEndDate: "End Date 1",
      schemeDefectiveApplicationVerification: "Duration 1",
      applicantVerification: "Verfiication Duration 1",
      viewApplication: "Button",
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
      width: 250,
    },
    { field: "schemeEndDate", headerName: "Scheme Closing Date", width: 300 },
    {
      field: "schemeDefectiveApplicationVerification",
      headerName: "Defective Application Verification Date",
      width: 310,
    },
    {
      field: "applicantVerification",
      headerName: "Applicant Verification",
      width: 300,
    },
    { field: "viewApplication", headerName: "View Application", width: 180, cellRenderer: viewButton },
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
              <TabPanel value="1">Panel 2</TabPanel>
              <TabPanel value="2">Panel 3</TabPanel>
            </TabContext>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Schemes;
