// ** Icon imports
import { FormSelect, HomeOutline, AccountCogOutline, Table , FormDropdown, CalendarClock} from "mdi-material-ui";

const navigation = () => {
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
      path: "/account-settings",
    },
    {
      sectionTitle: "Applications",
    },
    {
      title: "All Applications",
      icon: FormSelect,
      path: "/applications",
    },
    {
      title: "Applied",
      icon: FormDropdown,
      path: "/applied-applications",
    },
    {
      title: "Shortlisted",
      icon: Table,
      path: "/shortlisted-applications",
    },
    {
      sectionTitle: "Schedule",
    },
    {
      title: "Scheduled Interviews",
      icon: CalendarClock,
      path: "/scheduled-interviews",
    },

    // **-----------------------------/Individual Navs------------------------------**
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
};

export default navigation;
