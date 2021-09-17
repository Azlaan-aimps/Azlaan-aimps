import React, {useState} from 'react';
import axios from 'axios';
import {
  CCard,
  CCardBody,
  CCol,
  CDataTable,
  CRow,
  CSelect,
  CCardHeader,
  CLabel,
  CButton,
} from '@coreui/react';
import '../../style.css';
import TAABEDAR_SERVICE from 'src/services/service';
import {useHistory} from 'react-router';

const fields = [
  {key: 'SL No'},
  {key: 'Date'},
  {key: 'Items'},
  {key: 'Merchant Type'},
  {key: 'Merchant Name'},
  {key: 'User Name'},
  {key: 'User Mobile'},
  {key: 'Sub-Order Number'},
  {key: 'Description'},
  {key: 'Total Amount'},
  {key: 'Tax Amount'},
  {key: 'Discount'},
  {key: 'From Location'},
  {key: 'To Location'},
];

const table = {placeholder: 'Search here...', label: 'Search:  '};
const items = {label: 'Rows', values: [5, 10, 25, 50, 75, 100]};

const SubOrderDetails = props => {
  const OrderNumber = props.location.state.data.OrderNumber;

  const [responseData, setresponseData] = useState ('');
  const [MerchantType, setMerchantType] = useState ('');

  const GetSubOrdersDetails = React.useCallback (() => {
    axios ({
      method: 'GET',
      url: TAABEDAR_SERVICE + '/SalesReportsSubOrder/' + OrderNumber + '',
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

  const GetMerchantType = () => {
    axios ({
      method: 'GET',
      url: TAABEDAR_SERVICE + '/GetMerchantType',
      headers: {
        'content-type': 'application/json',
      },
    })
      .then (response => {
        const Merch = response.data.map (item => (
          <option value={item.pkid}>{item.Categories}</option>
        ));
        setMerchantType (Merch);
      })
      .catch (error => {
        console.log (error);
      });
  };

  const MerchChange = event => {
    axios ({
      method: 'GET',
      url: TAABEDAR_SERVICE +
        '/SalesReportsSubOrderFilterByMerchant/' +
        event.target.value +
        '/' +
        OrderNumber +
        '',
      headers: {
        'content-type': 'application/json',
      },
    })
      .then (response => {
        console.log (response.data);
        setresponseData (response.data);
      })
      .catch (error => {
        console.log (error);
      });
  };

  React.useEffect (() => {
    GetSubOrdersDetails ();
    GetMerchantType ();
  }, []);

  const history = useHistory ();

  return (
    <div>
      <h1 id="ccmaster">Sub-Orders</h1>
      <br />
      <CRow>
        <CCol col="10">
          <CCard>
            <CCardBody>
              <CRow>
                <CCol>
                  <CCard>
                    <CCardHeader>
                      <CRow>
                        <CCol md="3">
                          <CLabel htmlFor="nf-email">Merchant Type</CLabel>
                          <CSelect
                            custom
                            name="Marchant"
                            id="Marchant"
                            onChange={MerchChange}
                          >
                            <option value="0">All</option>
                            {MerchantType}
                          </CSelect>
                        </CCol>
                      </CRow>
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
                        itemsPerPage={10}
                        pagination
                        size="sm"
                        itemsPerPageSelect={items}
                        scopedSlots={{
                          'SL No': item => <td>{item.id}</td>,
                          Date: item => <td>{item.subOrderDate}</td>,
                          Items: item => (
                            <td>
                              <CButton
                                id="order-list"
                                onClick={() => {
                                  history.push ('/OrderItems', {
                                    data: item,
                                  });
                                }}
                              >
                                {item.orderItem}
                              </CButton>
                            </td>
                          ),
                          'Merchant Type': item => <td>{item.mTypeName}</td>,
                          'Merchant Name': item => <td>{item.shopName}</td>,
                          'User Name': item => <td>{item.userName}</td>,
                          'User Mobile': item => <td>{item.userMobile}</td>,
                          'Sub-Order Number': item => (
                            <td>{item.subOrderNumber}</td>
                          ),
                          Description: item => <td>{item.subDescription}</td>,
                          'Total Amount': item => <td>{item.totalAmount}</td>,
                          'Tax Amount': item => <td>{item.taxAmount}</td>,
                          Discount: item => <td>{item.discount}</td>,
                          'From Location': item => <td>{item.fromLocation}</td>,
                          'To Location': item => <td>{item.toLocation}</td>,
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


export default SubOrderDetails;
