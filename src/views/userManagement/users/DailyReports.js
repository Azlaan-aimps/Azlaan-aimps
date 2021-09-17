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
import usersData from "../../users/Users_DailyReport";

const fields = [
  {
    key: "SL No",
  },
  {
    key: "Date",
  },
  {
    key: "Day",
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

const DailyReports = (props) => {
  const [coupon, setCoupoun] = useState(false);

  return (
    <div>
      <h1 id="ccmaster">Daily Report's</h1>
      <CRow>
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

export default DailyReports;
