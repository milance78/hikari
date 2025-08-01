import './RangeInput.scss'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { updateRange } from '../../redux/features/parametersSlice';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { RootState } from '../../redux/store';

const RangeInput = () => {

    const dispatch = useAppDispatch();
    const { range } = useAppSelector((state: RootState) => state.parameters);

    return <FormControl className='select'>
        <InputLabel
            sx={{ fontSize: '17px' }}>
            Range
        </InputLabel>
        <Select
            className='select'
            value={range}
            label="Range"
            sx={{ fontSize: '17px' }}
            onChange={(ev: any) =>
                dispatch(updateRange(ev.target.value))}>
            <MenuItem value={20}>20</MenuItem>
            <MenuItem value={18}>18</MenuItem>
            <MenuItem value={16}>16</MenuItem>
            <MenuItem value={14}>14</MenuItem>
            <MenuItem value={12}>12</MenuItem>
            <MenuItem value={8}>8</MenuItem>
            <MenuItem value={4}>4</MenuItem>
        </Select>
    </FormControl>
}

export default RangeInput