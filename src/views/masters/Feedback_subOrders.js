'use strict';
import React, {useState, useEffect} from 'react';
import DeleteSharpIcon from '@material-ui/icons/DeleteSharp';
import {Badge} from '@material-ui/core';
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
  CButton,
  CLink,
  CBadge,
} from '@coreui/react';
import RateReviewSharpIcon from '@material-ui/icons/RateReviewSharp';
import '../../style.css';
import axios from 'axios';
import TAABEDAR_SERVICE from 'src/services/service';
import {useHistory} from 'react-router';

const table = {placeholder: 'Search here...', label: 'Search'};
const Rows = {label: 'Rows'};

const order_Fields = [
  {key: 'SL No'},
  {key: 'Sub-Order No'},
  {key: 'Vendor'},
  {key: 'Order Amount'},
  {key: 'From Address'},
  {key: 'To Address'},
  {key: 'Items'},
];

const Feedback_subOrders = props => {
  const [subOrder, setSubOrder] = useState ();

  const orderId = props.location.state.data.OrderId;

  const onLoadCall = () => {
    axios
      .get (
        TAABEDAR_SERVICE +
          '/GetSubOrdersByUserFeedback/' +
          props.location.state.data.id
      )
      .then (res => {
        console.log (res);
        setSubOrder (res.data);
      })
      .catch (err => {
        console.log (err);
      });
  };

  useEffect (() => {
    onLoadCall ();
  }, []);

  const history = useHistory ();

  return (
    <div>
      <CRow>
        <CCol md="3" />
        <CCol md="6">
          <h1 id="ccmaster">Sub-Order Details</h1>
        </CCol>
        <CCol md="3" />
      </CRow>
      <CRow>
        <CCol col="10">
          <CCard id="city-table">
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
                    <CCardHeader>
                      Feedback
                    </CCardHeader>
                    <CCardBody>
                      <CDataTable
                        items={subOrder}
                        fields={order_Fields}
                        hover
                        striped
                        bordered
                        sorter
                        tableFilter={table}
                        itemsPerPageSelect={Rows}
                        columnFilterSlot
                        size="sm"
                        itemsPerPage={4}
                        pagination
                        scopedSlots={{
                          'SL No': item => <td>{item.id}</td>,
                          'Sub-Order No': item => <td>{item.orderNumber}</td>,
                          Vendor: item => <td>{item.shopName}</td>,
                          'Order Amount': item => <td>{item.totalAmount}</td>,
                          'From Address': item => <td>{item.formLocation}</td>,
                          'To Address': item => <td>{item.toLocation}</td>,
                          Items: item => (
                            <td>
                              <CButton
                                id="order-list"
                                onClick={() => {
                                  history.push ('/Feedback_subOrdersItem', {
                                    data: {item, orderId},
                                  });
                                }}
                              >
                                <Badge
                                  badgeContent={item.totalItems}
                                  color="primary"
                                >
                                  <RateReviewSharpIcon fontSize="medium" />
                                </Badge>
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

export default Feedback_subOrders;
