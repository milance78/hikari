import React from 'react'
import './LowerSection.scss'
import { evaluateResult } from '../../functions/evaluatingFunctions';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { setGameCourse, setInputValue, setNumbersRunning, setRoundStarted } from '../../redux/features/runningSlice';
import { disableInputFocusButton } from '../../functions/focusingDisablingFunctions';
import { disableButton } from '../../redux/features/disabledSlice';
import { useButtonRef } from '../../contexts/buttonRefContext';
import SubmitButton from '../submitButton/SubmitButton';
import InputResult from '../inputResult/InputResult';

const LowerSection = () => {

    const { progression, inputValue } = useAppSelector((state) => state.running);
    const { rounds } = useAppSelector((state) => state.parameters);
    const dispatch = useAppDispatch();
    const startButtonRef = useButtonRef();

  const submitHandler = (ev: React.FormEvent<HTMLFormElement>) => {
      ev.preventDefault();
      if (inputValue !== "" && inputValue !== "e") {
        evaluateResult(Number(inputValue));
        dispatch(setInputValue(''));
        dispatch(setNumbersRunning(false));
        startButtonRef.current
          && disableInputFocusButton(startButtonRef.current);
        if (progression === rounds) {
          dispatch(disableButton());
          const timeout = setTimeout(() => {
            dispatch(setGameCourse('score'));
            dispatch(setRoundStarted(false));
            clearTimeout(timeout)
          }, 4000)
        }
      }
    }
  return (
    <form className='form'
      onSubmit={submitHandler}>
        <InputResult />
        <SubmitButton />            
    </form>    
  )
}

export default LowerSection