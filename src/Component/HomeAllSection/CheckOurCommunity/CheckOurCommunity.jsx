import React from 'react';
import "./CheckOurCommunity.css"
import User from "../../../assets/SubImageAll/10.png"

// =====================================================
// Import Swiper styles
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';
import 'swiper/css/effect-fade';

const CheckOurCommunity = () => {
    return (
        <div className='bg-[#F0F9FF]'>
            <div className='CheckOurCommunityParent px-2 md:px-20  py-16'>

                <h2>Check what our community</h2>
                <h2>has to say</h2>

                <div className="">
                    <div className="Title flex items-center justify-center gap-2 ">
                        <h4 className="text-[16px]">Excellent</h4>
                        <svg
                            role="img"
                            viewBox="0 0 251 46"
                            xmlns="http://www.w3.org/2000/svg"
                            width="120px"
                            height="0px"
                            style={{
                                display: 'block',
                                margin: 0,
                                padding: 0,
                                maxWidth: '100%',
                                height: 'auto',
                                verticalAlign: 'middle',
                            }}
                        >
                            <title id="starRating-zj6im6zrevj" lang="en-US">
                                4.6 out of 5 star rating on Trustpilot
                            </title>
                            <rect width="251" height="46" />
                            <g className="tp-star">
                                <path className="tp-star__canvas" fill="#00B67A" d="M0 46.33h46.375V0H0z"></path>
                                <path
                                    className="tp-star__shape"
                                    d="M39.533 19.711L13.23 38.801l3.838-11.798L7.021 19.711h12.419l3.837-11.799 3.837 11.799h12.419zM23.278 31.51l7.183-1.51 2.862 8.8-10.046-7.29z"
                                    fill="#FFF"
                                ></path>
                            </g>
                            <g className="tp-star">
                                <path className="tp-star__canvas" fill="#00B67A" d="M51.248 46.33h46.376V0H51.248z"></path>
                                <path className="tp-star__canvas--half" fill="#00B67A" d="M51.248 46.33h23.188V0H51.248z"></path>
                                <path
                                    className="tp-star__shape"
                                    d="M74.991 31.33L81.151 30 84 39l-9.66-7.203L64.303 39l3.896-11.841L58 19.841h12.606L74.5 8l3.896 11.841H91L74.991 31.33z"
                                    fill="#FFF"
                                ></path>
                            </g>
                            <g className="tp-star">
                                <path className="tp-star__canvas" fill="#00B67A" d="M102.532 46.33h46.376V0h-46.376z"></path>
                                <path className="tp-star__canvas--half" fill="#00B67A" d="M102.532 46.33h23.188V0h-23.188z"></path>
                                <path
                                    className="tp-star__shape"
                                    d="M142.067 19.711L115.763 38.801l3.838-11.798-10.047-7.291h12.419l3.837-11.799 3.837 11.799h12.419zM125.811 31.51l7.184-1.51 2.862 8.8-10.046-7.29z"
                                    fill="#FFF"
                                ></path>
                            </g>
                            <g className="tp-star">
                                <path className="tp-star__canvas" fill="#00B67A" d="M153.815 46.33h46.376V0h-46.376z"></path>
                                <path className="tp-star__canvas--half" fill="#00B67A" d="M153.815 46.33h23.188V0h-23.188z"></path>
                                <path
                                    className="tp-star__shape"
                                    d="M193.348 19.711L167.045 38.801l3.837-11.798-10.047-7.291h12.419l3.837-11.799 3.837 11.799h12.419zM177.093 31.51l7.184-1.51 2.862 8.8-10.046-7.29z"
                                    fill="#FFF"
                                ></path>
                            </g>
                            <g className="tp-star">
                                <path className="tp-star__canvas" fill="#00B67A" d="M205.064 46.33h46.376V0h-46.376z"></path>
                                <path className="tp-star__canvas--half" fill="#00B67A" d="M205.064 46.33h23.188V0h-23.188z"></path>
                                <path
                                    className="tp-star__shape"
                                    d="M244.597 19.711l-26.303 19.09 3.837-11.798-10.047-7.291h12.419l3.837-11.799 3.837 11.799h12.419zm-16.255 11.799l7.184-1.51 2.862 8.8-10.046-7.29z"
                                    fill="#FFF"
                                ></path>
                            </g>
                        </svg>
                        <h4 className="text-[16px]">28,000 review on </h4>
                        <svg
                            role="img"
                            viewBox="0 0 30 30"
                            xmlns="http://www.w3.org/2000/svg"
                            width="28px"
                            height="28px"
                        >
                            <path class="tp-logo__star" fill="#00B67A" d="M30.141707 11.07005H18.63164L15.076408.177071l-3.566342 10.892977L0 11.059002l9.321376 6.739063-3.566343 10.88193 9.321375-6.728016 9.310266 6.728016-3.555233-10.88193 9.310266-6.728016z"></path>

                            <path class="tp-logo__star-notch" fill="#005128" d="M21.631369 20.26169l-.799928-2.463625-5.755033 4.153914z"></path>
                        </svg>
                        <h4 className="text-[16px]">Users</h4>
                    </div>
                </div>

                <div className='CheckOurCommunity mt-14'>

                    <div className='SliderParent'>
                        <Swiper
                            spaceBetween={30}
                            centeredSlides={true}
                            autoplay={{
                                delay: 2000,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                clickable: true,
                            }}
                            breakpoints={{
                                640: {
                                    slidesPerView: 1,
                                },
                                768: {
                                    slidesPerView: 2,
                                },
                                1024: {
                                    slidesPerView: 3,
                                },
                            }}
                            navigation={true}
                            modules={[Autoplay,Pagination, Navigation]}
                            className="mySwiper"
                        >

                            <SwiperSlide>
                                <div className="TestoItem">
                                    <p>“Extraordinary app that allows us to generate income in passive mode, my 100% recommendation.”</p>
                                    <div className="Review flex items-center mt-[28px]">
                                        <div className="img">
                                            <img className="w-[100%] h-[100%]" src={User} alt="alt" />
                                        </div>

                                        <div className="Start ml-[14px]">
                                            <h4>Shipon Dev</h4>
                                            <svg
                                                role="img"
                                                viewBox="0 0 251 46"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="90px"
                                                height="0px"
                                                style={{
                                                    display: 'block',
                                                    margin: 0,
                                                    padding: 0,
                                                    maxWidth: '100%',
                                                    height: 'auto',
                                                    verticalAlign: 'middle',
                                                }}
                                            >
                                                <title id="starRating-zj6im6zrevj" lang="en-US">
                                                    4.6 out of 5 star rating on Trustpilot
                                                </title>
                                                <rect width="251" height="46" />
                                                <g className="tp-star">
                                                    <path className="tp-star__canvas" fill="#00B67A" d="M0 46.33h46.375V0H0z"></path>
                                                    <path
                                                        className="tp-star__shape"
                                                        d="M39.533 19.711L13.23 38.801l3.838-11.798L7.021 19.711h12.419l3.837-11.799 3.837 11.799h12.419zM23.278 31.51l7.183-1.51 2.862 8.8-10.046-7.29z"
                                                        fill="#FFF"
                                                    ></path>
                                                </g>
                                                <g className="tp-star">
                                                    <path className="tp-star__canvas" fill="#00B67A" d="M51.248 46.33h46.376V0H51.248z"></path>
                                                    <path className="tp-star__canvas--half" fill="#00B67A" d="M51.248 46.33h23.188V0H51.248z"></path>
                                                    <path
                                                        className="tp-star__shape"
                                                        d="M74.991 31.33L81.151 30 84 39l-9.66-7.203L64.303 39l3.896-11.841L58 19.841h12.606L74.5 8l3.896 11.841H91L74.991 31.33z"
                                                        fill="#FFF"
                                                    ></path>
                                                </g>
                                                <g className="tp-star">
                                                    <path className="tp-star__canvas" fill="#00B67A" d="M102.532 46.33h46.376V0h-46.376z"></path>
                                                    <path className="tp-star__canvas--half" fill="#00B67A" d="M102.532 46.33h23.188V0h-23.188z"></path>
                                                    <path
                                                        className="tp-star__shape"
                                                        d="M142.067 19.711L115.763 38.801l3.838-11.798-10.047-7.291h12.419l3.837-11.799 3.837 11.799h12.419zM125.811 31.51l7.184-1.51 2.862 8.8-10.046-7.29z"
                                                        fill="#FFF"
                                                    ></path>
                                                </g>
                                                <g className="tp-star">
                                                    <path className="tp-star__canvas" fill="#00B67A" d="M153.815 46.33h46.376V0h-46.376z"></path>
                                                    <path className="tp-star__canvas--half" fill="#00B67A" d="M153.815 46.33h23.188V0h-23.188z"></path>
                                                    <path
                                                        className="tp-star__shape"
                                                        d="M193.348 19.711L167.045 38.801l3.837-11.798-10.047-7.291h12.419l3.837-11.799 3.837 11.799h12.419zM177.093 31.51l7.184-1.51 2.862 8.8-10.046-7.29z"
                                                        fill="#FFF"
                                                    ></path>
                                                </g>
                                                <g className="tp-star">
                                                    <path className="tp-star__canvas" fill="#00B67A" d="M205.064 46.33h46.376V0h-46.376z"></path>
                                                    <path className="tp-star__canvas--half" fill="#00B67A" d="M205.064 46.33h23.188V0h-23.188z"></path>
                                                    <path
                                                        className="tp-star__shape"
                                                        d="M244.597 19.711l-26.303 19.09 3.837-11.798-10.047-7.291h12.419l3.837-11.799 3.837 11.799h12.419zm-16.255 11.799l7.184-1.51 2.862 8.8-10.046-7.29z"
                                                        fill="#FFF"
                                                    ></path>
                                                </g>
                                            </svg>
                                        </div>

                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="TestoItem">
                                    <p>“Extraordinary app that allows us to generate income in passive mode, my 100% recommendation.”</p>
                                    <div className="Review flex items-center mt-[28px]">
                                        <div className="img">
                                            <img className="w-[100%] h-[100%]" src={User} alt="alt" />
                                        </div>

                                        <div className="Start ml-[14px]">
                                            <h4>Shipon Dev</h4>
                                            <svg
                                                role="img"
                                                viewBox="0 0 251 46"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="90px"
                                                height="0px"
                                                style={{
                                                    display: 'block',
                                                    margin: 0,
                                                    padding: 0,
                                                    maxWidth: '100%',
                                                    height: 'auto',
                                                    verticalAlign: 'middle',
                                                }}
                                            >
                                                <title id="starRating-zj6im6zrevj" lang="en-US">
                                                    4.6 out of 5 star rating on Trustpilot
                                                </title>
                                                <rect width="251" height="46" />
                                                <g className="tp-star">
                                                    <path className="tp-star__canvas" fill="#00B67A" d="M0 46.33h46.375V0H0z"></path>
                                                    <path
                                                        className="tp-star__shape"
                                                        d="M39.533 19.711L13.23 38.801l3.838-11.798L7.021 19.711h12.419l3.837-11.799 3.837 11.799h12.419zM23.278 31.51l7.183-1.51 2.862 8.8-10.046-7.29z"
                                                        fill="#FFF"
                                                    ></path>
                                                </g>
                                                <g className="tp-star">
                                                    <path className="tp-star__canvas" fill="#00B67A" d="M51.248 46.33h46.376V0H51.248z"></path>
                                                    <path className="tp-star__canvas--half" fill="#00B67A" d="M51.248 46.33h23.188V0H51.248z"></path>
                                                    <path
                                                        className="tp-star__shape"
                                                        d="M74.991 31.33L81.151 30 84 39l-9.66-7.203L64.303 39l3.896-11.841L58 19.841h12.606L74.5 8l3.896 11.841H91L74.991 31.33z"
                                                        fill="#FFF"
                                                    ></path>
                                                </g>
                                                <g className="tp-star">
                                                    <path className="tp-star__canvas" fill="#00B67A" d="M102.532 46.33h46.376V0h-46.376z"></path>
                                                    <path className="tp-star__canvas--half" fill="#00B67A" d="M102.532 46.33h23.188V0h-23.188z"></path>
                                                    <path
                                                        className="tp-star__shape"
                                                        d="M142.067 19.711L115.763 38.801l3.838-11.798-10.047-7.291h12.419l3.837-11.799 3.837 11.799h12.419zM125.811 31.51l7.184-1.51 2.862 8.8-10.046-7.29z"
                                                        fill="#FFF"
                                                    ></path>
                                                </g>
                                                <g className="tp-star">
                                                    <path className="tp-star__canvas" fill="#00B67A" d="M153.815 46.33h46.376V0h-46.376z"></path>
                                                    <path className="tp-star__canvas--half" fill="#00B67A" d="M153.815 46.33h23.188V0h-23.188z"></path>
                                                    <path
                                                        className="tp-star__shape"
                                                        d="M193.348 19.711L167.045 38.801l3.837-11.798-10.047-7.291h12.419l3.837-11.799 3.837 11.799h12.419zM177.093 31.51l7.184-1.51 2.862 8.8-10.046-7.29z"
                                                        fill="#FFF"
                                                    ></path>
                                                </g>
                                                <g className="tp-star">
                                                    <path className="tp-star__canvas" fill="#00B67A" d="M205.064 46.33h46.376V0h-46.376z"></path>
                                                    <path className="tp-star__canvas--half" fill="#00B67A" d="M205.064 46.33h23.188V0h-23.188z"></path>
                                                    <path
                                                        className="tp-star__shape"
                                                        d="M244.597 19.711l-26.303 19.09 3.837-11.798-10.047-7.291h12.419l3.837-11.799 3.837 11.799h12.419zm-16.255 11.799l7.184-1.51 2.862 8.8-10.046-7.29z"
                                                        fill="#FFF"
                                                    ></path>
                                                </g>
                                            </svg>
                                        </div>

                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="TestoItem">
                                    <p>“Extraordinary app that allows us to generate income in passive mode, my 100% recommendation.”</p>
                                    <div className="Review flex items-center mt-[28px]">
                                        <div className="img">
                                            <img className="w-[100%] h-[100%]" src={User} alt="alt" />
                                        </div>

                                        <div className="Start ml-[14px]">
                                            <h4>Shipon Dev</h4>
                                            <svg
                                                role="img"
                                                viewBox="0 0 251 46"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="90px"
                                                height="0px"
                                                style={{
                                                    display: 'block',
                                                    margin: 0,
                                                    padding: 0,
                                                    maxWidth: '100%',
                                                    height: 'auto',
                                                    verticalAlign: 'middle',
                                                }}
                                            >
                                                <title id="starRating-zj6im6zrevj" lang="en-US">
                                                    4.6 out of 5 star rating on Trustpilot
                                                </title>
                                                <rect width="251" height="46" />
                                                <g className="tp-star">
                                                    <path className="tp-star__canvas" fill="#00B67A" d="M0 46.33h46.375V0H0z"></path>
                                                    <path
                                                        className="tp-star__shape"
                                                        d="M39.533 19.711L13.23 38.801l3.838-11.798L7.021 19.711h12.419l3.837-11.799 3.837 11.799h12.419zM23.278 31.51l7.183-1.51 2.862 8.8-10.046-7.29z"
                                                        fill="#FFF"
                                                    ></path>
                                                </g>
                                                <g className="tp-star">
                                                    <path className="tp-star__canvas" fill="#00B67A" d="M51.248 46.33h46.376V0H51.248z"></path>
                                                    <path className="tp-star__canvas--half" fill="#00B67A" d="M51.248 46.33h23.188V0H51.248z"></path>
                                                    <path
                                                        className="tp-star__shape"
                                                        d="M74.991 31.33L81.151 30 84 39l-9.66-7.203L64.303 39l3.896-11.841L58 19.841h12.606L74.5 8l3.896 11.841H91L74.991 31.33z"
                                                        fill="#FFF"
                                                    ></path>
                                                </g>
                                                <g className="tp-star">
                                                    <path className="tp-star__canvas" fill="#00B67A" d="M102.532 46.33h46.376V0h-46.376z"></path>
                                                    <path className="tp-star__canvas--half" fill="#00B67A" d="M102.532 46.33h23.188V0h-23.188z"></path>
                                                    <path
                                                        className="tp-star__shape"
                                                        d="M142.067 19.711L115.763 38.801l3.838-11.798-10.047-7.291h12.419l3.837-11.799 3.837 11.799h12.419zM125.811 31.51l7.184-1.51 2.862 8.8-10.046-7.29z"
                                                        fill="#FFF"
                                                    ></path>
                                                </g>
                                                <g className="tp-star">
                                                    <path className="tp-star__canvas" fill="#00B67A" d="M153.815 46.33h46.376V0h-46.376z"></path>
                                                    <path className="tp-star__canvas--half" fill="#00B67A" d="M153.815 46.33h23.188V0h-23.188z"></path>
                                                    <path
                                                        className="tp-star__shape"
                                                        d="M193.348 19.711L167.045 38.801l3.837-11.798-10.047-7.291h12.419l3.837-11.799 3.837 11.799h12.419zM177.093 31.51l7.184-1.51 2.862 8.8-10.046-7.29z"
                                                        fill="#FFF"
                                                    ></path>
                                                </g>
                                                <g className="tp-star">
                                                    <path className="tp-star__canvas" fill="#00B67A" d="M205.064 46.33h46.376V0h-46.376z"></path>
                                                    <path className="tp-star__canvas--half" fill="#00B67A" d="M205.064 46.33h23.188V0h-23.188z"></path>
                                                    <path
                                                        className="tp-star__shape"
                                                        d="M244.597 19.711l-26.303 19.09 3.837-11.798-10.047-7.291h12.419l3.837-11.799 3.837 11.799h12.419zm-16.255 11.799l7.184-1.51 2.862 8.8-10.046-7.29z"
                                                        fill="#FFF"
                                                    ></path>
                                                </g>
                                            </svg>
                                        </div>

                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="TestoItem">
                                    <p>“Extraordinary app that allows us to generate income in passive mode, my 100% recommendation.”</p>
                                    <div className="Review flex items-center mt-[28px]">
                                        <div className="img">
                                            <img className="w-[100%] h-[100%]" src={User} alt="alt" />
                                        </div>

                                        <div className="Start ml-[14px]">
                                            <h4>Shipon Dev</h4>
                                            <svg
                                                role="img"
                                                viewBox="0 0 251 46"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="90px"
                                                height="0px"
                                                style={{
                                                    display: 'block',
                                                    margin: 0,
                                                    padding: 0,
                                                    maxWidth: '100%',
                                                    height: 'auto',
                                                    verticalAlign: 'middle',
                                                }}
                                            >
                                                <title id="starRating-zj6im6zrevj" lang="en-US">
                                                    4.6 out of 5 star rating on Trustpilot
                                                </title>
                                                <rect width="251" height="46" />
                                                <g className="tp-star">
                                                    <path className="tp-star__canvas" fill="#00B67A" d="M0 46.33h46.375V0H0z"></path>
                                                    <path
                                                        className="tp-star__shape"
                                                        d="M39.533 19.711L13.23 38.801l3.838-11.798L7.021 19.711h12.419l3.837-11.799 3.837 11.799h12.419zM23.278 31.51l7.183-1.51 2.862 8.8-10.046-7.29z"
                                                        fill="#FFF"
                                                    ></path>
                                                </g>
                                                <g className="tp-star">
                                                    <path className="tp-star__canvas" fill="#00B67A" d="M51.248 46.33h46.376V0H51.248z"></path>
                                                    <path className="tp-star__canvas--half" fill="#00B67A" d="M51.248 46.33h23.188V0H51.248z"></path>
                                                    <path
                                                        className="tp-star__shape"
                                                        d="M74.991 31.33L81.151 30 84 39l-9.66-7.203L64.303 39l3.896-11.841L58 19.841h12.606L74.5 8l3.896 11.841H91L74.991 31.33z"
                                                        fill="#FFF"
                                                    ></path>
                                                </g>
                                                <g className="tp-star">
                                                    <path className="tp-star__canvas" fill="#00B67A" d="M102.532 46.33h46.376V0h-46.376z"></path>
                                                    <path className="tp-star__canvas--half" fill="#00B67A" d="M102.532 46.33h23.188V0h-23.188z"></path>
                                                    <path
                                                        className="tp-star__shape"
                                                        d="M142.067 19.711L115.763 38.801l3.838-11.798-10.047-7.291h12.419l3.837-11.799 3.837 11.799h12.419zM125.811 31.51l7.184-1.51 2.862 8.8-10.046-7.29z"
                                                        fill="#FFF"
                                                    ></path>
                                                </g>
                                                <g className="tp-star">
                                                    <path className="tp-star__canvas" fill="#00B67A" d="M153.815 46.33h46.376V0h-46.376z"></path>
                                                    <path className="tp-star__canvas--half" fill="#00B67A" d="M153.815 46.33h23.188V0h-23.188z"></path>
                                                    <path
                                                        className="tp-star__shape"
                                                        d="M193.348 19.711L167.045 38.801l3.837-11.798-10.047-7.291h12.419l3.837-11.799 3.837 11.799h12.419zM177.093 31.51l7.184-1.51 2.862 8.8-10.046-7.29z"
                                                        fill="#FFF"
                                                    ></path>
                                                </g>
                                                <g className="tp-star">
                                                    <path className="tp-star__canvas" fill="#00B67A" d="M205.064 46.33h46.376V0h-46.376z"></path>
                                                    <path className="tp-star__canvas--half" fill="#00B67A" d="M205.064 46.33h23.188V0h-23.188z"></path>
                                                    <path
                                                        className="tp-star__shape"
                                                        d="M244.597 19.711l-26.303 19.09 3.837-11.798-10.047-7.291h12.419l3.837-11.799 3.837 11.799h12.419zm-16.255 11.799l7.184-1.51 2.862 8.8-10.046-7.29z"
                                                        fill="#FFF"
                                                    ></path>
                                                </g>
                                            </svg>
                                        </div>

                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="TestoItem">
                                    <p>“Extraordinary app that allows us to generate income in passive mode, my 100% recommendation.”</p>
                                    <div className="Review flex items-center mt-[28px]">
                                        <div className="img">
                                            <img className="w-[100%] h-[100%]" src={User} alt="alt" />
                                        </div>

                                        <div className="Start ml-[14px]">
                                            <h4>Shipon Dev</h4>
                                            <svg
                                                role="img"
                                                viewBox="0 0 251 46"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="90px"
                                                height="0px"
                                                style={{
                                                    display: 'block',
                                                    margin: 0,
                                                    padding: 0,
                                                    maxWidth: '100%',
                                                    height: 'auto',
                                                    verticalAlign: 'middle',
                                                }}
                                            >
                                                <title id="starRating-zj6im6zrevj" lang="en-US">
                                                    4.6 out of 5 star rating on Trustpilot
                                                </title>
                                                <rect width="251" height="46" />
                                                <g className="tp-star">
                                                    <path className="tp-star__canvas" fill="#00B67A" d="M0 46.33h46.375V0H0z"></path>
                                                    <path
                                                        className="tp-star__shape"
                                                        d="M39.533 19.711L13.23 38.801l3.838-11.798L7.021 19.711h12.419l3.837-11.799 3.837 11.799h12.419zM23.278 31.51l7.183-1.51 2.862 8.8-10.046-7.29z"
                                                        fill="#FFF"
                                                    ></path>
                                                </g>
                                                <g className="tp-star">
                                                    <path className="tp-star__canvas" fill="#00B67A" d="M51.248 46.33h46.376V0H51.248z"></path>
                                                    <path className="tp-star__canvas--half" fill="#00B67A" d="M51.248 46.33h23.188V0H51.248z"></path>
                                                    <path
                                                        className="tp-star__shape"
                                                        d="M74.991 31.33L81.151 30 84 39l-9.66-7.203L64.303 39l3.896-11.841L58 19.841h12.606L74.5 8l3.896 11.841H91L74.991 31.33z"
                                                        fill="#FFF"
                                                    ></path>
                                                </g>
                                                <g className="tp-star">
                                                    <path className="tp-star__canvas" fill="#00B67A" d="M102.532 46.33h46.376V0h-46.376z"></path>
                                                    <path className="tp-star__canvas--half" fill="#00B67A" d="M102.532 46.33h23.188V0h-23.188z"></path>
                                                    <path
                                                        className="tp-star__shape"
                                                        d="M142.067 19.711L115.763 38.801l3.838-11.798-10.047-7.291h12.419l3.837-11.799 3.837 11.799h12.419zM125.811 31.51l7.184-1.51 2.862 8.8-10.046-7.29z"
                                                        fill="#FFF"
                                                    ></path>
                                                </g>
                                                <g className="tp-star">
                                                    <path className="tp-star__canvas" fill="#00B67A" d="M153.815 46.33h46.376V0h-46.376z"></path>
                                                    <path className="tp-star__canvas--half" fill="#00B67A" d="M153.815 46.33h23.188V0h-23.188z"></path>
                                                    <path
                                                        className="tp-star__shape"
                                                        d="M193.348 19.711L167.045 38.801l3.837-11.798-10.047-7.291h12.419l3.837-11.799 3.837 11.799h12.419zM177.093 31.51l7.184-1.51 2.862 8.8-10.046-7.29z"
                                                        fill="#FFF"
                                                    ></path>
                                                </g>
                                                <g className="tp-star">
                                                    <path className="tp-star__canvas" fill="#00B67A" d="M205.064 46.33h46.376V0h-46.376z"></path>
                                                    <path className="tp-star__canvas--half" fill="#00B67A" d="M205.064 46.33h23.188V0h-23.188z"></path>
                                                    <path
                                                        className="tp-star__shape"
                                                        d="M244.597 19.711l-26.303 19.09 3.837-11.798-10.047-7.291h12.419l3.837-11.799 3.837 11.799h12.419zm-16.255 11.799l7.184-1.51 2.862 8.8-10.046-7.29z"
                                                        fill="#FFF"
                                                    ></path>
                                                </g>
                                            </svg>
                                        </div>

                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="TestoItem">
                                    <p>“Extraordinary app that allows us to generate income in passive mode, my 100% recommendation.”</p>
                                    <div className="Review flex items-center mt-[28px]">
                                        <div className="img">
                                            <img className="w-[100%] h-[100%]" src={User} alt="alt" />
                                        </div>

                                        <div className="Start ml-[14px]">
                                            <h4>Shipon Dev</h4>
                                            <svg
                                                role="img"
                                                viewBox="0 0 251 46"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="90px"
                                                height="0px"
                                                style={{
                                                    display: 'block',
                                                    margin: 0,
                                                    padding: 0,
                                                    maxWidth: '100%',
                                                    height: 'auto',
                                                    verticalAlign: 'middle',
                                                }}
                                            >
                                                <title id="starRating-zj6im6zrevj" lang="en-US">
                                                    4.6 out of 5 star rating on Trustpilot
                                                </title>
                                                <rect width="251" height="46" />
                                                <g className="tp-star">
                                                    <path className="tp-star__canvas" fill="#00B67A" d="M0 46.33h46.375V0H0z"></path>
                                                    <path
                                                        className="tp-star__shape"
                                                        d="M39.533 19.711L13.23 38.801l3.838-11.798L7.021 19.711h12.419l3.837-11.799 3.837 11.799h12.419zM23.278 31.51l7.183-1.51 2.862 8.8-10.046-7.29z"
                                                        fill="#FFF"
                                                    ></path>
                                                </g>
                                                <g className="tp-star">
                                                    <path className="tp-star__canvas" fill="#00B67A" d="M51.248 46.33h46.376V0H51.248z"></path>
                                                    <path className="tp-star__canvas--half" fill="#00B67A" d="M51.248 46.33h23.188V0H51.248z"></path>
                                                    <path
                                                        className="tp-star__shape"
                                                        d="M74.991 31.33L81.151 30 84 39l-9.66-7.203L64.303 39l3.896-11.841L58 19.841h12.606L74.5 8l3.896 11.841H91L74.991 31.33z"
                                                        fill="#FFF"
                                                    ></path>
                                                </g>
                                                <g className="tp-star">
                                                    <path className="tp-star__canvas" fill="#00B67A" d="M102.532 46.33h46.376V0h-46.376z"></path>
                                                    <path className="tp-star__canvas--half" fill="#00B67A" d="M102.532 46.33h23.188V0h-23.188z"></path>
                                                    <path
                                                        className="tp-star__shape"
                                                        d="M142.067 19.711L115.763 38.801l3.838-11.798-10.047-7.291h12.419l3.837-11.799 3.837 11.799h12.419zM125.811 31.51l7.184-1.51 2.862 8.8-10.046-7.29z"
                                                        fill="#FFF"
                                                    ></path>
                                                </g>
                                                <g className="tp-star">
                                                    <path className="tp-star__canvas" fill="#00B67A" d="M153.815 46.33h46.376V0h-46.376z"></path>
                                                    <path className="tp-star__canvas--half" fill="#00B67A" d="M153.815 46.33h23.188V0h-23.188z"></path>
                                                    <path
                                                        className="tp-star__shape"
                                                        d="M193.348 19.711L167.045 38.801l3.837-11.798-10.047-7.291h12.419l3.837-11.799 3.837 11.799h12.419zM177.093 31.51l7.184-1.51 2.862 8.8-10.046-7.29z"
                                                        fill="#FFF"
                                                    ></path>
                                                </g>
                                                <g className="tp-star">
                                                    <path className="tp-star__canvas" fill="#00B67A" d="M205.064 46.33h46.376V0h-46.376z"></path>
                                                    <path className="tp-star__canvas--half" fill="#00B67A" d="M205.064 46.33h23.188V0h-23.188z"></path>
                                                    <path
                                                        className="tp-star__shape"
                                                        d="M244.597 19.711l-26.303 19.09 3.837-11.798-10.047-7.291h12.419l3.837-11.799 3.837 11.799h12.419zm-16.255 11.799l7.184-1.51 2.862 8.8-10.046-7.29z"
                                                        fill="#FFF"
                                                    ></path>
                                                </g>
                                            </svg>
                                        </div>

                                    </div>
                                </div>
                            </SwiperSlide>

                        </Swiper>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CheckOurCommunity;