import React from 'react';
import { Link } from "react-router-dom";
import './Solskenshistoria.css'

const Solskenshistoria = ({item}) => {

    return (
        <div className="solskenshistoriaBox">
            <h3 className="solskenshistoriaHeading">{item.titel}</h3>
            <div className="solskenshistoriaImageWrapper">
                <img src={item.bild} alt="Bild på adoptören" />
            </div>
            <h5 className="solskenshistoriaHeading">{item.adoptör}</h5>
            <p>{item.ingress}</p>
            <Link to={`/solskenshistorier/${item.id}`}>
                <button className="button">{`Läs mer om ${item.namn}s historia`}</button>
            </Link>
        </div>
    )
}

export default Solskenshistoria;