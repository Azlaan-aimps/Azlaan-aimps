import React from "react";
import {
  CCard,
  CCardBody,
  CCol,
  CDataTable,CSelect,CLabel,
  CRow,CCardHeader
} from "@coreui/react";
import "../../../style.css";
import usersData from "../../users/Users_Feedback";


const fields = [
  {
    key: "SL No",
    
  },
  {
    key: "OrderNo",
  },
  {
    key: "User Name",
  },
  {
    key: "Rider",
  },
  {
    key: "Marchant",
  },
  {
    key: "Date",
  },
  {
    key: "Amount",
  },
  {
    key: "Rider Feedback",
  },
];

const table = { placeholder: "Search here...", label: "Search:  " };
const items = { label: "Rows", values: [5, 10, 25, 50, 75, 100] };

const NonRespondedOrders = () => {

  return (
    <div>
      <h1 id="ccmaster">Non Responded Orders</h1>
      <CRow>
        <CCol md="12">
          <CCard>
            <CCardHeader>
            Non Responded Orders From Users
            </CCardHeader>
            <CCardBody>
              <CDataTable
                items={usersData}
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
                  Ratings: (item) => (
                    <td>
                      <div>
                        <img
                          class="icon-image rider-image"
                          src="/star.png"
                          alt="Responsive-images"
                        />
                      </div>
                    </td>
                  ),
                }}
              />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </div>
  );
};

export default NonRespondedOrders;
