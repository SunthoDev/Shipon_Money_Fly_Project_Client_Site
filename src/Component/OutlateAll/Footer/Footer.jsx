import React from 'react';
import "./Footer.css"
import Logo from "../../../assets/AllImage/logo.png"
import { useState } from 'react';
import Swal from 'sweetalert2';

const Footer = () => {

    
    let handleSubscribe = (e) => {
        e.preventDefault()
        let EmilValue = e.target.subscribe.value
        let allData={EmilValue}

        fetch("https://myserver.minarhousingltd.com/userAddSubscriptEmail", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(allData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Thanks for you subscribe",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })

    }



    return (
        <div>
            <div className="ParentFooter px-2 md:px-16 p-10  bg-white text-white">

                <div className='Footer  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>

                    <div className="text-center md:text-left ">
                        <div className="w-[74%] mx-auto md:mx-0 pb-[6px]">
                            <img className='w-[100%] ' src={Logo} alt="img" />
                        </div>
                        <h2 className=' text-[14px] font-[500]'>Minar Plaza, <br /> 8, Wiseghat Road (2nd Floor),
                            <br /> Kotowali, Dhaka-1100.</h2>
                    </div>

                    <div className='One mx-auto md:text-left'>
                        <h2 className="pb-[12px] text-[19px] font-[600] text-white text-center md:text-left">Contact</h2>
                        <h2 className=' text-[14px] font-[500]'>Email : info@minarhousingltd.com</h2>
                        <div className=' flex md:justify-start'>
                            <h2 className=' text-[14px] font-[500]'>Hotline :</h2>
                            <div className=' ml-[8px] '>
                                <h2 className=' text-[14px] font-[500]'> +880-2-7393413</h2>
                                <h2 className=' text-[14px] font-[500]'>+880-1712-039661</h2>
                                <h2 className=' text-[14px] font-[500]'>+880-1972-039661</h2>

                            </div>

                        </div>
                    </div>


                    <div className='Three text-center md:text-left'>
                        <h2 className="pb-[12px] text-[19px] font-[600] text-white">Company</h2>
                        <h3 className="text-[14px] font-[500] pt-[4px]">Minar Housing Ltd.</h3>
                        {/* <h3 className="text-[14px] font-[500] pt-[4px]">Designer By : Shipon Deb </h3> */}
                    </div>


                    <div className="text-center md:text-left mx-auto">

                        <h2 className="pb-[12px] text-[19px] font-[600] text-white">Newsletter</h2>

                        <fieldset className="form-control ">

                            <h2 className=' text-[14px] font-[500]'>Enter your email address</h2>
                            <form onSubmit={handleSubscribe}>
                                <div className="join my-2">
                                    <input type="email" required name="subscribe" placeholder="username@site.com" className="input text-black input-bordered join-item w-[100%]" />
                                    <button type="submit" className="btn btn-[#50FE7C] join-item">Subscribe</button>
                                </div>
                            </form>
                        </fieldset>


                        <div className="grid grid-cols-4  gap-5 justify-center pt-1 md:pt-3">
                            <a href="https://www.facebook.com/minarHousingLtd/" target="_blank">
                                <i className="SocialIcon fac fa fa-facebook" aria-hidden="true"></i>
                            </a>
                            <a href="https://www.youtube.com/channel/UCK0kBcqNcTu55Z9toUkvdeg/" target="_blank">
                                <i className="SocialIcon you fa fa-youtube-play" aria-hidden="true"></i>
                            </a>

                            <a href="#" target="_blank">
                                <i className="SocialIcon twi fa fa-twitter" aria-hidden="true"></i>
                            </a>

                            <a href="https://www.instagram.com/minarhousingltd/" target="_blank">
                                <i className="SocialIcon ins fa fa-instagram" aria-hidden="true"></i>
                            </a>

                        </div>
                    </div>
                </div>
            </div>


            <footer className="footer mx-auto p-4 bg-neutral ">
                <p className="mx-auto text-white">
                    Copyright © Minar Group. 2024
                </p>
            </footer>


        </div>
    );
};

export default Footer;