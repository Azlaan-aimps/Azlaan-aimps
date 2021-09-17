"use Strict";
import React, { useState, useEffect } from "react";
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
  CButton,
  CFormGroup,
  CInput,
  CLabel,
} from "@coreui/react";
import { useFormik } from "formik";
import "../../style.css";
import EditIcon from "@material-ui/icons/Edit";
import DeleteSharpIcon from "@material-ui/icons/DeleteSharp";
import { IKContext, IKImage, IKUpload } from "imagekitio-react";
import axios from "axios";
import TAABEDAR_SERVICE from "src/services/service";

const table = { placeholder: "Search here...", label: "Search:  " };
const row = { label: "Rows:", values: [5, 10, 25, 50, 75, 100] };

const fields = [
  { key: "Action" },
  { key: "Title" },
  { key: "Description" },
  { key: "Image" },
];

const validate = (values) => {
  const errors = {};
  if (!values.title) {
    errors.title = "Required *";
  }

  if (!values.description) {
    errors.description = "Required *";
  }

  if (!values.image) {
    errors.image = "Upload Image *";
  }
  return errors;
};

const onError = (err) => {
  console.log("Error", err);
};

const publicKey = "public_Q88FTm6/mKTXhbicC8rJNyROsbU=";
const urlEndpoint = "https://ik.imagekit.io/h3rqsqucfge/";
const authenticationEndpoint = "http://localhost:3001/auth";

