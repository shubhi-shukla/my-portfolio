import React, {useState} from 'react';
import showAlert from '../utils/showAlert';

const Contact = () => {

    const[user, setUser] = useState({name:"", email:"", subject:"", message:""});

    let name, value;
    const handleInput = (event) => {
        console.log(event);
        console.log(user);
        name = event.target.name;
        value = event.target.value;

        setUser({...user, [name] : value});
    }

    const postData = async (e) => {
        e.preventDefault();
        const { name, email, subject, message} = user;
        const res = await fetch('/message', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
                name,
                email,
                subject,
                message
            }),
        });

        const data = await res.json();
        if (data.status == 422 || data.status == 400 || !data) {
            showAlert('Invalid Registration', 'danger');
        } else {
            showAlert('Message Sent Successfully', 'success');
            setUser({
                name : "",
                email : "",
                subject: "",
                message: ""
            });
        }
    };

    return(
        <section id="contact" className="full-height px-lg-5">
            <div className="container">

                <div className="row justify-content-center text-center">
                    <div className="col-lg-8 pb-4" data-aos="fade-up">
                        <h6 className="text-brand">CONTACT</h6>
                        <h1>Interested in working together? Let's talk
                        </h1>
                    </div>

                    <div id="alert-container"></div>
                    <div className="col-lg-8" data-aos="fade-up" data-aos-delay="300">
                        <form action="#" className="row g-lg-3 gy-3 needs-validation" noValidate>
                            <div className="form-group col-md-6">
                                <input type="text" className="form-control" placeholder="Name" name="name" value={user.name} onChange={handleInput} required></input>
                            </div>
                            <div className="form-group col-md-6">
                                <input type="email" className="form-control" placeholder="Email" name="email" value={user.email} onChange={handleInput} required></input>
                            </div>
                            <div className="form-group col-12">
                                <input type="text" className="form-control" placeholder="Subject" name="subject" value={user.subject} onChange={handleInput} required></input>
                            </div>
                            <div className="form-group col-12">
                                <textarea name="" rows="4" className="form-control" placeholder="Message" name="message" value={user.message} onChange={handleInput} required></textarea>
                            </div>
                            <div className="form-group col-12 d-grid">
                                <button type="submit" className="btn btn-brand" onClick={postData}>Contact me</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;