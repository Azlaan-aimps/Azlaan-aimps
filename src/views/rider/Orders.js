import React from "react";
import { CCard, CCardBody, CCol, CRow } from "@coreui/react";

import "../../../src/style.css";

import { useHistory } from "react-router-dom";
import TAABEDAR_SERVICE from "src/services/service";

const Pendings = () => {
  let history = useHistory();

  const redirect1 = () => {
    history.push("/OrderDetails");
  };

  return (
    <>
      <CRow>
        <CCol md="3"></CCol>
        <CCol md="6">
          <h1 id="ccmaster">Orders</h1>
        </CCol>
        <CCol md="3"></CCol>
      </CRow>
      <CRow onClick={redirect1}>
        <CCol md="2"></CCol>
        <CCol md="8">
          <CCard>
            <CCardBody>
              <CRow>
                <CCol md="2">
                  <img
                    class="icon-image rider-image1"
                    src="/1.jpg"
                    alt="Responsive-images"
                  />
                </CCol>
                <CCol md="8">
                  <p style={{ fontSize: "12px", lineHeight: " 0px" }}>
                    <span>Name :</span>Mysuru Mall
                  </p>
                  <p style={{ fontSize: "12px", lineHeight: " 0px" }}>
                    <span>Location :</span> Saraswathipuram
                  </p>
                  <p style={{ fontSize: "12px", lineHeight: " 0px" }}>
                    <span>Order Number :</span>2587
                  </p>
                  <p style={{ fontSize: "12px", lineHeight: " 0px" }}>
                    <span>Status :</span>Delivered
                  </p>
                </CCol>
              </CRow>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol md="2"></CCol>
      </CRow>
      <CRow onClick={redirect1}>
        <CCol md="2"></CCol>
        <CCol md="8">
          <CCard>
            <CCardBody>
              <CRow>
                <CCol md="2">
                  <img
                    class="icon-image rider-image1"
                    src="/1.jpg"
                    alt="Responsive-images"
                  />
                </CCol>
                <CCol md="8">
                  <p style={{ fontSize: "12px", lineHeight: " 0px" }}>
                    <span>Name :</span>Mysuru Mall
                  </p>
                  <p style={{ fontSize: "12px", lineHeight: " 0px" }}>
                    <span>Location :</span> Saraswathipuram
                  </p>
                  <p style={{ fontSize: "12px", lineHeight: " 0px" }}>
                    <span>Order Number :</span>2587
                  </p>
                  <p style={{ fontSize: "12px", lineHeight: " 0px" }}>
                    <span>Status :</span>Delivered
                  </p>
                </CCol>
              </CRow>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol md="2"></CCol>
      </CRow>
      <CRow onClick={redirect1}>
        <CCol md="2"></CCol>
        <CCol md="8">
          <CCard>
            <CCardBody>
              <CRow>
                <CCol md="2">
                  <img
                    class="icon-image rider-image1"
                    src="/1.jpg"
                    alt="Responsive-images"
                  />
                </CCol>
                <CCol md="8">
                  <p style={{ fontSize: "12px", lineHeight: " 0px" }}>
                    <span>Name :</span>Mysuru Mall
                  </p>
                  <p style={{ fontSize: "12px", lineHeight: " 0px" }}>
                    <span>Location :</span> Saraswathipuram
                  </p>
                  <p style={{ fontSize: "12px", lineHeight: " 0px" }}>
                    <span>Order Number :</span>2587
                  </p>
                  <p style={{ fontSize: "12px", lineHeight: " 0px" }}>
                    <span>Status :</span>Delivered
                  </p>
                </CCol>
              </CRow>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol md="2"></CCol>
      </CRow>
      <CRow onClick={redirect1}>
        <CCol md="2"></CCol>
        <CCol md="8">
          <CCard>
            <CCardBody>
              <CRow>
                <CCol md="2">
                  <img
                    class="icon-image rider-image1"
                    src="/1.jpg"
                    alt="Responsive-images"
                  />
                </CCol>
                <CCol md="8">
                  <p style={{ fontSize: "12px", lineHeight: " 0px" }}>
                    <span>Name :</span>Mysuru Mall
                  </p>
                  <p style={{ fontSize: "12px", lineHeight: " 0px" }}>
                    <span>Location :</span> Saraswathipuram
                  </p>
                  <p style={{ fontSize: "12px", lineHeight: " 0px" }}>
                    <span>Order Number :</span>2587
                  </p>
                  <p style={{ fontSize: "12px", lineHeight: " 0px" }}>
                    <span>Status :</span>Delivered
                  </p>
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
