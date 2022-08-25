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

const ViewApplications = () => {
  // const [rowData, setRowData] = useState();
  const viewButton = (p) => (
    <Button
      variant="contained"
      color="secondary"
      size="small"
      startIcon={<FontAwesomeIcon icon={faEye} size="xs" />}
      href={`/schemes/${p.data.id}`}
    >
      View
    </Button>
  );

  const docsButton = (p) => (
    <Button
      variant="contained"
      color="secondary"
      size="small"
      startIcon={<FontAwesomeIcon icon={faEye} size="xs" />}
      href={`/schemes/${p.data.id}`}
    >
      View
    </Button>
  );

  const verifyButton = (p) => (
    <Button
      variant="contained"
      color="success"
      size="small"
      // startIcon={<FontAwesomeIcon icon={faEye} size="xs" />}
      href={`/schemes/${p.data.id}`}
    >
      Verify
    </Button>
  );

  const rejectButton = (p) => (
    <Button
      variant="contained"
      color="error"
      size="small"
      // startIcon={<FontAwesomeIcon icon={faEye} size="xs" />}
      href={`/schemes/${p.data.id}`}
    >
      Reject
    </Button>
  );

  const rowData = [
    {
      name: "Bangalore Institute of Technology",
      viewApplication: "Button",
      viewDocs: "Button",
      verify: "Button",
      reject: "Button",
      //pass the id of the application to the view application page
    },
  ];

  const [columnDefs, setColumnDefs] = useState([
    {
      field: "name",
      headerName: "Name",
      width: 300,
    },
    {
      field: "viewApplication",
      headerName: "View Application",
      width: 220,
      cellRenderer: viewButton,
    },
    {
      field: "viewDocs",
      headerName: "View Documents",
      width: 220,
      cellRenderer: docsButton,
    },
    {
      field: "verify",
      headerName: "Verify",
      width: 180,
      cellRenderer: verifyButton,
    },
    {
      field: "reject",
      headerName: "Reject",
      width: 180,
      cellRenderer: rejectButton,
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
          <CardHeader title="All Applications" />
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
                  <Tab label="HEI" value="0" />
                  <Tab label="Funding Agencies" value="1" />
                </TabList>
              </Box>
              <TabPanel value="0" sx={{ overflow: "auto", width: "100%" }}>
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
              </TabPanel>
            </TabContext>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default ViewApplications;
