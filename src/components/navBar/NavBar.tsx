import React from 'react'
import './NavBar.scss'
import LanguageIcon from '@mui/icons-material/Language';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const NavBar = () => {
    return (
        <nav>
            <h1>HIKARI mental arithmetic</h1>
            <div className="global-settings">
                <LanguageIcon className='icon'/>
                <ColorLensIcon className='icon'/>
                <AccountCircleIcon className='icon'/>
            </div>


        </nav>
    )
}

export default NavBar