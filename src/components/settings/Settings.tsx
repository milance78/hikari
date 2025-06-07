import './Settings.scss'
import IntervalInput from '../intervalInput/IntervalInput';
import RangeInput from '../rangeInput/RangeInput';
import SoundSetup from '../soundSetup/SoundSetup';

import RoundsInput from '../roundsInput/RoundsInput';

const Settings = () =>{
  
  return <div className='settings'>
    <SoundSetup />
    <IntervalInput />
    <RangeInput />
    <RoundsInput />
  </div>
}
export default Settings