import React from 'react'
import './Evaluating.scss'
import { useAppSelector } from '../../redux/store';

const Evaluating = () => {
    const { resultImage } = useAppSelector((state) => state.running);

    return (
        <img src={resultImage} alt='result' />   
    )
}

export default Evaluating