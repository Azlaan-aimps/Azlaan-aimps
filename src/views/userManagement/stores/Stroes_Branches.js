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
  CSelect,
  CLabel,CCardHeader
} from "@coreui/react";
import "../../../style.css";
import usersData from "../../users/Users_Stroes";
import LockOpenSharpIcon from "@material-ui/icons/LockOpenSharp";
import BlockSharpIcon from "@material-ui/icons/BlockSharp";
import MenuBookSharpIcon from "@material-ui/icons/MenuBookSharp";
import PhotoLibrarySharpIcon from "@material-ui/icons/PhotoLibrarySharp";
import RateReviewSharpIcon from "@material-ui/icons/RateReviewSharp";
import { useHistory } from 'react-router-dom';
import { Block } from "@material-ui/icons";

const fields = [
  {
    key: "Action",
    // _style: { width: "10%" },
  },
  {
    key: "Name",
  },
  {
    key: "Mobile",
  },
  {
    key: "City",
  },
  {
    key: "Manager",
  },
  {
    key: "Total Orders",
  },
  {
    key: "Total Sales",
  },
  {
    key: "Items",
  },
  {
    key: "Feed Back",
  },
  {
    key: "Store Images",
  },
];

const table = { placeholder: "Search here...", label: "Search:  " };
const items = { label: "Rows", values: [5, 10, 25, 50, 75, 100] };

const Stroes_Store = (props) => {
  const [coupon, setCoupoun] = useState(false);
  const [block, setBlock] = useState(false);
  

  let history = useHistory();

  const redirect = () => {
    history.push("/users_Management/itemsMenu");
  }

  const FeedbackPage = () => {
    history.push("/users_Management/feedbackpage");
  }

  return (
    <div>
      <h1 id="ccmaster">Store</h1>
      <CRow>
        <CCol col="10">
          <CCard>
          <CCardHeader>Available Stores</CCardHeader>
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
                  Action: (item) => (
                    <td>
                      <CRow>
                        <CCol md="2">
                        <CButton size="sm" id="deactivate1">
                        <LockOpenSharpIcon></LockOpenSharpIcon>
                      </CButton>
                        </CCol>
                        <CCol md="2">
                        <CButton
                        size="sm"
                        id="activate"
                        onClick={() => {
                          setBlock(!block);
                        }}
                      >
                        <BlockSharpIcon></BlockSharpIcon>
                      </CButton>
                        </CCol>
                      </CRow>
                  
                    
                    </td>
                  ),
                  Items: (item) => (
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
                  "Feed Back": () => (
                    <td>
                      <CButton onClick={FeedbackPage} >
                        <RateReviewSharpIcon/>
                      </CButton>
                    </td>
                  ),
                  "Store Images": () => (
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
                  <CModalTitle>Store Images</CModalTitle>
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
                  <span>Blocked Due to :</span>KYC Documents not uploaded<br></br>
                  <CLabel>Reason for blocking:</CLabel>
                  <CSelect>
                    <option value="">Upload Documents</option>
                    <option value="">Photo not clear</option>
                    <option value="">Document not uploaded</option>
                    <option value="">Other Reason</option>
                  </CSelect>
                  
                  <br></br>
                  <CLabel>Suggestion to Unblock:</CLabel>
                  <CSelect>
                    <option value="">Upload Documents</option>
                    <option value="">Photo not clear</option>
                    <option value="">Document not uploaded</option>
                    <option value="">Other Reason</option>
                  </CSelect>
                  <br></br>
                  
                </CModalBody>
                <CModalFooter>
               
                  <CButton class="btn btn-square btn-danger" color="dark" onClick={() => setBlock(!block)}>
                    BLOCK
                  </CButton>
                  <CButton color="secondary" onClick={() => setBlock(!block)}>
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

export default Stroes_Store;
