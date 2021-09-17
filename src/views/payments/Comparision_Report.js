import React from "react";
import {
  CCard,
  CCardBody,
  CCol,
  CDataTable,
  CRow,CSelect,
  CInput,
 CCardHeader,CLabel
} from "@coreui/react";
import "../../style.css";
import usersData from "../users/Payment";
import TAABEDAR_SERVICE from "src/services/service";
const fields = [
{ key: 'SLNO'},
 { key: 'Order_No'},
//  { key: 'Merchant' },
  { key: 'Order_Date' },
  { key: 'Payment_Date'},
  //  { key: 'Amount_Recieved' },
     { key: 'Amount_Recieved_Status' },
    
    { key: 'Amount_Paid_Status' },
  
   ];


const table = { placeholder: "Search here...", label: "Search:  " };
const items = { label: "Rows", values: [5, 10, 25, 50, 75, 100] };

const Comparision_Report= (props) => {

 return (
    <div>
      <h1 id="ccmaster">Comparision Report</h1>
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
                  <CLabel htmlFor="nf-email">Select Marchant</CLabel>
                  <CSelect custom name="Marchant" id="Marchant">
                              <option value="0">Marchant</option>
                              <option value="1">Option #1</option>
                              <option value="2">Option #2</option>
                              <option value="3">Option #3</option>
                     </CSelect>
                </CCol>
                <CCol md="3">
                  <CLabel>From:</CLabel>
                  <CInput type="date"></CInput>

                </CCol> 
                
                <CCol md="3">
                  <CLabel>To:</CLabel>
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
    </div>
  );
};

export default Comparision_Report
;
