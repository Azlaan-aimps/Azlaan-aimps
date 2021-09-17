import React, {useState} from 'react';
import axios from 'axios';
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormGroup,
  CInput,
  CSelect,
  CRow,
  CDataTable,
  CLabel,
} from '@coreui/react';
import EditIcon from '@material-ui/icons/Edit';
import DeleteSharpIcon from '@material-ui/icons/DeleteSharp';
import '../../style.css';
const table = {placeholder: 'Search here...', label: 'Search:  '};
const items = {label: 'Rows:', values: [5, 10, 25, 50, 75, 100]};
const fields = [{key: 'Action'}, {key: 'Country'}];
const fields1 = [{key: 'Action'}, {key: 'Country'}, {key: 'Province'}];
const fields2 = [
  {key: 'Action'},
  {key: 'Country'},
  {key: 'Province'},
  {key: 'City'},
];
const fields3 = [
  {key: 'Action'},
  {key: 'Country'},
  {key: 'Province'},
  {key: 'City'},
  {key: 'Area'},
];

const Location_Master = () => {
  const [myMaster, setMyMaster] = useState ();
  const [countryBtn, setCountryBtn] = useState (false);
  const [provianceBtn, setProvianceBtn] = useState (false);
  const [cityBtn, setCityBtn] = useState (false);
  const [areaBtn, setAreaBtn] = useState (true);

  const Stmt = () => {
    if (myMaster === 'Country') {
      return <Country_Master />;
    } else if (myMaster === 'State') {
      return <State_Master />;
    } else if (myMaster === 'City') {
      return <City_Master />;
    } else if (myMaster === 'Area') {
      return <Area_Master />;
    } else {
      return <Area_Master />;
    }
  };

  const activeColors = () => {
    return {
      backgroundColor: '#ffd701',
      borderColor: '#ffd701',
      color: 'black',
      fontSize: 14,
      fontWeight: 700,
    };
  };

  const defaultColors = () => {
    return {
      backgroundColor: '#3a2216',
      borderColor: '#3a2216',
      color: 'white',
      fontSize: 14,
      fontWeight: 500,
    };
  };

  return (
    <div id="Locroot">
      <CCard>
        <CCardHeader id="ccheader">Location Master</CCardHeader>
        <CCardBody id="Loccard">
          <CRow className="align-items-center">
            <CCol md="3" className="mb-3 mb-xl-0">
              <CButton
                block
                style={countryBtn === true ? activeColors () : defaultColors ()}
                onClick={() => {
                  setMyMaster ('Country');
                  setCityBtn (false);
                  setCountryBtn (true);
                  setProvianceBtn (false);
                  setAreaBtn (false);
                }}
              >
                Country
              </CButton>
            </CCol>
            <CCol md="3" className="mb-3 mb-xl-0">
              <CButton
                block
                style={
                  provianceBtn === true ? activeColors () : defaultColors ()
                }
                onClick={() => {
                  setMyMaster ('State');
                  setCityBtn (false);
                  setCountryBtn (false);
                  setProvianceBtn (true);
                  setAreaBtn (false);
                }}
              >
                Province
              </CButton>
            </CCol>
            <CCol md="3" className="mb-3 mb-xl-0">
              <CButton
                block
                style={cityBtn === true ? activeColors () : defaultColors ()}
                onClick={() => {
                  setMyMaster ('City');
                  setCityBtn (true);
                  setCountryBtn (false);
                  setProvianceBtn (false);
                  setAreaBtn (false);
                }}
              >
                City
              </CButton>
            </CCol>
            <CCol md="3" className="mb-3 mb-xl-0">
              <CButton
                block
                style={areaBtn === true ? activeColors () : defaultColors ()}
                onClick={() => {
                  setMyMaster ('Area');
                  setCityBtn (false);
                  setCountryBtn (false);
                  setProvianceBtn (false);
                  setAreaBtn (true);
                }}
              >
                Area
              </CButton>
            </CCol>
          </CRow>
        </CCardBody>
      </CCard>
      <div>{Stmt ()}</div>
    </div>
  );
};

