import './NavBar.scss'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LanguageSelect from '../languageSelect/LanguageSelect';
import ThemeSelect from '../themeSelect/ThemeSelect';
import SoundSetup from '../soundSetup/SoundSetup';
import CurrentResult from '../currentResult/CurrentResult';

const NavBar = () => 
        <nav>
            <h1>HIKARI mental arithmetic</h1>
            <div className="global-settings">
                
                <SoundSetup />
                <LanguageSelect />
                <ThemeSelect />
                <AccountCircleIcon className='icon' />
            </div>
        </nav>

export default NavBar