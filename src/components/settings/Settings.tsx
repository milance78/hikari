import './Settings.scss'
import IntervalInput from '../intervalInput/IntervalInput';
import RangeInput from '../rangeInput/RangeInput';
import SoundSetup from '../soundSetup/SoundSetup';
import { useAppSelector } from '../../redux/store';

const Settings = () => {
  const { theme } = useAppSelector(state => state.parameters)

  return <div className={theme === 'blue' ?'settings blue' :'settings'}>
    <SoundSetup />
    <IntervalInput />
    <RangeInput />
  </div>
}

export default Settings