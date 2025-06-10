import React from 'react'
import './Setup.scss'
import Parameters from '../parameters/Parameters';
import ForwardIcon from '@mui/icons-material/Forward';
import { useAppDispatch } from '../../redux/store';
import { setGameCourse } from '../../redux/features/runningSlice';

const Setup = () => {

    const dispatch = useAppDispatch();
    const arrowHandler = () => {
        dispatch(setGameCourse('game'))
    }

    return (
        <div className='setup'>
            <Parameters />
            <ForwardIcon
                className='arrow'
                onClick={arrowHandler} />

        </div>
    )
}

export default Setup