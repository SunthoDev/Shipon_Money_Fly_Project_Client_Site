import React from 'react';
import "./AboutUsSomthing.css"
import Lottie from 'react-lottie';
import about from "../../../../public/about.json"

const AboutUsSomthing = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: about,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };


    return (
        <div className='bg-[#F9FBFD]'>
            <div className='AboutUsSomethingParent px-2 md:px-20  py-16'>

                <div className='AboutUsSomething grid md:grid-cols-12 gap-6 items-center'>

                    <div className="Left grid md:col-span-5">
                        <div className="myImage h-[340px]">
                            <Lottie options={defaultOptions} />
                        </div>
                    </div>


                    <div className="Right md:col-span-7">
                        <h2 className="text-center md:text-left">About Us & Our Works</h2>
                        <p>Yes, it’s true! You can continuously make money with just a few clicks - employ your unused internet to turn it into cash.</p>

                        <p>Yes, it’s true! You can continuously make money with just a few clicks - employ your unused internet to turn it into cash.</p>
                    </div>


                </div>


            </div>
        </div>
    );
};

export default AboutUsSomthing;