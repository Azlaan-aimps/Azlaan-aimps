'use strict';
import React, {useState, useEffect} from 'react';
import DeleteSharpIcon from '@material-ui/icons/DeleteSharp';
import {Badge} from '@material-ui/core';
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
  CButton,
  CLink,
} from '@coreui/react';
import RateReviewSharpIcon from '@material-ui/icons/RateReviewSharp';
import '../../style.css';
import axios from 'axios';
import TAABEDAR_SERVICE from 'src/services/service';
import {useHistory} from 'react-router';

const table = {placeholder: 'Search here...', label: 'Search'};
const Rows = {label: 'Rows'};

const fields = [
  {key: 'Action'},
  {key: 'SL No'},
  {key: 'Feedback Title'},
  {key: 'Description'},
  {key: 'Name'},
  {key: 'Mobile'},
  {key: 'Email'},
  {key: 'Orders Completion Average'},
  {key: 'Orders'},
];

const Feedback = () => {
  const [info, setInfo] = useState (false);
  const [feedBackData, setFeedBackData] = useState ();

  const onCallLoad = () => {
    axios
      .get (TAABEDAR_SERVICE + '/GetUserFeedBack')
      .then (response => {
        setFeedBackData (response.data);
        console.log (response);
      })
      .catch (error => {
        console.log (error);
      });
  };

  const history = useHistory ();

  const onCallDelete = pkid => {
    axios
      .get (TAABEDAR_SERVICE + '/DeleteUserFeedBack/' + pkid)
      .then (res => {
        console.log (res);
        onCallLoad ();
      })
      .catch (err => {
        console.log (err);
      });
    alert ('Deleted Successfully');
  };

  useEffect (() => {
    onCallLoad ();
  }, []);

  return (
    <div>
      <CRow>
        <CCol col="10">
          <CCard id="city-table">
            <CCardBody>
              <h1 id="ccmaster">Users FeedBack</h1>
              <CRow>
                <CCol>
                  <CCard>
                    <CCardHeader>
                      Feedback
                    </CCardHeader>
                    <CCardBody>
                      <CDataTable
                        items={feedBackData}
                        fields={fields}
                        hover
                        striped
                        bordered
                        sorter
                        tableFilter={table}
                        itemsPerPageSelect={Rows}
                        columnFilterSlot
                        size="sm"
                        itemsPerPage={10}
                        pagination
                        scopedSlots={{
                          'SL No': item => <td>{item.id}</td>,
                          'Feedback Title': item => <td>{item.Title}</td>,
                          Name: item => <td>{item.User}</td>,
                          'Orders Completion Average': item => (
                            <td>{item.avrage}</td>
                          ),
                          Action: item => (
                            <td>
                              <CButton
                                size="sm"
                                id="war-btn1"
                                onClick={() => {
                                  onCallDelete (item.pkid);
                                }}
                              >
                                <DeleteSharpIcon />
                              </CButton>
                            </td>
                          ),
                          Orders: item => (
                            <td>
                              <CButton
                                id="order-list"
                                onClick={() => {
                                  history.push ('/Feedback_usersOrder', {
                                    data: item,
                                  });
                                }}
                              >
                                <Badge
                                  badgeContent={item.orderCount}
                                  color="primary"
                                >
                                  <RateReviewSharpIcon fontSize="medium" />
                                </Badge>
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

export default Feedback;
