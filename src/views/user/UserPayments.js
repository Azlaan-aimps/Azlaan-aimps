import React, {useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

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
  CLabel,
  CSelect,
} from '@coreui/react';
import TAABEDAR_SERVICE from 'src/services/service';
import '../../../src/style.css';
import {useHistory} from 'react-router-dom';

const table = {placeholder: 'Search here...', label: 'Search'};
const Rows = {label: 'Rows'};

const fields = [
  {key: 'SLNO', _style: {backgroundColor: 'rgb(0,0,0)', color: '#fff'}},
  {key: 'Order_No', _style: {backgroundColor: 'rgb(0,0,0)', color: '#fff'}},
  {
    key: 'Amount_Recieved',
    _style: {backgroundColor: 'rgb(0,0,0)', color: '#fff'},
  },
  {
    key: 'Payment_Mode',
    _style: {backgroundColor: 'rgb(0,0,0)', color: '#fff'},
  },
  {key: 'Ref_No', _style: {backgroundColor: 'rgb(0,0,0)', color: '#fff'}},
  {
    key: 'Order_Date',
    _style: {backgroundColor: 'rgb(0,0,0)', color: '#fff'},
  },
  {
    key: 'Rider',
    _style: {backgroundColor: 'rgb(0,0,0)', color: '#fff'},
  },
];

const UserPayments = props => {
  const [responseData, setResponseData] = useState ('');
  const [PaymentSummary, setPaymentSummary] = useState ({
    CardTotal: '',
    JezzCashTotal: '',
    CODTotal: '',
    Total: '',
  });

  const fetchData = React.useCallback (() => {
    axios ({
      method: 'GET',
      url: TAABEDAR_SERVICE +
        '/GetUserPaymentHistory/' +
        props.location.state.data.pkid +
        '',
      headers: {
        'content-type': 'application/json',
      },
    })
      .then (response => {
        setResponseData (response.data);
      })
      .catch (error => {
        console.log (error);
      });
  }, []);

  const UserPaymentSummary = () => {
    axios ({
      method: 'GET',
      url: TAABEDAR_SERVICE +
        '/GetUserPaymentSummary/' +
        props.location.state.data.pkid +
        '',
      headers: {
        'content-type': 'application/json',
      },
    })
      .then (response => {
        setPaymentSummary ({
          CardTotal: response.data[0].cardtotal,
          JezzCashTotal: response.data[0].JezzCashTotal,
          CODTotal: response.data[0].codtotal,
          Total: response.data[0].Total,
        });
      })
      .catch (error => {
        console.log (error);
      });
  };

  React.useEffect (() => {
    fetchData ();
    UserPaymentSummary ();
  }, []);

  let history = useHistory ();

  const redirect = () => {
    history.push ('/RiderTotalOrder');
  };

  return (
    <div>
      <CRow>
        <CCol md="3" />
        <CCol md="6">
          <h1 id="ccmaster">Payments</h1>
        </CCol>
        <CCol md="3" />
      </CRow>
      <CRow>
        <CCol md="12">
          <CCard>
            <CCardBody>
              <CRow>
                <CCol>
                  <CCard>
                    <CCardHeader>Payments</CCardHeader>
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
                          SLNO: item => <td>{item.id}</td>,
                          Order_No: item => <td>{item.orderNumber}</td>,
                          Amount_Recieved: item => <td>{item.Amount}</td>,
                          Payment_Mode: item => <td>{item.paymentType}</td>,
                          Ref_No: item => <td>{item.paymentReference}</td>,
                          Order_Date: item => <td>{item.orderDate}</td>,
                          Rider: item => <td>{item.riderName}</td>,
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
                    <CCardHeader>Payment Summary</CCardHeader>
                    <CCardBody>
                      <p style={{fontSize: '12px'}}>
                        <span>Card Payments :</span> {PaymentSummary.CardTotal}
                      </p>
                      <p style={{fontSize: '12px'}}>
                        <span>Cash On Delivery :</span>{' '}
                        {PaymentSummary.CODTotal}
                      </p>
                      <p style={{fontSize: '12px'}}>
                        <span>Jezz Cash Payments :</span>{' '}
                        {PaymentSummary.JezzCashTotal}
                      </p>
                      <p style={{fontSize: '12px'}}>
                        <span>Total Payments :</span> {PaymentSummary.Total}
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

export default UserPayments;
