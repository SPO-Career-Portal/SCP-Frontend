import React from "react";
import { Link } from "react-router-dom";
import Header from "components/Headers/Header.js";
import classNames from "classnames";
import {
    Button, Card, CardHeader, CardBody, CardFooter, Label, FormGroup, Form, Input, Container, Row, Col,
} from "reactstrap";



const Apply = (props) => {
    const data = { 'Name': 'Form' };
    console.log(props)
    return (
        <>
            {/* <h2 className="text-centre">{props[1]['value']}</h2> */}
            <Form >
                <h3>Personal Information</h3>
                <hr />
                <Row>
                    <Col>
                        <h5>Your Name</h5>
                    </Col>
                </Row>
                <Row>
                    <Col lg="6" >
                        <FormGroup className="mt-0 pt-0">
                            <Input
                                id="First_Name"
                                type="text"
                                placeholder="First Name"
                            />
                        </FormGroup>
                    </Col>
                    <Col lg="6" >
                        <FormGroup className="mt-0 pt-0">
                            <Input
                                id="Last_Name"
                                type="text"
                                placeholder="Last Name"
                            />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col lg="6">
                        <h5>Roll Number</h5>
                        <FormGroup className="mt-0 pt-0">
                            <Input
                                id="Roll_Number"
                                type="number"
                                placeholder="Eg. 160056"
                            />
                        </FormGroup>
                    </Col>
                    <Col lg="6" >
                        <h5>Phone Number</h5>
                        <FormGroup className="mt-0 pt-0">
                            <Input
                                id="Phone_Number"
                                type="number"
                                placeholder="Eg. +91 9876543210"
                            />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col >
                        <h5>Email ID</h5>
                        <FormGroup className="mt-0 pt-0">
                            <Input
                                id="Email"
                                type="email"
                                placeholder="Eg. name@example.com"
                            />
                        </FormGroup>
                    </Col>
                </Row>
                <hr />
                <h3 className="mt-3">Additional Information</h3>
                <hr />
                <Row>
                    <Col lg="6">
                        <h5>Linkedin Profile</h5>
                        <FormGroup>
                            <Input
                                required
                                id="Linkedin"
                                type="text"
                                placeholder="Eg. linkedin.com/in/example"
                            />
                        </FormGroup>
                    </Col>
                    <Col lg="6">
                        <h5>Github Profile</h5>
                        <FormGroup>
                            <Input
                                id="Github"
                                type="text"
                                placeholder="Eg. github.com/example"
                            />
                        </FormGroup>
                    </Col>
                </Row>
            </Form>
        </>
    )
}

export default Apply;