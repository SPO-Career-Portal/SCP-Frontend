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
import React from "react";
import PropTypes from 'prop-types'

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import UserHeader from "components/Headers/UserHeader.js";

const Profile = (props) => {
  return (
    <>
      <UserHeader name={props.name} />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row>
          <Col className="order-xl-2 mb-5 mb-xl-0" xl="4">
            <Card className="card-profile shadow">
              <Row className="justify-content-center">
                <Col className="order-lg-2" lg="3">
                  <div className="card-profile-image">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        className="rounded-circle"
                        src={
                          require("../../assets/img/theme/profile-photo.png")
                            .default
                        }
                      />
                    </a>
                  </div>
                </Col>
              </Row>
              <CardHeader className="text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
              </CardHeader>
              <CardBody className="pt-0 pt-md-4">
                  <div className="col">
                    <div className="card-profile-stats d-flex justify-content-center mt-5 md-0">
                      <div className="text-center">
                        <h3>
                          {props.name}
                          <span className="font-weight-light">, {props.rollNo}</span>
                        </h3>
                      </div> 
                    </div>
                  </div>
                <div className="text-center">
                  <div className="h5 mt-0">
                    {props.department}, {props.programme}
                  </div>
                  <div>
                    Indian Institute of Technology, Kanpur
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col className="order-xl-1" xl="8">
            <Card className="bg-secondary shadow">
              <CardHeader className="bg-white border-0">
                <Row className="align-items-center">
                  <Col xs="8">
                    <h3 className="mb-0">My account</h3>
                  </Col>
                  <Col className="text-right" xs="4">
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Form>
                  <h6 className="heading-small text-muted mb-4">
                    User information
                  </h6>
                  <div className="pl-lg-4">
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-username"
                          >
                              Name
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue={props.name}
                            id="input-username"
                            placeholder={props.name}
                            type="text"
                            readOnly
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-rollno"
                          >
                            Roll Number
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue={props.rollNo}
                            id="input-rollno"
                            placeholder={props.rollNo}
                            type="number"
                            readOnly
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-department"
                          >
                            Department
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue={props.department}
                            id="input-department"
                            placeholder={props.department}
                            type="text"
                            readOnly
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-programme"
                          >
                            Programme
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue={props.programme}
                            id="input-programme"
                            placeholder={props.programme}
                            type="text"
                            readOnly
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </div>
                  <hr className="my-4" />
                  <h6 className="heading-small text-muted mb-4">
                    Useful Links
                  </h6>
                  <div className="pl-lg-4">
                    <Row>
                      <Col md="12">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="Resume-Link"
                          >
                            Resume Link
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue={props.resumeLink}
                            id="resume-link"
                            // placeholder={props.resumeLink}
                            type="url"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="12">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="Github-Profile-Link"
                          >
                            Github Profile Link
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue={props.githubLink}
                            id="github-profile-link"
                            // placeholder={props.githubLink}
                            type="url"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="12">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="Linkedin-Profile-Link"
                          >
                            Linkedin Profile Link
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue={props.linkedinLink}
                            id="linkedin-profile-link"
                            // placeholder={props.linkedinLink}
                            type="url"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </div>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <div className="text-center mt-3">
            <Button
              color="primary"
              href="#pablo"
              onClick={(e) =>{ console.log("save-clicked"); e.preventDefault();}}
              size="normal"
              >
              Save
            </Button>
        </div>
        
      </Container>

    </>
  );
};

//type of props in Profile
Profile.prototype = {
  userID: PropTypes.number,
  name: PropTypes.string,
  programme: PropTypes.string,
  department: PropTypes.string,
  rollNo : PropTypes.number,
  resumeLink: PropTypes.string,
  githubLink : PropTypes.string,
  linkedinLink  : PropTypes.string
}

Profile.defaultProps = {
  userID: 1,
  name: "Name",
  programme: "B.tech/B.S.",
  department: "dep",
  rollNo : 190833,
  // resumeLink : "asdohfao"
}


export default Profile;