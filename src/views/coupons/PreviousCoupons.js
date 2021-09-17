import React, { useState } from "react";
import EditIcon from "@material-ui/icons/Edit";
import DeleteSharpIcon from "@material-ui/icons/DeleteSharp";

import PrintSharpIcon from "@material-ui/icons/PrintSharp";

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

import "../../style.css";
import TAABEDAR_SERVICE from "src/services/service";
import LockOpenSharpIcon from "@material-ui/icons/LockOpenSharp";
import NoEncryptionSharpIcon from "@material-ui/icons/NoEncryptionSharp";

const fields = [
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

const PreviousCoupons = () => {
  const [responseData, setResponseData] = useState("");
  const fetchData = React.useCallback(() => {
    axios({
      method: "GET",
      url: TAABEDAR_SERVICE + "/PreviousCoupons",
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
  return (
    <div>
      <CRow>
        <CCol md="3"></CCol>
        <CCol md="6">
          <h1 id="ccmaster">Previous Coupons</h1>
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
                    <CCardHeader>Expired Coupons</CCardHeader>
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
                            <td style={{ color: "red", fontWeight: "900" }}>
                              {item.Status1}
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

export default PreviousCoupons;
