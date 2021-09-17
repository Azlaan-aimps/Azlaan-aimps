import React, { useState } from "react";
import {
  CCard,
  CCardBody,
  CCol,
  CDataTable,
  CRow,
  CButton,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CSelect,
  CLabel,CCardHeader
} from "@coreui/react";
import "../../../style.css";
import usersData from "../../users/Users_CustomerSupport";
import LockOpenSharpIcon from "@material-ui/icons/LockOpenSharp";
import BlockSharpIcon from "@material-ui/icons/BlockSharp";
import ChatSharpIcon from "@material-ui/icons/ChatSharp";
import PhoneCallbackIcon from "@material-ui/icons/PhoneCallback";
import RateReviewSharpIcon from "@material-ui/icons/RateReviewSharp";
import AssessmentSharpIcon from "@material-ui/icons/AssessmentSharp";
import { useHistory } from "react-router-dom";
import { Block } from "@material-ui/icons";

const fields = [
  {
    key: "Action",
    _style: { width: "10%" },
    },
    {
        key: "SL No"
    },
  {
    key: "Name",
  },
  {
    key: "E-Mail",
  },
  {
    key: "Phone",
  },
  {
    key: "Total Call's Attended",
  },
  {
    key: "Total Review's Submitted",
  },
  {
    key: "Daily Updated Report's",
  },
  {
    key: "Total Chatting Report's",
  },
 
];

const table = { placeholder: "Search here...", label: "Search:  " };
const items = { label: "Rows", values: [5, 10, 25, 50, 75, 100] };

const CustomerSupport = (props) => {
  const [coupon, setCoupoun] = useState(false);
    const [block, setBlock] = useState(false);
    
    let history = useHistory();

    const CallsPage = () => {
        history.push("/users_management/calls");
  }
  
  const ReviewPage = () => {
    history.push("/users_management/reviewsPage");
  }

  const DailyReport = () => {
    history.push("/users_management/dailyReports");
  }

   const ChattingReport = () => {
     history.push("/users_management/chattingReports");
   };

  return (
    <div>
      <h1 id="ccmaster">Customer Support</h1>
      <CRow>
        <CCol md="12">
          <CCard>
            <CCardHeader>Customer Support</CCardHeader>
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
                      <CRow>
                        <CCol md="2">
                        <CButton
                        size="sm"
                        id="deactivate"
                        onClick={() => {
                          setBlock(!block);
                        }}
                      >
                        <BlockSharpIcon></BlockSharpIcon>
                      </CButton>
                        </CCol>
                        {/* <CCol md="1">

                        </CCol> */}
                           <CCol md="2">
                           <CButton size="sm" id="activate">
                        <LockOpenSharpIcon></LockOpenSharpIcon>
                      </CButton>
                        </CCol>
                      </CRow>
                     
                     
                    </td>
                  ),
                  "Total Call's Attended": () => (
                    <td>
                          <CButton onClick={CallsPage}>
                        <PhoneCallbackIcon fontSize="medium" />
                      </CButton>
                    </td>
                  ),
                  "Total Chatting Report's": () => (
                    <td>
                      <CButton onClick={ChattingReport}>
                        <ChatSharpIcon fontSize="medium" />
                      </CButton>
                    </td>
                  ),
                  "Total Review's Submitted": () => (
                    <td>
                      <CButton onClick={ReviewPage}>
                        <RateReviewSharpIcon fontSize="medium" />
                      </CButton>
                    </td>
                  ),
                  "Daily Updated Report's": () => (
                    <td>
                      <CButton onClick={DailyReport}>
                        <AssessmentSharpIcon fontSize="medium" />
                      </CButton>
                    </td>
                  ),
                }}
              />

              <CModal
                show={block}
                onClose={() => setBlock(!block)}
                color="dark"
              >
                <CModalHeader closeButton>
                  <CModalTitle>Blocked</CModalTitle>
                </CModalHeader>
                <CModalBody>
                  <span>Blocked Due to :</span>Company Code of Conduct Violated
                  <br></br>
                  <br></br>
                  <br></br>
                  <CLabel>Suggestion to Unblock:</CLabel>
                  <CSelect>
                    <option value="">Select</option>
                    <option value="">
                      Misbehaviour with Customer: Assure Next Time wont breach
                      Company Policy
                    </option>
                    <option value="">Call's unattended</option>
                  </CSelect>
                  <br></br>
                  <CButton class="btn btn-square btn-info">Send Email</CButton>
                </CModalBody>
                <CModalFooter>
                  <CButton color="dark" onClick={() => setBlock(!block)}>
                    Done
                  </CButton>
                  <CButton color="secondary" onClick={() => setBlock(!Block)}>
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

export default CustomerSupport;
