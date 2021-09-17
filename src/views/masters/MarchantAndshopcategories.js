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
import DeleteSharpIcon from "@material-ui/icons/DeleteSharp";
import "../../style.css";

const table = { placeholder: "Search here...", label: "Search:  " };
const items = { label: "Rows:", values: [5, 10, 25, 50, 75, 100] };
const fields = [{ key: "Action" }, { key: "Categories" }];

const EmployeTypeMaster = () => {
  const [categoryPkid, setCategoryPkid] = useState("");
  const [AddButton, setAddButton] = useState(true);
  const [UpdateButton, setUpdateButton] = useState(false);

  const [category, setCategory] = useState("");

  const CateroryChange = (event) => {
    setCategory(event.target.value);
  };

  const addMerchant = () => {
    console.log(category);
    if (category == "" || category == null) {
      alert("Please Enter Merchant Category");
    } else {
      const obj = {
        category: category,
      };
      axios
        .post(
          TAABEDAR_SERVICE+"/AddMarchentCategory",
          obj
        )
        .then((response) => {
          if (response.data == "0") {
            alert("Marchant Type Already Exist");
          } else if (response.data == "1") {
            alert("Marchant Type Added");
            fetchData();
            setCategory("");
          } else if (response.data == "2") {
            alert("Failed To Add");
          }
        });
    }
  };
  const UpdateCategory = () => {
    console.log(category);
    if (category == "" || category == null) {
      alert("Please Enter Merchant Category");
    } else {
      const obj = {
        category: category,
        pkid: categoryPkid,
      };

      axios
        .post(
          TAABEDAR_SERVICE+"/UpdateMerchantCategory",
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
    }
  };

  const EditCategory = (id, category) => {
    setCategoryPkid(id);
    setCategory(category);
    setAddButton(false);
    setUpdateButton(true);
  };

  const DeleteCategory = (id) => {
    axios({
      method: "GET",
      url:
        TAABEDAR_SERVICE+"/DeleteMerchantCategory/" +
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

  const [responseData, setResponseData] = useState("");
  const fetchData = React.useCallback(() => {
    axios({
      method: "GET",
      url: TAABEDAR_SERVICE+"/GetMerchantType",
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
          <h1 id="ccmaster">Merchant Category Master</h1>
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
                    <CCardHeader>Added Merchant Category</CCardHeader>
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
                                  EditCategory(item.pkid, item.Categories);
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

export default EmployeTypeMaster;
