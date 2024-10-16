import { Button } from "@/components/ui/button";
import group from '../../assets/images/WhyChooseUs/group.png';
import fi_settings from '../../assets/images/WhyChooseUs/fi_settings.png';
import fi_diverseData from '../../assets/images/WhyChooseUs/fi_diverseData.png';
import AI from '../../assets/images/WhyChooseUs/AI.png';
import security from '../../assets/images/WhyChooseUs/security.png';

const WhyChooseUs = () => {
    // info: form submit button 
    const formSubmit = (e)=>{
        // info: html form defaultly reload the page after submit btn that's why we do e.preventDefault()
        e.preventDefault();
    }
    return (
        <div className="brTLR-40 flex-1 flex flex-col choose-us-container">
            <div className=" flex flex-col items-center justify-center px-4 h-full">
                <h2 className=" text-2xl md:text-4xl lg:text-5xl text-center mt-20 mb-4 z-10 leading-tight ">
                    Why Choose Us
                </h2>
                <div className="flex mt-10">
                    {/* // info: use front and back to show content on hover using css display block and none;  */}
                    <div className="IconInfocard">
                        <div className="front">
                            <img src={group} />
                            <div>Scalable infrastructure</div>
                        </div>
                        <div className="back">
                            <p>Flexibly adapt to changing data
                                demands, ensuring optimal
                                performancFIexibIy adapt to
                                changing data demands,
                                ensuring optimal performance
                                and resource allocation as your
                                business grows.e and resource
                                allocation as your business
                                grows.
                            </p>
                        </div>
                    </div>
                    <div className="IconInfocard">
                        <div className="front">
                            <img src={fi_settings} />
                            <div>Customized solutions</div>
                        </div>
                        <div className="back">
                            <p>Flexibly adapt to changing data
                                demands, ensuring optimal
                                performancFIexibIy adapt to
                                changing data demands,
                                ensuring optimal performance
                                and resource allocation as your
                                business grows.e and resource
                                allocation as your business
                                grows.
                            </p>
                        </div>
                    </div>
                    <div className="IconInfocard">
                        <div className="front">
                            <img src={security} />
                            <div>Robust security measures</div>
                        </div>
                        <div className="back">
                            <p>Flexibly adapt to changing data
                                demands, ensuring optimal
                                performancFIexibIy adapt to
                                changing data demands,
                                ensuring optimal performance
                                and resource allocation as your
                                business grows.e and resource
                                allocation as your business
                                grows.
                            </p>
                        </div>
                    </div>
                    <div className="IconInfocard">
                        <div className="front">
                            <img src={AI} />
                            <div>Seamless integration</div>
                        </div>
                        <div className="back">
                            <p>Flexibly adapt to changing data
                                demands, ensuring optimal
                                performancFIexibIy adapt to
                                changing data demands,
                                ensuring optimal performance
                                and resource allocation as your
                                business grows.e and resource
                                allocation as your business
                                grows.
                            </p>
                        </div>
                    </div>
                    <div className="IconInfocard">
                        <div className="front">
                            <img src={fi_diverseData} />
                            <div>Diverse data expertise</div>
                        </div>
                        <div className="back">
                            <p>Flexibly adapt to changing data
                                demands, ensuring optimal
                                performancFIexibIy adapt to
                                changing data demands,
                                ensuring optimal performance
                                and resource allocation as your
                                business grows.e and resource
                                allocation as your business
                                grows.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex mt-10">
                    <div className="w-50">
                        <form onSubmit={formSubmit}>
                            <input className="formInput" placeholder="Enter Your Name" type="text" />
                            <input className="formInput" placeholder="Enter Your Email Address" type="text" />
                            <input className="formInput" placeholder="Phone Number" type="text" />
                            <Button
                                className={`formButton px-4 sm:px-8 lg:px-12 py-2 sm:py-3 rounded-full text-sm sm:text-base lg:text-lg
                                    ? "bg-gradient-to-r from-[#684FB2] via-[#9023AE] to-[#405F9E] text-white border-none"
                                    : "bg-transparent text-gray-400 border border-gray-700 hover:bg-gray-800"
                                }`} type="submit">Subscribe
                            </Button>
                        </form>
                    </div>
                    <div className="w-50">
                        <h2 className="  text-3xl md:text-5xl lg:text-6xl font-extralight text-center mb-4 z-10 leading-tight">
                            Transform Your Data into Actionable Insights
                        </h2>
                        <p className="text-center mt-[10vh] w-full z-10 text-sm md:text-1xl font-light">
                            Explore Our Data Engineering & Analytics Solutions
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhyChooseUs;