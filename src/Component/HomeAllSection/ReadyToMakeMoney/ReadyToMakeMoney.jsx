import React from 'react';
import "./ReadyToMakeMoney.css"
import MoneyFlyVideo from "../../../assets/VDO/MoneyFly.mp4"

const ReadyToMakeMoney = () => {
    return (
        <div className="bg-[#F0F9FF] py-16">

                <div className="MoneyVDO w-[100%] h-[100%] md:h-[400px]">
                    <video
                        className="w-full h-full"
                        src={MoneyFlyVideo}
                        autoPlay
                        loop
                        muted
                        playsInline
                    ></video>
                </div>

                <div className="ReadyToMakeMoneyParent px-2 md:px-20  ">
                    <h2>Ready to make sweet money?</h2>
                    <h3>It only takes 5 minutes to start earning with MoneyFly</h3>
                    <h4 className="ReadyGetStartBtn w-[100%] md:w-[26%]">Get Started</h4>
                </div>


        </div>

    );
};

export default ReadyToMakeMoney;