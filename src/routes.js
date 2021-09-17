import React from 'react';
const Charts = React.lazy (() => import ('./views/charts/Charts'));
const Dashboard = React.lazy (() => import ('./views/dashboard/Dashboard'));
const Widgets = React.lazy (() => import ('./views/widgets/Widgets'));
const Users = React.lazy (() => import ('./views/users/Users'));
const User = React.lazy (() => import ('./views/users/User'));
const Location_Master = React.lazy (() =>
  import ('./views/masters/Location_Master')
);
const Banner_Image_Master = React.lazy (() =>
  import ('./views/masters/Banner_Image_Master')
);
const Payment_Master_Type = React.lazy (() =>
  import ('./views/masters/Payment_Master_Type')
);
const SetPrice = React.lazy (() => import ('./views/masters/SetPrice'));
const ContactUs = React.lazy (() => import ('./views/masters/Contact_ Us'));
const Feedback = React.lazy (() => import ('./views/masters/FeedBack'));
const DeliveryPrice = React.lazy (() =>
  import ('./views/masters/DeliveryPrice')
);
const EmployeTypeMaster = React.lazy (() =>
  import ('./views/masters/MarchantAndshopcategories')
);
const EmployeMaster = React.lazy (() =>
  import ('./views/masters/EmployeeMaster')
);
const RiderTipsTextMsg = React.lazy (() =>
  import ('./views/masters/RiderTipsTextMsg')
);
const FAQ = React.lazy (() => import ('./views/masters/FAQ'));
const Addcoupons = React.lazy (() => import ('./views/coupons/AddNewCoupon'));
const AvailedCoupons = React.lazy (() =>
  import ('./views/coupons/UserAvailedCoupons')
);
const PreviousCoupons = React.lazy (() =>
  import ('./views/coupons/PreviousCoupons')
);
const AddNewStore = React.lazy (() => import ('./views/vendors/AddNewStores'));

const RegPatMenuInfo = React.lazy (() => import ('./views/vendors/MenuInfo'));
const RegPatOwnerInfo = React.lazy (() =>
  import ('./views/vendors/DocumentInfo')
);
const EditVendor = React.lazy (() => import ('./views/vendors//Edit'));
const RegPatSalesInfo = React.lazy (() => import ('./views/vendors/SalesInfo'));
const PendingVendors = React.lazy (() => import ('./views/vendors/Pending'));
const RejectedVendors = React.lazy (() => import ('./views/vendors/Rejected'));
const BlockedVendors = React.lazy (() => import ('./views/vendors/Blocking'));

const NonregActiveOrders = React.lazy (() =>
  import ('./views/orderManagement/nonregisteredvendors/ActiveOrders')
);
const NonregCompleteOrders = React.lazy (() =>
  import ('./views/orderManagement/nonregisteredvendors/CompletedOrders')
);

const NonPatActiveOrders = React.lazy (() =>
  import ('./views/orderManagement/registeredvendors/nonpartnered/ActiveOrders')
);
const NonPatCompleteOrders = React.lazy (() =>
  import (
    './views/orderManagement/registeredvendors/nonpartnered/CompletedOrders'
  )
);
const NonPatPendingOrders = React.lazy (() =>
  import (
    './views/orderManagement/registeredvendors/nonpartnered/PendingOrders'
  )
);
const NonPatRejectedOrders = React.lazy (() =>
  import (
    './views/orderManagement/registeredvendors/nonpartnered/RejectedOrders'
  )
);
const NonPatNonRespondedOrders = React.lazy (() =>
  import (
    './views/orderManagement/registeredvendors/nonpartnered/Nonrespondedorders'
  )
);

