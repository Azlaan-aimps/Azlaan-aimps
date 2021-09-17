import React, { useState, useEffect } from "react";
import {
  CCard,
  CCardBody,
  CCardHeader,
  CButton,
  CCardFooter,
  CForm,
  CFormGroup,
  CInput,
  CLabel,
  CRow,
  CCol,
} from "@coreui/react";
import "../../style.css";
import axios from "axios";
import TAABEDAR_SERVICE from "src/services/service";
import { Route, useHistory } from "react-router-dom";

const JazzCash = (props) => {
  const amount = props.location.data.Amount;
  const mobile = props.location.data.Mobile;
  const pkid = props.location.data.pkid;

  const history = useHistory();

  console.log(props.location.data);

  const onCallPay = () => {
    axios
      .get(TAABEDAR_SERVICE + "/ConfirmChangeExchangeRequest/" + pkid)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    alert("Amount Paid Successfully");
  };

  return (
    <div>
      <CRow>
        <CCol md="3" />
        <CCol md="6">
          <h1 id="ccmaster">Payment For user's Wallet</h1>
          <br />
        </CCol>
        <CCol md="3" />
      </CRow>
      <CRow>
        <CCol md="4" />
        <CCol xs="12" sm="12" md="4" lg="4" xl="4" className="mb-3 mb-xl-0">
          <CCard>
            <CCardBody>
              <CRow>
                <CCol>
                  <CCard>
                    <CCardHeader>Payment</CCardHeader>
                    <CCardBody>
                      <CForm action="" method="post">
                        <CFormGroup className="pr-1">
                          <CRow>
                            <CCol md="12">
                              <CLabel
                                htmlFor="exampleInputName2"
                                className="pr-1"
                              >
                                Jazz Cash Wallet ID/ Phone number
                              </CLabel>
                              <CInput
                                id="exampleInputName2"
                                className="Inputs"
                                required
                                Value={mobile}
                              />
                            </CCol>
                          </CRow>
                          <CRow>
                            <CCol md="12">
                              <CLabel
                                htmlFor="exampleInputName2"
                                className="pr-1"
                              >
                                Amount
                              </CLabel>
                              <CInput
                                id="exampleInputName2"
                                className="Inputs"
                                required
                                Value={amount}
                              />
                            </CCol>
                          </CRow>
                        </CFormGroup>
                      </CForm>
                      <CButton
                        type="submit"
                        size="md"
                        color="success"
                        id="Add-btn"
                        onClick={() => {
                          onCallPay();
                          history.push("/ChangeExchange_NewRequest");
                        }}
                      >
                        Pay
                      </CButton>
                    </CCardBody>
                  </CCard>
                </CCol>
              </CRow>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol md="4" />
      </CRow>
    </div>
  );
};

export default JazzCash;
