import React, { useRef, useState } from 'react'
import './SideSection.scss'
import Score from '../score/Score';
import Settings from '../settings/Settings';
import SettingsIcon from '@mui/icons-material/Settings';

const SideSection = () => {

    const [visible, setVisible] = useState(false);
      const settingsElement = useRef<HTMLDivElement>(null);
    
      const settingsVisibilityHandler = (ev: any) => {
        setVisible(prev => !prev)
      }

  return (
    <section className='side-section'>
      <Score />
      <div className="settings-container"
        ref={settingsElement}>
        <SettingsIcon
          className='cog-icon'
          onClick={settingsVisibilityHandler} />
        {visible
          && <Settings />}
      </div>
    </section>
  )
}

export default SideSection