import StatItem from './StatItem';
import { useSelector } from 'react-redux';
import { FaSuitcaseRolling, FaCalendarCheck, FaBug } from 'react-icons/fa';
import { StatsContainerWrapper } from '../assets/wrappers';
import { RootState } from '../app/store';

const StatsContainer = () => {
  const { stats } = useSelector((store: RootState) => store.allJobs);
  return (
    <div>StatsContainer</div>
  );
};

export default StatsContainer;