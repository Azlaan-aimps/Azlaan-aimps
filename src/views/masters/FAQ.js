import React, { useCallback, useState } from "react";
import {
  CBadge,
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
import TAABEDAR_SERVICE from "src/services/service";
import "../../style.css";

import usersData from "../users/users_Banner";
import EditIcon from "@material-ui/icons/Edit";
import DeleteSharpIcon from "@material-ui/icons/DeleteSharp";
import LockOpenSharpIcon from "@material-ui/icons/LockOpenSharp";
import NoEncryptionSharpIcon from "@material-ui/icons/NoEncryptionSharp";
import axios from "axios";
const table = { placeholder: "Search here...", label: "Search:  " };
const items = { label: "Rows:", values: [5, 10, 25, 50, 75, 100] };

const fields = [
  { key: "Action" },
  {
    key: "Question",
  },
  {
    key: "Answer",
  },
  { key: "Present Status" },
  { key: "Enable / Disable" },
];

const FAQ = () => {
  const [FaqPkid, SetFaqPkid] = useState("");
  const [Qtn, SetQtn] = useState("");
  const [Answer, SetAnswer] = useState("");
  const [StatusFaq, SetStatusFaq] = useState("");
  const [StatusKeyFaq, SetStatusKeyFaq] = useState("");

  const [EnableFAQBtn, SetEnableFAQBtn] = useState(true);
  const [DisableFAQBtn, SetDisableFAQBtn] = useState(true);

  const [EnableFAQBtnStatus, SetEnableFAQBtnStatus] = useState("");
  const [DisableFAQBtnStatus, SetDisableFAQBtnStatus] = useState("");

  const [AddButton, setAddButton] = useState(true);
  const [UpdateButton, setUpdateButton] = useState(false);

  const [responseData, setResponseData] = useState("");
  const [qtnWarn, SetQtnWarn] = useState("");
  const [AnswerWarn, SetAnswerWarmWarn] = useState("");

  const QtnChange = (event) => {
    SetQtn(event.target.value);
  };

  const AnswerChange = (event) => {
    SetAnswer(event.target.value);
  };

  const AddFaq = () => {
    // alert("AddInsentives");

    if (Qtn == "" || Qtn == null) {
      alert("Enter Qtn Please!");
    } else if (Answer == "" || Answer == null) {
      alert("Enter Answer Please!");
    } else {
      const obj = {
        // pkid: FaqPkid,
        Status: StatusFaq,
        StatusKey: StatusKeyFaq,
        answer: Answer,
        question: Qtn,
      };

      // console.log(obj);

      axios.post(TAABEDAR_SERVICE + "/AddFAQ", obj).then((response) => {
        // console.log("AddFaq response :" + response.data);
        if (response.data == "1") {
          alert("Faq Added!");
          SetQtn("");
          SetAnswer("");
          GetFaq();
          setAddButton(true);
          setUpdateButton(false);
        } else if (response.data == "2") {
          alert("Faq not Added!");
          SetQtn("");
          SetAnswer("");
          GetFaq();
          setAddButton(true);
          setUpdateButton(false);
        } else {
        }
      });
    }
  };

  const Updatebtn = () => (
    <CButton type="button" onClick={UpdatFaq} size="md" id="Add-btn">
      Update
    </CButton>
  );

  const Addbtn = () => (
    <CButton type="button" onClick={AddFaq} size="md" id="Add-btn">
      Add
    </CButton>
  );

  // const EnableBtn=()=>(

  // )

  // const DistableBtn=()=>(

  //   )

  console.log("responseData : ", responseData);

  const GetFaq = () => {
    // alert("getfaq");
    axios({
      method: "GET",
      url: TAABEDAR_SERVICE + "/GetFAQ",
      headers: {
        "content-type": "application/json",
      },
      params: {
        language_code: "en",
      },
    })
      .then((response) => {
        // console.log("GetFaq response :" + response.data);
        // console.log("Status Keys :" + response.data[0].StatusKey);
        // console.log("Status :" + response.data[0].Status);
        // if (response.data[0].StatusKey) {
        // }
        setResponseData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  React.useEffect(() => {
    GetFaq();
  }, []);

  // console.log("Global info :" + responseData);

  const UpdatFaq = () => {
    // alert("AddInsentives");
    if (Qtn == "" || Qtn == null) {
      alert("Enter Qtn Please!");
    } else if (Answer == "" || Answer == null) {
      alert("Enter Answer Please!");
    } else {
      const obj = {
        pkid: FaqPkid,
        Status: StatusFaq,
        StatusKey: StatusKeyFaq,
        answer: Answer,
        question: Qtn,
      };

      // console.log(obj);

      axios.post(TAABEDAR_SERVICE + "/UpdateFAQ", obj).then((response) => {
        // console.log("UpdatFaq response :" + response.data);
        if (response.data == "1") {
          alert("Faq Updated!");
          SetQtn("");
          SetAnswer("");
          GetFaq();
          setAddButton(true);
          setUpdateButton(false);
        } else {
          alert("Failed To Update!");
          SetQtn("");
          SetAnswer("");
          GetFaq();
          setAddButton(true);
          setUpdateButton(false);
        }
      });
    }
  };

  const EditFaq = (pkid, Status, StatusKey, Answer, Question) => {
    SetFaqPkid(pkid);
    SetQtn(Question);
    SetAnswer(Answer);
    SetStatusFaq(Status);
    SetStatusKeyFaq(StatusKey);

    setAddButton(false);
    setUpdateButton(true);
  };

  const DeleteFaq = (pkid) => {
    axios({
      method: "GET",
      url: TAABEDAR_SERVICE + "/DeleteFAQ/" + pkid + "",
      headers: {
        "content-type": "application/json",
      },
      params: {
        language_code: "en",
      },
    })
      .then((response) => {
        // console.log("Delete Response:" + response.data);
        if (response.data == true) {
          alert("Faq Deleted!");
          SetQtn("");
          SetAnswer("");
          GetFaq();
        } else {
          alert("Faq Not Deleted!");
          SetQtn("");
          SetAnswer("");
          GetFaq();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const DisableFAQ = (pkid) => {
    // alert("getfaq");
    axios({
      method: "GET",
      url: TAABEDAR_SERVICE + "/DisableFAQ/ " + pkid + "",
      headers: {
        "content-type": "application/json",
      },
      params: {
        language_code: "en",
      },
    })
      .then((response) => {
        // console.log("DisableFAQ response :" + response.data);
        // setResponseData(response.data);
        if (response.data == true) {
          alert("FAQ Is Disabled!");
          GetFaq();
        } else {
          alert("FAQ is not Disabled!");
          GetFaq();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const EnableFAQ = (pkid) => {
    axios({
      method: "GET",
      url: TAABEDAR_SERVICE + "/EnableFAQ/ " + pkid + "",
      headers: {
        "content-type": "application/json",
      },
      params: {
        language_code: "en",
      },
    })
      .then((response) => {
        // console.log("EnableFAQ response :" + response.data);
        // setResponseData(response.data);
        if (response.data == true) {
          alert("FAQ Is Enabled!");
          GetFaq();
        } else {
          alert("FAQ Failed To Enable!");
          GetFaq();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h1 id="ccmaster">FAQ Master</h1>
      <br></br>
      <CRow>
        <CCol xs="12" sm="12" md="4" lg="4" xl="4" className="mb-3 mb-xl-0">
          <div id="country-master">
            <CCard>
              <CCardBody>
                <CRow>
                  <CCol>
                    <CCard>
                      <CCardHeader>FAQ</CCardHeader>
                      <CCardBody>
                        <CForm
                          action=""
                          method="post"
                          encType="multipart/form-data"
                          className="form-horizontal"
                        >
                          <CFormGroup row>
                            <CCol xs="12" md="12">
                              <CLabel>Question</CLabel>
                              <CInput
                                type="text"
                                id="Question"
                                name="Question"
                                value={Qtn}
                                placeholder="Enter Question"
                                onChange={QtnChange}
                              />
                            </CCol>
                          </CFormGroup>
                          <CFormGroup row>
                            <CCol xs="12" md="12">
                              <CLabel>Answer</CLabel>
                              <CInput
                                id="Answer"
                                name="Answer"
                                value={Answer}
                                placeholder="Enter Answer"
                                type="text"
                                onChange={AnswerChange}
                              />
                            </CCol>
                          </CFormGroup>
                          <div id="inline-btn">
                            {UpdateButton && <Updatebtn />}
                            {AddButton && <Addbtn />}
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
                    <CCardHeader>Added FAQ</CCardHeader>
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
                                onClick={() => {
                                  EditFaq(
                                    item.pkid,
                                    item.Status,
                                    item.StatusKey,
                                    item.Answer,
                                    item.Question
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
                                  DeleteFaq(item.pkid);
                                }}
                                id="war-btn1"
                              >
                                <DeleteSharpIcon />
                                {item.status}
                              </CButton>
                            </td>
                          ),
                          Answer: (item) => <td>{item.Answer}</td>,
                          Question: (item) => <td>{item.Question}</td>,
                          "Present Status": (item) => <td>{item.Status}</td>,
                          "Enable / Disable": (item) =>
                            item.Status === "Enabled" ? (
                              <td>
                                <CButton
                                  size="sm"
                                  onClick={() => {
                                    DisableFAQ(item.pkid);
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
                                    EnableFAQ(item.pkid);
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
    </div>
  );
};

export default FAQ;
