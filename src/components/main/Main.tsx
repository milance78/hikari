/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react'
import './Main.scss'
import NumbersDisplay from '../numbersDisplay/NumbersDisplay'
import ResultInput from '../resultInput/ResultInput'
import { useAppDispatch } from '../../redux/store'
import { disableInput, enableButton } from '../../redux/features/disabledSlice'
import { useButtonRef } from '../../contexts/buttonRefContext'

const Main = () => {

  const dispatch = useAppDispatch();
  const startButtonRef = useButtonRef();

  const disableInputAndMoveFocus = async () => {
    dispatch(disableInput());
    dispatch(enableButton());
    await Promise.resolve();
    startButtonRef.current?.focus();
  }

  // initially focusing on start button and disabling input at onload
  useEffect(() => {
    disableInputAndMoveFocus();
  }, []);

  return (
    <section className='main'>
      <NumbersDisplay />
      <ResultInput />
    </section>
  )
}

export default Main