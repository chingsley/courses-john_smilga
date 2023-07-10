import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Job from './Job';
import Loading from './Loading';
import { getAllJobs } from '../features/allJobs/allJobsSlice';
import PageBtnContainer from './PageBtnContainer';
import { AppDispatch, RootState } from '../app/store';
import { JobsContainerWrapper } from '../assets/wrappers';

const JobsContainer = () => {
  const {
    jobs,
    isLoading,
    page,
    totalJobs,
    numOfPages,
    filterState: {
      search,
      searchStatus,
      searchType,
      sort,
    }
  } = useSelector((store: RootState) => store.allJobs);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllJobs(''));
  }, [page, search, searchStatus, searchType, sort]);

  if (isLoading) {
    return <Loading />;
  }

  if (jobs.length === 0) {
    return (
      <JobsContainerWrapper>
        <h2>No jobs to display...</h2>
      </JobsContainerWrapper>
    );
  }

  return (
    <JobsContainerWrapper>
      <h5>
        {totalJobs} job{jobs.length > 1 && 's'} found
      </h5>
      <div className="jobs">
        {jobs.map((job) => {
          return <Job key={job._id} {...job} />;
        })}
      </div>
      {numOfPages > 1 && <PageBtnContainer />}
    </JobsContainerWrapper>
  );
};

export default JobsContainer;