import React, { useState } from "react";
import axios from "axios";
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
import TAABEDAR_SERVICE from "src/services/service";  
import "../../style.css";

import EditIcon from "@material-ui/icons/Edit";
import DeleteSharpIcon from "@material-ui/icons/DeleteSharp";

const table = { placeholder: "Search here...", label: "Search:  " };
const items = { label: "Rows:", values: [5, 10, 25, 50, 75, 100] };
const fields = [
  { key: "Action" },
  { key: "City" },
  { key: "Area" },
  { key: "Total Orders Target" },
  { key: "Average Ratings" },
  { key: "Multiple Orders" },
  { key: "Single Orders" },
  { key: "Amount" },
];

// This is Main Component
const Insentive = () => {
  const [InsentivePkid, SetInsentivePkid] = useState("");
  const [InsentiveCity, SetInsentiveCity] = useState(-1);
  const [InsentiveArea, SetInsentiveArea] = useState(-1);

  const [InsentiveTotal_Orders_Target, SetInsentiveTotal_Orders_Target] =
    useState("");

  const [InsentiveSingleOrders, SetInsentiveSingleOrders] = useState("");
  const [InsentiveAverageRatings, SetInsentiveAverageRatings] = useState("");
  const [InsentiveMultiple_Orders, SetInsentiveMultiple_Orders] = useState("");
  const [InsentiveAmount, SetInsentiveAmount] = useState("");

  const [CityData, setCityData] = useState();
  const [AreaData, setAreaData] = useState();

  const [AddButton, setAddButton] = useState(true);
  const [UpdateButton, setUpdateButton] = useState(false);

  const InsentiveCityChange = (event) => {
    SetInsentiveCity(event.target.value);
    GetAreas(event.target.value);
    // console.log(CityData);
  };

  const InsentiveAreaChange = (event) => {
    SetInsentiveArea(event.target.value);
    // console.log(AreaData);
  };

  const InsentiveTotal_Orders_TargetChange = (event) => {
    SetInsentiveTotal_Orders_Target(event.target.value);
    // console.log(InsentiveTotal_Orders_Target);
  };

  const InsentiveSingleOrdersChange = (event) => {
    SetInsentiveSingleOrders(event.target.value);
    // console.log(InsentiveSingleOrders);
  };

  const InsentiveAverageRatingsChange = (event) => {
    SetInsentiveAverageRatings(event.target.value);
    // console.log(event.target.value);
  };
  const InsentiveMultiple_OrdersChange = (event) => {
    SetInsentiveMultiple_Orders(event.target.value);
    // console.log(event.target.value);
  };

  const InsentiveAmountChange = (event) => {
    SetInsentiveAmount(event.target.value);
    // console.log(event.target.value);
  };

  let [responseData, setResponseData] = React.useState("");

  const AddInsentives = () => {
    // alert("AddInsentives");
    console.log("InsentiveCity :" + InsentiveCity);
    console.log("InsentiveArea :" + InsentiveArea);

    if (InsentiveCity == "-1") {
      alert("Please Select City");
    } else if (InsentiveArea == "-1") {
      alert("Pleased Select Area!");
    } else if (
      InsentiveTotal_Orders_Target == "" ||
      InsentiveTotal_Orders_Target == null
    ) {
      alert("Please Enter InsentiveTotal Orders Target!");
    } else if (
      InsentiveAverageRatings == "" ||
      InsentiveAverageRatings == null
    ) {
      alert("Please Enter Insentive Average Ratings!");
    } else if (
      InsentiveMultiple_Orders == "" ||
      InsentiveMultiple_Orders == null
    ) {
      alert("Please Enter Insentive Multiple Orders!");
    } else if (InsentiveSingleOrders == "" || InsentiveSingleOrders == null) {
      alert("Please Enter Insentive Single Orders!");
    } else if (InsentiveAmount == "" || InsentiveAmount == null) {
      alert("Please Enter Insentive Amount!");
    } else {
      const obj = {
        City: InsentiveCity,
        Area: InsentiveArea,
        totalOrder: InsentiveTotal_Orders_Target,
        singleOrder: InsentiveSingleOrders,
        avrageRating: InsentiveAverageRatings,
        multipleOrder: InsentiveMultiple_Orders,
        insentiveAmount: InsentiveAmount,
      };

      // console.log(obj);

      axios
        .post(
          TAABEDAR_SERVICE+"/AddInsentive",
          obj
        )
        .then((response) => {
          // console.log("AddInsentives response :" + response.data);
          if (response.data == "1") {
            alert("Insentives Added!");
            SetInsentiveCity("-1");
            SetInsentiveArea("-1");
            SetInsentiveTotal_Orders_Target("");
            SetInsentiveSingleOrders("");
            SetInsentiveAverageRatings("");
            SetInsentiveMultiple_Orders("");
            SetInsentiveAmount("");
            GetInsentives();
            GetCities();
          } else {
            alert("Insentives Failed To Add!");
            SetInsentiveCity("-1");
            SetInsentiveArea("-1");
            SetInsentiveTotal_Orders_Target("");
            SetInsentiveSingleOrders("");
            SetInsentiveAverageRatings("");
            SetInsentiveMultiple_Orders("");
            SetInsentiveAmount("");
            GetInsentives();
            GetCities();
          }
        });
    }
  };

  const UpdateInsentives = () => {
    // alert("Updating!");

    if (InsentiveCity == "-1") {
      alert("Please Select City");
    } else if (InsentiveArea == "-1") {
      alert("Pleased Select Area!");
    } else if (
      InsentiveTotal_Orders_Target == "" ||
      InsentiveTotal_Orders_Target == null
    ) {
      alert("Please Enter InsentiveTotal Orders Target!");
    } else if (
      InsentiveAverageRatings == "" ||
      InsentiveAverageRatings == null
    ) {
      alert("Please Enter Insentive Average Ratings!");
    } else if (
      InsentiveMultiple_Orders == "" ||
      InsentiveMultiple_Orders == null
    ) {
      alert("Please Enter Insentive Multiple Orders!");
    } else if (InsentiveSingleOrders == "" || InsentiveSingleOrders == null) {
      alert("Please Enter Insentive Single Orders!");
    } else if (InsentiveAmount == "" || InsentiveAmount == null) {
      alert("Please Enter Insentive Amount!");
    } else {
      const obj = {
        City: InsentiveCity,
        Area: InsentiveArea,
        totalOrder: InsentiveTotal_Orders_Target,
        singleOrder: InsentiveSingleOrders,
        avrageRating: InsentiveAverageRatings,
        multipleOrder: InsentiveMultiple_Orders,
        insentiveAmount: InsentiveAmount,
        pkid: InsentivePkid,
      };

      // console.log(obj);

      axios
        .post(
          TAABEDAR_SERVICE+"/UpdateInsentive",
          obj
        )
        .then((response) => {
          // console.log("Update Response :" + response.data);
          if (response.data == "1") {
            alert("Insentives Updated ");

            SetInsentiveCity("-1");
            SetInsentiveArea("-1");
            SetInsentiveTotal_Orders_Target("");
            SetInsentiveSingleOrders("");
            SetInsentiveAverageRatings("");
            SetInsentiveMultiple_Orders("");
            SetInsentiveAmount("");
            GetCities();
            setAreaData("");
            GetInsentives();
            setAddButton(true);
            setUpdateButton(false);
          } else if (response.data == "0") {
            alert("Insentives Not Updated!");
            GetCities();
            GetInsentives();
            setAddButton(true);
            setUpdateButton(false);
          }
        });
    }
  };

  const GetCities = React.useCallback(() => {
    // alert("GetCities");
    axios({
      method: "GET",
      url: TAABEDAR_SERVICE+"/GetCity",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((response) => {
        // setResponseData(response.data);
        const CityOption = response.data.map((item) => (
          <option value={item.pkid}>{item.City}</option>
        ));
        setCityData(CityOption);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const GetAreas = React.useCallback((CityPkid) => {
    // alert(CityPkid);
    // alert("GetAreas");
    axios({
      method: "GET",
      url:
        TAABEDAR_SERVICE+"/GetAreaByCityId/" +
        CityPkid +
        "",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((response) => {
        // console.log("Get Areas response : " + response.data);

        const AreaOption = response.data.map((item) => (
          <option value={item.pkid}>{item.Area}</option>
        ));
        setAreaData(AreaOption);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const GetInsentives = () => {
    axios({
      method: "GET",
      url: TAABEDAR_SERVICE+"/GetInsentive",
      headers: {
        "content-type": "application/json",
      },
      params: {
        language_code: "en",
      },
    })
      .then((response) => {
        // console.log("GetInsentives response :" + response.data);
        setResponseData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  React.useEffect(() => {
    GetCities();
    GetInsentives();
  }, []);

  const EditInsentives = (
    pkid,
    CityId,
    City,
    AreaId,
    Area,
    singleOrder,
    multipleOrder,
    totalOrder,
    insentiveAmount,
    avrageOrder
  ) => {
    // alert("Editing!");

    SetInsentivePkid(pkid);
    SetInsentiveCity(CityId);
    GetAreaForUpdate(CityId, AreaId);
    SetInsentiveTotal_Orders_Target(totalOrder);
    SetInsentiveSingleOrders(singleOrder);
    SetInsentiveAverageRatings(avrageOrder);
    SetInsentiveMultiple_Orders(multipleOrder);
    SetInsentiveAmount(insentiveAmount);

    setAddButton(false);
    setUpdateButton(true);
  };
  console.log(
    `This is InsentiveTotal_Orders_Target: ${InsentiveTotal_Orders_Target}`
  );

  const DeleteInsentives = (pkid) => {
    // alert("Need TO Delete!");
    axios({
      method: "GET",
      url:
        TAABEDAR_SERVICE+"/DeleteInsentive/" +
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
          alert("Insentives Deleted!");
          GetInsentives();
        } else {
          alert("Insentives Not Deleted!");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const GetAreaForUpdate = React.useCallback((cityid, Area_id) => {
    axios({
      method: "GET",
      url:
        TAABEDAR_SERVICE+"/GetAreaByCityId/" +
        cityid +
        "",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((response) => {
        // console.log("GetAreaForUpdate Response : " + response.data);

        const AreaOption = response.data.map((item) => (
          <option value={item.pkid}>{item.Area}</option>
        ));
        setAreaData(AreaOption);
        SetInsentiveArea(Area_id);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const Updatebtn = () => (
    <CButton type="button" onClick={UpdateInsentives} size="md" id="Add-btn">
      Update
    </CButton>
  );

  const Addbtn = () => (
    <CButton type="button" onClick={AddInsentives} size="md" id="Add-btn">
      Add
    </CButton>
  );

  return (
    <>
      <CRow>
        <CCol md="3"></CCol>
        <CCol md="6">
          <h1 id="ccmaster">Insentive Setup</h1>
          <br></br>
        </CCol>
        <CCol md="3"></CCol>
      </CRow>
      <CRow>
        <CCol md="4">
          <CCard>
            <CCardBody>
              <CRow>
                <CCol>
                  <CCard>
                    <CCardHeader>Riders Insentives</CCardHeader>
                    <CCardBody>
                      <CForm action="" method="post">
                        <CFormGroup>
                          <CLabel htmlFor="nf-email">Select City</CLabel>
                          <CSelect
                            custom
                            name="city"
                            id="city"
                            value={InsentiveCity}
                            onChange={InsentiveCityChange}
                          >
                            <option value="-1">Select City</option>
                            {CityData}
                          </CSelect>
                        </CFormGroup>
                        <CFormGroup>
                          <CLabel htmlFor="nf-email">Select Area</CLabel>
                          <CSelect
                            custom
                            name="Area"
                            id="Area"
                            value={InsentiveArea}
                            onChange={InsentiveAreaChange}
                          >
                            <option value="-1">Select Area</option>
                            {AreaData}
                          </CSelect>
                        </CFormGroup>
                        <CFormGroup>
                          <CLabel htmlFor="nf-password">
                            Total Order to be Accepted (Order Target)
                          </CLabel>
                          <CInput
                            min="1"
                            type="number"
                            value={InsentiveTotal_Orders_Target}
                            id="InsentiveTotal_Orders_Target"
                            name="InsentiveTotal_Orders_Target"
                            placeholder=""
                            autoComplete=""
                            onChange={InsentiveTotal_Orders_TargetChange}
                          />

                          <CLabel htmlFor="nf-password">Average Ratings</CLabel>
                          <CInput
                            min="1"
                            type="number"
                            value={InsentiveAverageRatings}
                            id="InsentiveAverageRatings"
                            name="InsentiveAverageRatings"
                            placeholder=""
                            autoComplete=""
                            onChange={InsentiveAverageRatingsChange}
                          />

                          <CLabel htmlFor="nf-password">Multiple orders</CLabel>
                          <CInput
                            min="1"
                            type="number"
                            value={InsentiveMultiple_Orders}
                            id="InsentiveMultiple_Orders"
                            name="InsentiveMultiple_Orders"
                            placeholder=""
                            autoComplete=""
                            onChange={InsentiveMultiple_OrdersChange}
                          />

                          <CLabel htmlFor="nf-password">Single orders</CLabel>
                          <CInput
                            min="1"
                            type="number"
                            id="InsentiveSingleOrders"
                            name="InsentiveSingleOrders"
                            value={InsentiveSingleOrders}
                            placeholder=""
                            autoComplete=""
                            onChange={InsentiveSingleOrdersChange}
                          />

                          <CLabel htmlFor="nf-password">
                            Amount for insentive
                          </CLabel>
                          <CInput
                           min="1"
                            type="number"
                            value={InsentiveAmount}
                            id="InsentiveAmount"
                            name="InsentiveAmount"
                            placeholder=""
                            autoComplete=""
                            onChange={InsentiveAmountChange}
                          />
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
                        items={responseData}
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
                                onClick={() => {
                                  EditInsentives(
                                    item.pkid,
                                    item.CityId,
                                    item.City,
                                    item.AreaId,
                                    item.Area,
                                    item.singleOrder,
                                    item.multipleOrder,
                                    item.totalOrder,
                                    item.insentiveAmount,
                                    item.avrageOrder
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
                                  DeleteInsentives(item.pkid);
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
                          Area: (item) => <td>{item.Area}</td>,
                          "Total Orders Target": (item) => (
                            <td>{item.totalOrder}</td>
                          ),
                          "Average Ratings": (item) => (
                            <td>{item.avrageOrder}</td>
                          ),
                          "Multiple Orders": (item) => (
                            <td>{item.multipleOrder}</td>
                          ),
                          "Single Orders": (item) => (
                            <td>{item.singleOrder}</td>
                          ),
                          Amount: (item) => <td>{item.insentiveAmount}</td>,
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

export default Insentive;
