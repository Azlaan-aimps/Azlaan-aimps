import React, {useState} from 'react';
import PaymentIcon from '@material-ui/icons/Payment';
import axios from 'axios';
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
  CButton,
  CLink,
} from '@coreui/react';
import '../../style.css';
import TAABEDAR_SERVICE from 'src/services/service';
import CancelIcon from '@material-ui/icons/Cancel';
import {useHistory} from 'react-router';

const fields = [
  {
    key: 'SLNo',
  },
  {
    key: 'Date',
  },
  {
    key: 'OrderNo',
  },

  {
    key: 'Customer',
  },
  {
    key: 'Requested_Amount',
  },
  {
    key: 'Description',
  },

  {
    key: 'Make Payment',
  },
  {
    key: 'Reject',
  },
];

const table = {placeholder: 'Search here...', label: 'Search:  '};
const items = {label: 'Rows', values: [5, 10, 25, 50, 75, 100]};

const WalletNewRequest = () => {
  const [responseData, setResponseData] = useState ('');

  const GetWalletRefunds = () => {
    axios ({
      method: 'GET',
      url: TAABEDAR_SERVICE + '/GetNewRequestForRefund',
      headers: {
        'content-type': 'application/json',
      },
      params: {
        language_code: 'en',
      },
    })
      .then (response => {
        setResponseData (response.data);
        console.log (response.data);
      })
      .catch (error => {
        console.log (error);
      });
  };

  const RejectWallet = pkid => {
    axios ({
      method: 'GET',
      url: TAABEDAR_SERVICE + '/RejectUserRefundRequest/' + pkid + '',
      headers: {
        'content-type': 'application/json',
      },
      params: {
        language_code: 'en',
      },
    })
      .then (response => {
        console.log ('RejectWallet response :' + response.data);
        GetWalletRefunds ();
      })
      .catch (error => {
        console.log (error);
      });
  };

  React.useEffect (() => {
    GetWalletRefunds ();
  }, []);

  const history = useHistory ();

  return (
    <div>
      <h1 id="ccmaster">Wallet Amount Refund Requests</h1>
      <CRow>
        <CCol col="10">
          <CCard>
            <CCardBody>
              <CRow>
                <CCol>
                  <CCard>
                    <CCardHeader>Refund Requests</CCardHeader>
                    <CCardBody>
                      <CDataTable
                        items={responseData}
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
                          Customer: item => <td>{item.userName}</td>,
                          SLNo: item => <td>{item.id}</td>,
                          'Make Payment': item => (
                            <td>
                              <CLink
                                to={{
                                  pathname: '/WalletPayment',
                                  data: item,
                                }}
                              >
                                <PaymentIcon />
                              </CLink>
                            </td>
                          ),

                          Reject: item => (
                            <td>
                              <CButton
                                onClick={() => {
                                  RejectWallet (item.pkid);
                                }}
                                size="sm"
                                id="war-btn1"
                              >
                                <CancelIcon />
                                {item.status}
                              </CButton>
                            </td>
                          ),
                          OrderNo: item => (
                            <td>
                              <CButton
                                id="order-list"
                                onClick={() => {
                                  history.push ('/RefundOrderDetails', {
                                    data: item,
                                  });
                                }}
                              >
                                {item.orderNumber}
                              </CButton>
                            </td>
                          ),
                          Requested_Amount: item => <td>{item.Amount}</td>,
                          Description: item => <td>{item.Description}</td>,
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

export default WalletNewRequest;
