import React from 'react';

import {
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
  
    CRow,
    CButton,
    
    CForm,
  CFormGroup,
  CLabel,
  CInput,
  CTextarea,CInputFile
 
  } from '@coreui/react'

  import '../../style.css';
  import TAABEDAR_SERVICE from "src/services/service";

const Pay = () => {
    return (
        <div>
             <div>
        
        <CRow>
          <CCol md="12">
  
            <CCard>
              
              <CCardBody>
              <CRow>
              <CCol>
                <CCard>
                <CCardHeader>Payments</CCardHeader>
                  <CCardBody>
                <CForm
                  action=""
                  method="post"
                  encType="multipart/form-data"
                  className="form-horizontal"
                >
  
                  <CFormGroup className="pr-1">
                    <CRow id="firstrow">
                      <CCol md="3">
                        <CLabel htmlFor="exampleInputName2" className="pr-1">
                        Merchant
                        </CLabel>
                        <CInput
                          id="exampleInputName2"
                          placeholder=""
                          value="Big Bazar"
                          readOnly
                          required
                        />
                      </CCol>
                      <CCol md="3">
                        <CLabel htmlFor="exampleInputEmail2" className="pr-1">
                        Account Number
                        </CLabel>
                        <CInput
                          type="text"
                          id="exampleInputEmail2"
                          value="SBI12345678"
                          readOnly
                          required
                        />
                      </CCol>
                      <CCol md="3">
                      <CLabel htmlFor="exampleInputEmail2" className="pr-1">
                        IFSC Code
                        </CLabel>
                        <CInput
                          type="text"
                          id="exampleInputEmail2"
                          value="IFSC87654321"
                          readOnly
                          required
                        />
                      </CCol>
                      <CCol md="3">
                        <CLabel htmlFor="exampleInputName2" className="pr-1">
                         Order No
                        </CLabel>
                        <CInput
                          id="exampleInputName2"
                          value="43251"
                          readOnly
                          required
                        />
                      </CCol>
                    </CRow>
                    <CRow id="secondrow">
                     
                      <CCol md="3">
                        <CLabel htmlFor="exampleInputName2" className="pr-1">
                         Delivery Boy
                        </CLabel>
                        <CInput
                          id="exampleInputName2"
                           required
                           value="XYZ Person"
                           readOnly
                        />
                      </CCol>
                      <CCol md="3">
                        <CLabel htmlFor="exampleInputName2" className="pr-1">
                        Amount Recieved
                        </CLabel>
                        <CInput
                          id="exampleInputName2"
                          value="2000"
                          readOnly
                        />
                      </CCol>
                      <CCol md="3">
                        <CLabel htmlFor="exampleInputName2" className="pr-1">
                         Service Charge
                        </CLabel>
                        <CInput
                          id="exampleInputName2"
                          value="200"
                          readOnly
                        />
                      </CCol>
                      <CCol md="3">
                        <CLabel htmlFor="exampleInputName2" className="pr-1">
                         Payment Mode
                        </CLabel>
                        <CInput
                          id="exampleInputName2"
                          value="Offline"
                          readOnly
                          required
                        />
                      </CCol>
                    </CRow>
                <CRow>
                <CCol md="3">
                        <CLabel htmlFor="exampleInputName2" className="pr-1">
                         Paying Amount
                        </CLabel>
                        <CInput
                          id="exampleInputName2"
                          placeholder="Amount"
                          required
                        />
                      </CCol>
                </CRow>
                <br></br>
               
                    <CRow>
                   
                      <CCol md="4">
                        <div id="inline-btn">
                          <CButton type="submit" size="md" id="Add-btn">
                           Pay
                          </CButton>
                        </div>
                      </CCol>
                    </CRow>
                  </CFormGroup>
                </CForm>
                </CCardBody>
                </CCard>
              </CCol>
            </CRow>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </div>
        </div>
    )
}

export default Pay
