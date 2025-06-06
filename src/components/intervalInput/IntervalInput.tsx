import './IntervalInput.scss'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { updateInterval } from '../../redux/features/parametersSlice';

const IntervalInput = () => {

    const dispatch = useAppDispatch();
    const { interval, theme } = useAppSelector(state => state.parameters);

    return (
        <FormControl className='select'>
            <InputLabel
                sx={{ fontSize: '17px' }}
                color={theme === 'violet' ? 'secondary' : 'info'}>
                Interval
            </InputLabel>
            <Select
                value={interval}
                label="Interval"
                sx={{ fontSize: '17px' }}
                onChange={(ev: any) =>
                    dispatch(updateInterval(ev.target.value))}
                color={theme === 'violet' ? 'secondary' : 'info'}>
                <MenuItem value={3000}>3 sec</MenuItem>
                <MenuItem value={2000}>2 sec</MenuItem>
                <MenuItem value={1500}>1.5 sec</MenuItem>
                <MenuItem value={1000}>1 sec</MenuItem>
                <MenuItem value={900}>0.9 sec</MenuItem>
                <MenuItem value={800}>0.8 sec</MenuItem>
                <MenuItem value={700}>0.7 sec</MenuItem>
                <MenuItem value={600}>0.6 sec</MenuItem>
            </Select>
        </FormControl>
    )
}

export default IntervalInput