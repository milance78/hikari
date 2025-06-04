import './App.scss'
import Main from './components/main/Main'
import NavBar from './components/navBar/NavBar';
import SideSection from './components/sideSection/SideSection';
import { useAppSelector } from './redux/store';

const App = () => {

  const { theme } = useAppSelector(state => state.parameters)

  return <div className={theme === 'blue' ?'app blue': 'app'}>
    <NavBar />
    <div className="container">
      <Main />
      <SideSection />
    </div>
  </div>
}
export default App
