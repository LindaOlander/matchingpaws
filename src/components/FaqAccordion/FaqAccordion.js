import React, { useState, useRef } from 'react';
import './FaqAccordion.css';

const FaqAccordion = ({title, content}) => {
    const [setActive, setActiveState] = useState("");
    const [setHeight, setHeightState] = useState("0px");
    const [setRotate, setRotateState] = useState("accordion__icon");

    const c = useRef(null);

    const toggleAccordion = () => {
        setActiveState(setActive === "" ? "active" : "");
        setHeightState(
            setActive === "active" ? "0px" : `${c.current.scrollHeight}px`
        );
        setRotateState(
            setActive === "active" ? "accordion__icon" : "accordion__icon rotate"
        );
    }
    return (
        <>
            <div className="accordion__section">
                <button onClick={toggleAccordion} className={`accordion ${setActive}`}>
                    <p className="accordion__title">{title}</p>
                </button>
                <div ref={c} className="accordion__content" style={{ maxHeight: `${setHeight}` }}>
                    <div
                        className="accordion__text"
                        dangerouslySetInnerHTML={{ __html: content }}
                    />
                </div>
            </div>
        </>
    )
};

export default FaqAccordion;