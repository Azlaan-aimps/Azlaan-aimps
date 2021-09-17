import React, {Component, useState} from 'react';
import axios from 'axios';
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

const table = {placeholder: 'Search here...', label: 'Search'};
const Rows = {label: 'Rows'};

const fields = [
  {key: 'SLNO'},
  {key: 'OrderNo'},
  {key: 'OrderAmount'},
  {key: 'Order_Date'},
  {key: 'Delivery_Charge'},
  {key: 'Total_Km'},
  {key: 'DeliveryBoy'},
  {key: 'Sub Orders'},
];

const UserTotalOrders = props => {
  const [OrderData, setOrderData] = useState ();

  React.useEffect (() => {
    GetTotalOrdres ();
  }, []);

  const GetTotalOrdres = () => {
    axios ({
      method: 'GET',
      url: TAABEDAR_SERVICE +
        '/GetUserTotalOrders/' +
        props.location.state.data.pkid +
        '',
      headers: {
        'content-type': 'application/json',
      },
    })
      .then (response => {
        setOrderData (response.data);
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
            <CCardHeader>
              <CRow>
                <CCol md="4">
                  <CLabel htmlFor="nf-email">Month</CLabel>
                  <CSelect custom name="Store" id="Store">
                    <option value="0">Jan</option>
                    <option value="1">Feb</option>
                    <option value="2">March</option>
                    <option value="3">Option #3</option>
                  </CSelect>
                </CCol>
                <CCol md="4">
                  <CLabel htmlFor="nf-email">From</CLabel>
                  <CInput type="date" />
                </CCol>
                <CCol md="4">
                  <CLabel htmlFor="nf-email">To</CLabel>
                  <CInput type="date" />
                </CCol>
              </CRow>
            </CCardHeader>
          </CCard>
        </CCol>
        <CCol md="3" />
        <CCol md="6">
          <h1 id="ccmaster">User Total Orders</h1>
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
                    <CCardHeader>Total Orders</CCardHeader>
                    <CCardBody>
                      <CDataTable
                        items={OrderData}
                        fields={fields}
                        striped
                        itemsPerPage={5}
                        pagination
                        sorter
                        tableFilter={table}
                        itemsPerPageSelect={Rows}
                        scopedSlots={{
                          SLNO: item => <td>{item.id}</td>,
                          OrderNo: item => <td>{item.ordernumber}</td>,
                          Merchant: item => <td>{item.Shop}</td>,
                          OrderAmount: item => <td>{item.amount}</td>,
                          Order_Date: item => <td>{item.odate}</td>,
                          Delivery_Charge: item => <td>{item.delcharge}</td>,
                          Total_Km: item => <td>{item.distance}</td>,
                          DeliveryBoy: item => <td>{item.ridername}</td>,
                          'Sub Orders': item => (
                            <td>
                              <CButton
                                id="order-list"
                                onClick={() => {
                                  history.push ('/UserSubOrdersDetails', {
                                    data: {item},
                                  });
                                }}
                              >
                                {item.suborder}
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

export default UserTotalOrders;
