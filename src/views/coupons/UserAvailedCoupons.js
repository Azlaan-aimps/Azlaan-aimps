import React, {useState, Component} from 'react';
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
import { useHistory } from 'react-router';
import '../../style.css';
import TAABEDAR_SERVICE from 'src/services/service';


const fields = [
  {key: 'Code'},
  {key: 'Availed Date'},
  {key: 'User Name'},
  {key: 'User Mobile'},
  {key: 'Order No'},
  {key: 'Amount'},
];

const table = {placeholder: 'Search here...', label: 'Search'};
const Rows = {label: 'Rows'};

const UserAvailedCoupons = props => {
  const [value, setValue] = useState ('');

  const onchange = data => {
    setValue (data);
    console.log ('Form>', data);
  };

  const [responseData, setResponseData] = useState ('');
  const fetchData = React.useCallback (() => {
    axios ({
      method: 'GET',
      url: TAABEDAR_SERVICE + '/GetCouponAvailed',
      headers: {
        'content-type': 'application/json',
      },
      params: {
        language_code: 'en',
      },
    })
      .then (response => {
        setResponseData (response.data);
      })
      .catch (error => {
        console.log (error);
      });
  }, []);

  React.useEffect (() => {
    fetchData ();
  }, []);

  const history = useHistory ();

  return (
    <div>
      <CRow>
        <CCol md="3" />
        <CCol md="6">
          <h1 id="ccmaster">Availed Coupons Master</h1>
        </CCol>
        <CCol md="3" />
      </CRow>
      <CRow>
        <CCol md="12">
          <CCard>
            <CCardBody>
              <CRow>
                <CCol>
                  <CCard>
                    <CCardHeader>Availed Coupons</CCardHeader>
                    <CCardBody>
                      <CDataTable
                        items={responseData}
                        fields={fields}
                        striped
                        itemsPerPage={5}
                        pagination
                        sorter
                        tableFilter={table}
                        itemsPerPageSelect={Rows}
                        scopedSlots={{
                          Code: item => <td>{item.couponCode}</td>,
                          'Availed Date': item => <td>{item.availedDate}</td>,
                          'User Name': item => <td>{item.userName}</td>,
                          'User Mobile': item => <td>{item.userMobile}</td>,
                          'Order No': item => (
                            <td>
                              <CButton
                                id="order-list"
                                onClick={() => {
                                  history.push ('/CouponOrderDetails', {
                                    data: item,
                                  });
                                }}
                              >
                                {item.orderNumber}
                              </CButton>
                            </td>
                          ),
                          Amount: item => <td>{item.couponAmount}</td>,
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

export default UserAvailedCoupons;
