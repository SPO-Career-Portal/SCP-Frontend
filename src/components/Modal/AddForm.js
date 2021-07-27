import React from "react";
import { Button, FormGroup, Form, Input, Row, Col } from "reactstrap";
import { Component } from "react";
import axios from "axios";
import { Multiselect } from "multiselect-react-dropdown";

const base_url = "http://127.0.0.1:8000";

class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: { Name: "", CompanyName: "", Role: "", Details: "", Deadline: "" },

      programmes: [
        { name: "BTech", id: 1 },
        { name: "BS", id: 2 },
        { name: "MTech", id: 3 },
        { name: "MS", id: 4 },
        { name: "MSc(2 yr)", id: 5 },
        { name: "MTech(Dual)", id: 6 },
        { name: "MBA", id: 7 },
        { name: "PhD", id: 8 },
        { name: "BS-MBA", id: 9 },
        { name: "BS-MS", id: 10 },
        { name: "BS-MT", id: 11 },
        { name: "BT-MDes", id: 12 },
        { name: "BT-MBA", id: 13 },
        { name: "BT-MS", id: 14 },
        { name: "DIIT", id: 15 },
        { name: "Exchng Prog.", id: 16 },
        { name: "MDes", id: 17 },
        { name: "MSc-PhD(Dual)", id: 18 },
        { name: "MTech-PhD", id: 19 },
        { name: "MS-Research", id: 20 },
        { name: "PGPEX-VLM", id: 21 },
      ],

      departments: [
        { name: "Aerospace Engg.", id: 1 },
        { name: "Biol.Sci. And Bio.Engg.", id: 2 },
        { name: "Chemical Engg.", id: 3 },
        { name: "Chemistry", id: 4 },
        { name: "Civil Engg.", id: 5 },
        { name: "Cognitive Sciences", id: 6 },
        { name: "Computer Science & Engg.", id: 7 },
        { name: "Earth Sciences", id: 8 },
        { name: "Economics", id: 9 },
        { name: "Electrical Engg.", id: 10 },
        { name: "Humanities & Soc. Sciences", id: 11 },
        { name: "Ind. & Management Engg.", id: 12 },
        { name: "Master Of Design", id: 13 },
        { name: "Materials Science & Engg.", id: 14 },
        { name: "Materials Science Programme", id: 15 },
        { name: "Mathematics", id: 16 },
        { name: "Math For Pg Online", id: 17 },
        { name: "Mechanical Engineering", id: 18 },
        { name: "Nuclear Eng. and Tech. Prog.", id: 19 },
        { name: "Photonics Science & Engg.", id: 20 },
        { name: "Physics", id: 21 },
        { name: "Statistics", id: 22 },
      ],

      batches: [
        { name: "Y20", id: 1 },
        { name: "Y19", id: 2 },
        { name: "Y18", id: 3 },
        { name: "Y17", id: 4 },
        { name: "Y16", id: 5 },
        { name: "Y15", id: 6 },
        { name: "Y14", id: 7 },
        { name: "Y13", id: 8 },
      ],

      selectedProgramme: [],
      selectedDepartment: [],
      selectedBatch: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeBatch = this.handleChangeBatch.bind(this);
    this.handleChangeProgramme = this.handleChangeProgramme.bind(this);
    this.handleChangeDepartment = this.handleChangeDepartment.bind(this);
  }

  handleChange = (e) => {
    let title = e.target.name;
    let val = e.target.value;
    let prevState = this.state.data;
    prevState[title] = val;
    this.setState({
      data: prevState,
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    axios.defaults.withCredentials = true;

    let batches = [];
    this.state.selectedBatch.map((i) => {
      batches.push(i["name"]);
    });
    let branches = [];
    this.state.selectedDepartment.map((i) => {
      branches.push(i["name"]);
    });
    let programmes = [];
    this.state.selectedProgramme.map((i) => {
      programmes.push(i["name"]);
    });

    var data = {
      company: this.state.data["CompanyName"],
      role: this.state.data["Role"],
      description: this.state.data["Details"],
      deadline: this.state.data["Deadline"],
      eligible_batches: batches,
      eligible_branches: branches,
      eligible_programmes: programmes,
    };

    data[this.props.offer == "Intern" ? "intern_name" : "placement_name"] =
      this.state.data["Name"];

    await axios
      .post(base_url + "/admin/add" + this.props.offer + "/", data)
      .then((res) => {})
      .catch((error) => console.log(error));
    this.props.toggle();
    this.props.reload(true);
  };

  handleChangeProgramme(selectedList, selectedItem) {
    // selected item contains list of selected item
    this.setState({
      selectedProgramme: selectedList,
    });
  }

  handleChangeDepartment(selectedList, selectedItem) {
    this.setState({ selectedDepartment: selectedList });
    // selected item contains list of selected item
  }

  handleChangeBatch(selectedList, selectedItem) {
    // selected item contains list of selected item
    this.setState({
      selectedBatch: selectedList,
    });
  }

  // console.log(props)
  render() {
    // console.log(this.state)
    return (
      <Form onSubmit={this.handleSubmit}>
        <Row>
          <Col>
            <h5>Name</h5>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup className="mt-0 pt-0">
              <Input
                required
                name="Name"
                id="Name"
                type="text"
                placeholder="eg. Google BGLR Offer"
                onChange={this.handleChange}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <h5>Organization Name</h5>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup className="mt-0 pt-0">
              <Input
                required
                name="CompanyName"
                id="CompanyName"
                type="text"
                placeholder="eg. Google"
                onChange={this.handleChange}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <h5>Work Profile</h5>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup className="mt-0 pt-0">
              <Input
                required
                name="Role"
                id="Role"
                type="text"
                placeholder="eg. Frontend Developer"
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
                placeholder="Description of the job"
                onChange={this.handleChange}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <h5>Deadline</h5>
            <FormGroup className="mt-0 pt-0">
              <Input
                required
                name="Deadline"
                id="Email"
                type="datetime-local"
                onChange={this.handleChange}
              />
            </FormGroup>
          </Col>
        </Row>
        <h5>Eligibility</h5>
        <hr />
        <h6>Batch</h6>
        <Multiselect
          required
          id="batches_select"
          avoidHighlightFirstOption={true}
          closeOnSelect={false}
          options={this.state.batches} // Options to display in the dropdown
          // selectedValues={this.state.selectedValue} // Preselected value to persist in dropdown
          onSelect={this.handleChangeBatch} // Function will trigger on select event
          onRemove={this.handleChangeBatch} // Function will trigger on remove event
          displayValue="name" // Property name to display in the dropdown options
          placeholder="Select Batch"
        />
        <h6>Department</h6>
        <Multiselect
          required
          id="department_select"
          avoidHighlightFirstOption={true}
          closeOnSelect={false}
          options={this.state.departments} // Options to display in the dropdown
          // selectedValues={this.state.selectedValue} // Preselected value to persist in dropdown
          onSelect={this.handleChangeDepartment} // Function will trigger on select event
          onRemove={this.handleChangeDepartment} // Function will trigger on remove event
          displayValue="name" // Property name to display in the dropdown options
          placeholder="Select Department"
        />
        <h6>Programme</h6>
        <Multiselect
          required
          id="program_select"
          avoidHighlightFirstOption={true} //First option will not be highlighted in dropdown by default
          closeOnSelect={false} // Option to close the dropdown on selecting an option
          options={this.state.programmes} // Options to display in the dropdown
          // selectedValues={this.state.selectedValue} // Preselected value to persist in dropdown
          onSelect={this.handleChangeProgramme} // Function will trigger on select event
          onRemove={this.handleChangeProgramme} // Function will trigger on remove event
          displayValue="name" // Property name to display in the dropdown options
          placeholder="Select Programme"
        />
        <hr style={{ margin: "12px 0" }} />
        <Row className="text-right">
          <Col>
            <Button type="submit" color="success">
              Add
            </Button>
            <Button outline color="secondary" onClick={this.props.toggle}>
              Cancel
            </Button>
          </Col>
        </Row>
      </Form>
    );
  }
}

export default Add;
