import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Score {
    trueAnswers: number;
    falseAnswers: number;
    scoreList: boolean[];
}

const initialState: Score =
{
    trueAnswers: 0,
    falseAnswers: 0,
    scoreList : [],
}

export const scoreSlice = createSlice({
    name: 'score',
    initialState: initialState,
    reducers: {
        incrementTrueScore: state => ({
            ...state,
            trueAnswers: state.trueAnswers + 1,
        }),
        incrementFalseScore: state => ({
            ...state,
            falseAnswers: state.falseAnswers + 1,
        }),
        resetScore: state => ({
            ...state,
            trueAnswers: 0,
            falseAnswers: 0,
        }),
        updateScoreList: (state, action: PayloadAction<boolean>) => ({
            ...state,
            scoreList: [ 
                ...state.scoreList,
                action.payload
            ],
        }),
        resetScoreList: state => ({
            ...state,
            scoreList: [],
        })

    },
});

export const { incrementTrueScore, incrementFalseScore, resetScore, resetScoreList, updateScoreList } = scoreSlice.actions
export default scoreSlice.reducer