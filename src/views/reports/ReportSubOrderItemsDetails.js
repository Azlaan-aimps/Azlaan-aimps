import React, {useState} from 'react';
import axios from 'axios';

import {
  CCard,
  CCardBody,
  CCol,
  CDataTable,
  CRow,
  CButton,
  CInput,
  CCardHeader,
  CLabel,
  CLink,
} from '@coreui/react';
import '../../style.css';
import TAABEDAR_SERVICE from 'src/services/service';
import {useHistory} from 'react-router';

const fields = [
  {key: 'SL No'},
  {key: 'Product Category'},
  {key: 'Product Sub-Category'},
  {key: 'Product Name'},
  {key: 'Product Quantity'},
];

const table = {placeholder: 'Search here...', label: 'Search:  '};
const items = {label: 'Rows', values: [5, 10, 25, 50, 75, 100]};

const ReportSubOrderItemsDetails = props => {
  const OrderPkid = props.location.state.data.orderFkid;
  const SubOrderPkid = props.location.state.data.pkid;

  const [responseData, setresponseData] = useState ('');

  const GetSubOrdersDetails = React.useCallback (() => {
    axios ({
      method: 'GET',
      url: TAABEDAR_SERVICE +
        '/SalesReportsOrderItemsByOrderAndSubOrder/' +
        OrderPkid +
        '/' +
        SubOrderPkid +
        '',
      headers: {
        'content-type': 'application/json',
      },
    })
      .then (response => {
        setresponseData (response.data);
      })
      .catch (error => {
        console.log (error);
      });
  }, []);

  React.useEffect (() => {
    GetSubOrdersDetails ();
  }, []);

  const history = useHistory ();

  return (
    <div>
      <br />
      <CRow>
        <CCol col="10">
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
                    <CCardHeader>
                      <h1 id="ccmaster">Items Details</h1>
                    </CCardHeader>
                    <CCardBody>
                      <CDataTable
                        items={responseData}
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
                          'Product Quantity': item => (
                            <td>{item.ProductQty}</td>
                          ),

                          'Product Sub-Category': item => (
                            <td>{item.productSubCatName}</td>
                          ),
                          'Product Category': item => (
                            <td>{item.productCatName}</td>
                          ),
                          'Product Name': item => <td>{item.productName}</td>,
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
      <CRow />
    </div>
  );
};
export default ReportSubOrderItemsDetails;
