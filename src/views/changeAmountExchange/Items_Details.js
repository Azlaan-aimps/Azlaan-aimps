import React, {useEffect, useState} from 'react';
import {
  CCard,
  CCardBody,
  CCol,
  CDataTable,
  CRow,
  CLink,
  CButton,
  CLabel,
  CCardHeader,
} from '@coreui/react';
import '../../style.css';
import {useHistory, Link} from 'react-router-dom';
import TAABEDAR_SERVICE from 'src/services/service';
import axios from 'axios';

const fields = [
  {
    key: 'SL No',
  },
  {
    key: 'Item Name',
  },
  {
    key: 'Item Price',
  },
  {
    key: 'Item Quantity',
  },
];

const table = {placeholder: 'Search here...', label: 'Search:  '};
const items = {label: 'Rows', values: [5, 10, 25, 50, 75, 100]};

const Items_Details = props => {
  const [getData, setData] = useState ();
  const orderPkid = props.location.state.data.OrderId;
  const subOrderPkid = props.location.state.data.subOrderPkid;

  const history = useHistory ();

  const callOnLoad = () => {
    axios
      .get (
        TAABEDAR_SERVICE +
          '/GetProductItemBySuborderIdAndOrderId/' +
          orderPkid +
          '/' +
          subOrderPkid
      )
      .then (response => {
        setData (response.data);
        console.log ('this is console', response);
      })
      .catch (err => {
        console.log (err);
      });
  };

  useEffect (() => {
    callOnLoad ();
  }, []);

  return (
    <div>
      <CRow>
        <CCol col="10">
          <CCard>
            <CCardBody>
              <CRow>
                <CCol>
                  <CButton
                    color="danger"
                    size="sm"
                    id="backId"
                    onClick={() => history.goBack ()}
                  >
                    Back
                  </CButton>
                  <br /><br />
                  <CCard>
                    <CCardHeader>
                      <h1 id="ccmaster">Items Details</h1>
                    </CCardHeader>
                    <CCardBody>
                      <CDataTable
                        items={getData}
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

export default Items_Details;
