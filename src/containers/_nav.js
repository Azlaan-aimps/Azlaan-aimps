import React from 'react';
import CIcon from '@coreui/icons-react';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import ChevronRightSharpIcon from '@material-ui/icons/ChevronRightSharp';
const _nav = [
  {
    _tag: 'CSidebarNavItem',
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon" />,
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Master',
    route: '/master',
    icon: 'cil-cursor',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Location',
        to: '/master',
        icon: <NavigateNextIcon />,
      },

      {
        _tag: 'CSidebarNavItem',
        name: 'Banner Image',
        to: '/master/Banner',
        icon: <NavigateNextIcon />,
      },

      {
        _tag: 'CSidebarNavItem',
        name: 'Set Price',
        to: '/setPrice',
        icon: <NavigateNextIcon />,
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Contact Us',
        to: '/contact_us',
        icon: <NavigateNextIcon />,
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Users Feedback',
        to: '/feedback',
        icon: <NavigateNextIcon />,
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Delivery Price Range',
        to: '/deliveryprice',
        icon: <NavigateNextIcon />,
      },

      {
        _tag: 'CSidebarNavItem',
        name: 'Rider Tip Message',
        to: '/RiderTipsTextMsg',
        icon: <NavigateNextIcon />,
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'FAQ',
        to: '/FAQ',
        icon: <NavigateNextIcon />,
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Insentive Setup',
        to: '/Insentive',
        icon: <NavigateNextIcon />,
      },
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Vendors',
    route: '',
    icon: 'cil-cursor',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Merchant Category',
        to: '/marchantandshopcategory',
        icon: <NavigateNextIcon />,
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Vendor Category',
        // to: "/AddNewStore",
        to: '/ItemCategories',
        icon: <NavigateNextIcon />,
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'All Vendors',
        // to: "/AddNewStore",
        to: '/ViewVendors',
        icon: <NavigateNextIcon />,
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Pending',
        to: '/PendingVendors',
        icon: <NavigateNextIcon />,
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Rejected',
        to: '/RejectedVendors',
        icon: <NavigateNextIcon />,
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Blocked',
        to: '/BlockedVendors',
        icon: <NavigateNextIcon />,
      },
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Riders',
    route: '',
    icon: 'cil-cursor',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'All Riders',
        to: '/Riders',
        icon: <NavigateNextIcon />,
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Pending',
        to: '/PendingRiders',
        icon: <NavigateNextIcon />,
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Rejected',
        to: '/Rejectedriders',
        icon: <NavigateNextIcon />,
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Blocked',
        to: '/BlockedRiders',
        icon: <NavigateNextIcon />,
      },
    ],
  },

  {
    _tag: 'CSidebarNavDropdown',
    name: 'Users',
    route: '',
    icon: 'cil-cursor',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'All Users',
        to: '/AllUser',
        icon: <NavigateNextIcon />,
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Blocked',
        to: '/BlockedUsers',
        icon: <NavigateNextIcon />,
      },
    ],
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Order',
    to: '/Order',
    icon: 'cil-cursor',
  },

  {
    _tag: 'CSidebarNavDropdown',
    name: 'Payments',
    route: '',
    icon: 'cil-cursor',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Amount With Riders',
        to: '/ActivePayment',
        icon: <NavigateNextIcon />,
      },

      {
        _tag: 'CSidebarNavItem',
        name: 'Received Payments ',
        to: '/RecievedAmountList',
        icon: <NavigateNextIcon />,
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Payments to Merchants',
        to: '/MerchantPaymentreport',
        icon: <NavigateNextIcon />,
      },

      {
        _tag: 'CSidebarNavItem',
        name: 'M-Completed Payments',
        to: '/PaymentUpdate',
        icon: <NavigateNextIcon />,
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Comparison report ',
        to: '/ComparisionReport',
        icon: <NavigateNextIcon />,
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Make Payment To Rider',
        to: '/MakePaymenttoRider',
        icon: <NavigateNextIcon />,
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'R-Completed Payments',
        to: '/RiderPaymentUpdate',
        icon: <NavigateNextIcon />,
      },
    ],
  },

  {
    _tag: 'CSidebarNavDropdown',
    name: 'Change Exchange',
    route: '',
    icon: 'cil-cursor',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'New Request',
        to: '/ChangeExchange_NewRequest',
        icon: <NavigateNextIcon />,
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Completed Request',
        to: '/CompletedPayment',
        icon: <NavigateNextIcon />,
      },
    ],
  },

  {
    _tag: 'CSidebarNavDropdown',
    name: 'Wallet Amount Refund',
    route: '',
    icon: 'cil-cursor',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'New Request',
        to: '/WalletNewRequest',
        icon: <NavigateNextIcon />,
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Confirmed Requests',
        to: '/WalletConfirmedRequest',
        icon: <NavigateNextIcon />,
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Rejected Requests',
        to: '/WalletRejectedRequest',
        icon: <NavigateNextIcon />,
      },
    ],
  },

  {
    _tag: 'CSidebarNavDropdown',
    name: 'Coupon',
    route: '/promoandCoupon',
    icon: 'cil-cursor',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'All Coupons',
        to: '/ViewCoupons',
        icon: <NavigateNextIcon />,
      },

      {
        _tag: 'CSidebarNavItem',
        name: 'Coupons Avalied',
        to: '/AvailedCoupons',
        icon: <NavigateNextIcon />,
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Previous Coupons',
        to: '/PreviousCoupons',
        icon: <NavigateNextIcon />,
      },
    ],
  },

  {
    _tag: 'CSidebarNavItem',
    name: 'Reviews',
    to: '/CompleteReviews',
    icon: 'cil-cursor',
  },

  {
    _tag: 'CSidebarNavItem',
    name: 'Sales Report',
    to: '/SalesReports',
    icon: 'cil-cursor',
  },

  {
    _tag: 'CSidebarNavItem',
    name: 'Logout',
    to: '/',
    icon: (
      <CIcon name="cil-cloud-download" customClasses="c-sidebar-nav-icon" />
    ),
  },
];

export default _nav;
