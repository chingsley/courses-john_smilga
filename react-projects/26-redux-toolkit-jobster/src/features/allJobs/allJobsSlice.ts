import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { getAllJobsThunk, showStatsThunk } from './allJobsThunk';
import { IJobListState, IJobFilterState } from '../../types/jobs';

const initialFiltersState: IJobFilterState = {
  search: '',
  searchStatus: 'all',
  searchType: 'all',
  sort: 'latest',
  sortOptions: ['latest', 'oldest', 'a-z', 'z-a'],
};

const initialState: IJobListState = {
  isLoading: false,
  jobs: [],
  totalJobs: 0,
  numOfPages: 1,
  page: 1,
  stats: {
    pending: 0,
    interview: 0,
    declined: 0,
  },
  monthlyApplications: [],
  filterState: initialFiltersState,
};

export const getAllJobs = createAsyncThunk('allJobs/getJobs', getAllJobsThunk);

export const showStats = createAsyncThunk('allJobs/showStats', showStatsThunk);

const allJobsSlice = createSlice({
  name: 'allJobs',
  initialState,
  reducers: {
    showLoading: (state) => {
      state.isLoading = true;
    },
    hideLoading: (state) => {
      state.isLoading = false;
    },
    // handleChange: (state, { payload: { name, value } }) => {
    //   state.page = 1;
    //   state[name as keyof typeof state] = value as never;
    // },
    handleFilterChange: (state: IJobListState, { payload: { name, value } }: { payload: { name: string, value: any; }; }) => {
      state.page = 1;
      state.filterState[name as keyof typeof state.filterState] = value;
    },
    clearFilters: (state) => {
      state.filterState = initialFiltersState;
    },
    changePage: (state, { payload }) => {
      state.page = payload;
    },
    clearAllJobsState: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllJobs.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllJobs.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.jobs = payload.jobs;
        state.numOfPages = payload.numOfPages;
        state.totalJobs = payload.totalJobs;
      })
      .addCase(getAllJobs.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload as string);
      })
      .addCase(showStats.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(showStats.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.stats = payload.defaultStats;
        state.monthlyApplications = payload.monthlyApplications;
      })
      .addCase(showStats.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload as string);
      });
  },
});

export const {
  showLoading,
  hideLoading,
  // handleChange,
  handleFilterChange,
  clearFilters,
  changePage,
  clearAllJobsState,
} = allJobsSlice.actions;

export default allJobsSlice.reducer;
