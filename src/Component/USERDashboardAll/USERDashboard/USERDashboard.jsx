import React, { useContext } from 'react';
import "./USERDashboard.css"
import { Link, NavLink, Outlet } from 'react-router-dom';
import { FaWallet, FaShoppingCart, FaCalendarAlt, FaHome, FaHeadSideVirus } from 'react-icons/fa';
import { AuthContext } from '../../AuthoncationAll/AuthProvider/AuthProvider';
import USERDashboardHeader from '../USERDashboardHeader/USERDashboardHeader';
import Logo from "../../../assets/logo/DashboardLeftLogo.png"

const USERDashboard = () => {


    let { user, logOutUser } = useContext(AuthContext)



    return (
        <div className="drawer md:drawer-open  bg-[#F9FBFD]">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle " />
            <div className="drawer-content flex flex-col  ">

                <USERDashboardHeader></USERDashboardHeader>
                {/* ===================================== */}
                <Outlet></Outlet>
                {/* Page content here */}

            </div>



            <div className="drawer-side  z-[999]">
                <label htmlFor="my-drawer-2" className=" drawer-overlay"></label>

                <ul className="menuParent menu px-6 pt-[28px] w-90 h-[100%] text-base-content">

                    <div className='Information mb-[20px]'>

                        <Link to="/">
                            <div className='Img flex items-center'>
                                <img src={Logo} alt="image logo" />
                                <h4 className="text-[20px] font-[400] pl-[4px]">MoneyFly</h4>
                            </div>
                        </Link>

                    </div>

                    {/* Sidebar content here */}

                    {/* admin panel  */}

                    <div className='RouteAllParent'>

                        <li className='Dashboard'> <NavLink to="/DashboardUser/UserAccount"><span><i className="fa fa-tachometer" aria-hidden="true"></i></span>  My Dashboard</NavLink></li>
                        <li> <NavLink to="/DashboardUser/OverviewPlan"><span><i className="fa fa-circle-o-notch" aria-hidden="true"></i></span>Overview Plan</NavLink></li>
                        <li> <NavLink to="/DashboardUser/Reacharge"><span><i className="fa fa-credit-card" aria-hidden="true"></i></span>Recharge Money</NavLink></li>
                        <li> <NavLink to="/DashboardUser/Profile"><span><i className="fa fa-user-circle-o" aria-hidden="true"></i></span>Profile</NavLink></li>
                        <li> <NavLink to="/DashboardUser/DailyClime"><span><i className="fa fa-usd" aria-hidden="true"></i></span>Plan Clime</NavLink></li>
                        <li> <NavLink to="/DashboardUser/FreeClimeDaily"><span><i className="fa fa-gift" aria-hidden="true"></i></span>Free Clime</NavLink></li>
                        <li> <NavLink to="/DashboardUser/MyReferall"><span><i className="fa fa-gg" aria-hidden="true"></i></span>My Refer</NavLink></li>
                        <li> <NavLink to="/DashboardUser/InviteFriends"><span><i className="fa fa-share-square-o" aria-hidden="true"></i></span>Invite Friends</NavLink></li>
                        <li> <NavLink to="/DashboardUser/TaskClime"><span><i className="fa fa-tasks" aria-hidden="true"></i></span>My Singup Dollar</NavLink></li>
                        <li> <NavLink to="/DashboardUser/Withdraw"><span><i className="fa fa-money" aria-hidden="true"></i></span>Withdraw Money</NavLink></li>

                    </ div>

                </ul>

            </div>
        </div >
    );
};

export default USERDashboard;