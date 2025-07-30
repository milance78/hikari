import React from 'react'
import './ScoreList.scss'
import { useAppSelector } from '../../redux/store';
import CorrectAnswerIcon from '@mui/icons-material/Done';
import IncorrectAnswerIcon from '@mui/icons-material/Close';

const ScoreList = () => {
    
const { scoreList } = useAppSelector((state) => state.score);

 const displayScoreList = scoreList.map(
        (answerIsTrue, i) => <div
         key={i}
         className={answerIsTrue
         ? 'single-result green'
        : 'single-result red'}>
            <>{i + 1}:</> 
            <>{answerIsTrue ? 
            <CorrectAnswerIcon className='icon'/> : 
            <IncorrectAnswerIcon className='icon'/>}</>
        </div>
    )

  return (
    <div className='score-list'>
        {displayScoreList}
    </div>
  )
}

export default ScoreList