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

const OverviewAllPlan = () => {
    return (
        <div className="SubscriptionParent grid md:grid-cols-12 gap-8 mx-2 md:mx-28 mt-8 mb-4">

        <div className="Subscription  w-[100%]  md:col-span-7">

            {/* ================ */}
            {/* 70 cent */}
            {/* ================ */}

            <div className="Subscription">
                <div className="Img">
                    <img className="w-full h-full" src={one} alt="img" />
                </div>
                <div className="grid grid-cols-4 gap-5">
                    <div className="">
                        <h3>৳400</h3>
                        <h4>ইউনিট মূল্য</h4>
                    </div>
                    <div className="">
                        <h3>৳40</h3>
                        <h4>দৈনিক লাভ</h4>
                    </div>
                    <div className="">
                        <h3>৳14600</h3>
                        <h4>মোট লাভ</h4>
                    </div>
                    <div className="">
                        <h3>৳365</h3>
                        <h4>সীমা</h4>
                    </div>
                </div>
                <button onClick={() => HandleBuySubscription(400, 1)}>এখন কিনুন</button>
            </div>
            {/* ================ */}
            {/* 1 Dollar */}
            {/* ================ */}

            <div className="Subscription">
                <div className="Img">
                    <img className="w-full h-full" src={two} alt="img" />
                </div>
                <div className="grid grid-cols-4 gap-5">
                    <div className="">
                        <h3>৳1000</h3>
                        <h4>ইউনিট মূল্য</h4>
                    </div>
                    <div className="">
                        <h3>৳100</h3>
                        <h4>দৈনিক লাভ</h4>
                    </div>
                    <div className="">
                        <h3>৳36500</h3>
                        <h4>মোট লাভ</h4>
                    </div>
                    <div className="">
                        <h3>৳365</h3>
                        <h4>সীমা</h4>
                    </div>
                </div>
                <button onClick={() => HandleBuySubscription(1000, 2)}>এখন কিনুন</button>
            </div>
            {/* ================ */}
            {/* 1 Dollar */}
            {/* ================ */}

            <div className="Subscription">
                <div className="Img">
                    <img className="w-full h-full" src={three} alt="img" />
                </div>
                <div className="grid grid-cols-4 gap-5">
                    <div className="">
                        <h3>৳2000</h3>
                        <h4>ইউনিট মূল্য</h4>
                    </div>
                    <div className="">
                        <h3>৳200</h3>
                        <h4>দৈনিক লাভ</h4>
                    </div>
                    <div className="">
                        <h3>৳73000</h3>
                        <h4>মোট লাভ</h4>
                    </div>
                    <div className="">
                        <h3>৳365</h3>
                        <h4>সীমা</h4>
                    </div>
                </div>
                <button onClick={() => HandleBuySubscription(2000, 3)}>এখন কিনুন</button>
            </div>

            {/* ================ */}
            {/* 4 Dollar */}
            {/* ================ */}

            <div className="Subscription">
                <div className="Img">
                    <img className="w-full h-full" src={four} alt="img" />
                </div>
                <div className="grid grid-cols-4 gap-5">
                    <div className="">
                        <h3>৳3000</h3>
                        <h4>ইউনিট মূল্য</h4>
                    </div>
                    <div className="">
                        <h3>৳300</h3>
                        <h4>দৈনিক লাভ</h4>
                    </div>
                    <div className="">
                        <h3>৳109500</h3>
                        <h4>মোট লাভ</h4>
                    </div>
                    <div className="">
                        <h3>৳365</h3>
                        <h4>সীমা</h4>
                    </div>
                </div>
                <button onClick={() => HandleBuySubscription(3000, 4)}>এখন কিনুন</button>
            </div>
            {/* ================ */}
            {/* 5 Dollar */}
            {/* ================ */}

            <div className="Subscription">
                <div className="Img">
                    <img className="w-full h-full" src={five} alt="img" />
                </div>
                <div className="grid grid-cols-4 gap-5">
                    <div className="">
                        <h3>৳5000</h3>
                        <h4>ইউনিট মূল্য</h4>
                    </div>
                    <div className="">
                        <h3>৳500</h3>
                        <h4>দৈনিক লাভ</h4>
                    </div>
                    <div className="">
                        <h3>৳182500</h3>
                        <h4>মোট লাভ</h4>
                    </div>
                    <div className="">
                        <h3>৳365</h3>
                        <h4>সীমা</h4>
                    </div>
                </div>
                <button onClick={() => HandleBuySubscription(5000, 5)}>এখন কিনুন</button>
            </div>
            {/* ================ */}
            {/* 8 Dollar */}
            {/* ================ */}

            <div className="Subscription">
                <div className="Img">
                    <img className="w-full h-full" src={six} alt="img" />
                </div>
                <div className="grid grid-cols-4 gap-5">
                    <div className="">
                        <h3>৳10000</h3>
                        <h4>ইউনিট মূল্য</h4>
                    </div>
                    <div className="">
                        <h3>৳1000</h3>
                        <h4>দৈনিক লাভ</h4>
                    </div>
                    <div className="">
                        <h3>৳365000</h3>
                        <h4>মোট লাভ</h4>
                    </div>
                    <div className="">
                        <h3>৳365</h3>
                        <h4>সীমা</h4>
                    </div>
                </div>
                <button onClick={() => HandleBuySubscription(10000, 1)}>এখন কিনুন</button>
            </div>
            {/* ================ */}
            {/* 10 Dollar */}
            {/* ================ */}

            <div className="Subscription">
                <div className="Img">
                    <img className="w-full h-full" src={seven} alt="img" />
                </div>
                <div className="grid grid-cols-4 gap-5">
                    <div className="">
                        <h3>৳20000</h3>
                        <h4>ইউনিট মূল্য</h4>
                    </div>
                    <div className="">
                        <h3>৳2000</h3>
                        <h4>দৈনিক লাভ</h4>
                    </div>
                    <div className="">
                        <h3>৳730000</h3>
                        <h4>মোট লাভ</h4>
                    </div>
                    <div className="">
                        <h3>৳365</h3>
                        <h4>সীমা</h4>
                    </div>
                </div>
                <button onClick={() => HandleBuySubscription(20000, 2)}>এখন কিনুন</button>
            </div>
            {/* ================ */}
            {/* 13 Dollar */}
            {/* ================ */}

            <div className="Subscription">
                <div className="Img">
                    <img className="w-full h-full" src={eight} alt="img" />
                </div>
                <div className="grid grid-cols-4 gap-5">
                    <div className="">
                        <h3>৳20000</h3>
                        <h4>ইউনিট মূল্য</h4>
                    </div>
                    <div className="">
                        <h3>৳2000</h3>
                        <h4>দৈনিক লাভ</h4>
                    </div>
                    <div className="">
                        <h3>৳730000</h3>
                        <h4>মোট লাভ</h4>
                    </div>
                    <div className="">
                        <h3>৳365</h3>
                        <h4>সীমা</h4>
                    </div>
                </div>
                <button onClick={() => HandleBuySubscription(20000, 2)}>এখন কিনুন</button>
            </div>
            {/* ================ */}
            {/* 15 Dollar */}
            {/* ================ */}

            <div className="Subscription">
                <div className="Img">
                    <img className="w-full h-full" src={nine} alt="img" />
                </div>
                <div className="grid grid-cols-4 gap-5">
                    <div className="">
                        <h3>৳20000</h3>
                        <h4>ইউনিট মূল্য</h4>
                    </div>
                    <div className="">
                        <h3>৳2000</h3>
                        <h4>দৈনিক লাভ</h4>
                    </div>
                    <div className="">
                        <h3>৳730000</h3>
                        <h4>মোট লাভ</h4>
                    </div>
                    <div className="">
                        <h3>৳365</h3>
                        <h4>সীমা</h4>
                    </div>
                </div>
                <button onClick={() => HandleBuySubscription(20000, 2)}>এখন কিনুন</button>
            </div>
            {/* ================ */}
            {/* 20 Dollar */}
            {/* ================ */}

            <div className="Subscription">
                <div className="Img">
                    <img className="w-full h-full" src={ten} alt="img" />
                </div>
                <div className="grid grid-cols-4 gap-5">
                    <div className="">
                        <h3>৳20000</h3>
                        <h4>ইউনিট মূল্য</h4>
                    </div>
                    <div className="">
                        <h3>৳2000</h3>
                        <h4>দৈনিক লাভ</h4>
                    </div>
                    <div className="">
                        <h3>৳730000</h3>
                        <h4>মোট লাভ</h4>
                    </div>
                    <div className="">
                        <h3>৳365</h3>
                        <h4>সীমা</h4>
                    </div>
                </div>
                <button onClick={() => HandleBuySubscription(20000, 2)}>এখন কিনুন</button>
            </div>
            {/* ================ */}
            {/* 25 Dollar */}
            {/* ================ */}

            <div className="Subscription">
                <div className="Img">
                    <img className="w-full h-full" src={eleven} alt="img" />
                </div>
                <div className="grid grid-cols-4 gap-5">
                    <div className="">
                        <h3>৳20000</h3>
                        <h4>ইউনিট মূল্য</h4>
                    </div>
                    <div className="">
                        <h3>৳2000</h3>
                        <h4>দৈনিক লাভ</h4>
                    </div>
                    <div className="">
                        <h3>৳730000</h3>
                        <h4>মোট লাভ</h4>
                    </div>
                    <div className="">
                        <h3>৳365</h3>
                        <h4>সীমা</h4>
                    </div>
                </div>
                <button onClick={() => HandleBuySubscription(20000, 2)}>এখন কিনুন</button>
            </div>
            {/* ================ */}
            {/* 30 Dollar */}
            {/* ================ */}

            <div className="Subscription">
                <div className="Img">
                    <img className="w-full h-full" src={twelve} alt="img" />
                </div>
                <div className="grid grid-cols-4 gap-5">
                    <div className="">
                        <h3>৳20000</h3>
                        <h4>ইউনিট মূল্য</h4>
                    </div>
                    <div className="">
                        <h3>৳2000</h3>
                        <h4>দৈনিক লাভ</h4>
                    </div>
                    <div className="">
                        <h3>৳730000</h3>
                        <h4>মোট লাভ</h4>
                    </div>
                    <div className="">
                        <h3>৳365</h3>
                        <h4>সীমা</h4>
                    </div>
                </div>
                <button onClick={() => HandleBuySubscription(20000, 2)}>এখন কিনুন</button>
            </div>
            {/* ================ */}

        </div>

        {/* ====================================================== */}

        <div className="RightOffer md:col-span-5">

        <div className="RefFd">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod consectetur reiciendis cum soluta modi sequi rem harum blanditiis numquam! Dicta aspernatur consequuntur beatae culpa laboriosam excepturi sint tempora perspiciatis! Voluptatum sint veniam, minima dolorum corrupti quam tempore accusamus necessitatibus culpa.</p>
        </div>






        </div>


        </div>
    );
};

export default OverviewAllPlan;