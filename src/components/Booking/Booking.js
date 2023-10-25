import React,{useState,useEffect} from "react";
import '../Home/home.css'
import axios from 'axios';
export const Booking =()=>{
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://restcountries.com/v3.1/all');
        
        if (response.status === 200) {
          const countriesData = response.data;
          
          const countryNames = countriesData.map(country => country.name.common);
          setCountries(countryNames);
        } else {
          console.error('Failed to fetch data from the API');
        }
      } catch (error) {
        console.error('Error:', error.message);
      }
    };

    fetchData(); 
  }, []);


    return(
        <div style={{padding:'2% 6%'}}>
              <div className="form-container">
         <h2>Generate Your Speedy Estimate</h2>
             <form className="forminhome">
           <div className="row">
           <div className="col-12 mb-3">
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="tripType" id="oneWay" value="oneWay" required />
                    <label className="form-check-label" htmlFor="oneWay">One-way</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="tripType" id="twoWay" value="twoWay" required />
                    <label className="form-check-label" htmlFor="twoWay">Two-way</label>
                </div>
            </div>
             {/* Name */}
             <div className="col-md-6 mb-3">
               <input type="text" className="form-control" placeholder="Name" required />
             </div>
       
             {/* Email */}
             <div className="col-md-6 mb-3">
               <input type="email" className="form-control" placeholder="Email" required />
             </div>
       
             {/* Country */}
             <div className="col-md-6 mb-3">
               <select className="form-control" placeholder="Country">
                 {/* Example countries */}
                 <option value="" disabled selected>Select Country</option>
                 {countries.map((country, index) => (
                <option key={index} value={country}>
                  {country}
                </option>
              ))}
               </select>
             </div>
       
             {/* Phone Number */}
             <div className="col-md-6 mb-3">
               <input type="tel" className="form-control" placeholder="Phone Number" required />
             </div>
       
             {/* Car */}
             <div className="col-md-6 mb-3">
               <select className="form-control" placeholder="Car">
                 {/* Example cars */}
                 <option value="" disabled selected>Select Car</option>
                 <option value="Sedan">Sedan</option>
                 <option value="SUV">SUV</option>
                 {/* ... other cars ... */}
               </select>
             </div>
       
             {/* Pickup Date */}
             <div className="col-md-6 mb-3">
               <input type="date" className="form-control" placeholder="Pickup Date" required />
             </div>
       
             {/* Pickup Time */}
             <div className="col-md-6 mb-3">
               <select className="form-control" placeholder="Pickup Time">
                 {/* Example times */}
                 <option value="" disabled selected>Select Pickup Time</option>
                 <option value="09:00">09:00 AM</option>
                 <option value="10:00">10:00 AM</option>
                 {/* ... other times ... */}
               </select>
             </div>
       
             {/* Pickup Location */}
             <div className="col-md-6 mb-3">
               <input type="text" className="form-control" placeholder="Pickup Location" required />
             </div>
       
             {/* Drop Off Location */}
             <div className="col-md-6 mb-3">
               <input type="text" className="form-control" placeholder="Drop Off Location" required />
             </div>
       
             {/* Flight Info */}
             <div className="col-md-6 mb-3">
               <input type="text" className="form-control" placeholder="Flight Info" />
             </div>
       
             {/* No of Adults */}
             <div className="col-md-6 mb-3">
               <input type="number" className="form-control" placeholder="No of Adults" required />
             </div>
       
             {/* Number Of Children */}
             <div className="col-md-6 mb-3">
               <input type="number" className="form-control" placeholder="Number Of Children" />
             </div>
       
             {/* Additional Info */}
             <div className="col-md-12 mb-3">
               <textarea className="form-control " rows="1" placeholder="Additional Info Request"></textarea>
             </div>
           </div>
       
           {/* Submit Button */}
           <div className="mt-3">
             <button type="submit" className="btn btn-primary btn-block">Submit</button>
           </div>
         </form>
        </div>
        </div>
      
    )
}