import React from "react"
import  {RedirectFunction} from "react-router-dom"
import { Link ,useNavigate} from "react-router-dom"
import driverpic from '../driver.png'
import car1 from '../alphard-blue.png'
import car2 from '../alphard-white.png'
import city from "../city.jpeg"
import { MdHealthAndSafety } from "react-icons/md";
import { BsFillAlarmFill } from "react-icons/bs";
import { FaTrophy } from "react-icons/fa";
import "./about.css"

const About = () => {
    const navigate = useNavigate();
const handleKnowmore=()=>{
    navigate('/booking');

    window.scrollTo(0, 0);
}
const handleServices=()=>{
    navigate('/services');

    window.scrollTo(0, 0);
}
    return(
        <div className="about-container">
            <div className="transport-container">
                <div className='welcome-container'>
                    <h1 className="welcome-heading">Discover MalBay Express: Your Trusted Partner in Seamless Travel</h1>
                    <p className="welcome-desc">At MalBay Express, we take pride in offering a reliable, safe, and cost-effective MVP Private Car service, specifically tailored for travel between Singapore and destinations like Johor Bahru, Legoland Malaysia, and various other locations across Malaysia.<span className="welcome-span">Our wide range of private transportation solutions is meticulously crafted to accommodate the distinctive requirements of every traveler, delivering private transfers and chauffeur-driven services for individuals, families, groups, and both leisure and business voyagers. With each of our transportation services, you'll enjoy the convenience of a dedicated driver, ensuring a seamless and delightful journey.</span> 
                    </p>
                    <button type='button' onClick={handleKnowmore} className='know-more-bt'>KNOW MORE</button>
                </div>
                <img src={car2} alt="car" width={450} style={{marginBottom:"45px"}} className="about-car-img" />
            </div>
            <div style={{display:"flex",alignItems:"flex-end",justifyContent:"flex-end"}}>
            <img src={car1} alt="xc" className='half-image' width={300} height={180} style={{marginTop:"40px",borderRadius:"10px",marginRight:"50px",marginTop:"40px"}}/>
            </div>
            <div className='travel-container'>
                <div className='choose-container'>
                <h1 className='welcome-heading'>Why Opt for Our Travel Solutions</h1>
                <p className='travel-desc'>At MalBay Express, your safety and comfort are at the heart of everything we do. Our unwavering dedication extends to delivering private car transportation that is not only safe but also exceptionally budget-friendly, making your family's Legoland Malaysia adventure accessible and thoroughly enjoyable. <br/> We understand that your family's happiness and peace of mind are paramount, and that's why our services are designed to provide a seamless and secure journey. Our mission is to enhance your Legoland experience by ensuring your transportation needs are met with reliability and affordability. Discover the ease and affordability of traveling to Legoland Malaysia with Sincere Transport Services today.</p>
                    </div>
                    <ul className='choose-list-container'>
                          <li className='choose-list-item-container'>
                            <MdHealthAndSafety className='safety-icon'/>
                             <h1 className='safety-heading'>We Prioritize Your Well-Being</h1>
                             <p className='safety-desc'>At MalBay Express, Safety is Our Top Priority. We are unwavering in our commitment to upholding the most stringent road safety standards, guaranteeing the well-being and security of every passenger throughout their journey.</p>
                          </li>
                          <li className='choose-list-item-container'>
                            <BsFillAlarmFill className='safety-icon'/>
                             <h1 className='safety-heading'>On-Time Every Time</h1>
                             <p className='safety-desc'>At MalBay Express, we understand that time is a valuable asset, and punctuality is at the core of our commitment. We prioritize punctuality to guarantee exceptional private car services to get you to your destination on time.</p>
                          </li>
                          <li className='choose-list-item-container'>
                            <FaTrophy className='safety-icon'/>
                             <h1 className='safety-heading'>Quality in low price</h1>
                             <p className='safety-desc'>At MalBay Express, we firmly believe that excellence should be accessible without the burden of high costs. We invite you to experience our top-tier private car services, where quality meets affordability.</p>
                          </li>
                    </ul>
                    <div className='view-service-container'>
                <button type='button'onClick={handleServices} className='know-more-bt'>VIEW SERVICES</button>
                    </div>
            </div>
        </div>
    )
}

export default About