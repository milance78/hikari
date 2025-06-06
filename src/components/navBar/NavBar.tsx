import './NavBar.scss'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LanguageSelect from '../languageSelect/LanguageSelect';
import ThemeSelect from '../themeSelect/ThemeSelect';
import { useAppSelector } from '../../redux/store';

const NavBar = () => {

    const { theme } = useAppSelector(state => state.parameters)

    return (
        <nav className={theme === 'blue' ? 'blue' : ''}>
            <h1>HIKARI mental arithmetic</h1>
            <div className="global-settings">
                <LanguageSelect />
                <ThemeSelect />
                <AccountCircleIcon className='icon' />
            </div>
        </nav>
    )
}

export default NavBar