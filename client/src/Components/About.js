import React from 'react';

const About = () => {
    return(
        <section id="about" className="full-height px-lg-5">
        <div className="container">
            <div className="row pb-4" data-aos="fade-up">
                <div className="col-lg-8">
                    <h6 className="text-brand">ABOUT</h6>
                    <h1>My Learning</h1>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-9">
                    <h3 className="mb-4" data-aos="fade-up" data-aos-delay="300">Education</h3>
                    <div className="row gy-4">
                        <div className="col-12" data-aos ="fade-up" data-aos-delay="600">
                            <div className="bg-base p-4 rounded-4 shadow-effect">
                                <h4>Bachelor of Technology (IT)</h4>
                                <p className="text-brand mb-2">Madhav Institute Of Technology & Science (2020 - 2024)</p>
                                <p className="mb-0">A final year student studying under the domain of Information Technology.</p>
                            </div>
                        </div>

                        <div className="col-12" data-aos ="fade-up" data-aos-delay="600">
                            <div className="bg-base p-4 rounded-4 shadow-effect">
                                <h4>Higher Secondary Certificate</h4>
                                <p className="text-brand mb-2">Little World School (2017 - 2019)</p>
                                <p className="mb-0">Studied under the domain of Physics Chemistry & Mathematics.</p>
                            </div>
                        </div>

                        <div className="col-12" data-aos ="fade-up" data-aos-delay="600">
                            <div className="bg-base p-4 rounded-4 shadow-effect">
                                <h4>Senior School Certificate</h4>
                                <p className="text-brand mb-2">Little World School (2015 - 2017)</p>
                                <p className="mb-0">Studied & excelled with flying colors.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-9">
                    <h3 className="mb-4 mt-4" data-aos="fade-up" data-aos-delay="300">Experience</h3>
                    <div className="row gy-4">
                        <div className="col-12" data-aos ="fade-up" data-aos-delay="600">
                            <div className="bg-base p-4 rounded-4 shadow-effect">
                                <h4>Web Developer Intern</h4>
                                <p className="text-brand mb-2">Oasis InfoByte (May'23 - June'23)</p>
                                <p className="mb-0">Worked as a web developer intern & created seamless websites from scratch.</p>
                            </div>
                        </div>

                        <div className="col-12" data-aos ="fade-up" data-aos-delay="600">
                            <div className="bg-base p-4 rounded-4 shadow-effect">
                                <h4>Subject Matter Expert</h4>
                                <p className="text-brand mb-2">Chegg (Oct'22 - Present)</p>
                                <p className="mb-0">Assist Computer Science & related domain students with their academic difficulties.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default About;