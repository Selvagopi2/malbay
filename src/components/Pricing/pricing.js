import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Collapse } from 'antd';
import { useNavigate } from 'react-router-dom';
import "./pricing.css"
import '../Collapasible/collapsible.css'

const Pricing = () => {
    const [pricingArr, setPricingArr] = useState([]);
    const [openCollapsible, setOpenCollapsible] = useState(null); // State to track open collapsible item
    const navigate = useNavigate();

    const toggleCollapsible = (index) => {
        // Toggle the clicked collapsible item
        if (openCollapsible === index) {
            setOpenCollapsible(null); // Close the currently open collapsible
        } else {
            setOpenCollapsible(index); // Open the clicked collapsible
        }
    };

    const handleBookNowClick = () => {
        navigate('/booking');
        window.scrollTo(0, 0);
    };

    useEffect(() => {
        axios
            .get('http://localhost:3002/api/packages/getallpackages')
            .then((response) => {
                setPricingArr(response.data);
            })
            .catch((error) => {
                console.error('Error fetching pricingArr:', error);
            });
    }, []);

    return (
        <div className="pricing-bg-container">
            <div className="pricing-top-bg-container">
                <h1 className="pricing-heading">UNBEATABLE AFFORDABILITY</h1>
                <h4 className="pricing-desc">
                    We take pride in offering the most unbeatable rates for your journeys
                    between Singapore and Malaysia, departing from your chosen locations at
                    your preferred times. Your cost-effective and convenient travel
                    experience begins with us.
                </h4>
            </div>
            <ul className="pricing-list-container">
                {pricingArr.map((pricingData, index) => (
                    <li key={pricingData._id} className="collapse-list-item">
                        <div className='collapsible-button-container'>
                            <button className="collapsible-button" onClick={() => toggleCollapsible(index)}>
                                {pricingData.location}
                            </button>
                        </div>
                        {openCollapsible === index && (
                            <div className="content">
                                <div className="flex-container">
                                    <ul className='carlists'>
                                        {pricingData.cars.map((carData, carIndex) => (
                                            <li key={carIndex}>
                                                {carData.carName} : {carData.price}
                                            </li>
                                        ))}
                                    </ul>
                                    <button className='clasicbookkbtn' onClick={handleBookNowClick}>Book Now</button>
                                </div>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Pricing;
