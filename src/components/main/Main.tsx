import React, { useEffect, useRef, useState } from 'react'
import './Main.scss'
import { Button, TextField } from '@mui/material'
import wrongAnswer from '../../img/wrongAnswer.png'
import applause from '../../img/applause.png'
import { getHikariArray, timedResultImage } from '../../functions'
import { changeHandler } from '../../functions'
import { countResult } from '../../functions'
import { useAppSelector } from '../../redux/store'
import { RootState, useAppDispatch } from '../../redux/store'
import { incrementFalseScore, incrementTrueScore } from '../../redux/features/scoreSlice'

const Main = () => {

  const [resultImage, setResultImage] = useState('');
  const [num, setNum] = useState<null | number>(null);
  const [inputValue, setInputvalue] = useState('');
  const [currentArray, setCurrentArray] = useState<number[]>([0]);
  const [started, setStarted] = useState(false);

  const dispatch = useAppDispatch();

  const { interval, range, soundOn } = useAppSelector((state: RootState) => state.parameters);
  
  const applauseSound = new Audio('./sounds/applauseSound.wav');
  const sadTromboneSound = new Audio('./sounds/sadTromboneSound.mp3');
  const smoothBeepSound = new Audio('./sounds/smoothBeepSound.mp3');
  
  const resultElement = useRef<HTMLInputElement>(null);
  const startElement = useRef<HTMLButtonElement>(null)

  const submitHandler = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    if (inputValue !== "" && inputValue !== "e") {
      evaluateResult(Number(inputValue))
      setInputvalue('');
      setStarted(false);
      startElement.current && startElement.current.focus();
    }
  }

  useEffect(() => {
    startElement.current && startElement.current.focus();
  }, [])

  useEffect(() => {
    // blinking - not sure how I made it
    started && currentArray.forEach((el, i) => {
      setTimeout(() => {
        setNum(null)
      }
        , i * interval - 100);
    });
    // numbers display
    started && currentArray.forEach((el, i) => {
      setTimeout(() => {
        if (el !== 0) {
          setNum(el)
          soundOn && smoothBeepSound.play();
        } else {
          setNum(null)
        };
      }
        , i * interval);
    });

    started && console.log({ currentArray });
    started && console.log({ result: countResult(currentArray) });
  }, [started])

  const start = () => {
    setStarted(true);
    setResultImage('');
    setCurrentArray(getHikariArray(range));

    resultElement.current && resultElement.current.focus();
  }

  const evaluateResult = (currentResult: number) => {
    if (currentResult === countResult(currentArray)) {
      timedResultImage(applause, setResultImage);
      dispatch(incrementTrueScore());
      soundOn && applauseSound.play();
    } else {
      timedResultImage(wrongAnswer, setResultImage);
      dispatch(incrementFalseScore());
      soundOn && sadTromboneSound.play();
    }
  }

  return (
    <section className='main'>
      <div className="display">
        {started
          ? <div className='num'>{num}</div>
          : resultImage
            ? <img src={resultImage} alt='result' />
            : null}
      </div>
      {/* needed to use simple button because focus method is not good looking with MUI button */}
      <button
        ref={startElement}
        className='start-button'
        onClick={start}>START</button> 
      <form
        className='form'
        onSubmit={submitHandler}>
        <TextField
          type='number'
          value={inputValue}
          className='result'
          onChange={ev => changeHandler(ev, setInputvalue)}
          inputRef={resultElement}
          color='secondary' />
        <Button
          type='submit'
          className='submit-button'>
          Submit
        </Button>
      </form>
      {/* <div className="current-array">
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