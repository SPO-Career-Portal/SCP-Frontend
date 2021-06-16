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

// reactstrap components
import { Button, Card, CardHeader, CardBody, NavItem, NavLink, Nav, Progress, Table, Container, Row, Col, Input, CustomInput, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, FormText } from "reactstrap";

import Header from "../components/Headers/Header"
import TableContainer from './TableContainer.js'

import { maingradient } from '../components/Style/css_style'

const Index = (props) => {
  // to store the fetched data
  const [fetchedData, setFetchedData] = useState([])

  useEffect(() => {
    // to set the fetched data
    fetch("https://mockend.com/h4rSHp/fake-api/posts")
      .then(response => response.json())
      .then(data => {
        setFetchedData(data)
      })
      .catch(error => console.log(error))
  }, [])


  // Column Headers for the table
  const columns = useMemo(() => [
    {
      Header: "Sr.No.",
      Cell: ({ row }) => {
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
      Header: "Eligibility",
      accessor: "eligibility",
      disableSortBy: true,
    },
    {
      Header: "Deadline",
      accessor: "deadline",
      disableSortBy: true
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
      {/* <Header /> */}
      <div style={maingradient}>
        <TableContainer columns={columns} data={fetchedData} />
      </div>
    </>
  );
};

export default Index;
