import React from 'react';
import "./Footer.css"
import Logo from "../../../assets/logo/logoFooter.png"
import { Link } from 'react-router-dom';

const Footer = () => {


    return (
        <div>
            <div className="ParentFooter px-2 md:px-16 p-10  bg-[#163351] text-white">

                <div className='Footer  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>

                    <div className="text-center md:text-left ">
                        <div className="w-[74] flex items-center mx-auto md:mx-0 pb-[6px]">
                            <Link to="/">
                                <img className="w-[100%] h-[100%]" src={Logo} alt="Image Logo Footer" />
                            </Link>
                            <h2 className="text-[28px] font-[700]">MoneyFly</h2>
                        </div>
                        <h2 className=' text-[14px] font-[500]'>Honeygain is the first-ever app that allows its users to make money online by sharing their Internet connection. Reach your networks' full potential by getting paid in USD or crypto!</h2>
                    </div>

                    <div className='One mx-auto text-center md:text-left'>
                        <h2 className="pb-[12px] text-[19px] font-[600] text-white text-center md:text-left">About</h2>
                        <h2 className=' text-[14px] font-[500]'>Review</h2>
                        <h2 className=' text-[14px] font-[500]'>About Us</h2>
                        <h2 className=' text-[14px] font-[500]'>Blog</h2>
                        <h2 className=' text-[14px] font-[500]'>Download</h2>
                    </div>


                    <div className='Three text-center md:text-left'>
                        <h2 className="pb-[12px] text-[19px] font-[600] text-white">Company</h2>
                        <h3 className="text-[14px] font-[500] pt-[4px]">MoneyFly Ltd.</h3>
                    </div>


                    <div className="text-center md:text-left mx-auto">

                        <h2 className="pb-[12px] text-[19px] font-[600] text-white">Newsletter</h2>

                        <fieldset className="form-control ">

                            <h2 className=' text-[14px] font-[500]'>Enter your email address</h2>
                            <form>
                                <div className="join my-2">
                                    <input type="email" required name="subscribe" placeholder="username@site.com" className="input text-black input-bordered join-item w-[100%]" />
                                    <button type="submit" className="btn btn-[#50FE7C] join-item">Subscribe</button>
                                </div>
                            </form>
                        </fieldset>


                        <div className="grid grid-cols-4  gap-5 justify-center pt-1 md:pt-3">
                            <a href="" target="_blank">
                                <i className="SocialIcon fac fa fa-facebook" aria-hidden="true"></i>
                            </a>
                            <a href="" target="_blank">
                                <i className="SocialIcon you fa fa-youtube-play" aria-hidden="true"></i>
                            </a>

                            <a href="#" target="_blank">
                                <i className="SocialIcon twi fa fa-twitter" aria-hidden="true"></i>
                            </a>

                            <a href="" target="_blank">
                                <i className="SocialIcon ins fa fa-instagram" aria-hidden="true"></i>
                            </a>

                        </div>
                    </div>
                </div>
            </div>


            <footer className="footer mx-auto p-4 bg-neutral ">
                <p className="mx-auto text-white">
                    Copyright © MoneyFly Group. 2024
                </p>
            </footer>


        </div>
    );
};

export default Footer;