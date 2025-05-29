import { useAppDispatch, useAppSelector } from '../../redux/store';
import './SoundSetup.scss'
import { soundOnOff } from '../../redux/features/parametersSlice';
import { RootState } from '../../redux/store';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';

const SoundSetup = () => {

  const dispatch = useAppDispatch();
  const { soundOn } = useAppSelector((state: RootState) => state.parameters);

  return (
    <div className="sound"
      onClick={() => dispatch(soundOnOff())}>
      {
        soundOn
          ? <VolumeUpIcon className='sound-icon' />
          : <VolumeOffIcon className='sound-icon' />
      }
    </div>
  )
}

export default SoundSetup