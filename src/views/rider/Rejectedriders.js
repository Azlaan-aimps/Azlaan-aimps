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
import TAABEDAR_SERVICE from "src/services/service";
import "../../../src/style.css";
import DoneIcon from "@material-ui/icons/Done";
import AssignmentSharpIcon from "@material-ui/icons/AssignmentSharp";
import { useHistory } from "react-router-dom";
const table = { placeholder: "Search here...", label: "Search" };
const Rows = { label: "Rows" };
const fields = [
  { key: "Name" },

  { key: "City" },
  { key: "Area" },
  { key: "Address" },
  { key: "Mobile" },
  { key: "Email" },
  { key: "DL No" },
  { key: "Document" },
  { key: "Approve" },
];

const Rejectedriders = () => {
  let history = useHistory();

  const redirect2 = () => {
    history.push("/RegPatOwnerInfo");
  };
  const redirect3 = () => {
    history.push("/RiderProfile");
  };

  const [responseData, setResponseData] = useState("");

  const GetRejectedRiders = () => {
    // alert("GetRiders");
    axios({
      method: "GET",
      url: TAABEDAR_SERVICE + "/GetRejectedRiders",
      headers: {
        "content-type": "application/json",
      },
      params: {
        language_code: "en",
      },
    })
      .then((response) => {
        console.log("GetRejectedRiders response :" + response.data[0].RegDate);
        // console.log("pkid : " + response.data[0].pkid);

        setResponseData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const AcceptRider = (pkid) => {
    // alert("AcceptRider :" + pkid);
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

          // console.log("pkid : " + response.data[0].pkid);
          GetRejectedRiders();
        } else {
          alert("Rider  Request Not Accepted!");
          GetRejectedRiders();
        }

        // setResponseData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  React.useEffect(() => {
    GetRejectedRiders();
  }, []);

  return (
    <>
      <CRow>
        <CCol md="3"></CCol>
        <CCol md="6">
          <h1 id="ccmaster">Rejected Riders</h1>
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
                    <CCardHeader>Rejected Riders</CCardHeader>
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
                          Approve: (item) => (
                            <td>
                              <CRow>
                                <CCol md="10">
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
                              </CRow>
                            </td>
                          ),
                          Name: (item) => <td>{item.Name}</td>,
                          // (
                          //   <td>
                          //     <CButton id="order-list" onClick={redirect3}>
                          //       <Link to="#"> {item.Name}</Link>
                          //     </CButton>
                          //   </td>
                          // ),
                          Email: (item) => <td>{item.Email}</td>,
                          "DL No": (item) => <td>{item.dlNo}</td>,
                          "Requested Date": (item) => <td>{item.RegDate}</td>,
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

export default Rejectedriders;
