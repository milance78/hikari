import React, { useEffect, useRef, useState } from 'react'
import './Main.scss'
import { Button, TextField } from '@mui/material'
import { runNumbers } from '../../functions/displayingFunctions'
import { useAppSelector, useAppDispatch } from '../../redux/store'
import { RootState } from '../../redux/store'
import { evaluateResult } from '../../functions/evaluatingFunctions'
import { setResultImage } from '../../redux/features/runningSlice'


const Main = () => {

  const startButtonElement = useRef<HTMLButtonElement>(null);
  const resultElement = useRef<HTMLInputElement>(null);
  const [isRunning, setIsRunning] = useState(false);

  const dispatch = useAppDispatch();
  const { resultImage, displayedNumber } = useAppSelector((state: RootState) => state.running);

  // initially focusing on start button at onload
  useEffect(() => {
    startButtonElement.current?.focus();
  }, [])

  //---------------------------------------------------------------
  const [inputValue, setInputvalue] = useState('');
  const submitHandler = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    if (inputValue !== "" && inputValue !== "e") {
      evaluateResult(Number(inputValue));
      setInputvalue('');
      setIsRunning(false);
      startButtonElement.current?.focus();
    }
  }
  //---------------------------------------------------------------
  const startHandler = () => {

    runNumbers();
    setIsRunning(true);
    // erasing image
    dispatch(setResultImage(''));
    resultElement.current?.focus();
  }

  const displayValue = () =>
    isRunning
      ? <div className='num'>{displayedNumber}</div>
      : resultImage
        ? <img src={resultImage} alt='result' />
        : null

  return (
    <section className='main'>
      <div className="display">
        {displayValue()}
      </div>
      {/* needed to use simple button because focus method is not good looking with MUI button */}
      <button
        ref={startButtonElement}
        className='start-button'
        onClick={startHandler}>START</button>
      <form
        className='form'
        onSubmit={submitHandler}>
        <TextField
          type='number'
          value={inputValue}
          className='result'
          onChange={ev => setInputvalue(ev.target.value)}
          inputRef={resultElement}
          color='secondary' />
        <Button
          type='submit'
          className='submit-button'>
          Submit
        </Button>
      </form>
      
      {/* <div className
      ="current-array">
      {
      currentArray.filter(el => el !== 0).map(el => 
        <span style={{fontSize: '20px'}}>{` ${el } `} &nbsp;	&nbsp; &nbsp;</span>
       )
      }
      </div> */}
    </section>
  )
}

export default Main