import React, { useState } from "react";
import {
  CCard,
  CCardBody,
  CCol,
  CDataTable,
  CRow,
  CButton,
  CBadge,
} from "@coreui/react";
import "../../../style.css";
import usersData from "../../users/Users_Calls";

const fields = [
  {
    key: "SL No",
  },
  {
    key: "Call's Log",
  },
  {
    key: "Duration",
  },
  {
    key: "Complaint-No",
  },
  {
    key: "Issue Note",
  },
  {
    key: "Issue Status",
  },
];

const table = { placeholder: "Search here...", label: "Search:  " };
const items = { label: "Rows", values: [5, 10, 25, 50, 75, 100] };

const getBadge = (Coupons) => {
  switch (Coupons) {
    case "Closed":
      return "success";
    case "On-Hold":
      return "warning";
    case "Open":
      return "danger";
    default:
      return "info";
  }
};

const ChattingReports = (props) => {
  const [coupon, setCoupoun] = useState(false);

  return (
    <div>
      <h1 id="ccmaster">Chatting Reports</h1>
      <CRow>
        <CCol md="12">
          <CCard>
            <CCardBody>
              <p>
               <span>Date:</span> 12/04/2021
              </p><br></br>
              <p id="right-align">
               <span>Excutive Name:</span> Jhoseph Alvin
              </p>
              <p>
               <span>Day:</span> Monday 
              </p>
              <p id="right-align">
               <span>Excutive ID:</span> JHG765
              </p>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol md="12">
          <CCard scrolling>
            <CCardBody>
              <center>
                <p>
                 <span>User Name:</span>
                  Prakash Jain
                </p>
              </center>
              <p className="chat-left">Hello Sir</p>
              <br></br>
              <p className="chat-right">Hii, I have an Issue</p>
              <br></br>
              <br></br>
              <p className="chat-left">How Can I assist You...???</p>
              <br></br>
              <p className="chat-right">Im facing Issue on Coupouns</p>
              <br></br>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol md="12">
          <CCard scrolling>
            <CCardBody>
              <center>
                <p>
                 <span>User Name:</span>
                  Jhoseph Martin
                </p>
              </center>
              <p className="chat-left">Hello Sir</p>
              <br></br>
              <p className="chat-right">Hii, I have an Issue</p>
              <br></br>
              <br></br>
              <p className="chat-left">How Can I assist You...???</p>
              <br></br>
              <p className="chat-right">Im facing Issue on Coupouns</p>
              <br></br>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol md="12">
          <CCard scrolling>
            <CCardBody>
              <center>
                <p>
                 <span>User Name:</span>
                  Jhon Doe
                </p>
              </center>
              <p className="chat-left">Hello Sir</p>
              <br></br>
              <p className="chat-right">Hii, I have an Issue</p>
              <br></br>
              <br></br>
              <p className="chat-left">How Can I assist You...???</p>
              <br></br>
              <p className="chat-right">Im facing Issue on Coupouns</p>
              <br></br>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </div>
  );
};

export default ChattingReports;