const Banner_Image_Master = () => {
  const [bannerImage, setBannerImage] = useState();
  const [getBannerData, setGetBannerData] = useState();
  const [existImage, setExitImage] = useState();
  const [add, setAdd] = useState(true);
  const [update, setUpdate] = useState(false);
  const [disable, setDisable] = useState(true);

  const onSuccess = (res) => {
    console.log("Success", res.name);
    setBannerImage(res.name);
    res.name !== null && setDisable(false);
  };

  const onLoadFun = () => {
    axios
      .get(TAABEDAR_SERVICE + "/GetBannerImage")
      .then((response) => {
        setGetBannerData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    onLoadFun();
  }, []);

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      image: "",
      pkid: "",
    },
    validate,
    onSubmit: (values) => {
      values.image = bannerImage;
      axios
        .post(TAABEDAR_SERVICE + "/AddBannerImage", values)
        .then((response) => {
          if (response.data === true || response.data === 1) {
            onLoadFun();
            window.location.reload();
            console.log(response);
            alert("Added Successfully");
          } else if (response.data === false) {
            alert("Error not added");
          }
        })
        .catch((error) => {
          console.log(error);
        });
      formik.resetForm();
    },
  });

  const deleteRow = (pkid) => {
    console.log(`delete row Component`);
    axios
      .get(TAABEDAR_SERVICE + "/DeleteBannerImage/ " + pkid + "")
      .then((response) => {
        if (response.data === true) {
          onLoadFun();
          console.log(response);
          alert("Deleted Successfully");
          window.location.reload();
        } else {
          alert("Error not Deleted");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const editRow = (pkid, title, description, image) => {
    console.log(`edit row Component`);
    formik.values.pkid = pkid;
    formik.values.title = title;
    formik.values.description = description;
    setAdd(false);
    setUpdate(true);
    setExitImage(image);
  };

  const AddBtn = () => (
    <CButton type="submit" size="md" id="Add-btn" disabled={disable}>
      Add
    </CButton>
  );

  const UpdateBtn = () => {
    return (
      <CButton
        type="update"
        size="md"
        id="Add-btn"
        onClick={() => {
          if (!formik.values.title) {
            return formik.errors.title;
          } else if (!formik.values.description) {
            return formik.errors.description;
          } else {
            UpdateLogic();
          }
        }}
      >
        Update
      </CButton>
    );
  };

  const UpdateLogic = () => {
    setAdd(true);
    if (bannerImage == "" || bannerImage == null || bannerImage == undefined) {
      formik.values.image = existImage;
    } else {
      formik.values.image = bannerImage;
    }
    axios
      .post(TAABEDAR_SERVICE + "/UpdateBannerImage", formik.values)
      .then((response) => {
        if (response.data === true || response.data === 1) {
          onLoadFun();
          console.log(response);
          window.location.reload();
          alert("Updated Successfully");
        } else {
          alert("Update Failed");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h1 id="ccmaster">Banner Image Master</h1>
      <br />
      <CRow>
        <CCol xs="12" sm="12" md="4" lg="4" xl="4" className="mb-3 mb-xl-0">
          <div id="country-master">
            <CCard>
              <CCardBody>
                <CRow>
                  <CCol>
                    <CCard>
                      <CCardHeader>Add Banners</CCardHeader>
                      <CCardBody>
                        <form onSubmit={formik.handleSubmit}>
                          <CFormGroup row>
                            <CCol xs="12" md="12">
                              <CLabel>Title</CLabel>
                              <CInput
                                id="text-input1"
                                name="title"
                                placeholder="Title of Image"
                                type="text"
                                onChange={formik.handleChange}
                                value={formik.values.title}
                              />
                              {formik.touched.title && formik.errors.title ? (
                                <div class="errorMsg">
                                  {formik.errors.title}
                                </div>
                              ) : null}
                            </CCol>
                          </CFormGroup>

                          <CFormGroup row>
                            <CCol xs="12" md="12">
                              <CLabel>Description</CLabel>
                              <CInput
                                id="text-input"
                                name="description"
                                placeholder="Description of Image"
                                value={formik.values.description}
                                onChange={formik.handleChange}
                              />
                              {formik.touched.description &&
                              formik.errors.description ? (
                                <div class="errorMsg">
                                  {formik.errors.description}
                                </div>
                              ) : null}
                            </CCol>
                          </CFormGroup>
                          <CFormGroup row>
                            <CLabel style={{ paddingLeft: "13px" }}>
                              Choose Image(1024 x 768 px)
                            </CLabel>
                            <CCol xs="12" md="9">
                              <IKContext
                                publicKey={publicKey}
                                urlEndpoint={urlEndpoint}
                                authenticationEndpoint={authenticationEndpoint}
                              >
                                <IKUpload
                                  name="image"
                                  type="file"
                                  fileName={formik.values.image}
                                  onError={onError}
                                  onSuccess={onSuccess}
                                  onChange={formik.handleChange}
                                />
                                {existImage && (
                                  <div class="iconImage">
                                    <IKImage
                                      urlEndpoint={urlEndpoint}
                                      path={existImage}
                                      width="50px"
                                      height="40px"
                                    />
                                  </div>
                                )}
                              </IKContext>
                              {formik.touched.image && formik.errors.image ? (
                                <div class="errorMsg">
                                  {formik.errors.image}
                                </div>
                              ) : null}
                            </CCol>
                          </CFormGroup>
                          {add == true ? <AddBtn /> : <UpdateBtn />}
                        </form>
                      </CCardBody>
                    </CCard>
                  </CCol>
                </CRow>
              </CCardBody>
            </CCard>
          </div>
        </CCol>

        <CCol xs="12" sm="12" md="8" lg="8" xl="8">
          <CCard>
            <CCardBody>
              <CRow>
                <CCol>
                  <CCard>
                    <CCardHeader>Added Banner Images</CCardHeader>
                    <CCardBody>
                      <CDataTable
                        items={getBannerData}
                        fields={fields}
                        hover
                        striped
                        bordered
                        sorter
                        tableFilter={table}
                        itemsPerPageSelect={row}
                        pagination
                        size="sm"
                        scopedSlots={{
                          Title: (item) => <td>{item.Title}</td>,
                          Action: (item) => (
                            <td>
                              <CButton
                                size="sm"
                                id="war-btn"
                                onClick={() =>
                                  editRow(
                                    item.pkid,
                                    item.Title,
                                    item.Description,
                                    item.Image
                                  )
                                }
                              >
                                <EditIcon />
                                {item.status}
                              </CButton>
                              <CButton
                                size="sm"
                                id="war-btn1"
                                onClick={() => {
                                  deleteRow(item.pkid);
                                }}
                              >
                                <DeleteSharpIcon />
                              </CButton>
                            </td>
                          ),
                          Image: (item) => (
                            <td>
                              <IKImage
                                urlEndpoint={urlEndpoint}
                                path={item.Image}
                                width="80px"
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

export default Banner_Image_Master;
