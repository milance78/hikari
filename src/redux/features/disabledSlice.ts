import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    buttonDisabled: false,
    inputDisabled: true,
}

export const disabledSlice = createSlice({
    name: 'disabled',
    initialState: initialState,
    reducers: {
        disableButton: state => ({
            ...state,
            buttonDisabled: true
        }),
        enableButton: state => ({
            ...state,
            buttonDisabled: false
        }),
        disableInput: state => ({
            ...state,
            inputDisabled: true
        }),
        enableInput: state => ({
            ...state,
            inputDisabled: false
        }),    
    },
});

export const { disableButton, enableButton, disableInput, enableInput } = disabledSlice.actions
export default disabledSlice.reducer