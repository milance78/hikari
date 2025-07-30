import './App.scss'
import NavBar from './components/navBar/NavBar';
import { useAppSelector } from './redux/store';
import FinalScore from './components/finalScore/FinalScore';
import Session from './components/session/Session';
import Setup from './components/setup/Setup';
import CurrentResult from './components/currentScore/CurrentScore';
import './test.ts'




const App = () => {

  const { bgImgClassName } = useAppSelector(state => state.parameters);
  const { gameCourse } = useAppSelector(state => state.running);

  return <div className={`app ${bgImgClassName}`}>
    <NavBar />
    <CurrentResult />
    <div className="container">
      {gameCourse === 'setup'
        ? <Setup /> 
        : gameCourse === 'game'
          ? <Session />
          : gameCourse === 'score'
          && <FinalScore />}
    </div>

  </div>
}

export default App
