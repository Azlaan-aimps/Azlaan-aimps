'use strict';
import React, {useState, useEffect} from 'react';
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
  {key: 'Order No'},
  {key: 'Order Amount'},
  {key: 'Order Date'},
  {key: 'Delivery Charge'},
  {key: 'Total Kms'},
  {key: 'Sub-Orders'},
];

const Feedback_usersOrder = props => {
  const [userOrder, setUserOrder] = useState ();

  const onLoadCall = () => {
    axios
      .get (
        TAABEDAR_SERVICE +
          '/GetUserOrderByFeedBack/' +
          props.location.state.data.pkid
      )
      .then (res => {
        console.log (res);
        setUserOrder (res.data);
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
          <h1 id="ccmaster">Order Details</h1>
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
                        items={userOrder}
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
                          'Order No': item => <td>{item.ordernumber}</td>,
                          'Order Date': item => <td>{item.odate}</td>,
                          'Order Amount': item => <td>{item.amount}</td>,
                          'Delivery Charge': item => <td>{item.delcharge}</td>,
                          'Total Kms': item => <td>{item.distance}</td>,
                          'Sub-Orders': item => (
                            <td>
                              <CButton
                                id="order-list"
                                onClick={() => {
                                  history.push ('/feedback_subOrders', {
                                    data: item,
                                  });
                                }}
                              >
                                <Badge
                                  badgeContent={item.suborder}
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

export default Feedback_usersOrder;
