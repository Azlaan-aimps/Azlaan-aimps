import React, {useState} from 'react';
import axios from 'axios';
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CDataTable,
  CLink,
  CButton,
} from '@coreui/react';
import {useHistory} from 'react-router';
import '../../../src/style.css';
import TAABEDAR_SERVICE from 'src/services/service';

const table = {placeholder: 'Search here...', label: 'Search:  '};
const items = {label: 'Rows:', values: [5, 10, 25, 50, 75, 100]};

const fields = [
  {key: 'shopName'},
  {key: 'merchantType'},
  {key: 'orderNumber'},
  {key: 'totalItems'},
  {key: 'formLocation'},
  {key: 'toLocation'},
  {key: 'orderDescription'},
];

const NonRespondedOrderDetails = props => {
  const [Spkid, setSpkid] = useState ();
  const [OrderDetails, setOrderDetails] = useState ();

  const {
    orderNumber,
    delAddress,
    userName,
    pkid,
    finalTotal,
    orderDate,
    Mobile,
  } = props.location.state.data;

  const history = useHistory ();

  const GetOrderDetails = () => {
    axios ({
      method: 'GET',
      url: TAABEDAR_SERVICE + '/GetSubOrderDetailsByOrderNumber/' + orderNumber,
      headers: {
        'content-type': 'application/json',
      },
      params: {
        language_code: 'en',
      },
    })
      .then (response => {
        console.log (response.data);
        setOrderDetails (response.data);
      })
      .catch (error => {
        console.log (error);
      });
  };

  React.useEffect (() => {
    GetOrderDetails ();
  }, []);

  return (
    <div>
      <CRow>
        <CCol md="3" />
        <CCol md="6">
          <h1 id="ccmaster">Order Details</h1>
        </CCol>
        <CCol md="3" />
      </CRow>
      <CRow>
        <CCol md="2" />
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
                    <CCardHeader>Order Details</CCardHeader>
                    <CCardBody>
                      <CRow>
                        <CCol md="6">
                          <p className="p1">Order Number :</p>
                          <p className="p1">Customer Name :</p>
                          <p className="p1">Delivery Address :</p>
                          <p className="p1">Mobile :</p>
                          <p className="p1">Order Date :</p>
                          <p className="p1">Total Amount :</p>
                        </CCol>
                        <CCol md="6">
                          <p className="p2">{orderNumber}</p>
                          <p className="p2">{userName}</p>
                          <p className="p2">{delAddress}</p>
                          <p className="p2">{Mobile}</p>
                          <p className="p2">{orderDate}</p>
                          <p className="p2">{finalTotal}</p>
                        </CCol>
                      </CRow>
                      <hr />
                      <CRow>
                        <CCol md="4">
                          <h4 className="p1">Sub Orders</h4>
                        </CCol>
                      </CRow>
                      <br />
                      <CDataTable
                        items={OrderDetails}
                        fields={fields}
                        striped
                        itemsPerPage={5}
                        pagination
                        sorter
                        size="sm"
                        tableFilter={table}
                        itemsPerPageSelect={items}
                        scopedSlots={{
                          totalItems: item => (
                            <td>
                              <CButton
                                id="order-list"
                                onClick={() => {
                                  history.push ('/NonRespondedSubOrders', {
                                    data: item,
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
        <CCol md="2" />
      </CRow>
    </div>
  );
};

export default NonRespondedOrderDetails;
