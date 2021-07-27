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
import { Container, Row, Col, Nav, NavItem, NavLink } from "reactstrap";

const Footer = () => {
  return (
    <footer className="footer py-4" style={{ height: "65px" }}>
      <Row className="align-items-center justify-content-xl-between mx-3 text-muted">
        <Col xl="6">
          Developed by
          <a
            className="font-weight-bold ml-1"
            href="https://pclub.in"
            target="_blank"
          >
            Programming Club, IIT Kanpur
          </a>
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;
