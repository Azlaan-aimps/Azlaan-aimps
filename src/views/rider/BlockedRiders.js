import React, {useState} from 'react';
import axios from 'axios';
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
  CButton,
  CBadge,
  CLabel,
  CSelect,
  CLink,
} from '@coreui/react';
import TAABEDAR_SERVICE from 'src/services/service';
import '../../../src/style.css';
import LockOpenSharpIcon from '@material-ui/icons/LockOpenSharp';
import {useHistory} from 'react-router';
const table = {placeholder: 'Search here...', label: 'Search'};
const Rows = {label: 'Rows'};
const fields = [
  {key: 'SI No.'},
  {
    key: 'Name',
  },
  {
    key: 'E-Mail',
  },
  {
    key: 'Mobile',
  },
  {
    key: 'City',
  },
  {
    key: 'DL No',
  },
  {
    key: 'Total Orders',
  },

  {
    key: 'Total Delivery',
  },
  {
    key: 'Ratings',
  },
  {key: 'Blocking Reason'},
  {key: 'Unblocking Suggestion'},

  {key: 'Blocking Date'},

  {key: 'Unblock'},
];
const getBadge = Status => {
  switch (Status) {
    case 'Open':
      return 'success';
    case 'Closed':
      return 'warning';
    default:
      return 'info';
  }
};
const BlockedRiders = () => {
  const [responseData, setResponseData] = useState ('');

  const GetBlockRiders = () => {
    axios ({
      method: 'GET',
      url: TAABEDAR_SERVICE + '/GetBlockedRiders',
      headers: {
        'content-type': 'application/json',
      },
      params: {
        language_code: 'en',
      },
    })
      .then (response => {
        console.log ('GetBlockRiders response :' + response.data);
        setResponseData (response.data);
      })
      .catch (error => {
        console.log (error);
      });
  };
  React.useEffect (() => {
    GetBlockRiders ();
  }, []);

  const unblockRider = pkid => {
    axios ({
      method: 'GET',
      url: TAABEDAR_SERVICE + '/UnBlockRiders/' + pkid + '',
      headers: {
        'content-type': 'application/json',
      },
      params: {
        language_code: 'en',
      },
    })
      .then (response => {
        console.log ('unblockRider response : ' + response.data);
        if (response.data == true) {
          alert ('Rider is Unblocked!');
          GetBlockRiders ();
        } else {
          alert ('Rider is Not Unblocked!');
          GetBlockRiders ();
        }
      })
      .catch (error => {
        console.log (error);
      });
  };

  const history = useHistory ();

  return (
    <div>
      <CRow>
        <CCol md="3" />
        <CCol md="6">
          <h1 id="ccmaster">Blocked Rider</h1>
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
                    <CCardHeader>Blocked Riders</CCardHeader>
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
                          'SI No.': item => <td>{item.id}</td>,
                          Status: item => (
                            <td>
                              <CBadge color={getBadge (item.Status)}>
                                {item.Status}
                              </CBadge>
                            </td>
                          ),
                          Unblock: item => (
                            <td>
                              <CRow>
                                <CCol md="10">
                                  <CButton
                                    size="sm"
                                    id="deactivate"
                                    onClick={() => {
                                      unblockRider (item.pkid);
                                    }}
                                  >
                                    <LockOpenSharpIcon />
                                  </CButton>
                                </CCol>
                              </CRow>
                            </td>
                          ),
                          Name: item => (
                            <td>
                              <CButton
                                id="order-list"
                                onClick={() => {
                                  history.push ('/RiderProfile', {
                                    data: item,
                                  });
                                }}
                              >
                                {item.Name}
                              </CButton>
                            </td>
                          ),
                          'E-Mail': item => <td>{item.Email}</td>,
                          Mobile: item => <td>{item.Mobile}</td>,
                          'DL No': item => <td>{item.dlNo}</td>,
                          'Blocking Date': item => <td>{item.date}</td>,
                          'Total Orders': item => (
                            <td>
                              <CButton
                                id="order-list"
                                onClick={() => {
                                  history.push ('/RiderTotalOrder', {
                                    data: item.pkid,
                                  });
                                }}
                              >
                                {item.totalOrders}
                              </CButton>
                            </td>
                          ),
                          'Blocking Reason': item => <td>{item.Reason}</td>,
                          'Unblocking Suggestion': item => (
                            <td>{item.Suggetion}</td>
                          ),

                          'Total Distance': item => (
                            <td>{item.totalDistance}</td>
                          ),

                          'Total Delivery': item => <td>{77}</td>,
                          KPI: item => <td>{1111}</td>,
                          Ratings: item => <td>{5}</td>,
                          'Total Insentives': item => <td>{3000}</td>,
                          'Total Earnings': item => <td>{6000}</td>,
                          'Non Responded Orders': item => (
                            <td>
                              <CLink
                                to={{
                                  pathname: '/RiderNonRespondedOders',
                                  data: responseData,
                                }}
                              >
                                {item.totalOrders}
                              </CLink>
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

export default BlockedRiders;
