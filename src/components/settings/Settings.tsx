import React, { useState } from 'react'
import './Settings.scss'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { Parameters } from '../../App'
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import { IScore } from '../../App';

interface IProps {
  parameters: Parameters;
  setParameters: React.Dispatch<React.SetStateAction<Parameters>>;
  reference: React.Ref<HTMLDivElement>;
}

const Settings: React.FC<IProps> = ({ parameters, setParameters, reference }) => {

  return (
    <div className='settings'
      ref={reference}>

      <div className="sound"
        onClick={() => setParameters(
          prev => ({
            ...prev,
            soundOn: !prev.soundOn
          })
        )}>
        {
          parameters.soundOn
            ? <VolumeUpIcon className='sound-icon' />
            : <VolumeOffIcon className='sound-icon' />
        }
      </div>

      <FormControl className='select'>
        <InputLabel
          sx={{ fontSize: '17px' }}
          color='secondary'>
          Interval
        </InputLabel>
        <Select   
          value={parameters.interval}
          label="Interval"
          sx={{ fontSize: '17px' }}
          onChange={(ev: any) => {
            setParameters(prev => ({
              ...prev,
              interval: ev.target.value
            }))
          }}
          color='secondary'>
          <MenuItem value={1000}>1 sec</MenuItem>
          <MenuItem value={900}>0.9 sec</MenuItem>
          <MenuItem value={800}>0.8 sec</MenuItem>
          <MenuItem value={600}>0.7 sec</MenuItem>
          <MenuItem value={400}>0.6 sec</MenuItem>
        </Select>
      </FormControl> 
      <FormControl className='select'>
        <InputLabel
          sx={{ fontSize: '17px' }}
          color='secondary'>
          Range
        </InputLabel>
        <Select
          className='select'
          value={parameters.range}
          label="Range"
          sx={{ fontSize: '17px' }}
          onChange={(ev: any) => {
            setParameters(prev => ({
              ...prev,
              range: ev.target.value
            }))
          }}
          color='secondary'>
          <MenuItem value={20}>20</MenuItem>
          <MenuItem value={18}>18</MenuItem>
          <MenuItem value={16}>16</MenuItem>
          <MenuItem value={14}>14</MenuItem>
          <MenuItem value={12}>12</MenuItem>
          <MenuItem value={8}>8</MenuItem>
          <MenuItem value={4}>4</MenuItem>
        </Select>
      </FormControl>

    </div>
  )
}

export default Settings