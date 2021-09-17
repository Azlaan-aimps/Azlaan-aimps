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
  CBadge,
  CSelect,
  CLabel,CCardHeader
} from "@coreui/react";
import "../../../style.css";
import usersData from "../../users/Users_mobileAppData";
import LockOpenSharpIcon from "@material-ui/icons/LockOpenSharp";
import BlockSharpIcon from "@material-ui/icons/BlockSharp";
import RateReviewIcon from "@material-ui/icons/RateReview";
import FastfoodSharpIcon from "@material-ui/icons/FastfoodSharp";
import AnnouncementSharpIcon from "@material-ui/icons/AnnouncementSharp";
import Badge from "@material-ui/core/Badge";


const fields = [
  {
    key: "Action",
    // _style: { width: "10%" },
  },
  {
    key: "SLNo",
  },
  {
    key: "Name",
  },
  {
    key: "E-Mail",
  },
  {
    key: "Mobile",
  },
  {
    key: "City",
  },
  {
    key: "Total Orders",
  },
  {
    key: "Negative Balance",
  },
  {
    key: "Reviews",
  },
  {
    key: "Non-Responded Orders",
  },
  {
    key: "Coupon Availed",
  },
];

const getBadge = (Coupons) => {
  switch (Coupons) {
    case "Availed":
      return "success";
    case "Not-applicable":
      return "danger";
    case "Expired":
      return "danger";
    default: return "info";
  }
};

const table = { placeholder: "Search here...", label: "Search:  " };
const items = { label: "Rows", values: [5, 10, 25, 50, 75, 100] };

const Users_mobileApp = () => {
  const [success, setSuccess] = useState(false);
  const [info, setInfo] = useState(false);
  const [Non, setNon] = useState(false);
  const [coupon, setCoupoun] = useState(false);
  const [block, setBlock] = useState(false);

  return (
    <div>
      <h1 id="ccmaster">Mobile App Users</h1>
      <CRow>
        <CCol col="10">
          <CCard>
          <CCardHeader>App Users</CCardHeader>
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
                        <CButton size="sm" id="activate">
                        <LockOpenSharpIcon></LockOpenSharpIcon>
                      </CButton>
                        </CCol>
                        <CCol md="2">
                        <CButton
                        size="sm"
                        id="deactivate1"
                        onClick={() => {
                          setBlock(!block);
                        
                        }}
                      >  <BlockSharpIcon></BlockSharpIcon>
                      </CButton>
                        </CCol>
                    
                      </CRow>
                    
                       
                      
                    </td>
                  ),
                  "Total Orders": (item) => (
                    <td>
                      <CButton
                        id="order-list"
                        onClick={() => setSuccess(!success)}
                      >
                        <FastfoodSharpIcon fontSize="medium" />
                      </CButton>
                    </td>
                  ),
                  Reviews: (item) => (
                    <td>
                      <CButton onClick={() => setInfo(!info)}>
                        <Badge badgeContent={2} color="primary">
                          <RateReviewIcon fontSize="medium" />
                        </Badge>
                      </CButton>
                    </td>
                  ),
                  "Non-Responded Orders": (item) => (
                    <td>
                      <CButton onClick={() => setNon(!Non)}>
                        <Badge badgeContent={3} color="error">
                          <AnnouncementSharpIcon fontSize="medium" />
                        </Badge>
                      </CButton>
                    </td>
                  ),
                  "Coupon Availed": (item) => (
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


            
              <CModal
                show={success}
                onClose={() => setSuccess(!success)}
                color="success"
              >
                <CModalHeader closeButton>
                  <CModalTitle>Order List</CModalTitle>
                </CModalHeader>
                <CModalBody>
                Order No     : 0012<br></br>
                Order Item   : Grocery Kit<br></br>
                Quantity     : 2<br></br>
                Total Amount : 900<br></br>
                <hr></hr>
                Order No     : 0013<br></br>
                Order Item   : Pizza<br></br>
                Quantity     : 2<br></br>
                Total Amount : 900<br></br>
                <hr></hr>
                Order No     : 0014<br></br>
                Order Item   : Tablets<br></br>
                Quantity     : 2<br></br>
                Total Amount : 900<br></br>
                </CModalBody>
                <CModalFooter>
                  <CButton color="success" onClick={() => setSuccess(!success)}>
                    Done
                  </CButton>{" "}
                  <CButton
                    color="secondary"
                    onClick={() => setSuccess(!success)}
                  >
                    Cancel
                  </CButton>
                </CModalFooter>
              </CModal>


              <CModal show={info} onClose={() => setInfo(!info)} color="info">
                <CModalHeader closeButton>
                  <CModalTitle>Reviews</CModalTitle>
                </CModalHeader>
                <CModalBody>
                  Order Name : Grocery Kit<br></br>
                  Order Type : Online<br></br>
                  Order Number : 7346<br></br>
                  Review's :<br></br>
                 
                  
                  Very Good Service by Loyal World, its very easy to process
                  order, Got Delivery on Time Food qaulity and taste is very
                  Good Thanks...,
                  <hr></hr>
                  Order Name : Tablets<br></br>
                  Order Type : Online<br></br>
                  Order Number : 72146<br></br>
                  Review's :<br></br>
                 
                
                  Very Good Service by Home World, its very easy to process
                  order, Got Delivery on Time Food qaulity and taste is very
                  Good Thanks ...,
                </CModalBody>
                <CModalFooter>
                  <CButton color="info" onClick={() => setInfo(!info)}>
                    Done
                  </CButton>{" "}
                  <CButton color="secondary" onClick={() => setInfo(!info)}>
                    Cancel
                  </CButton>
                </CModalFooter>
              </CModal>


              <CModal show={Non} onClose={() => setNon(!Non)} color="danger">
                <CModalHeader closeButton>
                  <CModalTitle>Non Responded Orders</CModalTitle>
                </CModalHeader>
                <CModalBody>
                  Order Name : Vegitables<br></br>
                  Order Type : Online<br></br>
                  Order Number : 7346<br></br>
                  Reason for Cancellation : <span>Delivery was Late</span>
                  <hr></hr>
                  Order Name : Pizza<br></br>
                  Order Type : Online<br></br>
                  Order Number : 72146<br></br>
                  Reason for Cancellation :{" "}
                  <span>Customer not available in premisses</span>
                </CModalBody>
                <CModalFooter>
                  <CButton color="danger" onClick={() => setNon(!Non)}>
                    Done
                  </CButton>{" "}
                  <CButton color="secondary" onClick={() => setNon(!Non)}>
                    Cancel
                  </CButton>
                </CModalFooter>
              </CModal>


              <CModal show={coupon} onClose={() => setCoupoun(!coupon)}>
                <CModalHeader closeButton>
                  <CModalTitle>Coupouns Availed</CModalTitle>
                </CModalHeader>
                <CModalBody>
                  <img
                    src="/Coupouns.jpg"
                    class="img-fluid"
                    alt="Responsive-images"
                  />
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
                  <br></br>
                  <br></br>
                  <CLabel>Suggestion to Unblock:</CLabel>
                  <CSelect>
                    <option value="">Upload Documents</option>
                    <option value="">Photo not clear</option>
                  </CSelect>
                  <br></br>
                  <CButton class="btn btn-square btn-info">Send Email</CButton>
                </CModalBody>
                <CModalFooter>
                  <CButton color="dark" onClick={() => setBlock(!block)}>
                    Done
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

export default Users_mobileApp;
