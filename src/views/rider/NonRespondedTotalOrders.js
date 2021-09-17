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
} from "@coreui/react";

import "../../../src/style.css";
import TAABEDAR_SERVICE from "src/services/service";
import { useHistory } from "react-router-dom";

const table = { placeholder: "Search here...", label: "Search" };
const Rows = { label: "Rows" };

const fields = [
  {
    key: "Sl No",
  },
  { key: "OrderNo" },
  { key: "Order Type" },
  { key: "User" },
  { key: "Order Amount" },
  { key: "Change Amount" },
  { key: "Delivery Charge" },
  { key: "Final Amount" },
  { key: "Total Km" },
  { key: "Delivery Boy" },
  { key: "Status" },
  { key: "Payment Mode" },
];

const NonRespondedTotalOrders = (props) => {
  const [responseData, setResponseData] = useState("");
  let history = useHistory();
  const pkid = props.location.state.data;

  const GetTotalOrders = (pkid) => {
    axios({
      method: "GET",
      url: TAABEDAR_SERVICE + "/GetRidersNonRespondedOrder/" + pkid + "",
      headers: {
        "content-type": "application/json",
      },
      params: {
        language_code: "en",
      },
    })
      .then((response) => {
        console.log("GetTotalOrders response :" + response.data);
        setResponseData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  React.useEffect(() => {
    GetTotalOrders(pkid);
  }, []);

  return (
    <div>
      <CRow>
        <CCol md="3" />
        <CCol md="6">
          <h1 id="ccmaster">Total Orders</h1>
        </CCol>
        <CCol md="3" />
      </CRow>
      <CRow>
        <CCol md="12">
          <CCard>
            <CCardBody>
              <CRow>
                <CCol md="1">
                  <CButton
                    color="danger"
                    size="sm"
                    onClick={() => history.goBack()}
                  >
                    Back
                  </CButton>
                </CCol>
                <br />
                <br />
              </CRow>
              <CRow>
                <CCol>
                  <CCard>
                    <CCardHeader>Total Orders</CCardHeader>
                    <CCardBody>
                      <CDataTable
                        items={responseData}
                        fields={fields}
                        striped
                        itemsPerPage={5}
                        pagination
                        sorter
                        tableFilter={table}
                        itemsPerPageSelect={Rows}
                        scopedSlots={{
                          "Sl No": (item) => <td>{item.id}</td>,
                          OrderNo: (item) => (
                            <td>
                              <CButton
                                id="order-list"
                                onClick={() => {
                                  history.push("/NonRespondedOrderDetails", {
                                    data: item,
                                  });
                                }}
                              >
                                {item.orderNumber}
                              </CButton>
                            </td>
                          ),
                          "Order Type": (item) => <td>{item.orderType}</td>,
                          User: (item) => <td>{item.userName}</td>,
                          "Order Amount": (item) => <td>{item.orderAmount}</td>,
                          "Change Amount": (item) => (
                            <td>{item.changeAmount}</td>
                          ),
                          "Delivery Charge": (item) => (
                            <td>{item.deliveryAmount}</td>
                          ),
                          "Final Amount": (item) => <td>{item.finalTotal}</td>,
                          "Total Km": (item) => <td>{item.Distance}</td>,
                          "Delivery Boy": (item) => <td>{item.riderName}</td>,
                          Status: (item) => <td>Delivered</td>,
                          "Payment Mode": (item) => <td>{item.paymentType}</td>,
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

export default NonRespondedTotalOrders;
