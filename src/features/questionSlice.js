import { createSlice } from '@reduxjs/toolkit';
import img from '../assets/problems-img/image.png'

const initialState = {
    questions: [
        { id: 1, title: 'Two sum', solution: { img }, acceptance: "57.7%", difficulty: "Easy", status: 'unsolved' },
        { id: 2, title: 'reverse string', solution: { img }, acceptance: "57.7%", difficulty: "Medium", status: 'unsolved' },
        { id: 3, title: 'Sort the array', solution: { img }, acceptance: "57.7%", difficulty: "Easy", status: 'unsolved' },
        { id: 4, title: 'Fix the Code', solution: { img }, acceptance: "57.7%", difficulty: "Hard", status: 'unsolved' }
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
