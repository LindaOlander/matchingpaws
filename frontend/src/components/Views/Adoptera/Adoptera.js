import React from 'react';
import Navbar from '../../Navbar/Navbar';
import HeaderAdopt from '../../Header/HeaderAdopt';
import Quiz from '../Quiz/Quiz';
import DogList from '../../DogList/DogList';

const Adoptera = () => {
    return (
        <>
            <Navbar />
            <HeaderAdopt />
            <Quiz />
            <DogList />
        </>
    )
}

export default Adoptera;