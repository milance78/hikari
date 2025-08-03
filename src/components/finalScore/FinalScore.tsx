import { useRef } from 'react';
import { restart } from '../../functions/gameCourseFunctions';
import ScoreList from '../scoreList/ScoreList';
import './FinalScore.scss'
import RestartIcon from '@mui/icons-material/Replay';


const FinalScore = () => {
    const restartRef = useRef<HTMLButtonElement>(null)

    return <div className='final-score'>
        <button
            ref={restartRef}
            onClick={() => restart()}
            autoFocus
        >
            <RestartIcon
                className='restart'
            />
        </button>
        <ScoreList />
    </div>
}

export default FinalScore