import React, { useState } from "react";
import axios from "axios";
import {
  CCard,
  CCardBody,
  CCardHeader,
  CButton,
  CForm,
  CFormGroup,
  CInput,
  CLabel,
  CRow,
  CCol,
} from "@coreui/react";

import "../../style.css";
import TAABEDAR_SERVICE from "src/services/service";
import { useHistory } from "react-router-dom";

const WalletPayment = (props) => {
  let history = useHistory();
  // console.log("Props Here :" + props.location.data.userName);
  // console.log("Props Here :" + props.location.data.pkid);

  const Walletpkid = props.location.data.pkid;
  const JazzPhone = props.location.data.userMobile;
  const JazzAmount = props.location.data.Amount;

  const redirect = () => {
    history.push("/WalletNewRequest");
  };

  const PayAmount = () => {
    console.log("Wallet Pkid :" + Walletpkid);
    console.log("Wallet JazzPhone :" + JazzPhone);
    console.log("Wallet JazzAmount :" + JazzAmount);

    axios({
      method: "GET",
      url:
        TAABEDAR_SERVICE+"/ConfirmUserRefundRequest/" +
        Walletpkid +
        "",
      headers: {
        "content-type": "application/json",
      },
      params: {
        language_code: "en",
      },
    })
      .then((response) => {
        console.log("PayAmount response :" + response.data);
        redirect();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <CRow>
        <CCol md="3"></CCol>
        <CCol md="6">
          <h1 id="ccmaster">Payment For user's Wallet</h1>
          <br></br>
        </CCol>
        <CCol md="3"></CCol>
      </CRow>
      <CRow>
        <CCol md="4"></CCol>
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
                                type="number"
                                id="JazzPhone"
                                className="Inputs"
                                value={JazzPhone}
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
                                type="number"
                                id="JazzAmount"
                                className="Inputs"
                                value={JazzAmount}
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
                        onClick={PayAmount}
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
        <CCol md="4"></CCol>
      </CRow>
    </>
  );
};

export default WalletPayment;
