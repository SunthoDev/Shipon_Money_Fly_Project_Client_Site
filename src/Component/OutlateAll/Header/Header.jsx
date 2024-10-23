import React, { useContext } from 'react';
import "./Header.css"
import { Link, Navigate } from 'react-router-dom';
import Logo from "../../../assets/logo/logoOne.png"
import { AuthContext } from '../../AuthoncationAll/AuthProvider/AuthProvider';
import useRole from '../../../Hook/useRole';

const Header = () => {

    let { user, logOutUser } = useContext(AuthContext)
    const [roles] = useRole()
    // console.log(roles)
    const ad = roles?.role === "admin"
    const userCheck = roles?.role === "user"

    let handelLogOut = () => {
        logOutUser()
            .then(data => { })
            .then(error => { })
    }

    return (
        <div className="sticky top-0 w-[100%] z-50">

            {/* ================================= */}
            <div className=" hidden md:block">
                <div className="NavHeading bg-[#1f2b46]  flex justify-center items-center">
                    <h2 className='text-white mt-2 mb-2'>New user? Join now and <span className="text-[#fdd94b]">get $24</span> starter gift!</h2>
                    <button>Get $24</button>
                </div>
            </div>
            {/* ================================== */}

                <div className="navbar  navParent px-2 md:px-20 py-5 z-40 ">

                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">

                                <i className="fa text-black text-2xl fa-bars" aria-hidden="true"></i>

                            </label>

                            <ul tabIndex={0} className="NaveMenu menu menu-sm dropdown-content mt-3 p-3  bg-[#1f2b46]  w-52 z-40">

                                <Link to="/"><a>Home</a></Link>
                                <Link to="/AboutUs"><a>About Us</a></Link>
                                <Link className='Drop' to="/Services"><a><i className="font-bold  pr-1 fa fa-sort-desc" aria-hidden="true"></i>Services</a>
                                    <ul class="dropdown z-50">
                                        <li><Link to='/Services'><a>Graphic Design</a></Link></li>
                                        <li><Link to='/ServicesOne'><a>Software Development</a></Link></li>
                                        <li><Link to='/ServicesTow'><a>UI UX</a></Link></li>
                                        <li><Link to='/ServicesThree'><a>Web Services</a></Link></li>
                                    </ul>
                                </Link>
                                <Link to="/Product"><a>Refer a Friend</a></Link>
                                <Link to="/Portfolio"><a>Blogs</a></Link>
                                {
                                    ad &&
                                    <Link to="/dashboardAdminShipon">
                                        <button className="Dashboard">Dashboard</button>
                                    </Link>
                                }
                                {
                                    <Link to="/DashboardUser">
                                        <button className="Dashboard">UserDashboard</button>
                                    </Link>
                                }

                            </ul>
                        </div>

                        <div className=''>
                            {/* <Link to="/"><h2 className="text-[18px] font-[600] text-black">MoneyFly</h2></Link> */}
                            <Link to="/">
                                <img src={Logo} alt="Img Logo" />
                            </Link>
                        </div>
                    </div>



                    <div className="navbar-center hidden lg:flex">

                        <ul className="NaveMenu menu menu-horizontal px-1">
                            <Link to="/"><a>Home</a></Link>
                            <Link to="/AboutUs"><a>About Us</a></Link>
                            <Link className='Drop z-[41]' to="/Services"><a><i className="font-bold  pr-1 fa fa-sort-desc" aria-hidden="true"></i>Services</a>
                                <ul class="dropdown ">
                                    <li><Link to='/Services'><a>Graphic Design</a></Link></li>
                                    <li><Link to='/ServicesOne'><a>Software Development</a></Link></li>
                                    <li><Link to='/ServicesTow'><a>UI UX</a></Link></li>
                                    <li><Link to='/ServicesThree'><a>Web Services</a></Link></li>
                                </ul>
                            </Link>
                            <Link to="/Product"><a>Refer a Friend</a></Link>
                            <Link to="/Portfolio"><a>Blogs</a></Link>
                        </ul>
                    </div>


                    <div className="navbar-end">
                        {
                            user ?
                                <div className='items-center flex'>

                                    <Link to="/DashboardUser">
                                        <button className="UserDashboard">User-Dashboard</button>
                                    </Link>
                                    {
                                        ad &&
                                        <Link to="/dashboardAdminShipon">
                                            <button className="AdminDashboard">Dashboard</button>
                                        </Link>
                                    }
                                </div>
                                :
                                <>
                                    <Link to="login" className="Login">Sign In</Link>
                                    <Link to="singUp/0000" className="SingUp">Sign Up</Link>
                                </>
                        }
                </div>
            </div>

        </div>
    );
};

export default Header;


