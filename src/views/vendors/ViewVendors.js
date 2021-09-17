import React, {useState} from 'react';
import MenuBookSharpIcon from '@material-ui/icons/MenuBookSharp';
import {Link} from 'react-router-dom';
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
  CForm,
  CFormGroup,
  CLabel,
  CInput,
  CSelect,
  CLink,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
} from '@coreui/react';
import '../../../src/style.css';
import TAABEDAR_SERVICE from 'src/services/service';
import DescriptionSharpIcon from '@material-ui/icons/DescriptionSharp';
import NoEncryptionSharpIcon from '@material-ui/icons/NoEncryptionSharp';
import {useHistory} from 'react-router-dom';
import TextField from '@material-ui/core/TextField';

const table = {placeholder: 'Search here...', label: 'Search'};
const Rows = {label: 'Rows'};
const fields = [
  {key: 'Block'},
  {key: 'Name'},
  {key: 'Branch'},
  {key: 'Type'},
  {key: 'Category'},
  {key: 'Address'},
  {key: 'City'},
  {key: 'Area'},
  {key: 'Mobile'},
  {key: 'Discount'},
  {key: 'Email'},
  {key: 'TotalOrders'},
  {key: 'Status'},
  {key: 'Menu'},
  {key: 'Document'},
  {key: 'Average_Ratings'},
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

const ViewStoreMaster = () => {
  const [VendorsData, setVendorsData] = useState ();
  const [MerchantCategory, setMerchantCategory] = useState ();
  const [block, setBlock] = useState (false);
  const [Vendorpkid, SetVendorpkid] = useState ('');
  const [Suggestion, SetSuggestion] = useState ('');
  const [Reason, SetReason] = useState ('');

  const ChangeFilter = event => {
    const fldate = '';
    if (event.target.value == '0') {
      GetVendors ();
    } else {
      axios ({
        method: 'GET',
        url: TAABEDAR_SERVICE + '/GetVendorFilter/' + event.target.value + '',
        headers: {
          'content-type': 'application/json',
        },
      })
        .then (response => {
          setVendorsData (response.data);
        })
        .catch (error => {
          console.log (error);
        });
    }
  };

  const GetVendors = React.useCallback (() => {
    axios ({
      method: 'GET',
      url: TAABEDAR_SERVICE + '/GetVendor',
      headers: {
        'content-type': 'application/json',
      },
    })
      .then (response => {
        setVendorsData (response.data);
      })
      .catch (error => {
        console.log (error);
      });
    GetVendorCategory ();
  }, []);

  const GetVendorCategory = () => {
    axios ({
      method: 'GET',
      url: TAABEDAR_SERVICE + '/GetMerchantType',
      headers: {
        'content-type': 'application/json',
      },
      params: {
        language_code: 'en',
      },
    })
      .then (response => {
        const MerchantTypeOption = response.data.map (item => (
          <option value={item.pkid}>{item.Categories}</option>
        ));
        setMerchantCategory (MerchantTypeOption);
      })
      .catch (error => {
        console.log (error);
      });
  };

  const BloackVendor = (pkid, Suggestion, Reason) => {
    axios ({
      method: 'GET',
      url: TAABEDAR_SERVICE +
        '/BlockVendor/' +
        pkid +
        '/' +
        Suggestion +
        '/' +
        Reason +
        '',
      headers: {
        'content-type': 'application/json',
      },
    })
      .then (response => {
        if (response.data == true) {
          alert ('Vendor Sucessfully blocked');
          GetVendors ();
        } else {
          alert ('Failed To blocked Vendor');
        }
      })
      .catch (error => {
        console.log (error);
      });
  };

  React.useEffect (() => {
    GetVendors ();
  }, []);

  const getVendorpkid = pkid => {
    SetVendorpkid (pkid);

    SetSuggestion ('Select Suggestion');
    SetReason ('');
    setBlock (!block);
  };

  const SuggestionChange = event => {
    SetSuggestion (event.target.value);
  };
  const ReasonChange = event => {
    SetReason (event.target.value);
  };

  const GetBlocked = () => {
    SetSuggestion ('Select Suggestion');
    SetReason ('');
    setBlock (!block);
    BloackVendor (Vendorpkid, Suggestion, Reason);
  };

  let history = useHistory ();
  const redirect = () => {
    history.push ('/RegPatMenuInfo');
  };
  const redirect1 = () => {
    history.push ('/RegPatSalesInfo');
  };
  const redirect2 = () => {
    history.push ('/RegPatOwnerInfo');
  };
  const redirect3 = () => {
    history.push ('/EditVendor');
  };
  return (
    <div>
      <CRow>
        <CCol md="3" />
        <CCol md="6">
          <h1 id="ccmaster">All Vendors</h1>
        </CCol>
        <CCol md="3" />
      </CRow>
      <CRow>
        <CCol md="12">
          <div>
            <CLink to="/AddNewStore">
              <CButton size="sm" id="AddEmp">
                Add Vendors
              </CButton>
            </CLink>

            <br />
          </div>
        </CCol>
      </CRow>

      <CRow>
        <CCol md="12">
          <CCard>
            <CCardBody>
              <CRow>
                <CCol>
                  <CCard>
                    <CCardHeader>
                      <CRow>
                        <CCol md="3">
                          <CLabel htmlFor="nf-email">Select Vendors</CLabel>
                          <CSelect
                            custom
                            name="merchant"
                            onChange={ChangeFilter}
                            id="merchant"
                          >
                            <option value="0">All</option>
                            {MerchantCategory}
                          </CSelect>
                        </CCol>
                      </CRow>
                    </CCardHeader>
                    <CCardBody>
                      <CDataTable
                        items={VendorsData}
                        fields={fields}
                        striped
                        itemsPerPage={5}
                        pagination
                        sorter
                        tableFilter={table}
                        itemsPerPageSelect={Rows}
                        scopedSlots={{
                          Block: item => (
                            <td>
                              <CRow>
                                <CCol md="10">
                                  <CButton
                                    size="sm"
                                    onClick={() => {
                                      getVendorpkid (item.pkid);
                                    }}
                                    id="activate"
                                  >
                                    <NoEncryptionSharpIcon />
                                  </CButton>
                                </CCol>
                              </CRow>
                            </td>
                          ),
                          Status: item => (
                            <td>
                              <CBadge color={getBadge (item.Status)}>
                                {item.Status}
                              </CBadge>
                            </td>
                          ),
                          TotalOrders: item => (
                            <td>
                              <CButton
                                id="order-list"
                                onClick={() => {
                                  history.push ('/VendorTotalOrder', {
                                    data: item,
                                  });
                                }}
                              >
                                {item.totalOrders}
                              </CButton>
                            </td>
                          ),
                          Name: item => (
                            <td>
                              <CButton
                                id="order-list"
                                onClick={() =>
                                  history.push ('/EditVendor', {data: item})}
                              >
                                {item.Name}
                              </CButton>
                            </td>
                          ),
                          Menu: item => (
                            <td>
                              <CButton
                                onClick={redirect}
                                size="sm"
                                id="war-btn"
                              >
                                <MenuBookSharpIcon />
                              </CButton>
                            </td>
                          ),
                          Document: item => (
                            <td>
                              <CButton
                                size="sm"
                                id="war-btn"
                                onClick={redirect2}
                              >
                                <DescriptionSharpIcon />
                              </CButton>
                            </td>
                          ),
                        }}
                      />

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

export default ViewStoreMaster;
