import React, { useState } from "react";
import axios from "axios";
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormGroup,
  CInput,
  CSelect,
  CRow,
  CDataTable,
  CLabel,
} from "@coreui/react";
import EditIcon from "@material-ui/icons/Edit";
import DeleteSharpIcon from "@material-ui/icons/DeleteSharp";

import "../../style.css";
const table = { placeholder: "Search here...", label: "Search:  " };
const items = { label: "Rows:", values: [5, 10, 25, 50, 75, 100] };

const fields = [
  { key: "Action" },
  { key: "Merchant" },
  { key: "Comission" },
  { key: "Riders Charge" },
  { key: "Promotion" },
  { key: "Delivery charge" },
  { key: "Marketing Charge" },
  { key: "Push Notification" },
];

const fields1 = [{ key: "Action" }, { key: "City" }, { key: "Service Charge" }];

const SetPriceHeader = () => {
  const [myMaster, setMyMaster] = useState();
  const [partnerBtn, setPartnerBtn] = useState(true);
  const [nonPartnerBtn, setNonPartnerBtn] = useState(false);

  const Stmt = () => {
    if (myMaster === "SePriceForMerchant") {
      return <SePriceForMerchant />;
    } else if (myMaster === "SePriceForNonMerchant") {
      return <SePriceForNonMerchant />;
    } else {
      return <SePriceForMerchant />;
    }
  };

  const activeColors = () => {
    return {
      backgroundColor: "#ffd701",
      borderColor: "#ffd701",
      color: "black",
      fontSize: 14,
      fontWeight: 700,
    };
  };

  const defaultColors = () => {
    return {
      backgroundColor: "#3a2216",
      borderColor: "#3a2216",
      color: "white",
      fontSize: 14,
      fontWeight: 500,
    };
  };

  return (
    <div id="Locroot">
      <CCard>
        <CCardHeader id="ccheader">Set Price Master</CCardHeader>
        <CCardBody id="Loccard">
          <CRow className="align-items-center">
            <CCol md="4" className="mb-3 mb-xl-0">
              <CButton
                block
                style={partnerBtn === true ? activeColors() : defaultColors()}
                onClick={() => {
                  setMyMaster("SePriceForMerchant");
                  setNonPartnerBtn(false);
                  setPartnerBtn(true);
                }}
              >
                Partner Merchants
              </CButton>
            </CCol>

            <CCol md="4" className="mb-3 mb-xl-0">
              <CButton
                block
                style={
                  nonPartnerBtn === true ? activeColors() : defaultColors()
                }
                onClick={() => {
                  setMyMaster("SePriceForNonMerchant");
                  setNonPartnerBtn(true);
                  setPartnerBtn(false);
                }}
              >
                Non - Partner Merchants
              </CButton>
            </CCol>
          </CRow>
        </CCardBody>
      </CCard>
      <div>{Stmt()}</div>
    </div>
  );
};

