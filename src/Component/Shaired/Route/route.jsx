import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../OutlateAll/Main/Main';
import Home from '../../Home/Home';
import Dashboard from '../../DashboardAll/Dashboard/Dashboard';
import Error from '../Error/Error';
import Login from '../../AuthoncationAll/Login/Login';
import SingUp from '../../AuthoncationAll/SingUp/SingUp';
import AdminSeeAllUser from '../../DashboardAll/AdminPanelDashboardAll/AdminSeeAllUser/AdminSeeAllUser';
import PrivateRoute from '../../AuthoncationAll/PrivateRoute/PrivateRoute';
import UserSubscriptionAllData from '../../DashboardAll/AdminPanelDashboardAll/UserSubscriptionAllData/UserSubscriptionAllData';
import UserAllWithdrawData from '../../DashboardAll/AdminPanelDashboardAll/UserAllWithdrawData/UserAllWithdrawData';
import UserAllRechargeData from '../../DashboardAll/AdminPanelDashboardAll/UserAllRechargeData/UserAllRechargeData';
import UpdatePaymentInfoAdmin from '../../DashboardAll/AdminPanelDashboardAll/UpdatePaymentInfoAdmin/UpdatePaymentInfoAdmin';
import USERDashboard from '../../USERDashboardAll/USERDashboard/USERDashboard';
import FreeClimeAll from '../../USERDashboardAll/USERDashboardWorkAll/FreeClimeAll/FreeClimeAll';
import InviteMyFriend from '../../USERDashboardAll/USERDashboardWorkAll/InviteMyFriend/InviteMyFriend';
import WithdrawMoney from '../../USERDashboardAll/USERDashboardWorkAll/WithdrawMoney/WithdrawMoney';
import UserProfile from '../../USERDashboardAll/USERDashboardWorkAll/UserProfile/UserProfile';
import PlanClimeDaily from '../../USERDashboardAll/USERDashboardWorkAll/PlanClimeDaily/PlanClimeDaily';
import Recharge from '../../USERDashboardAll/USERDashboardWorkAll/PaymentAllSystem/Recharge/Recharge';
import OverviewAllPlan from '../../USERDashboardAll/USERDashboardWorkAll/OverviewAllPlan/OverviewAllPlan';
import MyTaskAll from '../../USERDashboardAll/USERDashboardWorkAll/MyTaskAll/MyTaskAll';
import MyReferAll from '../../USERDashboardAll/USERDashboardWorkAll/MyReferAll/MyReferAll';
import ConfirmePayment from '../../USERDashboardAll/USERDashboardWorkAll/PaymentAllSystem/ConfirmePayment/ConfirmePayment';
import UserAccount from '../../USERDashboardAll/UserAccount/UserAccount';


let route = createBrowserRouter([

    // ===========================================
    // There is all home route hear Start
    // ===========================================
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "login",
                element: <Login></Login>
            },
            {
                path: "singUp/:id",
                element: <SingUp></SingUp>
            },
        ]
    },

    // ===========================================
    // There is all home route hear End
    // ===========================================


    // ===========================================
    // There is all (USER) route hear Start
    // ===========================================

    {
        path : "DashboardUser",
        element : <PrivateRoute><USERDashboard></USERDashboard></PrivateRoute>,
        children : [

            {
                path:"UserAccount",
                element: <UserAccount></UserAccount>
            },
            {
                path:"OverviewPlan",
                element: <OverviewAllPlan></OverviewAllPlan>
            },
            {
                path:"Reacharge",
                element: <Recharge></Recharge>
            },
            {
                path:"ConfirmePayment",
                element: <ConfirmePayment></ConfirmePayment>
            },
            {
                path:"Profile",
                element: <UserProfile></UserProfile>
            },
            {
                path:"DailyClime",
                element: <PlanClimeDaily></PlanClimeDaily>
            },
            {
                path:"FreeClimeDaily",
                element: <FreeClimeAll></FreeClimeAll>
            },
            {
                path:"MyReferall",
                element: <MyReferAll></MyReferAll>
            },
            {
                path:"InviteFriends",
                element: <InviteMyFriend></InviteMyFriend>
            },
            {
                path:"TaskClime",
                element: <MyTaskAll></MyTaskAll>
            },
            {
                path:"Withdraw",
                element: <WithdrawMoney></WithdrawMoney>
            },
        ]

    },
    

    // ===========================================
    // There is all (USER) route hear End
    // ===========================================


    // ===========================================
    // There is all (ADMIN) route hear Start
    // ===========================================
    {
        path: "dashboardAdminShipon",
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
                path: "AdminUser",
                element: <PrivateRoute> <AdminSeeAllUser></AdminSeeAllUser></PrivateRoute>
            },
            {
                path: "userSubscription",
                element: <PrivateRoute> <UserSubscriptionAllData></UserSubscriptionAllData></PrivateRoute>
            },
            {
                path: "UserAllWithdrawData",
                element: <PrivateRoute> <UserAllWithdrawData></UserAllWithdrawData> </PrivateRoute>
            },
            {
                path: "UserAllRechargeData",
                element: <PrivateRoute> <UserAllRechargeData></UserAllRechargeData> </PrivateRoute>
            },
            {
                path: "UpdatePaymentInfoAdmin",
                element: <PrivateRoute> <UpdatePaymentInfoAdmin></UpdatePaymentInfoAdmin> </PrivateRoute>
            },


        ]
    },
    // ===========================================
    // There is all ADMIN route hear End
    // ===========================================
    {
        path: "*",
        element: <Error></Error>
    }

])

export default route;