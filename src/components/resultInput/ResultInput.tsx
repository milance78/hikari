import React, { useState } from 'react'
import './ResultInput.scss'
import { evaluateResult } from '../../functions/evaluatingFunctions';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { setGameCourse, setNumbersRunning, setRoundStarted } from '../../redux/features/runningSlice';
import { Button, TextField } from '@mui/material';
import { disableInputFocusButton } from '../../functions/focusingDisablingFunctions';
import { disableButton } from '../../redux/features/disabledSlice';
import { useInputRef } from '../../contexts/inputRefContext';
import { useButtonRef } from '../../contexts/buttonRefContext';

const ResultInput = () => {

    const [inputValue, setInputvalue] = useState('');
    const { progression } = useAppSelector((state) => state.running);
    const { rounds } = useAppSelector((state) => state.parameters);
    const { inputDisabled } = useAppSelector((state) => state.disabled);
    const dispatch = useAppDispatch();

    const resultInputRef = useInputRef();
    const startButtonRef = useButtonRef();

    const submitHandler = (ev: React.FormEvent<HTMLFormElement>) => {
        ev.preventDefault();
        if (inputValue !== "" && inputValue !== "e") {
            evaluateResult(Number(inputValue));
            setInputvalue('');
            dispatch(setNumbersRunning(false));
            startButtonRef.current &&disableInputFocusButton(startButtonRef.current);
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
        <form
            className='form'
            onSubmit={submitHandler}>
            <TextField
                type='number'
                disabled={inputDisabled}
                value={inputValue}
                className='result-input'
                onChange={ev => setInputvalue(ev.target.value)}
                inputRef={resultInputRef} />
            <Button
                type='submit'
                className='submit-button'>
                Submit
            </Button>
        </form>
    )
}

export default ResultInput