const SePriceForMerchant = () => {
  const [MerchantPkid, setMerchantPkid] = useState("");
  const [Merchant, setMerchant] = useState(0);
  const [MerchanttypeData, setMerchanttypeData] = useState("");
  const [Comission, setComission] = useState("");
  const [Riders_charge, setRiders_charge] = useState("");
  const [Promotion, setPromotion] = useState("");
  const [Deliverycharge, setDeliverycharge] = useState("");
  const [MarketingCharge, setMarketingCharge] = useState("");
  const [PushNotification, setPushNotification] = useState("");
  const [AddButton, setAddButton] = useState(true);
  const [UpdateButton, setUpdateButton] = useState(false);

  const MerchanttypeChange = (event) => {
    setMerchant(event.target.value);
    // console.log(event.target.value);
  };

  const ComissionChange = (event) => {
    setComission(event.target.value);
  };

  const Riders_chargeChange = (event) => {
    setRiders_charge(event.target.value);
  };

  const PromotionChange = (event) => {
    setPromotion(event.target.value);
  };

  const DeliverychargeChange = (event) => {
    setDeliverycharge(event.target.value);
  };

  const MarketingChargeChange = (event) => {
    setMarketingCharge(event.target.value);
  };

  const PushNotificationChange = (event) => {
    setPushNotification(event.target.value);
  };

  const GetPartneredMerchants = React.useCallback(() => {
    // console.log("GetPatneredMerchants");
    axios({
      method: "GET",
      url: "http://192.168.1.3:8086/Tabedar_Dashboard/resourses/projectservice/GetPartnerMerchantPrice/",
      headers: {
        "content-type": "application/json",
      },
      params: {
        language_code: "en",
      },
    })
      .then((response) => {
        setResponseData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const GetShopMerchants = React.useCallback(() => {
    // console.log("GetShopMerchants");
    axios({
      method: "GET",
      url: "http://192.168.1.3:8086/Tabedar_Dashboard/resourses/projectservice/GetVendor/",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((response) => {
        const ShopOption = response.data.map((item) => (
          <option value={item.pkid}>{item.Name}</option>
        ));
        // console.log(ShopOption);
        setMerchanttypeData(ShopOption);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  React.useEffect(() => {
    GetPartneredMerchants();
    GetShopMerchants();
  }, []);

  // console.log("Set Variables Status!");
  // console.log("MerchantPkid :" + MerchantPkid);
  // console.log("Merchant :" + Merchant);
  // console.log("Comission :" + Comission);
  // console.log("RiderCharge :" + Riders_charge);
  // console.log("Promotion :" + Promotion);
  // console.log("deliveryCharge :" + Deliverycharge);
  // console.log("marketingCharge :" + MarketingCharge);
  // console.log("pushNotification :" + PushNotification);

  const AddSetPrices = () => {
    // console.log("Set Variables Status!");
    // console.log("MerchantPkid :" + MerchantPkid);
    // console.log("Merchant :" + Merchant);
    // console.log("Comission :" + Comission);
    // console.log("RiderCharge :" + Riders_charge);
    // console.log("Promotion :" + Promotion);
    // console.log("deliveryCharge :" + Deliverycharge);
    // console.log("marketingCharge :" + MarketingCharge);
    // console.log("pushNotification :" + PushNotification);
    if (Merchant == "0") {
      alert("Select Merchant!");
    } else if (Comission == "" || Comission == null) {
      alert("Empty Comission!");
    } else if (Riders_charge == "" || Riders_charge == null) {
      alert("Empty Riders Charge!");
    } else if (Promotion == "" || Promotion == null) {
      alert("Empty Promotion!");
    } else if (Deliverycharge == "" || Deliverycharge == null) {
      alert("Empty Delivery Charge!");
    } else if (MarketingCharge == "" || MarketingCharge == null) {
      alert("Empty Marketing Charge!");
    } else if (PushNotification == "" || PushNotification == null) {
      alert("Empty Push Notification!");
    } else {
      const obj = {
        Merchant: Merchant,
        Comission: Comission,
        ridersCharge: Riders_charge,
        Promotion: Promotion,
        Deliverycharge: Deliverycharge,
        MarketingCharge: MarketingCharge,
        PushNotification: PushNotification,
      };
      // console.log(obj);
      axios
        .post(
          "http://192.168.1.3:8086/Tabedar_Dashboard/resourses/projectservice/AddPartnerMerchantPrice",
          obj
        )
        .then((response) => {
          // console.log("AddPartnerMerchantPrice response :" + response.data);
          if (response.data == "1") {
            alert("Prices Updated!");
            GetPartneredMerchants();
            setComission("");
            setMerchant("");
            setMarketingCharge("");
            setRiders_charge("");
            setPromotion("");
            setDeliverycharge("");
            setMarketingCharge("");
            setPushNotification("");
            setAddButton(true);
            setUpdateButton(false);
          } else if (response.data == "2") {
            alert("Prices Not Updated!");
            setAddButton(true);
            setUpdateButton(false);
          }
        });
    }
  };

  const UpdateSetPrices = () => {
    // console.log("Set Variables Status!");
    // console.log("MerchantPkid :" + MerchantPkid);
    // console.log("Merchant :" + Merchant);
    // console.log("Comission :" + Comission);
    // console.log("RiderCharge :" + Riders_charge);
    // console.log("Promotion :" + Promotion);
    // console.log("deliveryCharge :" + Deliverycharge);
    // console.log("marketingCharge :" + MarketingCharge);
    // console.log("pushNotification :" + PushNotification);
    if (Merchant == "0") {
      alert("Select Merchant!");
    } else if (Comission == "" || Comission == null) {
      alert("Empty Comission!");
    } else if (Riders_charge == "" || Riders_charge == null) {
      alert("Empty Riders Charge!");
    } else if (Promotion == "" || Promotion == null) {
      alert("Empty Promotion!");
    } else if (Deliverycharge == "" || Deliverycharge == null) {
      alert("Empty Delivery Charge!");
    } else if (MarketingCharge == "" || MarketingCharge == null) {
      alert("Empty Marketing Charge!");
    } else if (PushNotification == "" || PushNotification == null) {
      alert("Empty Push Notification!");
    } else {
      const obj = {
        pkid: MerchantPkid,
        Merchant: Merchant,
        Comission: Comission,
        ridersCharge: Riders_charge,
        Promotion: Promotion,
        Deliverycharge: Deliverycharge,
        MarketingCharge: MarketingCharge,
        PushNotification: PushNotification,
      };

      // console.log(obj);

      axios
        .post(
          "http://192.168.1.3:8086/Tabedar_Dashboard/resourses/projectservice/UpdatePartnerMerchantPrice",
          obj
        )
        .then((response) => {
          // console.log("Update Response :" + response.data);
          if (response.data == "1") {
            alert("Prices Updates!");
            setComission("");
            setMarketingCharge("");
            setRiders_charge("");
            setPromotion("");
            setDeliverycharge("");
            setMarketingCharge("");
            setPushNotification("");
            setMerchant("");
            GetPartneredMerchants();
            setAddButton(true);
            setUpdateButton(false);
          } else if (response.data == "0") {
            alert("Failed To Add Prices!");
            GetPartneredMerchants();
            setAddButton(true);
            setUpdateButton(false);
          } else {
          }
        });
    }
  };

  const EditSetPrices = (
    pkid,
    Merchant,
    Comission2,
    ridersCharge,
    Promotion2,
    deliveryCharge,
    marketingCharge,
    pushNotification,
    shopid
  ) => {
    setMerchantPkid(pkid);
    setMerchant(shopid);
    setComission(Comission2);
    setRiders_charge(ridersCharge);
    setPromotion(Promotion2);
    setDeliverycharge(deliveryCharge);
    setMarketingCharge(marketingCharge);
    setPushNotification(pushNotification);
    setAddButton(false);
    setUpdateButton(true);
  };

  const DeleteSetPrices = (pkid) => {
    // alert("Need TO Delete!");
    axios({
      method: "GET",
      url:
        "http://192.168.1.3:8086/Tabedar_Dashboard/resourses/projectservice/DeletePartnerMerchantPrice/" +
        pkid +
        "",
      headers: {
        "content-type": "application/json",
      },
      params: {
        language_code: "en",
      },
    })
      .then((response) => {
        // console.log("Delete Response:" + response.data);
        if (response.data == true) {
          alert("Selected Partnered Merchant Deleted");
          GetPartneredMerchants();
        } else {
          alert("Failed To Delete Partnered Merchant");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const [responseData, setResponseData] = React.useState("");

  const Updatebtn = () => (
    <CButton type="button" onClick={UpdateSetPrices} size="md" id="Add-btn">
      Update
    </CButton>
  );

  const Addbtn = () => (
    <CButton type="button" onClick={AddSetPrices} size="md" id="Add-btn">
      Add
    </CButton>
  );

  return (
    <div>
      <h1 id="ccmaster">Set Prices For Merchants</h1>
      <CRow>
        <CCol xs="12" sm="12" md="4" lg="4" xl="4" className="mb-3 mb-xl-0">
          <div id="country-master">
            <CCard>
              <CCardBody>
                <CRow>
                  <CCol>
                    <CCard>
                      <CCardHeader>Merchants</CCardHeader>
                      <CCardBody>
                        <CForm
                          action=""
                          method="post"
                          encType="multipart/form-data"
                          className="form-horizontal"
                        >
                          <CFormGroup row>
                            <CCol xs="12" md="12">
                              <CLabel>Select Merchant</CLabel>
                              <CSelect
                                custom
                                name="Country"
                                id="Country"
                                value={Merchant}
                                onChange={MerchanttypeChange}
                              >
                                <option value="0">Select Merchant</option>
                                {MerchanttypeData}
                              </CSelect>
                            </CCol>
                          </CFormGroup>
                          <CFormGroup row>
                            <CCol xs="12" md="12">
                              <CLabel>Comission Charge</CLabel>
                              <CInput
                                value={Comission}
                                type="number"
                                id="text-input"
                                name="text-input"
                                placeholder="Comission"
                                onChange={ComissionChange}
                              />
                            </CCol>
                          </CFormGroup>
                          <CFormGroup row>
                            <CCol xs="12" md="12">
                              <CLabel>Rider's Service Charge</CLabel>
                              <CInput
                                value={Riders_charge}
                                type="number"
                                id="text-input"
                                name="text-input"
                                placeholder="Rider's Service Charge"
                                onChange={Riders_chargeChange}
                              />
                            </CCol>
                          </CFormGroup>
                          <CFormGroup row>
                            <CCol xs="12" md="12">
                              <CLabel>Promotion Charge</CLabel>
                              <CInput
                                value={Promotion}
                                type="number"
                                id="text-input"
                                name="text-input"
                                placeholder="Promotion Charge"
                                onChange={PromotionChange}
                              />
                            </CCol>
                          </CFormGroup>
                          <CFormGroup row>
                            <CCol xs="12" md="12">
                              <CLabel>Delivery Charge</CLabel>
                              <CInput
                                value={Deliverycharge}
                                type="number"
                                id="text-input"
                                name="text-input"
                                placeholder="Delivery Charge"
                                onChange={DeliverychargeChange}
                              />
                            </CCol>
                          </CFormGroup>
                          <CFormGroup row>
                            <CCol xs="12" md="12">
                              <CLabel>Marketing Charge</CLabel>
                              <CInput
                                value={MarketingCharge}
                                type="number"
                                id="text-input"
                                name="text-input"
                                placeholder="Marketing Charge"
                                onChange={MarketingChargeChange}
                              />
                            </CCol>
                          </CFormGroup>
                          <CFormGroup row>
                            <CCol xs="12" md="12">
                              <CLabel>Push notification Charge</CLabel>
                              <CInput
                                value={PushNotification}
                                type="number"
                                id="text-input"
                                name="text-input"
                                placeholder="Push notification Charge"
                                onChange={PushNotificationChange}
                              />
                            </CCol>
                          </CFormGroup>
                          {UpdateButton && <Updatebtn />}
                          {AddButton && <Addbtn />}
                        </CForm>
                      </CCardBody>
                    </CCard>
                  </CCol>
                </CRow>
              </CCardBody>
            </CCard>
          </div>
        </CCol>

        <CCol xs="12" sm="12" md="8" lg="8" xl="8" className="mb-3 mb-xl-0">
          <div id="country-table">
            <CCard id="Loccard">
              <CCardBody>
                <CRow>
                  <CCol>
                    <CCard>
                      <CCardHeader>Partnered Merchants</CCardHeader>
                      <CCardBody>
                        <CDataTable
                          items={responseData}
                          fields={fields}
                          hover
                          striped
                          bordered
                          tableFilter={table}
                          itemsPerPageSelect={items}
                          sorter
                          size="sm"
                          itemsPerPage={4}
                          pagination
                          scopedSlots={{
                            Action: (item) => (
                              <td>
                                <CButton
                                  onClick={() => {
                                    EditSetPrices(
                                      item.pkid,
                                      item.Merchant,
                                      item.Comission,
                                      item.ridersCharge,
                                      item.Promotion,
                                      item.deliveryCharge,
                                      item.marketingCharge,
                                      item.pushNotification,
                                      item.shopid
                                    );
                                  }}
                                  size="sm"
                                  id="war-btn"
                                >
                                  <EditIcon />
                                  {item.status}
                                </CButton>
                                <CButton
                                  onClick={() => {
                                    DeleteSetPrices(item.pkid);
                                  }}
                                  size="sm"
                                  id="war-btn1"
                                >
                                  <DeleteSharpIcon />
                                  {item.status}
                                </CButton>
                              </td>
                            ),
                            "Delivery charge": (item) => (
                              <td>{item.deliveryCharge}</td>
                            ),
                            "Marketing Charge": (item) => (
                              <td>{item.marketingCharge}</td>
                            ),
                            "Push Notification": (item) => (
                              <td>{item.pushNotification}</td>
                            ),
                            "Riders Charge": (item) => (
                              <td>{item.ridersCharge}</td>
                            ),
                          }}
                        />
                      </CCardBody>
                    </CCard>
                  </CCol>
                </CRow>
              </CCardBody>
            </CCard>
          </div>
        </CCol>
      </CRow>
    </div>
  );
};

const SePriceForNonMerchant = () => {
  const [NonMerchantcityPkid, SetNonMerchantcityPkid] = useState("");
  const [NonMerchantcity, SetNonMerchantcity] = useState(0);
  const [ServiceCharge, SetServiceCharge] = useState("");
  const [NonMerchantCityData, SetNonMerchantCityData] = useState();

  const [AddButton, setAddButton] = useState(true);
  const [UpdateButton, setUpdateButton] = useState(false);

  const NonMerchantcityChange = (event) => {
    SetNonMerchantcity(event.target.value);
  };
  const ServiceChargeChange = (event) => {
    SetServiceCharge(event.target.value);
  };

  const GetCities = React.useCallback(() => {
    // alert("GetCities");
    axios({
      method: "GET",
      url: "http://192.168.1.3:8086/Tabedar_Dashboard/resourses/projectservice/GetCity",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((response) => {
        const CityOption = response.data.map((item) => (
          <option value={item.pkid}>{item.City}</option>
        ));
        SetNonMerchantCityData(CityOption);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  React.useEffect(() => {
    GetCities();
    GetNonPartneredMerchants();
  }, []);

  const [responseData, setResponseData] = React.useState("");

  const AddSetPricesForNonPartneredMerchants = () => {
    // console.log("AddSetPricesForNonPartneredMerchants");

    if (NonMerchantcity == "0") {
      alert("Select City!");
    } else if (ServiceCharge == "" || ServiceCharge == null) {
      alert("Enter Service Charge!");
    } else {
      const obj = {
        cityId: NonMerchantcity,
        serviceCharge: ServiceCharge,
      };

      // console.log(obj);

      axios
        .post(
          "http://192.168.1.3:8086/Tabedar_Dashboard/resourses/projectservice/AddNonPartnerMerchantPrice/",
          obj
        )
        .then((response) => {
          // console.log("SetPricesForNonPartneredMerchants : " + response.data);
          if (response.data == "1") {
            alert("Prices Added!");
            GetNonPartneredMerchants();
            SetNonMerchantcityPkid("");
            SetNonMerchantcity("");
            SetServiceCharge("");
            setAddButton(true);
          } else if (response.data == "2") {
            alert("Prices Not Added!");
            GetNonPartneredMerchants();
            setAddButton(true);
          }
        });
    }
  };

  const UpdateNonMerchantSetPrices = () => {
    if (NonMerchantcity == "0") {
      alert("Select City!");
    } else if (ServiceCharge == "" || ServiceCharge == null) {
      alert("Enter Service Charge!");
    } else {
      const obj = {
        pkid: NonMerchantcityPkid,
        cityId: NonMerchantcity,
        serviceCharge: ServiceCharge,
      };

      // console.log(obj);

      axios
        .post(
          "http://192.168.1.3:8086/Tabedar_Dashboard/resourses/projectservice/UpdateNonPartnerMerchantPrice",
          obj
        )
        .then((response) => {
          // console.log("Update Response :" + response);
          if (response.data == "1") {
            alert("Prices Added !");
            SetNonMerchantcityPkid("");
            SetNonMerchantcity("");
            SetServiceCharge("");
            GetNonPartneredMerchants();
            setAddButton(true);
            setUpdateButton(false);
          } else if (response.data == "2") {
            alert("Prices Not Added!");
            GetNonPartneredMerchants();
            setAddButton(true);
            setUpdateButton(false);
          }
        });
    }
  };

  const EditNonMerchantSetPrices = (pkid, cityId, serviceCharge) => {
    // alert("Editing!");

    // console.log("pkid :" + pkid);
    // console.log("cityId :" + cityId);
    // console.log("serviceCharge :" + serviceCharge);

    SetNonMerchantcityPkid(pkid);
    SetNonMerchantcity(cityId);
    SetServiceCharge(serviceCharge);

    setAddButton(false);
    setUpdateButton(true);
  };

  const DeleteNonMerchantSetPrices = (id) => {
    // console.log("delete pkid :" + id);
    axios({
      method: "GET",
      url:
        "http://192.168.1.3:8086/Tabedar_Dashboard/resourses/projectservice/DeleteNonPartnerMerchantPrice/" +
        id +
        "",
      headers: {
        "content-type": "application/json",
      },
      params: {
        language_code: "en",
      },
    })
      .then((response) => {
        // console.log("Delete Response:" + response.data);
        if (response.data == true) {
          alert("Selected Non-Partnered Merchant Deleted");
          GetNonPartneredMerchants();
        } else {
          alert("Failed To Delete non-Partnered Merchant");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const GetNonPartneredMerchants = React.useCallback(() => {
    axios({
      method: "GET",
      url: "http://192.168.1.3:8086/Tabedar_Dashboard/resourses/projectservice/GetNonPartnerMerchantPrice",
      headers: {
        "content-type": "application/json",
      },
      params: {
        language_code: "en",
      },
    })
      .then((response) => {
        setResponseData(response.data);
        // console.log("GetNonPartneredMerchants response :" + response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const Updatebtn = () => (
    <CButton
      type="button"
      onClick={UpdateNonMerchantSetPrices}
      size="md"
      id="Add-btn"
    >
      Update
    </CButton>
  );

  const Addbtn = () => (
    <CButton
      type="button"
      onClick={AddSetPricesForNonPartneredMerchants}
      size="md"
      id="Add-btn"
    >
      Add
    </CButton>
  );

  return (
    <div id="state">
      <h1 id="ccmaster">Set Prices For Non-Partner Merchants</h1>
      <CRow>
        <CCol sm="12" md="12" lg="4" xl="4" className="mb-3 mb-xl-0">
          <CCard>
            <CCardBody>
              <CRow>
                <CCol>
                  <CCard>
                    <CCardHeader>Merchants</CCardHeader>
                    <CCardBody>
                      <CForm
                        action=""
                        method="post"
                        encType="multipart/form-data"
                        className="form-horizontal"
                      >
                        <CFormGroup row>
                          <CCol xs="12" md="12">
                            <CLabel>Select City</CLabel>
                            <CSelect
                              custom
                              name="Country"
                              id="Country"
                              value={NonMerchantcity}
                              onChange={NonMerchantcityChange}
                            >
                              <option value="0">Select City</option>
                              {NonMerchantCityData}
                            </CSelect>
                          </CCol>
                        </CFormGroup>

                        <CFormGroup row>
                          <CCol xs="12" md="12" />
                        </CFormGroup>

                        <CFormGroup row>
                          <CCol xs="12" md="12">
                            <CLabel>
                              Service Charge (% from Rider Bid Amount, Added to
                              Delivery Charge)
                            </CLabel>
                            <CInput
                              value={ServiceCharge}
                              id="text-input"
                              name="text-input"
                              placeholder="Service charge"
                              onChange={ServiceChargeChange}
                            />
                          </CCol>
                        </CFormGroup>
                      </CForm>
                      {UpdateButton && <Updatebtn />}
                      {AddButton && <Addbtn />}
                    </CCardBody>
                  </CCard>
                </CCol>
              </CRow>
            </CCardBody>
          </CCard>
        </CCol>

        <CCol col="10">
          <CCard>
            <CCardBody>
              <CRow>
                <CCol>
                  <CCard>
                    <CCardHeader>Added Non-Partnered Merchants</CCardHeader>
                    <CCardBody>
                      <CDataTable
                        items={responseData}
                        fields={fields1}
                        hover
                        striped
                        bordered
                        sorter
                        tableFilter={table}
                        itemsPerPageSelect={items}
                        size="sm"
                        itemsPerPage={4}
                        pagination
                        scopedSlots={{
                          Action: (item) => (
                            <td>
                              <CButton
                                onClick={() => {
                                  EditNonMerchantSetPrices(
                                    item.pkid,
                                    item.cityId,
                                    item.serviceCharge,
                                    item.City
                                  );
                                }}
                                size="sm"
                                id="war-btn"
                              >
                                <EditIcon />
                                {item.status}
                              </CButton>
                              <CButton
                                onClick={() => {
                                  DeleteNonMerchantSetPrices(item.pkid);
                                }}
                                size="sm"
                                id="war-btn1"
                              >
                                <DeleteSharpIcon />
                                {item.status}
                              </CButton>
                            </td>
                          ),
                          City: (item) => <td>{item.City}</td>,
                          "Service Charge": (item) => (
                            <td>{item.serviceCharge}</td>
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

export default SetPriceHeader;
