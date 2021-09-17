import React, { Component, useState } from "react";
import axios from "axios";
import {
  CCard,
  CCardBody,
  CCol,
  CDataTable,
  CRow,
  CCardHeader,
  CInput,
  CLabel,
  CButton,
} from "@coreui/react";
import "../../style.css";
import usersData from "../users/Payment";
import TAABEDAR_SERVICE from "src/services/service";

const fields = [
  { key: "SLNO" },
  { key: "Order_No" },
  { key: "Date" },
  { key: "Payment_By" },
  { key: "User" },
  { key: "Amount_Recieved" },
  { key: "Payment_Mode" },
  { key: "Ref_No" },
];

const table = { placeholder: "Search here...", label: "Search:  " };
const items = { label: "Rows", values: [5, 10, 25, 50, 75, 100] };

const Recieved_Amount_List = () => {
  const [ResponseData, setResponseData] = useState("");

  const [PaymentByRider, setPaymentByRider] = useState("");
  const [PaymentByUser, setPaymentByUser] = useState("");
  const [TotalOrder, setTotalOrder] = useState("");
  const [FinalAmount, setFinalAmount] = useState("");

  const [fromDate, setfromDate] = useState("");
  const [toDate, settoDate] = useState("");

  const Recieved_Amounts = React.useCallback(() => {
    axios({
      method: "GET",
      url: TAABEDAR_SERVICE+"/Recieved_Amounts",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((response) => {
        setResponseData(response.data);
        setTotalOrder(response.data.length);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const Recieved_Amounts_Summary = React.useCallback(() => {
    axios({
      method: "GET",
      url: TAABEDAR_SERVICE+"/Recieved_Amounts_Summary",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((response) => {
        setPaymentByRider(response.data[0].PaymentByRider);
        setPaymentByUser(response.data[0].PaymentByUser);
        setFinalAmount(response.data[0].FinalAmount);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const FromChange = (event) => {
    setfromDate(event.target.value);
  };
  const ToChange = (event) => {
    settoDate(event.target.value);
  };

  const FilterDates = () => {
    axios({
      method: "GET",
      url:
        TAABEDAR_SERVICE+"/Recieved_Amounts_Filter/" +
        fromDate +
        "/" +
        toDate +
        "",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((response) => {
        setResponseData(response.data);
        setTotalOrder(response.data.length);
      })
      .catch((error) => {
        console.log(error);
      });
    axios({
      method: "GET",
      url:
        TAABEDAR_SERVICE+"/Recieved_Amounts_Summary_Filter/" +
        fromDate +
        "/" +
        toDate +
        "",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((response) => {
        setPaymentByRider(response.data[0].PaymentByRider);
        setPaymentByUser(response.data[0].PaymentByUser);
        setFinalAmount(response.data[0].FinalAmount);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const FilterReset = () => {
    setfromDate("");
    settoDate("");
    Recieved_Amounts();
    Recieved_Amounts_Summary();
  };

  React.useEffect(() => {
    Recieved_Amounts();
    Recieved_Amounts_Summary();
  }, []);

  return (
    <div>
      <h1 id="ccmaster">Recieved Payment</h1>
      <CRow>
        <CCol col="10">
          <CCard>
            <CCardBody>
              <CRow>
                <CCol>
                  <CCard>
                    <CCardHeader>
                      <CRow>
                        <CCol md="2">
                          <CLabel htmlFor="nf-email">From Date</CLabel>
                          <CInput
                            type="date"
                            onChange={FromChange}
                            value={fromDate}
                          ></CInput>
                        </CCol>
                        <CCol md="2">
                          <CLabel htmlFor="nf-email">To Date</CLabel>
                          <CInput
                            type="date"
                            onChange={ToChange}
                            value={toDate}
                          ></CInput>
                        </CCol>
                        <CCol md="2">
                          <CButton
                            size="sm"
                            color="info"
                            style={{ "margin-top": "28px", width: "100%" }}
                            onClick={FilterDates}
                          >
                            Filter
                          </CButton>
                        </CCol>
                        <CCol md="2">
                          <CButton
                            size="sm"
                            color="danger"
                            style={{ "margin-top": "28px", width: "100%" }}
                            onClick={FilterReset}
                          >
                            Reset
                          </CButton>
                        </CCol>
                      </CRow>
                    </CCardHeader>
                    <CCardBody>
                      <CDataTable
                        items={ResponseData}
                        fields={fields}
                        hover
                        striped
                        bordered
                        sorter
                        tableFilter={table}
                        itemsPerPage={4}
                        pagination
                        size="sm"
                        itemsPerPageSelect={items}
                        scopedSlots={{
                          SLNO: (item) => <td>{item.id}</td>,
                          Order_No: (item) => <td>{item.OrderNumber}</td>,
                          Date: (item) => <td>{item.Pdate}</td>,
                          Payment_By: (item) => <td>{item.Payment_By}</td>,
                          User: (item) => <td>{item.Pname}</td>,
                          Amount_Recieved: (item) => (
                            <td>{item.Amount_Recieved}</td>
                          ),
                          Payment_Mode: (item) => <td>{item.Payment_Mode}</td>,
                          Ref_No: (item) => <td>{item.Ref_No}</td>,
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
      <CRow>
        <CCol md="12">
          <CCard>
            <CCardBody>
              <CRow>
                <CCol>
                  <CCard>
                    <CCardHeader>Summary</CCardHeader>
                    <CCardBody>
                      <p style={{ fontSize: "12px" }}>
                        <span>Total Orders: </span> {TotalOrder}
                      </p>
                      <p style={{ fontSize: "12px" }}>
                        <span>Payment By Riders: </span> {PaymentByRider}
                      </p>
                      <p style={{ fontSize: "12px" }}>
                        <span>Payments By Users: </span> {PaymentByUser}
                      </p>
                      <p style={{ fontSize: "12px" }}>
                        <span>Final Amount Recieved: </span>
                        <span
                          style={{
                            color: "green",
                            fontWeight: "700",
                            fontSize: "15px",
                            background: "#f4f4f4",
                            padding: "5px",
                          }}
                        >
                          {" "}
                          {FinalAmount}
                        </span>{" "}
                      </p>
                      {/* <p  style={{fontSize:'12px'}}><span>Mode Of Payment  : </span>COD</p> */}
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

export default Recieved_Amount_List;
