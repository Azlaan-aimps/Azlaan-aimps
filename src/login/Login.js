import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";

const Login = () => {
  const [email, setemail] = React.useState("");
  const [password, setpassword] = React.useState("");

  const EmailChange = (event) => {
    setemail(event.target.value);
  };

  const passwordChange = (event) => {
    setpassword(event.target.value);
  };

  const handleClick = () => {
    console.log(email);
    console.log(password);
    if (email == "" || email == null) {
      alert("Please Enter Email Address");
    } else if (password == "" || password == null) {
      alert("Please Enter Password");
    } else {
      // fetchData();
      axios({
        method: "GET",
        url:
          "http://192.168.1.3:8086/Tabedar_Dashboard/resourses/projectservice/AdminLogin/" +
          email +
          "/" +
          password,
        headers: {
          "content-type": "application/json",
        },
      })
        .then((response) => {
          setResponseData(response.data);
          if (response.data == true) {
            window.location.href = "/dashboard";
          } else {
            alert("Please Enter valid Credentials");
            window.location.href = "/";
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  let [responseData, setResponseData] = React.useState("");

  // const fetchData = React.useCallback(() => {

  // axios({
  //   method: "GET",
  //   url: "http://192.168.1.3:8086/Tabedar_Dashboard/resourses/projectservice/AdminLogin/"+email+"/"+password,
  //   headers: {
  //     "content-type": "application/json",
  //   },

  // })
  //   .then((response) => {
  //     setResponseData(response.data);
  //     if (response.data == true) {
  //       window.location.href = '/dashboard'
  //     } else {
  //       alert("Please Enter valid Credentials");
  //       window.location.href = '/'
  //     }
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });
  // }, []);

  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      {/* // <div className="c-app c-default-layout flex-row align-items-center" style={{ backgroundImage: 'url("/avatars/p2.jpg")',backgroundRepeat: 'no-repeat',width:'100%'}}>  */}
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="6">
            <CCardGroup>
              <CCard className="p-4" style={{ background: "#aaebf7" }}>
                <CCardBody>
                  <CRow>
                    <CCol md="2">
                      <img
                        style={{
                          width: "175%",
                          marginLeft: "-32%",
                          marginTop: "-23%",
                        }}
                        src="/avatars/BIRYAANIWALA.png"
                        alt="Taabedar"
                      />
                    </CCol>
                    {/* <CCol col="1"></CCol> */}
                    <CCol col="9">
                      <h3>Admin Login</h3>
                      <p>
                        <marque>Delivery Application CMS 1.0</marque>
                      </p>
                    </CCol>
                  </CRow>
                  <br></br>
                  <CForm>
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput
                        type="email"
                        placeholder="Email"
                        autoComplete="off"
                        onChange={EmailChange}
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-lock-locked" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput
                        type="password"
                        placeholder="Password"
                        autoComplete="off"
                        onChange={passwordChange}
                      />
                    </CInputGroup>
                    <CRow>
                      <CCol xs="6">
                        <Link>
                          <CButton
                            style={{
                              background: "azure",
                              fontWeight: " 500",
                              border: " 1px solid #17a2b8",
                            }}
                            onClick={handleClick}
                            active
                            tabIndex={-1}
                          >
                            Login
                          </CButton>
                        </Link>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default Login;
