import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CButton,
  CBadge,
  CForm,
  CFormGroup,
  CLabel,
  CInput,
  CSelect,
  CLink,
} from "@coreui/react";
import { IKContext, IKImage, IKUpload } from "imagekitio-react";
import "../../../src/style.css";
import TAABEDAR_SERVICE from "src/services/service";

const onSuccess = (res) => {
  console.log(res);
};

const onError = (res) => {
  console.log(res);
};

const AddNewStores = () => {
  const [CityData, setCityData] = useState([]);
  const [AreaData, setAreaData] = useState();
  const [CategoryData, setCategoryData] = useState();
  const [MerchantTypeData, setMerchantTypeData] = useState();
  const history = useHistory();

  const [VendorFeilds, setVendorFeilds] = useState({
    VendorName: "",
    VendorBranch: "",
    VendorType: "-1",
    City: "-1",
    Area: "-1",
    Category: "-1",
    Address: "",
    Phone: "",
    Discount: "",
    Document: "",
    ShopImage: "",
    OwnerName: "",
    OwnerEmail: "",
    OwnerPassword: "",
    Ownerphone: "",
    OwnerGender: "-1",
    OwnerDob: "",
    BankName: "",
    AccountNumber: "",
    Ifsccode: "",
    Branch: "",
    JezzCash: "",
  });

  const GetAllCities = () => {
    axios({
      method: "GET",
      url: TAABEDAR_SERVICE + "/GetCity",
      headers: {
        "content-type": "application/json",
      },
      params: {
        language_code: "en",
      },
    })
      .then((response) => {
        const CityOption = response.data.map((item) => (
          <option value={item.pkid}>{item.City}</option>
        ));
        setCityData(CityOption);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const GetAllCategory = () => {
    axios({
      method: "GET",
      url: TAABEDAR_SERVICE + "/GetVendorCategory",
      headers: {
        "content-type": "application/json",
      },
      params: {
        language_code: "en",
      },
    })
      .then((response) => {
        const CategoryOption = response.data.map((item) => (
          <option value={item.pkid}>{item.Category}</option>
        ));
        setCategoryData(CategoryOption);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const GetAllMerchantType = () => {
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
        setMerchantTypeData(MerchantTypeOption);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  React.useEffect(() => {
    GetAllCities();
    GetAllCategory();
    GetAllMerchantType();
  }, []);

  const GetAreaByCity = (CityId) => {
    axios({
      method: "GET",
      url: TAABEDAR_SERVICE + "/GetAreaByCityId/" + CityId + "",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((response) => {
        const AreaData = response.data.map((item) => (
          <option value={item.pkid}>{item.Area}</option>
        ));
        setAreaData(AreaData);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const AddVendorDetails = () => {
    if (VendorFeilds.VendorType == "-1") {
      alert("Please Select Merchant Type");
    } else if (
      VendorFeilds.VendorName == "" ||
      VendorFeilds.VendorName == null
    ) {
      alert("Please Enter Vendor Name");
    } else if (
      VendorFeilds.VendorBranch == "" ||
      VendorFeilds.VendorBranch == null
    ) {
      alert("Please Enter Vendor Branch");
    } else if (
      VendorFeilds.City == "" ||
      VendorFeilds.City == "-1" ||
      VendorFeilds.City == null
    ) {
      alert("Please Select City");
    } else if (
      VendorFeilds.Area == "" ||
      VendorFeilds.Area == "-1" ||
      VendorFeilds.Area == null
    ) {
      alert("Please Select Area");
    } else if (
      VendorFeilds.Category == "" ||
      VendorFeilds.Category == "-1" ||
      VendorFeilds.Category == null
    ) {
      alert("Please Select Category");
    } else if (VendorFeilds.Address == "" || VendorFeilds.Address == null) {
      alert("Please Enter Address");
    } else if (VendorFeilds.Phone == "" || VendorFeilds.Phone == null) {
      alert("Please Enter Mobile Number");
    } else if (VendorFeilds.Phone.length != 10) {
      alert("Please Enter Valid Mobile Number");
    } else if (VendorFeilds.Discount == "" || VendorFeilds.Discount == null) {
      alert("Please Enter Discount");
    } else if (VendorFeilds.OwnerName == "" || VendorFeilds.OwnerName == null) {
      alert("Please Enter Owner Name");
    } else if (
      VendorFeilds.OwnerEmail == "" ||
      VendorFeilds.OwnerEmail == null
    ) {
      alert("Please Enter Owner Email");
    } else if (
      VendorFeilds.OwnerPassword == "" ||
      VendorFeilds.OwnerPassword == null
    ) {
      alert("Please Enter Owner Password");
    } else if (
      VendorFeilds.Ownerphone == "" ||
      VendorFeilds.Ownerphone == null
    ) {
      alert("Please Enter Owner Phone Number");
    } else if (VendorFeilds.Ownerphone.length != 10) {
      alert("Please Enter Valid Owner Phone Number");
    } else if (VendorFeilds.OwnerGender == "-1") {
      alert("Please Select Owner Gender");
    } else if (VendorFeilds.OwnerDob == "" || VendorFeilds.OwnerDob == null) {
      alert("Please Enter Owner Date Of Birth");
    } else if (VendorFeilds.BankName == "" || VendorFeilds.BankName == null) {
      alert("Please Enter Bank Name");
    } else if (
      VendorFeilds.AccountNumber == "" ||
      VendorFeilds.AccountNumber == null
    ) {
      alert("Please Enter Bank Account Number");
    } else if (VendorFeilds.Ifsccode == "" || VendorFeilds.Ifsccode == null) {
      alert("Please Enter Bank IBAN Code");
    } else if (VendorFeilds.Branch == "" || VendorFeilds.Branch == null) {
      alert("Please Enter Bank Branch");
    } else if (VendorFeilds.JezzCash == "" || VendorFeilds.JezzCash == null) {
      alert("Please Enter Jezz Cash Number");
    } else {
      var obj = {
        VendorName: VendorFeilds.VendorName,
        VendorBranch: VendorFeilds.VendorBranch,
        VendorType: VendorFeilds.VendorType,
        City: VendorFeilds.City,
        Area: VendorFeilds.Area,
        Category: VendorFeilds.Category,
        Address: VendorFeilds.Address,
        Phone: VendorFeilds.Phone,
        Discount: VendorFeilds.Discount,
        Document: VendorFeilds.Document,
        ShopImage: VendorFeilds.ShopImage,
        OwnerName: VendorFeilds.OwnerName,
        OwnerEmail: VendorFeilds.OwnerEmail,
        OwnerPassword: VendorFeilds.OwnerPassword,
        Ownerphone: VendorFeilds.Ownerphone,
        OwnerGender: VendorFeilds.OwnerGender,
        OwnerDob: VendorFeilds.OwnerDob,
        BankName: VendorFeilds.BankName,
        AccountNumber: VendorFeilds.AccountNumber,
        Ifsccode: VendorFeilds.Ifsccode,
        Branch: VendorFeilds.Branch,
        JezzCash: VendorFeilds.JezzCash,
      };

      axios.post(TAABEDAR_SERVICE + "/AddVendor", obj).then((response) => {
        if (response.data == "0") {
          alert("Vendor Already Exist");
        } else if (response.data == "1") {
          alert("Vendor Added");
          setVendorFeilds({
            VendorName: "",
            VendorBranch: "",
            VendorType: "-1",
            City: "-1",
            Area: "-1",
            Category: "-1",
            Address: "",
            Phone: "",
            Discount: "",
            Document: "",
            ShopImage: "",
            OwnerName: "",
            OwnerEmail: "",
            OwnerPassword: "",
            Ownerphone: "",
            OwnerGender: "-1",
            OwnerDob: "",
            BankName: "",
            AccountNumber: "",
            Ifsccode: "",
            Branch: "",
            JezzCash: "",
          });
          history.push("/ViewVendors");
        } else if (response.data == "2") {
          alert("Failed To Add");
        }
      });
    }
  };

  const publicKey = "public_Q88FTm6/mKTXhbicC8rJNyROsbU=";
  const urlEndpoint = "https://ik.imagekit.io/h3rqsqucfge/";
  const authenticationEndpoint = "http://localhost:3001/auth";

  return (
    <div>
      <CRow>
        <CCol md="3" />
        <CCol md="6">
          <h1 id="ccmaster">All Vendors</h1>
        </CCol>
        <CCol md="3" />
      </CRow>
      <CRow>
        <CCol md="12">
          <CCard>
            <CCardBody>
              <CRow>
                <CCol md="1">
                  <div>
                    <CLink to="/ViewVendors">
                      <CButton size="sm" id="AddEmp">
                        Back
                      </CButton>
                    </CLink>
                    <br />
                  </div>
                </CCol>
              </CRow>
              <CRow>
                <CCol>
                  <CCard>
                    <CCardHeader>Add Vendors</CCardHeader>
                    <CCardBody>
                      <CForm
                        method="post"
                        encType="multipart/form-data"
                        className="form-horizontal"
                      >
                        <CFormGroup className="pr-1">
                          <div>
                            <p>
                              <b>Store Information</b>
                            </p>
                            <CRow id="firstrow">
                              <CCol md="3">
                                <CLabel htmlFor="nf-email">
                                  Merchant Type
                                </CLabel>
                                <CSelect
                                  custom
                                  name="city"
                                  value={VendorFeilds.VendorType}
                                  onChange={(event) => {
                                    setVendorFeilds({
                                      ...VendorFeilds,
                                      VendorType: event.target.value,
                                    });
                                  }}
                                  id="city"
                                >
                                  <option value="-1">
                                    Select Merchant Type
                                  </option>
                                  {MerchantTypeData}
                                </CSelect>
                              </CCol>
                              <CCol md="3">
                                <CLabel
                                  htmlFor="exampleInputName2"
                                  className="pr-1"
                                >
                                  Name
                                </CLabel>
                                <CInput
                                  type="text"
                                  id="exampleInputName2"
                                  placeholder=""
                                  required
                                  value={VendorFeilds.VendorName}
                                  onChange={(event) => {
                                    let value = event.target.value;
                                    value = value.replace(/[^A-Z a-z]/gi, "");
                                    setVendorFeilds({
                                      ...VendorFeilds,
                                      VendorName: value,
                                    });
                                  }}
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
                                  type="text"
                                  id="exampleInputName2"
                                  placeholder=""
                                  required
                                  value={VendorFeilds.VendorBranch}
                                  onChange={(event) => {
                                    let value = event.target.value;
                                    value = value.replace(/[^A-Z a-z]/gi, "");
                                    setVendorFeilds({
                                      ...VendorFeilds,
                                      VendorBranch: value,
                                    });
                                  }}
                                />
                              </CCol>
                              <CCol md="3">
                                <CLabel htmlFor="nf-email">City</CLabel>
                                <CSelect
                                  custom
                                  name="city"
                                  value={VendorFeilds.City}
                                  onChange={(event) => {
                                    setVendorFeilds({
                                      ...VendorFeilds,
                                      City: event.target.value,
                                    });
                                    GetAreaByCity(event.target.value);
                                  }}
                                  id="city"
                                >
                                  <option value="-1">Select City</option>
                                  {CityData}
                                </CSelect>
                              </CCol>
                            </CRow>
                            <CRow id="secondrow">
                              <CCol md="3">
                                <CLabel htmlFor="nf-email">Area</CLabel>
                                <CSelect
                                  custom
                                  name="Province"
                                  value={VendorFeilds.Area}
                                  onChange={(event) => {
                                    setVendorFeilds({
                                      ...VendorFeilds,
                                      Area: event.target.value,
                                    });
                                  }}
                                  id="Province"
                                >
                                  <option value="-1">Select Area</option>
                                  {AreaData}
                                </CSelect>
                              </CCol>
                              <CCol md="3">
                                <CLabel htmlFor="nf-email">Category</CLabel>
                                <CSelect
                                  custom
                                  name="city"
                                  value={VendorFeilds.Category}
                                  onChange={(event) => {
                                    setVendorFeilds({
                                      ...VendorFeilds,
                                      Category: event.target.value,
                                    });
                                  }}
                                  id="city"
                                >
                                  <option value="-1">Select Category</option>
                                  {CategoryData}
                                </CSelect>
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
                                  required
                                  value={VendorFeilds.Address}
                                  onChange={(event) => {
                                    setVendorFeilds({
                                      ...VendorFeilds,
                                      Address: event.target.value,
                                    });
                                  }}
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
                                  type="number"
                                  id="exampleInputName2"
                                  placeholder=" "
                                  pattern="^-?[0-9]\d*\.?\d*$"
                                  value={VendorFeilds.Phone}
                                  onChange={(event) => {
                                    setVendorFeilds({
                                      ...VendorFeilds,
                                      Phone: event.target.value,
                                    });
                                  }}
                                  required
                                />
                              </CCol>
                            </CRow>
                            <CRow>
                              <CCol md="3">
                                <CLabel
                                  htmlFor="exampleInputName2"
                                  className="pr-1"
                                >
                                  Document
                                </CLabel>
                                <IKContext
                                  publicKey={publicKey}
                                  urlEndpoint={urlEndpoint}
                                  authenticationEndpoint={
                                    authenticationEndpoint
                                  }
                                >
                                  <IKUpload
                                    name="image"
                                    type="file"
                                    // fileName={formik.values.image}
                                    onError={onError}
                                    onSuccess={onSuccess}
                                    onChange={(event) => {
                                      setVendorFeilds({
                                        ...VendorFeilds,
                                        ShopImage: event.target.value,
                                      });
                                    }}
                                  />
                                </IKContext>
                              </CCol>
                              <CCol md="3">
                                <CLabel
                                  htmlFor="exampleInputName2"
                                  className="pr-1"
                                >
                                  Discount
                                </CLabel>
                                <CInput
                                  type="number"
                                  id="exampleInputName2"
                                  pattern="^-?[0-9]\d*\.?\d*$"
                                  placeholder=" "
                                  value={VendorFeilds.Discount}
                                  onChange={(event) => {
                                    setVendorFeilds({
                                      ...VendorFeilds,
                                      Discount: event.target.value,
                                    });
                                  }}
                                  required
                                />
                              </CCol>
                            </CRow>
                          </div>
                          <hr />
                          <div>
                            <p>
                              <b>Owner Information</b>
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
                                  type="text"
                                  id="exampleInputName2"
                                  placeholder=" "
                                  required
                                  value={VendorFeilds.OwnerName}
                                  onChange={(event) => {
                                    let value = event.target.value;
                                    value = value.replace(/[^A-Z a-z]/gi, "");
                                    setVendorFeilds({
                                      ...VendorFeilds,
                                      OwnerName: value,
                                    });
                                  }}
                                />
                              </CCol>
                              <CCol md="3">
                                <CLabel
                                  htmlFor="exampleInputName2"
                                  className="pr-1"
                                >
                                  Email
                                </CLabel>
                                <CInput
                                  id="exampleInputName2"
                                  placeholder=" "
                                  required
                                  value={VendorFeilds.OwnerEmail}
                                  onChange={(event) => {
                                    setVendorFeilds({
                                      ...VendorFeilds,
                                      OwnerEmail: event.target.value,
                                    });
                                  }}
                                />
                              </CCol>
                              <CCol md="3">
                                <CLabel
                                  htmlFor="exampleInputName2"
                                  className="pr-1"
                                >
                                  Password
                                </CLabel>
                                <CInput
                                  id="exampleInputName2"
                                  placeholder=" "
                                  required
                                  value={VendorFeilds.OwnerPassword}
                                  onChange={(event) => {
                                    setVendorFeilds({
                                      ...VendorFeilds,
                                      OwnerPassword: event.target.value,
                                    });
                                  }}
                                />
                              </CCol>
                              <CCol md="3">
                                <CLabel
                                  htmlFor="exampleInputName2"
                                  className="pr-1"
                                >
                                  Mobile
                                </CLabel>
                                <CInput
                                  id="exampleInputName2"
                                  placeholder=" "
                                  pattern="^-?[0-9]\d*\.?\d*$"
                                  type="number"
                                  value={VendorFeilds.Ownerphone}
                                  onChange={(event) => {
                                    setVendorFeilds({
                                      ...VendorFeilds,
                                      Ownerphone: event.target.value,
                                    });
                                  }}
                                />
                              </CCol>
                            </CRow>
                            <CRow id="secondrow">
                              <CCol md="3">
                                <CLabel htmlFor="nf-email">Gender</CLabel>
                                <CSelect
                                  custom
                                  name="city"
                                  value={VendorFeilds.OwnerGender}
                                  onChange={(event) => {
                                    setVendorFeilds({
                                      ...VendorFeilds,
                                      OwnerGender: event.target.value,
                                    });
                                  }}
                                  id="city"
                                >
                                  <option value="-1">Select Gender</option>
                                  <option value="Male">Male</option>
                                  <option value="FeMale">Female</option>
                                </CSelect>
                              </CCol>
                              <CCol md="3">
                                <CLabel
                                  htmlFor="exampleInputName2"
                                  className="pr-1"
                                >
                                  DOB
                                </CLabel>
                                <CInput
                                  id="exampleInputName2"
                                  placeholder=" "
                                  type="date"
                                  required
                                  value={VendorFeilds.OwnerDob}
                                  onChange={(event) => {
                                    setVendorFeilds({
                                      ...VendorFeilds,
                                      OwnerDob: event.target.value,
                                    });
                                  }}
                                />
                              </CCol>
                            </CRow>
                          </div>
                          <hr />

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
                                  type="text"
                                  id="exampleInputName2"
                                  placeholder=" "
                                  required
                                  value={VendorFeilds.BankName}
                                  onChange={(event) => {
                                    let value = event.target.value;
                                    value = value.replace(/[^A-Z a-z]/gi, "");
                                    setVendorFeilds({
                                      ...VendorFeilds,
                                      BankName: value,
                                    });
                                  }}
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
                                  type="number"
                                  id="exampleInputName2"
                                  pattern="^-?[0-9]\d*\.?\d*$"
                                  placeholder=" "
                                  required
                                  value={VendorFeilds.AccountNumber}
                                  onChange={(event) => {
                                    setVendorFeilds({
                                      ...VendorFeilds,
                                      AccountNumber: event.target.value,
                                    });
                                  }}
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
                                  required
                                  value={VendorFeilds.Ifsccode}
                                  onChange={(event) => {
                                    setVendorFeilds({
                                      ...VendorFeilds,
                                      Ifsccode: event.target.value,
                                    });
                                  }}
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
                                  type="text"
                                  id="exampleInputName2"
                                  placeholder=" "
                                  required
                                  value={VendorFeilds.Branch}
                                  onChange={(event) => {
                                    let value = event.target.value;
                                    value = value.replace(/[^A-Z a-z]/gi, "");
                                    setVendorFeilds({
                                      ...VendorFeilds,
                                      Branch: value,
                                    });
                                  }}
                                />
                              </CCol>
                            </CRow>
                          </div>
                          <hr />
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
                                  required
                                  value={VendorFeilds.JezzCash}
                                  onChange={(event) => {
                                    setVendorFeilds({
                                      ...VendorFeilds,
                                      JezzCash: event.target.value,
                                    });
                                  }}
                                />
                              </CCol>
                            </CRow>
                          </div>
                          <hr />

                          <CRow>
                            <CCol md="4">
                              <div id="inline-btn">
                                <CButton
                                  type="button"
                                  onClick={AddVendorDetails}
                                  size="md"
                                  id="Add-btn"
                                >
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
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </div>
  );
};

export default AddNewStores;
