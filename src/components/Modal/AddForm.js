import React from "react";
import {
    Button, Alert, FormGroup, Form, Input, Row, Col,
} from "reactstrap";
import { Component } from "react";

import { Multiselect } from 'multiselect-react-dropdown'

class Add extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: { Name: '', Details: '', About: '', Deadline: '', },

            programmes: [
                { name: 'Open to ALL', id: 1 },
                { name: 'BTech', id: 2 },
                { name: 'BS', id: 3 },
                { name: 'MTech', id: 4 },
                { name: 'MS', id: 5 },
                { name: 'MSc(2 yr)', id: 6 },
                { name: 'MTech(Dual)', id: 7 },
                { name: 'PhD', id: 8 },
                { name: 'BS-MBA', id: 9 },
                { name: 'BS-MS', id: 10 },
                { name: 'BS-MT', id: 11 },
                { name: 'BT-M.Des', id: 12 },
                { name: 'BT-MBA', id: 13 },
                { name: 'BT-MS', id: 14 },
                { name: 'DIIT', id: 15 },
                { name: 'Exchng Prog.', id: 16 },
                { name: 'MDes', id: 17 },
                { name: 'Msc-PhD(Dual)', id: 18 },
                { name: 'MTech-PhD', id: 19 },
            ],

            departments: [
                { name: 'Open to ALL', id: 1 },
                { name: 'Aerospace', id: 2 },
                { name: 'BSBE', id: 3 },
                { name: 'Chemical', id: 4 },
                { name: 'Chemistry', id: 5 },
                { name: 'Civil', id: 6 },
                { name: 'Computer Science', id: 7 },
                { name: 'Earth Science', id: 8 },
                { name: 'Economics', id: 9 },
                { name: 'Electrical', id: 10 },
                { name: 'Material Science', id: 11 },
                { name: 'Mathematics', id: 12 },
                { name: 'Mechanical', id: 13 },
                { name: 'Physics', id: 14 },
                { name: 'Cognitive Science', id: 15 },
                { name: 'Material Science', id: 16 },
                { name: 'Statistics', id: 17 },
                { name: 'Photonics Science & Enginee.', id: 18 },
                { name: 'Nuclear Eng. and Tech. Prog.', id: 19 },
                { name: 'Statistics', id: 20 },
            ],

            selectedProgramme: [],
            selectedDepartment: [],
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChangeProgramme = this.handleChangeProgramme.bind(this)
        this.handleChangeDepartment = this.handleChangeDepartment.bind(this)
    }

    handleChange = (e) => {
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
        // Send data (this.state.data, this.state.selectedProgramme, this.state.selectedDepartment) to Server
        alert("Submitted!!.....Maybe Failed, Hehe!!!")
    }


    handleChangeProgramme(selectedList, selectedItem) {
        // selected item contains list of selected item
        this.setState({
            selectedProgramme: selectedList
        })
    }

    handleChangeDepartment(selectedList, selectedItem) {
        this.setState({ selectedProgramme: selectedList })
        // selected item contains list of selected item
    }

    // console.log(props)
    render() {
        // console.log(this.state)
        return (
            <Form onSubmit={this.handleSubmit}>
                <Row>
                    <Col>
                        <h5>Organization Name</h5>
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
                    <Col>
                        <h5>Job Details</h5>
                        <FormGroup className="mt-0 pt-0">
                            <Input
                                required
                                name="Details"
                                id="Job_Details"
                                type="textarea"
                                placeholder="Job Details"
                                onChange={this.handleChange}
                            />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col >
                        <h5>About</h5>
                        <FormGroup className="mt-0 pt-0">
                            <Input
                                required
                                name="About"
                                id="About"
                                type="textarea"
                                placeholder="About Company"
                                onChange={this.handleChange}
                            />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col >
                        <h5>Deadline</h5>
                        <FormGroup className="mt-0 pt-0">
                            <Input
                                required
                                name="Deadline"
                                id="Email"
                                type="date"
                                onChange={this.handleChange}
                            />
                        </FormGroup>
                    </Col>
                </Row>
                <h5>Eligibility</h5>
                <hr />
                <h6>Programme</h6>
                <Multiselect
                    avoidHighlightFirstOption={true}//First option will not be highlighted in dropdown by default
                    closeOnSelect={false}// Option to close the dropdown on selecting an option
                    options={this.state.programmes} // Options to display in the dropdown
                    // selectedValues={this.state.selectedValue} // Preselected value to persist in dropdown
                    onSelect={this.handleChangeProgramme} // Function will trigger on select event
                    onRemove={this.handleChangeProgramme} // Function will trigger on remove event
                    displayValue="name" // Property name to display in the dropdown options
                    placeholder="Select Programme"
                />
                <h6>Department</h6>
                <Multiselect
                    avoidHighlightFirstOption={true}
                    closeOnSelect={false}
                    options={this.state.departments} // Options to display in the dropdown
                    // selectedValues={this.state.selectedValue} // Preselected value to persist in dropdown
                    onSelect={this.handleChangeDepartment} // Function will trigger on select event
                    onRemove={this.handleChangeDepartment} // Function will trigger on remove event
                    displayValue="name" // Property name to display in the dropdown options
                    placeholder="Select Department"
                />
                <hr style={{ margin: '12px 0' }} />
                <Row className='text-right'>
                    <Col>
                        <Button type='submit' color="success">Add</Button>
                        <Button outline color="secondary" onClick={this.props.toggle}>Cancel</Button>
                    </Col>
                </Row>
            </Form>
        )
    }
}

export default Add;