import './App.scss'
import NavBar from './components/navBar/NavBar';
import { useAppSelector } from './redux/store';
import './functions/testFunctions'
import Score from './components/score/Score';
import Session from './components/session/Session';
import Setup from './components/setup/Setup';
import CurrentResult from './components/currentResult/CurrentResult';

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
          && <Score />}
    </div>
  </div>
}

export default App
