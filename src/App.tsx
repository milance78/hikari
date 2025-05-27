import React, { useEffect, useRef, useState } from 'react'
import './App.scss'
import Main from './components/main/Main'
import Settings from './components/settings/Settings'
import SettingsIcon from '@mui/icons-material/Settings';
import Score from './components/score/Score';

export interface Parameters {
  interval: number;
  range: number;
  soundOn: boolean;
}

export interface IScore {
  trueAnswers: number;
  falseAnswers: number;
}

const App = () => {
  const [parameters, setParameters] = useState(
    {
      interval: 900,
      range: 12,
      soundOn: true,
    }
  );

  const [score, setScore] = useState({
    trueAnswers: 0,
    falseAnswers: 0
  })

  const [visible, setVisible] = useState(false);
  const settingsElement = useRef<HTMLDivElement>(null);

  const settingsVisibilityHandler = () => {
    setVisible(prev => !prev)
  }

  // fix this !!!
  // useEffect(() => {
  //   window.addEventListener('click', (ev: any) => {
  //     ev.target.contains(settingsElement.current)
  //       && setVisible(false)
  //   });
  // }, [])

  return (
    <div className='app'>
      <div className="container">
        <Score score={score}/>
        <Main parameters={parameters}
          setScore={setScore} />
        <SettingsIcon className='cog-icon'
          onClick={settingsVisibilityHandler} />
          {visible
        && <Settings parameters={parameters}
          setParameters={setParameters}
          reference={settingsElement} />}
      </div>

      
    </div>
  )
}

export default App
