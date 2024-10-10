import React from 'react';
// import { useNavigate, useLocation, Link } from "react-router-dom";
import "./Home.css"
import Banner from '../HomeAllSection/Banner.jsx/Banner';
import WhyChoseMoneyFly from '../HomeAllSection/WhyChoseMoneyFly/WhyChoseMoneyFly';
import CheckOurCommunity from '../HomeAllSection/CheckOurCommunity/CheckOurCommunity';
import AboutUsSomthing from '../HomeAllSection/AboutUsSomthing/AboutUsSomthing';
import FrequentlyAskedQuestions from '../HomeAllSection/FrequentlyAskedQuestions/FrequentlyAskedQuestions';
import ReadyToMakeMoney from '../HomeAllSection/ReadyToMakeMoney/ReadyToMakeMoney';
// import { useState } from 'react';
// import Swal from 'sweetalert2';
// import useRole from '../../Hook/useRole';
// import { useQuery } from '@tanstack/react-query';
// import { useContext } from 'react';
// import { AuthContext } from '../AuthoncationAll/AuthProvider/AuthProvider';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css'
// import Marquee from "react-fast-marquee";

const Home = () => {

    // let { user, loading, setSubscriptionPrice } = useContext(AuthContext);
    // const [roles] = useRole()
    // const userStatus = roles?.email && user?.email;
    // let navigate = useNavigate();
    // let location = useLocation();
    {/* <ToastContainer /> */}

   
    return (
        <div className="HomeParent">

            <Banner></Banner>
            <WhyChoseMoneyFly></WhyChoseMoneyFly>
            <CheckOurCommunity></CheckOurCommunity>
            <AboutUsSomthing></AboutUsSomthing>
            <FrequentlyAskedQuestions></FrequentlyAskedQuestions>
            <ReadyToMakeMoney></ReadyToMakeMoney>



        </div>
    );
};

export default Home;