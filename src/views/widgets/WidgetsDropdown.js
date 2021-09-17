import React, { useState } from "react";
import axios from "axios";
import {
  CWidgetDropdown,
  CRow,
  CCol,
  CButton,
  CDropdown,
  CDropdownMenu,
  CDropdownItem,
  CDropdownToggle,
} from "@coreui/react";
import TAABEDAR_SERVICE from "src/services/service";
import CIcon from "@coreui/icons-react";
import ChartLineSimple from "../charts/ChartLineSimple";
import ChartBarSimple from "../charts/ChartBarSimple";
import { Link } from "react-router-dom";

const WidgetsDropdown = () => {
  const [RiderEarning, SetRiderEarning] = useState("");
  const [MerchantPayment, SetMerchantPayment] = useState("");
  const [CompanyBalance, setCompanyBalance] = useState("");

  const SalesReportOrderSummary = React.useCallback(() => {
    axios({
      method: "GET",
      url: TAABEDAR_SERVICE + "/SalesReportOrderSummary",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((response) => {
        console.log("response:" + response.data);
        // setresponseData(response.data);

        SetRiderEarning("Rs. " + response.data[0].RiderEarning);
        SetMerchantPayment("Rs. " + response.data[0].MerchantPayment);
        const totalbal =
          parseInt(response.data[0].RiderEarning) +
          parseInt(response.data[0].MerchantPayment);
        setCompanyBalance("Rs. " + totalbal);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  React.useEffect(() => {
    SalesReportOrderSummary();
  }, []);
  // render
  return (
    <CRow>
      <CCol sm="6" lg="3">
        <CWidgetDropdown
          color="gradient-primary"
          header={CompanyBalance}
          text="Balance With Company"
          footerSlot={
            <CButton size="sm" id="dashb-btn1">
              <Link id="dashb-link" to="/BalanceWithCompany">
                View Details
              </Link>
            </CButton>
          }
        ></CWidgetDropdown>
      </CCol>

      <CCol sm="6" lg="3">
        <CWidgetDropdown
          color="gradient-info"
          header={RiderEarning}
          text="Amount To be Given to Riders"
          footerSlot={
            <CButton size="sm" id="dashb-btn">
              <Link id="dashb-link" to="/AmountToRiders">
                View Details
              </Link>
            </CButton>
          }
        ></CWidgetDropdown>
      </CCol>

      <CCol sm="6" lg="3">
        <CWidgetDropdown
          color="gradient-warning"
          header={MerchantPayment}
          text="Amount To be Given to Vendors"
          footerSlot={
            <CButton size="sm" id="dashb-btn">
              <Link id="dashb-link" to="/AmountToVendors">
                View Details
              </Link>
            </CButton>
          }
        ></CWidgetDropdown>
      </CCol>
    </CRow>
  );
};

export default WidgetsDropdown;
