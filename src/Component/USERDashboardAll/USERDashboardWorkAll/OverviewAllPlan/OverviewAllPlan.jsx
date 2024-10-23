import React from 'react';
import "./OverviewAllPlan.css"
import one from "../../../../assets/SubImageAll/1.png"
import two from "../../../../assets/SubImageAll/2.png"
import three from "../../../../assets/SubImageAll/3.png"
import four from "../../../../assets/SubImageAll/4.png"
import five from "../../../../assets/SubImageAll/5.png"
import six from "../../../../assets/SubImageAll/6.png"
import seven from "../../../../assets/SubImageAll/7.png"
import eight from "../../../../assets/SubImageAll/8.png"
import nine from "../../../../assets/SubImageAll/9.png"
import ten from "../../../../assets/SubImageAll/10.png"
import eleven from "../../../../assets/SubImageAll/11.png"
import twelve from "../../../../assets/SubImageAll/12.png"
import therty from "../../../../assets/SubImageAll/13.png"
import forty from "../../../../assets/SubImageAll/14.png"

import Invite from "../../../../assets/ADDImage/invite.png"


const OverviewAllPlan = () => {
    return (
        <div className="SubscriptionParent grid md:grid-cols-12 gap-8 mx-2 md:mx-14 mt-8 mb-4">

            <div className="Subscription md:col-span-7  order-2 md:order-1 ">

                {/* ================ */}
                {/* 70 cent */}
                {/* ================ */}

                <div className="SubscriptionItems">
                    <div className="Img">
                        <img className="w-full h-full" src={one} alt="img" />
                    </div>
                    <div className="BodySub">

                        <p className="text-left font-[500] text-[16px] pb-[6px]">When you buy this product then you can clime every day for buy this product.
                            <br />
                            <span className="font-[700]">$1 = 100 cent.</span> or <span className="font-[700]">$10 = 1000 cent.</span> and <span className="font-[700]">$100 = 10,000 cent.</span> after that <span className="font-[700]">$1000 = 100,000 cent.</span> thank you.</p>

                        <div className="">
                            <div className="BodyDetails flex items-center justify-between">
                                <div className="first flex items-center">
                                    <h1 className="bg-[#f0f9ff] w-[32px] h-[32px] text-[#232836]text-[16px] font-[400] text-center">1</h1>
                                    <h2 className="text-black pl-[8px] text-[16px] font-[500] text-left">Product Price</h2>
                                </div>
                                <div className="second">
                                    <h3 className="text-black text-[18px] font-[400] text-right">70 cent..</h3>
                                </div>
                            </div>
                            <div className="BodyDetails flex items-center justify-between">
                                <div className="first flex items-center">
                                    <h1 className="bg-[#f0f9ff] w-[32px] h-[32px] text-[#232836]text-[16px] font-[400] text-center">2</h1>
                                    <h2 className="text-black pl-[8px] text-[16px] font-[500] text-left">Cash Back</h2>
                                </div>
                                <div className="second">
                                    <h3 className="text-black text-[18px] font-[400] text-right">10 cent..</h3>
                                </div>
                            </div>
                            <div className="BodyDetails flex items-center justify-between">
                                <div className="first flex items-center">
                                    <h1 className="bg-[#f0f9ff] w-[32px] h-[32px] text-[#232836]text-[16px] font-[400] text-center">3</h1>
                                    <h2 className="text-black pl-[8px] text-[16px] font-[500] text-left">You can clime every day</h2>
                                </div>
                                <div className="second">
                                    <h3 className="text-black text-[18px] font-[400] text-right">1 cent..</h3>
                                </div>
                            </div>
                            <div className="BodyDetails flex items-center justify-between">
                                <div className="first flex items-center">
                                    <h1 className="bg-[#f0f9ff] w-[32px] h-[32px] text-[#232836]text-[16px] font-[400] text-center">4</h1>
                                    <h2 className="text-black pl-[8px] text-[16px] font-[500] text-left">Your total earning 3 month</h2>
                                </div>
                                <div className="second">
                                    <h3 className="text-black text-[18px] font-[400] text-right">90 cent..</h3>
                                </div>
                            </div>
                            <div className="BodyDetails flex items-center justify-between">
                                <div className="first flex items-center">
                                    <h1 className="bg-[#f0f9ff] w-[32px] h-[32px] text-[#232836]text-[16px] font-[400] text-center">5</h1>
                                    <h2 className="text-black pl-[8px] text-[16px] font-[500] text-left">Product Duration</h2>
                                </div>
                                <div className="second">
                                    <h3 className="text-black text-[18px] font-[400] text-right">90 Days.</h3>
                                </div>
                            </div>
                        </div>
                        <button className="BuyButton" onClick={() => HandleBuySubscription(400, 1)}>Buy Now</button>
                    </div>
                </div>

                {/* ================ */}
                {/* 1 Dollar */}
                {/* ================ */}

                <div className="SubscriptionItems">
                    <div className="Img">
                        <img className="w-full h-full" src={two} alt="img" />
                    </div>
                    <div className="BodySub">

                        <p className="text-left font-[500] text-[16px] pb-[6px]">When you buy this product then you can clime every day for buy this product.
                            <br />
                            <span className="font-[700]">$1 = 100 cent.</span> or <span className="font-[700]">$10 = 1000 cent.</span> and <span className="font-[700]">$100 = 10,000 cent.</span> after that <span className="font-[700]">$1000 = 100,000 cent.</span> thank you.</p>

                        <div className="">
                            <div className="BodyDetails flex items-center justify-between">
                                <div className="first flex items-center">
                                    <h1 className="bg-[#f0f9ff] w-[32px] h-[32px] text-[#232836]text-[16px] font-[400] text-center">1</h1>
                                    <h2 className="text-black pl-[8px] text-[16px] font-[500] text-left">Product Price</h2>
                                </div>
                                <div className="second">
                                    <h3 className="text-black text-[18px] font-[400] text-right">70 cent..</h3>
                                </div>
                            </div>
                            <div className="BodyDetails flex items-center justify-between">
                                <div className="first flex items-center">
                                    <h1 className="bg-[#f0f9ff] w-[32px] h-[32px] text-[#232836]text-[16px] font-[400] text-center">2</h1>
                                    <h2 className="text-black pl-[8px] text-[16px] font-[500] text-left">Cash Back</h2>
                                </div>
                                <div className="second">
                                    <h3 className="text-black text-[18px] font-[400] text-right">10 cent..</h3>
                                </div>
                            </div>
                            <div className="BodyDetails flex items-center justify-between">
                                <div className="first flex items-center">
                                    <h1 className="bg-[#f0f9ff] w-[32px] h-[32px] text-[#232836]text-[16px] font-[400] text-center">3</h1>
                                    <h2 className="text-black pl-[8px] text-[16px] font-[500] text-left">You can clime every day</h2>
                                </div>
                                <div className="second">
                                    <h3 className="text-black text-[18px] font-[400] text-right">1 cent..</h3>
                                </div>
                            </div>
                            <div className="BodyDetails flex items-center justify-between">
                                <div className="first flex items-center">
                                    <h1 className="bg-[#f0f9ff] w-[32px] h-[32px] text-[#232836]text-[16px] font-[400] text-center">4</h1>
                                    <h2 className="text-black pl-[8px] text-[16px] font-[500] text-left">Your total earning 3 month</h2>
                                </div>
                                <div className="second">
                                    <h3 className="text-black text-[18px] font-[400] text-right">90 cent..</h3>
                                </div>
                            </div>
                            <div className="BodyDetails flex items-center justify-between">
                                <div className="first flex items-center">
                                    <h1 className="bg-[#f0f9ff] w-[32px] h-[32px] text-[#232836]text-[16px] font-[400] text-center">5</h1>
                                    <h2 className="text-black pl-[8px] text-[16px] font-[500] text-left">Product Duration</h2>
                                </div>
                                <div className="second">
                                    <h3 className="text-black text-[18px] font-[400] text-right">90 Days.</h3>
                                </div>
                            </div>
                        </div>
                        <button className="BuyButton" onClick={() => HandleBuySubscription(400, 1)}>Buy Now</button>
                    </div>
                </div>
                {/* ================ */}
                {/* 1 Dollar */}
                {/* ================ */}

                <div className="SubscriptionItems">
                    <div className="Img">
                        <img className="w-full h-full" src={three} alt="img" />
                    </div>
                    <div className="BodySub">

                        <p className="text-left font-[500] text-[16px] pb-[6px]">When you buy this product then you can clime every day for buy this product.
                            <br />
                            <span className="font-[700]">$1 = 100 cent.</span> or <span className="font-[700]">$10 = 1000 cent.</span> and <span className="font-[700]">$100 = 10,000 cent.</span> after that <span className="font-[700]">$1000 = 100,000 cent.</span> thank you.</p>

                        <div className="">
                            <div className="BodyDetails flex items-center justify-between">
                                <div className="first flex items-center">
                                    <h1 className="bg-[#f0f9ff] w-[32px] h-[32px] text-[#232836]text-[16px] font-[400] text-center">1</h1>
                                    <h2 className="text-black pl-[8px] text-[16px] font-[500] text-left">Product Price</h2>
                                </div>
                                <div className="second">
                                    <h3 className="text-black text-[18px] font-[400] text-right">70 cent..</h3>
                                </div>
                            </div>
                            <div className="BodyDetails flex items-center justify-between">
                                <div className="first flex items-center">
                                    <h1 className="bg-[#f0f9ff] w-[32px] h-[32px] text-[#232836]text-[16px] font-[400] text-center">2</h1>
                                    <h2 className="text-black pl-[8px] text-[16px] font-[500] text-left">Cash Back</h2>
                                </div>
                                <div className="second">
                                    <h3 className="text-black text-[18px] font-[400] text-right">10 cent..</h3>
                                </div>
                            </div>
                            <div className="BodyDetails flex items-center justify-between">
                                <div className="first flex items-center">
                                    <h1 className="bg-[#f0f9ff] w-[32px] h-[32px] text-[#232836]text-[16px] font-[400] text-center">3</h1>
                                    <h2 className="text-black pl-[8px] text-[16px] font-[500] text-left">You can clime every day</h2>
                                </div>
                                <div className="second">
                                    <h3 className="text-black text-[18px] font-[400] text-right">1 cent..</h3>
                                </div>
                            </div>
                            <div className="BodyDetails flex items-center justify-between">
                                <div className="first flex items-center">
                                    <h1 className="bg-[#f0f9ff] w-[32px] h-[32px] text-[#232836]text-[16px] font-[400] text-center">4</h1>
                                    <h2 className="text-black pl-[8px] text-[16px] font-[500] text-left">Your total earning 3 month</h2>
                                </div>
                                <div className="second">
                                    <h3 className="text-black text-[18px] font-[400] text-right">90 cent..</h3>
                                </div>
                            </div>
                            <div className="BodyDetails flex items-center justify-between">
                                <div className="first flex items-center">
                                    <h1 className="bg-[#f0f9ff] w-[32px] h-[32px] text-[#232836]text-[16px] font-[400] text-center">5</h1>
                                    <h2 className="text-black pl-[8px] text-[16px] font-[500] text-left">Product Duration</h2>
                                </div>
                                <div className="second">
                                    <h3 className="text-black text-[18px] font-[400] text-right">90 Days.</h3>
                                </div>
                            </div>
                        </div>
                        <button className="BuyButton" onClick={() => HandleBuySubscription(400, 1)}>Buy Now</button>
                    </div>
                </div>

                {/* ================ */}
                {/* 4 Dollar */}
                {/* ================ */}

                <div className="SubscriptionItems">
                    <div className="Img">
                        <img className="w-full h-full" src={four} alt="img" />
                    </div>
                    <div className="BodySub">

                        <p className="text-left font-[500] text-[16px] pb-[6px]">When you buy this product then you can clime every day for buy this product.
                            <br />
                            <span className="font-[700]">$1 = 100 cent.</span> or <span className="font-[700]">$10 = 1000 cent.</span> and <span className="font-[700]">$100 = 10,000 cent.</span> after that <span className="font-[700]">$1000 = 100,000 cent.</span> thank you.</p>

                        <div className="">
                            <div className="BodyDetails flex items-center justify-between">
                                <div className="first flex items-center">
                                    <h1 className="bg-[#f0f9ff] w-[32px] h-[32px] text-[#232836]text-[16px] font-[400] text-center">1</h1>
                                    <h2 className="text-black pl-[8px] text-[16px] font-[500] text-left">Product Price</h2>
                                </div>
                                <div className="second">
                                    <h3 className="text-black text-[18px] font-[400] text-right">70 cent..</h3>
                                </div>
                            </div>
                            <div className="BodyDetails flex items-center justify-between">
                                <div className="first flex items-center">
                                    <h1 className="bg-[#f0f9ff] w-[32px] h-[32px] text-[#232836]text-[16px] font-[400] text-center">2</h1>
                                    <h2 className="text-black pl-[8px] text-[16px] font-[500] text-left">Cash Back</h2>
                                </div>
                                <div className="second">
                                    <h3 className="text-black text-[18px] font-[400] text-right">10 cent..</h3>
                                </div>
                            </div>
                            <div className="BodyDetails flex items-center justify-between">
                                <div className="first flex items-center">
                                    <h1 className="bg-[#f0f9ff] w-[32px] h-[32px] text-[#232836]text-[16px] font-[400] text-center">3</h1>
                                    <h2 className="text-black pl-[8px] text-[16px] font-[500] text-left">You can clime every day</h2>
                                </div>
                                <div className="second">
                                    <h3 className="text-black text-[18px] font-[400] text-right">1 cent..</h3>
                                </div>
                            </div>
                            <div className="BodyDetails flex items-center justify-between">
                                <div className="first flex items-center">
                                    <h1 className="bg-[#f0f9ff] w-[32px] h-[32px] text-[#232836]text-[16px] font-[400] text-center">4</h1>
                                    <h2 className="text-black pl-[8px] text-[16px] font-[500] text-left">Your total earning 3 month</h2>
                                </div>
                                <div className="second">
                                    <h3 className="text-black text-[18px] font-[400] text-right">90 cent..</h3>
                                </div>
                            </div>
                            <div className="BodyDetails flex items-center justify-between">
                                <div className="first flex items-center">
                                    <h1 className="bg-[#f0f9ff] w-[32px] h-[32px] text-[#232836]text-[16px] font-[400] text-center">5</h1>
                                    <h2 className="text-black pl-[8px] text-[16px] font-[500] text-left">Product Duration</h2>
                                </div>
                                <div className="second">
                                    <h3 className="text-black text-[18px] font-[400] text-right">90 Days.</h3>
                                </div>
                            </div>
                        </div>
                        <button className="BuyButton" onClick={() => HandleBuySubscription(400, 1)}>Buy Now</button>
                    </div>
                </div>
                {/* ================ */}
                {/* 5 Dollar */}
                {/* ================ */}

                <div className="SubscriptionItems">
                    <div className="Img">
                        <img className="w-full h-full" src={five} alt="img" />
                    </div>

                    <div className="BodySub">

                        <p className="text-left font-[500] text-[16px] pb-[6px]">When you buy this product then you can clime every day for buy this product.
                            <br />
                            <span className="font-[700]">$1 = 100 cent.</span> or <span className="font-[700]">$10 = 1000 cent.</span> and <span className="font-[700]">$100 = 10,000 cent.</span> after that <span className="font-[700]">$1000 = 100,000 cent.</span> thank you.</p>

                        <div className="">
                            <div className="BodyDetails flex items-center justify-between">
                                <div className="first flex items-center">
                                    <h1 className="bg-[#f0f9ff] w-[32px] h-[32px] text-[#232836]text-[16px] font-[400] text-center">1</h1>
                                    <h2 className="text-black pl-[8px] text-[16px] font-[500] text-left">Product Price</h2>
                                </div>
                                <div className="second">
                                    <h3 className="text-black text-[18px] font-[400] text-right">70 cent..</h3>
                                </div>
                            </div>
                            <div className="BodyDetails flex items-center justify-between">
                                <div className="first flex items-center">
                                    <h1 className="bg-[#f0f9ff] w-[32px] h-[32px] text-[#232836]text-[16px] font-[400] text-center">2</h1>
                                    <h2 className="text-black pl-[8px] text-[16px] font-[500] text-left">Cash Back</h2>
                                </div>
                                <div className="second">
                                    <h3 className="text-black text-[18px] font-[400] text-right">10 cent..</h3>
                                </div>
                            </div>
                            <div className="BodyDetails flex items-center justify-between">
                                <div className="first flex items-center">
                                    <h1 className="bg-[#f0f9ff] w-[32px] h-[32px] text-[#232836]text-[16px] font-[400] text-center">3</h1>
                                    <h2 className="text-black pl-[8px] text-[16px] font-[500] text-left">You can clime every day</h2>
                                </div>
                                <div className="second">
                                    <h3 className="text-black text-[18px] font-[400] text-right">1 cent..</h3>
                                </div>
                            </div>
                            <div className="BodyDetails flex items-center justify-between">
                                <div className="first flex items-center">
                                    <h1 className="bg-[#f0f9ff] w-[32px] h-[32px] text-[#232836]text-[16px] font-[400] text-center">4</h1>
                                    <h2 className="text-black pl-[8px] text-[16px] font-[500] text-left">Your total earning 3 month</h2>
                                </div>
                                <div className="second">
                                    <h3 className="text-black text-[18px] font-[400] text-right">90 cent..</h3>
                                </div>
                            </div>
                            <div className="BodyDetails flex items-center justify-between">
                                <div className="first flex items-center">
                                    <h1 className="bg-[#f0f9ff] w-[32px] h-[32px] text-[#232836]text-[16px] font-[400] text-center">5</h1>
                                    <h2 className="text-black pl-[8px] text-[16px] font-[500] text-left">Product Duration</h2>
                                </div>
                                <div className="second">
                                    <h3 className="text-black text-[18px] font-[400] text-right">90 Days.</h3>
                                </div>
                            </div>
                        </div>
                        <button className="BuyButton" onClick={() => HandleBuySubscription(400, 1)}>Buy Now</button>
                    </div>
                </div>
                {/* ================ */}
                {/* 8 Dollar */}
                {/* ================ */}

                <div className="SubscriptionItems">
                    <div className="Img">
                        <img className="w-full h-full" src={six} alt="img" />
                    </div>

                    <div className="BodySub">

                        <p className="text-left font-[500] text-[16px] pb-[6px]">When you buy this product then you can clime every day for buy this product.
                            <br />
                            <span className="font-[700]">$1 = 100 cent.</span> or <span className="font-[700]">$10 = 1000 cent.</span> and <span className="font-[700]">$100 = 10,000 cent.</span> after that <span className="font-[700]">$1000 = 100,000 cent.</span> thank you.</p>

                        <div className="">
                            <div className="BodyDetails flex items-center justify-between">
                                <div className="first flex items-center">
                                    <h1 className="bg-[#f0f9ff] w-[32px] h-[32px] text-[#232836]text-[16px] font-[400] text-center">1</h1>
                                    <h2 className="text-black pl-[8px] text-[16px] font-[500] text-left">Product Price</h2>
                                </div>
                                <div className="second">
                                    <h3 className="text-black text-[18px] font-[400] text-right">70 cent..</h3>
                                </div>
                            </div>
                            <div className="BodyDetails flex items-center justify-between">
                                <div className="first flex items-center">
                                    <h1 className="bg-[#f0f9ff] w-[32px] h-[32px] text-[#232836]text-[16px] font-[400] text-center">2</h1>
                                    <h2 className="text-black pl-[8px] text-[16px] font-[500] text-left">Cash Back</h2>
                                </div>
                                <div className="second">
                                    <h3 className="text-black text-[18px] font-[400] text-right">10 cent..</h3>
                                </div>
                            </div>
                            <div className="BodyDetails flex items-center justify-between">
                                <div className="first flex items-center">
                                    <h1 className="bg-[#f0f9ff] w-[32px] h-[32px] text-[#232836]text-[16px] font-[400] text-center">3</h1>
                                    <h2 className="text-black pl-[8px] text-[16px] font-[500] text-left">You can clime every day</h2>
                                </div>
                                <div className="second">
                                    <h3 className="text-black text-[18px] font-[400] text-right">1 cent..</h3>
                                </div>
                            </div>
                            <div className="BodyDetails flex items-center justify-between">
                                <div className="first flex items-center">
                                    <h1 className="bg-[#f0f9ff] w-[32px] h-[32px] text-[#232836]text-[16px] font-[400] text-center">4</h1>
                                    <h2 className="text-black pl-[8px] text-[16px] font-[500] text-left">Your total earning 3 month</h2>
                                </div>
                                <div className="second">
                                    <h3 className="text-black text-[18px] font-[400] text-right">90 cent..</h3>
                                </div>
                            </div>
                            <div className="BodyDetails flex items-center justify-between">
                                <div className="first flex items-center">
                                    <h1 className="bg-[#f0f9ff] w-[32px] h-[32px] text-[#232836]text-[16px] font-[400] text-center">5</h1>
                                    <h2 className="text-black pl-[8px] text-[16px] font-[500] text-left">Product Duration</h2>
                                </div>
                                <div className="second">
                                    <h3 className="text-black text-[18px] font-[400] text-right">90 Days.</h3>
                                </div>
                            </div>
                        </div>
                        <button className="BuyButton" onClick={() => HandleBuySubscription(400, 1)}>Buy Now</button>
                    </div>
                </div>
                {/* ================ */}
                {/* 10 Dollar */}
                {/* ================ */}

                <div className="SubscriptionItems">
                    <div className="Img">
                        <img className="w-full h-full" src={seven} alt="img" />
                    </div>

                    <div className="BodySub">

                        <p className="text-left font-[500] text-[16px] pb-[6px]">When you buy this product then you can clime every day for buy this product.
                            <br />
                            <span className="font-[700]">$1 = 100 cent.</span> or <span className="font-[700]">$10 = 1000 cent.</span> and <span className="font-[700]">$100 = 10,000 cent.</span> after that <span className="font-[700]">$1000 = 100,000 cent.</span> thank you.</p>

                        <div className="">
                            <div className="BodyDetails flex items-center justify-between">
                                <div className="first flex items-center">
                                    <h1 className="bg-[#f0f9ff] w-[32px] h-[32px] text-[#232836]text-[16px] font-[400] text-center">1</h1>
                                    <h2 className="text-black pl-[8px] text-[16px] font-[500] text-left">Product Price</h2>
                                </div>
                                <div className="second">
                                    <h3 className="text-black text-[18px] font-[400] text-right">70 cent..</h3>
                                </div>
                            </div>
                            <div className="BodyDetails flex items-center justify-between">
                                <div className="first flex items-center">
                                    <h1 className="bg-[#f0f9ff] w-[32px] h-[32px] text-[#232836]text-[16px] font-[400] text-center">2</h1>
                                    <h2 className="text-black pl-[8px] text-[16px] font-[500] text-left">Cash Back</h2>
                                </div>
                                <div className="second">
                                    <h3 className="text-black text-[18px] font-[400] text-right">10 cent..</h3>
                                </div>
                            </div>
                            <div className="BodyDetails flex items-center justify-between">
                                <div className="first flex items-center">
                                    <h1 className="bg-[#f0f9ff] w-[32px] h-[32px] text-[#232836]text-[16px] font-[400] text-center">3</h1>
                                    <h2 className="text-black pl-[8px] text-[16px] font-[500] text-left">You can clime every day</h2>
                                </div>
                                <div className="second">
                                    <h3 className="text-black text-[18px] font-[400] text-right">1 cent..</h3>
                                </div>
                            </div>
                            <div className="BodyDetails flex items-center justify-between">
                                <div className="first flex items-center">
                                    <h1 className="bg-[#f0f9ff] w-[32px] h-[32px] text-[#232836]text-[16px] font-[400] text-center">4</h1>
                                    <h2 className="text-black pl-[8px] text-[16px] font-[500] text-left">Your total earning 3 month</h2>
                                </div>
                                <div className="second">
                                    <h3 className="text-black text-[18px] font-[400] text-right">90 cent..</h3>
                                </div>
                            </div>
                            <div className="BodyDetails flex items-center justify-between">
                                <div className="first flex items-center">
                                    <h1 className="bg-[#f0f9ff] w-[32px] h-[32px] text-[#232836]text-[16px] font-[400] text-center">5</h1>
                                    <h2 className="text-black pl-[8px] text-[16px] font-[500] text-left">Product Duration</h2>
                                </div>
                                <div className="second">
                                    <h3 className="text-black text-[18px] font-[400] text-right">90 Days.</h3>
                                </div>
                            </div>
                        </div>
                        <button className="BuyButton" onClick={() => HandleBuySubscription(400, 1)}>Buy Now</button>
                    </div>
                </div>
                {/* ================ */}
                {/* 13 Dollar */}
                {/* ================ */}

                <div className="SubscriptionItems">
                    <div className="Img">
                        <img className="w-full h-full" src={eight} alt="img" />
                    </div>

                    <div className="BodySub">

                        <p className="text-left font-[500] text-[16px] pb-[6px]">When you buy this product then you can clime every day for buy this product.
                            <br />
                            <span className="font-[700]">$1 = 100 cent.</span> or <span className="font-[700]">$10 = 1000 cent.</span> and <span className="font-[700]">$100 = 10,000 cent.</span> after that <span className="font-[700]">$1000 = 100,000 cent.</span> thank you.</p>

                        <div className="">
                            <div className="BodyDetails flex items-center justify-between">
                                <div className="first flex items-center">
                                    <h1 className="bg-[#f0f9ff] w-[32px] h-[32px] text-[#232836]text-[16px] font-[400] text-center">1</h1>
                                    <h2 className="text-black pl-[8px] text-[16px] font-[500] text-left">Product Price</h2>
                                </div>
                                <div className="second">
                                    <h3 className="text-black text-[18px] font-[400] text-right">70 cent..</h3>
                                </div>
                            </div>
                            <div className="BodyDetails flex items-center justify-between">
                                <div className="first flex items-center">
                                    <h1 className="bg-[#f0f9ff] w-[32px] h-[32px] text-[#232836]text-[16px] font-[400] text-center">2</h1>
                                    <h2 className="text-black pl-[8px] text-[16px] font-[500] text-left">Cash Back</h2>
                                </div>
                                <div className="second">
                                    <h3 className="text-black text-[18px] font-[400] text-right">10 cent..</h3>
                                </div>
                            </div>
                            <div className="BodyDetails flex items-center justify-between">
                                <div className="first flex items-center">
                                    <h1 className="bg-[#f0f9ff] w-[32px] h-[32px] text-[#232836]text-[16px] font-[400] text-center">3</h1>
                                    <h2 className="text-black pl-[8px] text-[16px] font-[500] text-left">You can clime every day</h2>
                                </div>
                                <div className="second">
                                    <h3 className="text-black text-[18px] font-[400] text-right">1 cent..</h3>
                                </div>
                            </div>
                            <div className="BodyDetails flex items-center justify-between">
                                <div className="first flex items-center">
                                    <h1 className="bg-[#f0f9ff] w-[32px] h-[32px] text-[#232836]text-[16px] font-[400] text-center">4</h1>
                                    <h2 className="text-black pl-[8px] text-[16px] font-[500] text-left">Your total earning 3 month</h2>
                                </div>
                                <div className="second">
                                    <h3 className="text-black text-[18px] font-[400] text-right">90 cent..</h3>
                                </div>
                            </div>
                            <div className="BodyDetails flex items-center justify-between">
                                <div className="first flex items-center">
                                    <h1 className="bg-[#f0f9ff] w-[32px] h-[32px] text-[#232836]text-[16px] font-[400] text-center">5</h1>
                                    <h2 className="text-black pl-[8px] text-[16px] font-[500] text-left">Product Duration</h2>
                                </div>
                                <div className="second">
                                    <h3 className="text-black text-[18px] font-[400] text-right">90 Days.</h3>
                                </div>
                            </div>
                        </div>
                        <button className="BuyButton" onClick={() => HandleBuySubscription(400, 1)}>Buy Now</button>
                    </div>
                </div>
                {/* ================ */}
                {/* 15 Dollar */}
                {/* ================ */}

                <div className="SubscriptionItems">
                    <div className="Img">
                        <img className="w-full h-full" src={nine} alt="img" />
                    </div>

                    <div className="BodySub">

                        <p className="text-left font-[500] text-[16px] pb-[6px]">When you buy this product then you can clime every day for buy this product.
                            <br />
                            <span className="font-[700]">$1 = 100 cent.</span> or <span className="font-[700]">$10 = 1000 cent.</span> and <span className="font-[700]">$100 = 10,000 cent.</span> after that <span className="font-[700]">$1000 = 100,000 cent.</span> thank you.</p>

                        <div className="">
                            <div className="BodyDetails flex items-center justify-between">
                                <div className="first flex items-center">
                                    <h1 className="bg-[#f0f9ff] w-[32px] h-[32px] text-[#232836]text-[16px] font-[400] text-center">1</h1>
                                    <h2 className="text-black pl-[8px] text-[16px] font-[500] text-left">Product Price</h2>
                                </div>
                                <div className="second">
                                    <h3 className="text-black text-[18px] font-[400] text-right">70 cent..</h3>
                                </div>
                            </div>
                            <div className="BodyDetails flex items-center justify-between">
                                <div className="first flex items-center">
                                    <h1 className="bg-[#f0f9ff] w-[32px] h-[32px] text-[#232836]text-[16px] font-[400] text-center">2</h1>
                                    <h2 className="text-black pl-[8px] text-[16px] font-[500] text-left">Cash Back</h2>
                                </div>
                                <div className="second">
                                    <h3 className="text-black text-[18px] font-[400] text-right">10 cent..</h3>
                                </div>
                            </div>
                            <div className="BodyDetails flex items-center justify-between">
                                <div className="first flex items-center">
                                    <h1 className="bg-[#f0f9ff] w-[32px] h-[32px] text-[#232836]text-[16px] font-[400] text-center">3</h1>
                                    <h2 className="text-black pl-[8px] text-[16px] font-[500] text-left">You can clime every day</h2>
                                </div>
                                <div className="second">
                                    <h3 className="text-black text-[18px] font-[400] text-right">1 cent..</h3>
                                </div>
                            </div>
                            <div className="BodyDetails flex items-center justify-between">
                                <div className="first flex items-center">
                                    <h1 className="bg-[#f0f9ff] w-[32px] h-[32px] text-[#232836]text-[16px] font-[400] text-center">4</h1>
                                    <h2 className="text-black pl-[8px] text-[16px] font-[500] text-left">Your total earning 3 month</h2>
                                </div>
                                <div className="second">
                                    <h3 className="text-black text-[18px] font-[400] text-right">90 cent..</h3>
                                </div>
                            </div>
                            <div className="BodyDetails flex items-center justify-between">
                                <div className="first flex items-center">
                                    <h1 className="bg-[#f0f9ff] w-[32px] h-[32px] text-[#232836]text-[16px] font-[400] text-center">5</h1>
                                    <h2 className="text-black pl-[8px] text-[16px] font-[500] text-left">Product Duration</h2>
                                </div>
                                <div className="second">
                                    <h3 className="text-black text-[18px] font-[400] text-right">90 Days.</h3>
                                </div>
                            </div>
                        </div>
                        <button className="BuyButton" onClick={() => HandleBuySubscription(400, 1)}>Buy Now</button>
                    </div>
                </div>
                {/* ================ */}
                {/* 20 Dollar */}
                {/* ================ */}

                <div className="SubscriptionItems">
                    <div className="Img">
                        <img className="w-full h-full" src={ten} alt="img" />
                    </div>

                    <div className="BodySub">

                        <p className="text-left font-[500] text-[16px] pb-[6px]">When you buy this product then you can clime every day for buy this product.
                            <br />
                            <span className="font-[700]">$1 = 100 cent.</span> or <span className="font-[700]">$10 = 1000 cent.</span> and <span className="font-[700]">$100 = 10,000 cent.</span> after that <span className="font-[700]">$1000 = 100,000 cent.</span> thank you.</p>

                        <div className="">
                            <div className="BodyDetails flex items-center justify-between">
                                <div className="first flex items-center">
                                    <h1 className="bg-[#f0f9ff] w-[32px] h-[32px] text-[#232836]text-[16px] font-[400] text-center">1</h1>
                                    <h2 className="text-black pl-[8px] text-[16px] font-[500] text-left">Product Price</h2>
                                </div>
                                <div className="second">
                                    <h3 className="text-black text-[18px] font-[400] text-right">70 cent..</h3>
                                </div>
                            </div>
                            <div className="BodyDetails flex items-center justify-between">
                                <div className="first flex items-center">
                                    <h1 className="bg-[#f0f9ff] w-[32px] h-[32px] text-[#232836]text-[16px] font-[400] text-center">2</h1>
                                    <h2 className="text-black pl-[8px] text-[16px] font-[500] text-left">Cash Back</h2>
                                </div>
                                <div className="second">
                                    <h3 className="text-black text-[18px] font-[400] text-right">10 cent..</h3>
                                </div>
                            </div>
                            <div className="BodyDetails flex items-center justify-between">
                                <div className="first flex items-center">
                                    <h1 className="bg-[#f0f9ff] w-[32px] h-[32px] text-[#232836]text-[16px] font-[400] text-center">3</h1>
                                    <h2 className="text-black pl-[8px] text-[16px] font-[500] text-left">You can clime every day</h2>
                                </div>
                                <div className="second">
                                    <h3 className="text-black text-[18px] font-[400] text-right">1 cent..</h3>
                                </div>
                            </div>
                            <div className="BodyDetails flex items-center justify-between">
                                <div className="first flex items-center">
                                    <h1 className="bg-[#f0f9ff] w-[32px] h-[32px] text-[#232836]text-[16px] font-[400] text-center">4</h1>
                                    <h2 className="text-black pl-[8px] text-[16px] font-[500] text-left">Your total earning 3 month</h2>
                                </div>
                                <div className="second">
                                    <h3 className="text-black text-[18px] font-[400] text-right">90 cent..</h3>
                                </div>
                            </div>
                            <div className="BodyDetails flex items-center justify-between">
                                <div className="first flex items-center">
                                    <h1 className="bg-[#f0f9ff] w-[32px] h-[32px] text-[#232836]text-[16px] font-[400] text-center">5</h1>
                                    <h2 className="text-black pl-[8px] text-[16px] font-[500] text-left">Product Duration</h2>
                                </div>
                                <div className="second">
                                    <h3 className="text-black text-[18px] font-[400] text-right">90 Days.</h3>
                                </div>
                            </div>
                        </div>
                        <button className="BuyButton" onClick={() => HandleBuySubscription(400, 1)}>Buy Now</button>
                    </div>
                </div>
                {/* ================ */}
                {/* 25 Dollar */}
                {/* ================ */}

                <div className="SubscriptionItems">
                    <div className="Img">
                        <img className="w-full h-full" src={eleven} alt="img" />
                    </div>

                    <div className="BodySub">

                        <p className="text-left font-[500] text-[16px] pb-[6px]">When you buy this product then you can clime every day for buy this product.
                            <br />
                            <span className="font-[700]">$1 = 100 cent.</span> or <span className="font-[700]">$10 = 1000 cent.</span> and <span className="font-[700]">$100 = 10,000 cent.</span> after that <span className="font-[700]">$1000 = 100,000 cent.</span> thank you.</p>

                        <div className="">
                            <div className="BodyDetails flex items-center justify-between">
                                <div className="first flex items-center">
                                    <h1 className="bg-[#f0f9ff] w-[32px] h-[32px] text-[#232836]text-[16px] font-[400] text-center">1</h1>
                                    <h2 className="text-black pl-[8px] text-[16px] font-[500] text-left">Product Price</h2>
                                </div>
                                <div className="second">
                                    <h3 className="text-black text-[18px] font-[400] text-right">70 cent..</h3>
                                </div>
                            </div>
                            <div className="BodyDetails flex items-center justify-between">
                                <div className="first flex items-center">
                                    <h1 className="bg-[#f0f9ff] w-[32px] h-[32px] text-[#232836]text-[16px] font-[400] text-center">2</h1>
                                    <h2 className="text-black pl-[8px] text-[16px] font-[500] text-left">Cash Back</h2>
                                </div>
                                <div className="second">
                                    <h3 className="text-black text-[18px] font-[400] text-right">10 cent..</h3>
                                </div>
                            </div>
                            <div className="BodyDetails flex items-center justify-between">
                                <div className="first flex items-center">
                                    <h1 className="bg-[#f0f9ff] w-[32px] h-[32px] text-[#232836]text-[16px] font-[400] text-center">3</h1>
                                    <h2 className="text-black pl-[8px] text-[16px] font-[500] text-left">You can clime every day</h2>
                                </div>
                                <div className="second">
                                    <h3 className="text-black text-[18px] font-[400] text-right">1 cent..</h3>
                                </div>
                            </div>
                            <div className="BodyDetails flex items-center justify-between">
                                <div className="first flex items-center">
                                    <h1 className="bg-[#f0f9ff] w-[32px] h-[32px] text-[#232836]text-[16px] font-[400] text-center">4</h1>
                                    <h2 className="text-black pl-[8px] text-[16px] font-[500] text-left">Your total earning 3 month</h2>
                                </div>
                                <div className="second">
                                    <h3 className="text-black text-[18px] font-[400] text-right">90 cent..</h3>
                                </div>
                            </div>
                            <div className="BodyDetails flex items-center justify-between">
                                <div className="first flex items-center">
                                    <h1 className="bg-[#f0f9ff] w-[32px] h-[32px] text-[#232836]text-[16px] font-[400] text-center">5</h1>
                                    <h2 className="text-black pl-[8px] text-[16px] font-[500] text-left">Product Duration</h2>
                                </div>
                                <div className="second">
                                    <h3 className="text-black text-[18px] font-[400] text-right">90 Days.</h3>
                                </div>
                            </div>
                        </div>
                        <button className="BuyButton" onClick={() => HandleBuySubscription(400, 1)}>Buy Now</button>
                    </div>
                </div>
                {/* ================ */}
                {/* 30 Dollar */}
                {/* ================ */}

                <div className="SubscriptionItems">
                    <div className="Img">
                        <img className="w-full h-full" src={twelve} alt="img" />
                    </div>

                    <div className="BodySub">

                        <p className="text-left font-[500] text-[16px] pb-[6px]">When you buy this product then you can clime every day for buy this product.
                            <br />
                            <span className="font-[700]">$1 = 100 cent.</span> or <span className="font-[700]">$10 = 1000 cent.</span> and <span className="font-[700]">$100 = 10,000 cent.</span> after that <span className="font-[700]">$1000 = 100,000 cent.</span> thank you.</p>

                        <div className="">
                            <div className="BodyDetails flex items-center justify-between">
                                <div className="first flex items-center">
                                    <h1 className="bg-[#f0f9ff] w-[32px] h-[32px] text-[#232836]text-[16px] font-[400] text-center">1</h1>
                                    <h2 className="text-black pl-[8px] text-[16px] font-[500] text-left">Product Price</h2>
                                </div>
                                <div className="second">
                                    <h3 className="text-black text-[18px] font-[400] text-right">70 cent..</h3>
                                </div>
                            </div>
                            <div className="BodyDetails flex items-center justify-between">
                                <div className="first flex items-center">
                                    <h1 className="bg-[#f0f9ff] w-[32px] h-[32px] text-[#232836]text-[16px] font-[400] text-center">2</h1>
                                    <h2 className="text-black pl-[8px] text-[16px] font-[500] text-left">Cash Back</h2>
                                </div>
                                <div className="second">
                                    <h3 className="text-black text-[18px] font-[400] text-right">10 cent..</h3>
                                </div>
                            </div>
                            <div className="BodyDetails flex items-center justify-between">
                                <div className="first flex items-center">
                                    <h1 className="bg-[#f0f9ff] w-[32px] h-[32px] text-[#232836]text-[16px] font-[400] text-center">3</h1>
                                    <h2 className="text-black pl-[8px] text-[16px] font-[500] text-left">You can clime every day</h2>
                                </div>
                                <div className="second">
                                    <h3 className="text-black text-[18px] font-[400] text-right">1 cent..</h3>
                                </div>
                            </div>
                            <div className="BodyDetails flex items-center justify-between">
                                <div className="first flex items-center">
                                    <h1 className="bg-[#f0f9ff] w-[32px] h-[32px] text-[#232836]text-[16px] font-[400] text-center">4</h1>
                                    <h2 className="text-black pl-[8px] text-[16px] font-[500] text-left">Your total earning 3 month</h2>
                                </div>
                                <div className="second">
                                    <h3 className="text-black text-[18px] font-[400] text-right">90 cent..</h3>
                                </div>
                            </div>
                            <div className="BodyDetails flex items-center justify-between">
                                <div className="first flex items-center">
                                    <h1 className="bg-[#f0f9ff] w-[32px] h-[32px] text-[#232836]text-[16px] font-[400] text-center">5</h1>
                                    <h2 className="text-black pl-[8px] text-[16px] font-[500] text-left">Product Duration</h2>
                                </div>
                                <div className="second">
                                    <h3 className="text-black text-[18px] font-[400] text-right">90 Days.</h3>
                                </div>
                            </div>
                        </div>
                        <button className="BuyButton" onClick={() => HandleBuySubscription(400, 1)}>Buy Now</button>
                    </div>
                </div>
                {/* ================ */}
                {/* 50 Dollar */}
                {/* ================ */}

                <div className="SubscriptionItems">
                    <div className="Img">
                        <img className="w-full h-full" src={therty} alt="img" />
                    </div>

                    <div className="BodySub">

                        <p className="text-left font-[500] text-[16px] pb-[6px]">When you buy this product then you can clime every day for buy this product.
                            <br />
                            <span className="font-[700]">$1 = 100 cent.</span> or <span className="font-[700]">$10 = 1000 cent.</span> and <span className="font-[700]">$100 = 10,000 cent.</span> after that <span className="font-[700]">$1000 = 100,000 cent.</span> thank you.</p>

                        <div className="">
                            <div className="BodyDetails flex items-center justify-between">
                                <div className="first flex items-center">
                                    <h1 className="bg-[#f0f9ff] w-[32px] h-[32px] text-[#232836]text-[16px] font-[400] text-center">1</h1>
                                    <h2 className="text-black pl-[8px] text-[16px] font-[500] text-left">Product Price</h2>
                                </div>
                                <div className="second">
                                    <h3 className="text-black text-[18px] font-[400] text-right">70 cent..</h3>
                                </div>
                            </div>
                            <div className="BodyDetails flex items-center justify-between">
                                <div className="first flex items-center">
                                    <h1 className="bg-[#f0f9ff] w-[32px] h-[32px] text-[#232836]text-[16px] font-[400] text-center">2</h1>
                                    <h2 className="text-black pl-[8px] text-[16px] font-[500] text-left">Cash Back</h2>
                                </div>
                                <div className="second">
                                    <h3 className="text-black text-[18px] font-[400] text-right">10 cent..</h3>
                                </div>
                            </div>
                            <div className="BodyDetails flex items-center justify-between">
                                <div className="first flex items-center">
                                    <h1 className="bg-[#f0f9ff] w-[32px] h-[32px] text-[#232836]text-[16px] font-[400] text-center">3</h1>
                                    <h2 className="text-black pl-[8px] text-[16px] font-[500] text-left">You can clime every day</h2>
                                </div>
                                <div className="second">
                                    <h3 className="text-black text-[18px] font-[400] text-right">1 cent..</h3>
                                </div>
                            </div>
                            <div className="BodyDetails flex items-center justify-between">
                                <div className="first flex items-center">
                                    <h1 className="bg-[#f0f9ff] w-[32px] h-[32px] text-[#232836]text-[16px] font-[400] text-center">4</h1>
                                    <h2 className="text-black pl-[8px] text-[16px] font-[500] text-left">Your total earning 3 month</h2>
                                </div>
                                <div className="second">
                                    <h3 className="text-black text-[18px] font-[400] text-right">90 cent..</h3>
                                </div>
                            </div>
                            <div className="BodyDetails flex items-center justify-between">
                                <div className="first flex items-center">
                                    <h1 className="bg-[#f0f9ff] w-[32px] h-[32px] text-[#232836]text-[16px] font-[400] text-center">5</h1>
                                    <h2 className="text-black pl-[8px] text-[16px] font-[500] text-left">Product Duration</h2>
                                </div>
                                <div className="second">
                                    <h3 className="text-black text-[18px] font-[400] text-right">90 Days.</h3>
                                </div>
                            </div>
                        </div>
                        <button className="BuyButton" onClick={() => HandleBuySubscription(400, 1)}>Buy Now</button>
                    </div>
                </div>
                {/* ================ */}
                {/* 100 Dollar */}
                {/* ================ */}

                <div className="SubscriptionItems">
                    <div className="Img">
                        <img className="w-full h-full" src={forty} alt="img" />
                    </div>

                    <div className="BodySub">

                        <p className="text-left font-[500] text-[16px] pb-[6px]">When you buy this product then you can clime every day for buy this product.
                            <br />
                            <span className="font-[700]">$1 = 100 cent.</span> or <span className="font-[700]">$10 = 1000 cent.</span> and <span className="font-[700]">$100 = 10,000 cent.</span> after that <span className="font-[700]">$1000 = 100,000 cent.</span> thank you.</p>

                        <div className="">
                            <div className="BodyDetails flex items-center justify-between">
                                <div className="first flex items-center">
                                    <h1 className="bg-[#f0f9ff] w-[32px] h-[32px] text-[#232836]text-[16px] font-[400] text-center">1</h1>
                                    <h2 className="text-black pl-[8px] text-[16px] font-[500] text-left">Product Price</h2>
                                </div>
                                <div className="second">
                                    <h3 className="text-black text-[18px] font-[400] text-right">70 cent..</h3>
                                </div>
                            </div>
                            <div className="BodyDetails flex items-center justify-between">
                                <div className="first flex items-center">
                                    <h1 className="bg-[#f0f9ff] w-[32px] h-[32px] text-[#232836]text-[16px] font-[400] text-center">2</h1>
                                    <h2 className="text-black pl-[8px] text-[16px] font-[500] text-left">Cash Back</h2>
                                </div>
                                <div className="second">
                                    <h3 className="text-black text-[18px] font-[400] text-right">10 cent..</h3>
                                </div>
                            </div>
                            <div className="BodyDetails flex items-center justify-between">
                                <div className="first flex items-center">
                                    <h1 className="bg-[#f0f9ff] w-[32px] h-[32px] text-[#232836]text-[16px] font-[400] text-center">3</h1>
                                    <h2 className="text-black pl-[8px] text-[16px] font-[500] text-left">You can clime every day</h2>
                                </div>
                                <div className="second">
                                    <h3 className="text-black text-[18px] font-[400] text-right">1 cent..</h3>
                                </div>
                            </div>
                            <div className="BodyDetails flex items-center justify-between">
                                <div className="first flex items-center">
                                    <h1 className="bg-[#f0f9ff] w-[32px] h-[32px] text-[#232836]text-[16px] font-[400] text-center">4</h1>
                                    <h2 className="text-black pl-[8px] text-[16px] font-[500] text-left">Your total earning 3 month</h2>
                                </div>
                                <div className="second">
                                    <h3 className="text-black text-[18px] font-[400] text-right">90 cent..</h3>
                                </div>
                            </div>
                            <div className="BodyDetails flex items-center justify-between">
                                <div className="first flex items-center">
                                    <h1 className="bg-[#f0f9ff] w-[32px] h-[32px] text-[#232836]text-[16px] font-[400] text-center">5</h1>
                                    <h2 className="text-black pl-[8px] text-[16px] font-[500] text-left">Product Duration</h2>
                                </div>
                                <div className="second">
                                    <h3 className="text-black text-[18px] font-[400] text-right">90 Days.</h3>
                                </div>
                            </div>
                        </div>
                        <button className="BuyButton" onClick={() => HandleBuySubscription(400, 1)}>Buy Now</button>
                    </div>
                </div>
                {/* ================ */}

            </div>

            {/* ====================================================== */}
            {/* It is right site work */}
            {/* ====================================================== */}

            <div className="RightOffer md:col-span-5 order-1 md:order-2 mt-12 md:mt-0">

                <div className="RefFd mb-[0px] md:mb-[8px]">
                    <div className="Head">
                        <h2>Invite friends and enjoy +25% bonus referral fee</h2>
                        <button className="InviteNow">Invite Now</button>
                    </div>

                    <div className="Body">

                        <div className="hidden md:block">
                            <div className="img w-[100%] md:w-[64%]">
                                <img className="w-[100%] h-[100%]" src={Invite} alt="" />
                            </div>
                            <h3>Invite friends and earn <br />
                                a lifetime bonus!</h3>
                            <p>People who join Honeygain using your referral link will get a $3 starting gift – and you’ll earn a forever +25% bonus! Plus, you’ll get 1000 Honeygain credits for your referrals first payout.</p>
                        </div>

                        <h5>Your refer id</h5>
                        <div className="Copy md:flex items-center gap-2">
                            <a href="http://moneyFly.com" target="_blank" rel="noopener noreferrer">http://moneyFly.com/sungUp/****</a>
                            <div className="CopyButton mt-[10px] md:mt-[0px] w-[100%] md:w-[160px]">Copy Now</div>
                        </div>
                    </div>
                </div>
            </div>


        </div >
    );
};

export default OverviewAllPlan;