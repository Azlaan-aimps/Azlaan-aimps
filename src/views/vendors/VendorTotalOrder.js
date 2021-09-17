import React, {useState} from 'react';
import axios from 'axios';
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
  CButton,
} from '@coreui/react';
import TAABEDAR_SERVICE from 'src/services/service';
import '../../../src/style.css';

import {useHistory} from 'react-router-dom';
const table = {placeholder: 'Search here...', label: 'Search'};
const Rows = {label: 'Rows'};

const fields = [
  {key: 'OrderNo'},
  {key: 'Merchant'},
  {key: 'User'},
  {key: 'OrderAmount'},
  {key: 'Discount'},
  {key: 'Items'},
];

const Pendings = props => {
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
        '/GetVendorOrders/' +
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
      {/* <CRow>
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
        
      </CRow> */}

      <CRow>
        <CCol md="12">
          <CCard>
            <CCardBody>
              <h1 id="ccmaster">Vendor's Total Orders</h1>
              <CRow>
                <CCol>
                  <CCard>
                    <CCardHeader>Total Orders</CCardHeader>
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
                          Merchant: item => <td>{item.Shop}</td>,
                          OrderAmount: item => <td>{item.totalAmount}</td>,
                          Items: item => (
                            <td>
                              <CButton
                                id="order-list"
                                onClick={() => {
                                  history.push ('/VendorSubOrderItems', {
                                    data: item,
                                  });
                                }}
                              >
                                {item.Items}
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

export default Pendings;
