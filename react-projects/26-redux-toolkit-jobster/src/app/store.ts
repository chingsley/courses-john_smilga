import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import userSlice from '../features/user/userSlice';
import jobSlice from '../features/job/jobSlice';
import allJobsSlice from '../features/allJobs/allJobsSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userSlice,
    job: jobSlice,
    allJobs: allJobsSlice
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
