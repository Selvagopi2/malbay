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
                <h1>Malbay's Professional Car Service - Contact us</h1>
                <h3>
                    Malbay is dedicated to providing the highest-quality, on-time
                    chauffeured global ground transportation service worldwide. Our
                    chauffeur service will exceed your expectations in excellence and
                    quality!
                </h3>
            </div>
            <div className="contact-details">
                <div className="contact-info">
                    <h1>How can we assist you?</h1>
                    <h3>Contact details for Malbay Express car services</h3><br/>
                    <h2><FontAwesomeIcon icon={faPhone} /><span style={{color:'#333333',fontSize:'20px',marginLeft:'10px'}}>+++123456789</span> </h2>
                    <h2> <FontAwesomeIcon icon={faEnvelope} /> <span style={{color:'#333333',fontSize:'20px',marginLeft:'10px'}}>info@email.com</span></h2>
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
