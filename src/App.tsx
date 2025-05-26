import React, { useState } from 'react'
import './App.scss'
import Main from './components/main/Main'
import Settings from './components/settings/Settings'

export interface Parameters {
  interval: number;
  range: number;
  soundOn: boolean;
}

export interface Score {
  trueAnswers: number;
  falseAnswers: number;
}

const App = () => {
  const [parameters, setParameters] = useState(
    {
      interval: 800,
      range: 12,
      soundOn: true,
    }
  );

  const [score, setScore] = useState({
    trueAnswers: 0,
    falseAnswers: 0
  }) 

  return (
    <div className='app'>
      <Main parameters={parameters} 
      setScore={setScore}/>
      <Settings parameters={parameters}
      setParameters={setParameters} 
      score={score}/>
    </div>
  )
}

export default App
