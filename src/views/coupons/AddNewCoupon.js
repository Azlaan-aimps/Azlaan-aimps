import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { IKContext, IKImage, IKUpload } from "imagekitio-react";

import axios from "axios";
import TAABEDAR_SERVICE from "src/services/service";
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CButton,
  CForm,
  CFormGroup,
  CLabel,
  CSelect,
  CInput,
  CTextarea,
  CInputFile,
  CLink,
} from "@coreui/react";

import "../../style.css";

const publicKey = "public_Q88FTm6/mKTXhbicC8rJNyROsbU=";
const urlEndpoint = "https://ik.imagekit.io/h3rqsqucfge/";
const authenticationEndpoint = "http://localhost:3001/auth";

const AddNewCoupons = () => {
  const [CouponsFeilds, setCouponsFeilds] = useState({
    Name: "",
    Code: "",
    Title: "",
    Subtitle: "",
    FromDate: "",
    ToDate: "",
    UserLimit: "",
    Discount: "",
    Category: "",
    Description: "",
    City: "",
    Area: "",
    Image: "",
  });
  const [Image, setImage] = useState();
  const [CityData, setCityData] = useState([]);
  const [AreaData, setAreaData] = useState();
  const [CategoryData, setCategoryData] = useState();
  const history = useHistory();

  const AddCoupons = () => {
    CouponsFeilds.Image = Image;
    if (CouponsFeilds.Name == "" || CouponsFeilds.Name == null) {
      alert("Please Enter Coupon Name");
    } else if (CouponsFeilds.Code == "" || CouponsFeilds.Code == null) {
      alert("Please Enter Coupon Code");
    } else if (CouponsFeilds.Title == "" || CouponsFeilds.Title == null) {
      alert("Please Enter Title");
    } else if (CouponsFeilds.Subtitle == "" || CouponsFeilds.Subtitle == null) {
      alert("Please Enter Sub Title");
    } else if (CouponsFeilds.FromDate == "" || CouponsFeilds.FromDate == null) {
      alert("Please Select From Date");
    } else if (CouponsFeilds.ToDate == "" || CouponsFeilds.ToDate == null) {
      alert("Please Select To Date");
    } else if (
      CouponsFeilds.UserLimit == "" ||
      CouponsFeilds.UserLimit == null
    ) {
      alert("Please Enter User Limit");
    } else if (CouponsFeilds.Discount == "" || CouponsFeilds.Discount == null) {
      alert("Please Enter Discount");
    } else if (
      CouponsFeilds.Category == "-1" ||
      CouponsFeilds.Category == "" ||
      CouponsFeilds.Category == null
    ) {
      alert("Please Enter Category");
    } else if (
      CouponsFeilds.City == "-1" ||
      CouponsFeilds.City == "" ||
      CouponsFeilds.City == null
    ) {
      alert("Please Select City");
    } else if (
      CouponsFeilds.Area == "-1" ||
      CouponsFeilds.Area == "" ||
      CouponsFeilds.Area == null
    ) {
      alert("Please Select Area");
    } else if (CouponsFeilds.Image == "" || CouponsFeilds.Image == null) {
      alert("Please Select Image");
    } else if (
      CouponsFeilds.Description == "" ||
      CouponsFeilds.Description == null
    ) {
      alert("Please Enter Description");
    } else {
      var obj = {
        Name: CouponsFeilds.Name,
        Code: CouponsFeilds.Code,
        Title: CouponsFeilds.Title,
        SubTitle: CouponsFeilds.Subtitle,
        ValidFrom: CouponsFeilds.FromDate,
        ValidTo: CouponsFeilds.ToDate,
        UserLimit: CouponsFeilds.UserLimit,
        Discount: CouponsFeilds.Discount,
        Category: CouponsFeilds.Category,
        City: CouponsFeilds.City,
        Area: CouponsFeilds.Area,
        Image: CouponsFeilds.Image,
        Description: CouponsFeilds.Description,
      };

      console.log(obj);

      axios.post(TAABEDAR_SERVICE + "/AddCoupon ", obj).then((response) => {
        if (response.data == "0") {
          alert("Coupon Already Exist");
        } else if (response.data == "1") {
          alert("Coupon Added");
          history.push("/ViewCoupons");
        } else if (response.data == "2") {
          alert("Failed To Add");
        }
      });
    }
  };

  const onSuccess = (res) => {
    console.log(res.name);
    setImage(res.name);
  };

  const onError = (err) => {
    console.log(err);
  };

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

  React.useEffect(() => {
    GetAllCities();
    GetAllCategory();
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

  console.log("Hai There");

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
        <CCol md="1">
          <div>
            <CLink to="/ViewCoupons">
              <CButton color="danger" size="sm" id="AddEmp">
                Back
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
                    <CCardHeader>Add Coupons</CCardHeader>
                    <CCardBody>
                      <CForm
                        action=""
                        method="post"
                        encType="multipart/form-data"
                        className="form-horizontal"
                      >
                        <CFormGroup className="pr-1">
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
                                placeholder="Coupons Name"
                                required
                                value={CouponsFeilds.Name}
                                onChange={(event) => {
                                  let value = event.target.value;
                                  value = value.replace(/[^A-Z a-z]/gi, "");
                                  setCouponsFeilds({
                                    ...CouponsFeilds,
                                    Name: value,
                                  });
                                }}
                              />
                            </CCol>
                            <CCol md="3">
                              <CLabel
                                htmlFor="exampleInputEmail2"
                                className="pr-1"
                              >
                                Code
                              </CLabel>
                              <CInput
                                type="text"
                                id="exampleInputEmail2"
                                placeholder="Coupons Code"
                                required
                                value={CouponsFeilds.Code}
                                onChange={(event) => {
                                  setCouponsFeilds({
                                    ...CouponsFeilds,
                                    Code: event.target.value,
                                  });
                                }}
                              />
                            </CCol>
                            <CCol md="3">
                              <CLabel
                                htmlFor="exampleInputEmail2"
                                className="pr-1"
                              >
                                Title
                              </CLabel>
                              <CInput
                                type="text"
                                id="exampleInputEmail2"
                                placeholder="Title"
                                required
                                value={CouponsFeilds.Title}
                                onChange={(event) => {
                                  let value = event.target.value;
                                  value = value.replace(/[^A-Z a-z]/gi, "");
                                  setCouponsFeilds({
                                    ...CouponsFeilds,
                                    Title: value,
                                  });
                                }}
                              />
                            </CCol>
                            <CCol md="3">
                              <CLabel
                                htmlFor="exampleInputName2"
                                className="pr-1"
                              >
                                Subtitle
                              </CLabel>
                              <CInput
                                id="exampleInputName2"
                                placeholder="Subtitle"
                                value={CouponsFeilds.Subtitle}
                                onChange={(event) => {
                                  let value = event.target.value;
                                  value = value.replace(/[^A-Z a-z]/gi, "");
                                  setCouponsFeilds({
                                    ...CouponsFeilds,
                                    Subtitle: value,
                                  });
                                }}
                                required
                              />
                            </CCol>
                          </CRow>
                          <CRow id="secondrow">
                            <CCol md="3">
                              <CLabel
                                htmlFor="exampleInputName2"
                                className="pr-1"
                              >
                                Valid Form
                              </CLabel>
                              <CInput
                                id="exampleInputName2"
                                value={CouponsFeilds.FromDate}
                                onChange={(event) => {
                                  setCouponsFeilds({
                                    ...CouponsFeilds,
                                    FromDate: event.target.value,
                                  });
                                }}
                                required
                                type="date"
                              />
                            </CCol>
                            <CCol md="3">
                              <CLabel
                                htmlFor="exampleInputName2"
                                className="pr-1"
                              >
                                Valid To
                              </CLabel>
                              <CInput
                                id="exampleInputName2"
                                type="date"
                                value={CouponsFeilds.ToDate}
                                onChange={(event) => {
                                  setCouponsFeilds({
                                    ...CouponsFeilds,
                                    ToDate: event.target.value,
                                  });
                                }}
                                required
                              />
                            </CCol>
                            <CCol md="3">
                              <CLabel
                                htmlFor="exampleInputName2"
                                className="pr-1"
                              >
                                User limit
                              </CLabel>
                              <CInput
                                type="number"
                                pattern="^-?[0-9]\d*\.?\d*$"
                                id="exampleInputName2"
                                placeholder="User limit"
                                value={CouponsFeilds.UserLimit}
                                onChange={(event) => {
                                  setCouponsFeilds({
                                    ...CouponsFeilds,
                                    UserLimit: event.target.value,
                                  });
                                }}
                                required
                              />
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
                                pattern="^-?[0-9]\d*\.?\d*$"
                                id="exampleInputName2"
                                placeholder="Discount"
                                value={CouponsFeilds.Discount}
                                onChange={(event) => {
                                  setCouponsFeilds({
                                    ...CouponsFeilds,
                                    Discount: event.target.value,
                                  });
                                }}
                                required
                              />
                            </CCol>
                          </CRow>

                          <CRow id="secondrow">
                            <CCol md="3">
                              <CLabel htmlFor="nf-email">Category</CLabel>
                              <CSelect
                                custom
                                name="city"
                                value={CouponsFeilds.Category}
                                onChange={(event) => {
                                  setCouponsFeilds({
                                    ...CouponsFeilds,
                                    Category: event.target.value,
                                  });
                                }}
                                id="city"
                              >
                                <option value="0">Select Category</option>
                                {CategoryData}
                              </CSelect>
                            </CCol>

                            <CCol md="3">
                              <CLabel htmlFor="nf-email">City</CLabel>
                              <CSelect
                                custom
                                name="city"
                                value={CouponsFeilds.City}
                                onChange={(event) => {
                                  setCouponsFeilds({
                                    ...CouponsFeilds,
                                    City: event.target.value,
                                  });
                                  GetAreaByCity(event.target.value);
                                }}
                                // value={CouponsFeilds.City}
                                id="city"
                              >
                                <option value="-1">Select City</option>
                                {CityData}
                              </CSelect>
                            </CCol>
                            <CCol md="3">
                              <CLabel htmlFor="nf-email">Area</CLabel>
                              <CSelect
                                custom
                                name="Province"
                                value={CouponsFeilds.Area}
                                onChange={(event) => {
                                  setCouponsFeilds({
                                    ...CouponsFeilds,
                                    Area: event.target.value,
                                  });
                                }}
                                id="Province"
                              >
                                <option value="-1">Select Area</option>
                                {AreaData}
                              </CSelect>
                            </CCol>
                          </CRow>

                          <CRow>
                            <CCol md="12">
                              <CLabel
                                htmlFor="exampleInputName2"
                                className="pr-1"
                              >
                                Description
                              </CLabel>
                              <CTextarea
                                placeholder="Description"
                                value={CouponsFeilds.Description}
                                onChange={(event) => {
                                  setCouponsFeilds({
                                    ...CouponsFeilds,
                                    Description: event.target.value,
                                  });
                                }}
                              ></CTextarea>
                            </CCol>
                          </CRow>
                          <br></br>
                          <CRow>
                            <CCol md="6">
                              <IKContext
                                publicKey={publicKey}
                                urlEndpoint={urlEndpoint}
                                authenticationEndpoint={authenticationEndpoint}
                              >
                                <IKUpload
                                  name="image"
                                  type="file"
                                  onError={onError}
                                  onSuccess={onSuccess}
                                />
                              </IKContext>
                            </CCol>
                            <CCol md="6"></CCol>
                          </CRow>
                          <CRow>
                            <CCol md="4">
                              <div id="inline-btn">
                                <CButton
                                  type="button"
                                  size="md"
                                  id="Add-btn"
                                  onClick={AddCoupons}
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

export default AddNewCoupons;
