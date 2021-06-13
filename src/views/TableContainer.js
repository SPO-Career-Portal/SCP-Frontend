import React, { Fragment, useState, useEffect } from 'react'
import { useTable, useSortBy, useExpanded, usePagination } from 'react-table'


import "bootstrap/dist/css/bootstrap.min.css"
// reactstrap component
import {
    Button, Container,
    Card, CardHeader, CardBody,
    NavItem, NavLink, Nav, Progress,
    Table, Row, Col,
    Input, CustomInput,
    Modal, ModalHeader, ModalBody, ModalFooter,
    Form, FormGroup, Label, FormText
} from "reactstrap";

import { tablestyle } from '../components/Style/css_style'

const TableContainer = ({ columns, data, renderRowSubComponent, }) => {
    const {
        getTableProps, getTableBodyProps, headerGroups, page, prepareRow,
        canPreviousPage, canNextPage, pageOptions, pageCount, gotoPage, nextPage, previousPage, setPageSize,
        state: { pageIndex, pageSize } } = useTable({ columns, data, }, useSortBy, useExpanded, usePagination)


    const [fetchedData, setFetchedData] = useState([])


    const generateSortingIndicator = column => {
        return column.isSorted ? (column.isSortedDesc ? " 🔽" : " 🔼") : ""
    }


    const onChangeInSelect = event => {
        setPageSize(Number(event.target.value))
    }

    // const onChangeInInput = event => {
    //     const page = event.target.value ? Number(event.target.value) - 1 : 0
    //     gotoPage(page)
    // }

    useEffect(() => {
        fetch("https://mockend.com/h4rSHp/fake-api/comments")
            .then(response => response.json())
            .then(data => {
                setFetchedData(data)
            })
            .catch(error => console.log(error))
    }, [])


    return (
        <Fragment>
            <Table responsive hover {...getTableProps()} style={tablestyle}>
                <thead style={{ background: '#ccc' }}>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                // <th {...column.getHeaderProps()}>{column.render("Header")}</th>
                                <th {...column.getHeaderProps(column.getSortByToggleProps())} style={{ textAlign: 'center' }}>
                                    <strong >{column.render("Header")}</strong>
                                    {generateSortingIndicator(column)}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>

                <tbody {...getTableBodyProps()}>
                    {page.map(row => {
                        prepareRow(row)
                        return (
                            <Fragment key={row.getRowProps().key}>
                                <tr>
                                    {row.cells.map(cell => {
                                        return <td style={{ textAlign: 'center' }} {...cell.getCellProps()}>{cell.render("Cell")}</td>
                                    })}
                                </tr>
                                {row.isExpanded && (
                                    <tr>
                                        <td colSpan='7'>{renderRowSubComponent(fetchedData, row.cells)}</td>
                                    </tr>
                                )}
                            </Fragment>
                        )
                    })}
                </tbody>
            </Table>
            <Row style={{ maxWidth: 1000, margin: "0 auto", textAlign: "center", color: 'white' }}>
                <Col md={3}>
                    <Button
                        color="dark"
                        onClick={() => gotoPage(0)}
                        disabled={!canPreviousPage}
                    >
                        {"<<"}
                    </Button>
                    <Button
                        color="dark"
                        onClick={previousPage}
                        disabled={!canPreviousPage}
                    >
                        {"<"}
                    </Button>
                </Col>
                <Col md={2} style={{ marginTop: 7 }}>
                    Page{" "}
                    <strong>
                        {pageIndex + 1} of {pageOptions.length}
                    </strong>
                </Col>
                <Col md={2}>
                    <CustomInput type="select" value={pageSize} onChange={onChangeInSelect}>{[10, 20, 30, 40, 50].map(pageSize => (
                        <option key={pageSize} value={pageSize}>
                            Show {pageSize}
                        </option>
                    ))}
                    </CustomInput>
                </Col>
                <Col md={3}>
                    <Button color="dark" onClick={nextPage} disabled={!canNextPage}>
                        {">"}
                    </Button>
                    <Button
                        color="dark"
                        onClick={() => gotoPage(pageCount - 1)}
                        disabled={!canNextPage}
                    >
                        {">>"}
                    </Button>
                </Col>
            </Row>
        </Fragment>
    )
}

export default TableContainer