const PatActiveOrders = React.lazy (() =>
  import ('./views/orderManagement/registeredvendors/partnered/ActiveOrders')
);
const PatCompleteOrders = React.lazy (() =>
  import ('./views/orderManagement/registeredvendors/partnered/CompletedOrders')
);
const PatPendingOrders = React.lazy (() =>
  import ('./views/orderManagement/registeredvendors/partnered/PendingOrders')
);
const PatRejectedOrders = React.lazy (() =>
  import ('./views/orderManagement/registeredvendors/partnered/RejectedOrders')
);
const PatNonRespondedOrders = React.lazy (() =>
  import (
    './views/orderManagement/registeredvendors/partnered/Nonrespondedorders'
  )
);
const RiderActiveOrders = React.lazy (() =>
  import ('./views/orderManagement/RidersActiveOrders')
);

const WalletNewRequest = React.lazy (() =>
  import ('./views/walletamountrefund/NewRequest')
);
const WalletConfirmedRequest = React.lazy (() =>
  import ('./views/walletamountrefund/ConfirmendRequest')
);
const WalletRejectedRequest = React.lazy (() =>
  import ('./views/walletamountrefund/RejectedRequest')
);
const WalletRefundREport = React.lazy (() =>
  import ('./views/walletamountrefund/RefundReport')
);
const AreaReport = React.lazy (() => import ('./views/reports/AreaReport'));
const CityReport = React.lazy (() => import ('./views/reports/CityReport'));
const MonthlyReport = React.lazy (() =>
  import ('./views/reports/MonthlyReport')
);
const OverAllReport = React.lazy (() =>
  import ('./views/reports/OverAllReport')
);
const StoreReport = React.lazy (() => import ('./views/reports/StoreReport'));

const SalesPerformance = React.lazy (() =>
  import ('./views/userManagement/stores/SalesPerformance')
);
const StoreReviews = React.lazy (() =>
  import ('./views/userManagement/stores/StoreReviews')
);
const PendingStores = React.lazy (() =>
  import ('./views/userManagement/stores/NotApprovedStores')
);
const BlockedStores = React.lazy (() =>
  import ('./views/userManagement/stores/BlockedStores')
);
const RejectedMerchant = React.lazy (() =>
  import ('./views/userManagement/stores/RejectedMerchants')
);

const Users_mobileApp = React.lazy (() =>
  import ('./views/userManagement/users/Users_mobileApp')
);
const Stroes_Branch = React.lazy (() =>
  import ('./views/userManagement/stores/Stroes_Branches.js')
);

const ItemsTable = React.lazy (() =>
  import ('./views/userManagement/users/Items')
);
const FeedbackPage = React.lazy (() =>
  import ('./views/userManagement/users/FeedbackPage')
);

const CustomerSupport = React.lazy (() =>
  import ('./views/userManagement/users/CustomerSupport')
);
const Calls = React.lazy (() => import ('./views/userManagement/users/Calls'));
const ReviewPage = React.lazy (() =>
  import ('./views/userManagement/users/ReviewPage')
);
const DailyReports = React.lazy (() =>
  import ('./views/userManagement/users/DailyReports')
);
const ChattingReports = React.lazy (() =>
  import ('./views/userManagement/users/ChattingReports')
);
const SalesReport = React.lazy (() => import ('./views/reports/SalesReport'));
const PaymentUpdate = React.lazy (() =>
  import ('./views/payments/Payment_Update')
);
const ActivePayment = React.lazy (() =>
  import ('./views/payments/Active_Payment')
);
const MerchantPaymentreport = React.lazy (() =>
  import ('./views/payments/Merchant_Payment_Report')
);
const Notification = React.lazy (() =>
  import ('./views/payments/Notification')
);
const RecievedAmountList = React.lazy (() =>
  import ('./views/payments/Recieved_Amount_List')
);
const ComparisionReport = React.lazy (() =>
  import ('./views/payments/Comparision_Report')
);
const Pay = React.lazy (() => import ('./views/payments/Pay'));
// const Paymentreport = React.lazy(() =>
//   import("./views/payments/PaymentReport")
// );
const MakePaymenttoRider = React.lazy (() =>
  import ('./views/payments/MakePaymenttoRider')
);
const UserFeedback = React.lazy (() =>
  import ('./views/userManagement/users/UserFeedback')
);
const NonRespondedUser = React.lazy (() =>
  import ('./views/userManagement/users/NonRespondedUsers')
);
const UsersWallet = React.lazy (() =>
  import ('./views/userManagement/users/UserWallet')
);
const UnblockUsers = React.lazy (() =>
  import ('./views/userManagement/users/UnblockUsers')
);
const RiderReviewByUsers = React.lazy (() =>
  import ('./views/userManagement/users/RiderReviews')
);

