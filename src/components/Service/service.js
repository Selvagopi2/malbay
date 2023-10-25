import { FaUserAlt,FaMedal,FaCalendarCheck } from "react-icons/fa";
import { AiFillCar } from "react-icons/ai";
import { FaCarRear } from "react-icons/fa6";
import "./service.css"
import car from "../../asset/Airport-Transfer.jpg"
import car1 from "../../asset/Private-Aviation.jpg"
import car2 from "../../asset/Hourly-Charter.jpg"
import car3 from "../../asset/Long-DistanceTrip.jpg"
import { Link ,useNavigate} from "react-router-dom";


const Service = () => {
    const navigate = useNavigate();
    const handleLearnmore=()=>{
        navigate('/booking');
    
        window.scrollTo(0, 0);
    }
    return(
        <div className="service-bg-container">
            <div className="luxury-car-container">
                <h1 className="luxury-heading">Premium Transportation Excellence</h1>
                <p className="luxury-desc">Discover Unrivaled Luxury, Revel in unmatched comfort, unwavering safety, <br/> and a touch of excellence in every journey.</p>
                <ul className="services-list-container">
                    <li className="services-list-item">
                        <FaUserAlt className="services-icon"/>
                        <p className="services-desc">Top-Notch Chauffeurs</p>
                    </li>
                    <li className="services-list-item">
                        <FaCalendarCheck className="services-icon"/>
                        <p className="services-desc">Punctual Pick-Up Guarantee</p>
                    </li>
                    <li className="services-list-item">
                        <FaMedal className="services-icon"/>
                        <p className="services-desc">Honest Pricing: No Surprises</p>
                    </li>
                    <li className="services-list-item">
                        <AiFillCar className="services-icon"/>
                        <p className="services-desc">Modern Luxury Fleet</p>
                    </li>
                </ul>
            </div>
            <div className="airport-bg-container">
                <div className="airport-transfer-container">
                      <h1>Airport Transfers Made Easy</h1>
                      <p>Celebrate Your Travels with Confidence and Convenience through MalBay Express transport solutions. Our 24/7 dedicated operations department ensures a seamless experience for business and leisure travelers alike, accommodating groups of any size. Opt for MalBay to guarantee a luxurious and secure journey to the airport, promising both style and serenity for your travels.
                        </p>
                    <button className="btn btn-info" onClick={handleLearnmore}>Learn more</button>
                </div>
                <img src={car} alt="cars" style={{borderRadius:"10px"}} className="car-img" />
            </div>
            <div className="privat-bg-container">
                <img src={car1} alt="cars" style={{borderRadius:"10px"}} className="car-img"/>
                <div className="private-transfer-container">
                      <h1>Premium Ground Transportation for Private Aviation</h1>
                      <p>Celebrate Unmatched Ground Transportation with MalBay Express tansport solutions. Our global presence spans private airfields, where every client receives a dedicated private aviation specialist. Opt for MalBay Express to enjoy effortless access to private airports and FBOs, all enhanced by our premium car service.</p>
                        <button className="btn btn-info" onClick={handleLearnmore}>Learn more</button>
                </div>
            </div>
            <div className="airport-bg-container">
                <div className="airport-transfer-container">
                      <h1>Hourly Charters to Fit Your Lifestyle</h1>
                      <p>Experience unparalleled flexibility with MalBay's hourly services, perfect for any travel adventure, whether it's a short excursion or an extended voyage. Our chauffeur is at your service for as long as you need, without requiring specific destination information. Simply share your pick-up details, and during your journey, customize your travel stops according to your preferences. Your travel, your schedule, your way - that's the MalBay's promise.</p>
                         <button className="btn btn-info" onClick={handleLearnmore}>Learn more</button>
                </div>
                <img src={car2} alt="cars" style={{borderRadius:"10px"}} className="car-img" />
            </div>

            <div className="extended-bg-container">
            <img src={car3} alt="cars" style={{borderRadius:"10px"}} className="car-img" />
                <div className="private-transfer-container">
                      <h1>Journeys Beyond the Ordinary</h1>
                      <p>Discover the epitome of luxury in long-distance travel with MalBay, connecting Singapore to neighboring cities and regions. Whether your journey is for business or leisure, immerse yourself in a world of elegance aboard our premium vehicles, where a dedicated chauffeur ensures a smooth, worry-free experience. Every mile transforms into a private retreat, granting you the freedom to savor your travel in absolute comfort and style.</p>
                         <button className="btn btn-info" onClick={handleLearnmore}>Learn more</button>
                </div>
              
            </div>
        </div>
    )
}

export default Service