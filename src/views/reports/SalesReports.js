import React, {useState} from 'react';
import axios from 'axios';
import {
  CCard,
  CCardBody,
  CCol,
  CDataTable,
  CRow,
  CSelect,
  CInput,
  CCardHeader,
  CLabel,
  CLink,
  CButton,
} from '@coreui/react';
import '../../style.css';
import TAABEDAR_SERVICE from 'src/services/service';
import {useHistory} from 'react-router';

const fields = [
  {key: 'SL No'},
  {key: 'Order Date'},
  {key: 'Sub-Orders'},
  {key: 'Order Number'},
  {key: 'Order Type'},
  {key: 'Order Amount'},
  {key: 'User Name'},
  {key: 'User Mobile'},
  {key: 'Delivery Address'},
  {key: 'Delivery Charge'},
  {key: 'Service Charge'},
  {key: 'Card Charges'},
  {key: 'Admin Earnings'},
  {key: 'Rider Tips'},
  {key: 'Amount Exchange'},
  {key: 'Rider Bid'},
  {key: 'Tax Amount'},
  {key: 'Payment Status'},
  {key: 'Payment Type'},
  {key: 'Payment Reference'},
  {key: 'Rider Name'},
  {key: 'Total Distance'},
];

const table = {placeholder: 'Search here...', label: 'Search:  '};
const items = {label: 'Rows', values: [5, 10, 25, 50, 75, 100]};

