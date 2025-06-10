
import './CurrentResult.scss'
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import { useAppSelector } from '../../redux/store';

const CurrentResult = () => {

    const { trueAnswers, falseAnswers } = useAppSelector(state => state.score)

    return (
        <section className={'current-result'}>
            <div className="result-display">
                <DoneIcon className='true-icon' />
                <div>{trueAnswers}</div>
            </div>
            <div className="result-display">
                <CloseIcon className='false-icon' />
                <div>{falseAnswers}</div>
            </div>
        </section>
    )
}

export default CurrentResult