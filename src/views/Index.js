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
import React, { useEffect, useState, useMemo } from "react";
// node.js library that concatenates classes (strings)
import classnames from "classnames";
// javascipt plugin for creating charts
import Chart from "chart.js";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";
// reactstrap components

import { Button, Card, CardHeader, CardBody, NavItem, NavLink, Nav, Progress, Table, Container, Row, Col, Input, CustomInput, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, FormText } from "reactstrap";

import Header from "components/Headers/Header.js";
import TableContainer from './TableContainer.js'

const Index = (props) => {
  // to store the fetched data
  const [fetchedData, setFetchedData] = useState([])
  const [isModal, setIsModal] = useState(false)

  useEffect(() => {
    // to set the fetched data
    fetch("https://mockend.com/h4rSHp/fake-api/posts")
      .then(response => response.json())
      .then(data => {
        setFetchedData(data)
      })
      .catch(error => console.log(error))
  }, [])

  const toggle = () => setIsModal(!isModal);

  const renderRowSubComponent = (fetchedData, cells) => {
    let index = parseInt(cells[0]['row']['id'])
    let headingstyle = { fontSize: '20px' }
    return (
      <Card style={{ margin: "0 auto", color: 'white', background: 'linear-gradient(87deg, #11cdef, #1171ef)' }}>
        <CardBody>
          <strong style={headingstyle}>Job Details</strong>
          <p>{fetchedData[index]['details']}</p>
          <strong style={headingstyle}>About the Company</strong>
          <p>{fetchedData[index]['about']}</p>
          <Button color='success' onClick={toggle}>Apply</Button>
        </CardBody>
      </Card>
    )
  }

  // Column Headers for the table
  const columns = useMemo(() => [
    {
      Header: "Sr.No.",
      Cell: ({ row }) => {
        // console.log(row)
        return <span>{parseInt(row.id) + 1}</span>
      },
    },
    {
      Header: "Organisation",
      accessor: "organisation",
    },
    {
      Header: "Profile",
      accessor: "profile",
    },
    {
      Header: "Position",
      accessor: "position",
      disableSortBy: true,
    },
    {
      Header: "Deadline",
      accessor: "deadline",
      disableSortBy: true
    },
    {
      Header: "Eligibility",
      accessor: "eligibility",
      disableSortBy: true,
    },
    {
      Header: 'Details',
      id: 'expander', // 'id' is required
      Cell: ({ row }) => (
        <Button color="primary" size="sm"{...row.getToggleRowExpandedProps()}>
          {row.isExpanded ? ' -' : '+'}
        </Button>
      )
    },
  ], [])

  return (
    <>
      {isModal ? <div>
        <Modal isOpen={isModal} toggle={toggle}>
          <ModalHeader toggle={toggle}>Form</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
              </FormGroup>
              <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
              </FormGroup>
              <FormGroup>
                <Label for="exampleSelect">Select</Label>
                <Input type="select" name="select" id="exampleSelect">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for="exampleSelectMulti">Select Multiple</Label>
                <Input type="select" name="selectMulti" id="exampleSelectMulti" multiple>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for="exampleText">Text Area</Label>
                <Input type="textarea" name="text" id="exampleText" />
              </FormGroup>
              <FormGroup>
                <Label for="exampleFile">File</Label>
                <Input type="file" name="file" id="exampleFile" />
                <FormText color="muted">
                  This is some placeholder block-level help text for the above input. It's a bit lighter and easily wraps to a new line.</FormText>
              </FormGroup>
              <FormGroup tag="fieldset">
                <legend>Radio Buttons</legend>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="radio1" />{' '} Option one is this and that—be sure to include why it's great</Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="radio1" />{' '} Option two can be something else and selecting it will deselect option one</Label>
                </FormGroup>
                <FormGroup check disabled>
                  <Label check>
                    <Input type="radio" name="radio1" disabled />{' '} Option three is disabled</Label>
                </FormGroup>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="checkbox" />{' '} Check me out</Label>
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={toggle}>Submit</Button>{' '}
            <Button color="secondary" onClick={toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div> : <></>}
      <Header />
      {/* Page content */}
      <div style={{
        padding: '50px', paddingTop: '0px', background: 'linear - gradient(87deg, #11cdef 0, #1171ef 100 %)', backgroundColor: 'rgba(0, 0, 0, 0)', 'background-position-x': '0%',
        'background-position-y': '0%',
        'background-repeat': 'repeat',
        'background-attachment': 'scroll',
        'background-image': 'linear-gradient(87deg, rgb(17, 205, 239) 0px, rgb(17, 113, 239) 100%)',
        'background-size': 'auto',
        'background-origin': 'padding-box',
        'background-clip': 'border-box',
      }}>
        <TableContainer columns={columns} data={fetchedData} renderRowSubComponent={renderRowSubComponent} />
      </div>
    </>
  );
};

export default Index;
