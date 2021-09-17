import React, {useState} from 'react';
import axios from 'axios';
import {
  CCard,
  CCardBody,
  CCol,
  CDataTable,
  CRow,
  CButton,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CBadge,
  CSelect,
  CLabel,
  CCardHeader,
  CLink,
} from '@coreui/react';
import '../../style.css';
import TAABEDAR_SERVICE from 'src/services/service';
import NoEncryptionSharpIcon from '@material-ui/icons/NoEncryptionSharp';
import TextField from '@material-ui/core/TextField';
import {useHistory} from 'react-router-dom';
const fields = [
  {
    key: 'Block',
  },
  {
    key: 'SLNo',
  },
  {
    key: 'Name',
  },
  {
    key: 'Mobile',
  },
  {
    key: 'TotalOrders',
  },
  {
    key: 'Single_Orders',
  },
  {
    key: 'Multiple_Orders',
  },
  {
    key: 'Negative Balance',
  },

  {
    key: 'CouponAvailed',
  },
  {
    key: 'Payment',
  },
];

const table = {placeholder: 'Search here...', label: 'Search:  '};
const items = {label: 'Rows', values: [5, 10, 25, 50, 75, 100]};

const Users_mobileApp = () => {
  const [success, setSuccess] = useState (false);
  const [info, setInfo] = useState (false);
  const [Non, setNon] = useState (false);
  const [coupon, setCoupoun] = useState (false);
  const [block, setBlock] = useState (false);

  const [userPkid, SetUserPkid] = useState ('');
  const [Suggestion, SetSuggestion] = useState ('');
  const [Reason, SetReason] = useState ('');

  const [UserDate, setUserDate] = useState (false);

  let history = useHistory ();

  const GetAllUsers = React.useCallback (() => {
    axios ({
      method: 'GET',
      url: TAABEDAR_SERVICE + '/GetAllUsers',
      headers: {
        'content-type': 'application/json',
      },
    })
      .then (response => {
        setUserDate (response.data);
      })
      .catch (error => {
        console.log (error);
      });
  }, []);

  React.useEffect (() => {
    GetAllUsers ();
  }, []);

  const getUserpkid = pkid => {
    SetReason ('');
    SetSuggestion ('Select Suggestion');
    SetUserPkid (pkid);
    setBlock (!block);
  };

  const SuggestionChange = event => {
    SetSuggestion (event.target.value);
  };
  const ReasonChange = event => {
    SetReason (event.target.value);
  };

  const GetBlocked = () => {
    console.log ('Pkid :' + userPkid);
    console.log ('Suggestion :' + Suggestion);
    console.log ('Reason :' + Reason);

    const obj = {
      userPkid: userPkid,
      Suggestion: Suggestion,
      Reason: Reason,
    };

    axios.post (TAABEDAR_SERVICE + '/BloackUser', obj).then (response => {
      if (response.data == true) {
        alert ('User Blocked');
        GetAllUsers ();
      } else {
        alert ('Failed To Block');
      }
    });

    SetReason ('');
    SetSuggestion ('Select Suggestion');
    setBlock (!block);
  };

  // const redirect = () => {
  //   history.push("/UserTotalOrders");
  // };
  // const redirect1 = () => {
  //   history.push("/TotalSales");
  // };
  // const redirect2 = () => {
  //   history.push("/UserPayment");
  // };
  // const redirect3 = () => {
  //   history.push("/UserProfile");
  // };
  // const redirect4 = () => {
  //   history.push("/CouponsAvailed");
  // };

  return (
    <div>
      <h1 id="ccmaster">Mobile App Users</h1>
      <CRow>
        <CCol col="10">
          <CCard>
            <CCardBody>
              <CRow>
                <CCol>
                  <CCard>
                    <CCardHeader>App Users</CCardHeader>
                    <CCardBody>
                      <CDataTable
                        items={UserDate}
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
                          Block: item => (
                            <td>
                              <CRow>
                                <CCol md="9">
                                  <CButton
                                    size="sm"
                                    id="deactivate"
                                    onClick={() => {
                                      getUserpkid (item.pkid);
                                    }}
                                  >
                                    <NoEncryptionSharpIcon />
                                  </CButton>
                                </CCol>
                              </CRow>
                            </td>
                          ),
                          TotalOrders: item => (
                            <td>
                              <CButton
                                id="order-list"
                                onClick={() => {
                                  history.push ('/UserTotalOrders', {
                                    data: item,
                                  });
                                }}
                              >
                                {item.totalOrder}
                              </CButton>
                            </td>
                          ),
                          Multiple_Orders: item => (
                            <td>
                              <CButton
                                id="order-list"
                                onClick={() => {
                                  history.push ('/UserMultipleOrders', {
                                    data: item,
                                  });
                                }}
                              >
                                {item.multipleOrder}
                              </CButton>
                            </td>
                          ),
                          Single_Orders: item => (
                            <td>
                              <CButton
                                id="order-list"
                                onClick={() => {
                                  history.push ('/UserSingleOrders', {
                                    data: item,
                                  });
                                }}
                              >
                                {item.singlrOrder}
                              </CButton>
                            </td>
                          ),
                          Name: item => <td>{item.uname}</td>,
                          Mobile: item => <td>{item.upho}</td>,
                          'Negative Balance': item => (
                            <td>{item.negativeBalance}</td>
                          ),
                          Payment: item => (
                            <td>
                              <CButton
                                onClick={() => {
                                  history.push ('/UserPayment', {
                                    data: item,
                                  });
                                }}
                              >
                                <b>View</b>
                              </CButton>
                            </td>
                          ),
                          SLNo: item => <td>{item.id}</td>,
                          CouponAvailed: item => (
                            <td>
                              <CButton
                                id="order-list"
                                onClick={() => {
                                  history.push ('/CouponsAvailed', {
                                    data: item,
                                  });
                                }}
                              >
                                {item.couponAvailed}
                              </CButton>
                            </td>
                          ),
                        }}
                      />

                      <CModal
                        show={success}
                        onClose={() => setSuccess (!success)}
                        color="success"
                      >
                        <CModalHeader closeButton>
                          <CModalTitle>Order List</CModalTitle>
                        </CModalHeader>
                        <CModalBody>
                          Order No : 0012<br />
                          Order Item : Grocery Kit<br />
                          Quantity : 2<br />
                          Total Amount : 900<br />
                          <hr />
                          Order No : 0013<br />
                          Order Item : Pizza<br />
                          Quantity : 2<br />
                          Total Amount : 900<br />
                          <hr />
                          Order No : 0014<br />
                          Order Item : Tablets<br />
                          Quantity : 2<br />
                          Total Amount : 900<br />
                        </CModalBody>
                        <CModalFooter>
                          <CButton
                            color="success"
                            onClick={() => setSuccess (!success)}
                          >
                            Done
                          </CButton>{' '}
                          <CButton
                            color="secondary"
                            onClick={() => setSuccess (!success)}
                          >
                            Cancel
                          </CButton>
                        </CModalFooter>
                      </CModal>

                      <CModal
                        show={info}
                        onClose={() => setInfo (!info)}
                        color="info"
                      >
                        <CModalHeader closeButton>
                          <CModalTitle>Reviews</CModalTitle>
                        </CModalHeader>
                        <CModalBody>
                          Order Name : Grocery Kit<br />
                          Order Type : Online<br />
                          Order Number : 7346<br />
                          Review's :<br />
                          Very Good Service by Loyal World, its very easy to
                          process order, Got Delivery on Time Food qaulity and
                          taste is very Good Thanks...,
                          <hr />
                          Order Name : Tablets<br />
                          Order Type : Online<br />
                          Order Number : 72146<br />
                          Review's :<br />
                          Very Good Service by Home World, its very easy to
                          process order, Got Delivery on Time Food qaulity and
                          taste is very Good Thanks ...,
                        </CModalBody>
                        <CModalFooter>
                          <CButton color="info" onClick={() => setInfo (!info)}>
                            Done
                          </CButton>{' '}
                          <CButton
                            color="secondary"
                            onClick={() => setInfo (!info)}
                          >
                            Cancel
                          </CButton>
                        </CModalFooter>
                      </CModal>

                      <CModal
                        show={Non}
                        onClose={() => setNon (!Non)}
                        color="danger"
                      >
                        <CModalHeader closeButton>
                          <CModalTitle>Non Responded Orders</CModalTitle>
                        </CModalHeader>
                        <CModalBody>
                          Order Name : Vegitables<br />
                          Order Type : Online<br />
                          Order Number : 7346<br />
                          Reason for Cancellation :{' '}
                          <span>Delivery was Late</span>
                          <hr />
                          Order Name : Pizza<br />
                          Order Type : Online<br />
                          Order Number : 72146<br />
                          Reason for Cancellation :{' '}
                          <span>Customer not available in premisses</span>
                        </CModalBody>
                        <CModalFooter>
                          <CButton color="danger" onClick={() => setNon (!Non)}>
                            Done
                          </CButton>{' '}
                          <CButton
                            color="secondary"
                            onClick={() => setNon (!Non)}
                          >
                            Cancel
                          </CButton>
                        </CModalFooter>
                      </CModal>

                      <CModal
                        show={coupon}
                        onClose={() => setCoupoun (!coupon)}
                      >
                        <CModalHeader closeButton>
                          <CModalTitle>Coupouns Availed</CModalTitle>
                        </CModalHeader>
                        <CModalBody>
                          <img
                            src="/Coupouns.jpg"
                            class="img-fluid"
                            alt="Responsive-images"
                          />
                        </CModalBody>
                        <CModalFooter>
                          <CButton
                            color="danger"
                            onClick={() => setCoupoun (!coupon)}
                          >
                            Done
                          </CButton>
                          <CButton
                            color="secondary"
                            onClick={() => setCoupoun (!coupon)}
                          >
                            Cancel
                          </CButton>
                        </CModalFooter>
                      </CModal>

                      <CModal
                        show={block}
                        onClose={() => setBlock (!block)}
                        color="dark"
                      >
                        <CModalHeader closeButton>
                          <CModalTitle>Before Block</CModalTitle>
                        </CModalHeader>
                        <CModalBody>
                          <CLabel>Suggestion to Unblock:</CLabel>
                          <CSelect
                            value={Suggestion}
                            onChange={SuggestionChange}
                          >
                            <option value="Select Suggestion">
                              Select Suggestion
                            </option>
                            <option value="Photo not clear">
                              Photo not clear
                            </option>
                            <option value="Document not uploaded">
                              Document not uploaded
                            </option>
                            <option value="Other Reason">Other Reason</option>
                          </CSelect>
                          <br />
                          <TextField
                            id="outlined-multiline-static"
                            label="Give Reason"
                            multiline
                            value={Reason}
                            rows={4}
                            onChange={ReasonChange}
                            variant="outlined"
                            style={{width: '100%'}}
                          />
                          <br />
                        </CModalBody>
                        <CModalFooter>
                          <CButton
                            class="btn btn-square btn-danger"
                            color="dark"
                            onClick={() =>
                              // setBlock(!block)
                              GetBlocked ()}
                          >
                            Block
                          </CButton>
                          <CButton
                            color="secondary"
                            onClick={() => setBlock (!block)}
                          >
                            Close
                          </CButton>
                        </CModalFooter>
                      </CModal>
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

export default Users_mobileApp;
