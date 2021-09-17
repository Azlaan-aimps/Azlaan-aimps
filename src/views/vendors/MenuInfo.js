import {
    CCard,
    CCardBody,
    CCol,
    CDataTable,
    CRow,CCardHeader,CLabel,CSelect
  } from "@coreui/react";
  
  
  import usersData1 from "../users/Users_Items";
  
  const table = { placeholder: "Search here...", label: "Search:  " };
  const items = { label: "Rows", values: [5, 10, 25, 50, 75, 100] };
  
  const fields = [
    {
      key: "SL No",
    },
    {
      key: "Category",
    },
    {
      key: "Sub Category",
    },
    {
      key: "Item",
    },
    {
      key: "Quantity",
    },
    
    {
    key:"Size"
    },
    {
      key:"Price",
    },
    
  ];
  
  
  
  
  const PathneredMenuInfo = () => {
  
    // let history1 = useHistory();
  
    // const RedirectBack = () => {
    //   history1.push("/users_management/stroes");
    // };
  
    return (
      <div>
        <CRow>
          <CCol md="12">
            <CCard>
              <CCardBody id="StoreDetail">
                <div>
                    <h4>Store Name: Saraswathipuram</h4>
                    <h4 id="left">Store ID:  BIR7421</h4>
                  <h4><br></br>
                    Address: #3rd Main Road<br></br>
                    Opp. Bake Point Junction<br></br>
                    Mysore-570024<br></br>
                    Tel no: +91-0821456677<br></br>
                    E-Mail: abc123@abcd.co.in
                  </h4>
                </div>
              </CCardBody>
            </CCard>
          </CCol>
          <CCol md="12">
            <CCard>
         
              <CCardBody>
              <CRow>
              <CCol>
                <CCard>
                <CCardHeader>
             <CRow>
                <CCol md="3">
                  <CLabel htmlFor="nf-email">Category</CLabel>
                  <CSelect custom name="merchant" id="merchant">
                    <option value="0">Biryaani</option>
                    <option value="1">Chicken</option>
                  </CSelect>
                </CCol>
              </CRow>
            </CCardHeader>
                  <CCardBody>
                <CDataTable
                  items={usersData1}
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
  
  export default PathneredMenuInfo;
