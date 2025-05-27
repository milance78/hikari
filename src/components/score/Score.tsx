import React from 'react'
import './Score.scss'
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import { IScore } from '../../App';

interface IProps {
  score: IScore;
}

const Score: React.FC<IProps> = ({score}) => {
  return (
    <div className="score">
        <div className="true-answers score-display">
          <DoneIcon className='true-icon' /> {score.trueAnswers}
        </div>
        <div className="false-answers score-display">
          <CloseIcon className='false-icon' /> {score.falseAnswers}
        </div>
      </div>
  )
}

export default Score