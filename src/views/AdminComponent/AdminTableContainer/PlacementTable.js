import React, { Fragment, useState, useEffect } from "react";
import { useTable, useSortBy, useExpanded, usePagination } from "react-table";
import axios from "axios";
import { CSVLink } from "react-csv";

import "bootstrap/dist/css/bootstrap.min.css";
// reactstrap component
import {
  Button,
  Card,
  CardBody,
  Table,
  Row,
  Col,
  CustomInput,
  Modal,
  ModalBody,
} from "reactstrap";

import Add from "../../../components/Modal/AddForm";
import { deadlineFormatter } from "actions/userActions";

import { ReactComponent as DownloadIcon } from "../../../assets/img/icons/common/save_alt_white_24dp.svg";
import { ReactComponent as DeleteIcon } from "../../../assets/img/icons/common/delete_white_24dp.svg";

import {
  tablestyle,
  headingstyle,
  expandbgstyle,
} from "../../../components/Style/css_style";

function getCookie(name) {
  var cookieValue = null;
  if (document.cookie && document.cookie != "") {
    var cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i].trim();
      if (cookie.substring(0, name.length + 1) == name + "=") {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
}

const base_url = "http://127.0.0.1:8000";

const TableContainer = ({ columns, data, changeData }) => {
  const [fetchedData, setFetchedData] = useState([]);
  const [changed, setChanged] = useState(true);
  const [csvLink, setCsvLink] = useState(React.createRef());
  const [expand, setExpand] = useState(true);

  useEffect(() => {
    async function fetchData() {
      if (changed === true) {
        await axios
          .get(base_url + "/admin/placements/")
          .then((response) => {
            setFetchedData(response.data);
            changeData(response.data);
            setCsvLink(React.createRef());
          })
          .catch((error) => console.log(error));
        setChanged(false);
        setExpand(true);
      }
    }
    fetchData();
  }, [changed]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable({ columns, data }, useSortBy, useExpanded, usePagination);

  const [csvData, setCsvData] = useState([]);
  const [name, setName] = useState("");
  const [isAddModal, setIsAddModal] = useState(false);
  const [isDeleteModal, setIsDeleteModal] = useState({
    status: false,
    company: null,
    index: null,
  });

  // For sorting columns
  const generateSortingIndicator = (column) => {
    return column.isSorted ? (column.isSortedDesc ? " 🔽" : " 🔼") : "";
  };

  // Pagination - Go to page number
  const onChangeInSelect = (event) => {
    setPageSize(Number(event.target.value));
  };

  // Card on expanding rows
  const renderRowSubComponent = (fetchedData, cells) => {
    // Cells contains value of each coulmn of the Row
    let index = parseInt(cells[0]["row"]["id"]);
    return (
      <>
        <Card style={expandbgstyle}>
          <CardBody>
            <strong style={headingstyle}>Job Details</strong>
            <p>{fetchedData[index]["description"]}</p>
            <strong style={headingstyle}>Eligible Batches</strong>
            <br />
            {fetchedData[index]["eligible_batches"].map((i) => {
              return <p style={{ display: "inline" }}>{i + " , "}</p>;
            })}
            <br />
            <br />
            <strong style={headingstyle}>Eligible Branches</strong>
            <br />
            {fetchedData[index]["eligible_branches"].map((i) => {
              return <p style={{ display: "inline" }}>{i + " , "}</p>;
            })}
            <br />
            <br />
            <strong style={headingstyle}>Eligible Programmes</strong>
            <br />
            {fetchedData[index]["eligible_programmes"].map((i) => {
              return <p style={{ display: "inline" }}>{i + " , "}</p>;
            })}
          </CardBody>
        </Card>
      </>
    );
  };

  // After clicking on Download Icon
  const handleDownload = async (event, cells) => {
    event.preventDefault();

    let index = parseInt(cells[0]["row"]["id"]);
    await axios
      .get(
        base_url + "/admin/downloadPlacement/" + fetchedData[index]["key"] + "/"
      )
      .then((res) => {
        setCsvData(res.data);
        setName(fetchedData[index]["placement_name"]);
      })
      .catch((error) => console.log(error));
    csvLink.current.link.click();
  };

  // Add Offer Modal
  const handleModal = () => {
    setIsAddModal(!isAddModal);
  };

  // to handle delete modal confirmation
  const handleDeleteConfirm = async (event, index) => {
    event.preventDefault();

    let csrf_token = getCookie("csrftoken");
    setExpand(false);

    await axios
      .delete(base_url + "/admin/deletePlacement/", {
        headers: {
          "X-Requested-With": "XMLHttpRequest",
          "X-CSRFToken": csrf_token,
        },
        data: { key: fetchedData[index]["key"] },
      })
      .then((res) => {})
      .catch((error) => console.log(error));
    setChanged(true);
    // to remove Confirmation Modal after Confirming
    handleDeleteModal();
  };

  // Modal to delete a row
  const handleDeleteModal = (props) => {
    if (isDeleteModal["status"] == true)
      setIsDeleteModal({ status: false, company: null, index: null });
    else
      setIsDeleteModal({
        status: !isDeleteModal["status"],
        company: props["cells"][1]["value"],
        index: parseInt(props["cells"][0]["row"]["id"]),
      });
  };

  return (
    <Fragment>
      <Modal isOpen={isDeleteModal["status"]} toggle={handleDeleteModal}>
        <ModalBody>
          <hr />
          <h5>
            Are you sure, you want to delete the data of{" "}
            <b>{isDeleteModal["company"]}</b>
          </h5>
          <hr />
          <div className="text-right mr-2">
            <Button
              color="success"
              onClick={(e) => handleDeleteConfirm(e, isDeleteModal["index"])}
            >
              Confirm
            </Button>
            <Button onClick={handleDeleteModal}>Cancel</Button>
          </div>
          <hr />
        </ModalBody>
      </Modal>
      {/* Modal for Organization specific form by click on Apply*/}
      <Modal isOpen={isAddModal} toggle={handleModal}>
        <ModalBody>
          <Add toggle={handleModal} reload={setChanged} offer={"Placement"} />
        </ModalBody>
      </Modal>
      <Table responsive hover {...getTableProps()} style={tablestyle}>
        <thead style={{ background: "#ccc" }}>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                // <th {...column.getHeaderProps()}>{column.render("Header")}</th>
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  style={{ textAlign: "center" }}
                >
                  <strong>{column.render("Header")}</strong>
                  {generateSortingIndicator(column)}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tr>
          <td colSpan="9" style={{ textAlign: "center" }}>
            <Button
              onClick={handleModal}
              color="success"
              style={{ width: "100%" }}
            >
              Add Offer
            </Button>
          </td>
        </tr>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <Fragment key={row.getRowProps().key}>
                <tr>
                  {row.cells.map((cell, index) => {
                    return (
                      <>
                        {
                          // Starting 0-6 cells of a row
                          (index < 6 && index != 4)? (
                            <td
                              key={index}
                              style={{ textAlign: "center" }}
                              {...cell.getCellProps()}
                            >
                              {cell.render("Cell")}
                            </td>
                          ) : (
                            <></>
                          )
                        }
                        {
                          // Starting 0-6 cells of a row
                          index == 4 ? (
                            <td
                              key={index}
                              style={{ textAlign: "center" }}
                              {...cell.getCellProps()}
                            >
                              {deadlineFormatter(cell['row']['values']['deadline'])}
                            </td>
                          ) : (
                            <></>
                          )
                        }
                        {
                          //  7th cell of a row (Download Button)
                          index == 6 ? (
                            <td key={index} className="text-center">
                              <Button
                                color="success"
                                size="sm"
                                style={{ padding: "3px" }}
                                onClick={(e) => {
                                  handleDownload(e, row.cells);
                                }}
                              >
                                <DownloadIcon />
                              </Button>
                              <CSVLink
                                data={csvData}
                                filename={name + ".csv"}
                                className="hidden"
                                ref={csvLink}
                                target="_blank"
                              />
                            </td>
                          ) : (
                            <></>
                          )
                        }
                        {
                          // 8th cell of a row (Delete Button)
                          index == 7 ? (
                            <td key={index} className="text-center">
                              <Button
                                color="danger"
                                size="sm"
                                style={{ padding: "3px" }}
                                onClick={() => {
                                  handleDeleteModal(row);
                                }}
                              >
                                <DeleteIcon />
                              </Button>
                            </td>
                          ) : (
                            <></>
                          )
                        }
                      </>
                    );
                  })}
                  {/* Expansion row */}
                </tr>
                {row.isExpanded && expand && (
                  <tr>
                    <td colSpan="8">
                      {renderRowSubComponent(fetchedData, row.cells)}
                    </td>
                  </tr>
                )}
              </Fragment>
            );
          })}
        </tbody>
      </Table>
      {/* Pagination */}
      <Row
        style={{
          maxWidth: 1000,
          margin: "0 auto",
          textAlign: "center",
          color: "white",
        }}
      >
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
          <CustomInput
            type="select"
            value={pageSize}
            onChange={onChangeInSelect}
          >
            {[10, 20, 30, 40, 50].map((pageSize) => (
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
  );
};

export default TableContainer;
