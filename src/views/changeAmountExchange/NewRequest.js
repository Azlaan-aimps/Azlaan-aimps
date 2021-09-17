// import React, {useState} from 'react';
// import {
//   CCard,
//   CCardBody,
//   CCol,
//   CDataTable,
//   CRow,
//   CButton,
//   CModal,
//   CModalBody,
//   CModalFooter,
//   CModalHeader,
//   CModalTitle,
//   CBadge,
//   CSelect,
//   CLabel,
//   CCardHeader,
// } from '@coreui/react';
// import '../../style.css';
// import {useHistory} from 'react-router-dom';
// import usersData from '../users/Users_Riders';
// import {Link} from 'react-router-dom';
// import PaymentSharpIcon from '@material-ui/icons/PaymentSharp';
// const fields = [
//   {
//     key: 'SLNo',
//   },
//   {
//     key: 'Date',
//   },
//   {
//     key: 'OrderNo',
//   },
//   {
//     key: 'Order_Amount',
//   },
//   {
//     key: 'Customer',
//   },
//   {
//     key: 'Rider',
//   },
//   {
//     key: 'Change_Amount',
//   },
//   {
//     key: 'Customer_Confirmation',
//   },
//   {
//     key: 'Make Payment',
//     _style: {width: '10%'},
//   },
// ];

// const table = {placeholder: 'Search here...', label: 'Search:  '};
// const items = {label: 'Rows', values: [5, 10, 25, 50, 75, 100]};

// const ChangeExchange_NewRequest = () => {
//   let history = useHistory ();

//   const redirect = () => {
//     history.push ('/Payment');
//   };
//   const redirect1 = () => {
//     history.push ('/OrderDetails');
//   };
//   return (
//     <div>
//       <h1 id="ccmaster">Change Requests</h1>
//       <CRow>
//         <CCol col="10">
//           <CCard>
//             <CCardBody>
//               <CRow>
//                 <CCol>
//                   <CCard>
//                     <CCardHeader>
//                       Change Requests
//                     </CCardHeader>
//                     <CCardBody>
//                       <CDataTable
//                         items={usersData}
//                         fields={fields}
//                         hover
//                         striped
//                         bordered
//                         sorter
//                         tableFilter={table}
//                         itemsPerPage={4}
//                         pagination
//                         size="sm"
//                         itemsPerPageSelect={items}
//                         scopedSlots={{
//                           'Make Payment': item => (
//                             <td>
//                               <CRow>
//                                 <CCol md="9">
//                                   <CButton
//                                     onClick={redirect}
//                                     size="sm"
//                                     id="war-btn"
//                                   >
//                                     <PaymentSharpIcon />
//                                     {item.status}
//                                   </CButton>
//                                 </CCol>
//                               </CRow>
//                             </td>
//                           ),
//                           OrderNo: item => (
//                             <td>
//                               <CRow>
//                                 <CCol md="9">
//                                   <CButton id="order-list" onClick={redirect1}>
//                                     <Link to="#">142365</Link>
//                                   </CButton>
//                                 </CCol>
//                               </CRow>
//                             </td>
//                           ),
//                         }}
//                       />
//                     </CCardBody>
//                   </CCard>
//                 </CCol>
//               </CRow>
//             </CCardBody>
//           </CCard>
//         </CCol>
//       </CRow>
//     </div>
//   );
// };

// export default ChangeExchange_NewRequest;
