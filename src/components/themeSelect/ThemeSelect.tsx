import { useEffect, useRef, useState } from 'react'
import './ThemeSelect.scss'
import ColorLensIcon from '@mui/icons-material/ColorLens';
import blueColorImage from '../../img/blueColor.png';
import violetColorImage from '../../img/violetColor.png';
import { Theme, blueTheme, violetTheme } from '../../data';


const ThemeSelect = () => {

  const [visible, setVisible] = useState(false);
  const themesElement = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    window.addEventListener('click', (ev: any) => {
      themesElement.current &&
        !themesElement.current.contains(ev.target) && setVisible(false)
    });
  }, []);

  const updateTheme = (theme: Theme) => {
    const root = document.querySelector(':root') as HTMLElement;
    if (root) {
      theme.background && root.style.setProperty('--bg', theme.background);
      root.style.setProperty('--primary', theme.primary);
    }
  }

  return (
    <div className='theme-select'
      ref={themesElement}>
      <ColorLensIcon className='icon'
        onClick={() => setVisible(prev => !prev)} />
      {visible && <ul className="options-container">
        <li className='option'
          onClick={() => updateTheme(blueTheme)}>
          <img src={blueColorImage} alt="blue color" />
          Blue
        </li>
        <li className='option'
          onClick={() => updateTheme(violetTheme)}>
          <img src={violetColorImage} alt="violet color" />
          Violet
        </li>
      </ul>}
    </div>
  )
}

export default ThemeSelect