const Riders = React.lazy (() => import ('./views/rider/Riders'));
const PendingRiders = React.lazy (() => import ('./views/rider/PendingRiders'));
const BlockedRiders = React.lazy (() => import ('./views/rider/BlockedRiders'));
const Rejectedriders = React.lazy (() =>
  import ('./views/rider/Rejectedriders')
);
const RiderProfile = React.lazy (() => import ('./views/rider/Profile'));
const RiderTotalOrder = React.lazy (() => import ('./views/rider/TotalOders'));
const RiderNonRespondedOders = React.lazy (() =>
  import ('./views/rider/NonRespondedOrders')
);
const Orders = React.lazy (() => import ('./views/rider/Orders'));
const OrderDetails = React.lazy (() => import ('./views/rider/OrderDetails'));

const AllUser = React.lazy (() => import ('./views/user/AllUsers'));
const BlockedUsers = React.lazy (() => import ('./views/user/BlockedUsers'));
const CouponsAvailed = React.lazy (() =>
  import ('./views/user/CouponsAvailed')
);
const UserCouponOrderDetails = React.lazy (() =>
  import ('./views/user/UserCouponOrderDetails')
);
const UserCouponAvailedOrderItems = React.lazy (() =>
  import ('./views/user/UserCouponAvailedOrderItems')
);
const UserPayment = React.lazy (() => import ('./views/user/UserPayments'));
const TotalSales = React.lazy (() => import ('./views/user/TotalSales'));

const Demo = React.lazy (() => import ('./views/demo/Demo'));
const VendorTotalOrder = React.lazy (() =>
  import ('./views/vendors/VendorTotalOrder')
);
const VendorOrderDetails = React.lazy (() =>
  import ('./views/vendors/VendorOrderDetails')
);
const UserTotalOrders = React.lazy (() =>
  import ('./views/user/UserTotalOrders')
);
const UserSubOrdersDetails = React.lazy (() =>
  import ('./views/user/UserSubOrdersDetails')
);
const UserOrderItems = React.lazy (() =>
  import ('./views/user/UserOrderItems')
);

const UserSingleOrders = React.lazy (() =>
  import ('./views/user/UserSingleOrders')
);

const UserMultipleOrders = React.lazy (() =>
  import ('./views/user/UserMultipleOrders')
);

const UserOrderDetails = React.lazy (() =>
  import ('./views/user/UserOrderDetails')
);
const UserProfile = React.lazy (() => import ('./views/user/UserProfile'));
const Order = React.lazy (() => import ('./views/order/Order'));

const NewRequestPayment = React.lazy (() =>
  import ('./views/changeAmountExchange/NewRequest')
);
// const Payment = React.lazy(() =>
//   import("./views/changeAmountExchange/Payment")
// );
const CompletedPayment = React.lazy (() =>
  import ('./views/changeAmountExchange/CompletedRequest')
);
const CompleteReviews = React.lazy (() =>
  import ('./views/Reviews/CompleteReviews')
);
const SalesReports = React.lazy (() => import ('./views/reports/SalesReports'));

const BalanceWithCompany = React.lazy (() =>
  import ('./views/dashboard/BalanceWithCompany')
);
const AmountToRiders = React.lazy (() =>
  import ('./views/dashboard/AmountToRiders')
);
const AmountToVendors = React.lazy (() =>
  import ('./views/dashboard/AmountToVendors')
);
const AmountToNonPartnerVendors = React.lazy (() =>
  import ('./views/dashboard/AmountToNonPartnerVendors')
);
// const NetAmountAfterPayouts = React.lazy(() =>
//   import("./views/dashboard/NetAmountAfterPayouts")
// );
const AfterPayout = React.lazy (() => import ('./views/dashboard/AfterPayout'));
const RiderPaymentUpdate = React.lazy (() =>
  import ('./views/payments/RiderPaymentUpdate')
);
const Insentive = React.lazy (() => import ('./views/masters/Insentive'));
const ViewVendors = React.lazy (() => import ('./views/vendors/ViewVendors'));

