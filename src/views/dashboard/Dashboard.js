import React, {lazy, useState, Component} from 'react';
import axios from 'axios';
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
  CButton,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CLink,
} from '@coreui/react';
import TAABEDAR_SERVICE from 'src/services/service';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import {render} from 'react-dom';
import DeleteSharpIcon from '@material-ui/icons/DeleteSharp';
import {CChartBar, CChartLine} from '@coreui/react-chartjs';
import usersData from '../users/UsersData';
import '../../style.css';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import ThumbUpAltSharpIcon from '@material-ui/icons/ThumbUpAltSharp';
import {useHistory} from 'react-router';
const WidgetsDropdown = lazy (() => import ('../widgets/WidgetsDropdown.js'));
const fields = [
  {key: 'Sl No.'},
  {key: 'Order Number'},
  {key: 'Order Date'},
  {key: 'Order Type'},
  {key: 'Order Amount'},
];

const fields2 = [
  {key: 'Sl No.'},
  {key: 'Action'},
  {key: 'Merchant Type'},
  {key: 'Name'},
  {key: 'Email'},
  {key: 'Mobile'},
  {key: 'Owner Name'},
  {key: 'Address'},
  {key: 'Reg Date'},
];
const fields4 = [
  {key: 'Sl No.'},
  {key: 'Action'},
  {key: 'Name'},
  {key: 'Email'},
  {key: 'Mobile'},
  {key: 'DL No.'},
  {key: 'Reg Date'},
];

const fields3 = [
  {key: 'Sl No.'},
  {key: 'Order Number'},
  {key: 'Order Date'},
  {key: 'Order Type'},
  {key: 'Order Amount'},
];

const table = {placeholder: 'Search here...', label: 'Search:  '};
const items = {label: 'Rows:', values: [5, 10, 25, 50, 75, 100]};

