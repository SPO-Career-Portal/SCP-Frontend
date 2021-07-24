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
import React , {useEffect, useState} from "react";
import PropTypes from 'prop-types';

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
import axios from 'axios';
import Loader from "react-loader-spinner";
import { Link } from "react-router-dom";

const BASE_URL = "http://127.0.0.1:8000/"

const Profile = () => {

  const [profiledata,setProfileData]=useState([]);
  const [isLoading,setIsLoading]=useState(true);

  const fetchProfile = async() => {
    axios.defaults.withCredentials = true;
    const profileDetails= await axios.get('/user/profile/')
    setProfileData(profileDetails.data)
    setMasterResumelink(profiledata.mastercv)
    setResume1link(profiledata.resume1)
    setResume2link(profiledata.resume1)
    setGithublink(profiledata.github)
    setLinkedinlink(profiledata.linkedin)
    setIsLoading(false)
     
  }

  const onUpdateProfile = () => {
    axios.post(BASE_URL+'user/edit/',{
        mastercv: masterresumelink,
        resume1: resume1link,
        resume2: resume2link,
        github: githublink,
        linkedin: linkedinlink,

    })
    fetchProfile();
    
    
  }

  useEffect(()=>{
    fetchProfile()
  },[])

  
  const [masterresumelink,setMasterResumelink]=useState(profiledata.mastercv);
  const [resume1link,setResume1link]=useState(profiledata.resume1);
  const [resume2link,setResume2link]=useState(profiledata.resume2);
  const [githublink,setGithublink]=useState(profiledata.github);
  const [linkedinlink,setLinkedinlink]=useState(profiledata.linkedin);



  return (
   <>
    {isLoading?
    <>
     <center><Loader type="ThreeDots" color="#332e8e" height="100" width="100" /></center>
    </>:
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
              <CardHeader className="text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
              </CardHeader>
              <CardBody className="pt-0 pt-md-4">
                  <div className="col">
                    <div className="card-profile-stats d-flex justify-content-center mt-5 md-0">
                      <div className="text-center">
                        <h3>
                          {profiledata.name}
                          <span className="font-weight-light">, {profiledata.roll}</span>
                        </h3>
                      </div> 
                    </div>
                  </div>
                <div className="text-center">
                  <div className="h5 mt-0">
                    {profiledata.department}, {profiledata.program}
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
                            defaultValue={profiledata.github}
                            onChange={event => {setGithublink(event.target.value)}}
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
                            className="form-control-alternative"
                            defaultValue={profiledata.linkedin}
                            onChange={event => {setLinkedinlink(event.target.value)}}
                            id="linkedin-profile-link"
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
              onClick={onUpdateProfile}
              size="normal"
              >
              Save 
            </Button>
            <Link to ="/user/resetPassEmail">
              <Button
              color="primary"
              size="normal"
              >
              Change Password
              </Button>
            </Link>     
        </div>
        
      </Container>

    </>
    }
   </>
 
  );
};




export default Profile;