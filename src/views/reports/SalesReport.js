import React, { useState } from "react";
import {
  CCard,
  CCardBody,
  CCol,
  CDataTable,
  CRow,
  CLabel,
  CSelect,CCardHeader
} from "@coreui/react";

import "../../style.css";
import usersData from "../users/Users_SalesReport";



const fields = [
  {
    key: "SL No",
  },
  {
    key: "Store",
  },
  {
    key: "Total Sales",
  },
  {
    key: "Total Discount",
  },
  {
    key: "Grand Total",
  },
  {
    key: "Date",
  },
];

const table = { placeholder: "Search here...", label: "Search:  " };
const items = { label: "Rows", values: [5, 10, 25, 50, 75, 100] };


const SalesReport = (props) => {
    const [coupon, setCoupoun] = useState(false);
    


  return (
    <div>
      <h1 id="ccmaster">Sales Report</h1>
      <CRow>
        
        <CCol md="12">
       
          <CCard>
            <CCardBody>
            <CRow>
              <CCol>
                <CCard>
                <CCardHeader>
                    <CRow>
                        <CCol md="3">
                        <CLabel htmlFor="nf-email">Select Store</CLabel>
                       <CSelect custom name="Store" id="Store">
                              <option value="0">Store</option>
                              <option value="1">Option #1</option>
                              <option value="2">Option #2</option>
                              <option value="3">Option #3</option>
                     </CSelect>
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

export default SalesReport;
