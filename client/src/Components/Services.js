import React, {useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import callAnimation from '../callAnimation.js';

const Services = () => {
    useEffect(() => {
        callAnimation();
      }, [])
    return(
        <section id="services" className="full-height px-lg-5">
            <div className="container">
                <div className="row pb-4" data-aos="fade-up">
                    <div className="col-lg-8">
                        <h6 className="text-brand">SERVICES</h6>
                        <h1>Services That I Provide</h1>
                    </div>
                </div>

                <div className="row gy-4">
                    <div className="col-md-4" data-aos="fade-up">
                        <div className="service p-4 bg-base rounded-4 shadow-effect">
                            <div className="iconbox">
                                <i class="las la-laptop-code"></i>
                            </div>
                            <h5 className="mt-4 mb-2">MERN Stack Development</h5>
                            <p>Empowering Businesses with Cutting-Edge MERN Development – where Innovation Meets Flawless Execution.</p>
                            {/* <a href="#" className="link-custom">Read More</a> */}
                        </div>
                    </div>

                    <div className="col-md-4" data-aos="fade-up" data-aos-delay="300">
                        <div className="service p-4 bg-base rounded-4 shadow-effect">
                            <div className="iconbox">
                                <i className="las la-file-code"></i>
                            </div>
                            <h5 className="mt-4 mb-2">Front End Development</h5>
                            <p>Crafting Visually Captivating Digital Experiences – Where Imagination is Turned into Seamless User Journeys.</p>
                            {/* <a href="#" className="link-custom">Read More</a> */}
                        </div>
                    </div>

                    <div className="col-md-4" data-aos="fade-up" data-aos-delay="600">
                        <div className="service p-4 bg-base rounded-4 shadow-effect">
                            <div className="iconbox">
                                <i class="las la-terminal"></i>
                            </div>
                            <h5 className="mt-4 mb-2">Back End Development</h5>
                            <p>Driving Seamless Functionality: Elevating Applications with Powerful Back-end Engineering.</p>
                            {/* <a href="#" className="link-custom">Read More</a> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
    )
}

export default Services;