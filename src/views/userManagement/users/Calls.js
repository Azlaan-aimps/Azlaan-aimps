import React, { useState } from "react";
import {
  CCard,
  CCardBody,
  CCol,
  CDataTable,
  CRow,
    CButton,
  CBadge,
} from "@coreui/react";
import "../../../style.css";
import usersData from "../../users/Users_Calls";


const fields = [
  {
    key: "SL No",
  },
  {
    key: "Call's Log",
  },
  {
    key: "Duration",
  },
  {
    key: "Complaint-No",
  },
  {
    key: "Issue Note",
  },
  {
    key: "Issue Status",
  },
];

const table = { placeholder: "Search here...", label: "Search:  " };
const items = { label: "Rows", values: [5, 10, 25, 50, 75, 100] };

const getBadge = (Coupons) => {
  switch (Coupons) {
    case "Closed":
      return "success";
    case "On-Hold":
      return "warning";
    case "Open":
      return "danger";
    default:
      return "info";
  }
};

const Calls = (props) => {
  const [coupon, setCoupoun] = useState(false);

  return (
    <div>
      <h1 id="ccmaster">Calls Log</h1>
      <CRow>
        <CCol md="12">
          <CCard>
            <CCardBody id="StoreDetail">
              <h4 id="left">
                            <span>Excutive ID:</span>GHF543
                              </h4>
                          <h4>
              <span>Excutive Name:</span>Alvin Jhosep
              </h4>
              <br></br>
              <h4>
              <span>E-Mail:</span>abc112@gmail.com
              </h4>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol md="12">
          <CCard>
            <CCardBody>
              <CDataTable
                              items={usersData}
                              fields={fields}
                              hover
                              striped
                              bordered
                              sorter
                              tableFilter={table}
                              itemsPerPage={4}
                              pagination
                              size="sm"
                              itemsPerPageSelect={items}
                              scopedSlots={{
                                  "Issue Status": (item) => (
                                      <td>
                                          <CButton onClick={() => setCoupoun(!coupon)}>
                                              <CBadge color={getBadge(item.Coupons)}>
                                                  {item.Coupons}
                                              </CBadge>
                                          </CButton>
                                      </td>
                                  ),
                              }}
              />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </div>
  );
};

export default Calls;
