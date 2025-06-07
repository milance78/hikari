import './App.scss'
import Main from './components/main/Main'
import NavBar from './components/navBar/NavBar';
import SideSection from './components/sideSection/SideSection';
import { useAppSelector } from './redux/store';

const App = () =>{

  const {bgImgClassName} = useAppSelector(state => state.parameters)

  return <div className={`app ${bgImgClassName}`}>
    <NavBar />
    <div className="container">
      <Main /> 
      <SideSection />
    </div>
  </div>}

export default App
