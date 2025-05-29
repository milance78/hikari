import './App.scss'
import Main from './components/main/Main'
import NavBar from './components/navBar/NavBar';
import SideSection from './components/sideSection/SideSection';

const App = () =>
  <div className='app'>
    <NavBar />
    <div className="container">    
      <Main />
      <SideSection />
    </div>
  </div>

export default App
