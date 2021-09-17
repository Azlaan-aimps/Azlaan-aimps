import React, {useEffect, useState} from 'react';
import {
  CCard,
  CCardBody,
  CCol,
  CDataTable,
  CRow,
  CButton,
  CCardHeader,
} from '@coreui/react';
import '../../style.css';
import {useHistory} from 'react-router-dom';
import TAABEDAR_SERVICE from 'src/services/service';
import axios from 'axios';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import {Badge} from '@material-ui/core';

const fields = [
  {
    key: 'SL No',
  },
  {
    key: 'Sub Order No',
  },
  {
    key: 'Vendor',
  },
  {
    key: 'Order Amount',
  },
  {
    key: 'Discount',
  },
  {
    key: 'Items',
  },
];

const table = {placeholder: 'Search here...', label: 'Search:  '};
const items = {label: 'Rows', values: [5, 10, 25, 50, 75, 100]};

const Change_OrderDetails = props => {
  const [getData, setData] = useState ();

  const history = useHistory ();
  const orderNumber = props.location.state.data.orderNumber;

  const callOnLoad = () => {
    axios
      .get (
        TAABEDAR_SERVICE + '/GetSubOrderDetailsByOrderNumber/' + orderNumber
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
                      <h1 id="ccmaster">Order Details</h1>
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
                        itemsPerPage={10}
                        pagination
                        size="md"
                        itemsPerPageSelect={items}
                        scopedSlots={{
                          'SL No': item => <td>{item.id}</td>,
                          'Sub Order No': item => <td>{item.orderNumber}</td>,
                          Vendor: item => <td>{item.shopName}</td>,
                          'Order Amount': item => <td>{item.totalAmount}</td>,
                          Discount: item => <td>{item.Disacount}</td>,
                          Items: item => (
                            <td>
                              <CRow>
                                <CCol md="9">
                                  <CButton
                                    size="md"
                                    onClick={() => {
                                      history.push ('/Items_Details', {
                                        data: item,
                                      });
                                    }}
                                  >
                                    <Badge
                                      badgeContent={item.totalItems}
                                      color="primary"
                                      overlap="circular"
                                    >
                                      <MenuBookIcon fontSize="20" />
                                    </Badge>
                                  </CButton>
                                </CCol>
                              </CRow>
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

export default Change_OrderDetails;
