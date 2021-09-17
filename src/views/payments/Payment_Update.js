import React, { useState } from 'react';
import {
  CCard,
  CCardBody,
  CCol,
  CDataTable,
  CRow,
  CButton,
  CCardHeader, CSelect, CLabel,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CModal, CModalBody,CInput
} from "@coreui/react";
import "../../style.css";
import usersData from "../users/Payment";
import TAABEDAR_SERVICE from "src/services/service";

import DescriptionSharpIcon from '@material-ui/icons/DescriptionSharp';
import ListAltSharpIcon from '@material-ui/icons/ListAltSharp';

import { useHistory } from 'react-router-dom';


const fields = [{ key: 'Invoice' },
{ key: 'Merchant'},
{ key: 'Amount_Paid' },
{ key: 'Date' },
{ key: 'Ref_No' },
{ key: 'OrderList'},

];


const table = { placeholder: "Search here...", label: "Search:  " };
const items = { label: "Rows", values: [5, 10, 25, 50, 75, 100] };

const Payment_Update = (props) => {
  const [success, setSuccess] = useState(false);
  let history = useHistory();

  const redirect = () => {
    history.push("/Pay");
  }
  return (
    <div>
      <h1 id="ccmaster">Payment Report</h1>
      <CRow>
        <CCol col="10">
          <CCard>
          
            <CCardBody>
            <CRow>
              <CCol>
                <CCard>
                <CCardHeader>
              <CRow>
                <CCol md="3">
                  <CLabel htmlFor="nf-email">Select Date</CLabel>
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
                  OrderList: (item) => (
                    <td>
                      <CButton onClick={() => setSuccess(!success)}
                        id="war-btn" size="md">
                        <ListAltSharpIcon />
                      </CButton>
                    </td>
                  ),
                  Invoice: (item) => (
                    <td>
                      <CButton
                        id="war-btn"

                        size="md"
                      >
                        <DescriptionSharpIcon />
                      </CButton>
                    </td>
                  ),

                }}
              />
</CCardBody>
                </CCard>
              </CCol>
            </CRow>

            </CCardBody>
          </CCard>
        </CCol>
      </CRow>

      <CModal
        show={success}
        onClose={() => setSuccess(!success)}
        color="success"
      >
        <CModalHeader closeButton>
          <CModalTitle>Payment For Following orders</CModalTitle>
        </CModalHeader>
        <CModalBody>
          
          <hr></hr>
          <table>
            <tr>
              <th>OrderNo</th>&nbsp;&nbsp;&nbsp;
                         <th>PaidAmount</th>&nbsp;&nbsp;&nbsp;
                         <th>Ref_No</th>&nbsp;&nbsp;&nbsp;
                         <th>Date</th>&nbsp;&nbsp;&nbsp;
                         <th>Marchant</th>&nbsp;&nbsp;&nbsp;
                         <th>Account</th>&nbsp;&nbsp;&nbsp;
                        </tr>
            <tr>
              <td>32321</td>&nbsp;&nbsp;&nbsp;
                          <td>5000</td>&nbsp;&nbsp;&nbsp;
                          <td>REF12334567</td>&nbsp;&nbsp;&nbsp;
                          <td>17/4/2021</td>&nbsp;&nbsp;&nbsp;
                          <td>Big Bazar</td>&nbsp;&nbsp;&nbsp;
                          <td>SBI12324455</td>&nbsp;&nbsp;&nbsp;
                        </tr>
            <tr>
              <td>32321</td>&nbsp;&nbsp;&nbsp;
                          <td>5000</td>&nbsp;&nbsp;&nbsp;
                          <td>REF12334567</td>&nbsp;&nbsp;&nbsp;
                          <td>17/4/2021</td>&nbsp;&nbsp;&nbsp;
                          <td>Big Bazar</td>&nbsp;&nbsp;&nbsp;
                          <td>SBI12324455</td>&nbsp;&nbsp;&nbsp;
                        </tr>
            <tr>
              <td>32321</td>&nbsp;&nbsp;&nbsp;
                          <td>5000</td>&nbsp;&nbsp;&nbsp;
                          <td>REF12334567</td>&nbsp;&nbsp;&nbsp;
                          <td>17/4/2021</td>&nbsp;&nbsp;&nbsp;
                          <td>Big Bazar</td>&nbsp;&nbsp;&nbsp;
                          <td>SBI12324455</td>&nbsp;&nbsp;&nbsp;
                        </tr>
            <tr>
              <td>32321</td>&nbsp;&nbsp;&nbsp;
                          <td>5000</td>&nbsp;&nbsp;&nbsp;
                          <td>REF12334567</td>&nbsp;&nbsp;&nbsp;
                          <td>17/4/2021</td>&nbsp;&nbsp;&nbsp;
                          <td>Big Bazar</td>&nbsp;&nbsp;&nbsp;
                          <td>SBI12324455</td>&nbsp;&nbsp;&nbsp;
                        </tr>
            <tr>
              <td>32321</td>&nbsp;&nbsp;&nbsp;
                          <td>5000</td>&nbsp;&nbsp;&nbsp;
                          <td>REF12334567</td>&nbsp;&nbsp;&nbsp;
                          <td>17/4/2021</td>&nbsp;&nbsp;&nbsp;
                          <td>Big Bazar</td>&nbsp;&nbsp;&nbsp;
                          <td>SBI12324455</td>&nbsp;&nbsp;&nbsp;
                        </tr>

          </table>
        </CModalBody>
        <CModalFooter>
          <CButton color="success" onClick={() => setSuccess(!success)}>Done</CButton>{' '}
          <CButton color="secondary" onClick={() => setSuccess(!success)}>Cancel</CButton>
        </CModalFooter>
      </CModal>
    </div>
  );
};

export default Payment_Update
  ;
