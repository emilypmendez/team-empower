import Dashboard from "views/Dashboard.js";
import UserProfile from "views/UserProfile.js";
import BK4 from "views/BK4.js";
import BK14 from "views/BK14.js";
import Typography from "views/Typography.js";
import Icons from "views/Icons.js";
import Maps from "views/Maps.js";
import Notifications from "views/Notifications.js";
import Upgrade from "views/Upgrade.js";

const dashboardRoutes = [
  {
    upgrade: true,
    path: "/upgrade",
    name: "Upgrade to PRO",
    icon: "nc-icon nc-alien-33",
    component: Upgrade,
    layout: "/admin",
    invisible: true
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-chart-pie-35",
    component: Dashboard,
    layout: "/admin",
    invisible: false
  },
  {
    path: "/user",
    name: "User Profile",
    icon: "nc-icon nc-circle-09",
    component: UserProfile,
    layout: "/admin",
    invisible: true
  },
  {
    path: "/cb4",
    name: "Community Board: 4",
    icon: "nc-icon nc-notes",
    component: BK4,
    layout: "/admin",
    invisible: false
  },
  {
    path: "/cb14",
    name: "Community Board: 14",
    icon: "nc-icon nc-paper-2",
    component: BK14,
    layout: "/admin",
    invisible: false
  },
  {
    path: "/typography",
    name: "Typography",
    icon: "nc-icon nc-paper-2",
    component: Typography,
    layout: "/admin",
    invisible: true
  },
  {
    path: "/icons",
    name: "Icons",
    icon: "nc-icon nc-atom",
    component: Icons,
    layout: "/admin",
    invisible: true
  },
  {
    path: "/maps",
    name: "Maps",
    icon: "nc-icon nc-pin-3",
    component: Maps,
    layout: "/admin",
    invisible: false
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: "nc-icon nc-bell-55",
    component: Notifications,
    layout: "/admin",
    invisible: false
  }
];

export default dashboardRoutes;
