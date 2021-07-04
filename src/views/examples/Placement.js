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

// import Header from "../components/Headers/Header"
import TableContainer from '../TableContainer'
import { applybtnshadow, headingstyle, expandbgstyle, maingradient } from '../../components/Style/css_style'
import Apply from '../../components/Modal/ApplyForm'

const Placement = (props) => {
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


    // Expandable Row
    const renderRowSubComponent = (fetchedData, cells) => {
        let index = parseInt(cells[0]['row']['id'])

        return (
            <Card style={expandbgstyle}>
                <CardBody>
                    <strong style={headingstyle}>Job Details</strong>
                    <p>{fetchedData[index]['details']}</p>
                    <strong style={headingstyle}>About the Company</strong>
                    <p>{fetchedData[index]['about']}</p>
                    <Button style={applybtnshadow} color='success' onClick={toggle}>Apply</Button>
                </CardBody>
            </Card>
        )
    }


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


    // toggle modal visibility
    const toggle = () => setIsModal(!isModal);


    return (
        <>
            {/* <Header /> */}
            <Modal isOpen={isModal} toggle={toggle}>
                <ModalBody>
                    <Apply />
                </ModalBody>
                <ModalFooter>
                    <Button color="success" onClick={toggle}>Submit</Button>{' '}
                    <Button outline color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
            <div style={maingradient}>
                <div>
                    <TableContainer columns={columns} data={fetchedData} renderRowSubComponent={renderRowSubComponent} />
                </div>
            </div>
        </>
    );
};

export default Placement;
