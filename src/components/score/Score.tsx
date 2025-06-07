import './Score.scss'
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import { useAppSelector } from '../../redux/store';


const Score = () => {
  const { trueAnswers, falseAnswers } = useAppSelector(state => state.score)


  return (
    <section className={`score`}>
      <div className="score-display">
        <DoneIcon className='true-icon' />   
        <div className="trueScore">{trueAnswers}</div>
      </div>
      <div className="score-display">
        <CloseIcon className='false-icon' /> 
        <div className="falseScore">{falseAnswers}</div>
      </div>
    </section>
  )
}

export default Score