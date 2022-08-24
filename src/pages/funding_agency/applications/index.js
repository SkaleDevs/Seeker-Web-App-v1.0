// **React Imports
import React, { useState, useEffect, useMemo } from "react";
import axios from 'axios'
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
import { getSession } from "next-auth/react";
// ** Custom Components Imports

import Dropdown from "src/views/schemes/Dropdown";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

import CreateMeeting from "../../../views/modal/CreateMeeting";

const AllApplications = ({ allScholarships,allSeekerApplications,allInstituteApplications}) => {
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

//all variables
let allScholarships;
let allSeekerApplications;
let allInstituteApplications;

//access all my scholarships
const scholarship=async()=>{
  console.log("REW")
  allScholarships=await axios.get(`/api/controller/agency/getScholarship`);
  console.log(allScholarships)
  
}

//access applications within that scholarships
const seekerapplications=async()=>{
  allScholarships.map(async(items)=>{
    console.log(items)
    allSeekerApplications=await axios.post(`/api/controller/agency/getSeekerApplication`,{scholarshipID:"62fb50073bba3442d1df88a8"});
  })
  
}
const insituteapplications=async()=>{
  allScholarships.map(async(items)=>{
 allInstituteApplications= await axios.post(`/api/controller/agency/getInstituteApplication`,{scholarshipID:items._id});
  })
}



//update status
  const accept=async(props)=>{
    await axios.post(`/api/agency/updateStatus`,{type:props.data.amend,status:"accept",id:props.data.accept}).then(data=>{
      if(data){
        window.alert("Accepted")
      }
    }).catch(err=>{
      window.alert("Error")
    })
  }
  const reject=async(props)=>{
    await axios.post(`/api/agency/updateStatus`,{type:props.data.amend,status:"reject",id:props.data.accept}).then(data=>{
      if(data){
        window.alert("Rejected")
      }
    }).catch(err=>{
      window.alert("Error")
    })
  }
  const amend=async(props)=>{
   await axios.post(`/api/agency/updateStatus`,{type:props.data.amend,status:"amend",id:props.data.accept}).then(data=>{
      if(data){
        window.alert("Amended")
      }
    }).catch(err=>{
      window.alert("Error")
    })
  }

  //useEffect
  useEffect(()=>{
    scholarship();
    seekerapplications();
    insituteapplications();
  },[])


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

  const acceptButton = (props) => (
    <Button
      variant="contained"
      color="success"
      size="small"
      // startIcon={<FontAwesomeIcon icon={faEye} size="xs" />}
      //href={`/schemes/${p.data.id}`}
      onClick={()=>accept(props)}
    >
      Accept
    </Button>
  );

  const rejectButton = (props) => (
    <Button
      variant="contained"
      color="error"
      size="small"
      // startIcon={<FontAwesomeIcon icon={faEye} size="xs" />}
      //href={`/schemes/${p.data.id}`}
      onClick={()=>reject(props)}
    >
      Reject
    </Button>
  );

  const amendButton = (props) => (
    <Button
      variant="contained"
      color="warning"
      size="small"
      // startIcon={<FontAwesomeIcon icon={faEye} size="xs" />}
     // href={`/schemes/${p.data.id}`}
      onClick={()=>amend(props)}
    >
      Amend
    </Button>
  );

  const meetButton = () => (
    <Button
      variant="contained"
      color="primary"
      size="small"
      // startIcon={<FontAwesomeIcon icon={faEye} size="xs" />}
    >
      <CreateMeeting />
    </Button>
  );

  const rowData1 = [
    allSeekerApplications.map(item=>{
    return({
      applicantName: `${item.name}`,
      viewApplication: `${item.id}`,
      viewDocs: `${item.id}`,
      accept: `${item.id}`,
      reject: `${item.id}`,
      amend: `individual`,
      scheduleMeeting: "Button",}
    )})
  ];
  const rowData2 = [
     allInstituteApplications.map(item=>{
      return({
        applicantName: `${item.name}`,
        viewApplication: `${item.id}`,
        viewDocs: `${item.id}`,
        accept: `${item.id}`,
        reject: `${item.id}`,
        amend: `hei`,
        scheduleMeeting: "Button",}
      )})
  ];

  const [columnDefs, setColumnDefs] = useState([
    {
      field: "applicantName",
      headerName: "Applicant Name",
      width: 230,
    },
    {
      field: "viewApplication",
      headerName: "View Application",
      width: 170,
      cellRenderer: viewButton,
    },
    {
      field: "otherDocs",
      headerName: "Other Documents",
      width: 170,
      cellRenderer: viewButton,
    },
    {
      field: "accept",
      headerName: "",
      width: 125,
      cellRenderer: acceptButton,
    },
    {
      field: "reject",
      headerName: "Actions",
      width: 125,
      cellRenderer: rejectButton,
    },
    {
      field: "amend",
      headerName: "",
      width: 125,
      cellRenderer: amendButton,
    },
    {
      field: "",
      headerName: "Schedule Meeting",
      width: 170,
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
      resizable: true,
      sortable: true,
      filter: true,
    }),
    []
  );

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Card>
          <CardHeader title="Applications" />
          <CardContent sx={{ width: "100%" }}>
            {/* <Typography variant="caption">
              ( Click on the column header to sort, hover over the column header
              to see the filter options )
            </Typography> */}
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
                  <Tab label="Student" value="0" />
                  <Tab label="Institute" value="1" />
                  {/* <Tab label="State Schemes" value="2" /> */}
                </TabList>
              </Box>
              <TabPanel value="0" sx={{ overflow: "auto", width: "100%" }}>
             { allScholarships?.map(item=>{
               allScholarships.schemeType==="individual" && (<Dropdown authority={item.name}> {/* Scheme name */}
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
                      rowData={rowData1} // Row Data for Rows
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
              { allScholarships?.map(item=>{
               allScholarships.schemeType==="hei" && (
                <Dropdown authority={item.name}>
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
                      rowData={rowData2} // Row Data for Rows
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

export default AllApplications;


