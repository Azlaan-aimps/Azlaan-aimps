import React, { useState } from "react";
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
  CForm,
  CFormGroup,
  CLabel,
  CInput,
  CInputFile,
  CSelect,
} from "@coreui/react";

import "../../style.css";
import TAABEDAR_SERVICE from "src/services/service";

import usersData from "../users/UsersData";

const fields = [
  { key: "Action" },
  { key: "Name" },
  { key: "Mobile" },
  { key: "Type" },
  { key: "City" },
  { key: "Store" },
  { key: "Date" },
  { key: "Reports" },
  { key: "Profile" },
  { key: "Image" },
];

const AddButton = () => {
  const [myEmpMaster, setMyEmpMaster] = useState(" ");
  return (
    <div>
      <CRow>
        <CCol md="3"></CCol>
        <CCol md="6">
          <h1 id="ccmaster"> Employee Master</h1>
        </CCol>
        <CCol md="3"></CCol>
      </CRow>
      <CRow>
        <CCol md="12">
          <div>
            <CButton
              color="danger"
              size="sm"
              id="AddEmp"
              onClick={() => setMyEmpMaster("NewEmp")}
            >
              Add New Employee
            </CButton>
            <br></br>
          </div>
        </CCol>
      </CRow>
      <div>
        {myEmpMaster === "NewEmp" ? <NewEmployeeMaster /> : <EmployeeMaster />}
      </div>
      <br></br>
    </div>
  );
};

