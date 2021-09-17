import React from "react";
import {
  CCard,
  CCardBody,
  CCol,
  CDataTable,
  CRow,CButton,
 
 CCardHeader,
} from "@coreui/react";
import "../../style.css";
import TAABEDAR_SERVICE from "src/services/service";
import usersData from "../users/Payment";
import DeleteSharpIcon from '@material-ui/icons/DeleteSharp';



const fields = [
{ key: 'Action' },
 { key: 'SLNO'},
  { key: 'Notification' },
  
   ];


const table = { placeholder: "Search here...", label: "Search:  " };
const items = { label: "Rows", values: [5, 10, 25, 50, 75, 100] };

const Notification= (props) => {

 return (
    <div>
      <h1 id="ccmaster">Notification</h1>
      {/* <CRow>
        <CCol col="10">
          <CCard>
          <CCardHeader>
             Notification
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
                     
                    <CButton size="sm" id="war-btn1">
                    <DeleteSharpIcon/>
                      {item.status}
                    </CButton>
                      </td>
                    ),
              
                }}
              />

            
            </CCardBody>
          </CCard>
        </CCol>
      </CRow> */}
    </div>
  );
};

export default Notification
;
