import React, { useContext } from 'react';
import "./HeaderBottom.css"
import VIP from '../../../assets/AllImage/VIP.png';
import home from '../../../assets/AllImage/home.png';
import clame from '../../../assets/AllImage/clame.png';
import Icon7 from '../../../assets/AllImage/icon7.png';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthoncationAll/AuthProvider/AuthProvider';
import useRole from '../../../Hook/useRole';
import { ToastContainer, toast } from 'react-toastify';
import Swal from 'sweetalert2';

const HeaderBottom = () => {

    let { user } = useContext(AuthContext);
    const [roles] = useRole()
    let navigate = useNavigate();
    let location = useLocation();


    // ====================================================
    // User Clime Bonus Start
    // ====================================================

    let handleUserClime = () => {

        if (user && roles?.email && user?.email) {

            navigate("/Climed")

        } else {

            Swal.fire({
                title: 'Please Login Your Account ',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now'
            })
                .then((result) => {
                    if (result.isConfirmed) {
                        navigate("/login", { state: { from: location } })
                        toast("Login Page Success")
                    }
                })
        }

    }

    // ====================================================
    // User Clime Bonus End
    // ====================================================

    // ====================================================
    // User Profile  Start
    // ====================================================

    let handleUserProfile = () => {

        if (user && roles?.email && user?.email) {

            navigate("/Profile")

        } else {

            Swal.fire({
                title: 'Please Login Your Account ',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now'
            })
                .then((result) => {
                    if (result.isConfirmed) {
                        navigate("/login", { state: { from: location } })
                        toast("Login Page Success")
                    }
                })
        }

    }

    // ====================================================
    // User Profile  End
    // ====================================================

    // ====================================================
    // Vip Clime  Start
    // ====================================================
    
    let handleUserVip = () => {

        if (user && roles?.email && user?.email) {

            navigate("/Vip")

        } else {

            Swal.fire({
                title: 'Please Login Your Account ',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now'
            })
                .then((result) => {
                    if (result.isConfirmed) {
                        navigate("/login", { state: { from: location } })
                        toast("Login Page Success")
                    }
                })
        }

    }

    // ====================================================
    // Vip Clime  End
    // ====================================================




    return (
        <div className='HeaderBottom bg-white'>
            <ToastContainer />

            {/* <div className='w-[100%] '> */}
            <div className='AllNavBottomOptions flex  '>

                <Link to="/" className="ButtonOptions" >
                    <div className="Img w-[38px] h-[34px]">
                        <img src={home} alt="img" className='w-[100%] h-[100%]' />
                    </div>
                    <h4>হোম</h4>
                </Link>
                <div className="ButtonOptions" onClick={handleUserClime}>
                    <div className="Img w-[38px] h-[34px]">
                        <img src={clame} alt="img" className='w-[100%] h-[100%]' />
                    </div>
                    <h4>ক্লাইম</h4>
                </div>

                <div className="ButtonOptions" onClick={handleUserVip}>
                    <div className="Img w-[38px] h-[34px] mx-auto">
                        <img src={VIP} alt="img" className='w-[100%] h-[100%]' />
                    </div>
                    <h4>ভিআইপি</h4>
                </div>

                <div className="ButtonOptions" onClick={handleUserProfile}>
                    <div className="Img w-[38px] h-[34px] mx-auto">
                        <img src={Icon7} alt="img" className='w-[100%] h-[100%]' />
                    </div>
                    <h4>মেইন</h4>
                </div>

            {/* </div> */}
            </div>
        </div>
    );
};

export default HeaderBottom;