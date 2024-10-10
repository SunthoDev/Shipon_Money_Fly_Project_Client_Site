import React from 'react';
import "./FrequentlyAskedQuestions.css"

const FrequentlyAskedQuestions = () => {
    return (
        <div className='bg-[#F9FBFD]'>
            <div className='FrequentlyAskedQuestionsParent px-2 md:px-20  py-16'>

                <h2>Frequently asked questions</h2>


                <div className='FrequentlyAskedQuestions'>

                    <div className="Item collapse collapse-arrow ">
                        <input type="radio" name="my-accordion-2"  />
                        <div className="collapse-title text-xl font-medium">Click to open this one and close others</div>
                        <div className="collapse-content">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta rem accusamus sed in voluptas, culpa at dolorum est eum omnis odit exercitationem id. Natus sequi libero tenetur iusto illum facere.</p>
                        </div>
                    </div>

                    <div className="Item collapse collapse-arrow ">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">Click to open this one and close others</div>
                        <div className="collapse-content">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta rem accusamus sed in voluptas, culpa at dolorum est eum omnis odit exercitationem id. Natus sequi libero tenetur iusto illum facere.</p>
                        </div>
                    </div>

                    <div className="Item collapse collapse-arrow ">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">Click to open this one and close others</div>
                        <div className="collapse-content">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta rem accusamus sed in voluptas, culpa at dolorum est eum omnis odit exercitationem id. Natus sequi libero tenetur iusto illum facere.</p>
                        </div>
                    </div>
                    
                    <div className="Item collapse collapse-arrow ">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">Click to open this one and close others</div>
                        <div className="collapse-content">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta rem accusamus sed in voluptas, culpa at dolorum est eum omnis odit exercitationem id. Natus sequi libero tenetur iusto illum facere.</p>
                        </div>
                    </div>

                </div>



            </div>
        </div>
    );
};

export default FrequentlyAskedQuestions;