const Store_Reviews = props => {
  const [responseData, setresponseData] = useState ('');
  const [fromDate, setfromDate] = useState ('');
  const [toDate, settoDate] = useState ('');
  const [orderCount, SetorderCount] = useState ('');
  const [OnlinePayments, SetOnlinePayments] = useState ('');
  const [OfflinePayments, SetOfflinePayments] = useState ('');
  const [TaxAmount, SetTaxAmount] = useState ('');
  const [TotalTips, SetTotalTips] = useState ('');
  const [ExchangeAmount, SetExchangeAmount] = useState ('');
  const [CardChanrges, SetCardChanrges] = useState ('');
  const [GrandTotal, SetGrandTotal] = useState ('');
  const [AmountWithRider, SetAmountWithRider] = useState ('');
  const [AdminEarning, SetAdminEarnings] = useState ('');
  const [RiderEarning, SetRiderEarning] = useState ('');
  const [MerchantPayment, SetMerchantPayment] = useState ('');
  const [AmountToRider, SetAmountToRider] = useState ('');
  const [WallentRefund, SetWallentRefund] = useState ('');
  const [TotalRestorents, SetTotalRestorents] = useState ('');
  const [regvendor, Setregvendor] = useState ('');
  const [nonregvendor, Setnonregvendor] = useState ('');

  const GetAllSalesReports = React.useCallback (() => {
    axios ({
      method: 'GET',
      url: TAABEDAR_SERVICE + '/SalesReports',
      headers: {
        'content-type': 'application/json',
      },
    })
      .then (response => {
        setresponseData (response.data);
      })
      .catch (error => {
        console.log (error);
      });
  }, []);

  const SalesReportOrderSummary = React.useCallback (() => {
    axios ({
      method: 'GET',
      url: TAABEDAR_SERVICE + '/SalesReportOrderSummary',
      headers: {
        'content-type': 'application/json',
      },
    })
      .then (response => {
        console.log ('response:' + response.data);
        SetorderCount (response.data[0].orderCount);
        SetOnlinePayments (response.data[0].OnlinePayments);
        SetOfflinePayments (response.data[0].OfflinePayments);
        SetTaxAmount (response.data[0].TaxAmount);
        SetTotalTips (response.data[0].TotalTips);
        SetExchangeAmount (response.data[0].ExchangeAmount);
        SetCardChanrges (response.data[0].CardChanrges);
        SetGrandTotal (response.data[0].GrandTotal);
        SetAmountWithRider (response.data[0].AmountWithRider);
        SetAdminEarnings (response.data[0].AdminEarning);
        SetRiderEarning (response.data[0].RiderEarning);
        SetMerchantPayment (response.data[0].MerchantPayment);
        SetAmountToRider (response.data[0].AmountToRider);
        SetWallentRefund (response.data[0].WallentRefund);
        SetTotalRestorents (response.data[0].TotalRestorents);
        Setregvendor (response.data[0].regvendor);
        Setnonregvendor (response.data[0].nonregvendor);
      })
      .catch (error => {
        console.log (error);
      });
  }, []);

  const MonthChange = event => {
    if (event.target.value == '0') {
      GetAllSalesReports ();
    } else {
      axios ({
        method: 'GET',
        url: TAABEDAR_SERVICE +
          '/SalesReportsByMonth/' +
          event.target.value +
          '',
        headers: {
          'content-type': 'application/json',
        },
      })
        .then (response => {
          setresponseData (response.data);
        })
        .catch (error => {
          console.log (error);
        });

      axios ({
        method: 'GET',
        url: TAABEDAR_SERVICE +
          '/SalesReportOrderSummaryByMonth/' +
          event.target.value +
          '',
        headers: {
          'content-type': 'application/json',
        },
      })
        .then (response => {
          console.log ('response:' + response.data);
          SetorderCount (response.data[0].orderCount);
          SetOnlinePayments (response.data[0].OnlinePayments);
          SetOfflinePayments (response.data[0].OfflinePayments);
          SetTaxAmount (response.data[0].TaxAmount);
          SetTotalTips (response.data[0].TotalTips);
          SetExchangeAmount (response.data[0].ExchangeAmount);
          SetCardChanrges (response.data[0].CardChanrges);
          SetGrandTotal (response.data[0].GrandTotal);
          SetAmountWithRider (response.data[0].AmountWithRider);
          SetAdminEarnings (response.data[0].AdminEarning);
          SetRiderEarning (response.data[0].RiderEarning);
          SetMerchantPayment (response.data[0].MerchantPayment);
          SetAmountToRider (response.data[0].AmountToRider);
          SetWallentRefund (response.data[0].WallentRefund);
          SetTotalRestorents (response.data[0].TotalRestorents);
          Setregvendor (response.data[0].regvendor);
          Setnonregvendor (response.data[0].nonregvendor);
        })
        .catch (error => {
          console.log (error);
        });
    }
  };

  const history = useHistory ();

  const PayChange = event => {
    if (event.target.value == '0') {
      GetAllSalesReports ();
      SalesReportOrderSummary ();
    } else {
      axios ({
        method: 'GET',
        url: TAABEDAR_SERVICE +
          '/SalesReportsByPaymentType/' +
          event.target.value +
          '',
        headers: {
          'content-type': 'application/json',
        },
      })
        .then (response => {
          setresponseData (response.data);
        })
        .catch (error => {
          console.log (error);
        });

      axios ({
        method: 'GET',
        url: TAABEDAR_SERVICE +
          '/SalesReportOrderSummaryByPaymentType/' +
          event.target.value +
          '',
        headers: {
          'content-type': 'application/json',
        },
      })
        .then (response => {
          SetorderCount (response.data[0].orderCount);
          SetOnlinePayments (response.data[0].OnlinePayments);
          SetOfflinePayments (response.data[0].OfflinePayments);
          SetTaxAmount (response.data[0].TaxAmount);
          SetTotalTips (response.data[0].TotalTips);
          SetExchangeAmount (response.data[0].ExchangeAmount);
          SetCardChanrges (response.data[0].CardChanrges);
          SetGrandTotal (response.data[0].GrandTotal);
          SetAmountWithRider (response.data[0].AmountWithRider);
          SetAdminEarnings (response.data[0].AdminEarning);
          SetRiderEarning (response.data[0].RiderEarning);
          SetMerchantPayment (response.data[0].MerchantPayment);
          SetAmountToRider (response.data[0].AmountToRider);
          SetWallentRefund (response.data[0].WallentRefund);
          SetTotalRestorents (response.data[0].TotalRestorents);
          Setregvendor (response.data[0].regvendor);
          Setnonregvendor (response.data[0].nonregvendor);
        })
        .catch (error => {
          console.log (error);
        });
    }
  };

  const FromChange = event => {
    setfromDate (event.target.value);
  };
  const ToChange = event => {
    settoDate (event.target.value);
  };

  const FilterDates = () => {
    axios ({
      method: 'GET',
      url: TAABEDAR_SERVICE +
        '/SalesReportsByDates/' +
        fromDate +
        '/' +
        toDate +
        '',
      headers: {
        'content-type': 'application/json',
      },
    })
      .then (response => {
        setresponseData (response.data);
      })
      .catch (error => {
        console.log (error);
      });
    axios ({
      method: 'GET',
      url: TAABEDAR_SERVICE +
        '/SalesReportOrderSummaryByDate/' +
        fromDate +
        '/' +
        toDate +
        '',
      headers: {
        'content-type': 'application/json',
      },
    })
      .then (response => {
        SetorderCount (response.data[0].orderCount);
        SetOnlinePayments (response.data[0].OnlinePayments);
        SetOfflinePayments (response.data[0].OfflinePayments);
        SetTaxAmount (response.data[0].TaxAmount);
        SetTotalTips (response.data[0].TotalTips);
        SetExchangeAmount (response.data[0].ExchangeAmount);
        SetCardChanrges (response.data[0].CardChanrges);
        SetGrandTotal (response.data[0].GrandTotal);
        SetAmountWithRider (response.data[0].AmountWithRider);
        SetAdminEarnings (response.data[0].AdminEarning);
        SetRiderEarning (response.data[0].RiderEarning);
        SetMerchantPayment (response.data[0].MerchantPayment);
        SetAmountToRider (response.data[0].AmountToRider);
        SetWallentRefund (response.data[0].WallentRefund);
        SetTotalRestorents (response.data[0].TotalRestorents);
        Setregvendor (response.data[0].regvendor);
        Setnonregvendor (response.data[0].nonregvendor);
      })
      .catch (error => {
        console.log (error);
      });
  };

  const FilterReset = () => {
    setfromDate ('');
    settoDate ('');
    GetAllSalesReports ();
    SalesReportOrderSummary ();
  };

  const ToExcel = () => {
    var cnt = 0;
    var csvData = new Array ();
    csvData.push (
      '"Sl No","Order Date","Order Number","Order Type","Order Amount","User Name","User Mobile","Delivery Address","Delivery Charge","Service Charge","Chard Charges","Admin Earning","Rider Tips","Amount Exchange","Rider Bit","Tax Amount","Payment Status","Payment Type","Payment Reference","Rider Name","Total Distance"'
    );

    const StateOption = responseData.map (
      item =>
        (cnt++, cnt++, csvData.push (
          '"' +
            cnt +
            '","' +
            item.orderDate +
            '","' +
            item.orderNumber +
            '","' +
            item.orderType +
            '","' +
            item.OrderGrand +
            '","' +
            item.userName +
            '","' +
            item.usermobile +
            '","' +
            item.deliveryAddress +
            '","' +
            item.deliveryCharge +
            '","' +
            item.serviceCharge +
            '","' +
            item.CardChanrges +
            '","' +
            item.adminEarnings +
            '","' +
            item.riderTips +
            '","' +
            item.amtExchange +
            '","' +
            item.riderBid +
            '","' +
            item.taxAmount +
            '","' +
            item.paymentStatus +
            '","' +
            item.payementType +
            '","' +
            item.paymentReference +
            '","' +
            item.riderName +
            '","' +
            item.orderDistance +
            '"'
        ))
    );

    const fileName = 'SalesReport.csv';
    const buffer = csvData.join ('\n');
    const blob = new Blob ([buffer], {
      type: 'text/csv;charset=utf8;',
    });

    //IN IE
    const link = document.createElement ('a');
    if (link.download !== undefined) {
      link.setAttribute ('href', window.URL.createObjectURL (blob));
      link.setAttribute ('download', fileName);
      link.style = 'visibility:hidden';
      document.body.appendChild (link);
      link.click ();
      document.body.removeChild (link);
    } else if (navigator.msSaveBlob) {
      navigator.msSaveBlob (blob, fileName);
    } else {
    }
  };

  React.useEffect (() => {
    GetAllSalesReports ();
    SalesReportOrderSummary ();
  }, []);

  return (
    <div>
      <h1 id="ccmaster">Sales Performance</h1>
      <br />
      <CRow>
        <CCol col="10">
          <CCard>
            <CRow>
              <CCol col="2">
                <CButton
                  size="sm"
                  color="primary"
                  style={{
                    width: '12%',
                    float: 'right',
                    marginTop: '1%',
                    marginRight: '2%',
                  }}
                  onClick={ToExcel}
                >
                  Export To Excel
                </CButton>
              </CCol>
            </CRow>
            <CCardBody>
              <CRow>
                <CCol>
                  <CCard>
                    <CCardHeader>
                      <CRow>
                        {/* <CCol md="3">
                          <CLabel htmlFor="nf-email">Merchant Type</CLabel>
                          <CSelect custom name="Marchant" id="Marchant">
                            <option value="0">All</option>
                            <option value="0">Marchant</option>
                            <option value="1">Option #1</option>
                            <option value="2">Option #2</option>
                            <option value="3">Option #3</option>
                          </CSelect>
                        </CCol> */}
                        <CCol md="2">
                          <CLabel htmlFor="nf-email">Select Month</CLabel>
                          <CSelect
                            custom
                            name="Marchant"
                            id="Marchant"
                            onChange={MonthChange}
                          >
                            <option value="0">All</option>
                            <option value="1">Jan</option>
                            <option value="2">Feb</option>
                            <option value="3">March</option>
                            <option value="4">April</option>
                            <option value="5">May</option>
                            <option value="6">Jun</option>
                            <option value="7">Jul</option>
                            <option value="8">Aug</option>
                            <option value="9">Sept</option>
                            <option value="10">Oct</option>
                            <option value="11">Nov</option>
                            <option value="12">Dec</option>
                          </CSelect>
                        </CCol>
                        <CCol md="2">
                          <CLabel htmlFor="nf-email">Payment Type</CLabel>
                          <CSelect
                            custom
                            name="Marchant"
                            id="Marchant"
                            onChange={PayChange}
                          >
                            <option value="0">All</option>
                            <option value="Card">Card</option>
                            <option value="COD">Cash On Delivery</option>
                            <option value="Jazz">Jazz Cash</option>
                          </CSelect>
                        </CCol>
                        <CCol md="2">
                          <CLabel>From:</CLabel>
                          <CInput
                            type="date"
                            onChange={FromChange}
                            value={fromDate}
                          />
                        </CCol>

                        <CCol md="2">
                          <CLabel>To:</CLabel>
                          <CInput
                            type="date"
                            onChange={ToChange}
                            value={toDate}
                          />
                        </CCol>
                        <CCol md="2">
                          <CButton
                            size="sm"
                            color="info"
                            style={{'margin-top': '28px', width: '100%'}}
                            onClick={FilterDates}
                          >
                            Filter
                          </CButton>
                        </CCol>
                        <CCol md="2">
                          <CButton
                            size="sm"
                            color="danger"
                            style={{'margin-top': '28px', width: '100%'}}
                            onClick={FilterReset}
                          >
                            Reset
                          </CButton>
                        </CCol>
                      </CRow>

                      {/* <CRow>
                        <CCol md="3">
                          <CLabel htmlFor="nf-email">Select City</CLabel>
                          <CSelect custom name="Marchant" id="Marchant">
                            <option value="0">City</option>
                            <option value="0">All</option>
                            <option value="1">Option #1</option>
                            <option value="2">Option #2</option>
                            <option value="3">Option #3</option>
                          </CSelect>
                        </CCol>
                        <CCol md="3">
                          <CLabel htmlFor="nf-email">Select Area</CLabel>
                          <CSelect custom name="Marchant" id="Marchant">
                            <option value="0">Area</option>
                            <option value="0">All</option>
                            <option value="1">Option #1</option>
                            <option value="2">Option #2</option>
                            <option value="3">Option #3</option>
                          </CSelect>
                        </CCol>
                         */}
                      {/* </CRow> */}
                    </CCardHeader>
                    <CCardBody>
                      <CDataTable
                        items={responseData}
                        fields={fields}
                        hover
                        striped
                        bordered
                        sorter
                        tableFilter={table}
                        itemsPerPage={10}
                        pagination
                        size="sm"
                        itemsPerPageSelect={items}
                        scopedSlots={{
                          'SL No': item => <td>{item.id}</td>,
                          'Order Date': item => <td>{item.orderDate}</td>,
                          'Order Number': item => <td>{item.orderNumber}</td>,
                          'Order Type': item => <td>{item.orderType}</td>,
                          'Order Amount': item => <td>{item.OrderGrand}</td>,
                          'User Name': item => <td>{item.userName}</td>,
                          'User Mobile': item => <td>{item.usermobile}</td>,
                          'Delivery Address': item => (
                            <td>{item.deliveryAddress}</td>
                          ),
                          'Card Charges': item => <td>{item.CardChanrges}</td>,
                          'Delivery Charge': item => (
                            <td>{item.deliveryCharge}</td>
                          ),
                          'Service Charge': item => (
                            <td>{item.serviceCharge}</td>
                          ),
                          'Admin Earnings': item => (
                            <td>{item.adminEarnings}</td>
                          ),
                          'Payment Status': item => (
                            <td>{item.paymentStatus}</td>
                          ),
                          'Payment Type': item => <td>{item.payementType}</td>,
                          'Payment Reference': item => (
                            <td>{item.paymentReference}</td>
                          ),
                          'Rider Name': item => <td>{item.riderName}</td>,
                          'Rider Tips': item => <td>{item.riderTips}</td>,
                          'Amount Exchange': item => (
                            <td>{item.amtExchange}</td>
                          ),
                          'Rider Bid': item => <td>{item.riderBid}</td>,
                          'Total Distance': item => (
                            <td>{item.orderDistance}</td>
                          ),
                          'Sub-Orders': item => (
                            <td>
                              <CButton
                                id="order-list"
                                onClick={() => {
                                  history.push ('/ReportSubOrderDetails', {
                                    data: item,
                                  });
                                }}
                              >
                                {item.subOrder}
                              </CButton>
                            </td>
                          ),
                          'Tax Amount': item => <td>{item.taxAmount}</td>,
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
                    <CCardHeader>Summary of the Month</CCardHeader>
                    <CCardBody>
                      {/* <p style={{ fontSize: '12px' }}><span>Total Restraunts  : </span>30</p>
              <p style={{ fontSize: '12px' }}><span>Total Orders : </span> 580 </p>
              <p style={{ fontSize: '12px' }}><span>Service Charges : </span> 5800 </p>
              <p style={{ fontSize: '12px' }}><span>COD Orders : </span> 58  with 5520 of sales amount</p>
              <p style={{ fontSize: '12px' }}><span>Online Payments Orders : </span> 48  with 4520 of sales amount</p>
              <p style={{ fontSize: '12px' }}><span >Final Order Amount: </span><span style={{ color: 'green', fontWeight: '700', fontSize: '15px', background: '#f4f4f4', padding: '5px' }}> 200000</span> </p> */}
                      {/* <p  style={{fontSize:'12px'}}><span>Mode Of Payment  : </span>COD</p> */}

                      <CRow>
                        <hr />
                        <CCol md="6">
                          <p style={{fontSize: '12px'}}>
                            <span>- Total Vendors : </span>
                            <span
                              style={{
                                fontSize: '14px',
                                fontWeight: '700',
                                color: 'DarkGreen',
                              }}
                            >
                              {TotalRestorents}
                            </span>
                          </p>
                          <p style={{fontSize: '12px'}}>
                            <span>- Registered Vendors : </span>
                            <span
                              style={{
                                fontSize: '14px',
                                fontWeight: '700',
                                color: 'DarkGreen',
                              }}
                            >
                              {regvendor}
                            </span>
                          </p>
                          <p style={{fontSize: '12px'}}>
                            <span>- Non-Registered Vendors : </span>
                            <span
                              style={{
                                fontSize: '14px',
                                fontWeight: '700',
                                color: 'DarkGreen',
                              }}
                            >
                              {nonregvendor}
                            </span>
                          </p>
                          <p style={{fontSize: '12px'}}>
                            <span>- Total Orders : </span>{' '}
                            <span
                              style={{
                                fontSize: '14px',
                                fontWeight: '700',
                                color: 'DarkGreen',
                              }}
                            >
                              {orderCount}
                            </span>{' '}
                          </p>
                          <p style={{fontSize: '12px'}}>
                            <span>- Grand Total</span>
                            <span
                              style={{
                                fontSize: '14px',
                                fontWeight: '700',
                                color: 'DarkGreen',
                              }}
                            >
                              {GrandTotal}
                            </span>
                          </p>
                          <p style={{fontSize: '12px'}}>
                            <span>- Total Online Payments : </span>
                            <span
                              style={{
                                fontSize: '14px',
                                fontWeight: '700',
                                color: 'DarkGreen',
                              }}
                            >
                              {OnlinePayments}
                            </span>
                          </p>
                          <p style={{fontSize: '12px'}}>
                            <span>- Total Offline Payments:</span>{' '}
                            <span
                              style={{
                                fontSize: '14px',
                                fontWeight: '700',
                                color: 'DarkGreen',
                              }}
                            >
                              {OfflinePayments}
                            </span>{' '}
                          </p>

                          <p style={{fontSize: '12px'}}>
                            <span>- Total Tax amount</span>
                            <span
                              style={{
                                fontSize: '14px',
                                fontWeight: '700',
                                color: 'DarkGreen',
                              }}
                            >
                              {TaxAmount}
                            </span>
                          </p>
                          <p style={{fontSize: '12px'}}>
                            <span>- Total online tips : </span>
                            <span
                              style={{
                                fontSize: '14px',
                                fontWeight: '700',
                                color: 'DarkGreen',
                              }}
                            >
                              {TotalTips}
                            </span>
                          </p>
                          <p style={{fontSize: '12px'}}>
                            <span>- Total change Exchange Amount : </span>{' '}
                            <span
                              style={{
                                fontSize: '14px',
                                fontWeight: '700',
                                color: 'DarkGreen',
                              }}
                            >
                              {ExchangeAmount}
                            </span>{' '}
                          </p>
                        </CCol>
                        <CCol md="6">
                          <p style={{fontSize: '12px'}}>
                            <span>- Card Charges</span>
                            <span
                              style={{
                                fontSize: '14px',
                                fontWeight: '700',
                                color: 'DarkGreen',
                              }}
                            >
                              {CardChanrges}
                            </span>
                          </p>

                          <p style={{fontSize: '12px'}}>
                            <span>- Amount with riders</span>
                            <span
                              style={{
                                fontSize: '14px',
                                fontWeight: '700',
                                color: 'DarkGreen',
                              }}
                            >
                              {AmountWithRider}
                            </span>
                          </p>
                          <p style={{fontSize: '12px'}}>
                            <span>- Admin Earnings</span>
                            <span
                              style={{
                                fontSize: '14px',
                                fontWeight: '700',
                                color: 'DarkGreen',
                              }}
                            >
                              {AdminEarning}
                            </span>
                          </p>

                          <p style={{fontSize: '12px'}}>
                            <span>- Rider Earnigns</span>
                            <span
                              style={{
                                fontSize: '14px',
                                fontWeight: '700',
                                color: 'DarkGreen',
                              }}
                            >
                              {RiderEarning}
                            </span>
                          </p>
                          <p style={{fontSize: '12px'}}>
                            <span>- Payments to Merchants</span>
                            <span
                              style={{
                                fontSize: '14px',
                                fontWeight: '700',
                                color: 'DarkGreen',
                              }}
                            >
                              {MerchantPayment}
                            </span>
                          </p>

                          <p style={{fontSize: '12px'}}>
                            <span>- Amount to Riders</span>
                            <span
                              style={{
                                fontSize: '14px',
                                fontWeight: '700',
                                color: 'DarkGreen',
                              }}
                            >
                              {AmountToRider}
                            </span>
                          </p>
                          <p
                            style={{
                              fontSize: '14px',
                              fontWeight: '600',
                              color: 'green',
                            }}
                          >
                            <span>Final Summary : </span>
                            <span
                              style={{
                                fontSize: '16px',
                                fontWeight: '700',
                                color: 'green',
                              }}
                            >
                              {AdminEarning}
                            </span>
                          </p>
                        </CCol>
                      </CRow>
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

export default Store_Reviews;