const ViewCoupons = React.lazy (() => import ('./views/coupons/ViewCoupons'));
const CouponOrderDetails = React.lazy (() =>
  import ('./views/coupons/OrderDetails')
);
const CouponSubOrderDetails = React.lazy (() =>
  import ('./views/coupons/SubOrderDetails')
);
const VendorSubOrderDetails = React.lazy (() =>
  import ('./views/vendors/VendorSubOrderDetails')
);
const CouponEdit = React.lazy (() => import ('./views/coupons/EditCoupons'));
const ItemCategories = React.lazy (() => import ('./views/vendors/Categories'));

const ReportSubOrderDetails = React.lazy (() =>
  import ('./views/reports/ReportSubOrderDetails')
);

const ReportSubOrderItemsDetails = React.lazy (() =>
  import ('./views/reports/ReportSubOrderItemsDetails')
);

const DashboardOrderDetails = React.lazy (() =>
  import ('./views/dashboard/DashboardOrderDetails')
);

const DashboardSubOrderDetails = React.lazy (() =>
  import ('./views/dashboard/DashboardSubOrderDetails')
);

const SubOrderDetails = React.lazy (() =>
  import ('./views/order/SubOrderDetails')
);

const OrderItems = React.lazy (() => import ('./views/order/OrderItems'));

const NonRespondedSubOrders = React.lazy (() =>
  import ('./views/rider/NonRespondedSubOrders')
);

const NonRespondedOrderDetails = React.lazy (() =>
  import ('./views/rider/NonRespondedOrderDetails')
);

const RiderSubOrders = React.lazy (() =>
  import ('./views/rider/RiderSubOrders')
);

const NonRespondedTotalOrders = React.lazy (() =>
  import ('./views/rider/NonRespondedTotalOrders')
);

const Change_OrderDetails = React.lazy (() =>
  import ('./views/changeAmountExchange/Change_OrderDetails')
);

const Items_Details = React.lazy (() =>
  import ('./views/changeAmountExchange/Items_Details')
);

const Feedback_usersOrder = React.lazy (() =>
  import ('./views/masters/Feedback_usersOrder')
);

const Feedback_subOrders = React.lazy (() =>
  import ('./views/masters/Feedback_subOrders')
);

const Feedback_subOrdersItem = React.lazy (() =>
  import ('./views/masters/Feedback_subOrdersItem')
);

const ChangeExchange_NewRequest = React.lazy (() =>
  import ('./views/changeAmountExchange/ChangeExchange_NewRequest')
);

const JazzCash = React.lazy (() =>
  import ('./views/changeAmountExchange/JazzCash')
);

const RefundOrderDetails = React.lazy (() =>
  import ('./views/walletamountrefund/RefundOrderDetails')
);

const WalletPayment = React.lazy (() =>
  import ('./views/walletamountrefund/WalletPayment')
);

const RefundSubOrderDetails = React.lazy (() =>
  import ('./views/walletamountrefund/RefundSubOrderDetails')
);

