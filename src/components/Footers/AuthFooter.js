/*!

=========================================================
* Argon Dashboard React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*eslint-disable*/
import React from "react";

// reactstrap components
import { NavItem, NavLink, Nav, Container, Row, Col } from "reactstrap";

const Login = () => {
  return (
    <>
      <footer className="py-5">
        <Container>
          <Row className="align-items-center justify-content-xl-center">
            <div className="align-items-center justify-content-xl-center text-muted">
              Developed by
              <a
                className="font-weight-bold ml-1"
                href="https://pclub.in"
                target="_blank"
              >
                Programming Club, IIT Kanpur
              </a>
            </div>
            <div>" "</div>
            <div className="copyright text-center text-xl-left text-muted">
              Bootstrapped with{" "}
              <a
                className="font-weight-bold ml-1"
                href="https://www.creative-tim.com?ref=adr-auth-footer"
                target="_blank"
              >
                Creative Tim
              </a>
            </div>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Login;
