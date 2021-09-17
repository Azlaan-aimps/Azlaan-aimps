import React, {Component, useState} from 'react';
import axios from 'axios';
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
  CLink,
} from '@coreui/react';
import TAABEDAR_SERVICE from 'src/services/service';
import {useHistory} from 'react-router-dom';
import EditIcon from '@material-ui/icons/Edit';
import DetailsSharpIcon from '@material-ui/icons/DetailsSharp';
import usersData from '../users/UsersData';
import '../../style.css';
const table = {placeholder: 'Search here...', label: 'Search:  '};
const items = {label: 'Rows:', values: [5, 10, 25, 50, 75, 100]};

const fields = [{key: 'Details'}, {key: 'Country'}];
const fields1 = [
  {key: 'Details'},
  {key: 'Date'},
  {key: 'Deliver_Address'},
  {key: 'Order_Number'},
  {key: 'Sub_Orders'},
  {key: 'User'},
  {key: 'Rider'},
  {key: 'Order_Amount'},
  {key: 'Discount'},
  {key: 'Delivery_charge'},
  {key: 'Service_Charge'},
  {key: 'Final_Amount'},
];
const fields2 = [
  {key: 'Details'},
  {key: 'Date'},
  {key: 'Deliver_Address'},
  {key: 'Order_Number'},
  {key: 'Sub_Orders'},
  {key: 'User'},
  {key: 'Rider'},
  {key: 'Order_Amount'},
  {key: 'Discount'},
  {key: 'Delivery_charge'},
  {key: 'Service_Charge'},
  {key: 'Final_Amount'},
  {key: 'Cancel_Reason'},
];
const fields3 = [
  {key: 'Details'},
  {key: 'Date'},
  {key: 'Deliver_Address'},
  {key: 'Order_Number'},
  {key: 'Sub_Orders'},
  {key: 'User'},
  {key: 'Rider'},
  {key: 'Order_Amount'},
  {key: 'Discount'},
  {key: 'Delivery_charge'},
  {key: 'Service_Charge'},
  {key: 'Final_Amount'},
  {key: 'Delivered_Date'},
];

