import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    questions: [
        { id: 1, title: 'Two sum', acceptance: "57.7%", difficulty: "Easy", status: 'unsolved' },
        { id: 2, title: 'Reverse string', acceptance: "57.7%", difficulty: "Medium", status: 'unsolved' },
        { id: 3, title: 'Sort the array', acceptance: "57.7%", difficulty: "Easy", status: 'unsolved' },
        { id: 4, title: 'Fix the Code', acceptance: "57.7%", difficulty: "Hard", status: 'unsolved' }
    ]
};

const questionSlice = createSlice({
    name: 'questions',
    initialState,
    reducers: {
        updateQuestionStatus(state, action) {
            const { questionId, status } = action.payload;
            const questionToUpdate = state.questions.find(question => question.id === questionId);
            if (questionToUpdate) {
                questionToUpdate.status = status;
            }
        }
    }
});

export const { updateQuestionStatus } = questionSlice.actions;

export const selectQuestionById = (state, questionId) =>
    state.questions.questions.find(question => question.id === questionId);

export default questionSlice.reducer;
