
import './CurrentScore.scss'
import CorrectIcon from '@mui/icons-material/Done';
import IncorrectIcon from '@mui/icons-material/Close';
import { useAppSelector } from '../../redux/store';

const CurrentScore = () => {

    const { trueAnswers, falseAnswers } = useAppSelector(state => state.score);

    return (
        <section className={'current-score'}>
            <div className="result-display">
                <CorrectIcon className='true-icon' />
                <div>{trueAnswers}</div>
            </div>
            <div className="result-display">
                <IncorrectIcon className='false-icon' />
                <div>{falseAnswers}</div>
            </div>
        </section>
    )
}

export default CurrentScore