const EmployeeMaster = () => {
  const [success, setSuccess] = useState(false);
  const [info, setInfo] = useState(false);

  return (
    <>
      <CRow>
        <CCol md="12">
          <CCard>
            <CCardBody>
              <CDataTable
                items={usersData}
                fields={fields}
                striped
                itemsPerPage={5}
                pagination
                sorter
                tableFilter
                itemsPerPageSelect
                scopedSlots={{
                  Action: (item) => (
                    <td>
                      <CRow>
                        <CCol md="3">
                          <CButton color="success" size="sm" id="war-btn">
                            Edit
                            {item.status}
                          </CButton>
                        </CCol>
                        <CCol md="4">
                          <CButton color="danger" size="sm" id="war-btn11">
                            Delete
                            {item.status}
                          </CButton>
                        </CCol>
                        <CCol md="5">
                          <CButton color="warning" size="sm" id="blk-btn1">
                            Block
                            {item.status}
                          </CButton>
                        </CCol>
                      </CRow>
                    </td>
                  ),
                  Reports: (item) => (
                    <td>
                      <CButton
                        color="success"
                        onClick={() => setSuccess(!success)}
                        className="mr-1"
                      >
                        Report
                      </CButton>
                    </td>
                  ),
                  Profile: (item) => (
                    <td>
                      <CButton
                        color="info"
                        onClick={() => setInfo(!info)}
                        className="mr-1"
                      >
                        Profile
                      </CButton>
                    </td>
                  ),
                  Image: (item) => (
                    <td>
                      <img
                        class="icon-image"
                        src="/avatars/2.jpg"
                        height="35"
                        width="35"
                        alt="admin@bootstrapmaster.com"
                      />
                    </td>
                  ),
                }}
              />
              <CModal
                show={success}
                onClose={() => setSuccess(!success)}
                color="success"
              >
                <CModalHeader closeButton>
                  <CModalTitle>Sales Report</CModalTitle>
                </CModalHeader>
                <CModalBody>
                  Order No : 0012<br></br>
                  Order Item : Motton Biryaani<br></br>
                  Quantity : 2<br></br>
                  Total Amount : 900<br></br>
                  <hr></hr>
                  Order No : 0012<br></br>
                  Order Item : Motton Biryaani<br></br>
                  Quantity : 2<br></br>
                  Total Amount : 900<br></br>
                  <hr></hr>
                  Order No : 0012<br></br>
                  Order Item : Motton Biryaani<br></br>
                  Quantity : 2<br></br>
                  Total Amount : 900<br></br>
                </CModalBody>
                <CModalFooter>
                  <CButton color="success" onClick={() => setSuccess(!success)}>
                    Done
                  </CButton>{" "}
                  <CButton
                    color="secondary"
                    onClick={() => setSuccess(!success)}
                  >
                    Cancel
                  </CButton>
                </CModalFooter>
              </CModal>
              <CModal show={info} onClose={() => setInfo(!info)} color="info">
                <CModalHeader closeButton>
                  <CModalTitle>Employee Profile</CModalTitle>
                </CModalHeader>
                <CModalBody>
                  First Name : Shabaz<br></br>
                  Last Name : Pasha<br></br>
                  Employee Type : Store Manager<br></br>
                  Email Address : Shabaz@vssitcompany.com<br></br>
                  <hr></hr>
                  Mobile Number : 9854540012<br></br>
                  Document Number : 96385201477410<br></br>
                  DL Number : Ka2122<br></br>
                  State : Karnataka<br></br>
                  City : Mysuru<br></br>
                </CModalBody>
                <CModalFooter>
                  <CButton color="info" onClick={() => setInfo(!info)}>
                    Done
                  </CButton>{" "}
                  <CButton color="secondary" onClick={() => setInfo(!info)}>
                    Cancel
                  </CButton>
                </CModalFooter>
              </CModal>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
};

const NewEmployeeMaster = () => {
  return (
    <div>
      <CRow>
        <CCol md="12">
          <CCard>
            <CCardHeader>Add New Employee</CCardHeader>
            <CCardBody>
              <CForm
                action=""
                method="post"
                encType="multipart/form-data"
                className="form-horizontal"
              >
                <CFormGroup className="pr-1">
                  <CRow id="firstrow">
                    <CCol md="4">
                      <CLabel htmlFor="exampleInputName2" className="pr-1">
                        First Name
                      </CLabel>
                      <CInput
                        id="exampleInputName2"
                        placeholder=" Enter First Name"
                        required
                      />
                    </CCol>
                    <CCol md="4">
                      <CLabel htmlFor="exampleInputEmail2" className="pr-1">
                        Last Name
                      </CLabel>
                      <CInput
                        type="text"
                        id="exampleInputEmail2"
                        placeholder="Enter Last Name"
                        required
                      />
                    </CCol>
                    <CCol md="4">
                      <CLabel htmlFor="exampleInputEmail2" className="pr-1">
                        Employee Type
                      </CLabel>
                      <CSelect custom name="Employee Type" id="Country">
                        <option value="0">Employee Type</option>
                        <option value="1">Option #1</option>
                        <option value="2">Option #2</option>
                        <option value="3">Option #3</option>
                      </CSelect>
                    </CCol>
                  </CRow>
                  <CRow id="secondrow">
                    <CCol md="4">
                      <CLabel htmlFor="exampleInputName2" className="pr-1">
                        E-Mail
                      </CLabel>
                      <CInput
                        id="exampleInputName2"
                        placeholder="Enter Email"
                        required
                      />
                    </CCol>
                    <CCol md="4">
                      <CLabel htmlFor="exampleInputName2" className="pr-1">
                        Password
                      </CLabel>
                      <CInput
                        id="exampleInputName2"
                        placeholder="Enter Password"
                        required
                      />
                    </CCol>
                    <CCol md="4">
                      <CLabel htmlFor="exampleInputName2" className="pr-1">
                        Mobile
                      </CLabel>
                      <CInput
                        id="exampleInputName2"
                        placeholder="Enter Mobile No"
                        required
                      />
                    </CCol>
                  </CRow>
                  <CRow id="thirdrow">
                    <CCol md="4">
                      <CLabel htmlFor="exampleInputName2" className="pr-1">
                        Document Number
                      </CLabel>
                      <CInput
                        id="exampleInputName2"
                        placeholder="Enter Doc Number"
                        required
                      />
                    </CCol>
                    <CCol md="4">
                      <CLabel htmlFor="exampleInputName2" className="pr-1">
                        DL number
                      </CLabel>
                      <CInput
                        id="exampleInputName2"
                        placeholder="Enter DL NO"
                        required
                      />
                    </CCol>
                    <CCol md="4">
                      <CLabel htmlFor="exampleInputName2" className="pr-1">
                        State
                      </CLabel>
                      <CSelect custom name="State" id="Country">
                        <option value="0">Select State</option>
                        <option value="1">Option #1</option>
                        <option value="2">Option #2</option>
                        <option value="3">Option #3</option>
                      </CSelect>
                    </CCol>
                  </CRow>
                  <CRow id="fourthrow">
                    <CCol md="4">
                      <CLabel htmlFor="exampleInputName2" className="pr-1">
                        City
                      </CLabel>
                      <CSelect custom name="Employee Type" id="Country">
                        <option value="0">Select City</option>
                        <option value="1">Option #1</option>
                        <option value="2">Option #2</option>
                        <option value="3">Option #3</option>
                      </CSelect>
                    </CCol>
                    <CCol md="4">
                      <CLabel md="4" htmlFor="file-input" id="file">
                        Upload Document
                      </CLabel>
                      <CInputFile id="file-input" name="Choose Document" />
                    </CCol>
                    <CCol md="4">
                      <CLabel md="4" htmlFor="file-input" id="file">
                        Upload DL
                      </CLabel>
                      <CInputFile id="file-input" name="Choose DL" />
                    </CCol>
                  </CRow>
                  <CRow>
                    <CCol md="4">
                      <CLabel md="4" htmlFor="file-input" id="file">
                        Upload Image
                      </CLabel>
                      <CInputFile id="file-input" name="Choose Image" />
                    </CCol>
                    <CCol md="4">
                      <div id="inline-btn">
                        <CButton type="submit" size="md" id="newEmp-btn">
                          Add
                        </CButton>
                      </div>
                    </CCol>
                  </CRow>
                </CFormGroup>
              </CForm>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </div>
  );
};

export default AddButton;
