'use strict';
import React, {useState, useEffect} from 'react';
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
  CButton,
} from '@coreui/react';
import '../../style.css';
import axios from 'axios';
import TAABEDAR_SERVICE from 'src/services/service';
import {useHistory} from 'react-router';

const table = {placeholder: 'Search here...', label: 'Search'};
const Rows = {label: 'Rows'};

const order_Fields = [
  {key: 'SL No'},
  {key: 'Item Name'},
  {key: 'Item Price'},
  {key: 'Item Quantity'},
];

const Feedback_subOrdersItem = props => {
  const [subOrderItems, setSubOrderItems] = useState ();

  console.log ('this is props', props);

  const onLoadCall = () => {
    axios
      .get (
        TAABEDAR_SERVICE +
          '/GetProductItemBySuborderIdAndOrderId/' +
          props.location.state.data.orderId +
          '/' +
          props.location.state.data.item.subOrderPkid
      )
      .then (res => {
        console.log ('ser data', res);
        setSubOrderItems (res.data);
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
          <h1 id="ccmaster">Sub-Order Items</h1>
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
                        items={subOrderItems}
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
                          'Item Name': item => <td>{item.productName}</td>,
                          'Item Price': item => <td>{item.productPrice}</td>,
                          'Item Quantity': item => (
                            <td>{item.productQuantity}</td>
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

export default Feedback_subOrdersItem;
