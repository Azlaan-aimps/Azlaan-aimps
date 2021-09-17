import React from "react";
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,

  CRow,

} from '@coreui/react'

import '../../../src/style.css';
import TAABEDAR_SERVICE from "src/services/service";

import { useHistory } from 'react-router-dom';




const Pendings = () => {

  let history = useHistory();

  const redirect1 = () => {
    history.push("/OrderDetails");
  }

  return (

    <>
      <CRow>
        <CCol md="3">
        </CCol>
        <CCol md="6">
          <h1 id="ccmaster">Order Details</h1>
        </CCol>
        <CCol md="3">
        </CCol>
      </CRow>



      <CRow onClick={redirect1}>
        <CCol md="2"></CCol>
        <CCol md="8">
          <CCard>
           
            <CCardBody>
            <CRow>
              <CCol>
                <CCard>
                <CCardHeader>
              Order Details
             </CCardHeader>
                  <CCardBody>
              <CRow>
                <CCol md="6">
                  <span>Order ID :</span><br></br>
                  <span>Total Pickup No :</span><br></br>
                  <span>Customer Name :</span><br></br>

                  <span>Delivery Address :</span><br></br>
                  <span>Phone :</span><br></br>
                  <span>Order Date :</span><br></br>


                  <span>Total Amount :</span><br></br>
                  <span>Payment Type:</span><br></br><br></br>

                  <span>Pickup Address1 :</span><br></br>
                  <span>Pickup Address2 :</span><br></br>
                  <span>Pickup Address3 :</span><br></br>
                </CCol>
                <CCol md="6">
                  <p style={{ lineHeight: '8px' }}>78945</p>
                  <p style={{ lineHeight: '8px' }}>3</p>
                  <p style={{ lineHeight: '8px' }}>YUIc</p>

                  <p style={{ lineHeight: '8px' }}>15th cross Saraswathipuram,Mysuru</p>
                  <p style={{ lineHeight: '8px' }}>9638520147</p>
                  <p style={{ lineHeight: '8px' }}>21/2/2020</p>
                  <p style={{ lineHeight: '8px' }}>5,545</p>
                  <p style={{ lineHeight: '8px' }}>COD</p><br></br>
                  <p style={{ lineHeight: '8px' }}>1st cross Saraswathipuram,Mysuru</p>
                  <p style={{ lineHeight: '8px' }}>2nd cross Saraswathipuram,Mysuru</p>
                  <p style={{ lineHeight: '8px' }}>3rd cross Saraswathipuram,Mysuru</p>
                </CCol>
              </CRow>
              <br></br>
              <hr></hr>
              <br></br>
              <CRow>
                <CCol md="6">
                  <span>Order Started </span><br></br><br></br>
                  <p style={{ lineHeight: '8px' }}>Ordered- 1 Pick up</p>
                  <p style={{ lineHeight: '8px' }}>Ordered- 2 Pick up</p>
                  <p style={{ lineHeight: '8px' }}>Ordered- 3 Pick up</p>


                </CCol>
                <CCol md="6">
                  <span>Time</span><br></br><br></br>
                  <p style={{ lineHeight: '8px' }}>21/2/2020 10:05 PM</p>
                  <p style={{ lineHeight: '8px' }}>21/2/2020 10:35 PM</p>
                  <p style={{ lineHeight: '8px' }}>21/2/2020 10:45 PM</p><br></br>


                </CCol>
              </CRow>
              <CRow>
                <CCol md="6">
                  <span>Delivery </span><br></br><br></br>
                  <p style={{ lineHeight: '8px' }}>Delivered At</p>



                </CCol>
                <CCol md="6">
                  <span>Time</span><br></br><br></br>
                  <p style={{ lineHeight: '8px' }}>21/2/2020 11:05 PM</p>


                </CCol>
              </CRow>
              <br></br>
              <hr></hr>
              <br></br>
              <CRow>
                <CCol md="3">
                </CCol>
                <CCol md="6">
                  <h1 id="ccmaster">Sub Orders</h1>
                </CCol>
                <CCol md="3">
                </CCol>
              </CRow>
              <CRow>
                <CCol md="2"><span>SL No</span></CCol>
                <CCol md="3"><span>Merchant</span></CCol>
                <CCol md="3"><span>Order items</span></CCol>
                <CCol md="3"><span>Order Total</span></CCol>
                
              </CRow>
              <hr></hr>
              <CRow>
                <CCol md="2"><span>1</span></CCol>
                <CCol md="3"><span>Loyal World</span></CCol>
                <CCol md="3"><span>3</span></CCol>
                <CCol md="3"><span>4000</span></CCol>                
              </CRow>
              <CRow>
                <CCol md="2"><span>2</span></CCol>
                <CCol md="3"><span>Casino Park</span></CCol>
                <CCol md="3"><span>2</span></CCol>
                <CCol md="3"><span>  4000</span></CCol>                
              </CRow>
              <CRow>
                <CCol md="2"><span>3</span></CCol>
                <CCol md="3"><span>Khan Restraunt</span></CCol>
                <CCol md="3"><span>6</span></CCol>
                <CCol md="3"><span>4000</span></CCol>                
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
  )

};




export default Pendings
