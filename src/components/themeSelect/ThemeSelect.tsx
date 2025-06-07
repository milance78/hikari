import { useEffect, useRef, useState } from 'react'
import './ThemeSelect.scss'
import ColorLensIcon from '@mui/icons-material/ColorLens';
import blueColorImage from '../../img/blueColor.png';
import violetColorImage from '../../img/violetColor.png';
import creeperImage from '../../img/creeper.png'
import { Theme, blueTheme, minecraftTheme, violetTheme } from '../../data';
import { useAppDispatch } from '../../redux/store';
import { updateBgImgClassName } from '../../redux/features/parametersSlice';


const ThemeSelect = () => {

  const [visible, setVisible] = useState(false);
  const themesElement = useRef<HTMLDivElement | null>(null);
  const dispatch = useAppDispatch();

  useEffect(() => {
    window.addEventListener('click', (ev: any) => {
      themesElement.current &&
        !themesElement.current.contains(ev.target) && setVisible(false)
    });
  }, []);

  const updateTheme = (theme: Theme) => {
    const root = document.querySelector(':root') as HTMLElement;
    if (root) {
      root.style.setProperty('--bg', theme.background);
      root.style.setProperty('--primary', theme.primary);
      root.style.setProperty('--other', theme.otherBg);
    }
    theme.name === 'Minecraft'
    ? dispatch(updateBgImgClassName('minecraft'))
    : dispatch(updateBgImgClassName(''))
  }

  

  return (
    <div className='theme-select'
      ref={themesElement}>
      <ColorLensIcon className='icon'
        onClick={() => setVisible(prev => !prev)} />
      {visible && <ul className="options-container">
        <li className='option'
          onClick={() => updateTheme(blueTheme)}>
          <img src={blueColorImage} alt="blue" />
          {blueTheme.name}
        </li>
        <li className='option'
          onClick={() => updateTheme(violetTheme)}>
          <img src={violetColorImage} alt="violet" />
          {violetTheme.name}
        </li>
        <li className='minecraft'
          onClick={() => updateTheme(minecraftTheme)}>
          <img src={creeperImage} alt="minecraft" />
          {minecraftTheme.name}
        </li>
        
      </ul>}
    </div>
  )
}

export default ThemeSelect