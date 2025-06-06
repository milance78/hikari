import React, { useEffect, useRef, useState } from 'react'
import './ThemeSelect.scss'
import ColorLensIcon from '@mui/icons-material/ColorLens';
import blueColor from '../../img/blueColor.png';
import violetColor from '../../img/violetColor.png';
import { useDispatch } from 'react-redux';
import { updateTheme } from '../../redux/features/parametersSlice';
import { useAppSelector } from '../../redux/store';


const ThemeSelect = () => {

  const dispatch = useDispatch();
  const { theme } = useAppSelector(store => store.parameters);

  const [visible, setVisible] = useState(false);
  const colorsElement = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    window.addEventListener('click', (ev: any) => {
      colorsElement.current &&
        !colorsElement.current.contains(ev.target) && setVisible(false)
    });
  }, []);

  return (
    <div className={`theme-select ${theme}`}
      ref={colorsElement}>
      <ColorLensIcon className='icon'
        onClick={() => setVisible(prev => !prev)} />
      {visible && <ul className="options-container">
        <li className='option'
          onClick={() => dispatch(updateTheme('violet'))}>
          <img src={violetColor} alt="violet color" />
          Violet
        </li>
        <li className='option'
          onClick={() => dispatch(updateTheme('blue'))}>
          <img src={blueColor} alt="blue color" />
          Blue
        </li>
      </ul>}
    </div>
  )
}

export default ThemeSelect