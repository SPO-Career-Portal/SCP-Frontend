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
import axios from "axios";

// reactstrap components
import { Button } from "reactstrap";

// import Header from "../components/Headers/Header"
import TableContainer from "./AdminTableContainer/PlacementTable";
import { maingradient } from "../../components/Style/css_style";

import { ReactComponent as ShowIcon } from "../../assets/img/icons/common/add_white_24dp.svg";
import { ReactComponent as HideIcon } from "../../assets/img/icons/common/remove_white_24dp.svg";

const base_url = "http://127.0.0.1:8000";

const Placement = (props) => {
  // to store the fetched data
  const [fetchedData, setFetchedData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      axios.defaults.withCredentials = true;
      await axios
        .get(base_url + "/admin/placements/")
        .then((response) => {
          setFetchedData(response.data);
        })
        .catch((error) => console.log(error));
    }
    fetchData();
  }, []);

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
        Header: "Name",
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
      },
      {
        Header: "Details",
        id: "expander", // 'id' is required for expanding on clicking
        Cell: ({ row }) => (
          <Button
            color="primary"
            size="sm"
            {...row.getToggleRowExpandedProps()}
            style={{ padding: "2px" }}
          >
            {row.isExpanded ? <HideIcon /> : <ShowIcon />}
          </Button>
        ),
        disableSortBy: true,
      },
      {
        Header: "Download",
        disableSortBy: true,
      },
      {
        Header: "Delete",
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
            data={fetchedData}
            changeData={setFetchedData}
          />
        </div>
      </div>
    </>
  );
};

export default Placement;
