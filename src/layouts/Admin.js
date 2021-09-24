import React from "react";
import { useLocation, Route, Switch, Redirect } from "react-router-dom";
import AdminNavbar from "components/Navbars/AdminNavbar.js";
import AdminFooter from "components/Footers/AdminFooter.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import { useSelector } from "react-redux";
import routes from "routes.js";

const Admin = (props) => {
  const mainContent = React.useRef(null);
  const location = useLocation();
  const session = useSelector((state) => state.session);
  // Check whether user is admin or not and update 'isAdmin' value
  // You can check Admin placement and Internship Dashboard with setting isAdmin to true
  // For now to check, if username is "Admin" in login then we can access Admin Dashboard
  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [location]);
  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (
        session.user.admin ? prop.layout === "/admin" : prop.layout === "/user"
      ) {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };
  const getAdmin = (routes) => {
    return routes.filter((value) =>
      session.user.admin ? value.layout === "/admin" : value.layout === "/user"
    );
  };
  const getBrandText = (path) => {
    for (let i = 0; i < routes.length; i++) {
      if (
        props.location.pathname.indexOf(routes[i].layout + routes[i].path) !==
        -1
      ) {
        return routes[i].name;
      }
    }
    return "Brand";
  };

  const checkRedirect = () => {
    const locationPathname = props.location.pathname.slice(0, 20);
    if (locationPathname.localeCompare("/user/resetpass/") == 0) {
      return false;
    } else {
      return true;
    }
  };

  if (!session.authenticated && checkRedirect()) {
    return <Redirect to="/auth/login" />;
  }
  return (
    <>
      <Sidebar
        {...props}
        routes={getAdmin(routes)}
        logo={{
          innerLink: session.user.admin ? "/admin/placement" : "/user/placement",
          imgSrc: require("../assets/img/brand/logo_spo.png").default,
          imgAlt: "...",
        }}
      />
      <div className="main-content" ref={mainContent}>
        <AdminNavbar
          {...props}
          brandText={getBrandText(props.location.pathname)}
        />
        <Switch>
          {getRoutes(routes)}
          <Redirect
            from="*"
            to={
              !session.user.admin && checkRedirect()
                ? "/user/placement"
                : "/admin/placement"
            }
          />
        </Switch>
        <AdminFooter />
      </div>
    </>
  );
};

export default Admin;
