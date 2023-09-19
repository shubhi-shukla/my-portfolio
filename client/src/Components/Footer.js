import React from 'react';

const Footer = () => {
    return(
        <footer className="py-5 px-lg-5">
            <div className="container">
                <div className="row gy-4 justify-content-between">
                    <div className="col-auto">
                        <p className="mb-0">Developed by <a href="#" className="fw-bold">Shubhi Shukla</a></p>
                    </div>
                    <div className="col-auto">
                        <div className="social-icons">
                            <a href="mailto:reachshubhishukla@gmail.com" className="mx-2"><i class="las la-envelope"></i></a>
                            <a href="https://leetcode.com/reachshubhishukla/" className="mx-2"><i class="las la-code"></i></a>
                            <a href="https://www.linkedin.com/in/shubhi-shukla-b02b65209/" className="mx-2"><i class="lab la-linkedin"></i></a>
                            <a href="https://github.com/shubhikodes" className="mx-2"><i className="lab la-github"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;