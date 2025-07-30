import React from 'react'
import './Display.scss'
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { incrementProgression, setNumbersRunning, setResultImage, setRoundStarted } from '../../redux/features/runningSlice';
import { disableButton } from '../../redux/features/disabledSlice';
import { runNumbers } from '../../functions/displayFunctions';

interface IRefButton {
  current: HTMLButtonElement | null;
}
interface IRefInput {
  current: HTMLInputElement | null;
}

interface IProps {
  resultInputRef: IRefInput;
  startButtonRef: IRefButton;
}

const Display: React.FC<IProps> = ({ resultInputRef, startButtonRef }) => {

const { roundStarted } = useAppSelector((state) => state.running);
  const { buttonDisabled } = useAppSelector((state) => state.disabled);
  const dispatch = useAppDispatch();

  const startNextHandler = () => {
      dispatch(setNumbersRunning(true));
      dispatch(incrementProgression());
      dispatch(setRoundStarted(true));
      // erasing image
      dispatch(setResultImage(''));
      resultInputRef.current
        && runNumbers(resultInputRef.current);
    }

  return (
    <div className="display">
        <button
        ref={startButtonRef}
        className='start-button'
        disabled={buttonDisabled}
        onClick={startNextHandler}>{
          !roundStarted ? 'START' : 'NEXT'
        }</button>
    </div>
  )
}

export default Display