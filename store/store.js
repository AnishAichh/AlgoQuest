import { configureStore } from '@reduxjs/toolkit';
import questionReducer from '../src/features/questionSlice';

export const store = configureStore({
    reducer: {
        questions: questionReducer,
    },
});

export default store;
