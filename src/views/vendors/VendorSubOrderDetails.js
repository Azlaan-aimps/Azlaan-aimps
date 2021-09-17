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
import {useHistory} from 'react-router';

const table = {placeholder: 'Search here...', label: 'Search:  '};
const items = {label: 'Rows:', values: [5, 10, 25, 50, 75, 100]};

const fields = [
  {key: 'productName'},
  {key: 'productPrice'},
  {key: 'productQuantity'},
];

const VendorSubOrderItems = props => {
  const Orderpkid = props.location.state.data.OrderPkid;
  const subOrderPkid = props.location.state.data.pkid;
  const [SubOrderDetails, setSubOrderDetails] = useState ();
  const [value, setValue] = useState ('');

  const onchange = data => {
    setValue (data);
    console.log ('Form>', data);
  };

  const history = useHistory ();

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
                        itemsPerPage={5}
                        pagination
                        sorter
                        size="sm"
                        tableFilter={table}
                        itemsPerPageSelect={items}
                        scopedSlots={{}}
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

export default VendorSubOrderItems;