const routes = [
  {path: '/', exact: true, name: 'Login'},
  {path: '/AllUser', name: 'AllUser', component: AllUser},
  {path: '/Demo', name: 'Demo', component: Demo},
  {path: '/BlockedUsers', name: 'BlockedUsers', component: BlockedUsers},
  {
    path: '/ItemCategories',
    name: 'ItemCategories',
    component: ItemCategories,
  },

  {
    path: '/UserCouponOrderDetails',
    name: 'UserCouponOrderDetails',
    component: UserCouponOrderDetails,
  },
  {
    path: '/UserCouponAvailedOrderItems',
    name: 'UserCouponAvailedOrderItems',
    component: UserCouponAvailedOrderItems,
  },
  {
    path: '/CouponsAvailed',
    name: 'CouponsAvailed',
    component: CouponsAvailed,
  },
  {path: '/UserPayment', name: 'UserPayment', component: UserPayment},
  {path: '/TotalSales', name: 'TotalSales', component: TotalSales},
  {path: '/ViewVendors', name: 'ViewVendors', component: ViewVendors},
  {path: '/Orders', name: 'Orders', component: Orders},
  {path: '/OrderDetails', name: 'OrderDetails', component: OrderDetails},

  {path: '/ViewCoupons', name: 'ViewCoupons', component: ViewCoupons},
  {
    path: '/CouponOrderDetails',
    name: 'CouponOrderDetails',
    component: CouponOrderDetails,
  },
  {
    path: '/CouponSubOrderDetails',
    name: 'CouponSubOrderDetails',
    component: CouponSubOrderDetails,
  },
  {
    path: '/VendorSubOrderItems',
    name: 'VendorSubOrderItems',
    component: VendorSubOrderDetails,
  },
  {path: '/CouponEdit', name: 'CouponEdit', component: CouponEdit},

  {
    path: '/RiderTotalOrder',
    name: 'RiderTotalOrder',
    component: RiderTotalOrder,
  },
  {
    path: '/RiderNonRespondedOders',
    name: 'RiderNonRespondedOders',
    component: RiderNonRespondedOders,
  },
  {path: '/dashboard', name: 'Dashboard', component: Dashboard},
  {path: '/charts', name: 'Charts', component: Charts},
  {path: '/widgets', name: 'Widgets', component: Widgets},
  {path: '/users', exact: true, name: 'Users', component: Users},
  {path: '/users/:id', exact: true, name: 'User Details', component: User},
  {
    path: '/master',
    exact: true,
    name: 'Location_Master',
    component: Location_Master,
  },
  {
    path: '/master/Banner',
    name: 'Banner_Image_Master',
    component: Banner_Image_Master,
  },
  {
    path: '/Payment_type',
    name: 'Payment_Master_Type',
    component: Payment_Master_Type,
  },
  {path: '/setPrice', name: 'Set Price', component: SetPrice},
  {path: '/contact_us', name: 'Contact Us', component: ContactUs},
  {path: '/feedback', name: 'Feed back ', component: Feedback},
  {path: '/deliveryprice', name: 'Delivery Price', component: DeliveryPrice},
  {
    path: '/marchantandshopcategory',
    name: 'Employee Type Master',
    component: EmployeTypeMaster,
  },
  {
    path: '/employeeMaster',
    name: 'Employee Master',
    component: EmployeMaster,
  },
  {
    path: '/RiderTipsTextMsg',
    name: 'Rider Tips Text Msg',
    component: RiderTipsTextMsg,
  },
  {path: '/FAQ', name: 'FAQ', component: FAQ},

  {
    path: '/RegPatMenuInfo',
    name: 'RegPatMenuInfo',
    component: RegPatMenuInfo,
  },
  {
    path: '/RegPatOwnerInfo',
    name: 'RegPatOwnerInfo',
    component: RegPatOwnerInfo,
  },
  {
    path: '/RegPatSalesInfo',
    name: 'RegPatSalesInfo',
    component: RegPatSalesInfo,
  },

  {
    path: '/WalletNewRequest',
    name: 'WalletNewRequest',
    component: WalletNewRequest,
  },
  {
    path: '/WalletConfirmedRequest',
    name: 'WalletConfirmedRequest',
    component: WalletConfirmedRequest,
  },
  {
    path: '/WalletRejectedRequest',
    name: 'WalletRejectedRequest',
    component: WalletRejectedRequest,
  },
  {
    path: '/WalletRefundREport',
    name: 'WalletRefundREport',
    component: WalletRefundREport,
  },
  {
    path: '/RiderReviewByUsers',
    name: 'RiderReviewByUsers',
    component: RiderReviewByUsers,
  },
  {path: '/Addcoupons', name: 'Addcoupons', component: Addcoupons},
  {
    path: '/AvailedCoupons',
    name: 'AvailedCoupons',
    component: AvailedCoupons,
  },
  {
    path: '/PreviousCoupons',
    name: 'PreviousCoupons',
    component: PreviousCoupons,
  },

  {path: '/EditVendor', name: 'EditVendor', component: EditVendor},
  {path: '/AddNewStore', name: 'AddNewStore', component: AddNewStore},

  {
    path: '/NonregActiveOrders',
    name: 'NonregActiveOrders ',
    component: NonregActiveOrders,
  },
  {
    path: '/NonregCompleteOrders',
    name: 'NonregCompleteOrders ',
    component: NonregCompleteOrders,
  },
  {
    path: '/NonPatActiveOrders',
    name: 'NonPatActiveOrders ',
    component: NonPatActiveOrders,
  },
  {
    path: '/NonPatCompleteOrders',
    name: 'NonPatCompleteOrders ',
    component: NonPatCompleteOrders,
  },
  {
    path: '/NonPatPendingOrders',
    name: 'NonPatPendingOrders ',
    component: NonPatPendingOrders,
  },
  {
    path: '/NonPatRejectedOrders',
    name: 'NonPatRejectedOrders ',
    component: NonPatRejectedOrders,
  },
  {
    path: '/NonPatNonRespondedOrders',
    name: 'NonPatNonRespondedOrders ',
    component: NonPatNonRespondedOrders,
  },
  {
    path: '/PatActiveOrders',
    name: 'PatActiveOrders ',
    component: PatActiveOrders,
  },
  {
    path: '/PatCompleteOrders',
    name: 'PatCompleteOrders ',
    component: PatCompleteOrders,
  },
  {
    path: '/PatRejectedOrders',
    name: 'PatRejectedOrders ',
    component: PatRejectedOrders,
  },
  {
    path: '/PatPendingOrders',
    name: 'PatPendingOrders ',
    component: PatPendingOrders,
  },
  {
    path: '/PatNonRespondedOrders',
    name: 'PatNonRespondedOrders ',
    component: PatNonRespondedOrders,
  },
  {
    path: '/RiderActiveOrders',
    name: 'RiderActiveOrders ',
    component: RiderActiveOrders,
  },
  {path: '/AreaReport', name: 'AreaReport ', component: AreaReport},
  {path: '/CityReport', name: 'CityReport ', component: CityReport},
  {path: '/MonthlyReport', name: 'MonthlyReport ', component: MonthlyReport},
  {path: '/OverAllReport', name: 'OverAllReport ', component: OverAllReport},
  {path: '/StoreReport', name: 'StoreReport ', component: StoreReport},

  {
    path: '/MakePaymenttoRider',
    name: 'MakePaymenttoRider ',
    component: MakePaymenttoRider,
  },
  // { path: "/Paymentreport", name: "Paymentreport ", component: Paymentreport },

  {
    path: '/SalesPerformance',
    name: 'SalesPerformance ',
    component: SalesPerformance,
  },
  {path: '/StoreReviews', name: 'StoreReviews ', component: StoreReviews},
  {path: '/PendingStores', name: 'PendingStores ', component: PendingStores},
  {path: '/BlockedStores', name: 'BlockedStores ', component: BlockedStores},
  {
    path: '/RejectedMerchant',
    name: 'RejectedMerchant ',
    component: RejectedMerchant,
  },
  {
    path: '/PendingRiders',
    name: 'PendingRiders ',
    component: PendingRiders,
  },
  {path: '/BlockedRiders', name: 'BlockedRiders ', component: BlockedRiders},
  {
    path: '/Rejectedriders',
    name: 'Rejectedriders ',
    component: Rejectedriders,
  },

  {
    path: '/users_management/mobileAppUsers',
    name: 'Users/Mobile_APP',
    component: Users_mobileApp,
  },
  {
    path: '/users_management/stroes',
    name: 'Stroes/Branches',
    component: Stroes_Branch,
  },
  {path: '/users_Management/itemsMenu', name: 'Items', component: ItemsTable},

  {
    path: '/users_Management/feedbackpage',
    name: 'FeedBack',
    component: FeedbackPage,
  },
  // { path: "/users_management/riders", name: "Riders", component: Riders },
  {path: '/Riders', name: 'Riders', component: Riders},
  {
    path: '/users_management/customerSupport',
    name: 'Customer Support',
    component: CustomerSupport,
  },
  {path: '/users_management/calls', name: 'Calls', component: Calls},
  {
    path: '/users_management/reviewsPage',
    name: 'Reviews Page',
    component: ReviewPage,
  },
  {
    path: '/users_management/dailyReports',
    name: 'Daily Updated Reports',
    component: DailyReports,
  },
  {
    path: '/users_management/chattingReports',
    name: 'Chatting Reports',
    component: ChattingReports,
  },
  {
    path: '/reports/salesReport',
    name: 'Sales Reports',
    component: SalesReport,
  },
  {path: '/PaymentUpdate', name: 'PaymentUpdate', component: PaymentUpdate},
  {path: '/ActivePayment', name: 'ActivePayment', component: ActivePayment},
  {
    path: '/MerchantPaymentreport',
    name: 'MerchantPaymentreport',
    component: MerchantPaymentreport,
  },
  {path: '/Notification', name: 'Notification', component: Notification},
  {
    path: '/RecievedAmountList',
    name: 'RecievedAmountList ',
    component: RecievedAmountList,
  },
  {
    path: '/ComparisionReport',
    name: 'ComparisionReport ',
    component: ComparisionReport,
  },
  {path: '/Pay', name: 'Pay ', component: Pay},
  {
    path: '/NonRespondedUser',
    name: 'NonRespondedUser ',
    component: NonRespondedUser,
  },
  {path: '/UserFeedback', name: 'UserFeedback', component: UserFeedback},
  {path: '/UsersWallet', name: 'UsersWallet ', component: UsersWallet},
  {path: '/UnblockUsers', name: 'UnblockUsers', component: UnblockUsers},

  {
    path: '/PendingVendors',
    name: 'PendingVendors',
    component: PendingVendors,
  },
  {
    path: '/RejectedVendors',
    name: 'RejectedVendors ',
    component: RejectedVendors,
  },
  {
    path: '/BlockedVendors',
    name: 'BlockedVendors',
    component: BlockedVendors,
  },
  {path: '/RiderProfile', name: 'RiderProfile', component: RiderProfile},
  {
    path: '/VendorTotalOrder',
    name: 'VendorTotalOrder',
    component: VendorTotalOrder,
  },
  {
    path: '/VendorOrderDetails',
    name: 'VendorOrderDetails',
    component: VendorOrderDetails,
  },
  {
    path: '/UserTotalOrders',
    name: 'UserTotalOrders',
    component: UserTotalOrders,
  },
  {
    path: '/UserSubOrdersDetails',
    name: 'UserSubOrdersDetails',
    component: UserSubOrdersDetails,
  },
  {
    path: '/UserOrderItems',
    name: 'UserOrderItems',
    component: UserOrderItems,
  },
  {
    path: '/UserSingleOrders',
    name: 'UserSingleOrders',
    component: UserSingleOrders,
  },

  {
    path: '/UserMultipleOrders',
    name: 'UserMultipleOrders',
    component: UserMultipleOrders,
  },

  {
    path: '/UserOrderDetails',
    name: 'UserOrderDetails',
    component: UserOrderDetails,
  },
  {path: '/UserProfile', name: 'UserProfile', component: UserProfile},
  {path: '/Order', name: 'Order', component: Order},

  {
    path: '/NewRequestPayment',
    name: 'NewRequestPayment',
    component: NewRequestPayment,
  },
  // { path: "/Payment", name: "Payment", component: Payment },
  {
    path: '/CompletedPayment',
    name: 'CompletedPayment',
    component: CompletedPayment,
  },
  {
    path: '/CompleteReviews',
    name: 'CompleteReviews',
    component: CompleteReviews,
  },
  {path: '/SalesReports', name: 'SalesReports', component: SalesReports},

  {
    path: '/BalanceWithCompany',
    name: 'BalanceWithCompany',
    component: BalanceWithCompany,
  },
  {
    path: '/AmountToRiders',
    name: 'AmountToRiders',
    component: AmountToRiders,
  },
  {
    path: '/AmountToVendors',
    name: 'AmountToVendors',
    component: AmountToVendors,
  },
  {
    path: '/AmountToNonPartnerVendors',
    name: 'AmountToNonPartnerVendors',
    component: AmountToNonPartnerVendors,
  },
  // {
  //   path: "/NetAmountAfterPayouts",
  //   name: "NetAmountAfterPayouts",
  //   component: NetAmountAfterPayouts,
  // },
  {path: '/AfterPayout', name: 'AfterPayout', component: AfterPayout},
  {
    path: '/RiderPaymentUpdate',
    name: 'RiderPaymentUpdate',
    component: RiderPaymentUpdate,
  },
  {path: '/Insentive', name: 'Insentive', component: Insentive},
  {
    path: '/ReportSubOrderDetails',
    name: 'ReportSubOrderDetails',
    component: ReportSubOrderDetails,
  },
  {
    path: '/ReportSubOrderItemsDetails',
    name: 'ReportSubOrderItemsDetails',
    component: ReportSubOrderItemsDetails,
  },
  {
    path: '/DashboardOrderDetails',
    name: 'DashboardOrderDetails',
    component: DashboardOrderDetails,
  },
  {
    path: '/DashboardSubOrderDetails',
    name: 'DashboardSubOrderDetails',
    component: DashboardSubOrderDetails,
  },
  {
    path: '/SubOrderDetails',
    name: 'SubOrderDetails',
    component: SubOrderDetails,
  },
  {
    path: '/OrderItems',
    name: 'OrderItems',
    component: OrderItems,
  },
  {
    path: '/RiderSubOrders',
    name: 'RiderSubOrders',
    component: RiderSubOrders,
  },
  {
    path: '/NonRespondedTotalOrders',
    name: 'NonRespondedTotalOrders',
    component: NonRespondedTotalOrders,
  },
  {
    path: '/NonRespondedOrderDetails',
    name: 'NonRespondedOrderDetails',
    component: NonRespondedOrderDetails,
  },
  {
    path: '/NonRespondedSubOrders',
    name: 'NonRespondedSubOrders',
    component: NonRespondedSubOrders,
  },
  // Azlan
  {
    path: '/ChangeExchange_NewRequest',
    name: 'ChangeExchange_NewRequest',
    component: ChangeExchange_NewRequest,
  },
  {
    path: '/Change_OrderDetails',
    name: 'Change_OrderDetails',
    component: Change_OrderDetails,
  },
  {
    path: '/JazzCashPayment',
    name: 'JazzCashPayment',
    component: JazzCash,
  },
  {
    path: '/Items_Details',
    name: 'Items_Details',
    component: Items_Details,
  },
  {
    path: '/RefundOrderDetails',
    name: 'RefundOrderDetails',
    component: RefundOrderDetails,
  },
  {
    path: '/WalletPayment',
    name: 'WalletPayment',
    component: WalletPayment,
  },
  {
    path: '/RefundSubOrderDetails',
    name: 'RefundSubOrderDetails',
    component: RefundSubOrderDetails,
  },
  {
    path: '/Feedback_usersOrder',
    name: 'Feedback_usersOrder',
    component: Feedback_usersOrder,
  },
  {
    path: '/Feedback_subOrders',
    name: 'Feedback_subOrders',
    component: Feedback_subOrders,
  },
  {
    path: '/Feedback_subOrdersItem',
    name: 'Feedback_subOrdersItem',
    component: Feedback_subOrdersItem,
  },
];

export default routes;
