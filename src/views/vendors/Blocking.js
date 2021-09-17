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
  CLink,
} from "@coreui/react";

import "../../../src/style.css";
import TAABEDAR_SERVICE from "src/services/service";
import LockOpenSharpIcon from "@material-ui/icons/LockOpenSharp";
import { useHistory } from "react-router-dom";
import promoData from "src/views/users/StoreData";
const table = { placeholder: "Search here...", label: "Search" };
const Rows = { label: "Rows" };
const fields = [
  { key: "UnBlock" },
  { key: "Name" },
  { key: "Email" },
  { key: "Mobile" },
  { key: "Branch" },
  { key: "Type" },
  { key: "Category" },
  { key: "Address" },
  { key: "City" },
  { key: "Area" },
  { key: "Blocking_Reason" },
  { key: "Unblocking_Suggestion" },
  { key: "TotalOrders" },
  { key: "Blocking_Date" },
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
  const [BlockedVendors, setBlockedVendors] = useState();
  const [MerchantCategory, setMerchantCategory] = useState();

  const GetUnblockedVendors = React.useCallback(() => {
    axios({
      method: "GET",
      url: TAABEDAR_SERVICE + "/GetBlockedVendor",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((response) => {
        setBlockedVendors(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    GetVendorCategory();
  }, []);

  const GetVendorCategory = () => {
    axios({
      method: "GET",
      url: TAABEDAR_SERVICE + "/GetMerchantType",
      headers: {
        "content-type": "application/json",
      },
      params: {
        language_code: "en",
      },
    })
      .then((response) => {
        const MerchantTypeOption = response.data.map((item) => (
          <option value={item.pkid}>{item.Categories}</option>
        ));
        setMerchantCategory(MerchantTypeOption);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const ChangeFilter = (event) => {
    const fldate = "";
    if (event.target.value == "0") {
      GetUnblockedVendors();
    } else {
      axios({
        method: "GET",
        url:
          TAABEDAR_SERVICE +
          "/GetBlockedVendorFilter/" +
          event.target.value +
          "",
        headers: {
          "content-type": "application/json",
        },
      })
        .then((response) => {
          setBlockedVendors(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const UnbloackVendor = (pkid) => {
    axios({
      method: "GET",
      url: TAABEDAR_SERVICE + "/UnBlockVendor/" + pkid + "",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((response) => {
        if (response.data == true) {
          alert("Vendor Sucessfully Unblocked");
          GetUnblockedVendors();
        } else {
          alert("Failed To Unblocked Vendor");
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
    history.push("/EditVendor");
  };

  React.useEffect(() => {
    GetUnblockedVendors();
  }, []);

  return (
    <>
      <CRow>
        <CCol md="3"></CCol>
        <CCol md="6">
          <h1 id="ccmaster">Blocked Vendors</h1>
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
                          <CLabel htmlFor="nf-email">Select Vendors</CLabel>
                          <CSelect
                            custom
                            name="merchant"
                            onChange={ChangeFilter}
                            id="merchant"
                          >
                            <option value="0">All</option>
                            {MerchantCategory}
                          </CSelect>
                        </CCol>
                      </CRow>
                    </CCardHeader>
                    <CCardBody>
                      <CDataTable
                        items={BlockedVendors}
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

                          UnBlock: (item) => (
                            <td>
                              <CRow>
                                <CCol md="10">
                                  <CButton
                                    size="sm"
                                    onClick={() => {
                                      UnbloackVendor(item.pkid);
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
                          TotalOrders: (item) => (
                            <td>
                              <CLink
                                to={{
                                  pathname: "/VendorTotalOrder",
                                  data: item,
                                }}
                              >
                                {item.totalOrders}
                              </CLink>
                            </td>
                          ),
                          Blocking_Reason: (item) => (
                            <td>{item.blockreason}</td>
                          ),
                          Unblocking_Suggestion: (item) => (
                            <td>{item.blocksuggetion}</td>
                          ),
                          Blocking_Date: (item) => <td>{item.bloackdate}</td>,
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
