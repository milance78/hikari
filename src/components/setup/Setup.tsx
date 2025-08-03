import React from 'react'
import './Setup.scss'
import Parameters from '../parameters/Parameters';
import ForwardIcon from '@mui/icons-material/Forward';
import { useAppDispatch } from '../../redux/store';
import { setGameCourse } from '../../redux/features/runningSlice';
import { enableButton } from '../../redux/features/disabledSlice';

const Setup = () => {

  const dispatch = useAppDispatch();
  const arrowHandler = () => {
    dispatch(setGameCourse('game'));
    dispatch(enableButton());
  }

  return (
    <div className='setup'>
      <Parameters />
      <button
        onClick={arrowHandler}
        autoFocus>
        <ForwardIcon
          className='arrow' />
      </button>

    </div>
  )
}

export default Setup