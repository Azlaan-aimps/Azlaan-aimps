import React from "react";
import {
  CCard,
  CCardBody,
  CCol,CInput,CButton,
  CDataTable,CSelect,CLabel,
  CRow,CCardHeader
} from "@coreui/react";
import "../../../style.css";
import usersData from "../../users/Users_Feedback";
import LockOpenSharpIcon from "@material-ui/icons/LockOpenSharp";

const fields = [
  {
    key: "SL No",
    
  },
  
  {
    key: "User Name",
  },
 
  {
    key: "Blocking Reason",
  },
  {
    key: "Unblock Suggesation",
  },
  {
    key: "Block Date",
  },
  {
    key: "Action",
  },
];

const table = { placeholder: "Search here...", label: "Search:  " };
const items = { label: "Rows", values: [5, 10, 25, 50, 75, 100] };

const UnblockedUsers = () => {

  return (
    <div>
      <h1 id="ccmaster">Unblock Users</h1>
      <CRow>
        <CCol md="12">
          <CCard>
            <CCardHeader>
         Unblock Users
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
                  Action: (item) => (
                    <td>
                      <div>
                      <CButton
                        size="sm"
                        id="activate">
                        <LockOpenSharpIcon></LockOpenSharpIcon>
                      </CButton>
                      </div>
                    </td>
                  ),
                }}
              />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </div>
  );
};

export default UnblockedUsers;
