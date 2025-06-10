import React, { useEffect, useRef, useState } from 'react'
import './Main.scss'
import { Button, TextField } from '@mui/material'
import { runNumbers } from '../../functions/displayingFunctions'
import { useAppSelector, useAppDispatch } from '../../redux/store'
import { RootState } from '../../redux/store'
import { evaluateResult } from '../../functions/evaluatingFunctions'
import { incrementProgression, setGameCourse, setResultImage, setSessionOver } from '../../redux/features/runningSlice'
import { resetScoreList, resetScore } from '../../redux/features/scoreSlice'


const Main = () => {

  const startButtonElement = useRef<HTMLButtonElement>(null);
  const resultElement = useRef<HTMLInputElement>(null);



  // const [progression, setProgression] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [roundStarted, setRoundStarted] = useState(false);


  const dispatch = useAppDispatch();
  const { resultImage, displayedNumber, progression } = useAppSelector((state: RootState) => state.running);
  const { rounds } = useAppSelector((state: RootState) => state.parameters);
  const { scoreList } = useAppSelector((state: RootState) => state.score);

  // initially focusing on start button at onload
  useEffect(() => {
    startButtonElement.current?.focus();
  }, [])

  //--------------------------------
  const startNextHandler = () => {
    dispatch(incrementProgression())
    setRoundStarted(true);
    runNumbers();
    setIsRunning(true);
    // erasing image
    dispatch(setResultImage(''));
    resultElement.current?.focus();
    // if (progression === rounds) {
    //   dispatch(resetScoreList());
    //   dispatch(resetScore());
    //   setProgression(1);
    // }
  }

  //----------------------------------
  const [inputValue, setInputvalue] = useState('');

  const submitHandler = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    if (inputValue !== "" && inputValue !== "e") {
      
      
      evaluateResult(Number(inputValue));
      setInputvalue('');
      setIsRunning(false);
      startButtonElement.current?.focus();
      // progression === rounds
      //   ? setRoundStarted(false)
      //   : setRoundStarted(true);
      if (progression === rounds) {
        const timeout = setTimeout(() => {
          dispatch(setGameCourse('score'));
          clearTimeout(timeout)
        }, 5000)

      }
    }


  }

  const displayScoreList = scoreList.map(
    (el, i) => <div key={i}>
      {i + 1} : {el ? 'correct' : 'incorrect'}
    </div>
  )

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
        onClick={startNextHandler}>{
          !roundStarted ? 'START' : 'NEXT'
        }</button>
      rounds: {rounds} <br />
      progression: {progression} <br />
      {displayScoreList}
      <form
        className='form'
        onSubmit={submitHandler}>
        <TextField
          type='number'
          value={inputValue}
          className='result'
          onChange={ev => setInputvalue(ev.target.value)}
          inputRef={resultElement} />
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