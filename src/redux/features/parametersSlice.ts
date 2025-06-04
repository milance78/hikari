import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

const initialState = {
    interval: 900,
    range: 12,
    soundOn: true,
    theme: 'purple'
}

export const parametersSlice = createSlice({
    name: 'parameters',
    initialState: initialState,
    reducers: {
        soundOnOff: state => ({
            ...state,
            soundOn: !state.soundOn
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
        updateTheme: (state, action : PayloadAction<string>) => ({
            ...state,
            theme: action.payload
        }),
            
    },
});

export const { soundOnOff, updateInterval, updateRange, updateTheme } = parametersSlice.actions
export default parametersSlice.reducer