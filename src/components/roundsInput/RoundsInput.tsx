import React from 'react'
import './RoundsInput.scss'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { useAppDispatch, useAppSelector } from '../../redux/store'
import { updateRounds } from '../../redux/features/parametersSlice'

const RoundsInput = () => {

  const { rounds } = useAppSelector(state => state.parameters);
  const dispatch = useAppDispatch();
  return (
    <FormControl className='select'>
      <InputLabel
        sx={{ fontSize: '17px' }}>
        Rounds
      </InputLabel>
      <Select
        value={rounds}
        label="Rounds"
        sx={{ fontSize: '17px' }}
        onChange={(ev: any) =>
          dispatch(updateRounds(ev.target.value))}>
        <MenuItem value={40}>40 rounds</MenuItem>
        <MenuItem value={30}>30 rounds</MenuItem>
        <MenuItem value={20}>20 rounds</MenuItem>
        <MenuItem value={10}>10 rounds</MenuItem>
        <MenuItem value={5}>5 rounds</MenuItem>
      </Select>
    </FormControl>
  )
}

export default RoundsInput