const Dashboard = () => {
  const history = useHistory ();

  const [responseData, setresponseData] = useState ('');
  const [responseData1, setresponseData1] = useState ('');
  const [responseData2, setresponseData2] = useState ('');
  const [responseData3, setresponseData3] = useState ('');

  const [DailytotalOrders, SetDailytotalOrders] = useState ('');
  const [DailyregisterMerchant, SetDailyregisterMerchant] = useState ('');
  const [DailyregisterdUsers, SetDailyregisterdUsers] = useState ('');
  const [DailyactiveRiders, SetDailyactiveRiders] = useState ('');

  const [MonthlytotalOrders, SetMonthlytotalOrders] = useState ('');
  const [MonthlyregistereMerchant, SetMonthlyregisterMerchant] = useState ('');
  const [MonthlyregisterdUsers, SetMonthlyregisterdUsers] = useState ('');
  const [MonthlyactiveRiders, SetMonthlyactiveRiders] = useState ('');

  const [OveralltotalOrders, SetOveralltotalOrders] = useState ('');
  const [OverallregisterMerchant, SetOverallregisterMerchant] = useState ('');
  const [OverallregisterdUsers, SetOverallregisterdUsers] = useState ('');
  const [OverallactiveRiders, SetOverallactiveRiders] = useState ('');

  const [info, setInfo] = useState (false);

  const [responseDataSalesGraph, SetresponseDataSalesGraph] = useState ([]);
  const [responseDataRegStats, SetresponseDataRegStats] = useState ([]);
  const [responseDataOrderStats, SetresponseDataOrderStats] = useState ([]);

  const DashBoardUpdates = React.useCallback (() => {
    axios ({
      method: 'GET',
      url: TAABEDAR_SERVICE + '/DashBoardUpdates',
      headers: {
        'content-type': 'application/json',
      },
    })
      .then (response => {
        console.log ('response:' + response.data);
        SetDailytotalOrders (response.data[0].totalOrders);
        SetDailyregisterMerchant (response.data[0].registerMerchant);
        SetDailyregisterdUsers (response.data[0].activeUser);
        SetDailyactiveRiders (response.data[0].activeUser);

        SetMonthlytotalOrders (response.data[1].totalOrders);
        SetMonthlyregisterMerchant (response.data[1].registerMerchant);
        SetMonthlyregisterdUsers (response.data[1].activeUser);
        SetMonthlyactiveRiders (response.data[1].activeUser);

        SetOveralltotalOrders (response.data[2].totalOrders);
        SetOverallregisterMerchant (response.data[2].registerMerchant);
        SetOverallregisterdUsers (response.data[2].activeUser);
        SetOverallactiveRiders (response.data[2].activeUser);
      })
      .catch (error => {
        console.log (error);
      });
    axios ({
      method: 'GET',
      url: TAABEDAR_SERVICE + '/SalesGraph',
      headers: {
        'content-type': 'application/json',
      },
    })
      .then (response => {
        console.log ('responseDataSalesGraph:' + response.data);
        SetresponseDataSalesGraph (response.data);
      })
      .catch (error => {
        console.log (error);
      });
    axios ({
      method: 'GET',
      url: TAABEDAR_SERVICE + '/RegStats',
      headers: {
        'content-type': 'application/json',
      },
    })
      .then (response => {
        console.log ('SetresponseDataRegStats:' + response.data);
        SetresponseDataRegStats (response.data);
      })
      .catch (error => {
        console.log (error);
      });
    //Order Statistics
    axios ({
      method: 'GET',
      url: TAABEDAR_SERVICE + '/OrderStats',
      headers: {
        'content-type': 'application/json',
      },
    })
      .then (response => {
        console.log ('SetresponseDataOrderStats:' + response.data);
        SetresponseDataOrderStats (response.data);
      })
      .catch (error => {
        console.log (error);
      });
  }, []);

  const AcceptRider = pkid => {
    axios ({
      method: 'GET',
      url: TAABEDAR_SERVICE + '/AcceptRider/' + pkid + '',
      headers: {
        'content-type': 'application/json',
      },
      params: {
        language_code: 'en',
      },
    })
      .then (response => {
        if (response.data == true) {
          alert ('Rider Request Accepted');
          NewRiderRequest ();
        } else {
          alert ('Failed To Accept Rider Request');
        }
      })
      .catch (error => {
        console.log (error);
      });
  };

  const RejectRider = pkid => {
    axios ({
      method: 'GET',
      url: TAABEDAR_SERVICE + '/RejectRider/' + pkid + '',
      headers: {
        'content-type': 'application/json',
      },
      params: {
        language_code: 'en',
      },
    })
      .then (response => {
        if (response.data == true) {
          alert ('Rider Request Rejected');
          NewRiderRequest ();
        } else {
          alert ('Failed To Reject Rider Request');
        }
      })
      .catch (error => {
        console.log (error);
      });
  };

  const PendingOrders = React.useCallback (() => {
    axios ({
      method: 'GET',
      url: TAABEDAR_SERVICE + '/DashboardPendingOrder',
      headers: {
        'content-type': 'application/json',
      },
    })
      .then (response => {
        console.log ('pen response:' + response.data);
        setresponseData (response.data);
      })
      .catch (error => {
        console.log (error);
      });
  }, []);

  const CompletedOrders = React.useCallback (() => {
    axios ({
      method: 'GET',
      url: TAABEDAR_SERVICE + '/DashboardCompletedOrder',
      headers: {
        'content-type': 'application/json',
      },
    })
      .then (response => {
        console.log ('response:' + response.data);
        setresponseData1 (response.data);
      })
      .catch (error => {
        console.log (error);
      });
  }, []);

  const NewMerchantRequest = React.useCallback (() => {
    axios ({
      method: 'GET',
      url: TAABEDAR_SERVICE + '/DashboardVendorRequest',
      headers: {
        'content-type': 'application/json',
      },
    })
      .then (response => {
        console.log ('response:' + response.data);
        setresponseData2 (response.data);
      })
      .catch (error => {
        console.log (error);
      });
  }, []);

  const NewRiderRequest = React.useCallback (() => {
    axios ({
      method: 'GET',
      url: TAABEDAR_SERVICE + '/DashboardRiderRequest',
      headers: {
        'content-type': 'application/json',
      },
    })
      .then (response => {
        console.log ('response:' + response.data);
        setresponseData3 (response.data);
      })
      .catch (error => {
        console.log (error);
      });
  }, []);

  const AcceptVendor = pkid => {
    axios ({
      method: 'GET',
      url: TAABEDAR_SERVICE + '/AcceptVendor/' + pkid + '',
      headers: {
        'content-type': 'application/json',
      },
    })
      .then (response => {
        if (response.data == true) {
          alert ('Vendor Sucessfully Accepted');
          NewMerchantRequest ();
        } else {
          alert ('Failed To Accept Vendor');
        }
      })
      .catch (error => {
        console.log (error);
      });
  };

  const RejectVendor = pkid => {
    axios ({
      method: 'GET',
      url: TAABEDAR_SERVICE + '/RejectVendor/' + pkid + '',
      headers: {
        'content-type': 'application/json',
      },
    })
      .then (response => {
        if (response.data == true) {
          alert ('Vendor Rejected Sucessfully');
          NewMerchantRequest ();
        } else {
          alert ('Failed To Reject Vendor');
        }
      })
      .catch (error => {
        console.log (error);
      });
  };

  const options = {
    title: {
      text: 'Orders Statistics',
    },
    subtitle: {
      text: 'Summary',
    },
    xAxis: {
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
    },
    series: [
      {
        type: 'column',
        colorByPoint: true,
        data: responseDataSalesGraph,
        showInLegend: false,
      },
    ],
  };

  const options1 = {
    title: {
      text: 'Registration Statistics',
    },
    xAxis: {
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
    },
    series: [
      {
        type: 'column',
        name: 'Users',
        data: responseDataRegStats[0],
      },
      {
        type: 'column',
        name: 'Rider',
        data: responseDataRegStats[1],
      },
      {
        type: 'column',
        name: 'Vendor',
        data: responseDataRegStats[2],
      },
      {
        type: 'spline',
        name: 'Average',
        data: responseDataRegStats[3],
        marker: {
          lineWidth: 2,
          lineColor: Highcharts.getOptions ().colors[3],
          fillColor: 'white',
        },
      },
    ],
  };

  const options2 = {
    chart: {
      type: 'spline',
    },
    title: {
      text: 'Order Statistics',
    },
    subtitle: {
      text: 'Completed Orders / Active Orders',
    },
    xAxis: {
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
    },
    yAxis: {
      title: {
        text: 'Values',
      },
      labels: {
        formatter: function () {
          return this.value;
        },
      },
    },
    tooltip: {
      crosshairs: true,
      shared: true,
    },
    plotOptions: {
      spline: {
        marker: {
          radius: 4,
          lineColor: '#666666',
          lineWidth: 1,
        },
      },
    },
    series: [
      {
        name: 'Completed Orders',
        marker: {
          symbol: 'square',
        },
        data: responseDataOrderStats[0],
      },
      {
        name: 'Active Orders',
        marker: {
          symbol: 'diamond',
        },
        data: responseDataOrderStats[1],
      },
    ],
  };

  React.useEffect (() => {
    DashBoardUpdates ();
    PendingOrders ();
    CompletedOrders ();
    NewMerchantRequest ();
    NewRiderRequest ();
  }, []);

  return (
    <div>
      <WidgetsDropdown />
      <CRow>
        <CCol md="9">
          <CCard>
            <CCardBody>
              <CRow>
                <CCol>
                  <CCard>
                    <CCardHeader>Order Statistics</CCardHeader>
                    <CCardBody>
                      <HighchartsReact
                        highcharts={Highcharts}
                        options={options}
                      />
                    </CCardBody>
                  </CCard>
                </CCol>
              </CRow>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol md="3">
          <CCard id="chight">
            <CCardBody>
              <CRow>
                <CCol>
                  <CCard>
                    <CCardHeader>Daily Updates</CCardHeader>
                    <CCardBody>
                      <CRow>
                        <CCol md="9" id="Dashp1">
                          <p>Total Orders :</p>
                          <p>Active Merchant :</p>
                          <p>Registerd Users :</p>
                          <p>Active Riders :</p>
                        </CCol>
                        <CCol md="" id="p2">
                          <p> {DailytotalOrders}</p>
                          <p> {DailyregisterMerchant}</p>
                          <p> {DailyregisterdUsers}</p>
                          <p> {DailyactiveRiders}</p>
                        </CCol>
                      </CRow>
                    </CCardBody>
                  </CCard>
                </CCol>
              </CRow>
            </CCardBody>
          </CCard>

          <CCard id="chight1">
            <CCardBody>
              <CRow>
                <CCol>
                  <CCard>
                    <CCardHeader>Monthly Updates</CCardHeader>
                    <CCardBody>
                      <CRow>
                        <CCol md="9" id="Dashp1">
                          <p>Total Orders :</p>
                          <p>Active Merchant :</p>
                          <p>Registerd Users :</p>
                          <p>Active Riders :</p>
                        </CCol>
                        <CCol md="3" id="p2">
                          <p> {MonthlytotalOrders}</p>
                          <p> {MonthlyregistereMerchant}</p>
                          <p> {MonthlyregisterdUsers}</p>
                          <p> {MonthlyactiveRiders}</p>
                        </CCol>
                      </CRow>
                    </CCardBody>
                  </CCard>
                </CCol>
              </CRow>
            </CCardBody>
          </CCard>

          <CCard id="chight1">
            <CCardBody>
              <CRow>
                <CCol>
                  <CCard>
                    <CCardHeader>Overall Update</CCardHeader>
                    <CCardBody>
                      <CRow>
                        <CCol md="9" id="Dashp1">
                          <p>Total Orders :</p>
                          <p>Active Merchant :</p>
                          <p>Registerd Users :</p>
                          <p>Active Riders :</p>
                        </CCol>
                        <CCol md="3" id="p2">
                          <p> {OveralltotalOrders}</p>
                          <p> {OverallregisterMerchant}</p>
                          <p> {OverallregisterdUsers}</p>
                          <p> {OverallactiveRiders}</p>
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
      <CRow>
        <CCol xs="12" sm="12" md="6">
          <CCard>
            <CCardBody>
              <CRow>
                <CCol>
                  <CCard>
                    <CCardHeader>Registrations Statistics</CCardHeader>
                    <CCardBody>
                      <HighchartsReact
                        highcharts={Highcharts}
                        options={options1}
                      />
                    </CCardBody>
                  </CCard>
                </CCol>
              </CRow>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol xs="12" sm="12" md="6">
          <CCard>
            <CCardBody>
              <CRow>
                <CCol>
                  <CCard>
                    <CCardHeader>Order Statistics</CCardHeader>
                    <CCardBody>
                      <HighchartsReact
                        highcharts={Highcharts}
                        options={options2}
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
        <CCol xs="12" sm="12" md="6">
          <CCard>
            <CCardBody>
              <CRow>
                <CCol>
                  <CCard>
                    <CCardHeader>Pending Orders</CCardHeader>
                    <CCardBody>
                      <CDataTable
                        items={responseData}
                        fields={fields3}
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
                          'Order Number': item => (
                            <td>
                              <CButton
                                id="order-list"
                                onClick={() => {
                                  history.push ('/DashboardOrderDetails', {
                                    data: item,
                                  });
                                }}
                              >
                                {item.orderNumber}
                              </CButton>
                            </td>
                          ),
                          'Sl No.': item => <td>{item.id}</td>,
                          'Order Date': item => <td>{item.orderDate}</td>,
                          'Order Type': item => <td>{item.orderType} </td>,
                          'Order Amount': item => <td> {item.totalAmount}</td>,
                        }}
                      />
                    </CCardBody>
                  </CCard>
                </CCol>
              </CRow>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol xs="12" sm="12" md="6">
          <CCard>
            <CCardBody>
              <CRow>
                <CCol>
                  <CCard>
                    <CCardHeader>Completed Orders</CCardHeader>
                    <CCardBody>
                      <CDataTable
                        items={responseData1}
                        fields={fields}
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
                          'Order Number': item => (
                            <td>
                              <CButton
                                id="order-list"
                                onClick={() => {
                                  history.push ('/DashboardOrderDetails', {
                                    data: item,
                                  });
                                }}
                              >
                                {item.orderNumber}
                              </CButton>
                            </td>
                          ),
                          'Sl No.': item => <td>{item.id}</td>,
                          'Order Date': item => <td>{item.orderDate}</td>,
                          'Order Type': item => <td>{item.orderType} </td>,
                          'Order Amount': item => <td> {item.totalAmount}</td>,
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
        <CCol sm="12" md="6">
          <CCard>
            <CCardBody>
              <CRow>
                <CCol>
                  <CCard>
                    <CCardHeader>New Merchant Request</CCardHeader>
                    <CCardBody>
                      <CDataTable
                        items={responseData2}
                        fields={fields2}
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
                          Action: item => (
                            <td>
                              <CRow>
                                <CCol md="6">
                                  <CButton
                                    size="sm"
                                    onClick={() => {
                                      AcceptVendor (item.pkid);
                                    }}
                                    id="war-btn"
                                  >
                                    <ThumbUpAltSharpIcon />
                                    {item.status}
                                  </CButton>
                                </CCol>
                                <CCol md="4">
                                  <CButton
                                    size="sm"
                                    onClick={() => {
                                      RejectVendor (item.pkid);
                                    }}
                                    id="war-btn1"
                                  >
                                    <DeleteSharpIcon />
                                    {item.status}
                                  </CButton>
                                </CCol>
                              </CRow>
                            </td>
                          ),
                          'Merchant Type': item => <td>{item.merchantType}</td>,
                          'Sl No.': item => <td>{item.id}</td>,
                          Name: item => <td>{item.Shop}</td>,
                          Email: item => <td>{item.Email}</td>,
                          Mobile: item => <td>{item.Phone}</td>,
                          'Owner Name': item => <td>{item.ownerName}</td>,
                          Address: item => <td>{item.shopAdress}</td>,
                          'Reg Date': item => <td>{item.regDate}</td>,
                        }}
                      />
                    </CCardBody>
                  </CCard>
                </CCol>
              </CRow>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol sm="12" md="6">
          <CCard>
            <CCardBody>
              <CRow>
                <CCol>
                  <CCard>
                    <CCardHeader>New Rider Request</CCardHeader>
                    <CCardBody>
                      <CDataTable
                        items={responseData3}
                        fields={fields4}
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
                          Action: item => (
                            <td>
                              <CRow>
                                <CCol md="6">
                                  <CButton
                                    size="sm"
                                    onClick={() => {
                                      AcceptRider (item.pkid);
                                    }}
                                    id="war-btn"
                                  >
                                    <ThumbUpAltSharpIcon />
                                    {item.status}
                                  </CButton>
                                </CCol>
                                <CCol md="4">
                                  <CButton
                                    size="sm"
                                    onClick={() => {
                                      RejectRider (item.pkid);
                                    }}
                                    id="war-btn1"
                                  >
                                    <DeleteSharpIcon />
                                    {item.status}
                                  </CButton>
                                </CCol>
                              </CRow>
                            </td>
                          ),
                          'Sl No.': item => <td>{item.id}</td>,
                          Name: item => <td>{item.Rider}</td>,
                          Email: item => <td>{item.Email}</td>,
                          Mobile: item => <td>{item.Phone}</td>,
                          'DL No.': item => <td>{item.DLNo}</td>,
                          'Reg Date': item => <td>{item.regDate}</td>,
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

export default Dashboard;
