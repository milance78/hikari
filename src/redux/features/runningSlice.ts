import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface State {
  resultImage: string;
  inputValue: string;
  displayedNumber: null | number;
  currentArray: number[];
  isRunning: boolean;
  gameCourse: string;
  sessionOver: boolean;
  progression: number
}

const initialState: State = {
  resultImage: '',
  inputValue: '',
  displayedNumber: null,
  currentArray: [],
  isRunning: false,
  gameCourse: 'setup',
  sessionOver: false,
  progression: 0
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
    setGameCourse: (state: State, action: PayloadAction<string>) => ({
      ...state,
      gameCourse: action.payload
    }),
    setSessionOver: (state: State, action: PayloadAction<boolean>) => ({
      ...state,
      sessionOver: action.payload
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

export const { setResultImage, setDisplayedNumber, setCurrentArray, setGameCourse, setSessionOver, incrementProgression, resetProgression } = runningSlice.actions
export default runningSlice.reducer