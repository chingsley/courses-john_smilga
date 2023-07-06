import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { StatsContainer, Loading, ChartsContainer } from '../../components';
import { showStats } from '../../features/allJobs/allJobsSlice';
import { AppDispatch, RootState } from '../../app/store';

const Stats = () => {
  const { isLoading, monthlyApplications } = useSelector(
    (store: RootState) => store.allJobs
  );
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(showStats(''));
  }, []);

  return (
    <>
      <StatsContainer />
      {monthlyApplications.length > 0 && <ChartsContainer />}
    </>
  );
};

export default Stats;