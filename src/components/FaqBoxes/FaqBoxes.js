import React from 'react';
import './FaqBoxes.css';

const FaqBoxes = () => {
    return (
        <div className="boxesWrapper">
            <div className="boxWrapper image1">
                <a href="#förberedelser">Förberedelser</a>
            </div>
            <div className="boxWrapper image2">
                <a href="#ekonomi">Ekonomi & försäkringar</a>
            </div>
            <div className="boxWrapper image3">
                <a href="#första-tiden">Första tiden</a>
            </div>
            <div className="boxWrapper image4">
                <a href="#mat-utrustning">Mat och utrustning</a>
            </div>
        </div>
    )
};

export default FaqBoxes;