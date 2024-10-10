import React from 'react';
import "./WhyChoseMoneyFly.css"
import cash from "../../../assets/WhychoseMoneyFly/cash.svg"
import coumenity from "../../../assets/WhychoseMoneyFly/coumenity.svg"
import flexible from "../../../assets/WhychoseMoneyFly/flexible.svg"
import safe from "../../../assets/WhychoseMoneyFly/safe.svg"
import support from "../../../assets/WhychoseMoneyFly/support.svg"

const WhyChoseMoneyFly = () => {
    return (
        <div className='bg-[#F9FBFD]'>
            <div className='WhyChoseMoneyFlyParent px-2 md:px-20  py-16'>

                <h2>Why choose MoneyFly?</h2>
                <h4>MoneyFly offers lots of benefits to help you make money effortlessly!</h4>

                <div className='WhyChoseMoneyFly grid grid-cols-1 md:grid-cols-3 gap-5 items-center justify-center'>

                    <div className="Item">
                        <img src={cash} alt="img" />
                        <h3>Cash or crypto payouts</h3>
                        <p>Request your money via PayPal or turn on JumpTask mode and cash out in $JMPT.</p>
                    </div>
                    <div className="Item">
                        <img src={flexible} alt="img" />
                        <h3>Flexible sharing</h3>
                        <p> Decide when you want to share and when to pause! You can always get back to earning</p>
                    </div>
                    <div className="Item">
                        <img src={safe} alt="img" />
                        <h3>Safety in every step</h3>
                        <p>We take various security measures to ensure your privacy while you use Honeygain!</p>
                    </div>
                    <div className="Item">
                        <img src={support} alt="img" />
                        <h3>24/7 support</h3>
                        <p> Honeygain’s help desk is full of advice and our support team is ready to help you 24/7!</p>
                    </div>
                    <div className="Item">
                        <img src={coumenity} alt="img" />
                        <h3>Backed by community</h3>
                        <p>Our buzzing community helps us grow and vibe! Follow Honeygain on social media to join the fun.</p>
                    </div>

                </div>



            </div>
        </div>
    );
};

export default WhyChoseMoneyFly;