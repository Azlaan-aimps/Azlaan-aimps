import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
  CButton,
  CBadge,
  CLabel,
  CSelect,
} from "@coreui/react";

import "../../../src/style.css";
import LockOpenSharpIcon from "@material-ui/icons/LockOpenSharp";
import { useHistory } from "react-router-dom";
import promoData from "src/views/users/StoreData";
import TAABEDAR_SERVICE from "src/services/service";
const table = { placeholder: "Search here...", label: "Search" };
const Rows = { label: "Rows" };
const fields = [
  { key: "Unblock" },
  { key: "Name" },
  { key: "Email" },
  { key: "Mobile" },
  { key: "Address" },
  { key: "Registration_Date" },
  { key: "Blocking_Reason" },
  { key: "Unblocking_Suggestion" },
  // { key: "Blocking_Date" },
];
const getBadge = (Status) => {
  switch (Status) {
    case "Open":
      return "success";
    case "Closed":
      return "warning";
    default:
      return "info";
  }
};
const Pendings = () => {
  const [UserDate, setUserDate] = useState(false);

  const GetAllBlockedUsers = React.useCallback(() => {
    axios({
      method: "GET",
      url: TAABEDAR_SERVICE+"/GetBlockedUsers",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((response) => {
        setUserDate(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  React.useEffect(() => {
    GetAllBlockedUsers();
  }, []);

  const unblockUser = (uid) => {
    axios({
      method: "GET",
      url:
        TAABEDAR_SERVICE+"/UnblockUser/" +
        uid +
        "",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((response) => {
        if (response.data == true) {
          alert("Selected User Is Unbloacked");
          GetAllBlockedUsers();
        } else {
          alert("Failed TO Unblock User");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  let history = useHistory();
  const redirect = () => {
    history.push("/RegPatMenuInfo");
  };
  const redirect2 = () => {
    history.push("/RegPatOwnerInfo");
  };
  const redirect3 = () => {
    history.push("/RiderProfile");
  };
  return (
    <>
      <CRow>
        <CCol md="12">
          <CCard>
            <CCardBody>
              <CRow>
                <CCol>
                  <CCard>
                    <CCardHeader>
                      <CRow>
                        <CCol md="12">
                          <h1 id="ccmaster">Blocked Users</h1>
                        </CCol>
                      </CRow>
                    </CCardHeader>
                    <CCardBody>
                      <CDataTable
                        items={UserDate}
                        fields={fields}
                        striped
                        itemsPerPage={5}
                        pagination
                        sorter
                        tableFilter={table}
                        itemsPerPageSelect={Rows}
                        scopedSlots={{
                          Status: (item) => (
                            <td>
                              {/* <Link to="/Path" > Contact us </Link> */}

                              <CBadge color={getBadge(item.Status)}>
                                {item.Status}
                              </CBadge>
                            </td>
                          ),

                          Unblock: (item) => (
                            <td>
                              <CRow>
                                <CCol md="10">
                                  <CButton
                                    size="sm"
                                    onClick={() => {
                                      unblockUser(item.pkid);
                                    }}
                                    id="activate"
                                  >
                                    <LockOpenSharpIcon />
                                  </CButton>
                                </CCol>
                              </CRow>
                            </td>
                          ),
                          Name: (item) => <td>{item.Name}</td>,
                          Registration_Date: (item) => <td>{item.regDate}</td>,
                          Blocking_Reason: (item) => <td>{item.reason}</td>,
                          Unblocking_Suggestion: (item) => (
                            <td>{item.suggetion}</td>
                          ),
                          Menu: (item) => (
                            <td>
                              <CRow>
                                <CCol md="10">
                                  <CButton onClick={redirect} id="AddEmp1">
                                    Menu
                                  </CButton>
                                </CCol>
                              </CRow>
                            </td>
                          ),
                          Document: (item) => (
                            <td>
                              <CRow>
                                <CCol md="10">
                                  <CButton id="AddEmp1" onClick={redirect2}>
                                    Document
                                  </CButton>
                                </CCol>
                              </CRow>
                            </td>
                          ),
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
    </>
  );
};

export default Pendings;
