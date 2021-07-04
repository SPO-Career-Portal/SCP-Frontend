import React from "react";
import classNames from "classnames";
import {
    Button, Alert, FormGroup, Form, Input, Row, Col,
} from "reactstrap";
import { Component } from "react";

class Apply extends Component {
    constructor(props) {
        super(props)
        this.state = { data: { Name: '', RollNo: '', Mobile: '', Email: '', LinkedIn: '', Github: '' } }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange = (e) => {
        // console.log(e.target)
        let title = e.target.name
        let val = e.target.value
        let prevState = this.state.data
        prevState[title] = val
        this.setState({
            data: prevState
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        // Send data (this.state.data) to Server
        alert("Submitted!!.....Maybe Failed, Hehe!!!")
    }

    // console.log(props)
    render() {
        let organization = this.props['data'][1]['value']
        // console.log(this.state)
        return (
            <Form onSubmit={this.handleSubmit}>
                <h2 className='text-center'>{organization}</h2>
                <hr />
                <h3>Personal Information</h3>
                <hr style={{ margin: '12px 0' }} />
                <Row>
                    <Col>
                        <h5>Your Name</h5>
                    </Col>
                </Row>
                <Row>
                    <Col >
                        <FormGroup className="mt-0 pt-0">
                            <Input
                                required
                                name="Name"
                                id="Name"
                                type="text"
                                placeholder="John Doe"
                                onChange={this.handleChange}
                            />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col lg="6">
                        <h5>Roll Number</h5>
                        <FormGroup className="mt-0 pt-0">
                            <Input
                                required
                                name="RollNo"
                                id="Roll_Number"
                                type="text"
                                placeholder="160056"
                                minLength={6}
                                maxLength={8}
                                onChange={this.handleChange}
                            />
                        </FormGroup>
                    </Col>
                    <Col lg="6" >
                        <h5>Phone Number</h5>
                        <FormGroup className="mt-0 pt-0">
                            <Input
                                required
                                min="0"
                                name="Mobile"
                                id="Phone_Number"
                                type="text"
                                placeholder="+918080808080"
                                minLength={10}
                                maxLength={13}
                                onChange={this.handleChange}
                            />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col >
                        <h5>Email ID</h5>
                        <FormGroup className="mt-0 pt-0">
                            <Input
                                required
                                name="Email"
                                id="Email"
                                type="email"
                                placeholder="name@iitk.ac.in"
                                pattern=".+@iitk\.ac\.in"
                                onChange={this.handleChange}
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
                                required
                                name="LinkedIn"
                                id="Linkedin"
                                type="url"
                                placeholder="https://linkedin.com/in/name"
                                onChange={this.handleChange}
                            />
                        </FormGroup>
                    </Col>
                    <Col lg="6">
                        <h5>Github Profile</h5>
                        <FormGroup>
                            <Input
                                required
                                id="Github"
                                type="url"
                                placeholder="https://github.com/name"
                                // pattern='https:\/\/github\.com\/[^\/]+\/'
                                onChange={this.handleChange}
                            />
                        </FormGroup>
                    </Col>
                </Row>
                <hr style={{ margin: '12px 0' }} />
                <Row className='text-right'>
                    <Col>
                        <Button type='submit' color="success">Submit</Button>
                        <Button outline color="secondary" onClick={this.props.toggle}>Cancel</Button>
                    </Col>
                </Row>
            </Form>
        )
    }
}

export default Apply;