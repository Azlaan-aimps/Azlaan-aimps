import React from "react";
import {
  CCard,
  CCardBody,
  CCol,
  CDataTable,CSelect,CLabel,
  CRow,CCardHeader
} from "@coreui/react";
import "../../../style.css";
import usersData from "../../users/Users_Feedback";


const fields = [
  {
    key: "SL No",
    
  },
  {
    key: "OrderNo",
  },
  {
    key: "Date",
  },
  {
    key: "Description",
  },
  {
    key: "Ratings",
  },
  {
    key: "Rider/Merchant Name",
  },
];

const table = { placeholder: "Search here...", label: "Search:  " };
const items = { label: "Rows", values: [5, 10, 25, 50, 75, 100] };

const UserFeedback = () => {

  return (
    <div>
      <h1 id="ccmaster">Feedback By User's</h1>
      <CRow>
        <CCol md="12">
          <CCard>
            <CCardHeader>
            <CRow>
                <CCol md="3">
                  <CLabel htmlFor="nf-email">Select User</CLabel>
                  <CSelect custom name="Marchant" id="Marchant">
                              <option value="0">User</option>
                              <option value="1">Option #1</option>
                              <option value="2">Option #2</option>
                              <option value="3">Option #3</option>
                     </CSelect>
                </CCol>
                </CRow>
            </CCardHeader>
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

export default UserFeedback;
