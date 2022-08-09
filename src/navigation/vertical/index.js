// ** Icon imports
import {
  FormSelect,
  HomeOutline,
  AccountCogOutline,
  ViewList,
  Table,
  PlaylistPlus,
  FormatListBulleted,
  CalendarClock,
  PlaylistCheck,
} from "mdi-material-ui";

const role = "individual"; // to be updated using session data
const navigation = () => {
  if (role === "individual") {
    return [
      // **-----------------------------Individual Navs------------------------------**
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
        path: "/individual/account-settings",
      },
      {
        sectionTitle: "Applications",
      },
      {
        title: "Funding Schemes",
        icon: FormatListBulleted,
        path: "/individual/applications",
      },
      {
        title: "Applied",
        icon: PlaylistPlus,
        path: "/individual/applied-applications",
      },
      {
        title: "Shortlisted",
        icon: PlaylistCheck,
        path: "/individual/shortlisted-applications",
      },
      {
        sectionTitle: "Schedule",
      },
      {
        title: "Scheduled Interviews",
        icon: CalendarClock,
        path: "/individual/scheduled-interviews",
      },

      // **-----------------------------/Individual Navs------------------------------**
    ];
  } else if (role === "hei") {
    return [
      // {
      //   title: 'Login',
      //   icon: Login,
      //   path: '/pages/login',
      //   openInNewTab: true
      // },
      // {
      //   title: 'Register',
      //   icon: AccountPlusOutline,
      //   path: '/pages/register',
      //   openInNewTab: true
      // },
      // {
      //   title: 'Error',
      //   icon: AlertCircleOutline,
      //   path: '/pages/error',
      //   openInNewTab: true
      // },
      // {
      //   sectionTitle: 'User Interface'
      // },
      // {
      //   title: 'Typography',
      //   icon: FormatLetterCase,
      //   path: '/typography'
      // },
      // {
      //   title: 'Icons',
      //   path: '/icons',
      //   icon: GoogleCirclesExtended
      // },
      // {
      //   title: 'Cards',
      //   icon: CreditCardOutline,
      //   path: '/cards'
      // },
      // {
      //   title: 'Tables',
      //   icon: Table,
      //   path: '/tables'
      // },
      // {
      //   icon: CubeOutline,
      //   title: 'Form Layouts',
      //   path: '/form-layouts'
      // }
    ];
  } else if (role === "funding_agency") {
    return [
      // {
      //   title: 'Login',
      //   icon: Login,
      //   path: '/pages/login',
      //   openInNewTab: true
      // },
      // {
      //   title: 'Register',
      //   icon: AccountPlusOutline,
      //   path: '/pages/register',
      //   openInNewTab: true
      // },
      // {
      //   title: 'Error',
      //   icon: AlertCircleOutline,
      //   path: '/pages/error',
      //   openInNewTab: true
      // },
      // {
      //   sectionTitle: 'User Interface'
      // },
      // {
      //   title: 'Typography',
      //   icon: FormatLetterCase,
      //   path: '/typography'
      // },
      // {
      //   title: 'Icons',
      //   path: '/icons',
      //   icon: GoogleCirclesExtended
      // },
      // {
      //   title: 'Cards',
      //   icon: CreditCardOutline,
      //   path: '/cards'
      // },
      // {
      //   title: 'Tables',
      //   icon: Table,
      //   path: '/tables'
      // },
      // {
      //   icon: CubeOutline,
      //   title: 'Form Layouts',
      //   path: '/form-layouts'
      // }
    ];
  } else {
    return [
      // {
      //   title: 'Login',
      //   icon: Login,
      //   path: '/pages/login',
      //   openInNewTab: true
      // },
    ];
  }
};

export default navigation;
