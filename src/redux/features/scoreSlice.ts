import { createSlice } from '@reduxjs/toolkit'

const initialState =
{
    trueAnswers: 0,
    falseAnswers: 0
}

export const scoreSlice = createSlice({
    name: 'score',
    initialState: initialState,
    reducers: {
        incrementTrueScore: state => ({
            ...state,
            trueAnswers: state.trueAnswers + 1
        }),
        incrementFalseScore: state => ({
            ...state,
            falseAnswers: state.trueAnswers + 1
        }),
        reset: () => ({
            trueAnswers: 0,
            falseAnswers: 0
        })

    },
});

export const { incrementTrueScore, incrementFalseScore, reset } = scoreSlice.actions
export default scoreSlice.reducer