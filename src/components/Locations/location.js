import "./location.css"
import sekinchan from "../../asset/sekinchan.jpg"
import mersing from "../../asset/mersing-1654740355.jpg"
import lumbur from "../../asset/kuala-lumpur-1654740535.jpg"
import highlands from "../../asset/cameron-highland-1654740575.jpg"
import { Link ,useNavigate} from "react-router-dom"
const Location = () => {

    const navigate = useNavigate();
    const handleBookNow=()=>{
        navigate('/booking');
    
        window.scrollTo(0, 0);
    }
    return(
        <div className="loacation-bg-container">
            <div className="sekinchan-container">
            <div className="framing-container">
                <h1 className="framing-heading">Sekinchan: Bountiful Farming Paradise</h1>
                  <p className="framing-desc">In Chinese, 'Sekinchan' translates to 'village ideal for cultivation,' a name that aptly describes the fertile land and favorable climate of this region. Sekinchan is renowned for its ability to yield an abundant harvest of rice, fruits, and oil palm trees, making it a prime location for agriculture. With approximately 4,300 acres of farmland dedicated to paddy fields and fruits, it stands as a testament to its reputation as a haven for farming, boasting the highest rice production per acre in Malaysia.</p>
                      <button className="book-now-btn" onClick={handleBookNow}>BOOK NOW</button>
                </div>
                <img src={sekinchan} alt="location" width={600} style={{borderRadius:"5px"}} className="location-img" />
            </div>

            <div className="mersing-container">
            <img src={mersing} alt="location" width={600} style={{borderRadius:"5px"}} className="location-img" />
            <div className="framing-container">
                <h1 className="framing-heading">Mersing: Where Nature's Beauty and Heritage Unite</h1>
                  <p className="framing-desc">Nestled along the eastern coast of Johor, Malaysia, Mersing town stands as an inviting gateway to a world of natural wonders and cultural heritage. Its renowned reputation is anchored by the vibrant passenger boat jetty, serving as a bustling hub for daily boat excursions to a myriad of stunning offshore islands. Whether you're seeking serene natural beauty or the richness of cultural heritage, Mersing is your starting point for unforgettable adventures.</p>
                   <button className="book-now-btn" onClick={handleBookNow}>BOOK NOW</button>
                </div>
                
            </div>

            <div className="lumbur-container">
            <div className="framing-container">
                <h1 className="framing-heading">Kuala Lumpur: The Fusion of Modernity and Islamic Artistry</h1>
                  <p className="framing-desc">Kuala Lumpur, the dynamic capital of Malaysia, is renowned for its striking modern skyline, prominently featuring the iconic Petronas Twin Towers. These magnificent skyscrapers, soaring to a height of 451 meters, showcase a captivating blend of glass-and-steel architecture enriched with intricate Islamic patterns and motifs. Visitors have the opportunity to embark on an immersive journey through these towers, traversing the public skybridge and ascending to the observation deck, all while gazing upon the breathtaking cityscape that unfolds beneath.</p>
                  <button className="book-now-btn" onClick={handleBookNow}>BOOK NOW</button>
                </div>
                <img src={lumbur} alt="location" width={600} style={{borderRadius:"5px"}} className="location-img" />
            </div>

            <div className="highlands-container">
            <img src={highlands} alt="location" width={600} style={{borderRadius:"5px"}} className="location-img" />
            <div className="framing-container">
                <h1 className="framing-heading">Cameron Highlands: A Paradise for Nature Lovers</h1>
                  <p className="framing-desc">Cameron Highlands stands as a haven for dedicated nature enthusiasts, providing a wealth of opportunities for adventure and exploration amidst its picturesque landscapes. Whether you opt for a leisurely walk or an in-depth hike, the region is dotted with exceptional attractions such as the captivating Mossy Forest, making it a destination of choice for those with a profound appreciation for the wonders of the natural world.</p>
                   <button className="book-now-btn" onClick={handleBookNow}>BOOK NOW</button>
                </div>
                
            </div>
        </div>
    )
}

export default Location