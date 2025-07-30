import './NumbersDisplay.scss'
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { incrementProgression, setNumbersRunning, setResultImage, setRoundStarted } from '../../redux/features/runningSlice';
import { runNumbers } from '../../functions/displayFunctions';
import { useInputRef } from '../../contexts/inputRefContext';
import { useButtonRef } from '../../contexts/buttonRefContext';

const NumbersDisplay = () => {

  const { roundStarted, resultImage } = useAppSelector((state) => state.running);
  const { buttonDisabled } = useAppSelector((state) => state.disabled);
  const dispatch = useAppDispatch();

  const resultInputRef = useInputRef();
  const startButtonRef = useButtonRef();

  const displayValue = () => numbersRunning
    ? <div className='num'>{
      numbersRunning &&
      !blankDisplay && displayedNumber
    }</div>
    : resultImage
      ? <img src={resultImage} alt='result' />
      : null

  const { numbersRunning, blankDisplay, displayedNumber } = useAppSelector(state => state.running);

  const startNextHandler = () => {
    dispatch(setNumbersRunning(true));
    dispatch(incrementProgression());
    dispatch(setRoundStarted(true));
    // erasing image
    dispatch(setResultImage(''));
    resultInputRef.current
      && runNumbers(resultInputRef.current);
  }


  return (
    <div className='numbers-display'>
      <div className="display">
        {displayValue()}
      </div>
      {/* needed to use simple button because focus method is not good looking with MUI button */}
      <button
        ref={startButtonRef}
        className='start-button'
        disabled={buttonDisabled}
        onClick={startNextHandler}>{
          !roundStarted ? 'START' : 'NEXT'
        }</button>
    </div>
  )
}
export default NumbersDisplay