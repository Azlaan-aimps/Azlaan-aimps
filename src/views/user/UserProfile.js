
import React from 'react';

import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
 
  CRow,


  CForm,
  CFormGroup,
  CLabel,
  CInput,
 
  CSelect,


} from '@coreui/react'
import TAABEDAR_SERVICE from "src/services/service";
import "../../style.css";



const Edit = () => {

  return (
    <div>
      <CRow>
        <CCol md="12">
          <CCard>
           
            <CCardBody>
            <CRow>
              <CCol>
                <CCard>
                <CCardHeader>Profile</CCardHeader>
                  <CCardBody>
              <CForm

                method="post"
                encType="multipart/form-data"
                className="form-horizontal"
              >
                <CFormGroup className="pr-1">
                  <div>
                    
                    <CRow id="firstrow">
                      <CCol md="4">
                        <CLabel htmlFor="exampleInputName2" className="pr-1">
                          Name
                        </CLabel>
                        <CInput
                          id="exampleInputName2"
                          placeholder="" value="YTRE"
                          required
                        />
                      </CCol>
                      
                      <CCol md="4">
                        <CLabel htmlFor="nf-email">City</CLabel>
                        <CSelect custom name="city" id="city">
                          <option value="0">Mysuru</option>
                          <option value="1">Option #1</option>
                          <option value="2">Option #2</option>
                          <option value="3">Option #3</option>
                        </CSelect>
                      </CCol>
                      <CCol md="4">
                        <CLabel htmlFor="nf-email">Area</CLabel>
                        <CSelect custom name="Province" id="Province">
                          <option value="0">Saraswathipuram</option>
                          <option value="1">Option #1</option>
                          <option value="2">Option #2</option>
                          <option value="3">Option #3</option>
                        </CSelect>
                      </CCol>


                    </CRow>
                    <CRow id="secondrow">
                      <CCol md="4">
                        <CLabel htmlFor="nf-email">Email</CLabel>
                        <CInput
                          id="exampleInputName2"
                          placeholder=" " value="ertead123@gmail.com"
                          required
                        />
                      </CCol>
                     
                      <CCol md="4">
                        <CLabel htmlFor="exampleInputName2" className="pr-1">
                          Mobile Number
                        </CLabel>
                        <CInput
                          id="exampleInputName2"
                          placeholder=" " value="9638521470"
                          type="number"
                          required
                        />
                      </CCol>
                      <CCol md="4">
                        <CLabel htmlFor="exampleInputName2" className="pr-1">
                          Gender
                        </CLabel>
                        <CInput
                          id="exampleInputName2"
                          placeholder=" " value="Male"
                          type="number"
                          required
                        />
                      </CCol>
                      
                    </CRow>

                    <CRow id="secondrow">
                      <CCol md="4">
                        <CLabel htmlFor="nf-email">Date of Joining</CLabel>
                        <CInput
                          id="exampleInputName2"
                          placeholder=" " value="ertead123@gmail.com"
                          required
                        />
                      </CCol>
                     
                      <CCol md="4">
                        <CLabel htmlFor="exampleInputName2" className="pr-1">
                          Marital Status
                        </CLabel>
                        <CInput
                          id="exampleInputName2"
                          placeholder=" " value="married"
                          type="text"
                          required
                        />
                      </CCol>
                      <CCol md="4">
                        <CLabel htmlFor="exampleInputName2" className="pr-1">
                          Family Members
                        </CLabel>
                        <CInput
                          id="exampleInputName2"
                          placeholder=" " value="Male"
                          type="number"
                          required
                        />
                      </CCol>
                      
                    </CRow>
                  
                  </div>
                  <hr></hr>

                  <div>
                    <p><b>Address</b></p>
                    <div>
                    
                    <CRow id="firstrow">
                      <CCol md="4">
                        <CLabel htmlFor="exampleInputName2" className="pr-1">
                          Home Address
                        </CLabel>
                        <CInput
                          id="exampleInputName2"
                          placeholder="" value="Address 1"
                          required
                        />
                      </CCol>
                      
                      <CCol md="4">
                        <CLabel htmlFor="exampleInputName2" className="pr-1">
                          Office Address
                        </CLabel>
                        <CInput
                          id="exampleInputName2"
                          placeholder="" value="Address 2"
                          required
                        />
                      </CCol>
                      <CCol md="4">
                        <CLabel htmlFor="exampleInputName2" className="pr-1">
                          Alternate Address #1
                        </CLabel>
                        <CInput
                          id="exampleInputName2"
                          placeholder="" value="Address 3"
                          required
                        />
                      </CCol>
                      <CCol style={{marginTop:'10px'}} md="4">
                        <CLabel htmlFor="exampleInputName2" className="pr-1">
                          Alternate Address #2
                        </CLabel>
                        <CInput
                          id="exampleInputName2"
                          placeholder="" value="Address 3"
                          required
                        />
                      </CCol>


                    </CRow>
                    
                  </div>
                  <hr></hr>
                  </div>
                 <hr></hr>


                 <div>
                 <p><b>Jazz Cash Information</b></p>
                 <CRow id="secondrow">
                  <CCol md="3">
                        <CLabel htmlFor="exampleInputName2" className="pr-1">
                        User Number
                        </CLabel>
                        <CInput
                          id="exampleInputName2"
                          placeholder=" " value="956687685"
                          required
                        />
                      </CCol>

                    </CRow>
                 </div>
                    <hr></hr>
           
                </CFormGroup>
              </CForm>
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
            <CInput  type="file" onChange={this.onChange} />
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
export default Edit