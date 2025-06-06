import './Score.scss'
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import { useAppSelector } from '../../redux/store';

const Score = () => {

  const { theme } = useAppSelector(store => store.parameters);
  const { trueAnswers, falseAnswers } = useAppSelector(state => state.score)

  return (
    <section className={`score ${theme}`}>
      <div className="true-answers score-display">
        <DoneIcon className='true-icon' /> {trueAnswers}
      </div>
      <div className="false-answers score-display">
        <CloseIcon className='false-icon' /> {falseAnswers}
      </div>
    </section>
  )
}

export default Score