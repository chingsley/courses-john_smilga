import customFetch, { checkForUnauthorizedResponse } from '../../utils/axios';

export const getAllJobsThunk = async (_: any, thunkAPI: any) => {
  const { page, filterState: {
    search, searchStatus, searchType, sort
  } } =
    thunkAPI.getState().allJobs;
  console.log('___', thunkAPI.getState());

  let url = `/jobs?status=${searchStatus}&jobType=${searchType}&sort=${sort}&page=${page}`;
  if (search) {
    url = url + `&search=${search}`;
  }

  try {
    const resp = await customFetch.get(url);
    return resp.data;
  } catch (error) {
    return checkForUnauthorizedResponse(error, thunkAPI);
  }
};

export const showStatsThunk = async (_: any, thunkAPI: any) => {
  try {
    const resp = await customFetch.get('/jobs/stats');

    return resp.data;
  } catch (error) {
    return checkForUnauthorizedResponse(error, thunkAPI);
  }
};