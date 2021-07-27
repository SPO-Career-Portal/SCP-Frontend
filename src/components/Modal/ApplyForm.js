import React from "react";
import { Button, FormGroup, Form, Input, Row, Col } from "reactstrap";
import { Component } from "react";
import axios from "axios";
import Select from "react-dropdown-select";

const BASE_URL = "http://127.0.0.1:8000/";

const options = [
  { value: "Resume1", label: "Resume1" },
  { value: "Resume2", label: "Resume2" },
];

class Apply extends Component {
  constructor(props) {
    super(props);
    axios.defaults.withCredentials = true;
    this.state = {
      data: {
        Name: "",
        RollNo: "",
        Program: "",
        Department: "",
        Email: "",
        LinkedIn: "",
        Github: "",
        fetched: false,
        Resume: "",
      },
    };
    axios.get(BASE_URL + "user/profile/").then((res) => {
      const profileDetails = res.data;
      const profile = {
        Name: profileDetails.name,
        RollNo: profileDetails.roll,
        Program: profileDetails.program,
        Department: profileDetails.department,
        Email: profileDetails.email,
        LinkedIn: profileDetails.linkedin,
        Github: profileDetails.github,
        fetched: true,
        Resume: "",
      };
      this.setState({
        data: profile,
      });
    });
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (values) => {
    let prevState = this.state.data;
    prevState.Resume = values[0].value;
    this.setState({
      data: prevState,
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    await axios
      .post(BASE_URL + this.props.offer + "/register/", {
        key: this.props.Key,
        resume: this.state.data.Resume,
      })
      .then((res) => alert("Regsitered Successfully!!"))
      .catch((err) => {
        if (err.response.data.message) alert(err.response.data.message);
        else alert("Something went wrong \nPlease again try later!!");
      });
    this.props.toggle();
  };

  // console.log(props)
  render() {
    let organization = this.props["data"][1]["value"];
    // console.log(this.state)
    return (
      <>
        {this.state.data.fetched ? (
          <Form onSubmit={this.handleSubmit}>
            <h2 className="text-center">{organization}</h2>
            <hr />
            <h3>Personal Information</h3>
            <hr style={{ margin: "12px 0" }} />
            <Row>
              <Col>
                <h5>Your Name</h5>
              </Col>
            </Row>
            <Row>
              <Col>
                <FormGroup className="mt-0 pt-0">
                  <Input
                    name="Name"
                    type="text"
                    placeholder={this.state.data.Name}
                    defaultValue={this.state.data.Name}
                    readOnly
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col lg="6">
                <h5>Roll Number</h5>
                <FormGroup className="mt-0 pt-0">
                  <Input
                    name="RollNo"
                    type="text"
                    placeholder={this.state.data.RollNo}
                    defaultValue={this.state.data.RollNo}
                    readOnly
                  />
                </FormGroup>
              </Col>
              <Col lg="6">
                <h5>Program</h5>
                <FormGroup className="mt-0 pt-0">
                  <Input
                    name="Program"
                    type="text"
                    placeholder={this.state.data.Program}
                    defaultValue={this.state.data.Program}
                    readOnly
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col>
                <h5>Department</h5>
                <FormGroup className="mt-0 pt-0">
                  <Input
                    name="Department"
                    type="text"
                    placeholder={this.state.data.Department}
                    defaultValue={this.state.data.Department}
                    readOnly
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col>
                <h5>Email ID</h5>
                <FormGroup className="mt-0 pt-0">
                  <Input
                    name="Email"
                    type="email"
                    placeholder={this.state.data.Email}
                    defaultValue={this.state.data.Email}
                    readOnly
                  />
                </FormGroup>
              </Col>
            </Row>
            <h3 className="mt-3">Additional Information</h3>
            <hr />
            <Row>
              <Col lg="6">
                <h5>Linkedin Profile</h5>
                <FormGroup>
                  <Input
                    name="LinkedIn"
                    type="url"
                    placeholder={this.state.data.LinkedIn}
                    defaultValue={this.state.data.LinkedIn}
                    readOnly
                  />
                </FormGroup>
              </Col>
              <Col lg="6">
                <h5>Github Profile</h5>
                <FormGroup>
                  <Input
                    name="Github"
                    type="url"
                    placeholder={this.state.data.Github}
                    defaultValue={this.state.data.Github}
                    readOnly
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col>
                <h5>Resume</h5>
                <FormGroup className="mt-0 pt-0">
                  <Select
                    required
                    options={options}
                    onChange={(values) => {
                      this.handleChange(values);
                    }}
                    color="blue"
                  />
                </FormGroup>
              </Col>
            </Row>
            <hr style={{ margin: "12px 0" }} />
            <Row className="text-right">
              <Col>
                <Button type="submit" color="success">
                  Submit
                </Button>
                <Button outline color="secondary" onClick={this.props.toggle}>
                  Cancel
                </Button>
              </Col>
            </Row>
          </Form>
        ) : (
          <></>
        )}
      </>
    );
  }
}

export default Apply;
