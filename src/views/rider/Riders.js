import React, { useState } from "react";
import axios from "axios";
import {
  CCard,
  CCardBody,
  CCol,
  CDataTable,
  CRow,
  CButton,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CLink,
  CSelect,
  CLabel,
  CCardHeader,
} from "@coreui/react";
import "../../style.css";
import TAABEDAR_SERVICE from "src/services/service";
import TextField from "@material-ui/core/TextField";
import { useHistory } from "react-router-dom";
import NoEncryptionSharpIcon from "@material-ui/icons/NoEncryptionSharp";

const fields = [
  {
    key: "Sl No",
  },
  {
    key: "Block",
    _style: { width: "10%" },
  },

  {
    key: "Name",
  },
  {
    key: "E-Mail",
  },
  {
    key: "Mobile",
  },
  {
    key: "City",
  },
  {
    key: "DL No",
  },
  {
    key: "Total Orders",
  },
  {
    key: "Total Distance",
  },
  {
    key: "Total Delivery",
  },
  {
    key: "Non Responded Orders",
  },
  {
    key: "Total Earnings",
  },
];

const table = { placeholder: "Search here...", label: "Search:  " };
const items = { label: "Rows", values: [5, 10, 25, 50, 75, 100] };

const Riders = () => {
  const [responseData, setResponseData] = useState("");
  const [riderpkid, setRiderpkid] = useState("");
  const [Suggestion, SetSuggestion] = useState("");
  const [Reason, SetReason] = useState("");
  const [block, setBlock] = useState(false);

  const history = useHistory();

  const GetRiders = () => {
    axios({
      method: "GET",
      url: TAABEDAR_SERVICE + "/GetRiders",
      headers: {
        "content-type": "application/json",
      },
      params: {
        language_code: "en",
      },
    })
      .then((response) => {
        setResponseData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  React.useEffect(() => {
    GetRiders();
  }, []);

  const blockRider = (pkid) => {
    console.log("pkid!   " + pkid);
    console.log("Suggestion!   " + Suggestion);
    console.log("Reason!   " + Reason);

    if (Suggestion == "Select Suggestion") {
      alert("Please Select Suggestion");
    } else if (Reason == "" || Reason == null) {
      alert("Please Give Reason");
    } else {
      axios({
        method: "GET",
        url:
          TAABEDAR_SERVICE +
          "/BlockRiders/" +
          pkid +
          "/" +
          Reason +
          "/" +
          Suggestion +
          "",
        headers: {
          "content-type": "application/json",
        },
        params: {
          language_code: "en",
        },
      })
        .then((response) => {
          console.log("blockRider response : " + response.data);
          if (response.data == true) {
            alert("Rider is Blocked!");
            GetRiders();
            setBlock(!block);
            SetSuggestion("Select Suggestion");
            SetReason("");
          } else {
            alert("Rider is Not Blocked!");
            GetRiders();
            SetSuggestion("Select Suggestion");
            SetReason("");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const getpkid = (pkid) => {
    SetSuggestion("Select Suggestion");
    SetReason("");
    setRiderpkid(pkid);
    setBlock(!block);
  };

  const SuggestionChange = (event) => {
    SetSuggestion(event.target.value);
  };
  const ReasonChange = (event) => {
    SetReason(event.target.value);
  };
  return (
    <div>
      <h1 id="ccmaster">Riders</h1>
      <CRow>
        <CCol col="10">
          <CCard>
            <CCardBody>
              <CRow>
                <CCol>
                  <CCard>
                    <CCardHeader>Available Riders</CCardHeader>
                    <CCardBody>
                      <CDataTable
                        items={responseData}
                        fields={fields}
                        hover
                        striped
                        bordered
                        sorter
                        tableFilter={table}
                        itemsPerPage={4}
                        pagination
                        size="sm"
                        itemsPerPageSelect={items}
                        scopedSlots={{
                          "Sl No": (item) => <td>{item.id}</td>,
                          Block: (item) => (
                            <td>
                              <CRow>
                                <CCol md="9">
                                  <CButton
                                    size="sm"
                                    id="deactivate"
                                    onClick={() => {
                                      getpkid(item.pkid);
                                    }}
                                  >
                                    <NoEncryptionSharpIcon />
                                  </CButton>
                                </CCol>
                              </CRow>
                            </td>
                          ),

                          Name: (item) => (
                            <td>
                               <CButton
                                id="order-list"
                                onClick={() => {
                                  history.push ('/RiderProfile', {
                                    data: item,
                                  });
                                }}
                              >
                                {item.Name}
                              </CButton>
                             
                            </td>
                          ),
                          "E-Mail": (item) => <td>{item.Email}</td>,
                          Mobile: (item) => <td>{item.Mobile}</td>,
                          "DL No": (item) => <td>{item.dlNo}</td>,
                          "Total Orders": (item) => (
                            <td>
                              <CButton
                                id="order-list"
                                onClick={() => {
                                  history.push("/RiderTotalOrder", {
                                    data: item.pkid,
                                  });
                                }}
                              >
                                {item.totalOrders}
                              </CButton>
                            </td>
                          ),
                          "Total Distance": (item) => (
                            <td>{item.totalDistance}</td>
                          ),
                          "Total Delivery": (item) => (
                            <td>{item.TotalOrders}</td>
                          ),
                          Ratings: (item) => <td>{5}</td>,
                          "Total Earnings": (item) => <td>{6000}</td>,
                          "Non Responded Orders": (item) => (
                            <td>
                              <CButton
                                id="order-list"
                                onClick={() => {
                                  history.push("/NonRespondedTotalOrders", {
                                    data: item.pkid,
                                  });
                                }}
                              >
                                {item.nonRespondedOrders}
                              </CButton>
                            </td>
                          ),
                        }}
                      />
                      <CModal
                        show={block}
                        onClose={() => setBlock(!block)}
                        color="dark"
                      >
                        <CModalHeader closeButton>
                          <CModalTitle>Before Blocking</CModalTitle>
                        </CModalHeader>
                        <CModalBody>
                          <br />
                          <br />
                          <CLabel>Select Suggestion to Unblock:</CLabel>
                          <CSelect
                            custom
                            name="Suggestion"
                            id="Suggestion"
                            value={Suggestion}
                            onChange={SuggestionChange}
                          >
                            <option value="Select Suggestion">
                              Select Suggestion
                            </option>
                            <option value="Not Clear Details">
                              Not Clear Details
                            </option>
                            <option value="Invalid DL No">Invalid DL No</option>
                            <option value="Wrong Email">Wrong Email</option>
                          </CSelect>
                          <br />
                          <br />

                          <TextField
                            id="outlined-multiline-static"
                            label="Blocking Reason"
                            multiline
                            rows={4}
                            onChange={ReasonChange}
                            value={Reason}
                            variant="outlined"
                            style={{
                              width: "100%",
                            }}
                          />
                          <br />
                          <br />
                          <CButton
                            class="btn btn-square btn-success"
                            onClick={() => blockRider(riderpkid)}
                          >
                            Submit
                          </CButton>
                        </CModalBody>
                        <CModalFooter>
                          <CButton
                            color="secondary"
                            onClick={() => setBlock(!block)}
                          >
                            Close
                          </CButton>
                        </CModalFooter>
                      </CModal>
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

export default Riders;
