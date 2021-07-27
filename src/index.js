import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { Provider } from "react-redux";
import "assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/scss/argon-dashboard-react.scss";
import store from "./store";
import { sessionService } from 'redux-react-session';
import AdminLayout from "layouts/Admin.js";
import AuthLayout from "layouts/Auth.js";
import { useSelector } from 'react-redux';


const validateSession = (session) => {
  // if we are implementing some time session
  return true;
}
const options = { refreshOnCheckAuth: true, redirectPath: '/auth/login', driver: 'COOKIES', validateSession };

sessionService.initSessionService(store, options)
  .then(() => console.log('Redux React Session is ready and a session was refreshed from your storage'))
  .catch(() => console.log('Redux React Session is ready and there is no session in your storage'));
const App = () => {
  const session = useSelector((state) => state.session);
  return (
    <BrowserRouter>
      <Switch>
        <Route path={session.authenticated ? "" : "/user"} render={(props) => <AdminLayout {...props} />} />
        <Route path="/auth" render={(props) => <AuthLayout {...props} />} />
        <Redirect from="*" to="/auth/login" />
      </Switch>
    </BrowserRouter>
  )
}
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);