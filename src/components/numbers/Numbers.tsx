import React from 'react'
import './Numbers.scss'
import { useAppSelector } from '../../redux/store';

const Numbers = () => {

    const { numbersRunning, blankDisplay, displayedNumber } = useAppSelector(state => state.running);

    return (
        <>
             <div className='num'>{
                numbersRunning &&
                !blankDisplay && displayedNumber
            }</div>
        </>
    )
}

export default Numbers