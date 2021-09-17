import React, {useState} from 'react';
import axios from 'axios';
import {
  CCard,
  CCardBody,
  CCol,
  CDataTable,
  CRow,
  CButton,
  CLink,
  CLabel,
  CCardHeader,
  CInput,
} from '@coreui/react';
import '../../style.css';
import TAABEDAR_SERVICE from 'src/services/service';
import {useHistory} from 'react-router';

const fields = [
  {
    key: 'SLNo',
  },
  {
    key: 'Date',
  },
  {
    key: 'OrderNo',
  },

  {
    key: 'Customer',
  },
  {
    key: 'Description',
  },

  {
    key: 'Refund Amount',
  },
  {
    key: 'Payment Status',
  },
];

const table = {placeholder: 'Search here...', label: 'Search:  '};
const items = {label: 'Rows', values: [5, 10, 25, 50, 75, 100]};

const RejectedRequest = () => {
  const [responseData, setResponseData] = useState ('');
  const [FromDate, SetFromDate] = useState ('');
  const [ToDate, SetToDate] = useState ('');

  const FromDateChange = event => {
    SetFromDate (event.target.value);
  };

  const ToDateChange = event => {
    SetToDate (event.target.value);
  };

  const FilterDate = () => {
    console.log ('FromDate: ' + FromDate);
    console.log ('ToDate: ' + ToDate);

    if (FromDate == '' || FromDate == null) {
      alert ('Please Give From-Date!');
    } else if (ToDate == '' || ToDate == null) {
      alert ('Please Give To-Date!');
    } else {
      axios ({
        method: 'GET',
        url: TAABEDAR_SERVICE +
          '/GetRejectedFilterRequestForRefund/' +
          FromDate +
          '/' +
          ToDate,
        headers: {
          'content-type': 'application/json',
        },
        params: {
          language_code: 'en',
        },
      })
        .then (response => {
          setResponseData (response.data);
          console.log (response.data);
        })
        .catch (error => {
          console.log (error);
        });
    }
  };

  const ResetFilter = () => {
    SetFromDate ('');
    SetToDate ('');
    GetRejectedRequest ();
  };

  const GetRejectedRequest = () => {
    axios ({
      method: 'GET',
      url: TAABEDAR_SERVICE + '/GetRejectedRequestForRefund',
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
  };
  React.useEffect (() => {
    GetRejectedRequest ();
  }, []);

  const history = useHistory ();

  return (
    <div>
      <h1 id="ccmaster">Rejected Refunds</h1>
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
                          <CLabel>From:</CLabel>
                          <CInput
                            type="date"
                            value={FromDate}
                            onChange={FromDateChange}
                          />
                        </CCol>
                        <CCol md="3">
                          <CLabel>To:</CLabel>
                          <CInput
                            type="date"
                            value={ToDate}
                            onChange={ToDateChange}
                          />
                        </CCol>
                        <CCol md="3">
                          <CButton
                            color="success"
                            style={{'margin-top': '28px', width: '30%'}}
                            size="sm"
                            onClick={FilterDate}
                          >
                            Filter
                          </CButton>
                        </CCol>
                        <CCol md="3">
                          <CButton
                            color="danger"
                            style={{
                              marginTop: '28px',
                              marginLeft: '-158px',
                              width: '30%',
                            }}
                            size="sm"
                            onClick={ResetFilter}
                          >
                            Reset
                          </CButton>
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
                          SLNo: item => <td>{item.id}</td>,
                          OrderNo: item => (
                            <td>
                              <CButton
                                id="order-list"
                                onClick={() => {
                                  history.push ('/RefundOrderDetails', {
                                    data: item,
                                  });
                                }}
                              >
                                {item.orderNumber}
                              </CButton>
                            </td>
                          ),
                          'Payment Status': item => <td>Rejected</td>,
                          Reference_No: item => <td>Reference_No</td>,
                          'Refund Amount': item => <td>{item.Amount}</td>,
                          Description: item => <td>{item.Description}</td>,
                          Customer: item => <td>{item.userName}</td>,
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

export default RejectedRequest;
