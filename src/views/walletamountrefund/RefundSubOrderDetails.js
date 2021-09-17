import React, {useState} from 'react';
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CDataTable,
  CButton,
} from '@coreui/react';
import axios from 'axios';
import '../../../src/style.css';
import TAABEDAR_SERVICE from 'src/services/service';
import { useHistory } from 'react-router';

const table = {placeholder: 'Search here...', label: 'Search:  '};
const items = {label: 'Rows:', values: [5, 10, 25, 50, 75, 100]};

const fields = [
  {key: 'SI No.'},
  {key: 'Product Name'},
  {key: 'Product Price'},
  {key: 'Product Quantity'},
];
const RefundSubOrderDetails = props => {
  const Orderpkid = props.location.state.data.Orderpkid;
  const subOrderPkid = props.location.state.data.item.subOrderPkid;

  const [SubOrderDetails, setSubOrderDetails] = useState ();

  const GetOrderDetails = () => {
    axios ({
      method: 'GET',
      url: TAABEDAR_SERVICE +
        '/GetProductItemBySuborderIdAndOrderId/' +
        Orderpkid +
        '/' +
        subOrderPkid,
      headers: {
        'content-type': 'application/json',
      },
      params: {
        language_code: 'en',
      },
    })
      .then (response => {
        setSubOrderDetails (response.data);
        console.log (response.data);
      })
      .catch (error => {
        console.log (error);
      });
  };

  React.useEffect (() => {
    GetOrderDetails ();
  }, []);

  const history = useHistory ();

  return (
    <div>
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
                    <CCardHeader>Sub Orders Details</CCardHeader>
                    <CCardBody>
                      <CDataTable
                        items={SubOrderDetails}
                        fields={fields}
                        striped
                        itemsPerPage={10}
                        pagination
                        sorter
                        size="sm"
                        tableFilter={table}
                        itemsPerPageSelect={items}
                        scopedSlots={{
                          'SI No.': item => <td>{item.id}</td>,
                          'Product Name': item => <td>{item.productName}</td>,
                          'Product Price': item => <td>{item.productPrice}</td>,
                          'Product Quantity': item => (
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
        <CCol md="2" />
      </CRow>
    </div>
  );
};
export default RefundSubOrderDetails;
