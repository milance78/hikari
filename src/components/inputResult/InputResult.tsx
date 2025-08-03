import './InputResult.scss'
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { setInputValue } from '../../redux/features/runningSlice';
import { TextField } from '@mui/material';
import { useInputRef } from '../../contexts/inputRefContext';

const InputResult = () => {

  const { inputValue } = useAppSelector((state) => state.running);
  const { inputDisabled } = useAppSelector((state) => state.disabled);
  const dispatch = useAppDispatch();
  const resultInputRef = useInputRef();

  return (
      <TextField
        type='number'
        disabled={inputDisabled}
        value={inputValue}
        className='result-input'
         onChange={ev => dispatch(setInputValue(ev.target.value))}
        inputRef={resultInputRef}/>
  
  )
}

export default InputResult