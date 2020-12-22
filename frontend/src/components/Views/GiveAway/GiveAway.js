import React, { useEffect } from 'react';
import { useLocation } from "react-router-dom";
import MenuGiveAway from '../../Menu/MenuGiveAway';
import HeaderGiveAway from '../../Header/HeaderGiveAway';
import FormGiveAway from '../../Form/FormGiveAway';

const GiveAway = () => {

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <>
            <MenuGiveAway />
            <HeaderGiveAway />
            <FormGiveAway />
        </>
    )
}

export default GiveAway;