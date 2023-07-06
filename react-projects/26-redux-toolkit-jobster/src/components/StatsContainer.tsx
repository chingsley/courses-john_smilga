import StatItem from './StatItem';
import { useSelector } from 'react-redux';
import { FaSuitcaseRolling, FaCalendarCheck, FaBug } from 'react-icons/fa';
import { StatsContainerWrapper } from '../assets/wrappers';
import { RootState } from '../app/store';
import { IDefaultJobStats } from '../types/jobs';

const StatsContainer = () => {
  const { stats } = useSelector((store: RootState) => store.allJobs);

  const defaultStats = [
    {
      title: 'pending applications',
      count: (stats as IDefaultJobStats).pending || 0,
      icon: <FaSuitcaseRolling />,
      color: '#e9b949',
      bcg: '#fcefc7',
    },
    {
      title: 'interviews scheduled',
      count: (stats as IDefaultJobStats).interview || 0,
      icon: <FaCalendarCheck />,
      color: '#647acb',
      bcg: '#e0e8f9',
    },
    {
      title: 'jobs declined',
      count: (stats as IDefaultJobStats).declined || 0,
      icon: <FaBug />,
      color: '#d66a6a',
      bcg: '#ffeeee',
    },
  ];
  return (
    <StatsContainerWrapper>
      {defaultStats.map((item, index) => {
        return <StatItem key={index} {...item} />;
      })}
    </StatsContainerWrapper>
  );
};

export default StatsContainer;