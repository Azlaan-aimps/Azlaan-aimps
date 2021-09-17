import React, { useState } from "react";
import axios from "axios";
import {
  CCard,
  CCardBody,
  CCardHeader,
  CButton,
  CCardFooter,
  CForm,
  CFormGroup,
  CInput,
  CLabel,
  CRow,
  CCol,
} from "@coreui/react";

import "../../style.css";
import TAABEDAR_SERVICE from "src/services/service";
import { Delete } from "@material-ui/icons";

const ContactUs = () => {
  const [AddButton, setAddButton] = useState(true);
  const [UpdateButton, setUpdateButton] = useState(false);
  const [DelButton, setDelButton] = useState(false);
  const [pkid, setPkid] = useState("");

  const [title, setTitle] = useState("");
  const [number, setnumber] = useState("");
  const [Pnumber, setnumberr] = useState("");
  const [address, setaddress] = useState("");
  const [paddress, setaddresss] = useState("");
  const [email, setEmail] = useState("");

  React.useEffect(() => {
    fetchData();
  }, []);

  const [responseData, setResponseData] = useState("");
  const fetchData = React.useCallback(() => {
    axios({
      method: "GET",
      url: TAABEDAR_SERVICE + "/GetContactUs",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((response) => {
        console.log(response.data);
        if (response.data.length == 0) {
          setTitle("");
          setnumber("");
          setnumberr("");
          setaddress("");
          setaddresss("");
          setEmail("");
          setPkid("");

          setAddButton(true);
          setUpdateButton(false);
          setDelButton(false);
        } else {
          setTitle(response.data[0].Title);
          setnumber(response.data[0].Phone1);
          setnumberr(response.data[0].Phone2);
          setaddress(response.data[0].Address1);
          setaddresss(response.data[0].Address2);
          setEmail(response.data[0].Email);
          setPkid(response.data[0].pkid);

          setAddButton(false);
          setDelButton(true);
          setUpdateButton(true);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const Add = () => {
    if (title == "" || title == null || title == undefined) {
      alert("Please Enter Contact Title");
    } else if (number == "" || number == null || number == undefined) {
      alert("Please Enter Contact First Number");
    } else if (number.length != 10) {
      alert("Please Enter Contact Valid First Number");
    } else if (Pnumber == "" || Pnumber == null || Pnumber == undefined) {
      alert("Please Enter Contact Second Number");
    } else if (Pnumber.length != 10) {
      alert("Please Enter Contact Valid Second Number");
    } else if (address == "" || address == null || address == undefined) {
      alert("Please Enter Contact First Address");
    } else if (paddress == "" || paddress == null || paddress == undefined) {
      alert("Please Enter Contact Second Address");
    } else if (email == "" || email == null || email == undefined) {
      alert("Please Enter Contact Email");
    } else if (
      email.search(
        /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
      ) == "-1"
    ) {
      alert("Please Enter Valid Email");
    } else {
      const obj = {
        Title: title,
        Phone1: number,
        Phone2: Pnumber,
        Address1: address,
        Address2: paddress,
        Email: email,
      };

      console.log(obj);

      axios.post(TAABEDAR_SERVICE + "/AddContactUs ", obj).then((response) => {
        if (response.data == "0") {
          alert("Contact us Already Exist");
        } else if (response.data == "1") {
          alert("Contact us Added");
          fetchData();
        } else if (response.data == "2") {
          alert("Failed To Add");
        }
      });
    }
  };

  const Update = () => {
    if (title == "" || title == null || title == undefined) {
      alert("Please Enter Contact Title");
    } else if (number == "" || number == null || number == undefined) {
      alert("Please Enter Contact First Number");
    } else if (Pnumber == "" || Pnumber == null || Pnumber == undefined) {
      alert("Please Enter Contact Second Number");
    } else if (address == "" || address == null || address == undefined) {
      alert("Please Enter Contact First Address");
    } else if (paddress == "" || paddress == null || paddress == undefined) {
      alert("Please Enter Contact Second Address");
    } else if (email == "" || email == null || email == undefined) {
      alert("Please Enter Contact Email");
    } else {
      const obj = {
        Title: title,
        Phone1: number,
        Phone2: Pnumber,
        Address1: address,
        Address2: paddress,
        Email: email,
        pkid: pkid,
      };

      console.log(obj);

      axios
        .post(TAABEDAR_SERVICE + "/UpdateContactUs ", obj)
        .then((response) => {
          if (response.data == "1") {
            alert("contact us Update");
            fetchData();
          } else if (response.data == "0") {
            alert("Failed To Update");
          }
        });
    }
  };

  const Delete = () => {
    axios({
      method: "GET",
      url: TAABEDAR_SERVICE + "/DeleteContactUs/" + pkid + "",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((response) => {
        console.log("Delete Response:" + response.data);
        if (response.data == true) {
          alert("Deleted");
          fetchData();
        } else {
          alert("Failed");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // const [number, UpdateContactus] = useState('U');

  const Updatebtn = () => (
    <CButton type="button" onClick={Update} size="md" id="Add-btn">
      Update
    </CButton>
  );

  const Addbtn = () => (
    <CButton type="button" onClick={Add} size="md" id="Add-btn">
      Add
    </CButton>
  );

  const Delbtn = () => (
    <CButton
      type="button"
      style={{ marginLeft: "3%" }}
      onClick={Delete}
      size="md"
      id="Add-btn"
    >
      Delete
    </CButton>
  );

  return (
    <>
      <CRow>
        <CCol md="3"></CCol>
        <CCol md="6">
          <h1 id="ccmaster">Contact Us</h1>
          <br></br>
        </CCol>
        <CCol md="3"></CCol>
      </CRow>
      <CRow>
        <CCol md="3"></CCol>
        <CCol xs="12" sm="12" md="7" lg="7" xl="7" className="mb-3 mb-xl-0">
          <CCard>
            <CCardBody>
              <CRow>
                <CCol>
                  <CCard>
                    <CCardHeader>Contact Us</CCardHeader>
                    <CCardBody>
                      <CForm action="" method="post">
                        <CFormGroup className="pr-1">
                          <CLabel htmlFor="exampleInputName2">Title</CLabel>
                          <CInput
                            id="exampleInputName2"
                            className="Inputs"
                            value={title}
                            onChange={(event) => {
                              let value = event.target.value;
                              value = value.replace(/[^A-Z a-z]/gi, "");
                              setTitle(value);
                            }}
                            required
                          />

                          <CRow>
                            <CCol md="6">
                              <CLabel
                                htmlFor="exampleInputName2"
                                className="pr-1"
                              >
                                {" "}
                                Phone-1
                              </CLabel>
                              <CInput
                                type="number"
                                pattern="^-?[0-9]\d*\.?\d*$"
                                id="exampleInputName2"
                                className="Inputs"
                                value={number}
                                maxlength="10"
                                onChange={(event) => {
                                  setnumber(event.target.value);
                                }}
                                required
                              />
                            </CCol>
                            <CCol md="6">
                              <CLabel htmlFor="number" className="pr-1">
                                {" "}
                                Phone-2
                              </CLabel>
                              <CInput
                                type="number"
                                pattern="^-?[0-9]\d*\.?\d*$"
                                id="number"
                                className="number"
                                maxlength="10"
                                value={Pnumber}
                                onChange={(event) => {
                                  setnumberr(event.target.value);
                                }}
                                required
                              />
                            </CCol>
                          </CRow>
                          <CRow>
                            <CCol md="6">
                              <CLabel
                                htmlFor="exampleInputName2"
                                className="pr-1"
                              >
                                Address-1
                              </CLabel>
                              <CInput
                                id="exampleInputName2"
                                className="Inputs"
                                value={address}
                                onChange={(event) => {
                                  setaddress(event.target.value);
                                }}
                                required
                              />
                            </CCol>
                            <CCol md="6">
                              <CLabel
                                htmlFor="exampleInputName2"
                                className="pr-1 Phone-2"
                              >
                                Address-2
                              </CLabel>
                              <CInput
                                id="exampleInputName2"
                                className="Inputs"
                                value={paddress}
                                onChange={(event) => {
                                  setaddresss(event.target.value);
                                }}
                                required
                              />
                            </CCol>
                          </CRow>

                          <CRow>
                            <CCol md="6">
                              <CLabel
                                htmlFor="exampleInputEmail2"
                                className="pr-1"
                              >
                                Email
                              </CLabel>
                              <CInput
                                type="email"
                                id="exampleInputEmail2"
                                className="Inputs"
                                value={email}
                                onChange={(event) => {
                                  setEmail(event.target.value);
                                }}
                                required
                              />
                            </CCol>
                          </CRow>
                        </CFormGroup>
                      </CForm>
                      {/* const Updatebtn = () => (
    <CButton type="button" onClick={UpdateContactUs} size="md" id="Add-btn">
      Update
    </CButton> */}
                      {/* <CButton type="submit" size="md" color="success" id="Add-btn" onClick={titlecontact} >
                        Add
                      </CButton> */}
                      {UpdateButton ? <Updatebtn /> : null}
                      {AddButton ? <Addbtn /> : null}
                      {DelButton ? <Delbtn /> : null}

                      {/* <CButton type="button" size="md" color="success" id="Add-btn"  >
                        DELETE
                      </CButton>  */}
                      {/* //<CButton type="submit" size="md" color="success" id="Add-btn" onClick={numberContact} >
                        Add
                      //</CButton>
                      <CButton type="submit" size="md" color="success" id="Add-btn" onClick={PnumberContact} >
                        Add
                      </CButton>
                      <CButton type="submit" size="md" color="success" id="Add-btn" onClick={addressContact} >
                        Add
                      </CButton>
                      <CButton type="submit" size="md" color="success" id="Add-btn" onClick={paddressContact} >
                        Add
                      </CButton>
                      <CButton type="submit" size="md" color="success" id="Add-btn" onClick={emailcontact} >
                        Add
                      </CButton> */}
                    </CCardBody>
                  </CCard>
                </CCol>
              </CRow>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol md="2"></CCol>
      </CRow>
    </>
  );
};

export default ContactUs;
