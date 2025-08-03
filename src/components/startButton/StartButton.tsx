import './StartButton.scss'
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { incrementProgression, setNumbersRunning, setResultImage, setRoundStarted } from '../../redux/features/runningSlice';
import { runNumbers } from '../../functions/displayFunctions';
import { useButtonRef } from '../../contexts/buttonRefContext';
import { useInputRef } from '../../contexts/inputRefContext';
import { disableButton } from '../../redux/features/disabledSlice';

const StartButton = () => {
  const { roundStarted } = useAppSelector((state) => state.running);
  const { buttonDisabled } = useAppSelector((state) => state.disabled);
  const dispatch = useAppDispatch();
  const startButtonRef = useButtonRef();
  const resultInputRef = useInputRef();

  const startNextHandler = () => {
    dispatch(setNumbersRunning(true));
    dispatch(incrementProgression());
    dispatch(setRoundStarted(true));
    dispatch(disableButton());
    // erasing image
    dispatch(setResultImage(''));
    //the focus needs to be put on the input element only after the numbers array gets fully iterated, that is why the input element needs to be passed into the iterating function. As useContext cannot be dispatched in TS file, the only way is to pass it as a function parameter
    resultInputRef.current
      && runNumbers(resultInputRef.current);
  }
  return (
    <>
      <button
        autoFocus
        type='submit'
        ref={startButtonRef}
        className='start-button'
        disabled={buttonDisabled}
        onClick={startNextHandler}>{
          !roundStarted ? 'START' : 'NEXT'
        }</button>
    </>
  )
}

export default StartButton