const Country_Master = () => {
  const [countryPkid, setCountryPkid] = useState ('');
  const [AddButton, setAddButton] = useState (true);
  const [UpdateButton, setUpdateButton] = useState (false);
  const [countryCode, setCountryCode] = useState ('');

  const countryCodeChange = event => {
    setCountryCode (event.target.value);
  };

  const [country, setCountry] = useState ();

  const countryChange = event => {
    setCountry (event.target.value);
  };

  const AddCountry = () => {
    if (country == '' || country == null) {
      alert ('Please Enter Country Name');
    } else {
      const obj = {
        country: country,
      };

      axios
        .post (
          'http://192.168.1.3:8086/Tabedar_Dashboard/resourses/projectservice/AddCountry',
          obj
        )
        .then (response => {
          if (response.data == '0') {
            alert ('Country Already Exist');
          } else if (response.data == '1') {
            alert ('Country Added Successfully');
            fetchData ();
            setCountry ('');
          } else if (response.data == '2') {
            alert ('Failed To Add');
          }
        });
    }
  };

  const UpdateCountry = () => {
    if (country == '' || country == null) {
      alert ('Please Enter Country Name');
    } else {
      const obj = {
        country: country,
        pkid: countryPkid,
      };
      axios
        .post (
          'http://192.168.1.3:8086/Tabedar_Dashboard/resourses/projectservice/UpdateCountry',
          obj
        )
        .then (response => {
          if (response.data == '0') {
            alert ('Country Already Exist');
          } else if (response.data == '1') {
            alert ('Country Details Updated');
            fetchData ();
            setCountryPkid ('');
            setCountry ('');
            setAddButton (true);
            setUpdateButton (false);
          }
        });
    }
  };

  const EditContry = (id, country) => {
    setCountryPkid (id);
    setCountry (country);
    setAddButton (false);
    setUpdateButton (true);
  };

  const DeleteCountry = id => {
    axios ({
      method: 'GET',
      url: 'http://192.168.1.3:8086/Tabedar_Dashboard/resourses/projectservice/DeleteCountry/' +
        id +
        '',
      headers: {
        'content-type': 'application/json',
      },
      params: {
        language_code: 'en',
      },
    })
      .then (response => {
        if (response.data == true) {
          alert ('Selected Country Deleted');
          fetchData ();
        } else {
          alert ('Failed To Delete Country');
        }
      })
      .catch (error => {
        console.log (error);
      });
  };

  let [responseData, setResponseData] = React.useState ('');

  const fetchData = React.useCallback (() => {
    axios ({
      method: 'GET',
      url: 'http://192.168.1.3:8086/Tabedar_Dashboard/resourses/projectservice/GetCountry',
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
  }, []);

  React.useEffect (() => {
    fetchData ();
  }, []);

  const Updatebtn = () => (
    <CButton type="button" onClick={UpdateCountry} size="md" id="Add-btn">
      Update
    </CButton>
  );

  const Addbtn = () => (
    <CButton type="button" onClick={AddCountry} size="md" id="Add-btn">
      Add
    </CButton>
  );

  return (
    <div>
      <h1 id="ccmaster">Country Master</h1>
      <CRow>
        <CCol xs="12" sm="12" md="4" lg="4" xl="4" className="mb-3 mb-xl-0">
          <div id="country-master">
            <CCard>
              <CCardBody>
                <CRow>
                  <CCol>
                    <CCard>
                      <CCardHeader>Add Country</CCardHeader>
                      <CCardBody>
                        <CForm
                          action=""
                          method="post"
                          encType="multipart/form-data"
                          className="form-horizontal"
                        >
                          {/* <CFormGroup row>
                            <CCol xs="12" md="12">
                              <CLabel>Country-Code</CLabel>
                              <CInput
                                id="text-input1"
                                name="text-input"
                                placeholder="Code"
                                type="numeric"
                                onChange={countryCodeChange}
                              />
                            </CCol>
                          </CFormGroup> */}

                          <CFormGroup row>
                            <CCol xs="12" md="12">
                              <CLabel>Country</CLabel>
                              <CInput
                                id="text-input"
                                name="text-input"
                                placeholder="Country"
                                value={country}
                                onChange={countryChange}
                              />
                            </CCol>
                          </CFormGroup>
                          {UpdateButton && <Updatebtn />}
                          {AddButton && <Addbtn />}
                        </CForm>
                      </CCardBody>
                    </CCard>
                  </CCol>
                </CRow>
              </CCardBody>
            </CCard>
          </div>
        </CCol>

        <CCol xs="12" sm="12" md="8" lg="8" xl="8" className="mb-3 mb-xl-0">
          <div id="country-table">
            <CCard id="Loccard">
              <CCardBody>
                <CRow>
                  <CCol>
                    <CCard>
                      <CCardHeader>Added Country</CCardHeader>
                      <CCardBody>
                        <CDataTable
                          items={responseData}
                          fields={fields}
                          hover
                          striped
                          bordered
                          tableFilter={table}
                          itemsPerPageSelect={items}
                          sorter
                          size="sm"
                          itemsPerPage={4}
                          pagination
                          scopedSlots={{
                            Action: item => (
                              <td>
                                <CButton
                                  onClick={() => {
                                    EditContry (item.pkid, item.Country);
                                  }}
                                  size="sm"
                                  id="war-btn"
                                >
                                  <EditIcon />
                                  {item.status}
                                </CButton>
                                <CButton
                                  size="sm"
                                  onClick={() => {
                                    DeleteCountry (item.pkid);
                                  }}
                                  size="sm"
                                  id="war-btn"
                                  id="war-btn1"
                                >
                                  <DeleteSharpIcon />
                                  {item.status}
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
          </div>
        </CCol>
      </CRow>
    </div>
  );
};

const City_Master = () => {
  const [AddButton, setAddButton] = useState (true);
  const [UpdateButton, setUpdateButton] = useState (false);
  const [CountryData, setCountryData] = useState ();
  const [StateData, setStateData] = useState ();
  const [Country, setCountry] = useState ();
  const [State, setState] = useState ();
  const [City, setCity] = useState ();
  const [CityPkid, setCitypkid] = useState ();
  const [CityData, setCityData] = useState ();

  React.useEffect (() => {
    GetCountry ();
    GetCities ();
  }, []);

  const GetCountry = React.useCallback (() => {
    axios ({
      method: 'GET',
      url: 'http://192.168.1.3:8086/Tabedar_Dashboard/resourses/projectservice/GetCountry',
      headers: {
        'content-type': 'application/json',
      },
      params: {
        language_code: 'en',
      },
    })
      .then (response => {
        const CountryOption = response.data.map (item => (
          <option value={item.pkid}>{item.Country}</option>
        ));
        setCountryData (CountryOption);
      })
      .catch (error => {
        console.log (error);
      });
  }, []);

  const GetState = React.useCallback (Countrypkid => {
    axios ({
      method: 'GET',
      url: 'http://192.168.1.3:8086/Tabedar_Dashboard/resourses/projectservice/GetStateByCountry/' +
        Countrypkid +
        '',
      headers: {
        'content-type': 'application/json',
      },
    })
      .then (response => {
        const StateOption = response.data.map (item => (
          <option value={item.pkid}>{item.Province}</option>
        ));
        setStateData (StateOption);
      })
      .catch (error => {
        console.log (error);
      });
  }, []);

  const GetStateForUpdate = React.useCallback ((Countrypkid, stateid) => {
    axios ({
      method: 'GET',
      url: 'http://192.168.1.3:8086/Tabedar_Dashboard/resourses/projectservice/GetStateByCountry/' +
        Countrypkid +
        '',
      headers: {
        'content-type': 'application/json',
      },
      params: {
        language_code: 'en',
      },
    })
      .then (response => {
        const StateOption = response.data.map (item => (
          <option value={item.pkid}>{item.Province}</option>
        ));
        setStateData (StateOption);
        setState (stateid);
      })
      .catch (error => {
        console.log (error);
      });
  }, []);

  const CountryChange = event => {
    setCountry (event.target.value);
    GetState (event.target.value);
  };

  const StateCahange = event => {
    setState (event.target.value);
  };

  const CityChange = event => {
    setCity (event.target.value);
  };

  const AddCity = () => {
    if (Country == '-1' || Country == null) {
      alert ('Please Select Country');
    } else if (State == '-1' || State == null) {
      alert ('Please Select Province');
    } else if (City == '' || City == null) {
      alert ('Please Enter City Name');
    } else {
      const obj = {
        country: Country,
        state: State,
        city: City,
      };

      axios
        .post (
          'http://192.168.1.3:8086/Tabedar_Dashboard/resourses/projectservice/AddCity',
          obj
        )
        .then (response => {
          if (response.data == '0') {
            alert ('City Already Exist');
          } else if (response.data == '1') {
            alert ('City Added');
            GetCountry ();
            setCountry ('-1');
            setState ('-1');
            setCity ('');
            GetCities ();
          } else if (response.data == '2') {
            alert ('Failed To Add');
          }
        });
    }
  };

  const EditCity = (id, countryid, stateid, city) => {
    setCitypkid (id);
    setCountry (countryid);
    GetStateForUpdate (countryid, stateid);
    setCity (city);
    setAddButton (false);
    setUpdateButton (true);
  };

  const UpdateCity = () => {
    if (Country == '' || Country == null) {
      alert ('Please Select Country');
    } else if (State == '-1') {
      alert ('Please Select Province');
    } else if (City == '' || City == null) {
      alert ('Please Enter City Name');
    } else {
      const obj = {
        country: Country,
        state: State,
        city: City,
        pkid: CityPkid,
      };

      axios
        .post (
          'http://192.168.1.3:8086/Tabedar_Dashboard/resourses/projectservice/UpdateCity',
          obj
        )
        .then (response => {
          if (response.data == '0') {
            alert ('Country Already Exist');
          } else if (response.data == '1') {
            alert ('Country Details Updated');
            GetCities ();
            GetCountry ();
            setCountry ('-1');
            setState ('-1');
            setCity ('');
            setAddButton (true);
            setUpdateButton (false);
          }
        });
    }
  };

  const DeleteCity = id => {
    axios ({
      method: 'GET',
      url: 'http://192.168.1.3:8086/Tabedar_Dashboard/resourses/projectservice/DeleteCity/' +
        id +
        '',
      headers: {
        'content-type': 'application/json',
      },
    })
      .then (response => {
        if (response.data == true) {
          alert ('Selected City Deleted');
          GetCities ();
          GetCountry ();
          setCountry ('-1');
          setState ('-1');
          setCity ('');
        } else {
          alert ('Failed To Delete City');
        }
      })
      .catch (error => {
        console.log (error);
      });
  };

  const GetCities = React.useCallback (() => {
    axios ({
      method: 'GET',
      url: 'http://192.168.1.3:8086/Tabedar_Dashboard/resourses/projectservice/GetCity',
      headers: {
        'content-type': 'application/json',
      },
    })
      .then (response => {
        setCityData (response.data);
      })
      .catch (error => {
        console.log (error);
      });
  }, []);

  const Updatebtn = () => (
    <CButton type="button" onClick={UpdateCity} size="md" id="Add-btn">
      Update
    </CButton>
  );

  const Addbtn = () => (
    <CButton type="button" onClick={AddCity} size="md" id="Add-btn">
      Add
    </CButton>
  );

  return (
    <div id="city">
      <h1 id="ccmaster">City Master</h1>
      <CRow>
        <CCol sm="12" md="12" lg="4" xl="4" className="mb-3 mb-xl-0">
          <CCard id="city-master">
            <CCardBody>
              <CRow>
                <CCol>
                  <CCard>
                    <CCardHeader>Add City</CCardHeader>
                    <CCardBody>
                      <CForm
                        action=""
                        method="post"
                        encType="multipart/form-data"
                        className="form-horizontal"
                      >
                        <CFormGroup row>
                          <CCol xs="12" md="12">
                            <CLabel>Select Country</CLabel>
                            <CSelect
                              custom
                              name="Country"
                              value={Country}
                              onChange={CountryChange}
                              id="Country"
                            >
                              <option value="-1">Select Country</option>
                              {CountryData}
                            </CSelect>
                          </CCol>
                        </CFormGroup>
                        <CFormGroup row>
                          <CCol xs="12" md="12">
                            <CLabel>Select Province</CLabel>
                            <CSelect
                              custom
                              name="Province"
                              value={State}
                              onChange={StateCahange}
                              id="Province"
                            >
                              <option value="-1">Select Province</option>
                              {StateData}
                            </CSelect>
                          </CCol>
                        </CFormGroup>
                        <CFormGroup row>
                          <CCol xs="12" md="12">
                            <CLabel> City</CLabel>
                            <CInput
                              id="text-input1"
                              name="text-input"
                              value={City}
                              onChange={CityChange}
                              placeholder="City"
                            />
                          </CCol>
                        </CFormGroup>
                        {UpdateButton && <Updatebtn />}
                        {AddButton && <Addbtn />}
                      </CForm>
                    </CCardBody>
                  </CCard>
                </CCol>
              </CRow>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol col="10">
          <CCard id="city-table">
            <CCardBody>
              <CRow>
                <CCol>
                  <CCard>
                    <CCardHeader>Added Cities</CCardHeader>
                    <CCardBody>
                      <CDataTable
                        items={CityData}
                        fields={fields2}
                        hover
                        striped
                        bordered
                        sorter
                        tableFilter={table}
                        itemsPerPageSelect={items}
                        columnFilterSlot
                        size="sm"
                        itemsPerPage={4}
                        pagination
                        scopedSlots={{
                          Action: item => (
                            <td>
                              <CButton
                                size="sm"
                                onClick={() => {
                                  EditCity (
                                    item.pkid,
                                    item.Country_id,
                                    item.State_id,
                                    item.City
                                  );
                                }}
                                id="war-btn"
                              >
                                <EditIcon />
                                {item.status}
                              </CButton>
                              <CButton
                                size="sm"
                                onClick={() => {
                                  DeleteCity (item.pkid);
                                }}
                                id="war-btn1"
                              >
                                <DeleteSharpIcon />
                                {item.status}
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
    </div>
  );
};

const State_Master = () => {
  const [StatePkid, setStatePkid] = useState ();
  const [CountryData, setCountryData] = useState ();
  const [StateData, setStateData] = useState ();
  const [Country, setCountry] = useState ('-1');
  const [State, setState] = useState ();
  const [AddButton, setAddButton] = useState (true);
  const [UpdateButton, setUpdateButton] = useState (false);

  const CountryChange = event => {
    setCountry (event.target.value);
  };

  const StateChange = event => {
    setState (event.target.value);
  };

  const AddProvince = () => {
    if (Country == '-1') {
      alert ('Please Select Country');
    } else if (State == '' || State == null) {
      alert ('Please Enter Province Name');
    } else {
      const obj = {
        country: Country,
        state: State,
      };
      axios
        .post (
          'http://192.168.1.3:8086/Tabedar_Dashboard/resourses/projectservice/AddState',
          obj
        )
        .then (response => {
          if (response.data == '0') {
            alert ('Province Already Exist');
          } else if (response.data == '1') {
            alert ('Province Added Successfully');
            GetCountry ();
            GetState ();
            setState ('');
            setCountry ('-1');
          } else if (response.data == '2') {
            alert ('Failed To Add');
          }
        });
    }
  };

  const EditState = (id, countryid, state) => {
    setStatePkid (id);
    setCountry (countryid);
    setState (state);
    setAddButton (false);
    setUpdateButton (true);
  };

  const UpdateProvince = () => {
    if (Country == '-1') {
      alert ('Please Select Country');
    } else if (State == '' || State == null) {
      alert ('Please Enter Province Name');
    } else {
      const obj = {
        country: Country,
        state: State,
        pkid: StatePkid,
      };
      axios
        .post (
          'http://192.168.1.3:8086/Tabedar_Dashboard/resourses/projectservice/UpdateState',
          obj
        )
        .then (response => {
          if (response.data == '0') {
            alert ('Country Already Exist');
          } else if (response.data == '1') {
            alert ('Country Details Updated');
            GetCountry ();
            GetState ();
            setState ('');
            setCountry ('-1');
            setAddButton (true);
            setUpdateButton (false);
          }
        });
    }
  };

  const DeleteState = id => {
    axios ({
      method: 'GET',
      url: 'http://192.168.1.3:8086/Tabedar_Dashboard/resourses/projectservice/DeleteState/' +
        id +
        '',
      headers: {
        'content-type': 'application/json',
      },
    })
      .then (response => {
        if (response.data == true) {
          alert ('Selected Province Deleted');
          GetState ();
        } else {
          alert ('Failed To Delete Province');
        }
      })
      .catch (error => {
        console.log (error);
      });
  };

  const GetCountry = React.useCallback (() => {
    axios ({
      method: 'GET',
      url: 'http://192.168.1.3:8086/Tabedar_Dashboard/resourses/projectservice/GetCountry',
      headers: {
        'content-type': 'application/json',
      },
    })
      .then (response => {
        const CountryOption = response.data.map (item => (
          <option value={item.pkid}>{item.Country}</option>
        ));
        setCountryData (CountryOption);
      })
      .catch (error => {
        console.log (error);
      });
  }, []);

  const GetState = React.useCallback (() => {
    axios ({
      method: 'GET',
      url: 'http://192.168.1.3:8086/Tabedar_Dashboard/resourses/projectservice/GetState',
      headers: {
        'content-type': 'application/json',
      },
    })
      .then (response => {
        setStateData (response.data);
      })
      .catch (error => {
        console.log (error);
      });
  }, []);

  React.useEffect (() => {
    GetCountry ();
    GetState ();
  }, []);

  const Updatebtn = () => (
    <CButton type="button" onClick={UpdateProvince} size="md" id="Add-btn">
      Update
    </CButton>
  );

  const Addbtn = () => (
    <CButton type="button" onClick={AddProvince} size="md" id="Add-btn">
      Add
    </CButton>
  );

  return (
    <div id="state">
      <h1 id="ccmaster">Province Master</h1>
      <CRow>
        <CCol sm="12" md="12" lg="4" xl="4" className="mb-3 mb-xl-0">
          <CCard>
            <CCardBody>
              <CRow>
                <CCol>
                  <CCard>
                    <CCardHeader>Add Province</CCardHeader>
                    <CCardBody>
                      <CForm
                        action=""
                        method="post"
                        encType="multipart/form-data"
                        className="form-horizontal"
                      >
                        <CFormGroup row>
                          <CCol xs="12" md="12">
                            <CLabel>Select Country</CLabel>
                            <CSelect
                              custom
                              name="Country"
                              onChange={CountryChange}
                              value={Country}
                              id="Country"
                            >
                              <option value="-1">Select Country</option>
                              {CountryData}
                            </CSelect>
                          </CCol>
                        </CFormGroup>
                        <CFormGroup row>
                          <CCol xs="12" md="12">
                            <CLabel>Province</CLabel>
                            <CInput
                              id="text-input"
                              name="text-input"
                              placeholder="Province"
                              value={State}
                              onChange={StateChange}
                            />
                          </CCol>
                        </CFormGroup>
                      </CForm>
                      {UpdateButton && <Updatebtn />}
                      {AddButton && <Addbtn />}
                    </CCardBody>
                  </CCard>
                </CCol>
              </CRow>
            </CCardBody>
          </CCard>
        </CCol>

        <CCol col="10">
          <CCard>
            <CCardBody>
              <CRow>
                <CCol>
                  <CCard>
                    <CCardHeader>Added Province</CCardHeader>
                    <CCardBody>
                      <CDataTable
                        items={StateData}
                        fields={fields1}
                        hover
                        striped
                        bordered
                        sorter
                        tableFilter={table}
                        itemsPerPageSelect={items}
                        size="sm"
                        itemsPerPage={4}
                        pagination
                        scopedSlots={{
                          Action: item => (
                            <td>
                              <CButton
                                size="sm"
                                onClick={() => {
                                  EditState (
                                    item.pkid,
                                    item.Country_id,
                                    item.Province
                                  );
                                }}
                                id="war-btn"
                              >
                                <EditIcon />
                                {item.status}
                              </CButton>
                              <CButton
                                size="sm"
                                onClick={() => {
                                  DeleteState (item.pkid);
                                }}
                                id="war-btn1"
                              >
                                <DeleteSharpIcon />
                                {item.status}
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
    </div>
  );
};

const Area_Master = () => {
  const [textInput3, setTextInput3] = React.useState ('');

  const [AreaPkid, setAreaPkid] = useState ();
  const [CountryData, setCountryData] = useState ();
  const [StateData, setStateData] = useState ();
  const [CityData, setCityData] = useState ();
  const [AreaData, setAreaData] = useState ();
  const [Country, setCountry] = useState ('-1');
  const [State, setState] = useState ();
  const [City, setCity] = useState ();
  const [Area, setArea] = useState ();
  const [AddButton, setAddButton] = useState (true);
  const [UpdateButton, setUpdateButton] = useState (false);

  React.useEffect (() => {
    GetCountry ();
    GetArea ();
  }, []);

  const GetArea = React.useCallback (() => {
    axios ({
      method: 'GET',
      url: 'http://192.168.1.3:8086/Tabedar_Dashboard/resourses/projectservice/GetArea',
      headers: {
        'content-type': 'application/json',
      },
    })
      .then (response => {
        setAreaData (response.data);
      })
      .catch (error => {
        console.log (error);
      });
  }, []);

  const GetCountry = React.useCallback (() => {
    axios ({
      method: 'GET',
      url: 'http://192.168.1.3:8086/Tabedar_Dashboard/resourses/projectservice/GetCountry',
      headers: {
        'content-type': 'application/json',
      },
    })
      .then (response => {
        const CountryOption = response.data.map (item => (
          <option value={item.pkid}>{item.Country}</option>
        ));
        setCountryData (CountryOption);
      })
      .catch (error => {
        console.log (error);
      });
  }, []);

  const GetState = React.useCallback (Countrypkid => {
    axios ({
      method: 'GET',
      url: 'http://192.168.1.3:8086/Tabedar_Dashboard/resourses/projectservice/GetStateByCountry/' +
        Countrypkid +
        '',
      headers: {
        'content-type': 'application/json',
      },
    })
      .then (response => {
        const StateOption = response.data.map (item => (
          <option value={item.pkid}>{item.Province}</option>
        ));
        setStateData (StateOption);
      })
      .catch (error => {
        console.log (error);
      });
  }, []);

  const GetStateForUpdate = React.useCallback (
    (Countrypkid, stateid, cityid) => {
      axios ({
        method: 'GET',
        url: 'http://192.168.1.3:8086/Tabedar_Dashboard/resourses/projectservice/GetStateByCountry/' +
          Countrypkid +
          '',
        headers: {
          'content-type': 'application/json',
        },
      })
        .then (response => {
          const StateOption = response.data.map (item => (
            <option value={item.pkid}>{item.Province}</option>
          ));
          setStateData (StateOption);
          setState (stateid);
          GetCityForUpdate (Countrypkid, stateid, cityid);
        })
        .catch (error => {
          console.log (error);
        });
    },
    []
  );

  const GetCity = React.useCallback ((Countrypkid, statepkid) => {
    axios ({
      method: 'GET',
      url: 'http://192.168.1.3:8086/Tabedar_Dashboard/resourses/projectservice/GetCityByStateAndCountry/' +
        Countrypkid +
        '/' +
        statepkid +
        '',
      headers: {
        'content-type': 'application/json',
      },
    })
      .then (response => {
        const CityOption = response.data.map (item => (
          <option value={item.pkid}>{item.City}</option>
        ));
        setCityData (CityOption);
      })
      .catch (error => {
        console.log (error);
      });
  }, []);

  const GetCityForUpdate = React.useCallback ((Countrypkid, sid, cid) => {
    axios ({
      method: 'GET',
      url: 'http://192.168.1.3:8086/Tabedar_Dashboard/resourses/projectservice/GetCityByStateAndCountry/' +
        Countrypkid +
        '/' +
        sid +
        '',
      headers: {
        'content-type': 'application/json',
      },
    })
      .then (response => {
        const CityOption = response.data.map (item => (
          <option value={item.pkid}>{item.City}</option>
        ));
        setCityData (CityOption);
        setCity (cid);
      })
      .catch (error => {
        console.log (error);
      });
  }, []);

  const AddArea = () => {
    if (Country == '-1' || Country == null) {
      alert ('Please Select Country');
    } else if (State == '-1' || State == null) {
      alert ('Please Select Province');
    } else if (City == '-1' || City == null) {
      alert ('Please Select City');
    } else if (Area == '' || Area == null) {
      alert ('Please Enter Area Name');
    } else {
      const obj = {
        country: Country,
        state: State,
        city: City,
        area: Area,
      };

      axios
        .post (
          'http://192.168.1.3:8086/Tabedar_Dashboard/resourses/projectservice/AddArea',
          obj
        )
        .then (response => {
          if (response.data == '0') {
            alert ('Area Already Exist');
          } else if (response.data == '1') {
            alert ('Area Added');
            GetArea ();
            GetCountry ();
            setCountry ('-1');
            setState ('-1');
            setCity ('-1');
            setArea ('');
          } else if (response.data == '2') {
            alert ('Failed To Add');
          }
        });
    }
  };

  const EditArea = (id, countryid, stateid, cityid, area) => {
    setAreaPkid (id);
    setCountry (countryid);
    GetStateForUpdate (countryid, stateid, cityid);
    setArea (area);
    setAddButton (false);
    setUpdateButton (true);
  };

  const UpdateArea = () => {
    if (Country == '-1') {
      alert ('Please Select Country');
    } else if (State == '-1') {
      alert ('Please Select Province');
    } else if (City == '-1') {
      alert ('Please Select City');
    } else if (Area == '' || Area == null) {
      alert ('Please Enter Area Name');
    } else {
      const obj = {
        country: Country,
        state: State,
        city: City,
        area: Area,
        pkid: AreaPkid,
      };

      axios
        .post (
          'http://192.168.1.3:8086/Tabedar_Dashboard/resourses/projectservice/UpdateArea',
          obj
        )
        .then (response => {
          if (response.data == '0') {
            alert ('Area Already Exist');
          } else if (response.data == '1') {
            alert ('Area Details Updated');
            GetArea ();
            GetCountry ();
            setCountry ('-1');
            setState ('-1');
            setCity ('-1');
            setArea ('');
            setAreaPkid ('');
            setAddButton (true);
            setUpdateButton (false);
          }
        });
    }
  };

  const DeleteArea = id => {
    axios ({
      method: 'GET',
      url: 'http://192.168.1.3:8086/Tabedar_Dashboard/resourses/projectservice/DeleteArea/' +
        id +
        '',
      headers: {
        'content-type': 'application/json',
      },
    })
      .then (response => {
        if (response.data == true) {
          alert ('Selected Area Deleted');
          GetArea ();
          GetCountry ();
          setCountry ('-1');
          setState ('-1');
          setCity ('-1');
          setArea ('');
          setAreaPkid ('');
        } else {
          alert ('Failed To Delete Area');
        }
      })
      .catch (error => {
        console.log (error);
      });
  };

  const CountryChange = event => {
    setCountry (event.target.value);
    GetState (event.target.value);
  };

  const StateChange = event => {
    setState (event.target.value);
    GetCity (Country, event.target.value);
  };

  const CityChange = event => {
    setCity (event.target.value);
  };

  const AreaChange = event => {
    setArea (event.target.value);
  };

  const Updatebtn = () => (
    <CButton type="button" onClick={UpdateArea} size="md" id="Add-btn">
      Update
    </CButton>
  );

  const Addbtn = () => (
    <CButton type="button" onClick={AddArea} size="md" id="Add-btn">
      Add
    </CButton>
  );

  const handleClick3 = () => {
    console.log (textInput3);
  };

  const handleChange3 = event => {
    setTextInput3 (event.target.value);
  };
  return (
    <div id="area">
      <h1 id="ccmaster">Area Master</h1>
      <CRow>
        <CCol sm="12" md="12" lg="4" xl="4" className="mb-3 mb-xl-0">
          <CCard id="city-master">
            <CCardBody>
              <CRow>
                <CCol>
                  <CCard>
                    <CCardHeader>Add Area</CCardHeader>
                    <CCardBody>
                      <CForm
                        action=""
                        method="post"
                        encType="multipart/form-data"
                        className="form-horizontal"
                      >
                        <CFormGroup row>
                          <CCol xs="12" md="12">
                            <CLabel>Select Country</CLabel>
                            <CSelect
                              custom
                              name="Country"
                              onChange={CountryChange}
                              value={Country}
                              id="Country"
                            >
                              <option value="0">Country</option>
                              {CountryData}
                            </CSelect>
                          </CCol>
                        </CFormGroup>
                        <CFormGroup row>
                          <CCol xs="12" md="12">
                            <CLabel>Select Province</CLabel>
                            <CSelect
                              custom
                              name="Province"
                              onChange={StateChange}
                              value={State}
                              id="Province"
                            >
                              <option value="0">Province</option>
                              {StateData}
                            </CSelect>
                          </CCol>
                        </CFormGroup>
                        <CFormGroup row>
                          <CCol xs="12" md="12">
                            <CLabel>Select City</CLabel>
                            <CSelect
                              custom
                              name="City"
                              onChange={CityChange}
                              value={City}
                              id="City"
                            >
                              <option value="0">City</option>
                              {CityData}
                            </CSelect>
                          </CCol>
                        </CFormGroup>
                        <CFormGroup row>
                          <CCol xs="12" md="12">
                            <CLabel> Area</CLabel>
                            <CInput
                              id="text-input1"
                              name="text-input"
                              placeholder="Area"
                              onChange={AreaChange}
                              value={Area}
                            />
                          </CCol>
                        </CFormGroup>

                        {UpdateButton && <Updatebtn />}
                        {AddButton && <Addbtn />}
                      </CForm>
                    </CCardBody>
                  </CCard>
                </CCol>
              </CRow>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol col="10">
          <CCard id="city-table">
            <CCardBody>
              <CRow>
                <CCol>
                  <CCard>
                    <CCardHeader>Added Areas</CCardHeader>
                    <CCardBody>
                      <CDataTable
                        items={AreaData}
                        fields={fields3}
                        hover
                        striped
                        bordered
                        sorter
                        tableFilter={table}
                        itemsPerPageSelect={items}
                        columnFilterSlot
                        size="sm"
                        itemsPerPage={4}
                        pagination
                        scopedSlots={{
                          Action: item => (
                            <td>
                              <CButton
                                size="sm"
                                onClick={() => {
                                  EditArea (
                                    item.pkid,
                                    item.Country_id,
                                    item.State_id,
                                    item.City_id,
                                    item.Area
                                  );
                                }}
                                id="war-btn"
                              >
                                <EditIcon />
                                {item.status}
                              </CButton>
                              <CButton
                                size="sm"
                                onClick={() => {
                                  DeleteArea (item.pkid);
                                }}
                                id="war-btn1"
                              >
                                <DeleteSharpIcon />
                                {item.status}
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
    </div>
  );
};

export default Location_Master;
