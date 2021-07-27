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
import React, { useMemo } from "react";

// reactstrap components
import { Button } from "reactstrap";

// import Header from "../components/Headers/Header"
import TableContainer from "./examples/TableContainer/DashboardTable.js";
// Show/Hide (+/-)Icon
import { ReactComponent as ShowIcon } from "../assets/img/icons/common/add_white_24dp.svg";
import { ReactComponent as HideIcon } from "../assets/img/icons/common/remove_white_24dp.svg";

// Styling for background
import { maingradient } from "../components/Style/css_style";

const Index = (props) => {
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
        Header: "Organisation",
        accessor: "organisation",
      },
      {
        Header: "Profile",
        accessor: "profile",
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
            style={{ padding: "2px" }}
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
        <TableContainer columns={columns} data={[]} />
      </div>
    </>
  );
};

export default Index;
