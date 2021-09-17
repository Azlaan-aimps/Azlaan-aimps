import React, { useState } from "react";
import EditIcon from "@material-ui/icons/Edit";
import DeleteSharpIcon from "@material-ui/icons/DeleteSharp";
import { IKContext, IKImage, IKUpload } from "imagekitio-react";
import axios from "axios";
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
  CButton,
  CLink,
} from "@coreui/react";
import {useHistory} from 'react-router';
import "../../style.css";
import TAABEDAR_SERVICE from "src/services/service";
import LockOpenSharpIcon from "@material-ui/icons/LockOpenSharp";
import NoEncryptionSharpIcon from "@material-ui/icons/NoEncryptionSharp";

const fields = [
  { key: "Action" },
  { key: "Active / InActive" },
  { key: "Status" },
  { key: "Name" },
  { key: "Category" },
  { key: "Code" },
  { key: "Title" },
  { key: "SubTitle" },
  { key: "Image" },
  { key: "Area" },
  { key: "City" },
  { key: "FromDate" },
  { key: "ToDate" },
  { key: "UserLimit" },
  { key: "Discount" },
  { key: "Description" },
  //
];
const table = { placeholder: "Search here...", label: "Search" };
const Rows = { label: "Rows" };

const publicKey = "public_Q88FTm6/mKTXhbicC8rJNyROsbU=";
const urlEndpoint = "https://ik.imagekit.io/h3rqsqucfge/";
const authenticationEndpoint = "http://localhost:3001/auth";

const AddNewCoupons = () => {
  const print = () => {
    window.print();
  };

  const [responseData, setResponseData] = useState("");
  const fetchData = React.useCallback(() => {
    axios({
      method: "GET",
      url: TAABEDAR_SERVICE + "/GetCoupon",
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

  React.useEffect(() => {
    fetchData();
  }, []);

  const Delete = (id) => {
    axios({
      method: "GET",
      url: TAABEDAR_SERVICE + "/DeleteCoupon/" + id + "",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((response) => {
        console.log(response.data);
        console.log(response);
        if (response.data == true) {
          alert("Selected Coupon Deleted");
          fetchData();
        } else {
          alert("Failed To Delete Coupon");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const InActiveCoupon = (pkid) => {
    axios({
      method: "GET",
      url: TAABEDAR_SERVICE + "/InActiveCoupon/" + pkid + "",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((response) => {
        if (response.data == true) {
          alert("Selected Coupon Is InActive");
          fetchData();
        } else {
          alert("Failed To InActive Coupon");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const ActiveCoupon = (pkid) => {
    axios({
      method: "GET",
      url: TAABEDAR_SERVICE + "/ActiveCoupon/" + pkid + "",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((response) => {
        if (response.data == true) {
          alert("Selected Coupon Is Active");
          fetchData();
        } else {
          alert("Failed To Active Coupon");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const history = useHistory();
  
  return (
    <div>
      <CRow>
        <CCol md="3"></CCol>
        <CCol md="6">
          <h1 id="ccmaster">Coupons</h1>
        </CCol>
        <CCol md="3"></CCol>
      </CRow>
      <CRow>
        <CCol md="12">
          <div>
            <CLink to="/AddCoupons">
              <CButton color="danger" size="sm" id="AddEmp">
                Add Coupons
              </CButton>
            </CLink>

            <br></br>
          </div>
        </CCol>
      </CRow>
      <CRow>
        <CCol md="12">
          <CCard>
            <CCardBody>
              <CRow>
                <CCol>
                  <CCard>
                    <CCardHeader>Active Coupons</CCardHeader>
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
                          Status: (item) => (
                            <td style={{ color: "green", fontWeight: "900" }}>
                              {item.Status}
                            </td>
                          ),
                          "Active / InActive": (item) =>
                            item.Status === "Active" ? (
                              <td>
                                <CButton
                                  size="sm"
                                  onClick={() => {
                                    InActiveCoupon(item.pkid);
                                  }}
                                  id="deactivate"
                                >
                                  <NoEncryptionSharpIcon />
                                </CButton>
                              </td>
                            ) : (
                              <td>
                                <CButton
                                  size="sm"
                                  onClick={() => {
                                    ActiveCoupon(item.pkid);
                                  }}
                                  id="activate"
                                >
                                  <LockOpenSharpIcon />
                                </CButton>
                              </td>
                            ),
                          Action: (item) => (
                            <td>
                             <CRow>
                               <CCol md="1">
                                 <CButton
                                    size="sm"
                                    id="war-btn"
                                    onClick={() => {
                                      history.push ('/CouponEdit', {
                                        data: item,
                                      });
                                    }}
                                  >
                                    <EditIcon />
                                    {item.status}
                                  </CButton>
                                </CCol>
                                <CCol md="1">
                                  <CButton
                                    size="sm"
                                    onClick={() => {
                                      Delete (item.pkid);
                                    }}
                                    id="war-btn1"
                                  >
                                    <DeleteSharpIcon />
                                    {item.status}
                                  </CButton>
                                </CCol>
                                <CCol md="1" />
                              </CRow>
                            </td>
                          ),

                          Image: (item) => (
                            <td>
                              <IKImage
                                urlEndpoint={urlEndpoint}
                                path={item.Image}
                                width="50px"
                                height="50px"
                              />
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
    </div>
  );
};

export default AddNewCoupons;
