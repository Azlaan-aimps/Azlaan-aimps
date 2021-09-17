import React, { Component, useState } from "react";
import axios from "axios";
import {
  CCard,
  CCardBody,
  CCol,
  CDataTable,
  CRow,
  CButton,
  CCardHeader,
  CSelect,
  CLabel,
  CLink,
} from "@coreui/react";
import "../../style.css";
import usersData from "../users/Payment";
import TAABEDAR_SERVICE from "src/services/service";

import AccountBalanceWalletSharpIcon from "@material-ui/icons/AccountBalanceWalletSharp";

const fields = [
  { key: "SLNO" },
  { key: "Rider" },
  { key: "Total_Orders" },
  { key: "Order_Amount" },
  { key: "Change_Amount" },
  { key: "Delivery_Charge" },
  { key: "Final_Amount" },
  { key: "Collect Payment" },
];

const table = { placeholder: "Search here...", label: "Search:  " };
const items = { label: "Rows", values: [5, 10, 25, 50, 75, 100] };

const Active_Payment = (props) => {
  const [ResponseData, setResponseData] = useState("");
  const [TotalRiders, setTotalRiders] = useState("");
  const [TotalOrders, setTotalOrders] = useState("");
  const [FOrderAmount, setFOrderAmount] = useState("");
  const [FDelCharge, setFDelCharge] = useState("");
  const [FinalAmount, setFinalAmount] = useState("");

  const GetRiderPayments = React.useCallback(() => {
    axios({
      method: "GET",
      url: TAABEDAR_SERVICE+"/RiderPayments",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((response) => {
        setResponseData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const GetRiderSummary = () => {
    axios({
      method: "GET",
      url: TAABEDAR_SERVICE+"/RiderPaymentsSummary",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((response) => {
        setTotalOrders(response.data[0].TotalOrders);
        setFOrderAmount(response.data[0].FinalOrderAmt);
        setFDelCharge(response.data[0].FinalDelCharge);
        setFinalAmount(response.data[0].FinalAmount);
        setTotalRiders(response.data[0].TotalRiders);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const AcceptPayment = (pkid) => {
    axios({
      method: "GET",
      url:
        TAABEDAR_SERVICE+"/AcceptRiderPayment/" +
        pkid +
        "",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((response) => {
        console.log(response);
        if (response.data == true) {
          alert("Amount sucessfully collected from rider");
          GetRiderPayments();
          GetRiderSummary();
        } else {
          alert("Failed to collect amount");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  React.useEffect(() => {
    GetRiderPayments();
    GetRiderSummary();
  }, []);

  return (
    <div>
      <h1 id="ccmaster">Rider Active Payment</h1>
      <CRow>
        <CCol col="10">
          <CCard>
            <CCardBody>
              <CRow>
                <CCol>
                  <CCard>
                    <CCardHeader></CCardHeader>
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
                          Rider: (item) => <td>{item.RiderName}</td>,
                          Total_Orders: (item) => <td>{item.TotalOrders}</td>,
                          Order_Amount: (item) => <td>{item.OrderAmount}</td>,
                          Change_Amount: (item) => <td>{item.ChangeAmount}</td>,
                          Delivery_Charge: (item) => <td>{item.DelCharge}</td>,
                          Final_Amount: (item) => <td>{item.FinalAmount}</td>,
                          "Collect Payment": (item) => (
                            <td>
                              <CButton
                                size="sm"
                                onClick={() => {
                                  AcceptPayment(item.pkid);
                                }}
                                id="war-btn"
                              >
                                <AccountBalanceWalletSharpIcon />
                                {item.status}
                              </CButton>
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
                        <span>Total Riders : </span> {TotalRiders}
                      </p>
                      <p style={{ fontSize: "12px" }}>
                        <span>Total Orders : </span> {TotalOrders}
                      </p>
                      <p style={{ fontSize: "12px" }}>
                        <span>Final order amount : </span> {FOrderAmount}
                      </p>
                      <p style={{ fontSize: "12px" }}>
                        <span>Total Delivery Caharges : </span> {FDelCharge}
                      </p>
                      <p style={{ fontSize: "12px" }}>
                        <span>Final Amount to be collected : </span>
                        <span
                          style={{
                            color: "green",
                            fontWeight: "700",
                            fontSize: "15px",
                            background: "#f4f4f4",
                            padding: "5px",
                          }}
                        >
                          {FinalAmount}
                        </span>
                      </p>
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

export default Active_Payment;
