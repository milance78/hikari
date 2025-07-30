import { useEffect, useRef } from 'react';
import { restart } from '../../functions/gameCourseFunctions';
import ScoreList from '../scoreList/ScoreList';
import './FinalScore.scss'
import RestartIcon from '@mui/icons-material/Replay';


const FinalScore = () => {
    const restartRef = useRef<HTMLButtonElement>(null)

    useEffect(() => {
        restartRef.current &&
            restartRef.current.focus();
    }, []);

    return <div className='final-score'>
        <button
            ref={restartRef}
            onClick={() => restart()}
        >
            <RestartIcon
                className='restart'
            />
        </button>
        <ScoreList />
    </div>
}

export default FinalScore