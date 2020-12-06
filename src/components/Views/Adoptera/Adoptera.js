import React from 'react';
import Dogs from '../../DogList/Dogs';
import Navbar from '../../Navbar/Navbar';
import HeaderAdopt from '../../Header/HeaderAdopt';
import Quiz from '../Quiz/Quiz';

const Adoptera = () => {
    return (
        <>
            <Navbar />
            <HeaderAdopt />
            <Quiz />
            <Dogs />
        </>
    )
}

export default Adoptera;