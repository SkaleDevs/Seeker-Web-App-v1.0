// ** MUI Imports
import useMediaQuery from '@mui/material/useMediaQuery'

// ** Layout Imports
// !Do not remove this Layout import
import VerticalLayout from 'src/@core/layouts/VerticalLayout'

// ** Navigation Imports
import VerticalNavItems from 'src/navigation/vertical'

// ** Component Import
import VerticalAppBarContent from './components/vertical/AppBarContent'

// ** Hook Import
import { useSettings } from 'src/@core/hooks/useSettings'
import { useSession } from 'next-auth/react'

// ** Routes Import
// ** Icon imports
import {
  HomeOutline,
  AccountCogOutline,
  PlaylistPlus,
  FormatListBulleted,
  CalendarClock,
  PlaylistCheck,
} from "mdi-material-ui";

import WebIcon from "@mui/icons-material/Web";
import { PersonAddOutlined, PeopleOutline } from "@mui/icons-material";



const UserLayout = ({ children }) => {
  // ** Hooks
  const { settings, saveSettings } = useSettings()
  const {data: session} = useSession();
  // const [role, setRole] = useState();
  let role = null;
  const navigation = () =>{
    if(session){
      role = session.user.role;
    }

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
          path: "/moderator/accountSettings", // to be updated
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
  }

  /**
   *  The below variable will hide the current layout menu at given screen size.
   *  The menu will be accessible from the Hamburger icon only (Vertical Overlay Menu).
   *  You can change the screen size from which you want to hide the current layout menu.
   *  Please refer useMediaQuery() hook: https://mui.com/components/use-media-query/,
   *  to know more about what values can be passed to this hook.
   *  ! Do not change this value unless you know what you are doing. It can break the template.
   */
  const hidden = useMediaQuery(theme => theme.breakpoints.down('lg'))

  return (
    <VerticalLayout
      hidden={hidden}
      settings={settings}
      saveSettings={saveSettings}
      verticalNavItems={navigation()} // Navigation Items
      verticalAppBarContent={(
        props // AppBar Content
      ) => (
        <VerticalAppBarContent
          hidden={hidden}
          settings={settings}
          saveSettings={saveSettings}
          toggleNavVisibility={props.toggleNavVisibility}
        />
      )}
    >
      {children}
    </VerticalLayout>
  )
}

export default UserLayout
