import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface State {
  blankDisplay: boolean;
  resultImage: string;
  inputValue: string;
  displayedNumber: null | number;
  currentArray: number[];
  numbersRunning: boolean;
  roundStarted: boolean;
  gameCourse: string;
  progression: number;
}

const initialState: State = {
  blankDisplay: false,
  resultImage: '',
  inputValue: '',
  displayedNumber: null,
  currentArray: [],
  numbersRunning: false,
  roundStarted: false,
  gameCourse: 'setup',
  progression: 0,
}

export const runningSlice = createSlice({
  name: 'running',
  initialState: initialState,
  reducers: {
    handleBlankDisplay: (state: State, action: PayloadAction<boolean>) => ({
      ...state,
      blankDisplay: action.payload
    }),
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
    setNumbersRunning: (state: State, action: PayloadAction<boolean>) => ({
      ...state,
      numbersRunning: action.payload
    }),
    setRoundStarted: (state: State, action: PayloadAction<boolean>) => ({
      ...state,
      roundStarted: action.payload,
    }),
    setGameCourse: (state: State, action: PayloadAction<string>) => ({
      ...state,
      gameCourse: action.payload
    }),
    incrementProgression: (state: State) => ({
      ...state,
      progression: state.progression + 1
    }),
    resetProgression: (state: State) => ({
      ...state,
      progression: 0
    }),
  },
});

export const {
  handleBlankDisplay,
  setResultImage,
  setDisplayedNumber,
  setCurrentArray,
  setGameCourse,
  incrementProgression,
  resetProgression,
  setNumbersRunning,
  setRoundStarted,
} = runningSlice.actions
export default runningSlice.reducer