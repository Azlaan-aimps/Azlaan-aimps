import React, { useState } from "react";
import {
  CCard,
  CCardBody,
  CCol,
  CDataTable,
  CRow,
  
  
  CCardHeader,
  CButton,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CSelect,CInput,
  CLabel,
  CCardFooter,
  
} from "@coreui/react";
import { Badge } from '@material-ui/core';
import "../../style.css";
import TAABEDAR_SERVICE from "src/services/service";
import usersData from "../users/Users_SalesReport";
import PhotoLibrarySharpIcon from "@material-ui/icons/PhotoLibrarySharp";


const fields = [
  {
    key: "SL No",
  },
  {
    key:"Order No"
  },
  {
    key:"Order value"
  },
  {
    key: "Discount",
  },
  {
    key: "Change Amount",
  },
  {
    key: "Delivery Charge",
  },
  {
    key: "Final Amount",
  },
  {
    key: "Order Date",
  },
  {
    key: "Order Status",
  },
  
 {
    key: "Payment Method",
  },

];

const table = { placeholder: "Search here...", label: "Search:  " };
const items = { label: "Rows", values: [5, 10, 25, 50, 75, 100] };


const SalesReport = (props) => {
    const [coupon, setCoupoun] = useState(false);
    const [block, setBlock] = useState(false);
    const [Offers, setOffers] = useState(false);
    


  return (
    <div>
      <h1 id="ccmaster">Total Sales</h1>
      <CRow>
        
        <CCol md="12">
      
          <CCard>
            <CCardBody>
            <CRow>
              <CCol>
                <CCard>
                <CCardHeader>
                    <CRow>
                        <CCol md="4">
                        <CLabel htmlFor="nf-email">Month</CLabel>
                       <CSelect custom name="Store" id="Store">
                              <option value="0">Jan</option>
                              <option value="1">Feb</option>
                              <option value="2">March</option>
                              <option value="3">Option #3</option>
                     </CSelect>
                        </CCol>
                        <CCol md="4">
                        <CLabel htmlFor="nf-email">From</CLabel>
                       <CInput type="date"></CInput>
                        </CCol>
                        <CCol md="4">
                        <CLabel htmlFor="nf-email">To</CLabel>
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
                    Coupons: () => (
                        <td>
                          <CButton onClick={() => setCoupoun(!coupon)}>
                          <Badge badgeContent={2} color="primary">
                          <PhotoLibrarySharpIcon fontSize="medium"></PhotoLibrarySharpIcon>
                          </Badge>
                            
                          </CButton>
                        </td>
                      ),
                      Reviews: () => (
                        <td>
                          <CButton onClick={() => setBlock(!block)}>
                            <PhotoLibrarySharpIcon fontSize="medium"></PhotoLibrarySharpIcon>
                          </CButton>
                        </td>
                      ),
                      Offers: () => (
                        <td>
                          <CButton onClick={() => setOffers(!Offers)}>
                          <Badge badgeContent={5} color="primary">
                          <PhotoLibrarySharpIcon fontSize="medium"></PhotoLibrarySharpIcon>
                          </Badge>
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
                  <CModalTitle>Reviews</CModalTitle>
                </CModalHeader>
                <CModalBody>
                <p><b>Reviews</b></p>
                <p><span>1.very best servives by the team.offers a huge variety of foods, so
                     that there is something for each taste. The filters enable a fast 
                     search for certain diets or kitchen styles (e.g. italian, german, 
                     american and so on). The food can be payed directly through the app 
                     (available for iOS and Android) with a credit card,
                     so there is no need to check if you have enough cash on your hand.</span></p>
                <hr></hr>
                
                <p><span>2.offers a huge variety of foods, so
                     that there is something for each taste. The filters enable a fast 
                     search for certain diets or kitchen styles (e.g. italian, german, 
                     american and so on). The food can be payed directly through the app 
                     (available for iOS and Android) with a credit card,
                     so there is no need to check if you have enough cash on your hand.</span></p>
                <hr></hr>
                  
                  
                </CModalBody>
                <CModalFooter>
                  <CButton color="dark" onClick={() => setBlock(!block)}>
                    Done
                  </CButton>
                  {/* <CButton color="secondary" onClick={() => setBlock(!block)}>
                    Cancel
                  </CButton> */}
                </CModalFooter>
              </CModal>

              <CModal show={Offers} onClose={() => setOffers(!Offers)} color="dark">
                <CModalHeader closeButton>
                  <CModalTitle>Offers</CModalTitle>
                </CModalHeader>
                <CModalBody>
               
                <p><span>1.Grocery - 20%</span></p>
                <hr></hr>
                <p><span>2.Medical - 50%</span></p>
                <hr></hr>
                <p><span>3.Medical - 50%</span></p>
                <hr></hr>
                <p><span>4.Medical - 50%</span></p>
                <hr></hr>
                <p><span>5.Medical - 50%</span></p>
                <hr></hr> 
               
                  
                  
                </CModalBody>
                <CModalFooter>
                  <CButton color="dark" onClick={() => setBlock(!block)}>
                    Done
                  </CButton>
                  {/* <CButton color="secondary" onClick={() => setBlock(!block)}>
                    Cancel
                  </CButton> */}
                </CModalFooter>
              </CModal>
              </CCardBody>
                </CCard>
              </CCol>
            </CRow>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>


      <CRow>
       
        <CCol md="12">
       <CCard>
   
       <CCardBody>
       <CRow>
              <CCol>
                <CCard>
                  <CCardHeader>
                  Total
               </CCardHeader>
                  <CCardBody>
        
            <p style={{fontSize: '14px'}}><span>Order value     : </span>5,20,000</p>
            <p style={{fontSize: '14px'}}><span> Total Discount : </span>956</p>
            <p style={{fontSize: '14px'}}><span>Change Amount   : </span>500</p>
            <p style={{fontSize: '14px',color:'green'}}><span>Final Amount    : </span>6,20,000</p>
         
            </CCardBody>
                </CCard>
              </CCol>
            </CRow>
       </CCardBody>
       <CCardFooter></CCardFooter>
      </CCard>
        </CCol>
     </CRow>
    </div>
  );
};

export default SalesReport;
