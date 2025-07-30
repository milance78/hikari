import { configureStore } from '@reduxjs/toolkit'
import parametersReducer from './features/parametersSlice'
import scoreReducer from './features/scoreSlice'
import runningReducer from './features/runningSlice'
import disabledReducer from './features/disabledSlice'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

export const store = configureStore({
  reducer: {
    parameters: parametersReducer,
    score: scoreReducer,
    running: runningReducer,
    disabled: disabledReducer
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector;