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
<<<<<<< HEAD
<<<<<<< HEAD
import React from "react";
=======
import React , {useEffect, useState} from "react";
import PropTypes from 'prop-types';
>>>>>>> b89a2e6791798a0df7361803a89c2285704f4e3f
=======
import React, { useEffect, useState } from "react";
>>>>>>> cd87215dd29809ae810151092154674c957e9258

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
import axios from "axios";
import Loader from "react-loader-spinner";

<<<<<<< HEAD
<<<<<<< HEAD
const Profile = () => {
=======
const BASE_URL = "http://127.0.0.1:8000/"
=======
const BASE_URL = "http://127.0.0.1:8000/";
>>>>>>> cd87215dd29809ae810151092154674c957e9258

const Profile = () => {
  const [profiledata, setProfileData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchProfile = async () => {
    axios.defaults.withCredentials = true;
    await axios
      .get(BASE_URL + "user/profile/")
      .then((profile) => {
        setProfileData(profile.data);
        setMasterResumelink(profile.data.mastercv);
        setResume1link(profile.data.resume1);
        setResume2link(profile.data.resume2);
        setGithublink(profile.data.github);
        setLinkedinlink(profile.data.linkedin);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  };

  const onUpdateProfile = async () => {
    axios.defaults.withCredentials = true;
    const data = {
      mastercv: masterresumelink,
      resume1: resume1link,
      resume2: resume2link,
      github: githublink,
      linkedin: linkedinlink,
    };
    if (resume2link == "") delete data.resume2;
    console.log(data);
    await axios
      .post(BASE_URL + "user/edit/", data)
      .then((res) => alert("Profile updated successfully!!"))
      .catch((err) =>
        alert("Please enter valid links in their respective format!!")
      );
    fetchProfile();
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  const resetPass = async (e) => {
    e.preventDefault();
    await axios
      .post(BASE_URL + "user/resetpassemail/", {
        roll: profiledata.roll,
      })
      .then((response) => {
        alert("Link sent to your email ID");
      })
      .catch((err) => {
        alert("No user logged in!!");
      });
  };

  const [masterresumelink, setMasterResumelink] = useState("");
  const [resume1link, setResume1link] = useState("");
  const [resume2link, setResume2link] = useState("");
  const [githublink, setGithublink] = useState("");
  const [linkedinlink, setLinkedinlink] = useState("");

>>>>>>> b89a2e6791798a0df7361803a89c2285704f4e3f
  return (
<<<<<<< HEAD
   <>
    {isLoading?
    <>
<<<<<<< HEAD
      <UserHeader />
=======
     <center><Loader type="ThreeDots" color="#332e8e" height="100" width="100" /></center>
    </>:
    <>
      <UserHeader name={profiledata.name} />
>>>>>>> b89a2e6791798a0df7361803a89c2285704f4e3f
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
                          require("../../assets/img/theme/team-4-800x800.jpg")
                            .default
                        }
                      />
                    </a>
                  </div>
                </Col>
              </Row>
              <CardHeader className="text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
                <div className="d-flex justify-content-between">
                  <Button
                    className="mr-4"
                    color="info"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    size="sm"
                  >
                    Connect
                  </Button>
                  <Button
                    className="float-right"
                    color="default"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    size="sm"
                  >
                    Message
                  </Button>
                </div>
              </CardHeader>
              <CardBody className="pt-0 pt-md-4">
                <Row>
                  <div className="col">
<<<<<<< HEAD
                    <div className="card-profile-stats d-flex justify-content-center mt-md-5">
                      <div>
                        <span className="heading">22</span>
                        <span className="description">Friends</span>
                      </div>
                      <div>
                        <span className="heading">10</span>
                        <span className="description">Photos</span>
                      </div>
                      <div>
                        <span className="heading">89</span>
                        <span className="description">Comments</span>
                      </div>
=======
                    <div className="card-profile-stats d-flex justify-content-center mt-5 md-0">
                      <div className="text-center">
                        <h3>
                          {profiledata.name}
                          <span className="font-weight-light">, {profiledata.roll}</span>
                        </h3>
                      </div> 
>>>>>>> b89a2e6791798a0df7361803a89c2285704f4e3f
                    </div>
                  </div>
                </Row>
                <div className="text-center">
<<<<<<< HEAD
                  <h3>
                    Jessica Jones
                    <span className="font-weight-light">, 27</span>
                  </h3>
                  <div className="h5 font-weight-300">
                    <i className="ni location_pin mr-2" />
                    Bucharest, Romania
                  </div>
                  <div className="h5 mt-4">
                    <i className="ni business_briefcase-24 mr-2" />
                    Solution Manager - Creative Tim Officer
=======
                  <div className="h5 mt-0">
                    {profiledata.department}, {profiledata.program}
>>>>>>> b89a2e6791798a0df7361803a89c2285704f4e3f
                  </div>
                  <div>
                    <i className="ni education_hat mr-2" />
                    University of Computer Science
                  </div>
                  <hr className="my-4" />
                  <p>
                    Ryan — the name taken by Melbourne-raised, Brooklyn-based
                    Nick Murphy — writes, performs and records all of his own
                    music.
                  </p>
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    Show more
                  </a>
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
                    <Button
                      color="primary"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                    >
                      Settings
                    </Button>
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
                            Username
                          </label>
                          <Input
                            className="form-control-alternative"
<<<<<<< HEAD
                            defaultValue="lucky.jesse"
                            id="input-username"
                            placeholder="Username"
=======
                            defaultValue={profiledata.name}
                            id="input-username"
                            placeholder={profiledata.name}
>>>>>>> b89a2e6791798a0df7361803a89c2285704f4e3f
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-email"
                          >
                            Email address
                          </label>
                          <Input
                            className="form-control-alternative"
<<<<<<< HEAD
                            id="input-email"
                            placeholder="jesse@example.com"
                            type="email"
=======
                            defaultValue={profiledata.roll}
                            id="input-rollno"
                            placeholder={profiledata.roll}
                            type="number"
                            readOnly
>>>>>>> b89a2e6791798a0df7361803a89c2285704f4e3f
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-first-name"
                          >
                            First name
                          </label>
                          <Input
                            className="form-control-alternative"
<<<<<<< HEAD
                            defaultValue="Lucky"
                            id="input-first-name"
                            placeholder="First name"
=======
                            defaultValue={profiledata.department}
                            id="input-department"
                            placeholder={profiledata.department}
>>>>>>> b89a2e6791798a0df7361803a89c2285704f4e3f
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-last-name"
                          >
                            Last name
                          </label>
                          <Input
                            className="form-control-alternative"
<<<<<<< HEAD
                            defaultValue="Jesse"
                            id="input-last-name"
                            placeholder="Last name"
=======
                            defaultValue={profiledata.program}
                            id="input-programme"
                            placeholder={profiledata.program}
>>>>>>> b89a2e6791798a0df7361803a89c2285704f4e3f
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </div>
                  <hr className="my-4" />
                  {/* Address */}
                  <h6 className="heading-small text-muted mb-4">
                    Contact information
                  </h6>
                  <div className="pl-lg-4">
                    <Row>
                      <Col md="12">
                        <FormGroup>
                          <label
                            className="form-control-label"
<<<<<<< HEAD
                            htmlFor="input-address"
                          >
                            Address
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
                            id="input-address"
                            placeholder="Home Address"
                            type="text"
=======
                            htmlFor="MasterResume-Link"
                          >
                            Master Resume Link
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue={profiledata.mastercv}
                            onChange={event => {setMasterResumelink(event.target.value)}}
                            id="master_resume-link"
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
                            htmlFor="Resume1-Link"
                          >
                            Resume-1 Link
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue={profiledata.resume1}
                            onChange={event => {setResume1link(event.target.value)}}
                            id="resume1-link"
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
                            htmlFor="Resume2-Link"
                          >
                            Resume-2 Link
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue={profiledata.resume2}
                            onChange={event => {setResume2link(event.target.value)}}
                            id="resume2-link"
                            type="url"
>>>>>>> b89a2e6791798a0df7361803a89c2285704f4e3f
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-city"
                          >
                            City
                          </label>
                          <Input
                            className="form-control-alternative"
<<<<<<< HEAD
                            defaultValue="New York"
                            id="input-city"
                            placeholder="City"
                            type="text"
=======
                            defaultValue={profiledata.github}
                            onChange={event => {setGithublink(event.target.value)}}
                            id="github-profile-link"
                            type="url"
>>>>>>> b89a2e6791798a0df7361803a89c2285704f4e3f
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-country"
                          >
                            Country
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue="United States"
                            id="input-country"
                            placeholder="Country"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-country"
                          >
                            Postal code
                          </label>
                          <Input
                            className="form-control-alternative"
<<<<<<< HEAD
                            id="input-postal-code"
                            placeholder="Postal code"
                            type="number"
=======
                            defaultValue={profiledata.linkedin}
                            onChange={event => {setLinkedinlink(event.target.value)}}
                            id="linkedin-profile-link"
                            type="url"
>>>>>>> b89a2e6791798a0df7361803a89c2285704f4e3f
                          />
                        </FormGroup>
=======
    <>
      {isLoading ? (
        <>
          <center>
            <Loader type="ThreeDots" color="#332e8e" height="100" width="100" />
          </center>
        </>
      ) : (
        <>
          <UserHeader name={profiledata.name} />
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
                  <CardHeader className="text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4"></CardHeader>
                  <CardBody className="pt-0 pt-md-4">
                    <div className="col">
                      <div className="card-profile-stats d-flex justify-content-center mt-5 md-0">
                        <div className="text-center">
                          <h3>
                            {profiledata.name}
                            <span className="font-weight-light">
                              , {profiledata.roll}
                            </span>
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="h5 mt-0">
                        {profiledata.department}, {profiledata.program}
                      </div>
                      <div>Indian Institute of Technology, Kanpur</div>
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
>>>>>>> cd87215dd29809ae810151092154674c957e9258
                      </Col>
                      <Col className="text-right" xs="4"></Col>
                    </Row>
<<<<<<< HEAD
                  </div>
                  <hr className="my-4" />
                  {/* Description */}
                  <h6 className="heading-small text-muted mb-4">About me</h6>
                  <div className="pl-lg-4">
                    <FormGroup>
                      <label>About Me</label>
                      <Input
                        className="form-control-alternative"
                        placeholder="A few words about you ..."
                        rows="4"
                        defaultValue="A beautiful Dashboard for Bootstrap 4. It is Free and
                        Open Source."
                        type="textarea"
                      />
                    </FormGroup>
                  </div>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
<<<<<<< HEAD
=======
        <div className="text-center mt-3">
            <Button
              color="primary"
              onClick={onUpdateProfile}
              size="normal"
              >
              Save 
            </Button>
            <Link to ="/user/resetPassEmail">
=======
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
                                defaultValue={profiledata.name}
                                id="input-username"
                                placeholder={profiledata.name}
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
                                defaultValue={profiledata.roll}
                                id="input-rollno"
                                placeholder={profiledata.roll}
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
                                defaultValue={profiledata.department}
                                id="input-department"
                                placeholder={profiledata.department}
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
                                defaultValue={profiledata.program}
                                id="input-programme"
                                placeholder={profiledata.program}
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
                                htmlFor="Github-Profile-Link"
                              >
                                Github Profile Link
                              </label>
                              <Input
                                required
                                className="form-control-alternative"
                                defaultValue={githublink}
                                placeholder="github.com/..."
                                onChange={(event) => {
                                  event.preventDefault();
                                  setGithublink(event.target.value);
                                }}
                                id="github-profile-link"
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
                                required
                                className="form-control-alternative"
                                defaultValue={linkedinlink}
                                placeholder="linkedin.com/in/..."
                                onChange={(event) => {
                                  event.preventDefault();
                                  setLinkedinlink(event.target.value);
                                }}
                                id="linkedin-profile-link"
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
                                htmlFor="MasterResume-Link"
                              >
                                Master Resume Link
                              </label>
                              <Input
                                required
                                className="form-control-alternative"
                                defaultValue={masterresumelink}
                                placeholder="google.com/..."
                                onChange={(event) => {
                                  event.preventDefault();
                                  setMasterResumelink(event.target.value);
                                }}
                                id="master_resume-link"
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
                                htmlFor="Resume1-Link"
                              >
                                Resume-1 Link
                              </label>
                              <Input
                                required
                                className="form-control-alternative"
                                defaultValue={resume1link}
                                placeholder="google.com/..."
                                onChange={(event) => {
                                  event.preventDefault();
                                  setResume1link(event.target.value);
                                }}
                                id="resume1-link"
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
                                htmlFor="Resume2-Link"
                              >
                                Resume-2 Link
                              </label>
                              <Input
                                blank="false"
                                className="form-control-alternative"
                                defaultValue={resume2link}
                                placeholder="google.com/..."
                                onChange={(event) => {
                                  event.preventDefault();
                                  setResume2link(event.target.value);
                                }}
                                id="resume2-link"
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
              <Button color="primary" onClick={onUpdateProfile} size="normal">
                Save
              </Button>
>>>>>>> cd87215dd29809ae810151092154674c957e9258
              <Button
                color="primary"
                onClick={(e) => resetPass(e)}
                size="normal"
              >
                Change Password
              </Button>
<<<<<<< HEAD
            </Link>     
        </div>
        
>>>>>>> b89a2e6791798a0df7361803a89c2285704f4e3f
      </Container>
=======
            </div>
          </Container>
        </>
      )}
>>>>>>> cd87215dd29809ae810151092154674c957e9258
    </>
  );
};

<<<<<<< HEAD
<<<<<<< HEAD
export default Profile;
=======



export default Profile;
>>>>>>> b89a2e6791798a0df7361803a89c2285704f4e3f
=======
export default Profile;
>>>>>>> cd87215dd29809ae810151092154674c957e9258
