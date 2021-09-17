import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CButton,
  CForm,
  CFormGroup,
  CLabel,
  CInput,
  CSelect,
  CLink,
} from '@coreui/react';
import TAABEDAR_SERVICE from 'src/services/service';
import '../../style.css';
import {IKContext, IKImage, IKUpload} from 'imagekitio-react';

const Edit = props => {
  console.log ('props data', props);
  let history = useHistory ();

  const [CityData, setCityData] = useState ([]);
  const [AreaData, setAreaData] = useState ();
  const [CategoryData, setCategoryData] = useState ();
  const [MerchantTypeData, setMerchantTypeData] = useState ();

  const {
    Name,
    Branch,
    TypeId,
    CityId,
    AreaId,
    CategoryId,
    Address,
    Mobile,
    Discount,
    Document,
    ShopImage,
    OwnerName,
    Email,
    OwnerPassword,
    Ownerphone,
    OwnerGender,
    OwnerDob,
    BankName,
    AccountNumber,
    Ifsccode,
    BankBranch,
    JezzCash,
    BankNameId,
    pkid,
  } = props.location.state.data;

  const onSuccess = res => {
    console.log (res);
  };

  const onError = res => {
    console.log (res);
  };

  const [VendorFeilds, setVendorFeilds] = useState ({
    VendorName: Name,
    VendorBranch: Branch,
    VendorType: TypeId,
    City: CityId,
    Area: AreaId,
    Category: CategoryId,
    Address: Address,
    Phone: Mobile,
    Discount: Discount,
    Document: Document,
    ShopImage: ShopImage,
    OwnerName: OwnerName,
    OwnerEmail: Email,
    OwnerPassword: OwnerPassword,
    Ownerphone: Ownerphone,
    OwnerGender: OwnerGender,
    OwnerDob: OwnerDob,
    BankName: BankName,
    AccountNumber: AccountNumber,
    Ifsccode: Ifsccode,
    Branch: BankBranch,
    JezzCash: JezzCash,
    BankId: BankNameId,
    pkid: pkid,
  });

  const GetAllCities = () => {
    // setVendorFeilds ({
    //   VendorName: props.location.data.Name,
    //   VendorBranch: props.location.data.Branch,
    //   VendorType: props.location.TypeId,
    //   City: props.location.data.CityId,
    //   Area: props.location.data.AreaId,
    //   Category: props.location.data.CategoryId,
    //   Address: props.location.data.Address,
    //   Phone: props.location.data.Mobile,
    //   Discount: props.location.data.Discount,
    //   Document: props.location.data.Document,
    //   ShopImage: props.location.data.ShopImage,
    //   OwnerName: props.location.data.OwnerName,
    //   OwnerEmail: props.location.data.Email,
    //   OwnerPassword: props.location.data.OwnerPassword,
    //   Ownerphone: props.location.data.Ownerphone,
    //   OwnerGender: props.location.data.OwnerGender,
    //   OwnerDob: props.location.data.OwnerDob,
    //   BankName: props.location.data.BankName,
    //   AccountNumber: props.location.data.AccountNumber,
    //   Ifsccode: props.location.data.Ifsccode,
    //   Branch: props.location.data.BankBranch,
    //   JezzCash: props.location.data.JezzCash,
    //   BankId: props.location.data.BankNameId,
    //   pkid: props.location.data.pkid,
    // });
    axios ({
      method: 'GET',
      url: TAABEDAR_SERVICE + '/GetCity',
      headers: {
        'content-type': 'application/json',
      },
      params: {
        language_code: 'en',
      },
    })
      .then (response => {
        const CityOption = response.data.map (item => (
          <option value={item.pkid}>{item.City}</option>
        ));
        setCityData (CityOption);
        setVendorFeilds ({
          ...VendorFeilds,
          City: CityId,
        });
        
      })
      .catch (error => {
        console.log (error);
      });
      GetAreaByCity (CityId);
  };

  const GetAllCategory = () => {
    axios ({
      method: 'GET',
      url: TAABEDAR_SERVICE + '/GetVendorCategory',
      headers: {
        'content-type': 'application/json',
      },
      params: {
        language_code: 'en',
      },
    })
      .then (response => {
        const CategoryOption = response.data.map (item => (
          <option value={item.pkid}>{item.Category}</option>
        ));
        setCategoryData (CategoryOption);
        setVendorFeilds ({
          ...VendorFeilds,
          Category: props.location.state.data.CategoryId,
        });
      })
      .catch (error => {
        console.log (error);
      });
  };

  const GetAllMerchantType = () => {
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
        setMerchantTypeData (MerchantTypeOption);
        setVendorFeilds ({...VendorFeilds, VendorType: TypeId});
      })
      .catch (error => {
        console.log (error);
      });
  };

  React.useEffect (() => {
    GetAllCities ();
    GetAllCategory ();
    GetAllMerchantType ();
  }, []);

  const GetAreaByCity = CityId => {
    axios ({
      method: 'GET',
      url: TAABEDAR_SERVICE + '/GetAreaByCityId/' + CityId + '',
      headers: {
        'content-type': 'application/json',
      },
    })
      .then (response => {
        const AreaData = response.data.map (item => (
          <option value={item.pkid}>{item.Area}</option>
        ));
        setAreaData (AreaData);
        setVendorFeilds ({
          ...VendorFeilds,
          Area: props.location.state.data.AreaId,
        });
      })
      .catch (error => {
        console.log (error);
      });
  };

  const UpdateVendorDetails = () => {
    if (VendorFeilds.VendorType == '-1') {
      alert ('Please Select Merchant Type');
    } else if (
      VendorFeilds.VendorName == '' ||
      VendorFeilds.VendorName == null
    ) {
      alert ('Please Enter Vendor Name');
    } else if (
      VendorFeilds.VendorName.search (/^([a-zA-Z]{15,25})+$/) == '-1'
    ) {
      alert ('Vendor Name Cant have Numerics');
    } else if (
      VendorFeilds.VendorBranch == '' ||
      VendorFeilds.VendorBranch == null
    ) {
      alert ('Please Enter Vendor Branch');
    } else if (
      VendorFeilds.VendorBranch.search (/^([a-zA-Z]{15,25})+$/) == '-1'
    ) {
      alert ('Branch Cant have Numerics');
    } else if (VendorFeilds.City == '' || VendorFeilds.City == null) {
      alert ('Please Select City');
    } else if (VendorFeilds.Area == '' || VendorFeilds.Area == null) {
      alert ('Please Select Area');
    } else if (VendorFeilds.Category == '' || VendorFeilds.Category == null) {
      alert ('Please Select Category');
    } else if (VendorFeilds.Address == '' || VendorFeilds.Address == null) {
      alert ('Please Enter Address');
    } else if (VendorFeilds.Phone == '' || VendorFeilds.Phone == null) {
      alert ('Please Enter Mobile Number');
    } else if (
      VendorFeilds.Phone.search (/^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/) == '-1'
    ) {
      alert ('Please Enter Valid Mobile Number');
    } else if (VendorFeilds.Discount == '' || VendorFeilds.Discount == null) {
      // else if (VendorFeilds.Phone.length != 10) {
      //   alert("Please Enter Valid Mobile Number");
      // }
      alert ('Please Enter Discount');
    } else if (VendorFeilds.OwnerName == '' || VendorFeilds.OwnerName == null) {
      alert ('Please Enter Owner Name');
    } else if (VendorFeilds.OwnerName.search (/^([a-zA-Z]{15,25})+$/) == '-1') {
      alert ('Owner Name Cant Have Numerics');
    } else if (
      VendorFeilds.OwnerEmail == '' ||
      VendorFeilds.OwnerEmail == null
    ) {
      alert ('Please Enter Owner Email');
    } else if (
      VendorFeilds.OwnerEmail.search (
        /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
      ) == '-1'
    ) {
      alert ('Owner Email Invalid!');
    } else if (
      VendorFeilds.OwnerPassword == '' ||
      VendorFeilds.OwnerPassword == null
    ) {
      alert ('Please Enter Owner Password');
    } else if (
      VendorFeilds.OwnerPassword.search (
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
      ) == '-1'
    ) {
      alert (
        'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character'
      );
    } else if (
      VendorFeilds.Ownerphone == '' ||
      VendorFeilds.Ownerphone == null
    ) {
      alert ('Please Enter Owner Phone Number');
    } else if (
      VendorFeilds.Ownerphone.search (/^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/) ==
      '-1'
    ) {
      alert ('Invalid Owner Phone Number');
    } else if (VendorFeilds.OwnerGender == '-1') {
      alert ('Please Select Owner Gender');
    } else if (VendorFeilds.OwnerDob == '' || VendorFeilds.OwnerDob == null) {
      alert ('Please Enter Owner Date Of Birth');
    } else if (VendorFeilds.BankName == '' || VendorFeilds.BankName == null) {
      alert ('Please Enter Bank Name');
    } else if (VendorFeilds.BankName.search (/^([a-zA-Z]{15,25})+$/) == '-1') {
      alert ('Bank Name cant Have Numerics');
    } else if (
      VendorFeilds.AccountNumber == '' ||
      VendorFeilds.AccountNumber == null
    ) {
      alert ('Please Enter Bank Account Number');
    } else if (VendorFeilds.Ifsccode == '' || VendorFeilds.Ifsccode == null) {
      alert ('Please Enter Bank IBAN Code');
    } else if (VendorFeilds.Branch == '' || VendorFeilds.Branch == null) {
      // else if (
      //   VendorFeilds.Ifsccode.search(/^[A-Za-z]{4}[a-zA-Z0-9]{7}$/) == "-1"
      // ) {
      //   alert("Invalid IBAN Code");
      // }
      alert ('Please Enter Bank Branch');
    } else if (VendorFeilds.Branch.search (/^([a-zA-Z]{15,25})+$/) == '-1') {
      alert (' Bank Branch Cant Have Numerics');
    } else if (VendorFeilds.JezzCash == '' || VendorFeilds.JezzCash == null) {
      alert ('Please Enter Jezz Cash Number');
    } else {
      var obj = {
        VendorName: VendorFeilds.VendorName,
        VendorBranch: VendorFeilds.VendorBranch,
        VendorType: VendorFeilds.VendorType,
        City: VendorFeilds.City,
        Area: VendorFeilds.Area,
        Category: VendorFeilds.Category,
        Address: VendorFeilds.Address,
        Phone: VendorFeilds.Phone,
        Discount: VendorFeilds.Discount,
        Document: VendorFeilds.Document,
        ShopImage: VendorFeilds.ShopImage,
        OwnerName: VendorFeilds.OwnerName,
        OwnerEmail: VendorFeilds.OwnerEmail,
        OwnerPassword: VendorFeilds.OwnerPassword,
        Ownerphone: VendorFeilds.Ownerphone,
        OwnerGender: VendorFeilds.OwnerGender,
        OwnerDob: VendorFeilds.OwnerDob,
        BankName: VendorFeilds.BankName,
        AccountNumber: VendorFeilds.AccountNumber,
        Ifsccode: VendorFeilds.Ifsccode,
        Branch: VendorFeilds.Branch,
        JezzCash: VendorFeilds.JezzCash,
        BankId: VendorFeilds.BankId,
        pkid: VendorFeilds.pkid,
      };

      console.log (obj);

      axios.post (TAABEDAR_SERVICE + '/UpdateVendor', obj).then (response => {
        if (response.data == '1') {
          alert ('Vendor Details Updated Sucessfull');
          setVendorFeilds ({
            VendorName: '',
            VendorBranch: '',
            VendorType: '-1',
            City: '',
            Area: '-1',
            Category: '-1',
            Address: '',
            Phone: '',
            Discount: '',
            Document: '',
            ShopImage: '',
            OwnerName: '',
            OwnerEmail: '',
            OwnerPassword: '',
            Ownerphone: '',
            OwnerGender: '-1',
            OwnerDob: '',
            BankName: '',
            AccountNumber: '',
            Ifsccode: '',
            Branch: '',
            JezzCash: '',
            BankId: '',
            pkid: '',
          });
          history.push ('/ViewVendors');
        } else if (response.data == '2') {
          alert ('Failed To Update');
        }
      });
    }
  };

  const publicKey = 'public_Q88FTm6/mKTXhbicC8rJNyROsbU=';
  const urlEndpoint = 'https://ik.imagekit.io/h3rqsqucfge/';
  const authenticationEndpoint = 'http://localhost:3001/auth';

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
          <CCard>
            <CCardBody>
              <CRow>
                <CCol md="1">
                  <div>
                    <CLink to="/ViewVendors">
                      <CButton size="sm" id="AddEmp">
                        Back
                      </CButton>
                    </CLink>

                    <br />
                  </div>
                </CCol>
              </CRow>
              <CRow>
                <CCol>
                  <CCard>
                    <CCardHeader>Add Vendors</CCardHeader>
                    <CCardBody>
                      <CForm
                        method="post"
                        encType="multipart/form-data"
                        className="form-horizontal"
                      >
                        <CFormGroup className="pr-1">
                          <div>
                            <p>
                              <b>Store Information</b>
                            </p>
                            <CRow id="firstrow">
                              <CCol md="3">
                                <CLabel htmlFor="nf-email">
                                  Merchant Type
                                </CLabel>
                                <CSelect
                                  custom
                                  name="city"
                                  value={VendorFeilds.VendorType}
                                  onChange={event => {
                                    setVendorFeilds ({
                                      ...VendorFeilds,
                                      VendorType: event.target.value,
                                    });
                                  }}
                                  id="city"
                                >
                                  <option value="-1">
                                    Select Merchant Type
                                  </option>
                                  {MerchantTypeData}
                                </CSelect>
                              </CCol>
                              <CCol md="3">
                                <CLabel
                                  htmlFor="exampleInputName2"
                                  className="pr-1"
                                >
                                  Name
                                </CLabel>
                                <CInput
                                  id="exampleInputName2"
                                  placeholder=""
                                  required
                                  value={VendorFeilds.VendorName}
                                  onChange={event => {
                                    setVendorFeilds ({
                                      ...VendorFeilds,
                                      VendorName: event.target.value,
                                    });
                                  }}
                                />
                              </CCol>
                              <CCol md="3">
                                <CLabel
                                  htmlFor="exampleInputName2"
                                  className="pr-1"
                                >
                                  Branch
                                </CLabel>
                                <CInput
                                  id="exampleInputName2"
                                  placeholder=""
                                  required
                                  value={VendorFeilds.VendorBranch}
                                  onChange={event => {
                                    setVendorFeilds ({
                                      ...VendorFeilds,
                                      VendorBranch: event.target.value,
                                    });
                                  }}
                                />
                              </CCol>
                              <CCol md="3">
                                <CLabel htmlFor="nf-email">City</CLabel>
                                <CSelect
                                  custom
                                  name="city"
                                  value={VendorFeilds.City}
                                  onChange={event => {
                                    setVendorFeilds ({
                                      ...VendorFeilds,
                                      City: event.target.value,
                                    });
                                    GetAreaByCity (event.target.value);
                                  }}
                                  id="city"
                                >
                                  <option value="-1">Select City</option>
                                  {CityData}
                                </CSelect>
                              </CCol>
                            </CRow>
                            <CRow id="secondrow">
                              <CCol md="3">
                                <CLabel htmlFor="nf-email">Area</CLabel>
                                <CSelect
                                  custom
                                  name="Province"
                                  value={VendorFeilds.Area}
                                  onChange={event => {
                                    setVendorFeilds ({
                                      ...VendorFeilds,
                                      Area: event.target.value,
                                    });
                                  }}
                                  id="Province"
                                >
                                  <option value="-1">Select Area</option>
                                  {AreaData}
                                </CSelect>
                              </CCol>
                              <CCol md="3">
                                <CLabel htmlFor="nf-email">Category</CLabel>
                                <CSelect
                                  custom
                                  name="city"
                                  value={VendorFeilds.Category}
                                  onChange={event => {
                                    setVendorFeilds ({
                                      ...VendorFeilds,
                                      Category: event.target.value,
                                    });
                                  }}
                                  id="city"
                                >
                                  <option value="-1">Select Category</option>
                                  {CategoryData}
                                </CSelect>
                              </CCol>
                              <CCol md="3">
                                <CLabel
                                  htmlFor="exampleInputName2"
                                  className="pr-1"
                                >
                                  Address
                                </CLabel>
                                <CInput
                                  id="exampleInputName2"
                                  placeholder=" "
                                  required
                                  value={VendorFeilds.Address}
                                  onChange={event => {
                                    setVendorFeilds ({
                                      ...VendorFeilds,
                                      Address: event.target.value,
                                    });
                                  }}
                                />
                              </CCol>
                              <CCol md="3">
                                <CLabel
                                  htmlFor="exampleInputName2"
                                  className="pr-1"
                                >
                                  Mobile Number
                                </CLabel>
                                <CInput
                                  id="exampleInputName2"
                                  placeholder=" "
                                  type="number"
                                  value={VendorFeilds.Phone}
                                  onChange={event => {
                                    setVendorFeilds ({
                                      ...VendorFeilds,
                                      Phone: event.target.value,
                                    });
                                  }}
                                  required
                                />
                              </CCol>
                            </CRow>
                            <CRow>
                              <CCol md="3">
                                <CLabel
                                  htmlFor="exampleInputName2"
                                  className="pr-1"
                                >
                                  Document
                                </CLabel>
                                <IKContext
                                  publicKey={publicKey}
                                  urlEndpoint={urlEndpoint}
                                  authenticationEndpoint={
                                    authenticationEndpoint
                                  }
                                >
                                  <IKUpload
                                    name="image"
                                    type="file"
                                    // fileName={formik.values.image}
                                    onError={onError}
                                    onSuccess={onSuccess}
                                    onChange={event => {
                                      setVendorFeilds ({
                                        ...VendorFeilds,
                                        ShopImage: event.target.value,
                                      });
                                    }}
                                  />
                                </IKContext>
                              </CCol>
                              <CCol md="3">
                                <CLabel
                                  htmlFor="exampleInputName2"
                                  className="pr-1"
                                >
                                  Discount
                                </CLabel>
                                <CInput
                                  id="exampleInputName2"
                                  placeholder=" "
                                  value={VendorFeilds.Discount}
                                  onChange={event => {
                                    setVendorFeilds ({
                                      ...VendorFeilds,
                                      Discount: event.target.value,
                                    });
                                  }}
                                  required
                                />
                              </CCol>
                            </CRow>
                          </div>
                          <hr />
                          <div>
                            <p>
                              <b>Owner Information</b>
                            </p>
                            <CRow id="firstrow">
                              <CCol md="3">
                                <CLabel
                                  htmlFor="exampleInputName2"
                                  className="pr-1"
                                >
                                  Name
                                </CLabel>
                                <CInput
                                  id="exampleInputName2"
                                  placeholder=" "
                                  required
                                  value={VendorFeilds.OwnerName}
                                  onChange={event => {
                                    setVendorFeilds ({
                                      ...VendorFeilds,
                                      OwnerName: event.target.value,
                                    });
                                  }}
                                />
                              </CCol>
                              <CCol md="3">
                                <CLabel
                                  htmlFor="exampleInputName2"
                                  className="pr-1"
                                >
                                  Email
                                </CLabel>
                                <CInput
                                  id="exampleInputName2"
                                  placeholder=" "
                                  required
                                  value={VendorFeilds.OwnerEmail}
                                  onChange={event => {
                                    setVendorFeilds ({
                                      ...VendorFeilds,
                                      OwnerEmail: event.target.value,
                                    });
                                  }}
                                />
                              </CCol>
                              <CCol md="3">
                                <CLabel
                                  htmlFor="exampleInputName2"
                                  className="pr-1"
                                >
                                  Password
                                </CLabel>
                                <CInput
                                  id="exampleInputName2"
                                  placeholder=" "
                                  required
                                  value={VendorFeilds.OwnerPassword}
                                  onChange={event => {
                                    setVendorFeilds ({
                                      ...VendorFeilds,
                                      OwnerPassword: event.target.value,
                                    });
                                  }}
                                />
                              </CCol>
                              <CCol md="3">
                                <CLabel
                                  htmlFor="exampleInputName2"
                                  className="pr-1"
                                >
                                  Mobile
                                </CLabel>
                                <CInput
                                  id="exampleInputName2"
                                  placeholder=" "
                                  required
                                  value={VendorFeilds.Ownerphone}
                                  onChange={event => {
                                    setVendorFeilds ({
                                      ...VendorFeilds,
                                      Ownerphone: event.target.value,
                                    });
                                  }}
                                />
                              </CCol>
                            </CRow>
                            <CRow id="secondrow">
                              <CCol md="3">
                                <CLabel htmlFor="nf-email">Gender</CLabel>
                                <CSelect
                                  custom
                                  name="city"
                                  value={VendorFeilds.OwnerGender}
                                  onChange={event => {
                                    setVendorFeilds ({
                                      ...VendorFeilds,
                                      OwnerGender: event.target.value,
                                    });
                                  }}
                                  id="city"
                                >
                                  <option value="-1">Select Gender</option>
                                  <option value="Male">Male</option>
                                  <option value="FeMale">Female</option>
                                </CSelect>
                              </CCol>
                              <CCol md="3">
                                <CLabel
                                  htmlFor="exampleInputName2"
                                  className="pr-1"
                                >
                                  DOB
                                </CLabel>
                                <CInput
                                  id="exampleInputName2"
                                  placeholder=" "
                                  required
                                  value={VendorFeilds.OwnerDob}
                                  onChange={event => {
                                    setVendorFeilds ({
                                      ...VendorFeilds,
                                      OwnerDob: event.target.value,
                                    });
                                  }}
                                />
                              </CCol>
                            </CRow>
                          </div>
                          <hr />

                          <div>
                            <p>
                              <b>Bank Information</b>
                            </p>
                            <CRow id="firstrow">
                              <CCol md="3">
                                <CLabel
                                  htmlFor="exampleInputName2"
                                  className="pr-1"
                                >
                                  Name
                                </CLabel>
                                <CInput
                                  id="exampleInputName2"
                                  placeholder=" "
                                  required
                                  value={VendorFeilds.BankName}
                                  onChange={event => {
                                    setVendorFeilds ({
                                      ...VendorFeilds,
                                      BankName: event.target.value,
                                    });
                                  }}
                                />
                              </CCol>
                              <CCol md="3">
                                <CLabel
                                  htmlFor="exampleInputName2"
                                  className="pr-1"
                                >
                                  Account Number
                                </CLabel>
                                <CInput
                                  id="exampleInputName2"
                                  placeholder=" "
                                  required
                                  value={VendorFeilds.AccountNumber}
                                  onChange={event => {
                                    setVendorFeilds ({
                                      ...VendorFeilds,
                                      AccountNumber: event.target.value,
                                    });
                                  }}
                                />
                              </CCol>
                              <CCol md="3">
                                <CLabel
                                  htmlFor="exampleInputName2"
                                  className="pr-1"
                                >
                                  IBAN Code
                                </CLabel>
                                <CInput
                                  id="exampleInputName2"
                                  placeholder=" "
                                  required
                                  value={VendorFeilds.Ifsccode}
                                  onChange={event => {
                                    setVendorFeilds ({
                                      ...VendorFeilds,
                                      Ifsccode: event.target.value,
                                    });
                                  }}
                                />
                              </CCol>
                              <CCol md="3">
                                <CLabel
                                  htmlFor="exampleInputName2"
                                  className="pr-1"
                                >
                                  Branch
                                </CLabel>
                                <CInput
                                  id="exampleInputName2"
                                  placeholder=" "
                                  required
                                  value={VendorFeilds.Branch}
                                  onChange={event => {
                                    setVendorFeilds ({
                                      ...VendorFeilds,
                                      Branch: event.target.value,
                                    });
                                  }}
                                />
                              </CCol>
                            </CRow>
                          </div>
                          <hr />
                          <div>
                            <p>
                              <b>Jazz Cash Information</b>
                            </p>
                            <CRow id="secondrow">
                              <CCol md="3">
                                <CLabel
                                  htmlFor="exampleInputName2"
                                  className="pr-1"
                                >
                                  User Number
                                </CLabel>
                                <CInput
                                  id="exampleInputName2"
                                  placeholder=" "
                                  required
                                  value={VendorFeilds.JezzCash}
                                  onChange={event => {
                                    setVendorFeilds ({
                                      ...VendorFeilds,
                                      JezzCash: event.target.value,
                                    });
                                  }}
                                />
                              </CCol>
                            </CRow>
                          </div>
                          <hr />

                          <CRow>
                            <CCol md="4">
                              <div id="inline-btn">
                                <CButton
                                  type="button"
                                  onClick={UpdateVendorDetails}
                                  size="md"
                                  id="Add-btn"
                                >
                                  Add
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
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </div>
  );
  };
  
class UploadStoreImages extends React.Component {
  constructor (props) {
    super (props);
    this.state = {file: null};
    this.onChange = this.onChange.bind (this);
    this.resetFile = this.resetFile.bind (this);
  }
  onChange (event) {
    this.setState ({
      file: URL.createObjectURL (event.target.files[0]),
    });
  }

  resetFile (event) {
    event.preventDefault ();
    this.setState ({file: null});
  }
  render () {
    return (
      <div>
        <CRow>
          <CCol>
            <CLabel htmlFor="exampleInputName2" className="pr-1">
              Store Images
            </CLabel>
            <CInput type="file" onChange={this.onChange} />
          </CCol>
          <CCol>
            {/* {this.state.file && (
            <div style={{ textAlign: "center" }}>
              <button id="newEmp-btn" onClick={this.resetFile}>X</button>
            </div>
          )} */}
            <CLabel htmlFor="exampleInputName2" className="pr-1">
              Added Store Image
            </CLabel>
            <img style={{width: '50%'}} src={this.state.file} />
          </CCol>
        </CRow>
      </div>
    );
  }
}
export default Edit;
