import './Settings.scss'
import IntervalInput from '../intervalInput/IntervalInput';
import RangeInput from '../rangeInput/RangeInput';
import SoundSetup from '../soundSetup/SoundSetup';

const Settings = () =>
  <div className='settings'>
    <SoundSetup />
    <IntervalInput />
    <RangeInput />
  </div>

export default Settings