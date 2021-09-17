import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  CHeader,
  CToggler,
  CHeaderBrand,
  CCol,CRow

} from '@coreui/react'
import CIcon from '@coreui/icons-react'




var showdate=new Date();
var todaysdate = showdate.getDate()+'/'+showdate.getMonth()+'/'+showdate.getUTCFullYear()
var time =showdate.getHours()+':'+showdate.getMinutes()+':'+showdate.getSeconds()



const TheHeader = () => {
  const dispatch = useDispatch()
  const sidebarShow = useSelector(state => state.sidebarShow)

  const toggleSidebar = () => {
    const val = [true, 'responsive'].includes(sidebarShow) ? false : 'responsive'
    dispatch({type: 'set', sidebarShow: val})
  }

  const toggleSidebarMobile = () => {
    const val = [false, 'responsive'].includes(sidebarShow) ? true : 'responsive'
    dispatch({type: 'set', sidebarShow: val})
  }

  return (
    <CHeader withSubheader>
      <CRow style={{marginTop:'1%'}}>
        <CCol md='1'>
        <CToggler
        inHeader
        className="ml-md-3 d-lg-none"
        onClick={toggleSidebarMobile}
      />
      <CToggler
        inHeader
        className="ml-3 d-md-down-none"
        onClick={toggleSidebar}
      />
      <CHeaderBrand className="mx-auto d-lg-none" to="/">
        <CIcon name="logo" height="48" alt="Logo"/>
      </CHeaderBrand>
        </CCol>
        <CCol md='10'>
        <marquee >
        <h5>
          Delivery Application CMS 1.0
        </h5>
      </marquee>
        </CCol>
        <CCol md='1'>
       
        <p id="Dashp1" style={{marginLeft: '-29px'}}>
             Date:{todaysdate}
             
             {/* Time:{time} */}
        </p>
        <p id="Dashp1" style={{marginLeft: '-29px'}}>
           
             
             Time:{time}
        </p>
  
        </CCol>
      </CRow>
      
     
      
  


    </CHeader>
  )
}

export default TheHeader
