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
import {useHistory} from 'react-router-dom';
import TAABEDAR_SERVICE from 'src/services/service';
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
        '/GetUserMultipleOrders/' +
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

  const redirect = () => {
    history.push ('/VendorOrderDetails');
  };

  return (
    <div>
      <CRow>
        <CCol md="3" />
        <CCol md="6">
          <h1 id="ccmaster">Multiple Order Details</h1>
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
                    onClick={() => history.goBack ()}
                  >
                    Back
                  </CButton>
                </CCol>
              </CRow>
              <br />
              <CRow>
                <CCol>
                  <CCard>
                    <CCardHeader>Multiple Orders</CCardHeader>
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
