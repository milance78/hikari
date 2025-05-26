import React, { useEffect, useRef, useState } from 'react'
import './Main.scss'
import { Button, TextField } from '@mui/material'
import { arrays12 } from '../../data'
import wrongAnswer from '../../img/wrongAnswer.png'
import applause from '../../img/applause.png'
import { getHikariArray, timedResultImage } from '../../functions'
import { changeHandler } from '../../functions'
import { countResult } from '../../functions'
import { Parameters } from '../../App'
import { Score } from '../../App'

interface IProps {
  parameters: Parameters
  setScore : React.Dispatch<React.SetStateAction<Score>>
}

const Main: React.FC<IProps> = ({parameters, setScore}) => {

  const [resultImage, setResultImage] = useState('');
  const [num, setNum] = useState<null | number>(null);
  const [startDisabled, setStartDisabled] = useState(false);
  const [inputValue, setInputvalue] = useState('');
  const applauseSound = new Audio('./sounds/applauseSound.wav');
  const sadTromboneSound = new Audio('./sounds/sadTromboneSound.mp3');
  const smoothBeepSound = new Audio('./sounds/smoothBeepSound.mp3');

  
  const [currentArray, setCurrentArray] = useState<number[]>([0]);
  const[started, setStarted] = useState(false)
  const resultElement = useRef<HTMLInputElement>(null);

  const submitHandler = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    evaluateResult(Number(inputValue));
    setInputvalue('');
    setStarted(false);
  }

  useEffect(()=> {
    started && currentArray.forEach((el, i) => {
      setTimeout(() => {
        if (el !== 0) {
          setNum(el)
          parameters.soundOn && smoothBeepSound.play();
        } else {
          setNum(null)
        };
      }
        , i * parameters.interval);
    });
    started && console.log({currentArray});
    started && console.log({result: countResult(currentArray)});
  
  }, [started, parameters.range])

  const start = () => {
    setStarted(true);
    setResultImage('');
    setCurrentArray(getHikariArray(parameters.range));
    
    resultElement.current && resultElement.current.focus();
  }

  const evaluateResult = (currentResult: number) => {
    if (currentResult === countResult(currentArray)) {
      timedResultImage(applause, setResultImage);
      setScore( prev => 
        ({
          ...prev, 
          trueAnswers: prev.trueAnswers + 1
        }));
      parameters.soundOn && applauseSound.play();
    } else {
      timedResultImage(wrongAnswer, setResultImage);
      setScore( prev => 
        ({
          ...prev, 
          falseAnswers: prev.falseAnswers + 1
        }));
      parameters.soundOn && sadTromboneSound.play();
    }
  }

  return (
    <div className='main'>
      <div className="display">
        {started
          ? <div className='num'>{num}</div>
          : resultImage
            ? <img src={resultImage} alt='result' />
            : null}
      </div>
      <Button
        className='start-button'
        onClick={start}
        disabled={started === true}
        sx={{
          background: "#ba68c8",
        }}>Start</Button>
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
    </div>
  )
}

export default Main