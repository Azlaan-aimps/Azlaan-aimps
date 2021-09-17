import React, { useState } from "react";

import { Link } from 'react-router-dom';

import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
  CButton,



} from '@coreui/react'

import '../../../src/style.css';
import TAABEDAR_SERVICE from "src/services/service";

import { useHistory } from 'react-router-dom';
import promoData from 'src/views/users/Payment'
const table = { placeholder: "Search here...", label: "Search" };
const Rows = { label: "Rows" }

const fields = [
{ key: 'SLNO' },
{ key: 'Order_No'},
{ key: 'Date'},
{ key: 'Merchant' },


];

const Pendings = () => {
 
  let history = useHistory();

  const redirect = () => {
    history.push("/RiderTotalOrder");
  }
 
  return (

    <>
       <CRow>
        <CCol md="3">
        </CCol>
        <CCol md="6">
          <h1 id="ccmaster">Total Sales</h1>
        </CCol>
        <CCol md="3">
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
            Total Sales
            </CCardHeader>
                  <CCardBody>
              <CDataTable
                items={promoData}
                fields={fields}
                striped
                itemsPerPage={5}
                pagination
                sorter
                tableFilter={table}
                itemsPerPageSelect={Rows}
                scopedSlots={{
               
                 
                    "OrderNo": (item) => (
                      <td>
                          <CButton
                        id="order-list"
                        onClick={redirect}
                      >
                        <Link to="#" >20123</Link>
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

      <CRow>
        <CCol md="12">
          <CCard>
           
            <CCardBody>
            <CRow>
              <CCol>
                <CCard>
                <CCardHeader>
             Total Sale Summary
            </CCardHeader>
                  <CCardBody>
             <p style={{fontSize:'12px'}}><span>Total Sales :</span> 58,201 </p>
             <p  style={{fontSize:'12px'}}><span>Total Order   :</span>23</p>
             </CCardBody>
                </CCard>
              </CCol>
            </CRow>
           </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )

};




export default Pendings
