import { IUser } from '../../types/user';
import customFetch, { checkForUnauthorizedResponse } from '../../utils/axios';
import { clearAllJobsState } from '../allJobs/allJobsSlice';
import { clearValues } from '../job/jobSlice';
import { logoutUser } from './userSlice';

interface LocalAPIError {
  response: {
    data: {
      msg: string;
    };
  };
}

const isLocalAPIError = (err: any): err is LocalAPIError => {
  return typeof err.response.data.msg === 'string';
};

export const registerUserThunk = async (url: string, user: IUser, thunkAPI: any) => {
  try {
    const resp = await customFetch.post(url, user);
    return resp.data;
  } catch (error: unknown) {
    if (isLocalAPIError(error)) {
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
    if (error instanceof Error) {
      return thunkAPI.rejectWithValue(error.message);
    }
    throw error;
  }
};

export const loginUserThunk = async (url: string, user: IUser, thunkAPI: any) => {
  try {
    const resp = await customFetch.post(url, user);
    return resp.data;
  } catch (error) {
    if (isLocalAPIError(error)) {
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
    if (error instanceof Error) {
      return thunkAPI.rejectWithValue(error.message);
    }
    throw error;
  }
};

export const updateUserThunk = async (url: string, user: IUser, thunkAPI: any) => {
  try {
    const resp = await customFetch.patch(url, user);
    return resp.data;
  } catch (error) {
    return checkForUnauthorizedResponse(error, thunkAPI);
  }
};

export const clearStoreThunk = async (message: string, thunkAPI: any) => {
  try {
    thunkAPI.dispatch(logoutUser(message));
    thunkAPI.dispatch(clearAllJobsState());
    thunkAPI.dispatch(clearValues());
    return Promise.resolve();
  } catch (error) {
    return Promise.reject();
  }
};
