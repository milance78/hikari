import './Display.scss'
import Evaluation from '../evaluation/Evaluation'
import Numbers from '../numbers/Numbers';
import { useAppSelector } from '../../redux/store';

const Display = () => {

  const { numbersRunning } = useAppSelector(state => state.running);

  return <section className='display'>
    {numbersRunning
      ? <Numbers />
      : <Evaluation />}
  </section>

}

export default Display