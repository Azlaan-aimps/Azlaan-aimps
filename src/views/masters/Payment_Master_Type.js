import React from 'react';
import {
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CDataTable,
    CRow,
    CButton,
    
    CForm,
    CFormGroup,
  
    CInput,
    CLabel,
   
  } from '@coreui/react'

  import '../../style.css';
  import TAABEDAR_SERVICE from "src/services/service";
  import usersData from '../users/Users_Payment'
  import EditIcon from '@material-ui/icons/Edit';
  import DeleteSharpIcon from '@material-ui/icons/DeleteSharp';
  const table = { placeholder: "Search here...", label: "Search:  " };
  const items = { label: "Rows:", values: [5, 10, 25, 50, 75, 100] };
  const fields = [  {key: 'Action'},
  {key: 'Sl. No'},
  {key: 'Merchant Type'},
  {key: 'Discount'},
];


  const Payment_Master_Type=()=>{
      return(
        <>
        <h1 id="ccmaster">Payment Type Master</h1>
        <br></br>
        <CRow>
        <CCol xs="12" sm="12" md="4" lg="4" xl="4" className="mb-3 mb-xl-0" >
        <CCard >
            <CCardHeader>
              Add Payment Type
            </CCardHeader>
            <CCardBody>
              <CForm action="" method="post">
                <CFormGroup>
                  <CLabel htmlFor="nf-email">Payment Type</CLabel>
                  <CInput type="text" id="nf-email" name="nf-email" placeholder=""/>
                </CFormGroup>
                <CFormGroup>
                  <CLabel htmlFor="nf-password">Discount</CLabel>
                  <CInput type="text" id="nf-password" name="nf-password" placeholder=""/>
                </CFormGroup>
                <CButton type="" size="sm" color="success" id="Add-btn"> Add</CButton>
              </CForm>
            </CCardBody>
          </CCard>
          </CCol>
            <CCol  xs="12" sm="12" md="8" lg="8" xl="8">
          <CCard>
          <CCardHeader>
              Added Payment Type
            </CCardHeader>
            <CCardBody>
            <CDataTable
              items={usersData}
              fields={fields}
              striped
              itemsPerPage={5}
              pagination
              sorter
              tableFilter={table}
              itemsPerPageSelect={items}
              scopedSlots = {{
                'Action':
                  (item)=>(
                    <td>
                    <CButton size="sm" id="war-btn">
                   <EditIcon/>
                    {item.status}
                  </CButton>
                  <CButton size="sm" id="war-btn1">
                  <DeleteSharpIcon/>
                    {item.status}
                  </CButton>
                    </td>
                  )
              }}
            />
            </CCardBody>
          </CCard>
        </CCol>
        
      </CRow>
    </>
      )
  };

  export default Payment_Master_Type;