const Location_Master = () => {
  const [myMaster, setMyMaster] = useState ();
  const [fromDate, setFromDate] = useState ();
  const [toDate, setToDate] = useState ();
  const [Month, setMonth] = useState ();
  const [datedd, setDateDD] = useState ();
  const [datedd2, setDateDD2] = useState ();

  const filterData = () => {
    setDateDD (fromDate);
    setDateDD2 (toDate);
  };

  const Stmt = () => {
    if (myMaster === 'Approved') {
      return (
        <ApprovedOrders fromDate={datedd} toDate={datedd2} Month={Month} />
      );
    } else if (myMaster === 'Ongoing') {
      return <OngoingOrders fromDate={datedd} toDate={datedd2} Month={Month} />;
    } else if (myMaster === 'Completed') {
      return (
        <CompletedOrders fromDate={datedd} toDate={datedd2} Month={Month} />
      );
    } else if (myMaster === 'Cancel') {
      return <CancelOrders fromDate={datedd} toDate={datedd2} Month={Month} />;
    } else if (myMaster === 'delay') {
      return <DelayOrders fromDate={datedd} toDate={datedd2} Month={Month} />;
    } else {
      return <PendingOrders Month={Month} fromDate={datedd} toDate={datedd2} />;
    }
  };

  return (
    <div id="Locroot">
      <CCard>
        <CCardHeader id="ccheader">Orders Details</CCardHeader>

        <CCardBody id="Loccard">
          <CRow className="align-items-center" style={{marginBottom: '20px'}}>
            <CCol md="3">
              <CLabel htmlFor="nf-email">Month</CLabel>
              <CSelect
                custom
                name="Store"
                onChange={event => {
                  setMonth (event.target.value);
                }}
                id="Store"
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
              <CLabel htmlFor="nf-email">From</CLabel>
              <CInput
                type="date"
                value={fromDate}
                onChange={event => {
                  setFromDate (event.target.value);
                }}
              />
            </CCol>
            <CCol md="2">
              <CLabel htmlFor="nf-email">To</CLabel>
              <CInput
                type="date"
                value={toDate}
                onChange={event => {
                  setToDate (event.target.value);
                }}
              />
            </CCol>
            <CCol md="2">
              <CButton
                size="sm"
                color="info"
                style={{'margin-top': '28px', width: '100%'}}
                onClick={filterData}
              >
                Filter
              </CButton>
            </CCol>
          </CRow>
          <hr />

          <CRow className="align-items-center">
            <CCol md="2" className="mb-3 mb-xl-0">
              <CButton
                block
                color="danger"
                className="custom-btn-colors"
                onClick={() => setMyMaster ('Pending')}
              >
                Pending Orders
              </CButton>
            </CCol>
            <CCol md="2" className="mb-3 mb-xl-0">
              <CButton
                block
                color="danger"
                className="custom-btn-colors"
                onClick={() => setMyMaster ('Approved')}
              >
                Approved Orders
              </CButton>
            </CCol>

            <CCol md="2" className="mb-3 mb-xl-0">
              <CButton
                block
                color="danger"
                className="custom-btn-colors"
                onClick={() => setMyMaster ('Ongoing')}
              >
                Ongoing Orders
              </CButton>
            </CCol>
            <CCol md="2" className="mb-3 mb-xl-0">
              <CButton
                block
                color="danger"
                className="custom-btn-colors"
                onClick={() => setMyMaster ('Completed')}
              >
                Completed Orders
              </CButton>
            </CCol>
            <CCol md="2" className="mb-3 mb-xl-0">
              <CButton
                block
                color="danger"
                className="custom-btn-colors"
                onClick={() => setMyMaster ('Cancel')}
              >
                Cancelled Orders
              </CButton>
            </CCol>

            <CCol md="2" className="mb-3 mb-xl-0">
              <CButton
                block
                color="danger"
                className="custom-btn-colors"
                onClick={() => setMyMaster ('delay')}
              >
                Delayed Orders
              </CButton>
            </CCol>
          </CRow>
        </CCardBody>
      </CCard>
      <div>{Stmt ()}</div>
    </div>
  );
};

