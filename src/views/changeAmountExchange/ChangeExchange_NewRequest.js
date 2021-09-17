import React, {useState, useEffect} from 'react';
import {
  CCard,
  CCardBody,
  CCol,
  CDataTable,
  CRow,
  CButton,
  CCardHeader,
  CLink,
} from '@coreui/react';
import '../../style.css';
import {useHistory} from 'react-router-dom';
import PaymentSharpIcon from '@material-ui/icons/PaymentSharp';
import axios from 'axios';

const fields = [
  {
    key: 'SL No',
  },
  {
    key: 'Date',
  },
  {
    key: 'OrderNo',
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
    key: 'Customer_Confirmation',
  },
  {
    key: 'Make Payment',
    _style: {width: '10%'},
  },
];

const table = {placeholder: 'Search here...', label: 'Search:  '};
const items = {label: 'Rows', values: [5, 10, 25, 50, 75, 100]};

const ChangeExchange_NewRequest = () => {
  const [requestData, setRequestData] = useState ();

  const history = useHistory ();

  const callOnload = () => {
    axios
      .get (
        'http://192.168.1.3:8086/Tabedar_Dashboard/resourses/projectservice/GetChangeExchangeRequest'
      )
      .then (res => {
        setRequestData (res.data);
      })
      .catch (err => {
        console.log (err);
      });
  };

  useEffect (() => {
    callOnload ();
  }, []);

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
                      <div>
                        <h1 id="ccmaster">Change New Request</h1>
                      </div>
                    </CCardHeader>
                    <CCardBody>
                      <CDataTable
                        items={requestData}
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
                          Customer_Confirmation: item => (
                            <td>{item.Confirmation}</td>
                          ),
                          'Make Payment': item => (
                            <td>
                              <CRow>
                                <CCol md="9">
                                  <CLink
                                    to={{
                                      pathname: '/JazzCashPayment',
                                      data: item,
                                    }}
                                  >
                                    <PaymentSharpIcon />
                                  </CLink>
                                </CCol>
                              </CRow>
                            </td>
                          ),
                          OrderNo: item => (
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

export default ChangeExchange_NewRequest;
