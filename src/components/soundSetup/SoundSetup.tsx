import { useAppDispatch, useAppSelector } from '../../redux/store';
import './SoundSetup.scss'
import { setSound } from '../../redux/features/parametersSlice';
import { RootState } from '../../redux/store';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';

const SoundSetup = () => {

  const dispatch = useAppDispatch();
  const { soundOn } = useAppSelector((state: RootState) => state.parameters);

  return (
    <div className="sound-setup"
      onClick={() => dispatch(
        soundOn
          ? setSound(false)
          : setSound(true))}>
      {
        soundOn
          ? <VolumeUpIcon className='sound-icon' />
          : <VolumeOffIcon className='sound-icon' />
      }
    </div>
  )
}

export default SoundSetup