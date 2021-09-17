import React, { useState } from "react";
import axios from "axios";

import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
  CButton,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CLabel,
  CSelect,
} from "@coreui/react";
import TAABEDAR_SERVICE from "src/services/service";
import "../../../src/style.css";
import DoneIcon from "@material-ui/icons/Done";
import { useHistory } from "react-router-dom";
import AssignmentSharpIcon from "@material-ui/icons/AssignmentSharp";
import CancelIcon from "@material-ui/icons/Cancel";
const table = { placeholder: "Search here...", label: "Search" };
const Rows = { label: "Rows" };

const fields = [
  { key: "Name" },
  { key: "Requested Date" },
  { key: "City" },
  { key: "Area" },
  { key: "Address" },
  { key: "Mobile" },
  { key: "Email" },
  { key: "DL No" },
  { key: "Document" },
  { key: "Approve / Reject" },
];

const Pendings = () => {
  const [responseData, setResponseData] = useState("");

  const [block, setBlock] = useState(false);
  let history = useHistory();

  console.log(responseData);

  const redirect2 = () => {
    history.push("/RegPatOwnerInfo");
  };
  const redirect3 = () => {
    history.push("/RiderProfile");
  };

  const PendingRiders = () => {
    // alert("GetRiders");
    axios({
      method: "GET",
      url: TAABEDAR_SERVICE + "/PendingRiders",
      headers: {
        "content-type": "application/json",
      },
      params: {
        language_code: "en",
      },
    })
      .then((response) => {
        console.log("GetRiders response :" + response.data);
        // console.log("pkid : " + response.data[0].pkid);

        setResponseData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  React.useEffect(() => {
    PendingRiders();
  }, []);

  const AcceptRider = (pkid) => {
    axios({
      method: "GET",
      url: TAABEDAR_SERVICE + "/AcceptRider/" + pkid + "",
      headers: {
        "content-type": "application/json",
      },
      params: {
        language_code: "en",
      },
    })
      .then((response) => {
        console.log("AcceptRider response :" + response.data);
        if (response.data == true) {
          alert("Rider  Request Accepted!");
          PendingRiders();
        } else {
          alert("Rider  Request Not Accepted!");
          PendingRiders();
        }

        // console.log("pkid : " + response.data[0].pkid);

        // setResponseData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const RejectRider = (pkid) => {
    // alert("RejectRider  :" + pkid);
    axios({
      method: "GET",
      url: TAABEDAR_SERVICE + "/RejectRider/" + pkid + "",
      headers: {
        "content-type": "application/json",
      },
      params: {
        language_code: "en",
      },
    })
      .then((response) => {
        console.log("RejectRider response :" + response.data);
        if (response.data == true) {
          alert("Rider Request Rejected!");
          PendingRiders();
        } else {
          alert("Rider Request Fail to Reject!");
          PendingRiders();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const blockRider = (pkid) => {
    console.log("pkid!   " + pkid);
    axios({
      method: "GET",
      url: TAABEDAR_SERVICE + "/BlockRiders/" + pkid + "",
      headers: {
        "content-type": "application/json",
      },
      params: {
        language_code: "en",
      },
    })
      .then((response) => {
        // console.log("GetRiders response :" + response.data);
        console.log("blockRider response : " + response.data);
        PendingRiders();

        // setResponseData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <CRow>
        <CCol md="3"></CCol>
        <CCol md="6">
          <h1 id="ccmaster">Pending Rider Approvals</h1>
        </CCol>
        <CCol md="3"></CCol>
      </CRow>
      <CRow>
        <CCol md="12">
          <CCard>
            <CCardBody>
              <CRow>
                <CCol>
                  <CCard>
                    <CCardHeader>Pending Rider Approvals</CCardHeader>
                    <CCardBody>
                      <CDataTable
                        items={responseData}
                        fields={fields}
                        striped
                        itemsPerPage={5}
                        pagination
                        sorter
                        tableFilter={table}
                        itemsPerPageSelect={Rows}
                        scopedSlots={{
                          "Approve / Reject": (item) => (
                            <td>
                              <CRow>
                                <CCol md="3">
                                  <CButton
                                    size="sm"
                                    id="deactivate"
                                    // onClick={() => {
                                    //   setBlock(!block);
                                    // }}
                                    onClick={() => {
                                      AcceptRider(item.pkid);
                                    }}
                                  >
                                    <DoneIcon />
                                  </CButton>
                                </CCol>
                                <CCol md="3">
                                  <CButton
                                    size="sm"
                                    id="deactivate"
                                    // onClick={() => {
                                    //   setBlock(!block);
                                    // }}
                                    onClick={() => {
                                      RejectRider(item.pkid);
                                    }}
                                  >
                                    <CancelIcon />
                                    {item.status}
                                  </CButton>
                                </CCol>
                                {/* <CCol md="3">
                                  <CButton
                                    size="sm"
                                    id="deactivate"
                                    // onClick={() => {
                                    //   setBlock(!block);
                                    // // }}
                                    // onClick={() => {
                                    //   blockRider(item.pkid);
                                    // }}
                                  >
                                    <NoEncryptionSharpIcon />
                                  </CButton>
                                </CCol> */}
                              </CRow>
                            </td>
                          ),
                          Name: (item) => <td>{item.Name}</td>,
                          // <td>
                          //   {/* <CButton id="order-list" onClick={redirect3}>
                          //     <Link to="#"> {item.Name}</Link>
                          //   </CButton> */}

                          // </td>

                          Document: (item) => (
                            <td>
                              <CRow>
                                <CCol md="10">
                                  <CButton
                                    size="sm"
                                    id="war-btn"
                                    onClick={redirect2}
                                  >
                                    <AssignmentSharpIcon />
                                    {item.status}
                                  </CButton>
                                </CCol>
                              </CRow>
                            </td>
                          ),
                          "DL No": (item) => <td>{item.dlNo}</td>,
                          "Requested Date": (item) => <td>{item.RegDate}</td>,
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
                          <span>Blocked Due to :</span>KYC Documents not
                          uploaded<br></br>
                          <br></br>
                          <br></br>
                          <CLabel>Suggestion to Unblock:</CLabel>
                          <CSelect>
                            <option value="">Upload Documents</option>
                            <option value="">Photo not clear</option>
                          </CSelect>
                          <br></br>
                          <CButton class="btn btn-square btn-info">
                            Send Email
                          </CButton>
                        </CModalBody>
                        <CModalFooter>
                          <CButton
                            color="dark"
                            onClick={() => setBlock(!block)}
                          >
                            Done
                          </CButton>
                          <CButton
                            color="secondary"
                            onClick={() => setBlock(!block)}
                          >
                            Cancel
                          </CButton>
                        </CModalFooter>
                      </CModal>
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
