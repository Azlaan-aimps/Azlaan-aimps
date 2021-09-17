import React, {useEffect, useState} from 'react';
import {
  CCard,
  CCardBody,
  CCol,
  CDataTable,
  CRow,
  CInput,
  CButton,
  CLabel,
  CCardHeader,
  CLink,
} from '@coreui/react';
import '../../style.css';
import {useHistory} from 'react-router-dom';
import TAABEDAR_SERVICE from 'src/services/service';
import axios from 'axios';


const fields = [
  {
    key: 'SL No',
  },
  {
    key: 'Date',
  },
  {
    key: 'Order No',
  },
  {
    key: 'Order Amount',
  },
  {
    key: 'Customer',
  },
  {
    key: 'Rider',
  },
  {
    key: 'Change_Amount',
  },
  {
    key: 'Payment_Status',
  },
  {
    key: 'Reference_No',
  },
];

const table = {placeholder: 'Search here...', label: 'Search:  '};
const items = {label: 'Rows', values: [5, 10, 25, 50, 75, 100]};

const Completed_Request = () => {
  const [getCompletedData, setGetCompletedData] = useState ();
  const [fromDate, setFromDate] = useState ();
  const [toDate, setToDate] = useState ();

  const from_Date = event => {
    setFromDate (event.target.value);
  };

  const to_Date = event => {
    setToDate (event.target.value);
  };

  const callOnLoad = () => {
    axios
      .get (TAABEDAR_SERVICE + '/CompletedChangeExchangeRequest')
      .then (response => {
        setGetCompletedData (response.data);
      })
      .catch (err => {
        console.log (err);
      });
  };

  const filterCall = () => {
    axios
      .get (
        TAABEDAR_SERVICE +
          '/CompletedChangeExchangeRequestFilter/' +
          fromDate +
          '/' +
          toDate
      )
      .then (response => {
        setGetCompletedData (response.data);
        console.log (response);
      })
      .catch (err => {
        console.log (err);
      });
  };

  useEffect (() => {
    callOnLoad ();
  }, []);

  const history = useHistory ();

  return (
    <div>
      <CRow>
        <CCol col="10">
          <CCard>
            <CCardBody>
              <CRow>
                <CCol>
                  <CCard>
                    <CCardHeader>
                      <h1 id="ccmaster">Completed Change Requestes</h1>
                      <CRow>
                        <CCol md="3">
                          <CLabel>From:</CLabel>
                          <CInput type="date" onChange={from_Date} />
                        </CCol>
                        <CCol md="3">
                          <CLabel>To:</CLabel>
                          <CInput type="date" onChange={to_Date} />
                        </CCol>
                        <CCol md="2">
                          <CButton
                            size="sm"
                            color="info"
                            style={{'margin-top': '28px', width: '100%'}}
                            onClick={filterCall}
                          >
                            Filter
                          </CButton>
                        </CCol>
                        <CCol md="2">
                          <CButton
                            size="sm"
                            color="danger"
                            style={{'margin-top': '28px', width: '100%'}}
                            onClick={callOnLoad}
                          >
                            Reset
                          </CButton>
                        </CCol>
                      </CRow>
                    </CCardHeader>
                    <CCardBody>
                      <CDataTable
                        items={getCompletedData}
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
                          'SL No': item => <td>{item.id}</td>,
                          'Order Amount': item => <td>{item.orderAmount}</td>,
                          Customer: item => <td>{item.userName}</td>,
                          Rider: item => <td>{item.riderName}</td>,
                          Change_Amount: item => <td>{item.Amount}</td>,
                          'Order No': item => {
                            return (
                              <td>
                                <CRow>
                                  <CCol md="9">
                                    <CButton
                                      id="order-list"
                                      onClick={() => {
                                        history.push ('/Change_OrderDetails', {
                                          data: item,
                                        });
                                      }}
                                    >
                                      {item.orderNumber}
                                    </CButton>
                                  </CCol>
                                </CRow>
                              </td>
                            );
                          },
                          Payment_Status: item => (
                            <td>
                              {item.paymentStatus}
                            </td>
                          ),
                          Reference_No: item => (
                            <td>
                              {item.Reference}
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

export default Completed_Request;
