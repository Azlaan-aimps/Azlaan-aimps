import React from "react";
import { CCard, CCardBody, CCardHeader, CCol, CRow } from "@coreui/react";

import "../../../src/style.css";

import { useHistory } from "react-router-dom";
import { green } from "@material-ui/core/colors";

const Pendings = () => {
  let history = useHistory();

  const redirect1 = () => {
    history.push("/VendroOrderDetails");
  };

  return (
    <>
      <CRow>
        <CCol md="3"></CCol>
        <CCol md="6">
          <h1 id="ccmaster">Order Details</h1>
        </CCol>
        <CCol md="3"></CCol>
      </CRow>

      <CRow>
        <CCol md="2"></CCol>
        <CCol md="8">
          <CCard>
            <CCardBody>
              <CRow>
                <CCol>
                  <CCard>
                    <CCardHeader>Order Details</CCardHeader>
                    <CCardBody>
                      <CRow>
                        <CCol md="6">
                          <span>Order ID :</span>
                          <br></br>
                          <span>Customer Name :</span>
                          <br></br>
                          <span>Total Items :</span>
                          <br></br>
                          <span>Delivery Address :</span>
                          <br></br>
                          <span>Phone :</span>
                          <br></br>
                          <span>Order Date :</span>
                          <br></br>
                          <span>Order Amount :</span>
                          <br></br>
                          <span>Discount Amount :</span>
                          <br></br>
                          <span>Final Amount :</span>
                          <br></br>
                          <span>Payment Type:</span>
                          <br></br>
                          <br></br>
                        </CCol>
                        <CCol md="6">
                          <p style={{ lineHeight: "8px" }}>78945</p>
                          <p style={{ lineHeight: "8px" }}>Shabaz</p>

                          <p style={{ lineHeight: "8px" }}>3</p>
                          <p style={{ lineHeight: "8px" }}>
                            15th cross Saraswathipuram,Mysuru
                          </p>

                          <p style={{ lineHeight: "8px" }}>9663090137</p>
                          <p style={{ lineHeight: "8px" }}>21/2/2020</p>
                          <p style={{ lineHeight: "8px" }}>5,545</p>
                          <p style={{ lineHeight: "8px" }}>545</p>
                          <p
                            style={{
                              lineHeight: "8px",
                              color: "green",
                              fontWeight: "700",
                            }}
                          >
                            5000
                          </p>
                          <p style={{ lineHeight: "8px" }}>COD</p>
                        </CCol>
                      </CRow>

                      <br></br>
                      <hr></hr>
                      <br></br>
                      <CRow>
                        <CCol md="3"></CCol>
                        <CCol md="6">
                          <h1 id="ccmaster">Order Items</h1>
                        </CCol>
                        <CCol md="3"></CCol>
                      </CRow>
                      <CRow>
                        <CCol md="2">
                          <span>SL No</span>
                        </CCol>
                        <CCol md="3">
                          <span>Item</span>
                        </CCol>
                        <CCol md="2">
                          <span>Quantity</span>
                        </CCol>
                        <CCol md="2">
                          <span>Size</span>
                        </CCol>
                        <CCol md="2">
                          <span>Amount</span>
                        </CCol>
                      </CRow>
                      <hr></hr>
                      <CRow>
                        <CCol md="2">
                          <span>1</span>
                        </CCol>
                        <CCol md="3">
                          <span>Briyani</span>
                        </CCol>
                        <CCol md="2">
                          <span>3</span>
                        </CCol>
                        <CCol md="2">
                          <span>Plate</span>
                        </CCol>
                        <CCol md="2">
                          <span>500</span>
                        </CCol>
                      </CRow>
                      <CRow>
                        <CCol md="2">
                          <span>2</span>
                        </CCol>
                        <CCol md="3">
                          <span>Tandoori</span>
                        </CCol>
                        <CCol md="2">
                          <span>3</span>
                        </CCol>
                        <CCol md="2">
                          <span>Plate</span>
                        </CCol>
                        <CCol md="2">
                          <span>500</span>
                        </CCol>
                      </CRow>
                      <CRow>
                        <CCol md="2">
                          <span>3</span>
                        </CCol>
                        <CCol md="3">
                          <span>Chicken Kabab</span>
                        </CCol>
                        <CCol md="2">
                          <span>3</span>
                        </CCol>
                        <CCol md="2">
                          <span>Plate</span>
                        </CCol>
                        <CCol md="2">
                          <span>500</span>
                        </CCol>
                      </CRow>
                    </CCardBody>
                  </CCard>
                </CCol>
              </CRow>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol md="2"></CCol>
      </CRow>
    </>
  );
};

export default Pendings;
