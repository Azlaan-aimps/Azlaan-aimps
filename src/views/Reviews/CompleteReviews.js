import React, { useState, Component } from "react";

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
import TAABEDAR_SERVICE from "src/services/service";
import DeleteSharpIcon from "@material-ui/icons/DeleteSharp";
import { useHistory } from "react-router-dom";
import axios from "axios";
import promoData from "src/views/users/StoreData";
const table = { placeholder: "Search here...", label: "Search" };
const Rows = { label: "Rows" };
const fields = [
  { key: "userType" },
  { key: "User" },
  { key: "Review Given by" },
  { key: "Mobile" },

  { key: "Date" },
  { key: "Title" },
  { key: "Description" },

  { key: "Action" },
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
  let history = useHistory();
  const redirect = () => {
    history.push("/RegPatMenuInfo");
  };
  const redirect2 = () => {
    history.push("/RegPatOwnerInfo");
  };
  const redirect3 = () => {
    history.push("/EditVendor");
  };

  const [responseData, setResponseData] = useState("");
  const fetchData = React.useCallback(() => {
    axios({
      method: "GET",
      url: TAABEDAR_SERVICE+"/GetAllReviews",
      headers: {
        "content-type": "application/json",
      },
      params: {
        language_code: "en",
      },
    })
      .then((response) => {
        setResponseData(response.data);
        console.log(response.data);
        // alert(response.data)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const GetDataByFilter = (event) => {
    const fdate = event.target.value;
    if (fdate == "All") {
      fetchData();
    } else {
      axios({
        method: "GET",
        url:
          TAABEDAR_SERVICE+"/GetAllReviewsByFilter/" +
          fdate +
          "",
        headers: {
          "content-type": "application/json",
        },
        params: {
          language_code: "en",
        },
      })
        .then((response) => {
          setResponseData(response.data);
          console.log(response.data);
          // alert(response.data)
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const DeleteRiviews = (pkid) => {
    alert(pkid);
    axios({
      method: "GET",
      url:
        TAABEDAR_SERVICE+"/DeleteReviews/" +
        pkid +
        "",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((response) => {
        if (response.data == true) {
          alert("Deleted");
        } else {
          alert("Failed To Delete");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <CRow>
        <CCol md="3"></CCol>
        <CCol md="6">
          <h1 id="ccmaster">Review or Feedbacks</h1>
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
                    <CCardHeader>
                      <CRow>
                        <CCol md="3">
                          <CLabel htmlFor="nf-email">Select User type</CLabel>
                          <CSelect
                            custom
                            name="merchant"
                            onChange={GetDataByFilter}
                            id="merchant"
                          >
                            <option value="All">All</option>
                            <option value="Merchant">Merchants</option>
                            <option value="Rider">Riders</option>
                            <option value="Users">Users</option>
                          </CSelect>
                        </CCol>
                      </CRow>
                    </CCardHeader>
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
                          "Review Given by": (item) => (
                            <td>{item.reviewgiven}</td>
                          ),

                          Action: (item) => (
                            <td>
                              <CRow>
                                <CCol md="10">
                                  <CButton
                                    size="sm"
                                    onClick={() => {
                                      DeleteRiviews(item.pkid);
                                    }}
                                    id="war-btn1"
                                  >
                                    <DeleteSharpIcon />
                                    {item.status}
                                  </CButton>
                                </CCol>
                              </CRow>
                            </td>
                          ),
                          Name: (item) => (
                            <td>
                              <CButton id="order-list" onClick={redirect3}>
                                <Link to="#"> {item.Name}</Link>
                              </CButton>
                            </td>
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
