import './NavBar.scss'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LanguageSelect from '../languageSelect/LanguageSelect';
import ThemeSelect from '../themeSelect/ThemeSelect';

const NavBar = () => 
        <nav>
            <h1>HIKARI mental arithmetic</h1>
            <div className="global-settings">
                <LanguageSelect />
                <ThemeSelect />
                <AccountCircleIcon className='icon' />
            </div>
        </nav>

export default NavBar