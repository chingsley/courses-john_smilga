import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';


import {
  addUserToLocalStorage,
  getUserFromLocalStorage,
  removeUserFromLocalStorage,
} from '../../utils/localStorage';

import {
  loginUserThunk,
  registerUserThunk,
  updateUserThunk,
  clearStoreThunk,
} from './userThunk';
import { IState } from "../../types/state";
import { IUser } from "../../types/user";

const initialState: IState = {
  isLoading: false,
  isSidebarOpen: false,
  user: getUserFromLocalStorage()
};

export const registerUser = createAsyncThunk('/user/registerUser', async (user: IUser, thunkAPI) => {
  return registerUserThunk('/auth/register', user, thunkAPI);
});


export const loginUser = createAsyncThunk('/user/loginUser', async (user: IUser, thunkAPI) => {
  return loginUserThunk('/auth/login', user, thunkAPI);
});

export const updateUser = createAsyncThunk('/user/updateUser', async (user: IUser, thunkAPI) => {
  return updateUserThunk('/auth/updateUser', user, thunkAPI);
});

export const clearStore = createAsyncThunk('user/clearStore', clearStoreThunk);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
    logoutUser: (state, { payload }) => {
      state.user = null;
      state.isSidebarOpen = false;
      removeUserFromLocalStorage();
      if (payload) {
        toast.success(payload);
      }
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = false;
      })
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        const { user } = payload;
        state.isLoading = false;
        state.user = user;
        addUserToLocalStorage(user);
        toast.success(`Welcome ${user.name}`);
      })
      .addCase(registerUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload as string);
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        const { user } = payload;
        state.isLoading = false;
        state.user = user;
        addUserToLocalStorage(user);

        toast.success(`Welcome Back ${user.name}`);
      })
      .addCase(loginUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload as string);
      })
      .addCase(updateUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateUser.fulfilled, (state, { payload }) => {
        const { user } = payload;
        state.isLoading = false;
        state.user = user;
        addUserToLocalStorage(user);

        toast.success(`User Updated!`);
      })
      .addCase(updateUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload as string);
      })
      .addCase(clearStore.rejected, () => {
        toast.error('There was an error..');
      });
  }
});

export const { toggleSidebar, logoutUser } = userSlice.actions;
export default userSlice.reducer;
