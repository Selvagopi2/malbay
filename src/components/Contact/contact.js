// Contact.js
import React from "react";
import Contactpic from '../../asset/contact_page_banner_img.jpg';
import './contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone,faEnvelope } from '@fortawesome/free-solid-svg-icons';
const Contact = () => {
    return (
        <div className="contact-container">
            <div className="contact-header">
                <div className="background-image">
                    <img src={Contactpic} alt="Contact Background" />
                </div>
                <div className="overlay-text">
                    <h1>Contact us</h1>
                </div>
            </div>
            <div className="contactparas">
                <h1>Get in Touch with Malbay's Professional Car Service</h1>
                <h3>
                Malbay is unwavering in its commitment to delivering world-class, on-time global chauffeured ground transportation services. Our chauffeur service is designed to surpass your expectations, setting the benchmark for excellence and quality.
                </h3>
            </div>
            <div className="contact-details">
                <div className="contact-info">
                    <h1>Your Requests, Our Mission</h1>
                    <h3>Reach Out to Malbay Express Car Services</h3><br/>
                    <h2><FontAwesomeIcon icon={faPhone} /><span style={{color:'#333333',fontSize:'20px',marginLeft:'10px'}}>+++123456789</span> </h2>
                    <h2> <FontAwesomeIcon icon={faEnvelope} /> <span style={{color:'#333333',fontSize:'20px',marginLeft:'10px'}}>flynewtours@gmail.com</span></h2>
                </div>
                <div className="book-car-service">
                    <h3>Book your car service</h3>
                    <div className="mb-1">
                        <input type="text" className="form-control" placeholder="Name" />
                    </div>
                    <div className="mb-1">
                        <input type="email" className="form-control" placeholder="Email" />
                    </div>
                    <div className="mb-1">
                        <input type="text" className="form-control" placeholder="Subject" />
                    </div>
                    <div className="mb-1">
                        <textarea className="form-control" placeholder="Message"></textarea>
                    </div>
                    <div className="mb-2">
                        <button className="btn btn-primary">Submit</button>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Contact;
