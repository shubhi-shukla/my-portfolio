import React from 'react';
import pimg1 from '../images/pimg1.jpg'
import pimg2 from '../images/pimg2.jpg'
import pimg3 from '../images/pimg3.jpg'

const Work = () => {
    return(
        <section id="work" className = "full-height px-lg-5">
            <div className="container">

                <div className="row pb-4" data-aos="fade-up">
                    <div className="col-lg-8">
                        <h6 className="text-brand">WORK</h6>
                        <h1>My Recent Project</h1>
                    </div>
                </div>

                <div className="row gy-4 justify-content-evenly">
                    <div className="col-md-6">
                        <div className="card-custom rounded-4 bg-base shadow-effect" data-aos ="fade-up" data-aos-delay="300">
                            <div className = "card-custom-image rounded-4">
                                <img src={pimg1} alt="" className="rounded-4 h-25" />
                            </div>
                            <div className="card-custom-content p-4">
                                <h4><a href="https://odd-gold-jay.cyclic.app/register" className="link-custom">CampCompass</a></h4>
                                <p>A responsive website with authentication & authorization to enable users to explore & review travel locations.</p>
                            </div>
                        </div> 
                    </div>

                    <div className="col-md-6">
                        <div className="card-custom rounded-4 bg-base shadow-effect" data-aos ="fade-up" data-aos-delay="600">
                            <div className = "card-custom-image rounded-4">
                                <img src={pimg2} alt="" className="rounded-4" />
                            </div>
                            <div className="card-custom-content p-4">
                                <h4><a href="https://dull-gold-seagull-toga.cyclic.app/" className="link-custom">WhatsApp Reminder Notification App</a></h4>
                                <p>A responsive website with authentication & authorization to enable users to explore & review travel locations.</p>
                            </div>
                        </div> 
                    </div>

                    <div className="col-md-6">
                        <div className="card-custom rounded-4 bg-base shadow-effect" data-aos ="fade-up" data-aos-delay="300">
                            <div className = "card-custom-image rounded-4">
                                <img src={pimg3} alt="" className="rounded-4" />
                            </div>
                            <div className="card-custom-content p-4">
                                <h4><a href="https://worrisome-ox-pinafore.cyclic.app" className="link-custom">SaveScribe</a></h4>
                                <p>A MERN application to enable user to login/register & store their information.</p>
                            </div>
                        </div> 
                    </div>

                    {/* <div className="col-md-6">
                        <div className="card-custom rounded-4 bg-base shadow-effect" data-aos ="fade-up" data-aos-delay="600">
                            <div className = "card-custom-image rounded-4">
                                <img src={pimg3} alt="" className="rounded-4 img-fluid" />
                            </div>
                            <div className="card-custom-content p-4">
                                <h4><a href="https://github.com/shubhikodes/Weather-App" className="link-custom">Weather Application</a></h4>
                                <p>A ReactJS application using real world API to inform about the weather of a particular city.</p>
                            </div>
                        </div> 
                    </div> */}
                </div>
            </div>
        </section>
    )
}

export default Work;