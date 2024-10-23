import React from 'react';
import "./USERDashboardHeader.css"
import logo from "../../../assets/logo/dashboardLogo.png"
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthoncationAll/AuthProvider/AuthProvider';

const USERDashboardHeader = () => {

    let { user, logOutUser } = useContext(AuthContext)
    // console.log(user)
    let handelLogOut = () => {
        logOutUser()
            .then(data => { })
            .then(error => { })
    }

    let handleSendRequest = () => {
        alert("Send Your Request")
    }


    return (
        <div className="DashboardNavbar navbar z-50 fixed md:sticky top-0 w-[100%] ">
            {/* ================================== */}
            <div className="flex-1">

                {/* Dashboard sidebar open drawer */}

                <label htmlFor="my-drawer-2" className="btn w-[60px] md:hidden"><i className="fa text-black text-2xl fa-bars" aria-hidden="true"></i></label>

                <div className="">
                    <Link to="/">
                    {/* <img className='w-[100%]' src={logo} alt="img" /> */}
                    </Link>
                </div>


                <div className="hidden md:block">
                    <div className="flex gap-4 ml-0 md:ml-[64px] ">
                    </div>
                </div>
            </div>

            {/* ================================== */}
            <div className="flex-none gap-2">
                <div className="form-control">
                </div>

                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar mx-[32px]">
                        <div className="ProfileIcon">
                            <img className='w-[100%]' src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&q=80&w=1480&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                        </div>
                    </label>



                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                            <Link to="/UserProfile" className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </Link>
                        </li>
                        <li onClick={handleSendRequest}><a>Delete Account</a></li>
                        <hr />
                        <li><button onClick={handelLogOut}>Logout</button></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default USERDashboardHeader;