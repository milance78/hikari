import './Parameters.scss'
import IntervalInput from '../intervalInput/IntervalInput';
import RangeInput from '../rangeInput/RangeInput';
import RoundsInput from '../roundsInput/RoundsInput';

const Parameters = () =>
  <div className='parameters'>
    <IntervalInput />
    <RangeInput />
    <RoundsInput />

  </div>

export default Parameters