import React, { useEffect, useState, useMemo } from "react";

// reactstrap components
import { Button, Card, CardBody } from "reactstrap";

// import Header from "../components/Headers/Header"
import TableContainer from "./TableContainer/InternshipTable";
import { maingradient } from "../../components/Style/css_style";

import { ReactComponent as ShowIcon } from "../../assets/img/icons/common/add_white_24dp.svg";
import { ReactComponent as HideIcon } from "../../assets/img/icons/common/remove_white_24dp.svg";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { fetchInternships } from "../../actions/userActions";

const Internship = (props) => {
  // to store the fetched data
  const [fetchedData, setFetchedData] = useState([]);
  const dispatch = useDispatch();

  // fetch eligible Internships
  useEffect(() => {
    dispatch(fetchInternships());
  }, []);

  const eligibleInternship = useSelector(
    (state) => state.changeUserState.eligibleInternship
  );

  // Column Headers for the table
  const columns = useMemo(
    () => [
      {
        Header: "Sr.No.",
        Cell: ({ row }) => {
          return <span>{parseInt(row.id) + 1}</span>;
        },
      },
      {
        Header: "Internship Name",
        accessor: "intern_name",
      },
      {
        Header: "Organisation",
        accessor: "company",
      },
      {
        Header: "Profile",
        accessor: "role",
      },
      {
        Header: "Deadline",
        accessor: "deadline",
        disableSortBy: true,
      },
      {
        Header: "Details",
        id: "expander", // 'id' is required
        Cell: ({ row }) => (
          <Button
            color="primary"
            size="sm"
            {...row.getToggleRowExpandedProps()}
            style={{ padding: "3px" }}
          >
            {row.isExpanded ? <HideIcon /> : <ShowIcon />}
          </Button>
        ),
      },
    ],
    []
  );

  return (
    <>
      {/* <Header /> */}
      <div style={maingradient}>
        <div>
          <TableContainer
            columns={columns}
            data={
              eligibleInternship == undefined ? fetchedData : eligibleInternship
            }
          />
        </div>
      </div>
    </>
  );
};

export default Internship;
