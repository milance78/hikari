import { resetProgression, setGameCourse } from '../../redux/features/runningSlice';
import { resetScore, resetScoreList } from '../../redux/features/scoreSlice';
import { useAppDispatch } from '../../redux/store';
import './Score.scss'
import ReplayIcon from '@mui/icons-material/Replay';



const Score = () => {

    const dispatch = useAppDispatch();

    const replayHandler = () => {
        dispatch(setGameCourse('setup'));
        dispatch(resetScoreList());
              dispatch(resetScore());
        // setProgression(1);
        dispatch(resetProgression())
    }

    return <div className='score'>
        <h1>
            <ReplayIcon 
            className='replay' 
            onClick={replayHandler}/>
        </h1>
    </div>
}

export default Score