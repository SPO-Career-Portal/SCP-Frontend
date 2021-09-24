import Placement from 'views/examples/Placement'
import Internship from 'views/examples/Internship'
import Profile from "views/examples/Profile.js";
import Register from "views/examples/Register.js";
import SetPass from "views/examples/setPassword";
import Login from "views/examples/Login.js";
import ResetPassword from "views/examples/ResetPass";
import AdminInternship from 'views/AdminComponent/Internship'
import AdminPlacement from 'views/AdminComponent/Placement'

var routes = [
  {
    path: "/placement",
    name: "Placement",
    icon: "ni ni-tv-2 text-primary",
    component: Placement,
    layout: "/user",
  },
  {
    path: "/internship",
    name: "Internship",
    icon: "ni ni-tv-2 text-primary",
    component: Internship,
    layout: "/user",
  },
  {
    path: "/placement",
    name: "Admin Placement",
    icon: "ni ni-tv-2 text-primary",
    component: AdminPlacement,
    layout: "/admin",
  },
  {
    path: "/internship",
    name: "Admin Internship",
    icon: "ni ni-tv-2 text-primary",
    component: AdminInternship,
    layout: "/admin",
  },
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
    path: "/user/register/verify/",
    name: "SetPass",
    icon: "ni ni-circle-08 text-pink",
    component: SetPass,
    layout: "/auth",
  },
  {
    path: "/profile",
    name: "User Profile",
    icon: "ni ni-single-02 text-yellow",
    component: Profile,
    layout: "/user",
  },
  {
    path:"/resetpass/",
    name: "Reset Password",
    icon: "ni ni-settings-gear-65 text-blue",
    component: ResetPassword,
    layout: "/user",
    invisible: true,
  }

];
export default routes;