const CancelOrders = props => {
  const [CancelledOrders, setCancelledOrders] = useState ();
  const GetCancelledOrders = () => {
    if (props.Month != undefined) {
      axios ({
        method: 'GET',
        url: TAABEDAR_SERVICE + '/CancelOrders/1/' + props.Month + '/-/-',
        headers: {
          'content-type': 'application/json',
        },
      })
        .then (response => {
          setCancelledOrders (response.data);
        })
        .catch (error => {
          console.log (error);
        });
    } else if (
      props.fromDate == undefined ||
      props.fromDate == '' ||
      (props.fromDate == null &&
        (props.Month == undefined || props.Month == '' || props.Month == null))
    ) {
      axios ({
        method: 'GET',
        url: TAABEDAR_SERVICE + '/CancelOrders/0/-/-/-',
        headers: {
          'content-type': 'application/json',
        },
      })
        .then (response => {
          setCancelledOrders (response.data);
        })
        .catch (error => {
          console.log (error);
        });
    } else if (props.fromDate != undefined) {
      axios ({
        method: 'GET',
        url: TAABEDAR_SERVICE +
          '/CancelOrders/2/-/' +
          props.fromDate +
          '/' +
          props.toDate +
          '',
        headers: {
          'content-type': 'application/json',
        },
      })
        .then (response => {
          setCancelledOrders (response.data);
        })
        .catch (error => {
          console.log (error);
        });
    } else if (props.fromDate != undefined && props.Month != undefined) {
      axios ({
        method: 'GET',
        url: TAABEDAR_SERVICE +
          '/CancelOrders/3/' +
          props.Month +
          '/' +
          props.fromDate +
          '/' +
          props.toDate +
          '',
        headers: {
          'content-type': 'application/json',
        },
      })
        .then (response => {
          setCancelledOrders (response.data);
        })
        .catch (error => {
          console.log (error);
        });
    }
  };

  React.useEffect (
    () => {
      GetCancelledOrders ();
    },
    [props.Month, props.fromDate]
  );

  let history = useHistory ();

  return (
    <div>
      <CRow>
        <CCol col="12">
          <CCard>
            <CCardBody>
              <CRow>
                <CCol>
                  <CCard>
                    <CCardHeader>Cancelled Orders</CCardHeader>
                    <CCardBody>
                      <CDataTable
                        items={CancelledOrders}
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
                          Date: item => <td>{item.OrderDate}</td>,
                          Deliver_Address: item => <td>{item.DelAddress}</td>,
                          Order_Number: item => <td>{item.OrderNumber}</td>,
                          Sub_Orders: item => <td>{item.SubOrdercnt}</td>,
                          User: item => <td>{item.UserName}</td>,
                          Rider: item => <td>{item.RiderName}</td>,
                          Order_Amount: item => <td>{item.OrderAmount}</td>,
                          Discount: item => <td>{item.Discount}</td>,
                          Delivery_charge: item => <td>{item.DelCharge}</td>,
                          Service_Charge: item => <td>{item.ServiceCharge}</td>,
                          Final_Amount: item => <td>{item.FinalAmount}</td>,
                          Cancel_Reason: item => <td>{item.CancellReason}</td>,
                          Details: item => (
                            <td>
                              <CButton
                                onClick={() => {
                                  history.push ('/SubOrderDetails', {
                                    data: item,
                                  });
                                }}
                              >
                                <DetailsSharpIcon />
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
    </div>
  );
};

const DelayOrders = props => {
  const [DelayOrders, setDelayOrders] = useState ();
  const GetDelayedOrders = () => {
    if (props.Month != undefined) {
      axios ({
        method: 'GET',
        url: TAABEDAR_SERVICE + '/DelayOrders/1/' + props.Month + '/-/-',
        headers: {
          'content-type': 'application/json',
        },
      })
        .then (response => {
          setDelayOrders (response.data);
        })
        .catch (error => {
          console.log (error);
        });
    } else if (
      props.fromDate == undefined ||
      props.fromDate == '' ||
      (props.fromDate == null &&
        (props.Month == undefined || props.Month == '' || props.Month == null))
    ) {
      axios ({
        method: 'GET',
        url: TAABEDAR_SERVICE + '/DelayOrders/0/-/-/-',
        headers: {
          'content-type': 'application/json',
        },
      })
        .then (response => {
          setDelayOrders (response.data);
        })
        .catch (error => {
          console.log (error);
        });
    } else if (props.fromDate != undefined) {
      axios ({
        method: 'GET',
        url: TAABEDAR_SERVICE +
          '/DelayOrders/2/-/' +
          props.fromDate +
          '/' +
          props.toDate +
          '',
        headers: {
          'content-type': 'application/json',
        },
      })
        .then (response => {
          setDelayOrders (response.data);
        })
        .catch (error => {
          console.log (error);
        });
    } else if (props.fromDate != undefined && props.Month != undefined) {
      axios ({
        method: 'GET',
        url: TAABEDAR_SERVICE +
          '/DelayOrders/3/' +
          props.Month +
          '/' +
          props.fromDate +
          '/' +
          props.toDate +
          '',
        headers: {
          'content-type': 'application/json',
        },
      })
        .then (response => {
          setDelayOrders (response.data);
        })
        .catch (error => {
          console.log (error);
        });
    }
  };

  React.useEffect (
    () => {
      GetDelayedOrders ();
    },
    [props.Month, props.fromDate]
  );

  let history = useHistory ();
  const redirect1 = () => {
    history.push ('/OrderDetails');
  };
  return (
    <div>
      <CRow>
        <CCol col="12">
          <CCard>
            <CCardBody>
              <CRow>
                <CCol>
                  <CCard>
                    <CCardHeader>Delayed Orders</CCardHeader>
                    <CCardBody>
                      <CDataTable
                        items={DelayOrders}
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
                          Date: item => <td>{item.OrderDate}</td>,
                          Deliver_Address: item => <td>{item.DelAddress}</td>,
                          Order_Number: item => <td>{item.OrderNumber}</td>,
                          Sub_Orders: item => <td>{item.SubOrdercnt}</td>,
                          User: item => <td>{item.UserName}</td>,
                          Rider: item => <td>{item.RiderName}</td>,
                          Order_Amount: item => <td>{item.OrderAmount}</td>,
                          Discount: item => <td>{item.Discount}</td>,
                          Delivery_charge: item => <td>{item.DelCharge}</td>,
                          Service_Charge: item => <td>{item.ServiceCharge}</td>,
                          Final_Amount: item => <td>{item.FinalAmount}</td>,
                          Details: item => (
                            <td>
                              <CButton
                                onClick={() => {
                                  history.push ('/SubOrderDetails', {
                                    data: item,
                                  });
                                }}
                              >
                                <DetailsSharpIcon />
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
    </div>
  );
};

const PendingOrders = props => {
  console.log ('pem', props.data);
  console.log ('pem', props.data2);
  const [PendingOrder, setPendingOrder] = useState ();
  const GetPendingOrder = () => {
    if (props.Month != undefined) {
      axios ({
        method: 'GET',
        url: TAABEDAR_SERVICE + '/PendingOrders/1/' + props.Month + '/-/-',
        headers: {
          'content-type': 'application/json',
        },
      })
        .then (response => {
          setPendingOrder (response.data);
        })
        .catch (error => {
          console.log (error);
        });
    } else if (
      props.fromDate == undefined ||
      props.fromDate == '' ||
      (props.fromDate == null &&
        (props.Month == undefined || props.Month == '' || props.Month == null))
    ) {
      axios ({
        method: 'GET',
        url: TAABEDAR_SERVICE + '/PendingOrders/0/-/-/-',
        headers: {
          'content-type': 'application/json',
        },
      })
        .then (response => {
          setPendingOrder (response.data);
        })
        .catch (error => {
          console.log (error);
        });
    } else if (props.fromDate != undefined) {
      axios ({
        method: 'GET',
        url: TAABEDAR_SERVICE +
          '/PendingOrders/2/-/' +
          props.fromDate +
          '/' +
          props.toDate +
          '',
        headers: {
          'content-type': 'application/json',
        },
      })
        .then (response => {
          setPendingOrder (response.data);
        })
        .catch (error => {
          console.log (error);
        });
    } else if (props.fromDate != undefined && props.Month != undefined) {
      axios ({
        method: 'GET',
        url: TAABEDAR_SERVICE +
          '/PendingOrders/3/' +
          props.Month +
          '/' +
          props.fromDate +
          '/' +
          props.toDate +
          '',
        headers: {
          'content-type': 'application/json',
        },
      })
        .then (response => {
          setPendingOrder (response.data);
        })
        .catch (error => {
          console.log (error);
        });
    }
  };

  React.useEffect (
    () => {
      GetPendingOrder ();
    },
    [props.Month, props.fromDate]
  );

  let history = useHistory ();
  const redirect1 = () => {
    history.push ('/OrderDetails');
  };

  return (
    <div>
      <CRow>
        <CCol col="12">
          <CCard>
            <CCardBody>
              <CRow>
                <CCol>
                  <CCard>
                    <CCardHeader>Pending Orders</CCardHeader>
                    <CCardBody>
                      <CDataTable
                        items={PendingOrder}
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
                          Date: item => <td>{item.OrderDate}</td>,
                          Deliver_Address: item => <td>{item.DelAddress}</td>,
                          Order_Number: item => <td>{item.OrderNumber}</td>,
                          Sub_Orders: item => <td>{item.SubOrdercnt}</td>,
                          User: item => <td>{item.UserName}</td>,
                          Rider: item => <td>{item.RiderName}</td>,
                          Order_Amount: item => <td>{item.OrderAmount}</td>,
                          Discount: item => <td>{item.Discount}</td>,
                          Delivery_charge: item => <td>{item.DelCharge}</td>,
                          Service_Charge: item => <td>{item.ServiceCharge}</td>,
                          Final_Amount: item => <td>{item.FinalAmount}</td>,
                          Details: item => (
                            <td>
                              <CButton
                                onClick={() => {
                                  history.push ('/SubOrderDetails', {
                                    data: item,
                                  });
                                }}
                              >
                                <DetailsSharpIcon />
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
    </div>
  );
};

const ApprovedOrders = props => {
  const [ApprovedOrder, setApprovedOrder] = useState ();
  const GetApprovedOrders = () => {
    if (props.Month != undefined) {
      axios ({
        method: 'GET',
        url: TAABEDAR_SERVICE + '/ApprovedOrders/1/' + props.Month + '/-/-',
        headers: {
          'content-type': 'application/json',
        },
      })
        .then (response => {
          setApprovedOrder (response.data);
        })
        .catch (error => {
          console.log (error);
        });
    } else if (
      props.fromDate == undefined ||
      props.fromDate == '' ||
      (props.fromDate == null &&
        (props.Month == undefined || props.Month == '' || props.Month == null))
    ) {
      axios ({
        method: 'GET',
        url: TAABEDAR_SERVICE + '/ApprovedOrders/0/-/-/-',
        headers: {
          'content-type': 'application/json',
        },
      })
        .then (response => {
          setApprovedOrder (response.data);
        })
        .catch (error => {
          console.log (error);
        });
    } else if (props.fromDate != undefined) {
      console.log (props.fromDate);
      console.log (props.toDate);
      axios ({
        method: 'GET',
        url: TAABEDAR_SERVICE +
          '/ApprovedOrders/2/-/' +
          props.fromDate +
          '/' +
          props.toDate +
          '',
        headers: {
          'content-type': 'application/json',
        },
      })
        .then (response => {
          setApprovedOrder (response.data);
        })
        .catch (error => {
          console.log (error);
        });
    } else if (props.fromDate != undefined && props.Month != undefined) {
      axios ({
        method: 'GET',
        url: TAABEDAR_SERVICE +
          '/ApprovedOrders/3/' +
          props.Month +
          '/' +
          props.fromDate +
          '/' +
          props.toDate +
          '',
        headers: {
          'content-type': 'application/json',
        },
      })
        .then (response => {
          setApprovedOrder (response.data);
        })
        .catch (error => {
          console.log (error);
        });
    }
  };

  React.useEffect (
    () => {
      GetApprovedOrders ();
    },
    [props.Month, props.fromDate]
  );

  let history = useHistory ();
  const redirect1 = () => {
    history.push ('/OrderDetails');
  };
  return (
    <div>
      <CRow>
        <CCol col="12">
          <CCard>
            <CCardBody>
              <CRow>
                <CCol>
                  <CCard>
                    <CCardHeader>Approved Orders</CCardHeader>
                    <CCardBody>
                      <CDataTable
                        items={ApprovedOrder}
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
                          Date: item => <td>{item.OrderDate}</td>,
                          Deliver_Address: item => <td>{item.DelAddress}</td>,
                          Order_Number: item => <td>{item.OrderNumber}</td>,
                          Sub_Orders: item => <td>{item.SubOrdercnt}</td>,
                          User: item => <td>{item.UserName}</td>,
                          Rider: item => <td>{item.RiderName}</td>,
                          Order_Amount: item => <td>{item.OrderAmount}</td>,
                          Discount: item => <td>{item.Discount}</td>,
                          Delivery_charge: item => <td>{item.DelCharge}</td>,
                          Service_Charge: item => <td>{item.ServiceCharge}</td>,
                          Final_Amount: item => <td>{item.FinalAmount}</td>,

                          Details: item => (
                            <td>
                              <CButton
                                onClick={() => {
                                  history.push ('/SubOrderDetails', {
                                    data: item,
                                  });
                                }}
                              >
                                <DetailsSharpIcon />
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
    </div>
  );
};

const OngoingOrders = props => {
  const [OnGoingOrders, setOnGoingOrders] = useState ();
  const GetOngoingOrders = () => {
    if (props.Month != undefined) {
      axios ({
        method: 'GET',
        url: TAABEDAR_SERVICE + '/OngoingOrders/1/' + props.Month + '/-/-',
        headers: {
          'content-type': 'application/json',
        },
      })
        .then (response => {
          setOnGoingOrders (response.data);
        })
        .catch (error => {
          console.log (error);
        });
    } else if (
      props.fromDate == undefined ||
      props.fromDate == '' ||
      (props.fromDate == null &&
        (props.Month == undefined || props.Month == '' || props.Month == null))
    ) {
      axios ({
        method: 'GET',
        url: TAABEDAR_SERVICE + '/OngoingOrders/0/-/-/-',
        headers: {
          'content-type': 'application/json',
        },
      })
        .then (response => {
          setOnGoingOrders (response.data);
        })
        .catch (error => {
          console.log (error);
        });
    } else if (props.fromDate != undefined) {
      axios ({
        method: 'GET',
        url: TAABEDAR_SERVICE +
          '/OngoingOrders/2/-/' +
          props.fromDate +
          '/' +
          props.toDate +
          '',
        headers: {
          'content-type': 'application/json',
        },
      })
        .then (response => {
          setOnGoingOrders (response.data);
        })
        .catch (error => {
          console.log (error);
        });
    } else if (props.fromDate != undefined && props.Month != undefined) {
      axios ({
        method: 'GET',
        url: TAABEDAR_SERVICE +
          '/OngoingOrders/3/' +
          props.Month +
          '/' +
          props.fromDate +
          '/' +
          props.toDate +
          '',
        headers: {
          'content-type': 'application/json',
        },
      })
        .then (response => {
          setOnGoingOrders (response.data);
        })
        .catch (error => {
          console.log (error);
        });
    }
  };

  React.useEffect (
    () => {
      GetOngoingOrders ();
    },
    [props.Month, props.fromDate]
  );

  let history = useHistory ();
  const redirect1 = () => {
    history.push ('/OrderDetails');
  };
  return (
    <div>
      <CRow>
        <CCol col="12">
          <CCard>
            <CCardBody>
              <CRow>
                <CCol>
                  <CCard>
                    <CCardHeader>Ongoing Orders</CCardHeader>
                    <CCardBody>
                      <CDataTable
                        items={OnGoingOrders}
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
                          Date: item => <td>{item.OrderDate}</td>,
                          Deliver_Address: item => <td>{item.DelAddress}</td>,
                          Order_Number: item => <td>{item.OrderNumber}</td>,
                          Sub_Orders: item => <td>{item.SubOrdercnt}</td>,
                          User: item => <td>{item.UserName}</td>,
                          Rider: item => <td>{item.RiderName}</td>,
                          Order_Amount: item => <td>{item.OrderAmount}</td>,
                          Discount: item => <td>{item.Discount}</td>,
                          Delivery_charge: item => <td>{item.DelCharge}</td>,
                          Service_Charge: item => <td>{item.ServiceCharge}</td>,
                          Final_Amount: item => <td>{item.FinalAmount}</td>,

                          Details: item => (
                            <td>
                              <CButton
                                onClick={() => {
                                  history.push ('/SubOrderDetails', {
                                    data: item,
                                  });
                                }}
                              >
                                <DetailsSharpIcon />
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
    </div>
  );
};

const CompletedOrders = props => {
  const [CompletedOrders, setCompletedOrders] = useState ();
  const GetCompletedOrder = () => {
    if (props.Month != undefined) {
      axios ({
        method: 'GET',
        url: TAABEDAR_SERVICE + '/CompletedOrders/1/' + props.Month + '/-/-',
        headers: {
          'content-type': 'application/json',
        },
      })
        .then (response => {
          setCompletedOrders (response.data);
        })
        .catch (error => {
          console.log (error);
        });
    } else if (
      props.fromDate == undefined ||
      props.fromDate == '' ||
      (props.fromDate == null &&
        (props.Month == undefined || props.Month == '' || props.Month == null))
    ) {
      axios ({
        method: 'GET',
        url: TAABEDAR_SERVICE + '/CompletedOrders/0/-/-/-',
        headers: {
          'content-type': 'application/json',
        },
      })
        .then (response => {
          setCompletedOrders (response.data);
        })
        .catch (error => {
          console.log (error);
        });
    } else if (props.fromDate != undefined) {
      axios ({
        method: 'GET',
        url: TAABEDAR_SERVICE +
          '/CompletedOrders/2/-/' +
          props.fromDate +
          '/' +
          props.toDate +
          '',
        headers: {
          'content-type': 'application/json',
        },
      })
        .then (response => {
          setCompletedOrders (response.data);
        })
        .catch (error => {
          console.log (error);
        });
    } else if (props.fromDate != undefined && props.Month != undefined) {
      axios ({
        method: 'GET',
        url: TAABEDAR_SERVICE +
          '/CompletedOrders/3/' +
          props.Month +
          '/' +
          props.fromDate +
          '/' +
          props.toDate +
          '',
        headers: {
          'content-type': 'application/json',
        },
      })
        .then (response => {
          setCompletedOrders (response.data);
        })
        .catch (error => {
          console.log (error);
        });
    }
  };

  React.useEffect (
    () => {
      GetCompletedOrder ();
    },
    [props.Month, props.fromDate]
  );

  let history = useHistory ();
  const redirect1 = () => {
    history.push ('/OrderDetails');
  };
  return (
    <div>
      <CRow>
        <CCol col="12">
          <CCard>
            <CCardBody>
              <CRow>
                <CCol>
                  <CCard>
                    <CCardHeader>Completed Orders</CCardHeader>
                    <CCardBody>
                      <CDataTable
                        items={CompletedOrders}
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
                          Date: item => <td>{item.OrderDate}</td>,
                          Deliver_Address: item => <td>{item.DelAddress}</td>,
                          Order_Number: item => <td>{item.OrderNumber}</td>,
                          Sub_Orders: item => <td>{item.SubOrdercnt}</td>,
                          User: item => <td>{item.UserName}</td>,
                          Rider: item => <td>{item.RiderName}</td>,
                          Order_Amount: item => <td>{item.OrderAmount}</td>,
                          Discount: item => <td>{item.Discount}</td>,
                          Delivery_charge: item => <td>{item.DelCharge}</td>,
                          Service_Charge: item => <td>{item.ServiceCharge}</td>,
                          Final_Amount: item => <td>{item.FinalAmount}</td>,
                          Delivered_Date: item => <td>{item.DelDate}</td>,

                          Details: item => (
                            <td>
                              <CButton
                                onClick={() => {
                                  history.push ('/SubOrderDetails', {
                                    data: item,
                                  });
                                }}
                              >
                                <DetailsSharpIcon />
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
    </div>
  );
};
export default Location_Master;
