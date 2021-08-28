import React, {useEffect} from 'react';
import Solskenshistoria from './Solskenshistoria';
import historier from "../../solskenshistorier.json";

import './Solskenshistoria.css';

const SolskenshistorierList = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <div className="solskenshistorierWrapper">
            {historier?.historier?.map(item =>
            <Solskenshistoria item={item}/>)}
        </div>
    )
}

export default SolskenshistorierList;