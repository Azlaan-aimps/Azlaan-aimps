import React from "react";
import {
  CCard,
  CCardBody,
  CCol,CInput,
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
    key: "User Name",
  },
 
  {
    key: "Date",
  },
  {
    key: "Amount",
  },
  {
    key: "Transaction Id",
  },
  {
    key: "Transaction Type",
  },
];

const table = { placeholder: "Search here...", label: "Search:  " };
const items = { label: "Rows", values: [5, 10, 25, 50, 75, 100] };

const Wallet = () => {

  return (
    <div>
      <h1 id="ccmaster">User's Wallet</h1>
      <CRow>
        <CCol md="12">
          <CCard>
            <CCardHeader>
            <CRow>
                <CCol md="3">
                  <CLabel htmlFor="nf-email">Select Marchant</CLabel>
                  <CSelect custom name="Marchant" id="Marchant">
                              <option value="0">Marchant</option>
                              <option value="1">Option #1</option>
                              <option value="2">Option #2</option>
                              <option value="3">Option #3</option>
                     </CSelect>
                </CCol>
                <CCol md="3">
                  <CLabel>From:</CLabel>
                  <CInput type="date"></CInput>

                </CCol> 
                
                <CCol md="3">
                  <CLabel>To:</CLabel>
                  <CInput type="date"></CInput>
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

export default Wallet;
