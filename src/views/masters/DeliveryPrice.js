import React, { useState, useEffect, useCallback } from "react";
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
  CButton,
  CForm,
  CFormGroup,
  CSelect,
  CInput,
  CLabel,
} from "@coreui/react";
import "../../style.css";
import TAABEDAR_SERVICE from "src/services/service";
import EditIcon from "@material-ui/icons/Edit";
import DeleteSharpIcon from "@material-ui/icons/DeleteSharp";
import axios from "axios";
import { Formik, useFormik } from "formik";

const table = { placeholder: "Search here...", label: "Search:  " };
const items = { label: "Rows:", values: [5, 10, 25, 50, 75, 100] };
const fields = [
  { key: "Action" },
  { key: "Country" },
  { key: "Province" },
  { key: "City" },
  { key: "Area" },
  { key: "Price_per_KM" },
];

const DeliveryPrice = () => {
  const [getPost, setGetPost] = useState();
  const [countryId, setCountryId] = useState();
  const [province, setProviance] = useState();
  const [provinceId, setProvianceId] = useState();
  const [city, setCity] = useState();
  const [cityId, setCityId] = useState();
  const [Area, setArea] = useState();
  const [AreaId, setAreaId] = useState();
  const [price, setPrice] = useState();
  const [deliveryData, setDeliveryData] = useState();
  const [addBtn, setAddBtn] = useState(true);
  const [pkid, setPkid] = useState(null);
  // const [updateBtn, setUpdateBtn] = useState (false);

  const selectionHandler = (event) => {
    setCountryId(event.target.value);
    callProvince(event.target.value);
  };

  useEffect(() => {
    axios
      .get(TAABEDAR_SERVICE + "/GetCountry")
      .then((res) => {
        setGetPost(
          res.data.map((item) => {
            return <option value={item.pkid}>{item.Country}</option>;
          })
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const callProvince = useCallback((id) => {
    axios
      .get(TAABEDAR_SERVICE + "/GetStateByCountry/" + id + "")
      .then((response) => {
        setProviance(
          response.data.map((item) => {
            return <option value={item.pkid}>{item.Province}</option>;
          })
        );
      })
      .catch((err) => {
        console.log(err);
      });
  });

  const callCity = useCallback((id) => {
    axios
      .get(
        TAABEDAR_SERVICE +
          "/GetCityByStateAndCountry/" +
          countryId +
          "/" +
          id +
          ""
      )
      .then((response) => {
        setCity(
          response.data.map((item) => {
            return <option value={item.pkid}>{item.City}</option>;
          })
        );
      })
      .catch((err) => {
        console.log(err);
      });
  });

  const callArea = useCallback((id) => {
    axios
      .get(
        TAABEDAR_SERVICE +
          "/GetAreaByCityStateAnndCountry/" +
          countryId +
          "/" +
          provinceId +
          "/" +
          id +
          ""
      )
      .then((response) => {
        setArea(
          response.data.map((item) => {
            return <option value={item.pkid}>{item.Area}</option>;
          })
        );
        console.log("Area", response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  const dataObj = {
    pkid: pkid,
    Country: countryId,
    Province: provinceId,
    City: cityId,
    Area: AreaId,
    Price: price,
  };

  useEffect(() => {
    GetAllPrice();
  }, []);

  const GetAllPrice = () => {
    axios
      .get(TAABEDAR_SERVICE + "/GetDeliveryPrice")
      .then((res) => {
        setDeliveryData(res.data);
        console.log("get ser", res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const callAdd = useCallback(() => {
    if (countryId == 0 || countryId == null) {
      alert("Please Select Country");
    } else if (provinceId == 0 || provinceId == null) {
      alert("Please Select Province");
    } else if (cityId == 0 || cityId == null) {
      alert("Please Select City");
    } else if (AreaId == 0 || AreaId == null) {
      alert("Please Select Area");
    } else if (price == "" || price == null || price == undefined) {
      alert("Please Enter the Price");
    } else {
      axios
        .post(TAABEDAR_SERVICE + "/AddDeliveryPrice", dataObj)
        .then((res) => {
          GetAllPrice();
        })
        .catch((err) => {
          console.log(err);
        });
      setPrice("");
      setCountryId("");
      setProviance("");
      setCity("");
      setArea("");
      setPrice("");
      alert("Added Successfully");
    }
  });

  const editRow = (pkid, countryId, stateId, cityId, areaId, Price) => {
    setPkid(pkid);
    GetCountryForUpdate(countryId, stateId, cityId, areaId);
    setPrice(Price);
    setAddBtn(false);
  };

  const GetCountryForUpdate = (countryId, stateId, cityId, areaId) => {
    axios
      .get(TAABEDAR_SERVICE + "/GetCountry")
      .then((res) => {
        setGetPost(
          res.data.map((item) => {
            return <option value={item.pkid}>{item.Country}</option>;
          })
        );
        setCountryId(countryId);
        GetStateByCountry(countryId, stateId, cityId, areaId);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const GetStateByCountry = (countryId, stateId, cityId, areaId) => {
    axios
      .get(TAABEDAR_SERVICE + "/GetStateByCountry/" + countryId + "")
      .then((response) => {
        setProviance(
          response.data.map((item) => {
            return <option value={item.pkid}>{item.Province}</option>;
          })
        );
        setProvianceId(stateId);
        GetCityByStateAndCountry(countryId, stateId, cityId, areaId);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const GetCityByStateAndCountry = (countryId, stateId, cityId, areaId) => {
    axios
      .get(
        TAABEDAR_SERVICE +
          "/GetCityByStateAndCountry/" +
          countryId +
          "/" +
          stateId +
          ""
      )
      .then((response) => {
        setCity(
          response.data.map((item) => {
            return <option value={item.pkid}>{item.City}</option>;
          })
        );
        setCityId(cityId);
        GetAreaByCityStateAndCountry(countryId, stateId, cityId, areaId);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const GetAreaByCityStateAndCountry = (countryId, stateId, cityId, areaId) => {
    axios
      .get(
        TAABEDAR_SERVICE +
          "/GetAreaByCityStateAnndCountry/" +
          countryId +
          "/" +
          stateId +
          "/" +
          cityId +
          ""
      )
      .then((response) => {
        setArea(
          response.data.map((item) => {
            return <option value={item.pkid}>{item.Area}</option>;
          })
        );
        setAreaId(areaId);
        console.log("Area", response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteRow = (pkid) => {
    axios
      .get(TAABEDAR_SERVICE + "/DeleteDeliveryPrice/" + pkid)
      .then((res) => {
        GetAllPrice();
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    alert("Deleted Successfully");
  };

  const AddBtn = () => (
    <CButton type="button" size="md" id="Add-btn" onClick={callAdd}>
      Add
    </CButton>
  );

  const UpdateBtn = () => {
    return (
      <CButton type="button" size="md" id="Add-btn" onClick={updateLogic}>
        Update
      </CButton>
    );
  };

  const updateLogic = () => {
    if (countryId == 0 || countryId == null) {
      alert("Please Select Country");
    } else if (provinceId == null || provinceId == 0) {
      alert("Please Select Province");
    } else if (cityId == null || cityId == 0) {
      alert("Please Select City");
    } else if (AreaId == null || AreaId == 0) {
      alert("Please Select Area");
    } else if (price == "" || price == null || price == undefined) {
      alert("Please Enter the Price");
    } else {
      axios
        .post(TAABEDAR_SERVICE + "/UpdateDeliveryPrice", dataObj)
        .then((res) => {
          console.log(res);
          GetAllPrice();
          setAddBtn(true);
        })
        .catch((err) => {
          console.log(err);
        });
      setPrice("");
      setCountryId("");
      setProviance("");
      setCity("");
      setArea("");
      alert("Updated Successfully");
    }
  };

  // const validate = values => {
  //   const errors = {};
  //   if (!values.Country) {
  //     errors.Country = 'Please Choose Country';
  //   }

  //   if (!values.Province) {
  //     errors.Province = 'Please Choose Province';
  //   }

  //   if (!values.City) {
  //     errors.City = 'Please Choose City';
  //   }

  //   if (!values.Area) {
  //     errors.Area = 'Please Choose Area';
  //   }

  //   if (!values.Price) {
  //     errors.Price = 'Please Choose Price';
  //   }
  //   return errors;
  // };

  // const formik = useFormik ({
  //   initialValues: {
  //     pkid: '',
  //     Country: '',
  //     Province: '',
  //     City: '',
  //     Area: '',
  //     Price: '',
  //   },
  //   validate,
  //   onSubmit: values => {
  //     axios
  //       .post (
  //         'http://192.168.1.3:8086/Tabedar_Dashboard/resourses/projectservice/AddDeliveryPrice',
  //         values
  //       )
  //       .then (res => {
  //         GetAllPrice ();
  //       })
  //       .catch (err => {
  //         console.log (err);
  //       });
  //     alert ('Added Successfully');
  //   },
  // });

  // console.log ('Global', formik.values.Country);

  return (
    <div>
      <CRow>
        <CCol md="3" />
        <CCol md="6">
          <h1 id="ccmaster">Delivery Price Range</h1>
          <br />
        </CCol>
        <CCol md="3" />
      </CRow>
      <CRow>
        <CCol md="4">
          <CCard>
            <CCardBody>
              <CRow>
                <CCol>
                  <CCard>
                    <CCardHeader>Delivery Price</CCardHeader>
                    <CCardBody>
                      <form>
                        <CFormGroup>
                          <CLabel htmlFor="nf-email">Select Country</CLabel>
                          <CSelect
                            custom
                            name="Country"
                            id="Country"
                            value={countryId}
                            onChange={selectionHandler}
                            // value={formik.values.Country}
                            // onChange={Formik.handleChange}
                            // onSelect={() => {
                            //   formik.handleChange()
                            //   console.log ('af', formik.values.Country);
                            //   callProvince (formik.values.Country);
                            // }}
                          >
                            <option value="0">Country</option>
                            {getPost}
                          </CSelect>
                        </CFormGroup>
                        <CFormGroup>
                          <CLabel htmlFor="nf-email">Select Province</CLabel>
                          <CSelect
                            custom
                            name="Province"
                            id="province"
                            value={provinceId}
                            onChange={(event) => {
                              setProvianceId(event.target.value);
                              callCity(event.target.value);
                            }}
                            // value={formik.values.Province}
                            // onChange={() => {
                            //   formik.handleChange ();
                            //   console.log ('as', formik.values.Province);
                            //   // callCity (formik.values.Province);
                            // }}
                          >
                            <option value="0">Province </option>
                            {province}
                          </CSelect>
                        </CFormGroup>
                        <CFormGroup>
                          <CLabel htmlFor="nf-email">Select City</CLabel>
                          <CSelect
                            custom
                            name="City"
                            id="city"
                            value={cityId}
                            onChange={(event) => {
                              callArea(event.target.value);
                              setCityId(event.target.value);
                            }}
                            // value={formik.values.City}
                            // onChange={formik.handleChange}
                          >
                            <option value="0">City</option>
                            {city}
                          </CSelect>
                        </CFormGroup>
                        <CFormGroup>
                          <CLabel htmlFor="nf-email">Select Area</CLabel>
                          <CSelect
                            custom
                            name="Area"
                            id="Area"
                            value={AreaId}
                            onChange={(event) => {
                              setAreaId(event.target.value);
                            }}
                            // value={formik.values.Area}
                            // onChange={formik.handleChange}
                          >
                            <option value="0">Area</option>
                            {Area}
                          </CSelect>
                        </CFormGroup>
                        <CFormGroup>
                          <CLabel>Price</CLabel>
                          <CInput
                            type="number"
                            name="price"
                            placeholder="Enter Price"
                            value={price}
                            onChange={(e) => {
                              setPrice(e.target.value);
                            }}
                            // value={formik.values.Price}
                            // onChange={formik.handleChange}
                          />
                        </CFormGroup>
                        {addBtn === true ? <AddBtn /> : <UpdateBtn />}
                      </form>
                    </CCardBody>
                  </CCard>
                </CCol>
              </CRow>
            </CCardBody>
          </CCard>
        </CCol>

        <CCol col="8">
          <CCard>
            <CCardBody>
              <CRow>
                <CCol>
                  <CCard>
                    <CCardHeader>Added Delivery Price</CCardHeader>
                    <CCardBody>
                      <CDataTable
                        items={deliveryData}
                        fields={fields}
                        striped
                        itemsPerPage={5}
                        size="sm"
                        pagination
                        sorter
                        tableFilter={table}
                        itemsPerPageSelect={items}
                        scopedSlots={{
                          Action: (item) => (
                            <td>
                              <CButton
                                size="sm"
                                id="war-btn"
                                onClick={() => {
                                  editRow(
                                    item.pkid,
                                    item.countryId,
                                    item.stateId,
                                    item.cityId,
                                    item.areaId,
                                    item.maxPrice
                                  );
                                }}
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
                                {item.status}
                              </CButton>
                            </td>
                          ),
                          Price_per_KM: (item) => <td>{item.maxPrice}</td>,
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

export default DeliveryPrice;
