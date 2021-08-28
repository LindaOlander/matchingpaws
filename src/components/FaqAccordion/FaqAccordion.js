import React, { useState, useRef } from 'react';
import { Link } from "react-router-dom";

import './FaqAccordion.css';

const FaqAccordion = ({title, content, link, linkText}) => {
    const [setActive, setActiveState] = useState("");
    const [setHeight, setHeightState] = useState("0px");

    const c = useRef(null);

    const toggleAccordion = () => {
        setActiveState(setActive === "" ? "active" : "");
        setHeightState(
            setActive === "active" ? "0px" : `${c.current.scrollHeight}px`
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
                    {link && linkText && <Link to={`${link}`}>{linkText}</Link>}
                </div>
            </div>
        </>
    )
};

export default FaqAccordion;