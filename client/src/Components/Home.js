import React, {useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import callAnimation from '../callAnimation.js';

const Home = () => {
    useEffect(() => {
        callAnimation();
      }, [])
    return(
        <section id = "home" className = "full-height px-lg-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-10">
                        <h1 className = "display-4 fw-bold" data-aos="fade-up">I'M A <span className="text-brand">MERN SCHOLAR</span> & <span className="text-brand">CODE SAVANT</span></h1>
                        <p className = "lead mt-2 mb-4" data-aos="fade-up" data-aos-delay="300">Crafting Seamless Experiences with Technology and Mastering Algorithms for Tomorrow's Innovations!</p>
                        <div data-aos="fade-up" data-aos-delay="600">
                            <a href = "#work" className = "btn btn-brand me-3">Explore My Work</a>
                            <a href = "#" className = "link-custom">Call : (+91) 883 955 9738</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home;