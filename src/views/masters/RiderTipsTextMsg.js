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
  CForm,
  CFormGroup,
  CInput,
  CLabel,
} from "@coreui/react";

import "../../style.css";
import TAABEDAR_SERVICE from "src/services/service";
import EditIcon from "@material-ui/icons/Edit";
import DeleteSharpIcon from "@material-ui/icons/DeleteSharp";
import LockOpenSharpIcon from "@material-ui/icons/LockOpenSharp";
import NoEncryptionSharpIcon from "@material-ui/icons/NoEncryptionSharp";
const table = { placeholder: "Search here...", label: "Search:  " };
const items = { label: "Rows:", values: [5, 10, 25, 50, 75, 100] };

const fields = [
  { key: "Action" },
  { key: "Message" },
  { key: "Status" },
  { key: "Enable / Disable" },
];

const Rider_Tips_Text_Msg = () => {
  const [TipPkid, setTipid] = useState("");
  const [AddButton, setAddButton] = useState(true);
  const [UpdateButton, setUpdateButton] = useState(false);

  const [UnableButton, setUnableButton] = useState(false);
  const [DisableButton, setDisableButton] = useState(true);

  const [Tipmsg, setTipmsg] = useState("");

  const TipmsgChange = (event) => {
    setTipmsg(event.target.value);
  };

  const addTiPmsg = () => {
    console.log(Tipmsg);
    if (Tipmsg == "" || Tipmsg == null) {
      alert("Please Enter Tip Message");
    } else {
      const obj = {
        message: Tipmsg,
      };
      axios
        .post(TAABEDAR_SERVICE + "/AddRiderTipMessage ", obj)
        .then((response) => {
          if (response.data == "0") {
            alert("Tip Message Already Exist");
          } else if (response.data == "1") {
            alert("Tip Message Added");
            fetchData();
            setTipmsg("");
          } else if (response.data == "2") {
            alert("Failed To Add");
          }
        });
    }
  };

  const UpdateTipmsg = () => {
    if (Tipmsg == "" || Tipmsg == null) {
      alert("Please Enter Tip Message");
    } else {
      const obj = {
        message: Tipmsg,
        pkid: TipPkid,
      };

      console.log("uzma update" + "" + obj.message + "" + obj.pkid);

      axios
        .post(TAABEDAR_SERVICE + "/UpdateRiderTipMessage", obj)
        .then((response) => {
          // alert(response.data)
          if (response.data == "0") {
            alert("Tip Message Already Exist");
          } else if (response.data == "1") {
            alert("Tip Message Details Updated");
            fetchData();
            setTipid("");
            setTipmsg("");
            setAddButton(true);
            setUpdateButton(false);
            // setDisableButton(true);
            // setUnableButton(false);
          }
        });
    }
  };

  const EditTipmsg = (id, Tipmsg) => {
    setTipid(id);
    setTipmsg(Tipmsg);
    setAddButton(false);
    setUpdateButton(true);
    // setDisableButton(true);
    // setUnableButton(false);
  };

  const DeleteTipmsg = (id) => {
    axios({
      method: "GET",
      url: TAABEDAR_SERVICE + "/DeleteRiderTipMessage/" + id + "",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((response) => {
        console.log(response.data);
        console.log(response);
        if (response.data == true) {
          alert("Selected Tip Message Deleted");
          fetchData();
        } else {
          alert("Failed To Delete Tip Message");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const ActiveTipmsg = (id) => {
    axios({
      method: "GET",
      url: TAABEDAR_SERVICE + "/EnableRiderTipMessage/" + id + "",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((response) => {
        if (response.data == true) {
          alert("Selected Rider Tip Is Activated");
          fetchData();
        } else {
          alert("Failed To Activated");
        }
      })
      .catch((error) => {
        console.log(error);
      });
    setDisableButton(true);
    setUnableButton(false);
  };

  const DeAtiveTipmsg = (id) => {
    axios({
      method: "GET",
      url: TAABEDAR_SERVICE + "/DisableRiderTipMessage/" + id + "",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((response) => {
        if (response.data == true) {
          alert("Selected Rider Tip Is Deactivated");
          fetchData();
        } else {
          alert("Failed To Deactivated");
        }
      })
      .catch((error) => {
        console.log(error);
      });

    setDisableButton(false);
    setUnableButton(true);
  };

  const Updatebtn = () => (
    <CButton type="button" onClick={UpdateTipmsg} size="md" id="Add-btn">
      Update
    </CButton>
  );

  const Addbtn = () => (
    <CButton type="button" onClick={addTiPmsg} size="md" id="Add-btn">
      Add
    </CButton>
  );

  const [responseData, setResponseData] = useState("");
  const fetchData = React.useCallback(() => {
    axios({
      method: "GET",
      url: TAABEDAR_SERVICE + "/GetRiderTipMessage",
      headers: {
        "content-type": "application/json",
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
      <h1 id="ccmaster">Rider Tips Master</h1>
      <br></br>
      <CRow>
        <CCol xs="12" sm="12" md="4" lg="4" xl="4" className="mb-3 mb-xl-0">
          <div id="country-master">
            <CCard>
              <CCardBody>
                <CRow>
                  <CCol>
                    <CCard>
                      <CCardHeader>Add Message</CCardHeader>
                      <CCardBody>
                        <CForm
                          action=""
                          method="post"
                          encType="multipart/form-data"
                          className="form-horizontal"
                        >
                          <CFormGroup row>
                            <CCol xs="12" md="12">
                              <CLabel>Tips Message</CLabel>
                              <CInput
                                id="text-input1"
                                name="text-input"
                                placeholder="Message"
                                value={Tipmsg}
                                onChange={TipmsgChange}
                                type=""
                              />
                            </CCol>
                          </CFormGroup>
                          <div id="inline-btn">
                            {UpdateButton ? <Updatebtn /> : null}
                            {AddButton ? <Addbtn /> : null}
                          </div>
                        </CForm>
                      </CCardBody>
                    </CCard>
                  </CCol>
                </CRow>
              </CCardBody>
            </CCard>
          </div>
        </CCol>
        <CCol xs="12" sm="12" md="8" lg="8" xl="8">
          <CCard>
            <CCardBody>
              <CRow>
                <CCol>
                  <CCard>
                    <CCardHeader>Added Message</CCardHeader>
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
                                size="sm"
                                id="war-btn"
                                onClick={() => {
                                  EditTipmsg(item.pkid, item.Message);
                                }}
                              >
                                <EditIcon />
                                {item.status}
                              </CButton>
                              <CButton
                                size="sm"
                                id="war-btn1"
                                onClick={() => {
                                  DeleteTipmsg(item.pkid);
                                }}
                              >
                                <DeleteSharpIcon />
                                {item.status}
                              </CButton>
                            </td>
                          ),
                          "Enable / Disable": (item) =>
                            item.Status === "Enabled" ? (
                              <td>
                                <CButton
                                  size="sm"
                                  onClick={() => {
                                    DeAtiveTipmsg(item.pkid);
                                  }}
                                  id="deactivate"
                                >
                                  <NoEncryptionSharpIcon />
                                </CButton>
                              </td>
                            ) : (
                              <td>
                                <CButton
                                  size="sm"
                                  onClick={() => {
                                    ActiveTipmsg(item.pkid);
                                  }}
                                  id="activate"
                                >
                                  <LockOpenSharpIcon />
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

export default Rider_Tips_Text_Msg;
