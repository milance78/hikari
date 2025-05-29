import './Score.scss'
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import { RootState, useAppSelector } from '../../redux/store';

const Score = () => {

  const { trueAnswers, falseAnswers } = useAppSelector((state: RootState) => state.score)

  return (
    <div className="score">
      <div className="true-answers score-display">
        <DoneIcon className='true-icon' /> {trueAnswers}
      </div>
      <div className="false-answers score-display">
        <CloseIcon className='false-icon' /> {falseAnswers}
      </div>
    </div>
  )
}

export default Score