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
  CardActions,
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
import axios from "axios"
const Shortlisted = () => {
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

  const rowData = [
    {
      schemeName: "Scheme 1",
      schemeEndDate: "End Date 1",
      viewApplication: "Button", //pass the id of the application to the view application page
    },
    {
      schemeName: "Scheme 2",
      schemeEndDate: "End Date 2",
      viewApplication: "Button",
    },
    {
      schemeName: "Scheme 3",
      schemeEndDate: "End Date 3",
      viewApplication: "Button",
    },
    {
      schemeName: "Scheme 4",
      schemeEndDate: "End Date 4",
      viewApplication: "Button",
    },
    {
      schemeName: "Scheme 5",
      schemeEndDate: "End Date 5",
      viewApplication: "Button",
    },
    {
      schemeName: "Scheme 6",
      schemeEndDate: "End Date 6",
      viewApplication: "Button",
    },
    {
      schemeName: "Scheme 7",
      schemeEndDate: "End Date 7",
      viewApplication: "Button",
    },
    {
      schemeName: "Scheme 8",
      schemeEndDate: "End Date 8",
      viewApplication: "Button",
    },
    {
      schemeName: "Scheme 9",
      schemeEndDate: "End Date 9",
      viewApplication: "Button",
    },
    {
      schemeName: "Scheme 10",
      schemeEndDate: "End Date 10",
      viewApplication: "Button",
    },
    {
      schemeName: "Scheme 11",
      schemeEndDate: "End Date 11",
      viewApplication: "Button",
    },
    {
      schemeName: "Scheme 12",
      schemeEndDate: "End Date 12",
      viewApplication: "Button",
    },
    {
      schemeName: "Scheme 13",
      schemeEndDate: "End Date 13",
      viewApplication: "Button",
    },
  ];

  const [columnDefs, setColumnDefs] = useState([
    {
      field: "schemeName",
      headerName: "Scheme Name",
      width: 350,
    },
    { field: "schemeEndDate", headerName: "Scheme Closing Date", width: 350 },
    {
      field: "viewApplication",
      headerName: "View Application",
      width: 300,
      cellRenderer: viewButton,
    },
  ]);

  // ** For Tabs

  const [value, setValue] = useState("0");
  const [short,setShort]  = useState();

  useEffect(() => {
    const fetch= async()=>{
      let {data}  = await axios.post('http://localhost:3000/api/controller/seeker/getScheduledmeet');
      setShort(data);
      console.log(data);
    }
    fetch();


  },[])
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
                    {/* <AgGridReact
                      rowData={rowData} // Row Data for Rows
                      columnDefs={columnDefs} // Column Defs for Columns
                      defaultColDef={defaultColDef} // Default Column Properties
                      animateRows={true} // Optional - set to 'true' to have rows animate when sorted
                      rowSelection="multiple" // Options - allows click selection of rows
                      pagination={true}
                      paginationPageSize={10} // Pagination Page Size
                    /> */}
                    

                        <Card elevation={12}>
                      <Grid container spacing={5}>
                        <Grid item xs={12} sm={4}>
                          <CardContent>
                            <Typography variant="h6">Scheme Name</Typography>
                          </CardContent>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                          <CardContent>
                            <Typography variant="h6">
                              Scheme Closing Date
                            </Typography>
                          </CardContent>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                          <CardContent>
                            <Typography variant="h6">
                              View Application
                            </Typography>
                          </CardContent>
                        </Grid>
                      </Grid>
                    </Card>
  

{

      short?.map((it,key) =>{
        return(
                    <Box mt={3}>
                    <Card elevation={12} marginTop="10px" >
                      <Grid container spacing={5}>
                        <Grid item xs={12} sm={4}>
                          <CardContent>
                            <Typography fontSize={15}>{it.scholarshipID}</Typography>
                          </CardContent>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                          <CardContent>
                            <Typography fontSize={15}>
                              {it.meetingDate}
                            </Typography>
                          </CardContent>
                        </Grid>

                        <Grid item xs={8} sm={2}>
                          <CardActions>
                            <Button
                              variant="contained"
                              color="primary"
                              size="small"
                              onClick={()=>{window.location.assign(it.scheduledMeeting)}}
                              startIcon={<FontAwesomeIcon icon={faEye} />}
                            >
                              View
                            </Button>
                          </CardActions>
                        </Grid>
                      </Grid>
                    </Card>
                    </Box>
        )})

      }

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

export default Shortlisted;
