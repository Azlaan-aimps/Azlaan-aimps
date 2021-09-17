import React, { useState } from 'react';
import EditIcon from '@material-ui/icons/Edit';
import DeleteSharpIcon from '@material-ui/icons/DeleteSharp';
import { Link } from 'react-router-dom';
import PaymentSharpIcon from '@material-ui/icons/Payment';
import TAABEDAR_SERVICE from "src/services/service";

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


} from '@coreui/react'

import '../../../src/style.css';

import { useHistory } from 'react-router-dom';
import promoData from 'src/views/users/StoreData'
const table = { placeholder: "Search here...", label: "Search" };
const Rows = { label: "Rows" }
const fields = [
  { key: 'SLNO'},
  { key: 'Rider'},
  { key: 'Total_Orders' },
  { key: 'Total_deliveries' },
  { key: 'Orders_amount' },
  { key: 'Delivery_charge' },
  { key: 'Tips' },
  { key: 'Change Exchange' },
  { key: 'Final amount' },
  { key: 'Amount with rider' },
  { key: 'Payment summary' },
  { key: 'Make_Payment' },
];
const getBadge = (Status) => {
  switch (Status) {
    case "Open":
      return "success";
    case "Closed":
      return "warning";
    default: return "info";
  }
};


const AddNewStores = () => {
  
  const [StoreMaster, setStoreMaster] = useState(' ');
  return (
    <div>
      <CRow>
        <CCol md="3">
        </CCol>
        <CCol md="6">
          <h1 id="ccmaster">Payments for Riders(payment for multiple riders at atime  need to checked once while integrating payment gateway)</h1>
        </CCol>
        <CCol md="3">
        </CCol>
      </CRow>
      <CRow>
        <CCol md="12">
          <div>
            <CButton
              size="sm"
              id="AddEmp"
              onClick={() => setStoreMaster('viewstore')}
            >
              Make Payments
                      </CButton>
            <br></br>
          </div>
        </CCol>
      </CRow>
      <div>
        {StoreMaster === 'viewstore' ? <NewStoreMaster /> : <ViewStoreMaster />}
      </div>
      <br></br>
    </div>
  )
};
const ViewStoreMaster = () => {

  const [success, setSuccess] = useState(false);
  const [success1, setSuccess1] = useState(false);

  let history = useHistory();

 


  // let history = useHistory();
  const redirect = () => {
    history.push("/Pay");
  }
  const redirect1 = () => {
    history.push("/RegPatSalesInfo");
  }
  const redirect2 = () => {
    history.push("/RegPatOwnerInfo");
  }
  const redirect3 = () => {
    history.push("/EditVendor");
  }
  return (

    <>
      <CRow>
        <CCol md="12">
          <CCard>
        
            <br></br>
            <CCardBody>

            <CRow>
              <CCol>
                <CCard>
                <CCardHeader>
              <CRow>
                <CCol md="3">
                  <CLabel htmlFor="nf-email">Select Rider</CLabel>
                  <CSelect custom name="merchant" id="merchant">
                  <option value="0">Select Rider</option>
                    <option value="0">Shabaz</option>
                    <option value="1">Uzma</option>
                  </CSelect>
                </CCol>
              </CRow>
            </CCardHeader>
                  <CCardBody>
              <CDataTable
                items={promoData}
                fields={fields}
                striped
                itemsPerPage={5}
                pagination
                sorter
                tableFilter={table}
                itemsPerPageSelect={Rows}
                scopedSlots={{
                  Received_Payments_List: (item) => (
                    <td>
                      <CButton onClick={() => setSuccess(!success)}
                        id="war-btn3" size="md">
                        <PaymentSharpIcon />
                      </CButton>
                    </td>
                  ),
                  Total_Deductions: (item) => (
                    <td>
                      <CButton onClick={() => setSuccess1(!success1)}
                        size="md">
                        <Link to="#" > 500</Link>
                      </CButton>
                    </td>
                  ),
                  Make_Payment: (item) => (
                    <td>
                      <CButton
                         id="war-btn2" size="md" onClick={redirect}><PaymentSharpIcon/>
                      </CButton>
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
      <CRow>
        <CCol md="12">
          <CCard>
           
            <CCardBody>
            <CRow>
              <CCol>
                <CCard>
                  <CCardHeader>
                  Summary
               </CCardHeader>
                  <CCardBody>
              <p style={{ fontSize: '12px' }}><span>Total Payments: </span>15</p>
              <p style={{ fontSize: '12px' }}><span>Payment For tips: </span> 500 </p>
              <p style={{ fontSize: '12px' }}><span>Payments For Delivery: </span>500</p>
              <p style={{ fontSize: '12px' }}><span>Total orders amount: </span>500</p>
              <p style={{ fontSize: '12px' }}><span>Total Tips: </span>500</p>
              <p style={{ fontSize: '12px' }}><span>Total Change Exchange: </span>500</p>
              <p style={{ fontSize: '12px' }}><span>Final Amount: </span>500</p>
              <p style={{ fontSize: '12px' }}><span>Total Amount with riders: </span>500</p>
              <p style={{ fontSize: '12px' }}><span>Final summary: </span><span style={{ color: 'green', fontWeight: '700', fontSize: '15px', background: '#f4f4f4', padding: '5px' }}> 1500</span> </p>
              {/* <p  style={{fontSize:'12px'}}><span>Mode Of Payment  : </span>COD</p> */}
              </CCardBody>
                </CCard>
              </CCol>
            </CRow>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>

    </>
  )

};
const NewStoreMaster = () => {

  return (
    <div>
      <CRow>
        <CCol md="12">
          <CCard>
            <CCardHeader>Make Payment to Rider</CCardHeader>
            <CCardBody>
              <CForm

                method="post"
                encType="multipart/form-data"
                className="form-horizontal"
              >
                <CFormGroup className="pr-1">
                  <div>
                    <p><b>Select Rider</b></p>
                    <CRow id="firstrow">
                    <CCol md="3">
                        <CLabel htmlFor="nf-email">Select Rider</CLabel>
                        <CSelect custom name="Province" id="Province">
                        <option value="0">Select rider</option>
                          <option value="0">Shabaz</option>
                          <option value="1">Uzma</option>
                          <option value="2">Option #2</option>
                          <option value="3">Option #3</option>
                        </CSelect>
                      </CCol>
                      <CCol md="3">
                        <CLabel htmlFor="nf-email">Payment for</CLabel>
                        <CSelect custom name="Province" id="Province">
                        <option value="0">Delivery Charge</option>
                          <option value="0">Tip</option>
                          <option value="1">Insentive</option>
                          <option value="2">Refund</option>
                        </CSelect>
                      </CCol>
                      <CCol md="3">
                        <CLabel htmlFor="exampleInputName2" className="pr-1">
                          Amount
                        </CLabel>
                        <CInput
                          id="exampleInputName2"
                          placeholder=""
                          required
                        />
                      </CCol>
                      
                      
                     


                    </CRow>
                   
                     </div>
                  
               
                 <hr></hr>
                  <CRow>
                    <CCol md="4">
                      <div id="inline-btn">
                        <CButton type="submit" size="md" id="Add-btn">
                          Pay
                          </CButton>
                      </div>
                    </CCol>
                  </CRow>
                </CFormGroup>
              </CForm>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </div>
  );
};


class UploadStoreImages extends React.Component {
  constructor(props) {
    super(props);
    this.state = { file: null };
    this.onChange = this.onChange.bind(this);
    this.resetFile = this.resetFile.bind(this);
  }
  onChange(event) {
    this.setState({
      file: URL.createObjectURL(event.target.files[0])
    });
  }

  resetFile(event) {
    event.preventDefault();
    this.setState({ file: null });
  }
  render() {
    return (
      <div>
        <CRow>
          <CCol >
            <CLabel htmlFor="exampleInputName2" className="pr-1">
              Store Images
                        </CLabel>
            <CInput type="file" onChange={this.onChange} />
          </CCol>
          <CCol >
            {/* {this.state.file && (
            <div style={{ textAlign: "center" }}>
              <button id="newEmp-btn" onClick={this.resetFile}>X</button>
            </div>
          )} */}
            <CLabel htmlFor="exampleInputName2" className="pr-1">
              Added Store Image
                        </CLabel>
            <img style={{ width: "50%" }} src={this.state.file} />
          </CCol>
        </CRow>
        


      </div>
    );
  }
}
export default AddNewStores
