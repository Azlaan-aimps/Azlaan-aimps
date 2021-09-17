import React from "react";

import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CLabel,
  CInput,
} from "@coreui/react";
import TAABEDAR_SERVICE from "src/services/service";
import "../../style.css";

const Edit = (props) => {
 
  return (
    <div>
      <CRow>
        <CCol md="12">
          <CCard>
            <CCardBody>
              <CRow>
                <CCol>
                  {/* <CCard>
                    <CCardHeader>Profile</CCardHeader>
                    <CCardBody>
                      <CForm
                        method="post"
                        encType="multipart/form-data"
                        className="form-horizontal"
                      >
                        <CFormGroup className="pr-1">
                          <div>
                            <CRow id="firstrow">
                              <CCol md="3">
                                <CLabel
                                  htmlFor="exampleInputName2"
                                  className="pr-1"
                                >
                                  Name
                                </CLabel>
                                <CInput
                                  id="exampleInputName2"
                                  placeholder=""
                                  value="YTRE"
                                  required
                                />
                              </CCol>
                              <CCol md="3">
                                <CLabel
                                  htmlFor="exampleInputName2"
                                  className="pr-1"
                                >
                                  DLNo
                                </CLabel>
                                <CInput
                                  id="exampleInputName2"
                                  placeholder=""
                                  value="KA123243255"
                                  required
                                />
                              </CCol>
                              <CCol md="3">
                              <CLabel
                                  htmlFor="exampleInputName2"
                                  className="pr-1"
                                >
                                  City
                                </CLabel>
                              <CInput
                                  id="exampleInputName2"
                                  placeholder=""
                                  value="KA123243255"
                                  required
                                />
                              </CCol>
                              <CCol md="3">
                                <CLabel htmlFor="nf-email">Area</CLabel>
                                <CSelect custom name="Province" id="Province">
                                  <option value="0">Saraswathipuram</option>
                                  <option value="1">Option #1</option>
                                  <option value="2">Option #2</option>
                                  <option value="3">Option #3</option>
                                </CSelect>
                              </CCol>
                            </CRow>
                            <CRow id="secondrow">
                              <CCol md="3">
                                <CLabel htmlFor="nf-email">Email</CLabel>
                                <CInput
                                  id="exampleInputName2"
                                  placeholder=" "
                                  value="ertead123@gmail.com"
                                  required
                                />
                              </CCol>
                              <CCol md="3">
                                <CLabel
                                  htmlFor="exampleInputName2"
                                  className="pr-1"
                                >
                                  Address
                                </CLabel>
                                <CInput
                                  id="exampleInputName2"
                                  placeholder=" "
                                  value="mysuru"
                                  required
                                />
                              </CCol>
                              <CCol md="3">
                                <CLabel
                                  htmlFor="exampleInputName2"
                                  className="pr-1"
                                >
                                  Mobile Number
                                </CLabel>
                                <CInput
                                  id="exampleInputName2"
                                  placeholder=" "
                                  value="9638521470"
                                  type="number"
                                  required
                                />
                              </CCol>
                              <CCol md="3">
                                <CLabel
                                  htmlFor="exampleInputName2"
                                  className="pr-1"
                                >
                                  Document
                                </CLabel>
                                <CInput
                                  id="exampleInputName2"
                                  placeholder=" "
                                  type="File"
                                  required
                                />
                              </CCol>
                            </CRow>
                          </div>
                          <hr></hr>
                          <div>
                            <p>
                              <b>Bank Information</b>
                            </p>
                            <CRow id="firstrow">
                              <CCol md="3">
                                <CLabel
                                  htmlFor="exampleInputName2"
                                  className="pr-1"
                                >
                                  Name
                                </CLabel>
                                <CInput
                                  id="exampleInputName2"
                                  placeholder=" "
                                  value="Arerrt"
                                  required
                                />
                              </CCol>
                              <CCol md="3">
                                <CLabel
                                  htmlFor="exampleInputName2"
                                  className="pr-1"
                                >
                                  Account Number
                                </CLabel>
                                <CInput
                                  id="exampleInputName2"
                                  placeholder=" "
                                  value="SBI112132"
                                  required
                                />
                              </CCol>
                              <CCol md="3">
                                <CLabel
                                  htmlFor="exampleInputName2"
                                  className="pr-1"
                                >
                                  IBAN Code
                                </CLabel>
                                <CInput
                                  id="exampleInputName2"
                                  placeholder=" "
                                  value="SA43424243"
                                  required
                                />
                              </CCol>
                              <CCol md="3">
                                <CLabel
                                  htmlFor="exampleInputName2"
                                  className="pr-1"
                                >
                                  Branch
                                </CLabel>
                                <CInput
                                  id="exampleInputName2"
                                  placeholder=" "
                                  value="NR Mohalalh"
                                  required
                                />
                              </CCol>
                            </CRow>
                          </div>
                          <hr></hr>
                          <div>
                            <p>
                              <b>Jazz Cash Information</b>
                            </p>
                            <CRow id="secondrow">
                              <CCol md="3">
                                <CLabel
                                  htmlFor="exampleInputName2"
                                  className="pr-1"
                                >
                                  User Number
                                </CLabel>
                                <CInput
                                  id="exampleInputName2"
                                  placeholder=" "
                                  value="956687685"
                                  required
                                />
                              </CCol>
                            </CRow>
                          </div>
                          <hr></hr>
                        </CFormGroup>
                      </CForm>
                    </CCardBody>
                  </CCard> */}

                  <CCard>
                    <CCardHeader>Rider's Profile</CCardHeader>
                    <CCardBody>
                      <CRow>
                        <CCol md="6">
                          <p style={{ fontSize: "12px" }}>
                            <span>Name : </span>
                            <span
                              style={{
                                fontSize: "14px",
                                fontWeight: "700",
                                color: "DarkGreen",
                              }}
                            >
                              {props.location.state.data.Name}
                            </span>
                          </p>
                          <p style={{ fontSize: "12px" }}>
                            <span>DL No : </span>{" "}
                            <span
                              style={{
                                fontSize: "14px",
                                fontWeight: "700",
                                color: "DarkGreen",
                              }}
                            >
                              {props.location.state.data.dlNo}
                            </span>{" "}
                          </p>
                          <p style={{ fontSize: "12px" }}>
                            <span>City : </span>
                            <span
                              style={{
                                fontSize: "14px",
                                fontWeight: "700",
                                color: "DarkGreen",
                              }}
                            >
                              {props.location.state.data.City}
                            </span>
                          </p>
                          <p style={{ fontSize: "12px" }}>
                            <span>Area : </span>{" "}
                            <span
                              style={{
                                fontSize: "14px",
                                fontWeight: "700",
                                color: "DarkGreen",
                              }}
                            >
                              {props.location.state.data.Area}
                            </span>{" "}
                          </p>
                          <p style={{ fontSize: "12px" }}>
                            <span>State : </span>{" "}
                            <span
                              style={{
                                fontSize: "14px",
                                fontWeight: "700",
                                color: "DarkGreen",
                              }}
                            >
                              {props.location.state.data.State}
                            </span>{" "}
                          </p>
                        </CCol>
                        <CCol md="6">
                          <p style={{ fontSize: "12px" }}>
                            <span>Email : </span>
                            <span
                              style={{
                                fontSize: "14px",
                                fontWeight: "700",
                                color: "DarkGreen",
                              }}
                            >
                              {props.location.state.data.Email}
                            </span>
                          </p>
                          <p style={{ fontSize: "12px" }}>
                            <span>Address : </span>{" "}
                            <span
                              style={{
                                fontSize: "14px",
                                fontWeight: "700",
                                color: "DarkGreen",
                              }}
                            >
                              {props.location.state.data.Address}
                            </span>
                          </p>

                          <p style={{ fontSize: "12px" }}>
                            <span>Mobile : </span>
                            <span
                              style={{
                                fontSize: "14px",
                                fontWeight: "700",
                                color: "DarkGreen",
                              }}
                            >
                              {props.location.state.data.Mobile}
                            </span>
                          </p>
                          <p style={{ fontSize: "12px" }}>
                            <span>Document : </span>
                            <span
                              style={{
                                fontSize: "14px",
                                fontWeight: "700",
                                color: "DarkGreen",
                              }}
                            >
                              <span
                                style={{
                                  fontSize: "14px",
                                  fontWeight: "700",
                                  color: "DarkGreen",
                                }}
                              >
                                <a
                                  href="https://www.freecodecamp.org/"
                                  target="_blank"
                                >
                                  View
                                </a>
                              </span>
                            </span>
                          </p>
                        </CCol>
                      </CRow>
                      <hr></hr>
                      <CRow>
                        <p
                          style={{
                            marginTop: "8% !important",
                          }}
                        >
                          <h6
                            style={{
                              color: "red",
                              marginLeft: "14px",
                            }}
                          >
                            Bank Information
                          </h6>
                        </p>
                      </CRow>
                      <CRow>
                        <hr></hr>
                        <CCol md="6">
                          <p style={{ fontSize: "12px" }}>
                            <span>Bank Name : </span>
                            <span
                              style={{
                                fontSize: "14px",
                                fontWeight: "700",
                                color: "DarkGreen",
                              }}
                            >
                              CANARA
                            </span>
                          </p>
                          <p style={{ fontSize: "12px" }}>
                            <span>Bank Account Number : </span>
                            <span
                              style={{
                                fontSize: "14px",
                                fontWeight: "700",
                                color: "DarkGreen",
                              }}
                            >
                              123456789123
                            </span>
                          </p>
                        </CCol>
                        <CCol md="6">
                          {/* <p>
                            <h6 style={{ color: "red" }}>Bank Information</h6>
                          </p> */}

                          <p style={{ fontSize: "12px" }}>
                            <span>IBAN Code : </span>
                            <span
                              style={{
                                fontSize: "14px",
                                fontWeight: "700",
                                color: "DarkGreen",
                              }}
                            >
                              223344
                            </span>
                          </p>
                          <p style={{ fontSize: "12px" }}>
                            <span>Bank Branch : </span>
                            <span
                              style={{
                                fontSize: "14px",
                                fontWeight: "700",
                                color: "DarkGreen",
                              }}
                            >
                              Nazarbad
                            </span>{" "}
                          </p>
                        </CCol>
                      </CRow>
                      <hr></hr>
                      <CRow
                        style={{
                          marginTop: "21px !important",
                        }}
                      >
                        <p>
                          <h6
                            style={{
                              color: "red",
                              marginLeft: "14px",
                            }}
                          >
                            Jazz Information
                          </h6>
                        </p>
                      </CRow>
                      <CRow>
                        <CCol md="6">
                          <p style={{ fontSize: "12px" }}>
                            <span>User Number : </span>
                            <span
                              style={{
                                fontSize: "14px",
                                fontWeight: "700",
                                color: "DarkGreen",
                              }}
                            >
                              11223344
                            </span>
                          </p>
                        </CCol>
                        <CCol md="6"></CCol>
                      </CRow>
                    </CCardBody>
                  </CCard>
                </CCol>
              </CRow>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>

      <CRow>
        <CCol md="12">
          <CCard>
            <CCardBody>
              <CRow>
                <CCol>
                  <CCard>
                    <CCardHeader>Summary</CCardHeader>
                    <CCardBody>
                      <CRow>
                        <CCol md="6">
                          <p style={{ fontSize: "12px" }}>
                            <span>- Date Of Joining : </span>
                            <span
                              style={{
                                fontSize: "14px",
                                fontWeight: "700",
                                color: "DarkGreen",
                              }}
                            >
                              20-02-2021
                            </span>
                          </p>
                          <p style={{ fontSize: "12px" }}>
                            <span>- Total Orders Received: </span>{" "}
                            <span
                              style={{
                                fontSize: "14px",
                                fontWeight: "700",
                                color: "DarkGreen",
                              }}
                            >
                              50
                            </span>{" "}
                          </p>
                          <p style={{ fontSize: "12px" }}>
                            <span>- Total Orders Accepted : </span>
                            <span
                              style={{
                                fontSize: "14px",
                                fontWeight: "700",
                                color: "DarkGreen",
                              }}
                            >
                              40
                            </span>
                          </p>
                          <p style={{ fontSize: "12px" }}>
                            <span>- Total Orders Rejected : </span>{" "}
                            <span
                              style={{
                                fontSize: "14px",
                                fontWeight: "700",
                                color: "DarkGreen",
                              }}
                            >
                              10
                            </span>{" "}
                          </p>
                        </CCol>
                        <CCol md="6">
                          <p style={{ fontSize: "12px" }}>
                            <span>- % of orders accepted to deliver : </span>
                            <span
                              style={{
                                fontSize: "14px",
                                fontWeight: "700",
                                color: "DarkGreen",
                              }}
                            >
                              80%
                            </span>
                          </p>
                          <p style={{ fontSize: "12px" }}>
                            <span>- # of orders delivered post accepting </span>{" "}
                            <span
                              style={{
                                fontSize: "14px",
                                fontWeight: "700",
                                color: "DarkGreen",
                              }}
                            >
                              40
                            </span>{" "}
                          </p>
                          <p style={{ fontSize: "12px" }}>
                            <span>
                              - % of orders delivered post accepting :{" "}
                            </span>
                            <span
                              style={{
                                fontSize: "14px",
                                fontWeight: "700",
                                color: "DarkGreen",
                              }}
                            >
                              40
                            </span>
                          </p>
                          <p style={{ fontSize: "12px" }}>
                            <span>- % of orders Reected to deliver : </span>
                            <span
                              style={{
                                fontSize: "14px",
                                fontWeight: "700",
                                color: "DarkGreen",
                              }}
                            >
                              10
                            </span>
                          </p>
                        </CCol>
                      </CRow>
                      <CRow>
                        <hr></hr>
                        <CCol md="6">
                          <p style={{ fontSize: "12px" }}>
                            <span>- Distance covered as per the system : </span>
                            <span
                              style={{
                                fontSize: "14px",
                                fontWeight: "700",
                                color: "DarkGreen",
                              }}
                            >
                              550
                            </span>
                          </p>
                          <p style={{ fontSize: "12px" }}>
                            <span>- Price charged/km </span>{" "}
                            <span
                              style={{
                                fontSize: "14px",
                                fontWeight: "700",
                                color: "DarkGreen",
                              }}
                            >
                              8
                            </span>{" "}
                          </p>
                          <p style={{ fontSize: "12px" }}>
                            <span>- Registered vendor Orders : </span>
                            <span
                              style={{
                                fontSize: "14px",
                                fontWeight: "700",
                                color: "DarkGreen",
                              }}
                            >
                              30
                            </span>
                          </p>
                          <p style={{ fontSize: "12px" }}>
                            <span>- NON-Registered vendor Orders : </span>{" "}
                            <span
                              style={{
                                fontSize: "14px",
                                fontWeight: "700",
                                color: "DarkGreen",
                              }}
                            >
                              10
                            </span>{" "}
                          </p>
                          <p style={{ fontSize: "12px" }}>
                            <span>- Single Orders : </span>{" "}
                            <span
                              style={{
                                fontSize: "14px",
                                fontWeight: "700",
                                color: "DarkGreen",
                              }}
                            >
                              25
                            </span>{" "}
                          </p>
                        </CCol>
                        <CCol md="6">
                          <p style={{ fontSize: "12px" }}>
                            <span>
                              - Average number of orders delivered/day :{" "}
                            </span>
                            <span
                              style={{
                                fontSize: "14px",
                                fontWeight: "700",
                                color: "DarkGreen",
                              }}
                            >
                              8
                            </span>
                          </p>
                          <p style={{ fontSize: "12px" }}>
                            <span>
                              - Average number of orders delivered/weekly{" "}
                            </span>{" "}
                            <span
                              style={{
                                fontSize: "14px",
                                fontWeight: "700",
                                color: "DarkGreen",
                              }}
                            >
                              20
                            </span>{" "}
                          </p>
                          <p style={{ fontSize: "12px" }}>
                            <span>
                              - Average number of orders delivered/monthly :{" "}
                            </span>
                            <span
                              style={{
                                fontSize: "14px",
                                fontWeight: "700",
                                color: "DarkGreen",
                              }}
                            >
                              30
                            </span>
                          </p>
                          <p style={{ fontSize: "12px" }}>
                            <span>- Ratings : </span>{" "}
                            <span
                              style={{
                                fontSize: "14px",
                                fontWeight: "700",
                                color: "DarkGreen",
                              }}
                            >
                              3.5/5
                            </span>{" "}
                          </p>
                          <p style={{ fontSize: "12px" }}>
                            <span>- Multiple Orders : </span>{" "}
                            <span
                              style={{
                                fontSize: "14px",
                                fontWeight: "700",
                                color: "DarkGreen",
                              }}
                            >
                              15
                            </span>{" "}
                          </p>
                        </CCol>
                      </CRow>
                    </CCardBody>
                  </CCard>
                </CCol>
              </CRow>
              {/* <p  style={{fontSize:'12px'}}><span>Mode Of Payment  : </span>COD</p> */}
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </div>
  );
};
class UploadStoreImages extends React.Component {
  constructor(props) {
    super(props);
    this.state = { file: null };
    this.onChange = this.onChange.bind(this);
    this.resetFile = this.resetFile.bind(this);
  }
  onChange(event) {
    this.setState({
      file: URL.createObjectURL(event.target.files[0]),
    });
  }

  resetFile(event) {
    event.preventDefault();
    this.setState({ file: null });
  }
  render() {
    return (
      <div>
        <CRow>
          <CCol>
            <CLabel htmlFor="exampleInputName2" className="pr-1">
              Store Images
            </CLabel>
            <CInput type="file" onChange={this.onChange} />
          </CCol>
          <CCol>
            {/* {this.state.file && (
            <div style={{ textAlign: "center" }}>
              <button id="newEmp-btn" onClick={this.resetFile}>X</button>
            </div>
          )} */}
            <CLabel htmlFor="exampleInputName2" className="pr-1">
              Added Store Image
            </CLabel>
            <img style={{ width: "50%" }} src={this.state.file} />
          </CCol>
        </CRow>
      </div>
    );
  }
}
export default Edit;
