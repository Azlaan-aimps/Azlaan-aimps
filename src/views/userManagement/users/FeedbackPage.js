import React from "react";
import {
  CCard,
  CCardBody,
  CCol,
  CDataTable,
  CRow,CCardHeader
} from "@coreui/react";
import "../../../style.css";
import usersData from "../../users/Users_Feedback";


const fields = [
  {
    key: "SLNo",
    
  },
  {
    key: "User Name",
  },
  {
    key: "E-Mail",
  },
  {
    key: "Mobile",
  },
  {
    key: "OrderNo",
  },
  {
    key: "Description",
  },
  {
    key: "Ratings",
  },
];

const table = { placeholder: "Search here...", label: "Search:  " };
const items = { label: "Rows", values: [5, 10, 25, 50, 75, 100] };

const FeedbackPage = () => {

  return (
    <div>
      <h1 id="ccmaster">Feedback By User's</h1>
      <CRow>
        <CCol md="12">
          <CCard>
            <CCardHeader>Feedback</CCardHeader>
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
                  Ratings: (item) => (
                    <td>
                      <div>
                        <img
                          class="icon-image rider-image"
                          src="/star.png"
                          alt="Responsive-images"
                        />
                      </div>
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

export default FeedbackPage;
