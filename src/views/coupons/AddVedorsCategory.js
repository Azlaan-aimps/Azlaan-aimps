import React, { useState } from "react";
import axios from "axios";
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
  CButton,
  CCardFooter,
  CForm,
  CFormGroup,
  CInput,
  CLabel,
} from "@coreui/react";
import TAABEDAR_SERVICE from "src/services/service";
import EditIcon from "@material-ui/icons/Edit";
import LockOpenSharpIcon from "@material-ui/icons/LockOpenSharp";
import NoEncryptionSharpIcon from "@material-ui/icons/NoEncryptionSharp";
import DeleteSharpIcon from "@material-ui/icons/DeleteSharp";
import "../../style.css";

const table = { placeholder: "Search here...", label: "Search:  " };
const items = { label: "Rows:", values: [5, 10, 25, 50, 75, 100] };
const fields = [
  { key: "Action" },
  { key: "Category" },
  { key: "Visibility" },
  { key: "Active" },
];

const VendorCategoryMaster = () => {
  const [categoryPkid, setCategoryPkid] = useState("");
  const [AddButton, setAddButton] = useState(true);
  const [UpdateButton, setUpdateButton] = useState(false);

  const [UnableButton, setUnableButton] = useState(false);
  const [DisableButton, setDisableButton] = useState(true);

  const [category, setCategory] = useState("");

  const CateroryChange = (event) => {
    setCategory(event.target.value);
  };

  const addMerchant = () => {
    console.log(category);
    if (category == "" || category == null) {
      alert("Please Enter Vendor Category");
    } else {
      const obj = {
        category: category,
      };
      axios
        .post(
          TAABEDAR_SERVICE+"/AddVendorCategory",
          obj
        )
        .then((response) => {
          if (response.data == "0") {
            alert("Vendor Category Already Exist");
          } else if (response.data == "1") {
            alert("Vendor Category Added");
            fetchData();
            setCategory("");
          } else if (response.data == "2") {
            alert("Failed To Add");
          }
        });
    }
  };
  const UpdateCategory = () => {
    const obj = {
      category: category,
      pkid: categoryPkid,
    };

    console.log("uzma update" + "" + obj);
    axios
      .post(
        TAABEDAR_SERVICE+"/UpdateVendorCategory",
        obj
      )
      .then((response) => {
        if (response.data == "0") {
          alert("Category Already Exist");
        } else if (response.data == "1") {
          alert("Category Details Updated");
          fetchData();
          setCategoryPkid("");
          setCategory("");
          setAddButton(true);
          setUpdateButton(false);
        }
      });
  };

  const EditCategory = (id, category) => {
    setCategoryPkid(id);
    setCategory(category);
    setAddButton(false);
    setUpdateButton(true);
  };

  const DeleteCategory = (id) => {
    //   alert(id)
    axios({
      method: "GET",
      url:
        TAABEDAR_SERVICE+"/DeleteVendorCategory/" +
        id +
        "",
      headers: {
        "content-type": "application/json",
      },
      params: {
        language_code: "en",
      },
    })
      .then((response) => {
        console.log(response);
        console.log(response.data);
        if (response.data == true) {
          alert("Selected Category Deleted");
          fetchData();
        } else {
          alert("Failed To Delete Category");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const Updatebtn = () => (
    <CButton type="button" onClick={UpdateCategory} size="md" id="Add-btn">
      Update
    </CButton>
  );

  const Addbtn = () => (
    <CButton type="button" onClick={addMerchant} size="md" id="Add-btn">
      Add
    </CButton>
  );

  const Active = (id) => {
    alert("Iam in active mode");
    setDisableButton(true);
    setUnableButton(false);
  };

  const DeAtive = (id) => {
    const obj = {
      pkid: id,
    };
    //   alert(id)
    axios({
      method: "GET",
      url:
        TAABEDAR_SERVICE+"/VendorCategory_DisableInApp/" +
        id,
      headers: {
        "content-type": "application/json",
      },
      params: {
        language_code: "en",
      },
    })
      .then((response) => {
        if (response.data == true) {
          alert("Category Disabled Successfully");
          setUnableButton(true);
          setDisableButton(false);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const [responseData, setResponseData] = useState("");
  const fetchData = React.useCallback(() => {
    axios({
      method: "GET",
      url: TAABEDAR_SERVICE+"/GetVendorCategory",
      headers: {
        "content-type": "application/json",
      },
      params: {
        language_code: "en",
      },
    })
      .then((response) => {
        setResponseData(response.data);
        console.log(response.data);
        // alert(response.data)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <CRow>
        <CCol md="3"></CCol>
        <CCol md="6">
          <h1 id="ccmaster">Vendor Category Master</h1>
        </CCol>
        <CCol md="3"></CCol>
      </CRow>
      <br></br>
      <CRow>
        <CCol md="6">
          <CCard className="EmpType">
            <CCardBody>
              <CRow>
                <CCol>
                  <CCard>
                    <CCardHeader>Add Merchant Category</CCardHeader>
                    <CCardBody>
                      <CForm action="" method="post">
                        <CFormGroup>
                          <CLabel htmlFor="">Merchant Category</CLabel>
                          <CInput
                            type="text"
                            id=""
                            name=""
                            onChange={CateroryChange}
                            value={category}
                            autoComplete=""
                          />
                        </CFormGroup>
                        {UpdateButton ? <Updatebtn /> : null}
                        {AddButton ? <Addbtn /> : null}
                      </CForm>
                    </CCardBody>
                  </CCard>
                </CCol>
              </CRow>
            </CCardBody>

            {/* <CCardFooter>
              <CButton type="" size="sm" color="success" id="Add-btn" onClick={addMerchant}> Add</CButton>
            </CCardFooter> */}
          </CCard>
        </CCol>
        <CCol md="6">
          <CCard className="AddedDelivery">
            <CCardBody>
              <CRow>
                <CCol>
                  <CCard>
                    <CCardHeader>Added vendor Category</CCardHeader>
                    <CCardBody>
                      <CDataTable
                        items={responseData}
                        fields={fields}
                        striped
                        itemsPerPage={5}
                        pagination
                        sorter
                        size="sm"
                        tableFilter={table}
                        itemsPerPageSelect={items}
                        scopedSlots={{
                          Action: (item) => (
                            <td>
                              <CButton
                                onClick={() => {
                                  EditCategory(item.pkid, item.Category);
                                }}
                                size="sm"
                                id="war-btn"
                              >
                                <EditIcon />
                                {item.status}
                              </CButton>
                              <CButton
                                size="sm"
                                id="war-btn1"
                                onClick={() => {
                                  DeleteCategory(item.pkid);
                                }}
                              >
                                <DeleteSharpIcon />
                                {item.status}
                              </CButton>
                            </td>
                          ),
                          Active: (item) => (
                            <td>
                              <div>
                                {/* {item.Availability==0?:} */}

                                {UnableButton ? (
                                  <CButton
                                    size="sm"
                                    id="activate"
                                    onClick={() => {
                                      Active(item.pkid);
                                    }}
                                  >
                                    <LockOpenSharpIcon />
                                  </CButton>
                                ) : null}
                                {DisableButton ? (
                                  <CButton
                                    size="sm"
                                    id="activate"
                                    onClick={() => {
                                      DeAtive(item.pkid);
                                    }}
                                  >
                                    <NoEncryptionSharpIcon />
                                  </CButton>
                                ) : null}
                              </div>
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
    </>
  );
};

export default VendorCategoryMaster;
