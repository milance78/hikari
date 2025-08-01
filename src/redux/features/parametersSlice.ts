import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

const initialState = {
    interval: 600,
    range: 4,
    rounds: 5,
    soundOn: true,
    bgImgClassName: ''
}

export const parametersSlice = createSlice({
    name: 'parameters',
    initialState: initialState,
    reducers: {
        setSound: (state, action : PayloadAction<boolean>) => ({
            ...state,
            soundOn: action.payload
        }),
        updateInterval: 
        (state, action : PayloadAction<number>) => ({
                ...state,
                interval: action.payload        
        }),
        updateRange: 
        (state, action : PayloadAction<number>) => ({
                ...state,
                range: action.payload        
        }),
        updateRounds: 
        (state, action : PayloadAction<number>) => ({
                ...state,
                rounds: action.payload        
        }),
        updateBgImgClassName: 
        (state, action : PayloadAction<string>) => ({
                ...state,
                bgImgClassName: action.payload        
        }),         
    },
});

export const { setSound, updateInterval, updateRange, updateRounds, updateBgImgClassName } = parametersSlice.actions
export default parametersSlice.reducer