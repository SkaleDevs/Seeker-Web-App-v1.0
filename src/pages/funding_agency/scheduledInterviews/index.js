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

const ScheduleInterviews = () => {
  const meetButton = (p) => (
    <Button
      variant="contained"
      color="primary"
      size="small"
      // startIcon={<FontAwesomeIcon icon={faEye} size="xs" />}
      href={`/schemes/${p.data.id}`}
    >
      Join Meeting
    </Button>
  );

  const rowData = [
    {
      applicantName: "Rahul Gandhi",
      date: "11/03/2022",
      time: "09:30 PM",
      scheduleMeeting: "Button",
    },
  ];

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
              <TabPanel value="0" sx={{ overflow: "auto", width: "100%" }}>
                <Dropdown authority="PG Indira Gandhi Scholarship for Single Girl Child">
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
            </TabContext>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default ScheduleInterviews;
