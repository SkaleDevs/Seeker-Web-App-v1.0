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

import WebIcon from "@mui/icons-material/Web";

const role = "funding_agency"; // to be updated using session data
const navigation = () => {
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
        path: "/account-settings",
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
        path: "/account-settings",
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
        path: "/account-settings",
      },
      {
        sectionTitle: "Schemes",
      },
      {
        title: "All Schemes",
        icon: FormatListBulleted,
        path: "/funding_agency/fundingScheme",
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
        path: "/funding_agency/viewApplications",
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
  } else {
    return [
      {
        title: "Login",
        icon: Login,
        path: "/pages/login",
        openInNewTab: true,
      },
    ];
  }
};

export default navigation;
