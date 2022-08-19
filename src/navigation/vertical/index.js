// ** Icon imports
import {
  HomeOutline,
  AccountCogOutline,
  Table,
  PlaylistPlus,
  FormatListBulleted,
  CalendarClock,
  PlaylistCheck,
} from "mdi-material-ui";
import { useEffect } from "react";
import {getSession} from "next-auth/react"

import WebIcon from "@mui/icons-material/Web";
import { PersonAddOutlined, PeopleOutline } from "@mui/icons-material";

const role = "funding_agency"; // to be updated using session data
const navigation = () => {


  useEffect(() => {
    const fetch = async()=>{
      const  data =await getSession();
      console.log(data.role);
      console.log(data);
    }
    fetch();


  },[])

  // console.log(data);



  if (role === "individual") {
    return [
      // **-----------------------------Individual Navs-------------------------------**
      {
        sectionTitle: "Home",
      },
      {
        title: "Dashboard",
        icon: HomeOutline,
        path: "/individual",
      },
      {
        title: "Account Settings",
        icon: AccountCogOutline,
        path: "/individual/accountSettings",
      },
      {
        sectionTitle: "Applications",
      },
      {
        title: "Funding Schemes",
        icon: FormatListBulleted,
        path: "/individual/fundingSchemes",
      },
      {
        title: "Applied",
        icon: PlaylistPlus,
        path: "/individual/applied",
      },
      {
        title: "Shortlisted",
        icon: PlaylistCheck,
        path: "/individual/shortlisted",
      },
      {
        sectionTitle: "Schedule",
      },
      {
        title: "Scheduled Interviews",
        icon: CalendarClock,
        path: "/individual/scheduledInterviews",
      },

      // **-----------------------------/Individual Navs------------------------------**
    ];
  } else if (role === "hei") {
    return [
      {
        sectionTitle: "Home",
      },
      {
        title: "Dashboard",
        icon: HomeOutline,
        path: "/hei",
      },
      {
        title: "Account Settings",
        icon: AccountCogOutline,
        path: "/hei/accountSettings", // to be updated
      },
      {
        sectionTitle: "Applications",
      },
      {
        title: "Funding Schemes",
        icon: FormatListBulleted,
        path: "/hei/fundingSchemes",
      },
      {
        title: "Applied",
        icon: PlaylistPlus,
        path: "/hei/applied",
      },
      {
        title: "Shortlisted",
        icon: PlaylistCheck,
        path: "/hei/shortlisted",
      },
      {
        sectionTitle: "Schedule",
      },
      {
        title: "Scheduled Interviews",
        icon: CalendarClock,
        path: "/hei/scheduledInterviews",
      },
    ];
  } else if (role === "funding_agency") {
    return [
      {
        sectionTitle: "Home",
      },
      {
        title: "Dashboard",
        icon: HomeOutline,
        path: "/funding_agency",
      },
      {
        title: "Account Settings",
        icon: AccountCogOutline,
        path: "/funding_agency/accountSettings", // to be updated
      },
      {
        sectionTitle: "Schemes",
      },
      {
        title: "All Schemes",
        icon: FormatListBulleted,
        path: "/funding_agency/fundingSchemes",
      },
      {
        title: "Create Scheme",
        icon: PlaylistPlus,
        path: "/funding_agency/createScheme",
      },
      {
        sectionTitle: "Applications",
      },
      {
        title: "View Applications",
        icon: WebIcon,
        path: "/funding_agency/applications",
      },
      {
        sectionTitle: "Schedule",
      },
      {
        title: "Scheduled Interviews",
        icon: CalendarClock,
        path: "/funding_agency/scheduledInterviews",
      },
    ];
  } else if (role === "moderator") {
    return [
      {
        sectionTitle: "Home",
      },
      {
        title: "Dashboard",
        icon: HomeOutline,
        path: "/moderator",
      },
      {
        title: "Account Settings",
        icon: AccountCogOutline,
        path: "/moderato/accountSettings", // to be updated
      },
      {
        sectionTitle: "Registration Applications",
      },
      {
        title: "View Applications",
        icon: WebIcon,
        path: "/moderator/registrationApplications", // to be updated
      },
      {
        sectionTitle: "Moderation",
      },
      {
        title: "Add Moderator",
        icon: PersonAddOutlined,
        path: "/moderator/addModerator", // to be updated
      },
      {
        title: "All Users",
        icon: PeopleOutline,
        path: "/moderator/allUsers", // to be updated
      },
    ];
  }
};

export default navigation;
