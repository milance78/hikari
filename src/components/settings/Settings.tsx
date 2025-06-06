import './Settings.scss'
import IntervalInput from '../intervalInput/IntervalInput';
import RangeInput from '../rangeInput/RangeInput';
import SoundSetup from '../soundSetup/SoundSetup';
import { useAppSelector } from '../../redux/store';
import RoundsInput from '../roundsInput/RoundsInput';

const Settings = () => {
  const { theme } = useAppSelector(state => state.parameters)

  return <div className={`settings ${ theme }`}>
    <SoundSetup />
    <IntervalInput />
    <RangeInput />
    <RoundsInput />
  </div>
}

export default Settings