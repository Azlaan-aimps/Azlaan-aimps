import React, {Component, useState} from 'react';
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
  CSelect,
  CInput,
  CLink,
  CLabel,
} from '@coreui/react';
import '../../../src/style.css';
import TAABEDAR_SERVICE from 'src/services/service';

import {useHistory} from 'react-router-dom';
import promoData from 'src/views/users/Payment';
const table = {placeholder: 'Search here...', label: 'Search'};
const Rows = {label: 'Rows'};

const fields = [
  {key: 'SLNO'},
  {key: 'OrderNo'},
  {key: 'Merchant'},
  {key: 'OrderAmount'},
  {key: 'Discount'},
  {key: 'FromAddress'},
  {key: 'ToAddress'},
  {key: 'Items'},
];

const UserSubOrdersDetails = props => {
  const [OrderDate, setOrderDate] = useState ();
  const [subOrderId, setsubOrderId] = useState ();
  const [OrderId, setOrderId] = useState ();

  React.useEffect (() => {
    GetTotalOrdres ();
  }, []);

  const GetTotalOrdres = () => {
    axios ({
      method: 'GET',
      url: TAABEDAR_SERVICE +
        '/GetUserSingleOrders/' +
        props.location.state.data.pkid +
        '',
      headers: {
        'content-type': 'application/json',
      },
    })
      .then (response => {
        console.log (response.data);
        setOrderDate (response.data);
        setsubOrderId (response.data[0].pkid);
        setOrderId (response.data[0].OrderPkid);
      })
      .catch (error => {
        console.log (error);
      });
  };

  let history = useHistory ();

  return (
    <div>
      <CRow>
        <CCol md="12">
          <CCard>
            <CCardBody>
              <h1 id="ccmaster">Single Order Details</h1>
              <CRow>
                <CCol>
                  <CCard>
                    <CCardHeader>Single Orders</CCardHeader>
                    <CCardBody>
                      <CDataTable
                        items={OrderDate}
                        fields={fields}
                        striped
                        itemsPerPage={5}
                        pagination
                        sorter
                        tableFilter={table}
                        itemsPerPageSelect={Rows}
                        scopedSlots={{
                          OrderNo: item => <td>{item.orderNumber}</td>,
                          SLNO: item => <td>{item.id}</td>,
                          Merchant: item => <td>{item.shopName}</td>,
                          OrderAmount: item => <td>{item.totalAmount}</td>,
                          Discount: item => <td>{item.Disacount}</td>,
                          FromAddress: item => <td>{item.formLocation}</td>,
                          ToAddress: item => <td>{item.toLocation}</td>,
                          Items: item => (
                            <td>
                              <CButton
                                id="order-list"
                                onClick={() => {
                                  history.push ('/UserOrderItems', {
                                    data: {subOrderId, OrderId},
                                  });
                                }}
                              >
                                {item.totalItems}
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

export default UserSubOrdersDetails;
