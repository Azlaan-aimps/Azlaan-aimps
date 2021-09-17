import React, { useState } from "react";
import {
  CCard,
  CCardBody,
  CCol,
  CDataTable,
  CRow,
  CButton,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CSelect,CInput,
  CLabel,CCardHeader
} from "@coreui/react";
import "../../../style.css";
import usersData from "../../users/Payment";

import MenuBookSharpIcon from "@material-ui/icons/MenuBookSharp";
import PhotoLibrarySharpIcon from "@material-ui/icons/PhotoLibrarySharp";

import { useHistory } from 'react-router-dom';
import { Block } from "@material-ui/icons";

const fields = [
  {
    key: "SLNO",
    // _style: { width: "10%" },
  },
  {
    key: "Order_No",
  },
  {
    key: "Order_Summary",
  },
  {
    key: "Total_Amount",
  },
  {
    key: "Order_Date",
  },
  {
    key: "Rider",
  },
  {
    key: "Coupon Availed",
  },
  {
    key: "Merchant",
  },
  {
    key: "Discount",
  },

];

const table = { placeholder: "Search here...", label: "Search:  " };
const items = { label: "Rows", values: [5, 10, 25, 50, 75, 100] };

const OrderByUsers = (props) => {
  const [coupon, setCoupoun] = useState(false);
  const [block, setBlock] = useState(false);
  

  let history = useHistory();

  const redirect = () => {
    history.push("/users_Management/Order_Details");
  }



  return (
    <div>
      <h1 id="ccmaster">Orders By Users</h1>
      <CRow>
        <CCol col="10">
          <CCard>
          <CCardHeader>  <CRow>
                <CCol md="3">
                  <CLabel htmlFor="nf-email">Enter Mobile Number:</CLabel>
                  <CInput type="text"></CInput>
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
               
                    Order_Summary: (item) => (
                    <td>
                      <CButton
                        id="order-list"
                              onClick={redirect}
                              size="md"
                      >
                        <MenuBookSharpIcon  />
                      </CButton>
                    </td>
                  ),
               
                  "Coupon Availed": () => (
                    <td>
                      <CButton onClick={() => setCoupoun(!coupon)}>
                        <PhotoLibrarySharpIcon fontSize="medium"></PhotoLibrarySharpIcon>
                      </CButton>
                    </td>
                  ),
                }}
              />

              <CModal show={coupon} onClose={() => setCoupoun(!coupon)}>
                <CModalHeader closeButton>
                  <CModalTitle>Coupon Availed</CModalTitle>
                </CModalHeader>
                <CModalBody>
                  <CRow>
                    <CCol md="1"></CCol>
                    <CCol md="10">
                    <img
                    src="/store1.jpeg"
                    class="img-fluid"
                    alt="Responsive-images"
                  /><br></br>
                  <br></br>
                    <img
                    src="/Store2.png"
                    class="img-fluid"
                    alt="Responsive-images"
                  />
                    </CCol>
                    <CCol md="1"></CCol>
                  </CRow>
                
                </CModalBody>
                <CModalFooter>
                  <CButton color="danger" onClick={() => setCoupoun(!coupon)}>
                    Done
                  </CButton>
                  <CButton
                    color="secondary"
                    onClick={() => setCoupoun(!coupon)}
                  >
                    Cancel
                  </CButton>
                </CModalFooter>
              </CModal>

              <CModal show={block} onClose={() => setBlock(!block)} color="dark">
                <CModalHeader closeButton>
                  <CModalTitle>Blocked</CModalTitle>
                </CModalHeader>
                <CModalBody>
                  <b>Blocked Due to :</b>Payment Due on 10/04/2021<br></br>
                  <br></br>
                  <br></br>
                  <CLabel>Suggestion to Unblock:</CLabel>
                  <CSelect>
                    <option value="">Select</option>
                    <option value="">
                      Payment Due: Please pay your Outstanding Dues
                    </option>
                    <option value="">Photo not clear</option>
                  </CSelect>
                  <br></br>
                  <CButton class="btn btn-square btn-info">Send Email</CButton>
                </CModalBody>
                <CModalFooter>
                  <CButton color="dark" onClick={() => setBlock(!block)}>
                    Done
                  </CButton>
                  <CButton color="secondary" onClick={() => setBlock(!Block)}>
                    Cancel
                  </CButton>
                </CModalFooter>
              </CModal>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </div>
  );
};

export default OrderByUsers;
