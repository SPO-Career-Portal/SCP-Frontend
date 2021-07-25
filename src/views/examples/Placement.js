import React, { useEffect, useState, useMemo } from "react";

// reactstrap components
import { Button } from "reactstrap";

// import Header from "../components/Headers/Header"
import TableContainer from "./TableContainer/PlacementTable";
import { maingradient } from "../../components/Style/css_style";

import { ReactComponent as ShowIcon } from "../../assets/img/icons/common/add_white_24dp.svg";
import { ReactComponent as HideIcon } from "../../assets/img/icons/common/remove_white_24dp.svg";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { fetchPlacements } from "../../actions/userActions";

const Placement = (props) => {
  // to store the fetched data
  const [fetchedData, setFetchedData] = useState([]);
  const dispatch = useDispatch();

  // fetch eligible Placements
  useEffect(() => {
    dispatch(fetchPlacements());
  }, []);

  const eligiblePlacement = useSelector(
    (state) => state.changeUserState.eligiblePlacement
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
        Header: "Placement Name",
        accessor: "placement_name",
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
        id: "expander", // 'id' is required for expanding on clicking
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
        disableSortBy: true,
      },
    ],
    []
  );

  return (
    <>
      {/* <Header /> */}
      <div style={maingradient}>
        <div>
          {/* Table Containing Placement Data */}
          <TableContainer
            columns={columns}
            data={
              eligiblePlacement == undefined ? fetchedData : eligiblePlacement
            }
          />
        </div>
      </div>
    </>
  );
};

export default Placement;
