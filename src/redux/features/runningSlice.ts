import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface State {
  resultImage: string;
  inputValue: string;
  displayedNumber: null | number;
  currentArray: number[];
  isRunning: boolean;
}

const initialState: State = {
  resultImage: '',
  inputValue: '',
  displayedNumber: null,
  currentArray: [],
  isRunning: false,
}

export const runningSlice = createSlice({
  name: 'running',
  initialState: initialState,
  reducers: {
    setResultImage: (state: State, action: PayloadAction<string>) => ({
      ...state,
      resultImage: action.payload
    }),
    setDisplayedNumber: (state: State, action: PayloadAction<number | null>) => ({
      ...state,
      displayedNumber: action.payload
    }),
    setCurrentArray: (state: State, action: PayloadAction<number[]>) => ({
      ...state,
      currentArray: action.payload
    }),
  },
});

export const { setResultImage, setDisplayedNumber, setCurrentArray } = runningSlice.actions
export default runningSlice.reducer