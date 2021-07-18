import Index from "views/Dashboard";
import Placement from 'views/examples/Placement'
import Internship from 'views/examples/Internship'
import Profile from "views/examples/Profile.js";
import Maps from "views/examples/Maps.js";
import Register from "views/examples/Register.js";
import Login from "views/examples/Login.js";

import AdminInternship from 'views/AdminComponent/Internship'
import AdminPlacement from 'views/AdminComponent/Placement'

var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin",
  },
  {
    path: "/placement",
    name: "Placement",
    icon: "ni ni-tv-2 text-primary",
    component: Placement,
    layout: "/admin",
  },
  {
    path: "/internship",
    name: "Internship",
    icon: "ni ni-tv-2 text-primary",
    component: Internship,
    layout: "/admin",
  },
  // {
  //   path: "/admin/placement",
  //   name: "Admin Placement",
  //   icon: "ni ni-tv-2 text-primary",
  //   component: AdminPlacement,
  //   layout: "/admin",
  // },
  // {
  //   path: "/admin/internship",
  //   name: "Admin Internship",
  //   icon: "ni ni-tv-2 text-primary",
  //   component: AdminInternship,
  //   layout: "/admin",
  // },
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/auth",
  },
  {
    path: "/register",
    name: "Register",
    icon: "ni ni-circle-08 text-pink",
    component: Register,
    layout: "/auth",
  },
  {
    path: "/user-profile",
    name: "User Profile",
    icon: "ni ni-single-02 text-yellow",
    component: Profile,
    layout: "/admin",
  },

];
export default routes;
