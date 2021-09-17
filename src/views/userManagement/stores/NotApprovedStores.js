import React, { useState } from "react";
import {
  CCard,
  CCardBody,
  CButton,
  CCol,
  CDataTable,
  CRow,CSelect,
  CInput,  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
 CCardHeader,CLabel
} from "@coreui/react";
import "../../../style.css";
import usersData from "../../users/Users_Feedback";
import EditIcon from '@material-ui/icons/Edit';
  import DeleteSharpIcon from '@material-ui/icons/DeleteSharp';
  import AccountCircleSharpIcon from '@material-ui/icons/AccountCircleSharp';
  import DescriptionSharpIcon from '@material-ui/icons/DescriptionSharp';
const fields = [
    { key: 'Action', _style: {backgroundColor: 'rgb(0,0,0)',color:'#fff'} },
{ key: 'SL No', _style: {backgroundColor: 'rgb(0,0,0)',color:'#fff'} },
 { key: 'Merchant', _style: {backgroundColor: 'rgb(0,0,0)',color:'#fff'} },
  { key: 'Owner', _style: {backgroundColor: 'rgb(0,0,0)',color:'#fff'} },
  { key: 'Request_date', _style: {backgroundColor: 'rgb(0,0,0)',color:'#fff'} },
 { key: 'City', _style: {backgroundColor: 'rgb(0,0,0)',color:'#fff'} },
 { key: 'Area', _style: {backgroundColor: 'rgb(0,0,0)',color:'#fff'} },
 { key: 'Mobile', _style: {backgroundColor: 'rgb(0,0,0)',color:'#fff'} },
 { key: 'Document', _style: {backgroundColor: 'rgb(0,0,0)',color:'#fff'} },
 { key: 'Profile', _style: {backgroundColor: 'rgb(0,0,0)',color:'#fff'} },
  
   ];


const table = { placeholder: "Search here...", label: "Search:  " };
const items = { label: "Rows", values: [5, 10, 25, 50, 75, 100] };

const NotApprovedStores= (props) => {
  const [success, setSuccess] = useState(false);
  const [info, setInfo] = useState(false);
 return (
    <div>
      <h1 id="ccmaster"> Not Approved Stores</h1>
      <CRow>
        <CCol col="10">
          <CCard>
          <CCardHeader>
          Pending Approvals
          
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
                  ),
                  Profile: (item) => (
                    <td>
                      <CButton
                        id="order-list"
                        onClick={() => setSuccess(!success)}
                      >
                        <AccountCircleSharpIcon fontSize="medium" />
                      </CButton>
                    </td>
                  ),
                  Document: (item) => (
                    <td>
                      <CButton onClick={() => setInfo(!info)}>
                       <DescriptionSharpIcon fontSize="medium" />
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
                  <CModalTitle>Profile</CModalTitle>
                </CModalHeader>
                <CModalBody>
                Name: Wrtyy<br></br>
                Address: Mysuru gfghfgh<br></br>
                Registred Date: 9/2/2020<br></br>
                City: Mysuru<br></br>
                Area: SaraswathiPuram<br></br>
                Owner: rert<br></br>
                
                </CModalBody>
                <CModalFooter>
                  <CButton color="success" onClick={() => setSuccess(!success)}>
                    Done
                  </CButton>{" "}
                  <CButton
                    color="secondary"
                    onClick={() => setSuccess(!success)}
                  >
                    Cancel
                  </CButton>
                </CModalFooter>
              </CModal>
            

              <CModal show={info} onClose={() => setInfo(!info)} color="info">
                <CModalHeader closeButton>
                  <CModalTitle>Documents</CModalTitle>
                </CModalHeader>
                <CModalBody>
             <img href="#" alt="Document"></img><br></br>
             <img href="#" alt="Document"></img><br></br>
             <img href="#" alt="Document"></img>
                </CModalBody>
                <CModalFooter>
                  <CButton color="info" onClick={() => setInfo(!info)}>
                    Done
                  </CButton>{" "}
                  <CButton color="secondary" onClick={() => setInfo(!info)}>
                    Cancel
                  </CButton>
                </CModalFooter>
              </CModal>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </div>
  );
};

export default NotApprovedStores
;
