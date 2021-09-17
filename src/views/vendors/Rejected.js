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

import { useHistory } from "react-router-dom";
import TAABEDAR_SERVICE from "src/services/service";
import ThumbUpAltSharpIcon from "@material-ui/icons/ThumbUpAltSharp";
import promoData from "src/views/users/StoreData";
import MenuBookSharpIcon from "@material-ui/icons/MenuBookSharp";
import DescriptionSharpIcon from "@material-ui/icons/DescriptionSharp";
const table = { placeholder: "Search here...", label: "Search" };
const Rows = { label: "Rows" };
const fields = [
  { key: "Action" },
  { key: "Name" },
  { key: "Email" },
  { key: "Mobile" },
  { key: "Branch" },
  { key: "Type" },
  { key: "Category" },
  { key: "Address" },
  { key: "City" },
  { key: "Area" },
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
  const [RejectedVendors, setRejectedVendors] = useState();
  const [MerchantCategory, setMerchantCategory] = useState();

  const GetRejectedVendors = React.useCallback(() => {
    axios({
      method: "GET",
      url: TAABEDAR_SERVICE + "/GetRejectedVendor",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((response) => {
        setRejectedVendors(response.data);
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
      GetRejectedVendors();
    } else {
      axios({
        method: "GET",
        url:
          TAABEDAR_SERVICE +
          "/GetRejectedVendorFilter/" +
          event.target.value +
          "",
        headers: {
          "content-type": "application/json",
        },
      })
        .then((response) => {
          setRejectedVendors(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const AcceptVendor = (pkid) => {
    axios({
      method: "GET",
      url: TAABEDAR_SERVICE + "/AcceptVendor/" + pkid + "",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((response) => {
        if (response.data == true) {
          alert("Vendor Sucessfully Accepted");
          GetRejectedVendors();
        } else {
          alert("Failed To Accept Vendor");
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
    GetRejectedVendors();
  }, []);

  return (
    <>
      <CRow>
        <CCol md="3"></CCol>
        <CCol md="6">
          <h1 id="ccmaster">Rejected Vendors</h1>
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
                        items={RejectedVendors}
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
                          Action: (item) => (
                            <td>
                              <CRow>
                                <CCol md="10">
                                  <CButton
                                    size="sm"
                                    onClick={() => {
                                      AcceptVendor(item.pkid);
                                    }}
                                    id="war-btn"
                                  >
                                    {" "}
                                    <ThumbUpAltSharpIcon />
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
                                  <CButton
                                    onClick={redirect}
                                    size="sm"
                                    id="war-btn"
                                  >
                                    <MenuBookSharpIcon />
                                  </CButton>
                                </CCol>
                              </CRow>
                            </td>
                          ),
                          Document: (item) => (
                            <td>
                              <CRow>
                                <CCol md="10">
                                  <CButton
                                    size="sm"
                                    id="war-btn"
                                    onClick={redirect2}
                                  >
                                    <DescriptionSharpIcon />
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
