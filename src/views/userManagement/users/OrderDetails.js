import {
    CCard,
    CCardBody,
    CCol,
    CDataTable,
    CRow,CCardHeader
  } from "@coreui/react";
  
  const Order_Details = () => {
   return (
      <div>
        <CRow>
        <CCol md="3"></CCol>
          <CCol md="6">
            <CCard id="StoreDetail1">
            <CCardHeader>Order Details</CCardHeader>
              <CCardBody>
                 <p><b>ORDER NO:</b>  28571</p>
                 <p><b>ORDER DATE:</b>  29/4/2021</p>
                 <p><b>ORDERED ITEM: </b> Grocery kit</p>
                 <p><b>ORDERED QUANTITY:</b>  2</p>
                 <p><b>TOTAL AMOUNT :</b>  28571</p>
               </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </div>
    );
  };
  
  export default Order_Details;