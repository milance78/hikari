import React, { useEffect, useRef, useState } from 'react'
import './LanguageSelect.scss'
import LanguageIcon from '@mui/icons-material/Language';
import englishFlag from '../../img/englishFlag.png'
import serbianFlag from '../../img/serbianFlag.png'

const LanguageSelect = () => {

  const [visible, setVisible] = useState(false);
  const languagesElement = useRef<HTMLDivElement | null>(null);
  useEffect(() => {   
    window.addEventListener('click', (ev: any) => { 
      languagesElement.current &&
      !languagesElement.current.contains(ev.target) && setVisible(false)

    });
  }, []);

  return (
    <div className='language-select' ref={languagesElement}>
      <LanguageIcon className='icon'
        onClick={() => setVisible(prev => !prev)} />
      {visible
        && <ul  className="options-container">
          <li className='option'>
            <img src={englishFlag} alt="english flag" />
            EN
          </li>
          <li className='option'>
            <img src={serbianFlag} alt="serbian flag" />
            SR
          </li>
        </ul>}
    </div>
  )
}

export default LanguageSelect