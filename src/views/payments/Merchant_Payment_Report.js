import React, { useState } from 'react';
import {
  CCard,
  CCardBody,
  CCol,
  CDataTable,
  CRow, CButton, CModal, CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,

  CCardHeader, CInput, CLabel
} from "@coreui/react";
import "../../style.css";
import TAABEDAR_SERVICE from "src/services/service";
import usersData from "../users/Payment";
import PaymentSharpIcon from '@material-ui/icons/Payment';
import CallReceivedSharpIcon from '@material-ui/icons/CallReceivedSharp';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';



const fields = [
  { key: 'SLNO' },
  { key: 'Merchant' },
  { key: 'Merchan_type' },
  { key: 'Total_Orders' },
  { key: 'Items amount without tax' },
  { key: 'Tax amount' },
  { key: 'Final Items amount' },
  { key: 'Order_Amount' },
  { key: 'Comission_Charge' },
  { key: 'Marketing_Charge' },
  { key: 'Total_Deductions' },
  { key: 'Tax_Amount to be returned' },
  { key: 'Final_Amount' }, 
  { key: 'Received_Payments_List' },
  { key: 'Make_Payment' },
];


const table = { placeholder: "Search here...", label: "Search:  " };
const items = { label: "Rows", values: [5, 10, 25, 50, 75, 100] };

const Merchant_Payment_Report = (props) => {
  const [success, setSuccess] = useState(false);
  const [success1, setSuccess1] = useState(false);
  let history = useHistory();

  const redirect = () => {
    history.push("/Pay");
  }

  return (
    <div>
      <h1 id="ccmaster">Merchant Active Payment Report</h1>

      <CCard>

        <CCardBody>
        <CRow>
              <CCol>
                <CCard>
                  <CCardHeader>
                  Merchant Active Payment
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
              Received_Payments_List: (item) => (
                <td>
                  <CButton onClick={() => setSuccess(!success)}
                    id="war-btn2" size="md">
                    <CallReceivedSharpIcon />
                  </CButton>
                </td>
              ),
              Total_Deductions: (item) => (
                <td>
                  <CButton onClick={() => setSuccess1(!success1)}
                    size="sm">
                    <Link to="#" > 500</Link>
                  </CButton>
                </td>
              ),
              Make_Payment: (item) => (
                <td>
                  <CButton
                   id="war-btn2" size="md" onClick={redirect}>
                      <PaymentSharpIcon />
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
              <CModalTitle>Payment</CModalTitle>
            </CModalHeader>
            <CModalBody>
              <span>Paid Orders</span>
              <hr></hr>
              <table>
                <tr>
                  <th>OrderNo</th>&nbsp;&nbsp;&nbsp;
                         <th>PaidAmount</th>&nbsp;&nbsp;&nbsp;
                         <th>Ref_No</th>&nbsp;&nbsp;&nbsp;
                         <th>Date</th>&nbsp;&nbsp;&nbsp;
                         <th>User</th>&nbsp;&nbsp;&nbsp;
                         <th>Account</th>&nbsp;&nbsp;&nbsp;
                        </tr>
                <tr>
                  <td>32321</td>&nbsp;&nbsp;&nbsp;
                          <td>5000</td>&nbsp;&nbsp;&nbsp;
                          <td>REF12334567</td>&nbsp;&nbsp;&nbsp;
                          <td>17/4/2021</td>&nbsp;&nbsp;&nbsp;
                          <td>Shabaz</td>&nbsp;&nbsp;&nbsp;
                          <td>SBI12324455</td>&nbsp;&nbsp;&nbsp;
                        </tr>
                <tr>
                  <td>32321</td>&nbsp;&nbsp;&nbsp;
                          <td>5000</td>&nbsp;&nbsp;&nbsp;
                          <td>REF12334567</td>&nbsp;&nbsp;&nbsp;
                          <td>17/4/2021</td>&nbsp;&nbsp;&nbsp;
                          <td>test</td>&nbsp;&nbsp;&nbsp;
                          <td>SBI12324455</td>&nbsp;&nbsp;&nbsp;
                        </tr>
                <tr>
                  <td>32321</td>&nbsp;&nbsp;&nbsp;
                          <td>5000</td>&nbsp;&nbsp;&nbsp;
                          <td>REF12334567</td>&nbsp;&nbsp;&nbsp;
                          <td>17/4/2021</td>&nbsp;&nbsp;&nbsp;
                          <td>test</td>&nbsp;&nbsp;&nbsp;
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

          <CModal
            show={success1}
            onClose={() => setSuccess1(!success1)}
            color="success"
          >
            <CModalHeader closeButton>
              <CModalTitle>Total Deductions</CModalTitle>
            </CModalHeader>
            <CModalBody>
              <CRow>
                <CCol md="12">
                      <p style={{ fontSize: '12px' }}><span>Comission Charge  : </span>3</p>
                      <p style={{ fontSize: '12px' }}><span>Promotion Charge  : </span>3</p>
                      <p style={{ fontSize: '12px' }}><span>Delivery Charge  : </span>3</p>
                      <p style={{ fontSize: '12px' }}><span>Marketing Charge  : </span>3</p>
                      <p style={{ fontSize: '12px' }}><span>Push Notificatoins Charge  : </span>3</p>
                      <p style={{ fontSize: '16px',fontWeight:'600',color:'green' }}><span>Total Deductions : </span> 500 </p>

                      {/* <p  style={{fontSize:'12px'}}><span>Mode Of Payment  : </span>COD</p> */}
                 
                </CCol>
              </CRow>
            </CModalBody>
            <CModalFooter>
              <CButton color="success" onClick={() => setSuccess1(!success1)}>Done</CButton>{' '}
              <CButton color="secondary" onClick={() => setSuccess1(!success1)}>Cancel</CButton>
            </CModalFooter>
          </CModal>
         
                  </CCardBody>
                </CCard>
              </CCol>
            </CRow>
        </CCardBody>
      </CCard>

      <CRow>
        <CCol md="12">
          <CCard>
           
            <CCardBody>
            <CRow>
              <CCol>
                <CCard>
                  <CCardHeader>
                  Summary
               </CCardHeader>
                  <CCardBody>
              <p style={{ fontSize: '12px' }}><span>Total Merchants  : </span>3</p>
              <p style={{ fontSize: '12px' }}><span>Total Orders Amount  : </span>300</p>
              <p style={{ fontSize: '12px' }}><span>Total Deductions  : </span>1500</p>
              <p style={{ fontSize: '12px' }}><span>Total Amount to be paid : </span> 15000 </p>

              {/* <p  style={{fontSize:'12px'}}><span>Mode Of Payment  : </span>COD</p> */}
              </CCardBody>
                </CCard>
              </CCol>
            </CRow>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>

    </div>
  );
};

export default Merchant_Payment_Report
  ;

