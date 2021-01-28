import React from 'react';
import './FaqBoxes.css';

const FaqBoxes = () => {
    return (
        <div className="boxesWrapper">
            <div className="boxWrapper image1">
                <a href="#förberedelser">Förberedelser</a>
            </div>
            <div className="boxWrapper image2">
                <a href="#hämtning">Hämtning</a>
            </div>
            <div className="boxWrapper image3">Under</div>
            <div className="boxWrapper image4">Prylar</div>
        </div>
    )
};

export default FaqBoxes;