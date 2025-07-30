import React from 'react'
import './Quit.scss'
import QuitIcon from '@mui/icons-material/PowerSettingsNew';
import { useState } from 'react';
import { Button } from '@mui/material';
import { restart } from '../../functions/gameCourseFunctions';

const Quit = () => {

    const [dialogBoxVisible, setDialogBoxVisible] = useState(false);

    return (
        <div className='quit'
            onMouseEnter={() => setDialogBoxVisible(true)}
            onMouseLeave={() => setDialogBoxVisible(false)}>
            <QuitIcon
                className='quit-icon'
            />
            {dialogBoxVisible &&
                <div className="dialog-box">
                    <Button color='inherit'
                        onClick={() => restart()}>
                        restart
                    </Button>
                </div>}

        </div>
    )
}

export default Quit